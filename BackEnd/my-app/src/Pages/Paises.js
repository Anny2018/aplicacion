import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/CityActions';
import { getItemsItinerary } from '../Redux/Actions/ItineraryActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cities extends Component {
	static propTypes = {
		getItemsItinerary: PropTypes.func.isRequired,
		getItems: PropTypes.func.isRequired,
		cities: PropTypes.object.isRequired,
		itinerary: PropTypes.object.isRequired
	};

	componentDidMount() {
		this.props.getItems();
		this.props.getItemsItinerary();
	}

	render() {
		const { cities } = this.props.cities;
		console.log(cities);
		return (
			<ul>
				{cities.map(ciudad => {
					let rutaciudad = '/Paises/' + ciudad.ciudad;
					return (
						<li key={ciudad._id}>
							<button>
								<Link to={rutaciudad}>
									{ciudad.ciudad} - {ciudad.pais}
								</Link>
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapSateToProps = state => ({
	cities: state.item,
	itinerary: state.itmeitineray
});

export default connect(mapSateToProps, { getItems, getItemsItinerary })(Cities);
