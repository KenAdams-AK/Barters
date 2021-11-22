import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../../../redux/barters/bartersAsyncActions';
import { username } from '../bartersContainer/BarterItem';
import './styles/CommentsList.css';

function CommentItem({ commentData }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		if (window.confirm('Are you really gonna do this?')) {
			dispatch(deleteComment(commentData));
		}
	};

	return (
		<div className="commentItem__wrapper">
			<p className="commentItem__content">{commentData.comment}</p>
			<div className="commentItem__author">
				{commentData.author.username}
				{commentData.author.username === username && (
					<div className="commentItem__icons">
						<i className="far fa-trash-alt" onClick={handleDelete}></i>
					</div>
				)}
			</div>
		</div>
	);
}

export default CommentItem;
