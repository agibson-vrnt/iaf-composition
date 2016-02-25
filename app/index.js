/*eslint-env node*/
var config = require( "./config" );

// utils
var viewEngineConfig = require( "./view-engine-config" );

// iaf stuff
var iafScriptEval = require( "./iaf/script-runner" );
var loaderFactory = require( "./iaf/loader-factory" );

// index of partials
var partials = {}; // we populate this later on

// middleware
var logging = require( "./middleware/logging" );
var requestMetadata = require( "./middleware/request-metadata" );
var negotiate = require( "./middleware/negotiate" );
var renderPartials = require( "./middleware/render-partials" )( config, loaderFactory, partials );

// route builders
var routeBuilders = [

    require( "./routes/partials-loader" ),
    require( "./routes/root" ),
    require( "./routes/partials" ),
    require( "./routes/composites" )

];

var express = require( "express" );
var app = express();
// static routes
app.use( "/public", express.static( __dirname + "/public" ) );
// adds metadata to the request
app.use( requestMetadata );
// logs requests
app.use( logging );
// negoatiate handlers
app.use( negotiate );
// partial rendering middleware
app.use( renderPartials );
// configure the view engine
viewEngineConfig.configure( app, config );
// fetch and evaluate the iaf scripts
iafScriptEval.fetch( app, config, ( err ) => {

    if( err ) { throw err; }
    // now that iaf script is loaded, we can pull in the partials
    Object.assign( partials, require( "./public/js/bundle.js" ).default );
    // register routes
    routeBuilders.forEach( route => route.configure( app, config ) );
    // listen
    app.listen( config.port, () => console.log( "Listening on", config.port ) ); // eslint-disable-line no-console

} );
