/*eslint-env node*/

var loaderFactory = require( "../iaf/loader-factory" );

module.exports = {

    configure: ( app, config ) => {

        app.get( "/partials-loader", ( req, res ) => {

            loaderFactory.build( config, req.fullSchemeAndHost + "/public", ( err, loader ) => {

                if( err ) { throw err; }
                res.type( "application/javascript" ).send( loader );

            } );

        } );

    }

};
