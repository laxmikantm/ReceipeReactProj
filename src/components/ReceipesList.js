import React, { Component } from 'react';
import Res from './Res';
import './Receipes.css';
import axios from 'axios';

class ReceipesList extends Component{

	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					id: "soup",
					description: "Heat water & \n drink!",
					price_used: "1",
					symbol: "Veg"
				},
				{
					id: "cake",
					description: "Cook & \n eat the cake!",
					price_used: "1",
					symbol: "V"
				},
				{
					id: "salad",
					description: "wash salad & \n enjoy!",
					price_used: "0",
					symbol: "Veg"
				}
			]
		};
	}

	fetchData() {
		const instance = axios.create({
			baseURL: 'http://localhost:8000/receipes',
			timeout: 1000,
			headers: {'Access-Control-Allow-Origin': '*'}
		});

	axios.get('http://localhost:8000/receipes',{headers:{'Access-Control-Allow-Origin': '*'}})
			.then(response => {
				var expected = ["soup","cake","salad"];
				console.log("DEBUG output - ", expected);
				console.log("DEBUG result - ", response.data);
				var result = response.data.filter(data => expected.includes(data.id));
				this.setState({data: result});
			}).catch(err => console.log(err));

	}

	componentDidMount() {
		this.fetchData();
	}

		render()
		{
				// let receipesList = this.state.data.map((item)=>
				// 	<li key={item.id}>
				// 		<h3>{item.id}</h3>
				// 		<h4>{item.description} Yummy</h4>
				// 	</li>
				let receipesList = this.state.data.map(
					(item) =>
					<Res data={item} key = {item.id} />
					);
			return(
				<div className="receipe-Container">
					<ul className="receipes">{receipesList}</ul>
				</div>
			);
		}

}

export default ReceipesList;
