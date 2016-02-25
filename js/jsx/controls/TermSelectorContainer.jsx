// a mapper for converting the state tree to just the part our widget requires
const mapStateToProps = state => state.terms || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
import * as actionCreators from "../action-creators/quote-action-creators";
const mapDispatchToProps = dispatch => ( {

	selectTerm: ( id ) => dispatch( actionCreators.selectTerm( id ) )

} );

// importing the connect utility from react-redux - this creates the container for us
import { ReactRedux } from "../../iaf";

// importing the widget which this container handles
import TermSelector from "./TermSelector.jsx";

// build the container for our widget
const TermSelectorContainer = ReactRedux.connect( mapStateToProps, mapDispatchToProps )( TermSelector );

// export the container
export default TermSelectorContainer;
