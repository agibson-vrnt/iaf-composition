
import { React, ReactRedux, Redux, ReduxThunk } from "../iaf";
import AddQuoteContainer from "./controls/AddQuoteContainer.jsx";
import * as actionCreators from "./action-creators/quote-action-creators";

var Provider = ReactRedux.Provider;
var applyMiddleware = Redux.applyMiddleware;
var thunkMiddleware = ReduxThunk.thunkMiddleware;

import quoteReducers from "./reducers/quote-reducers";

export default class AddAQuote extends React.Component {

	componentWillMount() {

		var initialState = { products: { available: this.props.catalogue.slice() } };
		this.partialStore = Redux.createStore(

			quoteReducers,
			initialState,
			applyMiddleware( thunkMiddleware )

		);
		if( this.props.product ) {

			this.partialStore.dispatch( actionCreators.selectProduct( this.props.product ) );

		}
		if( this.props.term ) {

			this.partialStore.dispatch( actionCreators.selectTerm( this.props.term ) );

		}

	}

	render() {

		return <Provider store={this.partialStore}><AddQuoteContainer /></Provider>;

	}

}
