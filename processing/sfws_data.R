library(easypackages)
libraries(c("tidyverse", 'jsonlite', 'stringi', 'fastDummies'))

raw_data <- read_excel("./sfws_action_plan_2022/raw_data/SFWS Action Plan May 2022 Update.xlsx")

# We need to transform this file into a table with binary fields for HIC and status complete.

transformed_df <- raw_data %>% 
  rename(title = ap_title,
         text = ap_text,
         latest_update = 'May 2022 Update',
         hic_ = hic_class) %>% 
  select(ap_number, title, text, success, partners, achieved, hic_, latest_update) %>% 
  mutate(status = substr(latest_update, 1, regexpr(":", latest_update, fixed = TRUE) - 1)) %>% 
  mutate(status = ifelse(status == 'Partially Complete', 'Incomplete', ifelse(status %in% c('complete', 'completed','Complete', 'Completed'), 'Complete', status))) %>% 
  filter(!is.na(status) & status != '') %>% 
  mutate(latest_update = str_trim(substr(latest_update, regexpr(":", latest_update, fixed = TRUE) + 1, nchar(latest_update)), side = 'both')) %>% 
  bind_cols(model.matrix(~ hic_ - 1, .)) 

# specify columns to turn into logical/boolean fields (true/false)
binary <- strsplit("hic_advocacy hic_build_sustain_capacity hic_deliver_cccc hic_gather_data hic_health_inequalities hic_integrated_approach hic_smokefree_environments hic_tackle_cheap_illicit_tob hic_working_partnership hic_yp_smokefree",
                   " ")[[1]]

for(b in binary) transformed_df[[b]] <- as.logical(transformed_df[[b]])

transformed_df %>% 
  toJSON() %>% 
  write_lines('./sfws_action_plan_2022/sfws_app/public/sfws_2022.json')

