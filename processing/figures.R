# Loading some packages 
packages <- c('easypackages', 'tidyr', 'ggplot2', 'plyr', 'dplyr', 'scales', 'readxl', 'readr', 'purrr', 'stringr', 'PHEindicatormethods', 'rgdal', 'spdplyr', 'geojsonio', 'rmapshaper', 'jsonlite', 'rgeos', 'sp', 'sf', 'maptools', 'ggpol', 'magick', 'officer', 'leaflet', 'leaflet.extras', 'zoo', 'fingertipsR', 'nomisr', 'showtext', 'waffle')
install.packages(setdiff(packages, rownames(installed.packages())))
easypackages::libraries(packages)

# install.packages("waffle", repos = "https://cinc.rud.is")

# Custom fonts ####
#library(showtext)

# https://cran.rstudio.com/web/packages/showtext/vignettes/introduction.html
library(showtext)
## Loading Google fonts (https://fonts.google.com/)
font_add_google('Poppins', 'poppins')

font_add(family = "poppins", regular = "C:/Users/asus/AppData/Local/Microsoft/Windows/Fonts/Poppins-Regular.ttf")
font_add(family = "poppinsb", regular = "C:/Users/asus/AppData/Local/Microsoft/Windows/Fonts/Poppins-Bold.ttf")

showtext_auto(TRUE)