import React from 'react';
import RowItems from './RowItems';

function Card() {
	return (
		<div className='p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col gap-2'>
			<div className='flex flex-col gap-2'>
				<RowItems field={'Tipo de documento'} value={'Cédula'} />
				<RowItems field={'# de documento'} value={'1143349118'} />
				<RowItems field={'Nombres'} value={'Mauricio'} />
				<RowItems field={'Apellidos'} value={'Contreras'} />
				<RowItems field={'Hobbies'} value={'Jugar smash'} />
			</div>
			<div className='flex flex-row justify-between'>
				<button className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'>
					Modificar
				</button>
				<button className='cursor-pointer p-1 text-xs md:text-sm rounded-xl bg-sky-200'>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Card;
