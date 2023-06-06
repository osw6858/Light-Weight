import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

  //console.log("api키", WEATHER_API_KEY);
  const [weather, setWeather] = useState<WeatherState>([]);
  const [temp, setTemp] = useState<WeatherMain>({ temp: 0 });

  type WeatherState = Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;

  type WeatherMain = {
    temp: number;
  };

  useEffect(() => {
    async function getWeather() {
      try {
        const res = await axios.get(WEATHER_API_URL + WEATHER_API_KEY);
        //console.log("res", res);
        const weather = res.data.weather;
        const temp = res.data.main;
        setWeather(weather);
        setTemp(temp);
      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
  }, []);

  return (
    <div>
      {weather.map((e, index) => {
        return (
          <div
            key={index}
            className="flex flex-col  align-middle mx-2 pt-1 md:p-2 md:mr-10"
          >
            <img
              className="object-cover h-12 w-12 md:h-14 md:w-14"
              src={`https://openweathermap.org/img/wn/${e.icon}@2x.png`}
              alt="날씨 아이콘"
            />
            <span className="text-center text-slate-400 sm:text-base md:text-2xl mx-3">
              Seoul, {Math.round(temp.temp * 10) / 10}°C
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;

//axios에서 받아오는 데이터 타입정의 문제

// vite에서 .env 설정 불러오는 문제
