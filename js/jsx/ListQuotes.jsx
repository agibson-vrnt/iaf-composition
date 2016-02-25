
import { React } from "../iaf";
import QuoteList from "./controls/QuoteList.jsx";

export default class ListQuotes extends React.Component {

	render() {

		var { quotes } = this.props;
		if( quotes && quotes.created && quotes.created.length ) {

			var created = quotes.created.map( q => {

				return Object.assign( {}, q, { href: "/quotes/retrieve/" + q.id } );

			} );
			return <QuoteList created={created} />;

		} else {

			return <p>You don't have any quotes yet.</p>;

		}

	}

}
