/*eslint-env node*/
var Negotiator = require( "negotiator" );

function sendUnavailable( res, available ) {

	res.status( 406 ).send( "Available: " + available.join( ", " ) );

}
function negotiateStrategy( req, res, handlers ) {

    var negotiator = new Negotiator( req );
    var available = [].concat( handlers || [] ).map( h => h[ 0 ] );
    var selected = negotiator.mediaType( available );
    var handler = handlers.find( h => h[ 0 ] === selected );
    var strategy = handler ? handler[ 1 ] : () => sendUnavailable( res, available );
    strategy();

}

module.exports = ( req, res, next ) => {

	req.negotiate = function() { return negotiateStrategy( req, res, [].slice.call( arguments ) ); }; // come on node, finish the bloody rest parameters implementation
    next();

};
