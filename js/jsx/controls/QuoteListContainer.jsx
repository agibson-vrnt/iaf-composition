// a mapper for converting the state tree to just the part our widget requires
const mapStateToProps = state => state.quotes || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
//import * as actionCreators from "../action-creators";
const mapDispatchToProps = dispatch => ( {

//	doIt: () => dispatch( actionCreators.asyncAction() )

} );

// importing the connect utility from react-redux - this creates the container for us
import { ReactRedux } from "../../iaf";

// importing the widget which this container handles
import QuoteList from "./QuoteList.jsx";

// build the container for our widget
const QuoteListContainer = ReactRedux.connect( mapStateToProps, mapDispatchToProps )( QuoteList );

// export the container
export default QuoteListContainer;
