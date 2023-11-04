import React, { useState, useEffect } from 'react';
import './Weather.css';
import { SearchOutlined } from "@ant-design/icons";
import cleanImage from "../Weather/Assest/Clean.png";
import Haze from "../Weather/Assest/Haze.png";
import Rainy from "../Weather/Assest/Rainy.jpeg";

const Weather = () => {
  const [search, setsearch] = useState("Gwalior");
  const [report, setreport] = useState(null);
  const [currentLocalTime, setCurrentLocalTime] = useState('');
  const [weatherimg, setweatherimg] = useState(cleanImage);

  const ApiKey = "7356e03dd2b20e112180542642b8f376"; // Replace with your API key
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=${units}&appid=${ApiKey}`;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setreport(data);

        // Set the weather image based on the weather conditions
        if (data.weather[0].main === "Rainy") {
          setweatherimg(Rainy);
        } else if (data.weather[0].main === "Clear") {
          setweatherimg(cleanImage);
        } else {
          setweatherimg(Haze);
        }
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData(); // Fetch weather data when the component mounts

    // Update the local time every second
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentLocalTime(now.toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, []);

  return (
    <div className='weatherbox'>
      <div style={{ display: "flex" }}>
        <input
          className='search'
          type='text'
          placeholder='Search city'
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button className='button' onClick={fetchWeatherData}>
          <SearchOutlined style={{ fontSize: "30px", color: "grey", position: "absolute", marginTop: "-15px", marginLeft: "-54px" }} />
        </button>
      </div>
      {report && (
        <div>
          <div className='city' >{report.name}</div>
          <div style={{ display: "flex", marginLeft: "100px" }}>
            <div>
              <img width={"100px"} src={weatherimg} alt="Weather Icon" />
            </div>
            <div ><h1 style={{ color: "blue" }}>{report.main.temp}°C</h1> </div>
          </div>
          <div style={{ marginLeft: "100px", width: "220px", marginTop: "20px", fontSize: '45px', color: "gray" }}> {currentLocalTime}</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
