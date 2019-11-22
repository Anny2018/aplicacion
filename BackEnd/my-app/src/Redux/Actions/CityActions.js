import axios from 'axios';
import { GET_CITIES } from './types';

export const getItems = () => dispatch => {
	axios.get('http://localhost:4000/api/city').then(res =>
		dispatch({
			type: GET_CITIES,
			payload: res.data.Respuesta
		})
	);
};
