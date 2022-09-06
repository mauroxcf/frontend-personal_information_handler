import React from 'react';
import Card from '../Molecule/Card';

function CardGrid() {
	return (
		<div className='container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default CardGrid;
