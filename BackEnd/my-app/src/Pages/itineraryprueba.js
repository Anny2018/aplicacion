import React, { Component } from 'react';
import axios from 'axios';

class Itinerary extends Component {
	constructor() {
		super();
		this.state = {
			itinerario: []
		};
	}

	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/itinerary');
		this.setState({ itinerario: res.data.Respuesta });
	}
	render() {
		let itinerario = this.state.itinerario;
		console.log(itinerario);
		let ciudad = this.props.match.params.ciudad;
		const ciudadfilt = itinerario.filter(x => x.ciudad == ciudad);
		console.log(ciudadfilt);
		return <h1>{ciudad}</h1>;
	}
}

export default Itinerary;
