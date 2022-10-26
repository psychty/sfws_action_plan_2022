library(easypackages)
libraries(c('readxl',"tidyverse", 'jsonlite', 'stringi', 'fastDummies'))

raw_data <- read_excel("C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/raw_data/SFWS Action Plan Clean October 2022 Update.xlsx")

# We need to transform this file into a table with binary fields for HIC and status complete.

unique(raw_data$`Original or extension`)

transformed_df <- raw_data %>% 
  rename(title = ap_title,
         text = ap_text,
         update_2020 = 'Jan 2020 update',
         update_2021 = 'February 2021 update',
         latest_update = 'August 2022 Update',
         hic_ = hic_class,
         og = 'Original or extension') %>% 
  select(ap_number, title, text, success, partners, achieved, hic_, update_2020, update_2021, latest_update, og) %>% 
  mutate(status = substr(latest_update, 1, regexpr(":", latest_update, fixed = TRUE) - 1)) %>% 
  mutate(status = ifelse(og == 'Extension' & is.na(status), 'Incomplete', ifelse(status == 'Partially Complete', 'Incomplete', ifelse(status %in% c('complete', 'completed','Complete', 'Completed'), 'Complete', status)))) %>% 
  filter(!is.na(status) & status != '') %>% 
  mutate(latest_update = str_trim(substr(latest_update, regexpr(":", latest_update, fixed = TRUE) + 1, nchar(latest_update)), side = 'both')) %>% 
  bind_cols(model.matrix(~ hic_ - 1, .)) 

# TODO # I am not sure how this will behave given the two extra update paragraphs available.
# It might be fine.

# specify columns to turn into logical/boolean fields (true/false)
binary <- strsplit("hic_advocacy hic_build_sustain_capacity hic_deliver_cccc hic_gather_data hic_health_inequalities hic_integrated_approach hic_smokefree_environments hic_tackle_cheap_illicit_tob hic_working_partnership hic_yp_smokefree",
                   " ")[[1]]

for(b in binary) transformed_df[[b]] <- as.logical(transformed_df[[b]])

hic_info <- read_csv('C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/raw_data/hic_info.csv')

transformed_df %>% 
  left_join(hic_info[c('hic_class', 'hic_title')], by = c('hic_' = 'hic_class')) %>% 
  toJSON() %>% 
  write_lines('C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/sfws_app/src/sfws_2022.json')

hic_info %>% 
  toJSON() %>% 
  write_lines('C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/sfws_app/src/hic.json')

transformed_df %>% 
  group_by(status) %>% 
  summarise(actions = n()) %>% 
  toJSON() %>% 
  write_lines('C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/sfws_app/src/progress.json')

transformed_df %>% 
  group_by(status) %>% 
  summarise(actions = n()) %>% 
  ungroup() %>% 
  pivot_wider(values_from = 'actions',
              names_from = 'status') %>% 
  mutate(Total = Complete + Incomplete) %>% 
  toJSON() %>% 
  write_lines('C:/Users/asus/OneDrive/Documents/Repositories/sfws_action_plan_2022/sfws_app/src/progress_summary.json')


