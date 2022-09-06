import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * The function uses the useEffect hook to fetch data from the server and update the state of the data
 * property.
 * @returns An object with two properties: data that contains all the registered people and loading.
 */
function useCreatePerson({ formValues }) {
	console.log(formValues);
	const [data, setData] = useState({ data: [] });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (formValues === { false: false }) return;
		const fetchData = async () => {
			try {
				const { data: response } = await axios.post(
					'http://localhost:5000/new',
					formValues
				);
				setData(response);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		fetchData();
	}, [formValues]);

	return { data, loading };
}

export default useCreatePerson;
