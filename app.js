//. app.js

var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    bodyParser = require( 'body-parser' ),
    fs = require( 'fs' ),
    ejs = require( 'ejs' ),
    app = express();

var appEnv = cfenv.getAppEnv();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( req, res ){
  res.render( 'index', {} );
});

app.listen( appEnv.port );
console.log( "server stating on " + appEnv.port + " ..." );
