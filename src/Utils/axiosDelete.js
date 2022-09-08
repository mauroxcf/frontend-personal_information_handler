import axios from 'axios';

/**
 * It's an async function that takes two arguments, a setLoading function and a url string. It then
 * uses axios to make a delete request to the url and returns the response. If there's an error, it
 * logs it to the console.
 * @param url - The url to send the request to.
 * @returns The response from the server.
 */
async function axiosDelete(url) {
	try {
		const { data: response } = await axios.delete(url);
		return response;
	} catch (error) {
		console.error(error);
	}
}

export default axiosDelete;
