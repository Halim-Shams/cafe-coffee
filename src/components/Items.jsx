import React from 'react';
import Item from './Item';

const Items = () => {
	return (
		<div className='grid grid-cols-4 gap-8 px-40 py-20'>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	);
};

export default Items;
