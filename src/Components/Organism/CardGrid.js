import React from 'react';
import Card from '../Molecule/Card';

/**
 * map the personData array, which is passed in as a prop, and returns a
 * Card component for each item in the array
 * @returns A Card component with all the information of each person
 */
function CardGrid({ personData, setDataChanges, dataChanges }) {
	return (
		<div className='container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
			{!personData ? (
				<div>Cargando</div>
			) : (
				personData.map((person, key) => (
					<Card
						singlePerson={person}
						dataChanges={dataChanges}
						setDataChanges={setDataChanges}
						key={key}
					/>
				))
			)}
		</div>
	);
}

export default CardGrid;
