import React, { useEffect, useState } from 'react';
import EachProperty from '../PropertyList/EachProperty/EachProperty';

const PropertyListing = () => {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		fetch('https://radiant-ravine-73598.herokuapp.com/apartment')
			.then((res) => res.json())
			.then((data) => setProperties(data));
	}, []);
	return (
		<>
			<div>
				<div className='row mx-auto container'>
					{properties.map((property) => (
						<EachProperty key={property.id} property={property}></EachProperty>
					))}
				</div>
			</div>
		</>
	);
};

export default PropertyListing;
