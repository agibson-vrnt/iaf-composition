/*eslint-env browser*/
import Main from "./jsx/Main.jsx";
import AddAQuote from "./jsx/AddAQuote.jsx";
import RetrieveQuote from "./jsx/RetrieveQuote.jsx";
import DeleteQuote from "./jsx/DeleteQuote.jsx";
import ListQuotes from "./jsx/ListQuotes.jsx";

var partials = { Main, AddAQuote, RetrieveQuote, DeleteQuote, ListQuotes };

// export as client-side namespace
if( typeof window !== "undefined" && window.iaf && window.iaf.composition ) {

	window.iaf.composition.partials = partials;

}
// export as module
export default partials;
