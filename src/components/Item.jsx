import React from 'react';
import Tag from './Tag';

const Item = ({img, name, alcoholic}) => {
	return (
		<div className='bg-white ring-4 ring-gray-200/70 w-[16rem] h-[18rem] rounded-md py-3 px-3 flex flex-col gap-8'>
			<div className='flex items-center justify-center w-full h-[10rem] rounded-md overflow-hidden'>
				<img className='w-full h-full object-cover' src={img} alt={name} />
			</div>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-row items-center gap-12 justify-between'>
					<p className='text-lg font-semibold text-gray-800'>{name}</p>
				</div>
				<div className='flex flex-row gap-2 items-center'>
					<Tag tag={alcoholic} />
				</div>
			</div>
		</div>
	);
};

export default Item;
