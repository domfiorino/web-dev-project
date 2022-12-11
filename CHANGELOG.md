# Change Log
All notable changes to this project will be documented in this file.
 
This project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased] 

## [0.4.0] - 2022-12-07

### Added
- ChatSetup and LiveChat to enable Live Query components using @parse/react
- User and Admin accounts
- OrdersModule to display emails with their ordered items
- StripeService to load Stripe
- OrderItemService to create, read, and delete OrderItem class objects to parse
### Changed
- Duncan Menu & Form to add Stripe Checkout and submit order to back4app via OrderItem class
- Duncan Form to auto populate with logged in users email in Checkout

## [0.3.0] - 2022-11-09 
 
### Added
- Protected Routes for "/" and "/Duncan" - cannot be navigated to without authentication
- Protected routes redirect to the auth component
- User cannot route to auth if already logged in
- Placed authentication methods in separate service and user manually typing in URL to protected route will redirect if unauthenticated

### Changed
- Update navigation bar to be nested in <a> tags instead of being in a list
- Changed listing of items in DuncanForm to checkboxes
- Alert user that order has been submitted in DuncanForm
 
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
 
