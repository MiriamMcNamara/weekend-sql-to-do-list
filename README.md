# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

A TO-DO LIST ABOUT MY TO-DO LIST

TIME FRAME
===

- Hoping to get the base mode completed by Saturday. I'll have 3-4 hours each day. I would love to spend Monday exploring Bootstrap, branching, and other stretch goals.

PHASE ONE: Basic Setup
(I'd like to do all of this without copy/pasting so that I can get the placement of everything in my head a little better)
===

- git init
- npm init --y
- npm install express pg, update start scripts "start": "node server/server.js"
- spin up server
    requires (express, app, bodyparser)
    uses (static files, bodyparser)
    globals (const port)
    spin up server (app.listen)
- serve index.html/scripts/styles/vendors within a public file within the server file
- source scripts in html
- .gitignore .DS_Store and node_modules
- test the server
- git commit

PHASE TWO: Adding database connection
===

- make sure you've npm installed pg
- create a "pool.js" in a modules folder in the server folder
- require pg
- make sure to export it ex: ```module.exports = pool```
- require it on the server ex: ```const pool = require( './modules/pool' );```
- create a database for the project.  Use the name `weekend-to-do-app`. It will need a primary key serial number, a text task, and a 'completed' boolean.
- make a database.sql file that includes all of your `CREATE TABLE` queries so instructors can re-create your database while testing your app.
- git commit

PHASE THREE: Interface/GET/POST
===

- allow a user to create a Task on the DOM with inputs and a button to submit the task.
- create a table for the to-do list that includes an option to 'Complete' (update) or 'Delete' (you guessed it) for each task
- capture the click event for the submit button in the onReady
- create a function that captures the user input and sends an AJAX POST req to the server
- input the new task into the db using a POST route on the server side
- create a GET function and route that gets all tasks from the database and displays them on the DOM.
- git commit

PHASE FOUR: Complete (update) function/Toggle class
===
- When a Task is complete, its visual representation should change on the front end. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
- text color & or background color of tasks *to show whether or not they have been completed*
- a checkmark put in like Amanda's pencils in Koala Holla could be cute, along with a color change? Or look into HTML checkbox function?
- put more thought into the specifics of what this looks like :)
- capture the click ( dynamically created ) and run a function where a class or two is toggled and an AJAX PUT req is sent to the server that updates the boolean in the database
- does it need to un-complete if user clicks it again?
- git commit

PHASE FIVE: Delete function
===
- capture delete button click (dynamically created) that deletes the row from the interface and sends an AJAX DELETE req to the server that deletes the task row from the database
- git commit

FINAL PHASE of base mode:
===
- update database.sql file if any changes were made
- clean up the CSS
- git commit and submit assignment!