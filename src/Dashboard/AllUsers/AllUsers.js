import React, { useEffect, useState } from 'react';

const AllUsers = () => {
	const [allUsers, setAllAllUsers] = useState([]);

	useEffect(() => {
		fetch('https://radiant-ravine-73598.herokuapp.com/users')
			.then((res) => res.json())
			.then((data) => setAllAllUsers(data));
	}, []);

	return (
		<div>
			<h1 className='title p-5 m-5'>Total Users : {allUsers.length} </h1>

			<div className='row mx-auto container'>
				{allUsers.map((alluser) => (
					<li>
						Name: {alluser.displayName} <br /> Email: {alluser.email} <br />{' '}
						<br /> <br />
					</li>
				))}
			</div>
		</div>
	);
};
export default AllUsers;
