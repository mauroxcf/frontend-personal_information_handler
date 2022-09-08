import axios from 'axios';

/**
 * It takes in values as parameters, and then it makes an axios post request
 * to the url with the values as the body of the request.
 * @param values - the data that is being sent to the server
 * @param setData - a function that sets the state of the data
 * @param setLoading - a function that sets the loading state to false
 * @param url - url for the request
 * @returns The response from the server.
 */
async function axiosData(values, setLoading, url) {
	try {
		const { data: response } = await axios.post(url, values);
		return response;
	} catch (error) {
		console.error(error);
	}
	setLoading(false);
}

export default axiosData;
