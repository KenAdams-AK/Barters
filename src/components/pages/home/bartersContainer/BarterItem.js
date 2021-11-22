import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteBarter,
	postEditedBarter,
} from '../../../../redux/barters/bartersAsyncActions';
import CommentsList from '../commentsContainer/CommentsList';
import './styles/BarterItem.css';

export const username = localStorage.getItem('username');

function BarterItem({ barterData }) {
	const dispatch = useDispatch();

	const [isAditable, setisAditable] = useState(false);
	const [editedBarter, setEditedBarter] = useState({
		barter: barterData.barter,
		learn: barterData.learn,
		teach: barterData.teach,
		id: barterData.id,
	});

	const [submitEditError, setSubmitEditError] = useState('');

	const handleEdit = () => {
		setisAditable(true);
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'barter':
				setEditedBarter({
					...editedBarter,
					barter: e.target.value,
				});
				break;
			case 'learn':
				setEditedBarter({
					...editedBarter,
					learn: e.target.value,
				});
				break;
			case 'teach':
				setEditedBarter({
					...editedBarter,
					teach: e.target.value,
				});
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!editedBarter.barter || !editedBarter.learn || !editedBarter.teach) {
			setSubmitEditError('Invalid input! Please, fill each input field!');
			console.log(editedBarter);
		} else {
			dispatch(postEditedBarter(editedBarter, setSubmitEditError));
		}
	};

	const handleCancel = () => {
		setisAditable(false);
		setSubmitEditError('');
		setEditedBarter({
			barter: barterData.barter,
			learn: barterData.learn,
			teach: barterData.teach,
		});
	};

	const handleDelete = () => {
		if (window.confirm('Will you dare?')) {
			dispatch(deleteBarter(barterData));
		}
	};

	return (
		<React.Fragment>
			{!isAditable ? (
				<div className="bartersList__item">
					<h3 className="bartersList__item-head">{barterData.barter}</h3>
					<div className="bartersList__item-body">
						<p>
							I want to learn: <span>{barterData.learn}</span>
						</p>
						<p>
							I can teach: <span>{barterData.teach}</span>
						</p>
						{username && username === barterData.author.username && (
							<div className="bartersList__item-icons">
								<i className="far fa-edit" onClick={handleEdit}></i>
								<i className="far fa-trash-alt" onClick={handleDelete}></i>
							</div>
						)}
					</div>
				</div>
			) : (
				<form className="bartersList__item" onSubmit={handleSubmit}>
					<div className="bartersList__item-head-edit-wrapper">
						<input
							className="bartersList__item-head-edit"
							type="text"
							name="barter"
							value={editedBarter.barter}
							onChange={handleChange}
						/>
					</div>
					<div className="bartersList__item-body">
						<p>
							I want to learn:{' '}
							<input
								type="text"
								name="learn"
								value={editedBarter.learn}
								onChange={handleChange}
							/>
						</p>
						<p>
							I can teach:{' '}
							<input
								type="text"
								name="teach"
								value={editedBarter.teach}
								onChange={handleChange}
							/>
						</p>
					</div>
					<div className="bartersList__item-icons-edit">
						<div className="bartersList__item-icon-edit-wrapper">
							<i className="far fa-window-close"></i>
							<input type="submit" value="Cancel" onClick={handleCancel} />
						</div>
						<div className="bartersList__item-icon-edit-wrapper">
							<i className="far fa-check-square"></i>
							<input type="submit" value="Save" />
						</div>
					</div>
					<span className="bartersList__newBarter-submit-error">
						{submitEditError}
					</span>
				</form>
			)}

			<CommentsList barterData={barterData} />
		</React.Fragment>
	);
}

export default BarterItem;
