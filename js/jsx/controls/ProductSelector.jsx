import { React } from "../../iaf";

export default class ProductSelector extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	handleChange() {

		var product = this.refs.product.value;
		this.props.selectProduct( product );

	}

	renderProduct( product ) {

		return <option key={product.value} value={product.value}>{product.text}</option>;

	}

	render() {

		var selected = this.props.selected ? this.props.selected.value : "";
		return <select ref="product" name="product" className="form-control" value={selected} onChange={e => this.handleChange( e )}>
			<option value="" disabled>-- select a product --</option>
			{this.props.available.map( p => this.renderProduct( p ))}
		</select>;

	}

}
