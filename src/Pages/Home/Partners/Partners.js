import React from 'react';
import './Partners.css';
import {
	SiAirbnb,
	SiAirbus,
	SiAirchina,
	SiAccenture,
	SiAmazon,
	SiGrab,
	SiOvercast,
} from 'react-icons/si';
import {
	FaCcApplePay,
	FaCcPaypal,
	FaCcAmazonPay,
	FaGooglePay,
} from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';

const Partners = () => {
	return (
		<div className='my-5'>
			<h1 className='title'>Our Partners</h1>
			<h6 className='title mb-4'>The Companies That Collaborate with</h6>
			<div className='container'>
				<Col xs='auto' className='d-flex justify-content-evenly'>
					<SiAirbnb className='partner-icon' />
					<SiAirbus className='partner-icon' />
					<SiAirchina className='partner-icon' />
					<SiGrab className='partner-icon' />
				</Col>
				<Col className='d-flex justify-content-evenly'>
					<FaCcApplePay className='partner-icon' />
					<FaCcPaypal className='partner-icon' />
					<FaCcAmazonPay className='partner-icon' />
					<FaGooglePay className='partner-icon' />
				</Col>
			</div>
		</div>
	);
};

export default Partners;
