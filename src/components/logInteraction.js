import axios from "axios";

const logInteraction = async (username, attractionId, interactionType) => {
	const timestamp = new Date().toISOString();
	const payload = {
		username,
		attractionId,
		interactionType,
		timestamp,
	};

	console.log("Payload:", payload); 
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_LOG_INTERACTIONS_API_URL}/interactions`,
			payload,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log("Interaction logged:", response.data);
	} catch (error) {
		if (error.response) {
			console.error("Error response data:", error.response.data);
			console.error("Error response status:", error.response.status);
			console.error("Error response headers:", error.response.headers);
		} else if (error.request) {
			console.error("Error request data:", error.request);
		} else {
			console.error("Error message:", error.message);
		}
		console.error("Error config:", error.config);
	}
};

export default logInteraction;
