import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getBarters } from '../../../../redux/barters/bartersAsyncActions';
import BarterItem from './BarterItem';
import NewBarter from './NewBarter';
import './styles/BartersList.css';

function BartersList() {
	const barters = useSelector((state) => state.barters);
	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		dispatch(getBarters());
	}, []);

	const handleClick = () => {
		const token = localStorage.getItem('token');
		console.log('token: ', token);

		if (!token) {
			history.push('/login');
		} else {
			const addNewBarter = document.querySelector(
				'.bartersList__newBarter-form'
			);
			addNewBarter.style.display = 'flex';
		}
	};

	return (
		<div className="bartersList__wrapper">
			<React.Fragment>
				{barters.loading ? (
					<h3 className="bartersList__loading">Loading...</h3>
				) : barters.getBartersError ? (
					<h3 className="bartersList__error">{barters.getBartersError}</h3>
				) : (
					<React.Fragment>
						<h2 className="bartersList__title">Barters List</h2>
						{barters.postEditedBarterError && (
							<span className="bartersList__newBarter-submit-error">
								{barters.postEditedBarterError}
							</span>
						)}
						{barters.postNewCommentError && (
							<span className="bartersList__newComment-submit-error">
								{barters.postNewCommentError}
							</span>
						)}
						{barters.deleteBarterError && (
							<span className="bartersList__deleteBarter-error">
								{barters.deleteBarterError}
							</span>
						)}
						{barters.loadingComments && (
							<h3 className="bartersList__loadingComments">Loading...</h3>
						)}
						{barters.deleteCommentError && (
							<span className="bartersList__deleteComment-error">
								{barters.deleteCommentError}
							</span>
						)}

						<button className="bartersList__button" onClick={handleClick}>
							+ add New Barter
						</button>

						<NewBarter />

						{barters &&
							barters.barters &&
							barters.barters.map((barter) => (
								<BarterItem
									key={Math.floor(Math.random() * 100000 + 1)}
									barterData={barter}
								/>
							))}
					</React.Fragment>
				)}
			</React.Fragment>
		</div>
	);
}

export default BartersList;
