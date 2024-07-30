import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";

// Custom styles using @emotion/styled
const StyledCard = styled(Card)`
	margin: 20px;
	max-width: 300px;
	background-color: #c5e3ec;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
	width: 50px;
	height: 50px;
`;

const Temperature = styled(Typography)`
	font-weight: bold;
	font-size: 24px;
`;

const Description = styled(Typography)`
	font-style: italic;
	color: #555;
`;

const DataRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

const DataLabel = styled(Typography)`
	color: #888;
`;

const DataValue = styled(Typography)`
	font-weight: bold;
`;

const WeatherCard = ({
	city,
	temperature,
	description,
	humidity,
	windSpeed,
	icon,
	sunrise,
	sunset,
	visibility,
	pressure,
	tempMax,
	tempMin,
	feelsLike,
}) => {
	// Convert Unix timestamp to readable time in Rwandan time zone
	const formatTime = (timestamp) => {
		const date = new Date(timestamp * 1000);
		return date.toLocaleTimeString("en-US", {
			timeZone: "Africa/Kigali",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography variant="h5">{city}</Typography>
				<Grid container alignItems="center">
					<Grid item>
						<Icon
							src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
							alt={description}
						/>
					</Grid>
					<Grid item>
						<Temperature variant="h6">{temperature}°C</Temperature>
					</Grid>
				</Grid>
				<Description variant="body2">{description}</Description>
				<DataRow>
					<DataLabel variant="body2">Feels Like:</DataLabel>
					<DataValue variant="body2">{feelsLike}°C</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Min Temp:</DataLabel>
					<DataValue variant="body2">{tempMin}°C</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Max Temp:</DataLabel>
					<DataValue variant="body2">{tempMax}°C</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Humidity:</DataLabel>
					<DataValue variant="body2">{humidity}%</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Pressure:</DataLabel>
					<DataValue variant="body2">{pressure} hPa</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Wind Speed:</DataLabel>
					<DataValue variant="body2">{windSpeed} m/s</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Visibility:</DataLabel>
					<DataValue variant="body2">{visibility / 1000} km</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Sunrise:</DataLabel>
					<DataValue variant="body2">{formatTime(sunrise)}</DataValue>
				</DataRow>
				<DataRow>
					<DataLabel variant="body2">Sunset:</DataLabel>
					<DataValue variant="body2">{formatTime(sunset)}</DataValue>
				</DataRow>
			</CardContent>
		</StyledCard>
	);
};

export default WeatherCard;
