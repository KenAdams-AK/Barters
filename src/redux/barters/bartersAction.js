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

export const getBartersRequest = () => {
	return {
		type: GET_BARTERS_REQUEST,
	};
};

export const getBartersSuccess = (barters) => {
	return {
		type: GET_BARTERS_SUCCESS,
		payload: barters,
	};
};

export const getBartersFailure = (error) => {
	return {
		type: GET_BARTERS_FAILURE,
		payload: error,
	};
};

export const postNewBarterRequest = () => {
	return {
		type: POST_NEW_BARTER_REQUEST,
	};
};

export const postNewBarterSuccess = (newBarter) => {
	return {
		type: POST_NEW_BARTER_SUCCESS,
		payload: newBarter,
	};
};

export const postNewBarterFailure = (error) => {
	return {
		type: POST_NEW_BARTER_FAILURE,
		payload: error,
	};
};

export const postEditedBarterRequest = () => {
	return {
		type: POST_EDITED_BARTER_REQUEST,
	};
};

export const postEditedBarterSuccess = (editedBarter) => {
	return {
		type: POST_EDITED_BARTER_SUCCESS,
		payload: editedBarter,
	};
};

export const postEditedBarterFailure = (error) => {
	return {
		type: POST_EDITED_BARTER_FAILURE,
		payload: error,
	};
};

export const deleteBarterRequest = () => {
	return {
		type: DELETE_BARTER_REQUEST,
	};
};

export const deleteBarterSuccess = (barter) => {
	return {
		type: DELETE_BARTER_SUCCESS,
		payload: barter,
	};
};

export const deleteBarterFailure = (error) => {
	return {
		type: DELETE_BARTER_FAILURE,
		payload: error,
	};
};

export const postNewCommentRequest = () => {
	return {
		type: POST_NEW_COMMENT_REQUEST,
	};
};

export const postNewCommentSuccess = (newComment) => {
	return {
		type: POST_NEW_COMMENT_SUCCESS,
		payload: newComment,
	};
};

export const postNewCommentFailure = (error) => {
	return {
		type: POST_NEW_COMMENT_FAILURE,
		payload: error,
	};
};

export const deleteCommentRequest = () => {
	return {
		type: DELELE_COMMENT_REQUEST,
	};
};

export const deleteCommentSuccess = (comment) => {
	return {
		type: DELETE_COMMENT_SUCCESS,
		payload: comment,
	};
};

export const deleteCommentFailure = (error) => {
	return {
		type: DELETE_COMMENT_FAILURE,
		payload: error,
	};
};
