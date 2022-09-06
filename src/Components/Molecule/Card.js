import React from 'react';
import { Link } from 'react-router-dom';
import RowItems from './RowItems';

function Card({ customWidth = 'max-w-sm', id }) {
	return (
		<div
			className={`p-2 ${customWidth} bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 flex flex-col gap-2`}
		>
			<div className='flex flex-col gap-2'>
				<RowItems field={'Tipo de documento'} value={'Cédula'} />
				<RowItems field={'# de documento'} value={'1143349118'} />
				<RowItems field={'Nombres'} value={'Mauricio'} />
				<RowItems field={'Apellidos'} value={'Contreras'} />
				<RowItems field={'Hobbies'} value={'Jugar smash'} />
			</div>
			<div className='flex flex-row justify-between'>
				<Link to={`/update_person/${id}`}>
					<button className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'>
						Modificar
					</button>
				</Link>
				<button className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Card;
