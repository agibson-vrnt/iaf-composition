/*eslint-env node*/
module.exports = {

	configure: ( app ) => {

		app.get( "/", ( req, res ) => res.render( "index", {} ) );

	}

};
