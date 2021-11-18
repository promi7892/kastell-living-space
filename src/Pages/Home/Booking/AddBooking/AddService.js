import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import './AddService.css';

const AddService = () => {
	const { user } = useAuth();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post('https://radiant-ravine-73598.herokuapp.com/services', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Added Sucessfully! Please Check ur Booking On DashBoard');
					reset();
				}
			});
	};
	return (
		<div className='add-service'>
			<h1 className='mx-auto text-center m-4 p-5'>
				Please Specify Your details and book
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true, maxLength: 100 })}
					placeholder='Name'
				/>
				<input
					{...register('email', { required: true, maxLength: 100 })}
					placeholder={user.email}
				/>
				<textarea
					{...register('description')}
					placeholder='Your Choosen Service'
				/>
				<input
					type='number'
					{...register('phone')}
					placeholder='Phone Number'
				/>
				<input {...register('img')} placeholder='Add Ons' />
				<input className='btn btn-info' type='submit' />
			</form>
		</div>
	);
};

export default AddService;
