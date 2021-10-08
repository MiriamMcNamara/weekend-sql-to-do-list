// requires (express, app, bodyparser, modules)
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const pool = require( './modules/pool' );
const { query } = require('express');

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
app.post( '/todo', ( req, res )=>{
    console.log( 'POST route hit', req.body )
    let queryString = 'INSERT INTO to_do ( item, completed) VALUES ( $1, $2 )';
    let values = [ req.body.item, req.body.completed ];
    pool.query( queryString, values ).then( (results)=>{
    res.sendStatus( 201 )
}).catch((err)=>{
    res.sendStatus( 500 )})
});
