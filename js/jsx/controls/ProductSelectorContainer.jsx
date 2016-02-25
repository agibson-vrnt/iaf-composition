// a mapper for converting the state tree to just the part our widget requires
const mapStateToProps = state => state.products || {};

// a mapper taking the dispatch method and building methods for our view compoments to call
import * as actionCreators from "../action-creators/quote-action-creators";
const mapDispatchToProps = dispatch => ( {

	selectProduct: ( productId ) => dispatch( actionCreators.selectProduct( productId ) )

} );

// importing the connect utility from react-redux - this creates the container for us
import { ReactRedux } from "../../iaf";

// importing the widget which this container handles
import ProductSelector from "./ProductSelector.jsx";

// build the container for our widget
const ProductSelectorContainer = ReactRedux.connect( mapStateToProps, mapDispatchToProps )( ProductSelector );

// export the container
export default ProductSelectorContainer;
