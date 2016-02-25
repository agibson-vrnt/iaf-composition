import { React } from "../../iaf";
import ProductSelectorContainer from "./ProductSelectorContainer.jsx";
import TermSelectorContainer from "./TermSelectorContainer.jsx";

export default class AddQuote extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	renderTermSelector() {

		var { available } = this.props;
		if( available && available.length ) {

			return <div className="form-group">

				<label>Select a term</label>
				<TermSelectorContainer />

			</div>;

		}

	}

	renderAdvice( isReady ) {

		if( isReady ) { return null; }
		var advice = this.props.available ? "term" : "product";
		return <p className="bg-info ">
			<span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Select a {advice} to complete your request
		</p>;

	}

	renderSubmitButton( isReady, isDisabled ) {

		var attributes = { };
		if( isDisabled ) { attributes.disabled = "disabled"; }
		return <input type="submit" value="Submit" className={"btn btn-" + ( isReady ? "primary" : "default" )} {...attributes} />;

	}

	renderSubmit() {

		var { selected } = this.props;
		var isReady = !!selected;
		var isDisabled = this.state.isClient && !isReady;
		return <div>
			{this.renderAdvice( isReady )}
			{(!isDisabled) && this.renderSubmitButton( isReady, isDisabled )}
		</div>;

	}

	componentDidMount() {

		if( typeof window !== "undefined" ) {

			this.setState( { isClient: true } );
			this.forceUpdate();

		}

	}

	render() {

		return <form method="POST">

			<div className="form-group">

				<label>Select a product</label>
				<ProductSelectorContainer />

			</div>
			{this.renderTermSelector()}
			{this.renderSubmit()}

		</form>;

	}

}
