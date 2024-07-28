import React from 'react';
import Tag from './Tag';

const Item = () => {
	return (
		<div className='bg-white ring-4 ring-gray-200/70 w-[16rem] h-[18rem] rounded-md py-3 px-3 flex flex-col gap-8'>
			<div className='bg-gray-100 flex items-center justify-center w-full h-[10rem] rounded-md overflow-hidden'>
				<img
					className='w-full h-full object-cover scale-75'
					src='https://iili.io/H8Y7Opp.webp'
					alt='coffee1'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-row items-center gap-12 justify-between'>
					<p className='text-lg font-semibold text-gray-800'>Vanilla Latte</p>
					<p className='text-gray-800 font-light'>$12.99</p>
				</div>
				<div className='flex flex-row gap-2 items-center'>
					<Tag tag='Floral' />
					<Tag tag='Chocolate' />
				</div>
			</div>
		</div>
	);
};

export default Item;
