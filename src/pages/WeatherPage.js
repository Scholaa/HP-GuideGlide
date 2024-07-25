import React, { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";
import WeatherCard from "../components/WeatherCard";
import { Grid, Box, Typography } from "@mui/material";
import AuthenticatedNavbar from "../components/AuthenticatedNavbar";

const cities = [
	"Kigali",
	"Huye",
	"Muhanga",
	"Musanze",
	"Gisenyi",
	"Byumba",
	"Cyangugu",
	"Karongi",
	"Kayonza",
	"Nyanza",
	"Rwamagana",
	"Nyamagabe",
];

const WeatherPage = ({ signOut }) => {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		const fetchAllWeather = async () => {
			const data = await Promise.all(cities.map((city) => fetchWeather(city)));
			setWeatherData(data.filter((item) => item !== null));
		};
		fetchAllWeather();
	}, []);

	return (
		<div>
			<AuthenticatedNavbar signOut={signOut} />
			<Box sx={{ paddingTop: "80px" }}></Box>
			<Typography variant="h4">Weather Forecast</Typography>
			<div style={{ padding: "20px" }}>
				<Grid container spacing={3}>
					{weatherData.map((weather, index) => (
						<Grid item xs={12} sm={6} md={3} key={index}>
							<WeatherCard
								city={weather.name}
								temperature={weather.main.temp}
								description={weather.weather[0].description}
								humidity={weather.main.humidity}
								windSpeed={weather.wind.speed}
								icon={weather.weather[0].icon}
								sunrise={weather.sys.sunrise}
								sunset={weather.sys.sunset}
								visibility={weather.visibility}
								pressure={weather.main.pressure}
								tempMax={weather.main.temp_max}
								tempMin={weather.main.temp_min}
								feelsLike={weather.main.feels_like}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default WeatherPage;
