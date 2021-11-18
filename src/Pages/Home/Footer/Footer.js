import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../Hooks/useAuth';

import {
	faMapMarkedAlt,
	faMailBulk,
	faPhoneAlt,
	faArrowAltCircleRight,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
	const { user } = useAuth();

	const location = <FontAwesomeIcon icon={faMapMarkedAlt} />;
	const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
	const mail = <FontAwesomeIcon icon={faMailBulk} />;
	const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
	const mapArrow = <FontAwesomeIcon icon={faLongArrowAltRight} />;
	return (
		<div className='bg-dark text-light'>
			<Container className='mt-5'>
				{/* <img src={img1} alt='' className='logo w-25 mt-2' /> */}
				<Row>
					<Col className='my-5'>
						<h5 className='w-50 fw-bold mb-3'>About livin Home</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
							ullam error enim numquam est quam odit nisi dolores accusamus
							impedit.
						</p>
					</Col>
					<Col className='my-5'>
						<h5 className='fw-bold mb-3'>Reach livin Home </h5>
						<p>{location} Via Venti Settembre, Ireland</p>
						<p>{phone} 011-2233-445</p>
						<p>{mail} customerservice@livin Home.com</p>
						<br />
						<h5> Locate us at Map &nbsp;&nbsp; {mapArrow}</h5>
					</Col>

					<Col className='quick-link my-5'>
						<h5 className='fw-bold mb-3'>Quick Links</h5>
						<li>
							<a href='#'>{arrow}&nbsp; &nbsp;Destinations</a>
						</li>
						<li>
							<a href='#'>{arrow} &nbsp;&nbsp;Travel Packages</a>
						</li>
						<li>
							<a href='#'>{arrow} &nbsp;&nbsp;Blog Post</a>
						</li>
						<li>
							<a href='#'>{arrow} &nbsp;&nbsp;Contact Us</a>
						</li>
						<li>
							<a href='#'>{arrow} &nbsp;&nbsp;About Us</a>
						</li>
					</Col>

					<Col className='my-5'>
						<h5 className='fw-bold mb-3'>Newsletter</h5>
						<p>
							Sign up for our newsletter and get updated about our latest
							promotions
						</p>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='exampleForm.ControlInput1'
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' placeholder={user.email} />
							</Form.Group>
						</Form>
						<div className='btn btn-info'>Send</div>
					</Col>

					<hr />
					<div className='d-flex justify-content-between'>
						<p>Terms and Consditions | Privacy Policy</p>
						<p className='text-center'> All rights reserved © By Promi </p>
						<p>2021 Qode Interactive</p>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
