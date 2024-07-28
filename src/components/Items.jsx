import React, {useContext} from 'react';
import GlobalContext from '../context/GlobalContext';
import Item from './Item';

const Items = () => {
	const {data, loading} = useContext(GlobalContext);
	if (loading) {
		return (
			<p className='text-2xl text-slate-400 font-bold animate-pulse text-center'>
				Loading...
			</p>
		);
	}
	return (
		<div className='grid grid-cols-4 gap-8 px-40 py-20'>
			{data.map((cocktail) => {
				const {idDrink, strDrinkThumb, strDrink, strAlcoholic} = cocktail;

				return (
					<Item
						key={idDrink}
						img={strDrinkThumb}
						name={strDrink}
						alcoholic={strAlcoholic}
					/>
				);
			})}
		</div>
	);
};

export default Items;
