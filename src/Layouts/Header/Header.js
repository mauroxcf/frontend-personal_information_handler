import React from 'react';

function Header() {
	return (
		<header className='flex flex-row justify-between'>
			<div className='cursor-pointer text-base font-bold'>Home</div>
			<div className='cursor-pointer text-base font-bold'>Crear</div>
			<div className='cursor-pointer text-base font-bold'>Buscar</div>
		</header>
	);
}

export default Header;
