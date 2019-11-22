//bring  together all reducers
//meeting place for all reducers

import { combineReducers } from 'redux';
import CityReducer from './CityReducer';
import ItineraryReducer from './ItineraryReducer';

export default combineReducers({
	item: CityReducer,
	itmeitineray: ItineraryReducer
	//you can add all reducer here
});
