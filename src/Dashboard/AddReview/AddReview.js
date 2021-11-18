import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
	const { user } = useAuth();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post('https://radiant-ravine-73598.herokuapp.com/review', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Added Sucessfully');
					reset();
				}
			});
	};
	return (
		<div className='add-service'>
			<h1 className='mx-auto text-center m-4 p-5'>Review Us</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true, maxLength: 100 })}
					placeholder={user.displayName}
				/>

				<textarea
					{...register('description')}
					placeholder='Please Specify your Review'
				/>
				<br />
				<input className='btn btn-warning' type='submit' />
			</form>
		</div>
	);
};

export default AddReview;
