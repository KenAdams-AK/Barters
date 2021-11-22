import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewComment } from '../../../../redux/barters/bartersAsyncActions';
import './styles/CommentsList.css';

function NewComment({ barterData }) {
	const dispatch = useDispatch();

	const [newComment, setNewComment] = useState({
		comment: '',
	});

	const handleChange = (e) => {
		setNewComment({
			comment: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postNewComment(newComment, barterData));
	};

	return (
		<div className="newComment__wrapper">
			<form className="newComment__form" onSubmit={handleSubmit}>
				<textarea
					className="newComment__textarea"
					name="comment"
					placeholder="Comment..."
					maxLength="100"
					// required
					value={newComment.comment}
					onChange={handleChange}
				/>
				<input
					className="newComment__submit"
					type="submit"
					disabled={!newComment.comment}
				/>
			</form>
		</div>
	);
}

export default NewComment;
