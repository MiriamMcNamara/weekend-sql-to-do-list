// requires (express, app, bodyparser, modules)
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const pool = require( './modules/pool' );

// uses (static files, bodyparser)
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );


// globals (const port)
const port = 5000;


// spin up server (app.listen)
app.listen( port, ()=>{
    console.log( 'server is up on:', port ) ;
})


// routes