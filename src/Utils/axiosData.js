import axios from 'axios';

async function axiosData(values, setData, setLoading) {
	try {
		const { data: response } = await axios.post(
			'http://localhost:5000/new',
			values
		);
		setData(response);
		return response;
	} catch (error) {
		console.error(error);
	}
	setLoading(false);
}

export default axiosData;
