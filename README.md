# PROJECT L-APP

Solution to the problem statement shared over email

## Getting Started - 

    These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisities
    MySQL Latest
    NodeJS 11

### Tech Stack 
    Frontend 
        1. Angular 7
        2. Observable Store for State Management
        3. Angular Material

    Maps API
        Google Geocoding API 
    
    Server
        1. Node JS
        2. Express
    
    Database
        MySQL

### Dependencies Installation 
    1. Navigate to project to folder and execute `npm i`
    2. Navigate to project_folder/public/ and execute `npm i` this will install Angular dependencies.


### Pre-run Settings

    1. Navigate to `./config` and edit the config.js file
        `
        database : {
            host : '127.0.0.1 / You can change if there's any other',
            user: '<YOUR DB USER>',
            password: '<YOUR DB PASSWORD>',
            port: '<PORT ON WHICH DB IS RUNNING>',
            database: 'LimeMaster (Don't Change)' 
        }`

    2. Import SQL_DUMP.sql into your local MYSQL DB. [HELP](https://dba.stackexchange.com/questions/24371/how-to-import-a-sql-file-in-mysql)

### Running the app

    Execute `npm run start` in the project folder.
    The application will be served at http://localhost:3000

## API 

### POSTMAN Collection
Download the Postman Collection from this location to run it in your local to get the API tests pre-loaded
`https://www.getpostman.com/collections/dd8cfa16a296a202c808` 
    
### GET : /users/<USER_ID>/bookings

    Suggest you to use 8 as a user id like http://localhost:3000/users/8/bookings to get all the bookings for the user with userid 8. 

### GET: /property/<property_id>/bookings

### USING THE APPLICATION FROM UI
    1. Provide user location access from the browser.

## SEARCH BOX

    1. Search box automatically call the MAPS API after 3000ms after user input is completed. 
    2. Type `Berlin` in the search box to see nearby properties and identify parts nearby user location
    3. Click book and use the above API's to see the booking.

### NOTES

    1. The user is hard-coded to 8 as the application doesn't implements session cookies. So, all bookings are done for the user 8 i.e. Kenna Donnelly.

## FURTHER DISCUSSION

    1. Drop mail to owner of the project.

