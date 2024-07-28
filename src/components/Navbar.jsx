import React from 'react';

const Navbar = () => {
	return (
		<nav className='flex flex-row items-start justify-between px-28 py-10'>
			<img className='w-32' src='../public/logo.png' alt='logo' />
			<div className='flex flex-row items-center gap-10'>
				<a className='text-yellow-500 text-lg' href='#'>
					About us
				</a>
				<a className='text-gray-800 text-lg' href='#'>
					Products
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
