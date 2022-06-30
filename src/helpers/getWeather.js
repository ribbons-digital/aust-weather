import axios from "axios";
const KEY = process.env.OPEN_WEATHER;

const getWeather = (id, setWeatherData) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&appId=${KEY}&units=metric`
    )
    .then((res) => {
      setWeatherData(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getWeather;
