import React from 'react';
import { Link } from 'react-router-dom';
import axiosDelete from '../../Utils/axiosDelete';
import RowItems from './RowItems';

/**
 * It's a function that returns a div with some other components inside
 * @returns A component that renders a card with the information of a single person.
 */
function Card({
	customWidth = 'max-w-sm',
	singlePerson,
	setDataChanges,
	dataChanges,
}) {
	const url = 'http://localhost:5000/delete/' + singlePerson.id;
	return (
		<div
			key={singlePerson.id}
			className={`p-2 ${customWidth} bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 flex flex-col gap-2 justify-between`}
		>
			<div className='flex flex-col gap-2'>
				<RowItems
					field={'Tipo de documento'}
					value={singlePerson.document_type}
				/>
				<RowItems field={'# de documento'} value={singlePerson.document_id} />
				<RowItems field={'Nombres'} value={singlePerson.first_name} />
				<RowItems field={'Apellidos'} value={singlePerson.last_name} />
				<RowItems field={'Hobbies'} value={singlePerson.hobbie} />
			</div>
			<div className='flex flex-row justify-between'>
				<Link to={`/update_person/${singlePerson.id}`}>
					<button className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'>
						Editar
					</button>
				</Link>
				<button
					className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'
					onClick={() =>
						axiosDelete(url).then((res) => {
							if (res.status === 'success') {
								setDataChanges(dataChanges + 1);
							}
						})
					}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Card;
