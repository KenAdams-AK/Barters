import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewBarter } from '../../../../redux/barters/bartersAsyncActions';

function NewBarter() {
	const barters = useSelector((state) => state.barters);
	const dispatch = useDispatch();

	const [newBarter, setNewBarter] = useState({
		barter: '',
		learn: '',
		teach: '',
	});

	const [submitError, setSubmitError] = useState('');

	const addNewBarter = document.querySelector('.bartersList__newBarter-form');

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'barter':
				setNewBarter({
					...newBarter,
					barter: e.target.value,
				});
				break;
			case 'learn':
				setNewBarter({
					...newBarter,
					learn: e.target.value,
				});
				break;
			case 'teach':
				setNewBarter({
					...newBarter,
					teach: e.target.value,
				});
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newBarter.barter || !newBarter.learn || !newBarter.teach) {
			setSubmitError('Invalid input! Please, fill each input field!');
		} else {
			dispatch(
				postNewBarter(newBarter, addNewBarter, setNewBarter, setSubmitError)
			);
		}
	};

	return (
		<form className="bartersList__newBarter-form" onSubmit={handleSubmit}>
			{barters.loadingNewBarter ? (
				<h3 className="bartersList__newBarter-loading">Loading...</h3>
			) : (
				<React.Fragment>
					<div className="bartersList__newBarter-head">
						<input
							className="bartersList__newBarter-head-input"
							type="text"
							placeholder="Description..."
							name="barter"
							value={newBarter.barter}
							onChange={handleChange}
						/>
					</div>
					<div className="bartersList__newBarter-body">
						<label>
							I want to learn:
							<input
								className="bartersList__newBarter-body-input"
								type="text"
								name="learn"
								value={newBarter.learn}
								onChange={handleChange}
							/>
						</label>
						<label>
							I can teach:
							<input
								className="bartersList__newBarter-body-input"
								type="text"
								name="teach"
								value={newBarter.teach}
								onChange={handleChange}
							/>
						</label>
					</div>
					<span className="bartersList__newBarter-submit-error">
						{submitError || barters.postNewBarterError}
					</span>
				</React.Fragment>
			)}

			<input className="bartersList__newBarter-submit" type="submit" />
		</form>
	);
}

export default NewBarter;
