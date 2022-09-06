import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='flex flex-row justify-between'>
			<Link className='cursor-pointer text-base font-bold' to='/'>
				Home
			</Link>
			<Link className='cursor-pointer text-base font-bold' to='/create_person'>
				Crear
			</Link>
			<Link className='cursor-pointer text-base font-bold' to='/search_person'>
				Buscar
			</Link>
		</header>
	);
}

export default Header;
