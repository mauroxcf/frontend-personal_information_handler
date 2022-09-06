import React from 'react';

function RowItems({ field, value }) {
	return (
		<div className='flex flex-row text-xs md:text-sm'>
			<p className='w-2/4 self-center'>{field}:</p>
			<p className='w-2/4 self-center'>{value}</p>
		</div>
	);
}

export default RowItems;
