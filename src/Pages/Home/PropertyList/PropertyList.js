// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import img1 from "../../../Images/Cataory/1.jpg";
// import img2 from "../../../Images/Cataory/2.png";
// import img3 from "../../../Images/Cataory/3.jpg";
// import img4 from "../../../Images/Cataory/4.jpg";
// import img5 from "../../../Images/Cataory/5.jpg";
// import img6 from "../../../Images/Cataory/6.png";
// import "./PropertyList.css";

// const PropertyList = () => {
//   return (
//     <div>
//       <div className="mx-auto text-center m-5 p-5 title">
//         <Link to="/explore">
//           <button className="btn btn-warning p-3 m-3 px-5">
//             {" "}
//             <h1>Explore Us</h1>{" "}
//           </button>
//         </Link>
//       </div>
//       <h1 className="title">Choose Catagory</h1>
//       <Container className="my-5">
//         <Row>
//           <Col className="d-flex border shadow m-3 w-50">
//             <div className="text-center mx-auto my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Mansion/Villa
//               </h5>

//               <Link to={"/mension"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3 " src={img1} alt="" />
//           </Col>
//           <Col className="d-flex  border shadow m-3">
//             <div className="text-center mx-auto my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Flat/Apartment
//               </h5>

//               <Link to={"/flat"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3" src={img2} alt="" />
//           </Col>
//           <Col className="d-flex  border shadow m-3">
//             <div className="text-center mx-auto my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Condominium
//               </h5>

//               <Link to={"/condo"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3" src={img3} alt="" />
//           </Col>
//         </Row>
//         <Row className="my-3">
//           <Col className="d-flex border shadow m-3 w-50">
//             <div className="text-center mx-auto  my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Duplex
//               </h5>

//               <Link to={"/duplex"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3 " src={img4} alt="" />
//           </Col>
//           <Col className="d-flex  border shadow m-3">
//             <div className="text-center mx-auto my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Studio
//               </h5>

//               <Link to={"/studio"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3" src={img5} alt="" />
//           </Col>
//           <Col className="d-flex  border shadow m-3">
//             <div className="text-center mx-auto my-auto">
//               <h5 className="fw-bold bg-dark rounded text-white p-1 px-3">
//                 Sove
//               </h5>

//               <Link to={"/sovo"}>
//                 <div className="btn btn-warning">See Details</div>
//               </Link>
//             </div>
//             <img className="image p-3" src={img6} alt="" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default PropertyList;

import React, { useEffect, useState } from 'react';
import EachProperty from './EachProperty/EachProperty';

const PropertyList = () => {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		fetch('https://radiant-ravine-73598.herokuapp.com/apartment')
			.then((res) => res.json())
			.then((data) => setProperties(data));
	}, []);
	return (
		<div>
			<h1 className='title'>Our Featured Properties</h1>
			{/* {properties.length} */}
			<div className='row mx-auto container'>
				{properties.slice(0, 6).map((property) => (
					<EachProperty key={property.id} property={property}></EachProperty>
				))}
			</div>
		</div>
	);
};

export default PropertyList;
