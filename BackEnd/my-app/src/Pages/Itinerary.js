import React from 'react';

class Itinerary extends React.Component {

	render() {
    
		let ciudad = this.props.match.params.ciudad;
    
    return <h1>{ciudad}</h1>;
  
  }
}

export default Itinerary;
