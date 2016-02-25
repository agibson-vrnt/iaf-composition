/*eslint-env node*/

var Negotiator = require( "negotiator" );


const TEXT_HTML = "text/html";
const APP_JSON = "application/json";

module.exports = {

    configure: ( app ) => {

        app.get( "/partials/:partialName", ( req, res ) => {

            var negotiator = new Negotiator( req );
            var available = [ TEXT_HTML, APP_JSON ];
            switch( negotiator.mediaType( available ) ) {

                case APP_JSON:
                    res.renderPartialDigest( req.params.partialName, {}, req.query.containerId );
                    break;
                case TEXT_HTML:
                    res.renderPartialPage( req.params.partialName, {}, { containerId: req.query.containerId } );
                    break;
                default:
                    res.status( 406 ).send( "Available: " + available.join( ", " ) );

            }




        } );

    }

};
