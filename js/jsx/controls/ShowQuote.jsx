import { React } from "../../iaf";

export default ( { quote } ) =>

	<table className="table">
		<tbody>
			<tr>
				<th scope="row">Product</th>
				<td>{quote.product.text}</td>
			</tr>
			<tr>
				<th scope="row">Term</th>
				<td>{quote.term.text}</td>
			</tr>
			<tr>
				<th scope="row">Rate (p/a)</th>
				<td>{quote.price}</td>
			</tr>
			<tr>
				<th scope="row">Created</th>
				<td>{quote.when.toDateString()}</td>
			</tr>
		</tbody>
	</table>;
