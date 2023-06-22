import { useState, useEffect } from "react";
import axios from "axios";
import { WarningOutlined } from "@ant-design/icons";
const Weather = () => {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

  //console.log("api키", WEATHER_API_KEY);
  const [weather, setWeather] = useState<WeatherState>([]);
  const [temp, setTemp] = useState<WeatherMain>({ temp: 0 });
  const [error, setError] = useState(false);

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
        // console.log("res", res);
        const weather = res.data.weather;
        const temp = res.data.main;
        setWeather(weather);
        setTemp(temp);
        setError(false);
      } catch (errors) {
        console.log(errors);
        setError(true);
      }
    }
    getWeather();
  }, []);

  const handleErrorMSG = () => {
    alert(
      "날씨정보를 받아올 수 없습니다. 네트워크 연결을 확인하거나 관리자에게 문의해 주세요."
    );
  };

  return (
    <div>
      {error ? (
        <button
          className=" flex justify-center items-center p-5"
          onClick={handleErrorMSG}
        >
          <WarningOutlined className=" text-3xl text-white" />
          <span className=" text-white text-base px-3">정보 없음</span>
        </button>
      ) : (
        <div>
          {" "}
          {weather.slice(0, 1).map((e, index) => {
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
      )}
    </div>
  );
};

export default Weather;

//axios에서 받아오는 데이터 타입정의 문제

// vite에서 .env 설정 불러오는 문제
