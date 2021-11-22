import {
	POST_LOGIN_FAILURE,
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
} from './authTypes';

export const loginRequest = () => {
	return {
		type: POST_LOGIN_REQUEST,
	};
};

export const loginSuccess = (response) => {
	return {
		type: POST_LOGIN_SUCCESS,
		payload: response,
	};
};

export const loginFailure = (error) => {
	return {
		type: POST_LOGIN_FAILURE,
		payload: error,
	};
};
