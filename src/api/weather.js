import axios from 'axios';

const API_KEY = "dd8f9786616a2d80a20f01b2483bbb4f";
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    return null;
  }
};
