import { React } from "../iaf";

export default class HelloWorld extends React.Component {

	constructor( props ) {

		super( props );
		this.state = {};

	}

	handleClick() {

		this.setState( { hit: true } );

	}

	render() {

		return <div onClick={e => this.handleClick(e)}>
			Hello world
			<div>{this.state.hit && "OUCH!"}</div>
		</div>;

	}

}
