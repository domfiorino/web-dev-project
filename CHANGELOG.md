# Change Log
All notable changes to this project will be documented in this file.
 
This project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased] 


## [0.3.0] - 2022-11-09 
 
### Added
- 
### Changed
- 
 
## [0.2.0] - 2022-10-26 
 
### Added
- Parse initialization and separate Parse models for each class
- Home.js, HomeForm.js, HomeList.js, Duncan.js, DuncanForm.js, and DuncanList.js
- routing between Home.js and Duncan.js
- DuncanService.js is Parse Model for Dorm class
- Navigation.js to navigate between pages
- CSS Styling with styles.css
### Changed
- Main.js, Header.js, and Main.js reincorporated into new modules 
- Food.js turned into FoodService.js
 
## [0.1.0] - 2022-10-05
 
### Added
- foodsDuncan.json created to hold data for the menu items
- Food.js service to interact with local foodsDuncan.json data using axios
- Main.js contains parent component to Header.js
- Header.js contains child component to Main.js and parent to OrderForm.js
 