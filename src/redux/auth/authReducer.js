import {
	POST_LOGIN_FAILURE,
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
} from './authTypes';

const initialState = {
	loading: true,
	userData: {},
	isSuccess: false,
	errorMessage: '',
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_LOGIN_REQUEST:
			return {
				loading: true,
			};
		case POST_LOGIN_SUCCESS:
			return {
				loading: false,
				userData: action.payload,
				isSuccess: true,
				errorMessage: '',
			};
		case POST_LOGIN_FAILURE:
			return {
				loading: false,
				userData: {},
				isSuccess: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
