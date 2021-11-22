import axios from 'axios';

import {
	deleteBarterFailure,
	deleteBarterRequest,
	deleteBarterSuccess,
	deleteCommentFailure,
	deleteCommentRequest,
	deleteCommentSuccess,
	getBartersFailure,
	getBartersRequest,
	getBartersSuccess,
	postEditedBarterFailure,
	postEditedBarterRequest,
	postEditedBarterSuccess,
	postNewBarterFailure,
	postNewBarterRequest,
	postNewBarterSuccess,
	postNewCommentFailure,
	postNewCommentRequest,
	postNewCommentSuccess,
} from './bartersAction';

export const getBarters = () => {
	return (dispatch) => {
		dispatch(getBartersRequest());

		const options = {
			method: 'get',
			url: 'http://localhost:4000/api/barter',
		};

		axios(options)
			.then((response) => {
				console.log(response.data.items);

				const barters = response.data.items;
				dispatch(getBartersSuccess(barters));
			})
			.catch((error) => {
				console.log(error);

				const errorMessage = String(error);
				dispatch(getBartersFailure(errorMessage));
			});
	};
};

export const postNewBarter = (
	newBarter,
	addNewBarter,
	setNewBarter,
	setSubmitError
) => {
	return (dispatch) => {
		setSubmitError('');

		dispatch(postNewBarterRequest());

		const options = {
			method: 'post',
			url: 'http://localhost:4000/api/barter',
			data: newBarter,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		axios(options)
			.then((response) => {
				const newBarter = response.data;
				dispatch(postNewBarterSuccess(newBarter));
				addNewBarter.style.display = 'none';
				setNewBarter({
					barter: '',
					learn: '',
					teach: '',
				});
				console.log(newBarter);
			})
			.catch((error) => {
				const errorMessage = String(error);
				dispatch(postNewBarterFailure(errorMessage));
				console.log(errorMessage);
			});
	};
};

export const postEditedBarter = (editedBarter, setSubmitEditError) => {
	return (dispatch) => {
		setSubmitEditError('');

		dispatch(postEditedBarterRequest());
		console.log(editedBarter);

		const options = {
			method: 'put',
			url: `http://localhost:4000/api/barter/${editedBarter.id}`,
			data: editedBarter,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		axios(options)
			.then((response) => {
				const editedBarter = response.data;
				dispatch(postEditedBarterSuccess(editedBarter));
				console.log(editedBarter);
			})
			.catch((error) => {
				// const errorMessage = error?.response?.data?.message;
				const errorMessage = String(error);
				dispatch(postEditedBarterFailure(errorMessage));
				console.log(errorMessage);
			});
	};
};

export const deleteBarter = (barterData) => {
	return (dispatch) => {
		dispatch(deleteBarterRequest());
		console.log(barterData);

		const options = {
			method: 'delete',
			url: `http://localhost:4000/api/barter/${barterData.id}`,
			data: barterData,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		axios(options)
			.then((response) => {
				const barterData = response.data;
				dispatch(deleteBarterSuccess(barterData));
				console.log(barterData);
			})
			.catch((error) => {
				// const errorMessage = error?.response?.data?.message;
				const errorMessage = String(error);
				dispatch(deleteBarterFailure(errorMessage));
				console.log(errorMessage);
			});
	};
};

export const postNewComment = (newComment, barterData) => {
	return (dispatch) => {
		dispatch(postNewCommentRequest());
		console.log(newComment);

		const options = {
			method: 'post',
			url: `http://localhost:4000/api/comment/barter/${barterData.id}`,
			data: newComment,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		axios(options)
			.then((response) => {
				const newComment = response.data;
				dispatch(postNewCommentSuccess(newComment));
				console.log(newComment);
			})
			.catch((error) => {
				const errorMessage = String(error);
				dispatch(postNewCommentFailure(errorMessage));
				console.log(errorMessage);
			});
	};
};

export const deleteComment = (commentData) => {
	return (dispatch) => {
		dispatch(deleteCommentRequest());

		const options = {
			method: 'delete',
			url: `http://localhost:4000/api/comment/${commentData.id}`,
			data: commentData,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		};

		axios(options)
			.then((response) => {
				const commentData = response.data;
				dispatch(deleteCommentSuccess(commentData));
				console.log(commentData);
			})
			.catch((error) => {
				const errorMessage = String(error);
				dispatch(deleteCommentFailure(errorMessage));
				console.log(errorMessage);
			});
	};
};
