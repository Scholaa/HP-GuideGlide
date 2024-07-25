import axios from "axios";

const logInteraction = async (username, attractionId, interactionType) => {
	const timestamp = new Date().toISOString();

	try {
		const response = await axios.post(
			"https://ir57yz8q41.execute-api.us-east-1.amazonaws.com/prod/interactions",
			{
				username,
				attractionId,
				interactionType,
				timestamp,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log("Interaction logged:", response.data);
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.error("Error response data:", error.response.data);
			console.error("Error response status:", error.response.status);
			console.error("Error response headers:", error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			console.error("Error request data:", error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.error("Error message:", error.message);
		}
		console.error("Error config:", error.config);
	}
};

export default logInteraction;
