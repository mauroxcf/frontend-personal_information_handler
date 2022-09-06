import axios from 'axios';

function axiosData({ values, setData, setLoading }) {
	console.log(values);
	if (values) {
		const axiosRequest = async () => {
			try {
				const { data: response } = await axios.post(
					'http://localhost:5000/new',
					values
				);
				setData(response);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		axiosRequest();
	}
}

export default axiosData;
