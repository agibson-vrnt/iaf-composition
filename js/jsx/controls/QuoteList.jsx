import { React } from "../../iaf";

export default ( { created } ) => <ul className="list-group">

	{created.map( q =>

		<li className="list-group-item" key={q.href}>
			<a href={q.href}><div>{q.when}: {q.product.text} {q.term.text} (£{q.price})</div></a>
		</li>

	) }

</ul>;
