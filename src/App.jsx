import React from 'react';
import Navbar from './components/Navbar';
import Searchbox from './components/Searchbox';
import Items from './components/Items';

const App = () => {
	return (
		<div className='bg-orange-100 min-h-screen flex flex-col gap-16'>
			<Navbar />
			<Searchbox />
			<Items />
		</div>
	);
};

export default App;
