import React from 'react';

function Card() {
	return (
		<div className='p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col gap-2'>
			<div className='flex flex-row gap-2'>
				<div className='flex flex-col text-xs md:text-sm'>
					<p>Tipo de documento:</p>
					<p># de documento:</p>
					<p>Nombres:</p>
					<p>Apellidos:</p>
					<p>Hobbies:</p>
				</div>
				<div className='flex flex-col text-xs md:text-sm'>
					<p>Cédula</p>
					<p>1143349118</p>
					<p>Mauricio</p>
					<p>Contreras</p>
					<p>Jugar smash</p>
				</div>
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
