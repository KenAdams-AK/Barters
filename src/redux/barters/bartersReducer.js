import {
	DELELE_COMMENT_REQUEST,
	DELETE_BARTER_FAILURE,
	DELETE_BARTER_REQUEST,
	DELETE_BARTER_SUCCESS,
	DELETE_COMMENT_FAILURE,
	DELETE_COMMENT_SUCCESS,
	GET_BARTERS_FAILURE,
	GET_BARTERS_REQUEST,
	GET_BARTERS_SUCCESS,
	POST_EDITED_BARTER_FAILURE,
	POST_EDITED_BARTER_REQUEST,
	POST_EDITED_BARTER_SUCCESS,
	POST_NEW_BARTER_FAILURE,
	POST_NEW_BARTER_REQUEST,
	POST_NEW_BARTER_SUCCESS,
	POST_NEW_COMMENT_FAILURE,
	POST_NEW_COMMENT_REQUEST,
	POST_NEW_COMMENT_SUCCESS,
} from './bartersTypes';

const initialState = {
	loading: false,
	loadingNewBarter: false,
	loadingComments: false,
	barters: [],
	getBartersError: '',
	postNewBarterError: '',
	postEditedBarterError: '',
	deleteBarterError: '',
	postNewCommentError: '',
	deleteCommentError: '',
};

const bartersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BARTERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_BARTERS_SUCCESS:
			return {
				...state,
				loading: false,
				barters: action.payload,
				getBartersError: '',
			};
		case GET_BARTERS_FAILURE:
			return {
				...state,
				loading: false,
				barters: [],
				getBartersError: action.payload,
			};

		case POST_NEW_BARTER_REQUEST:
			return {
				...state,
				loadingNewBarter: true,
			};
		case POST_NEW_BARTER_SUCCESS:
			return {
				...state,
				loadingNewBarter: false,
				barters: [action.payload, ...state.barters],
				postNewBarterError: '',
			};
		case POST_NEW_BARTER_FAILURE:
			return {
				...state,
				loadingNewBarter: false,
				postNewBarterError: action.payload,
			};

		case POST_EDITED_BARTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case POST_EDITED_BARTER_SUCCESS:
			return {
				...state,
				loading: false,
				barters: [...state.barters].map((element) => {
					if (element.id === action.payload.id) {
						return {
							...element,
							barter: action.payload.barter,
							learn: action.payload.learn,
							teach: action.payload.teach,
						};
					} else {
						return {
							...element,
						};
					}
				}),
				postEditedBarterError: '',
			};
		case POST_EDITED_BARTER_FAILURE:
			return {
				...state,
				loading: false,
				postEditedBarterError: action.payload,
			};

		case DELETE_BARTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case DELETE_BARTER_SUCCESS:
			return {
				...state,
				loading: false,
				barters: [...state.barters].filter(
					(element) => element.id !== action.payload.id
				),
			};
		case DELETE_BARTER_FAILURE:
			return {
				...state,
				loading: false,
				deleteBarterError: action.payload,
			};

		case POST_NEW_COMMENT_REQUEST:
			return {
				...state,
				loadingComments: true,
			};
		case POST_NEW_COMMENT_SUCCESS:
			return {
				...state,
				loadingComments: false,
				barters: [...state.barters].map((element) => {
					if (element.id === action.payload.barter.id) {
						return {
							...element,
							comments: [action.payload, ...element.comments],
						};
					} else {
						return {
							...element,
						};
					}
				}),
			};
		case POST_NEW_COMMENT_FAILURE:
			return {
				...state,
				loadingComments: false,
				postNewCommentError: action.payload,
			};

		case DELELE_COMMENT_REQUEST:
			return {
				...state,
				loadingComments: true,
			};
		case DELETE_COMMENT_SUCCESS:
			return {
				...state,
				loadingComments: false,
				barters: [...state.barters].map((element) => {
					return {
						...element,
						comments: [...element.comments].filter(
							(comment) => comment.id !== action.payload.id
						),
					};
				}),
			};
		case DELETE_COMMENT_FAILURE:
			return {
				...state,
				loadingComments: false,
				deleteCommentError: action.payload,
			};

		default:
			return state;
	}
};

export default bartersReducer;
