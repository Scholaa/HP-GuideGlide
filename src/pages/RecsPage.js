import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const PredictComponent = () => {
	const [inputData, setInputData] = useState({});
	const [prediction, setPrediction] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputData({
			...inputData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://8fzw3qmwk0.execute-api.us-east-1.amazonaws.com/prod/predict",
				{
					payload: inputData,
				}
			);
			setPrediction(response.data);
		} catch (error) {
			console.error("Error fetching prediction:", error);
		}
	};

	return (
		<div>
			<Box sx={{ paddingTop: "80px" }}></Box>
			<form onSubmit={handleSubmit}>
				{/* Replace with your input fields */}
				<input
					type="text"
					name="userId"
					onChange={handleInputChange}
					placeholder="User ID"
				/>
				<input
					type="text"
					name="attractionId"
					onChange={handleInputChange}
					placeholder="Attraction ID"
				/>
				{/* Add other fields as needed */}
				<button type="submit">Get Prediction</button>
			</form>
			{prediction && (
				<div>
					<h3>Prediction Result</h3>
					<pre>{JSON.stringify(prediction, null, 2)}</pre>
				</div>
			)}
		</div>
	);
};

export default PredictComponent;
