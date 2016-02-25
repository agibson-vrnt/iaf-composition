/*eslint-env node*/

var handlebars = require( "handlebars" );
var request = require( "request" );

module.exports = {

	build: function build( config, publicRoot, callback ) {

		request( config.iaf.loaderTemplate, ( err, response, body ) => {

			if( err ) { callback( err ); }
			else {

				var template = handlebars.compile( body );
				callback( null, template( {

					"namespace": config.ns,
					"iaf-url": config.iaf.url,
					"iaf-version": config.iaf.version,
					"partials-url": publicRoot + "/js/bundle.js"

				} ) );

			}

		} );

	}

};
