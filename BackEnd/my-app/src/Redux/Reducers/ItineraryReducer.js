//ACtual state go here in reducers
import { GET_ITINERARY } from '../Actions/types';

const initialState = {
	itinerary: []
};

export default function(stateitinerary = initialState, action) {
	switch (action.type) {
		case GET_ITINERARY:
			return {
				...stateitinerary,
				itinerary: action.payload
			};
		default:
			return stateitinerary;
	}
}
