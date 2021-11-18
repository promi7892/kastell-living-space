import React, { useEffect, useState } from 'react';

import useAuth from '../../Hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from 'bootstrap';
import MakePayment from '../MakePayment/MakePayment';
import { Link } from 'react-router-dom';

const MyBookings = () => {
	const { user } = useAuth();

	const [mybookings, setMybookings] = useState([]);

	useEffect(() => {
		const url = `https://radiant-ravine-73598.herokuapp.com/services?email=${user.email}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => setMybookings(data));
	}, []);

	//Delete booking

	const handleDeleteUser = (id) => {
		const url = `https://radiant-ravine-73598.herokuapp.com/services/${id}`;
		fetch(url, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deleteCount > 0) {
					Alert('Delete Successfully');
					const remainingUser = mybookings.filter((row) => row._id !== id);
					setMybookings(remainingUser);
				}
			});
	};

	return (
		<div>
			<h1 className='mb-5 p-5'>My Total bookings {mybookings.length}</h1>
			<TableContainer component={Paper}>
				<Table sx={{}} aria-label='My Bookings'>
					<TableHead>
						<TableRow className=' bg-dark shadow '>
							<TableCell className='text-light'>Name</TableCell>
							<TableCell className='text-light' align='right'>
								Booking Details
							</TableCell>
							<TableCell className='text-light' align='right'>
								Add-on
							</TableCell>
							<TableCell className='text-light' align='right'>
								Phone No
							</TableCell>
							<TableCell className='text-light' align='right'>
								Action
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className='container'>
						{mybookings.map((row) => (
							<TableRow
								key={row._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.description}</TableCell>
								<TableCell align='right'>{row.img}</TableCell>
								<TableCell align='right'>{row.phone}</TableCell>
								<TableCell align='right'>
									<Link to='/payment'>
										{' '}
										<button className=' mx-3 btn btn-info text-light fw-bold'>
											Pay Now
										</button>
									</Link>
									<button
										onClick={() => handleDeleteUser(row._id)}
										className='btn btn-danger fw-bold'
									>
										Delete
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default MyBookings;
