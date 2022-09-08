import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllPersonUrl } from '../Data/backendEndpoints';

/**
 * The function uses the useEffect hook to fetch data from the server and update the state of the data
 * property.
 * @returns An object with two properties: data that contains all the registered people and loading.
 */
function useGetPerson(dataChanges) {
	const [data, setData] = useState({ data: [] });
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const { data: response } = await axios.get(getAllPersonUrl);
			setData(response);
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [dataChanges]);

	return { data, loading };
}

export default useGetPerson;
