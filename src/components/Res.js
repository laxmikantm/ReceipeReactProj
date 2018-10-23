import React, {Component} from 'react'
import './Res.css'

class Res extends Component {

	render() {
		var {
			id,
			description,
			price_used,
			symbol
		} = this.props.data;
		return(
				<li className={"rece"+id}>
					<p className="rece-name">{id} ({description})</p>
					<h1>${(+price_used).toFixed(2)}</h1>
				</li>
		);
	}
}
export default Res;
