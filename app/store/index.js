/*eslint-env node*/

var quotes = {};
var uuid = require( "../utils/uuid" );

module.exports = {

	catalogue: {

		retrieve: function() {

			return [ {

				value: "standard",
				text: "Family cover+",
				terms: [

					{ value: "12", text: "1 year" },
					{ value: "24", text: "2 years" },
					{ value: "36", text: "3 years" },
					{ value: "60", text: "5 years" },
					{ value: "120", text: "Lifetime cover (best value!)" }

				]

			}, {

				value: "premium",
				text: "Premium in-depth coverage",
				terms: [

					{ value: "12", text: "1 year" },
					{ value: "24", text: "2 years" }

				]

			} ];

		}

	},

	quotes: {

		put: function( quote ) {

			if( !quote ) { throw new Error( "No quote" ); }
			var id = quote.id = quote.id || uuid();
			quote.when = new Date().toISOString();
			quotes[ id ] = JSON.parse( JSON.stringify( quote ) );
			return id;

		},
		get: function( quoteId ) {

			return quotes[ quoteId ];

		},
		remove: function( quoteId ) {

			delete quotes[ quoteId ];

		},
		list: function( transform ) {

			transform = transform || ( x => x );
			return Object.keys( quotes ).map( id => transform( JSON.parse( JSON.stringify( quotes[ id ] ) ) ) );

		}

	}

};
