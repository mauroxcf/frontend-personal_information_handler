import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * The function uses the useEffect hook to fetch data from the server and update the state of the data
 * property.
 * @returns An object with two properties: data that contains all the registered people and loading.
 */
function useGetPerson() {
	const [data, setData] = useState({ data: [] });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get('http://localhost:5000/all');
				setData(response);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return { data, loading };
}

export default useGetPerson;
