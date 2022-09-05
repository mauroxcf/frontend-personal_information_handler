import React from 'react';

//UI
import Header from '../Header/Header';

/**
 * @description Render a template view with a navbar.
 * @param {*} param0
 * @returns
 */
function ViewTemplate({ children }) {
	return (
		<body className='container flex flex-col absolute top-0 min-w-full min-h-screen overflow-hidden p-4'>
			<Header />
			<main className='flex w-full pt-4 pb-20'>{children}</main>
		</body>
	);
}

export default ViewTemplate;
