##PROJECT SETUP

Requirement - 

MySQL
NodeJS 9+


Steps to run the app locally :

** `npm i -g @angular/cli@7.3.7`

1. EXECUTE the SQL_DUMP.sql to create the database and the tables.
https://dba.stackexchange.com/questions/24371/how-to-import-a-sql-file-in-mysql

2. Open Terminal/CMD and run `npm i` to install the dependencies. (Project Folder)
3. Using Terminal change directory to /public `cd public/`
4. Run `npm i` to install dependencies of the frontend app.
5. Run `ng build` to build the Angular app, check if the dist/public folder is created in the public folder
5. Return back to project folder. (`cd ..`)
6. Run the command `npm run start`

This should bring up the app in `http://localhost:3000/`