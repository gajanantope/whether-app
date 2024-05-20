import React, { useRef, useState } from "react";
import "./WhetherCard.css";
import { IoMdSearch } from "react-icons/io";

function WhetherCard() {
  const [data, setdata] = useState([]);

  const cityName = useRef("Pune");
  const handleSearach = async () => {
    try {
      const cityNameValue = cityName.current.value;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=23559c932351a9cf0c7af68f5e12d92e&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      setdata(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="card sm:w-1/3">
        <div className="searchFlex">
          <div>
            <input
              className="inputSize"
              ref={cityName}
              type="search"
              placeholder="Enter city here"
            />
          </div>
          <div>
            <button
              onClick={handleSearach}
              type="button"
              title="Search weather"
              className="inputBorder buttonSize"
            >
              <IoMdSearch />
            </button>
          </div>
        </div>

        <div className="top">
          <div>
            <p className="city">{data.name}</p>
            {data && data.weather && (
              <p className="weather-description">
                {data.weather[0].description}
              </p>
            )}
          </div>
        </div>

        <div className="bottom">
          {data && data.main && (
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
          )}
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              {data && data.main && (
                <span className="parameter-value">
                  {data.main.feels_like}°C
                </span>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              {data && data.main && (
                <span className="parameter-value">{data.main.humidity}m/s</span>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              {data && data.main && (
                <span className="parameter-value">{data.main.humidity}%</span>
              )}
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              {data && data.main && (
                <span className="parameter-value">{data.main.pressure}hPa</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhetherCard;
