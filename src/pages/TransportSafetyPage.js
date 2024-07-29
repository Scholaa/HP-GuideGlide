// src/pages/TransportSafetyPage.js
import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Container,
	Box,
} from "@mui/material";
import styled from "@emotion/styled";
import AuthenticatedNavbar from "../components/AuthenticatedNavbar";

const defaultLat = -1.6867; // Latitude
const defaultLon = 29.2591; // Longitude

const Root = styled(Container)`
	flex-grow: 1;
	padding: 24px;
`;

const SectionTitle = styled(Typography)`
	margin-bottom: 16px;
`;

const WeatherCard = styled(Card)`
	background-color: #f5f5f5;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 100%;
`;

const TravelGuideCard = styled(Card)`
	background-color: #f5f5f5;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 100%;
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

const TransportSafetyPage = ({ signOut }) => {
	const [location, setLocation] = useState({
		lat: defaultLat,
		lon: defaultLon,
	});
	const [weather, setWeather] = useState(null);
	const [travelGuide, setTravelGuide] = useState("");

	useEffect(() => {
		getLocation();
	}, []);

	const getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({ lat: latitude, lon: longitude });
					reverseGeocode(latitude, longitude);
					fetchWeather(latitude, longitude);
				},
				(error) => handleDefaultLocation(error)
			);
		} else {
			setTravelGuide("Geolocation is not supported by this browser.");
			handleDefaultLocation();
		}
	};

	const handleDefaultLocation = (error) => {
		let alertMessage = "Using default location.";
		if (error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					alertMessage = "User denied the request for Geolocation.";
					break;
				case error.POSITION_UNAVAILABLE:
					alertMessage = "Location information is unavailable.";
					break;
				case error.TIMEOUT:
					alertMessage = "The request to get user location timed out.";
					break;
				case error.UNKNOWN_ERROR:
					alertMessage = "An unknown error occurred.";
					break;
				default:
					alertMessage = "An unexpected error occurred.";
					break;
			}
			alert(`${alertMessage} Using default location.`);
		} else {
			alert(alertMessage);
		}
		reverseGeocode(defaultLat, defaultLon);
		fetchWeather(defaultLat, defaultLon);
	};


	const reverseGeocode = (lat, lon) => {
		const apiKey = "1c8d524602e745e2a4a71e3185d031ef";
		const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const city =
					data.results[0].components.city ||
					data.results[0].components.town ||
					data.results[0].components.village;
				fetchTravelGuide(city);
			})
			.catch((error) => console.error("Error:", error));
	};

	const fetchTravelGuide = (city) => {
		const url = `https://d1q04mdo12.execute-api.us-east-1.amazonaws.com/prod/travelGuide?city=${city.toLowerCase()}`;

		console.log("Fetching travel guide for:", city);
		console.log("Request URL:", url);

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok " + response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				if (data.content) {
					setTravelGuide(data.content);
				} else {
					setTravelGuide(
						"<p>Travel guide not available for this location.</p>"
					);
				}
			})
			.catch((error) => {
				console.error("Fetch error:", error);
				setTravelGuide(`<p>Error fetching travel guide: ${error.message}</p>`);
			});
	};

	const fetchWeather = (lat, lon) => {
		const apiKey = process.env.REACT_WEATHER_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const weatherDescription = data.weather[0].description;
				const temperature = data.main.temp;
				const feelsLike = data.main.feels_like;
				const tempMin = data.main.temp_min;
				const tempMax = data.main.temp_max;
				const humidity = data.main.humidity;
				const pressure = data.main.pressure;
				const windSpeed = data.wind.speed;
				const visibility = data.visibility;
				const sunrise = data.sys.sunrise;
				const sunset = data.sys.sunset;
				const city = data.name;
				setWeather({
					city,
					temperature,
					feelsLike,
					tempMin,
					tempMax,
					humidity,
					pressure,
					windSpeed,
					visibility,
					sunrise,
					sunset,
					weatherDescription,
				});
			})
			.catch((error) => {
				console.error("Error fetching weather data:", error);
				setWeather({
					city: "Unknown",
					temperature: "N/A",
					feelsLike: "N/A",
					tempMin: "N/A",
					tempMax: "N/A",
					humidity: "N/A",
					pressure: "N/A",
					windSpeed: "N/A",
					visibility: "N/A",
					sunrise: "N/A",
					sunset: "N/A",
					weatherDescription: `Error fetching weather updates: ${error.message}`,
				});
			});
	};

	const formatTime = (timestamp) => {
		const date = new Date(timestamp * 1000);
		return date.toLocaleTimeString("en-US", {
			timeZone: "Africa/Kigali",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<Root>
			<div>
				<AuthenticatedNavbar signOut={signOut} />
				<Box sx={{ paddingTop: "80px" }}></Box>
			</div>
			<SectionTitle variant="h4">Travel & Safety</SectionTitle>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					<TravelGuideCard>
						<CardContent>
							{/* <Typography variant="h5">Travel Guide</Typography> */}
							<Typography
								variant="body1"
								dangerouslySetInnerHTML={{ __html: travelGuide }}
							></Typography>
						</CardContent>
					</TravelGuideCard>
				</Grid>
				<Grid item xs={12} md={4}>
					<WeatherCard>
						<CardContent>
							<Typography variant="h5">Weather Updates</Typography>
							{weather ? (
								<>
									<Typography variant="h6">{weather.city}</Typography>
									<DataRow>
										<DataLabel variant="body2">Temperature:</DataLabel>
										<DataValue variant="body2">
											{weather.temperature}°C
										</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Feels Like:</DataLabel>
										<DataValue variant="body2">{weather.feelsLike}°C</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Min Temp:</DataLabel>
										<DataValue variant="body2">{weather.tempMin}°C</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Max Temp:</DataLabel>
										<DataValue variant="body2">{weather.tempMax}°C</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Humidity:</DataLabel>
										<DataValue variant="body2">{weather.humidity}%</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Pressure:</DataLabel>
										<DataValue variant="body2">
											{weather.pressure} hPa
										</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Wind Speed:</DataLabel>
										<DataValue variant="body2">
											{weather.windSpeed} m/s
										</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Visibility:</DataLabel>
										<DataValue variant="body2">
											{weather.visibility / 1000} km
										</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Sunrise:</DataLabel>
										<DataValue variant="body2">
											{formatTime(weather.sunrise)}
										</DataValue>
									</DataRow>
									<DataRow>
										<DataLabel variant="body2">Sunset:</DataLabel>
										<DataValue variant="body2">
											{formatTime(weather.sunset)}
										</DataValue>
									</DataRow>
									<Typography variant="body1">
										Condition: {weather.weatherDescription}
									</Typography>
								</>
							) : (
								<Typography variant="body1">
									Loading weather updates...
								</Typography>
							)}
						</CardContent>
					</WeatherCard>
				</Grid>
			</Grid>
		</Root>
	);
};

export default TransportSafetyPage;
