import React from 'react';
import CommentItem from './CommentItem';
import NewComment from './NewComment';
import './styles/CommentsList.css';

function CommentsList({ barterData }) {
	return (
		<div className="commentsList__wrapper">
			<NewComment barterData={barterData} />

			<React.Fragment>
				{barterData &&
					barterData.comments &&
					barterData.comments.map((comment) => (
						<CommentItem
							key={Math.floor(Math.random() * 100000 + 1)}
							commentData={comment}
						/>
					))}
			</React.Fragment>
		</div>
	);
}

export default CommentsList;
