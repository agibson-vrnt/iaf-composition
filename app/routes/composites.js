/*eslint-env node*/

const TEXT_HTML = "text/html";

var request = require( "request" );
var async = require( "async" );

module.exports = {

    configure: ( app, config ) => {

        app.get( "/c/:compositeName", ( req, res ) => {

             async.parallel( [

                done => request( config.rating.url + "/quotes", { "headers": { "accept": "application/partial+json" } }, done )

            ], ( err, results ) => {

                var partials = {

                    left: [ JSON.parse( results[0][1] ) ],
                    main: [ { "html": "main partial" } ],
                    right: [ { "html": "right partial" } ]

                };
                req.negotiate(

                    [ TEXT_HTML, () => res.render(

                        "composite",
                        { partials: partials, title: "Your page" }

                    ) ]

                );

            } );

        } );

    }

};
