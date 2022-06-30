import getWeather from "../../src/helpers/getWeather";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";
const KEY = process.env.OPEN_WEATHER;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

jest.mock("axios");
const setWeatherData = jest.fn();
const weather = {
  data: {
    coord: {
      lon: 151.2073,
      lat: -33.8679,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 15.96,
      feels_like: 15.2,
      temp_min: 14.97,
      temp_max: 17.02,
      pressure: 1021,
      humidity: 61,
    },
    visibility: 10000,
    wind: {
      speed: 2.24,
      deg: 355,
      gust: 4.02,
    },
    clouds: {
      all: 100,
    },
    dt: 1656481942,
    sys: {
      type: 2,
      id: 2002865,
      country: "AU",
      sunrise: 1656450055,
      sunset: 1656485753,
    },
    timezone: 36000,
    id: 2147714,
    name: "Sydney",
    cod: 200,
  },
};

describe("when making an API GET", () => {
  it("should use the correct url", async () => {
    const setStateMock = jest.fn();
    axios.get.mockResolvedValueOnce(weather);
    const result = await getWeather(2147714, setStateMock);

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}?id=2147714&appId=${KEY}&units=metric`
    );
  });
});

describe("when API is successful", () => {
  it("should return with weather data", async () => {
    const setStateMock = jest.fn();
    const getWeather = jest.fn(() => Promise.resolve({ res: weather }));
    const weatherData = await getWeather(KEY, setStateMock);
    console.log(weatherData);

    expect(weatherData.res.data).not.toBeUndefined();
  });
});
