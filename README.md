# Project Name

Mimi's Spectacular Digital To-Do List!

## Description

- I completed the base mode in two days, about seven hours total. I wanted to spend any extra time I had Sunday and Monday exploring Bootstrap, branching, and other stretch goals. Although I spent some time exploring Bootstrap, I did not end up changing my styling and instead did two of the other stretch goals, the addition of the timestamp to completed tasks, and a SweetAlert popup to get confirmation when the delete button is hit. The screenshot in this readme reflects the base mode, not the stretch goals. 

- The base mode assignment was to create a to-do list that utilized the full stack, the full range of AJAX options (create, read, update, delete ), and the new SQL/database stuff we've been learning.

## Screen Shot
![Screenshot of ToDo List](ToDoAppScreenshot.png)

## Prerequisites

- Node.js
- install express and PG
- database and table created according to the database.sql file

## Installation

PHASE ZERO
===

- spend some time creating an epic to-do list about my to-do list to get organized and prioritize

PHASE ONE: Basic Setup
===
(I tried to do as much as possible of this without copy/pasting so that I can get the placement of everything in my head a little better)

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
- update the readme.md to get it ready to submit
- clean up/add comments where necessary
- clean up the CSS
- git commit and submit assignment!

STRETCH GOAL 0: Bootstrap
===
- I wanted to play around with Bootstrap but I got overwhelmed after watching a bunch of YouTube videos, go figure. :) I did not end up changing the styling of this project

STRETCH GOAL 1: Add Delete Function Confirmation with SweetAlert, and figure out branching!
===
- add a delete confirmation to the delete button function by:
- sourcing CDN in the HTML file
- adding a swal.fire to the client.js with the AJAX Delete request nested inside of the swal code, so that it only sends the request if the user confirms that they really want to delete it
- did my first branching on a project!

STRETCH GOAL 2: Adding a timestamp to the Completed (update) feature
===
- figured out how to update two fields in an UPDATE
- database can figure out timestamp! great. added a field in the table
- In the client getTasks function, there is already an if statement based on whether the completed is true or false, use that to append.
- The timestamp is really not readable as created by the database. Chatted with Chris to see how he translated it in the client to display better on the DOM using an object and another loop which worked well. I struggled and eventually gave up with the timezone situation (although it displays as CDT in my database, it shows up at UTC in the server!) due to time constraints.
- Ended up appending as a second <tr></tr> so that it appeared below the completed task.


## Usage

The user can add items to a to-do list that is displayed on the page, delete unwanted items from the list, and mark items as completed.

## Built With

- Express and PG
- Javascript, JQuery and SQL
- SweetAlerts

## Acknowledgement

I'd like to thank my cohort for the extra help along the way!

## Support

Any issues, feel free to hit me up on Slack :)