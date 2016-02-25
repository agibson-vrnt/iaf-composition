export default ( state, action ) => {

	switch( action.type ) {

		case "select-product":

			var selectedProduct = state.products.available.find( x => x.value === action.id );
			return {
				...state,
				products: {

					...state.products,
					selected: selectedProduct

				},
				terms: {

					available: selectedProduct ? selectedProduct.terms.slice() : undefined

				}

			};

		case "select-term":
			var selectedTerm = state.terms.available.find( x => x.value === action.id );
			return {
				...state,
				terms: {

					...state.terms,
					selected: selectedTerm

				}

			};

		default:
			return state;

	}

};
