import React, {useEffect, useState} from 'react';
import GlobalContext from './GlobalContext';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const ContextProvider = ({children}) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('a');

	const fetchData = async () => {
		setLoading(true);
		const response = await fetch(`${url}${search}`);
		const apiData = await response.json();
		const {drinks} = apiData;
		setData(drinks);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [search]);

	return (
		<GlobalContext.Provider value={{data, setData, loading, setSearch}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
