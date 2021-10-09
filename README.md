# Project Name

Mimi's Spectacular Digital To-Do List!

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

A TO-DO LIST ABOUT MY TO-DO LIST

TIME FRAME
===

- Hoping to get the base mode completed by Saturday. I'll have 3-4 hours each day. I would love to spend Monday exploring Bootstrap, branching, and other stretch goals.

PHASE ZERO
===

- spend some time creating an epic to-do list about my to-do list to get organized and prioritize

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

PHASE TWO: Adding database and connection
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
- When a Task is complete, its visual representation should change on the front end. The complete option should be  'checked off'. I want the completed button to change from one image to another. This will happen with some classes and an if/else statement when appending to the DOM.
- text color change as well? crossed out using text decoration in CSS
- capture the click ( dynamically created )
- run a function where an AJAX PUT req is sent to the server using this data id. 
- in the server, use SQL to update the boolean in the database. Use the koala repo as reference for this since I wasn't there for this during the group project.
- does it need to un-complete if user clicks it again? Or, since it's a to-do list, prob not. my checklists on iphone only go one way
- git commit

PHASE FIVE: Delete function
===
- add a delete button to the HTML in the GET, assign it a class
- capture delete button click (dynamically created) in the onReady
- create a function that sends an AJAX DELETE req to the server in the client using $(this).data( 'id' ) 
- in the server, delete the task row from the database using req.query.id
- get the updated array and displays it on the DOM
- git commit

FINAL PHASE of base mode:
===
- update database.sql file if any changes were made
- clean up the CSS
- git commit and submit assignment!