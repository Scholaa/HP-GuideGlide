import axios from "axios";

const logInteraction = async (username, attractionId, interactionType) => {
	const timestamp = new Date().toISOString();
	const payload = {
		username,
		attractionId,
		interactionType,
		timestamp,
	};

	console.log("Payload:", payload); // Log the payload being sent

	try {
		const response = await axios.post(
			"https://bkyne235j9.execute-api.us-east-1.amazonaws.com/prod/interactions", // Update with your correct URL
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
