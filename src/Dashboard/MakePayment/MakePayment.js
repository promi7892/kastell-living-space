import React from 'react';
import soon from '../../Images/soon.jpg';
import Footer from '../../Pages/Home/Footer/Footer';

const MakePayment = () => {
	return (
		<>
			<div className='container mx-5'>
				<h1 className='title my-5'>We are coming soon</h1>
				<img src={soon} className='w-75 h-75' alt='soon'></img>
			</div>
			<Footer></Footer>
		</>
	);
};

export default MakePayment;
