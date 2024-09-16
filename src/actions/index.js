import axios from 'axios';
// import { act } from 'react-dom/test-utils';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an
// 	 axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error
//   if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const ADD_SMURF = 'ADD_SMURF';
export const addSmurf = (data) => {
	return { type: ADD_SMURF, payload: data };
}

export const SET_ERROR = 'SET_ERROR';
export const setError = (data) => {
	return { type: SET_ERROR, payload: data };
}

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const fetchSmurfStart = () => {
	return { type: FETCH_SMURF_START };
}

export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const fetchSmurfSuccess = (data) => {
	return { type: FETCH_SMURF_SUCCESS, payload: data };
}

export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const fetchSmurfFail = (data) => {
	return { type: FETCH_SMURF_FAIL, payload: data };
}

export const fetchSmurfs = () => {
	return async dispatch => {
		dispatch(fetchSmurfStart());

		try {
			const smurfs = await axios.get('http://localhost:3333/smurfs');
			console.log('we got smurfs over here!');
			dispatch(fetchSmurfSuccess(smurfs.data));
		}
		catch (error) {
			console.log(error);
			dispatch(fetchSmurfFail(error));
		}
	};
};

export const reducto = (dispatch) => {
	return {
		addSmurf: data => dispatch(addSmurf(data)),
		setError: data => dispatch(setError(data)),
		fetchSmurfStart: () => dispatch(fetchSmurfStart()),
		fetchSmurfSuccess: data => dispatch(fetchSmurfSuccess(data)),
		fetchSmurfFail: data => dispatch(fetchSmurfFail(data)),
	}
};

export const actionTypes = {
	ADD_SMURF,
	SET_ERROR,
	FETCH_SMURF_START,
	FETCH_SMURF_SUCCESS,
	FETCH_SMURF_FAIL,
}