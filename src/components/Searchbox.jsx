import React from 'react';

const Searchbox = () => {
	return (
		<form className='bg-white py-3 px-4 rounded-md w-[32rem] self-center ring ring-gray-200/70'>
			<input
				className='bg-none text-lg text-gray-800 outline-none w-full placeholder:font-extralight placeholder:text-gray-400'
				type='text'
				placeholder='Search for coffee'
			/>
		</form>
	);
};

export default Searchbox;
