import React from 'react';
import './InfoBox.css';

const InfoBox = ({city, feelsLike, humidity, temp, tempMax, tempMin, weather, windGust, windSpeed}) => {

  return (
    <div>
        {city && (
            <div className='InfoBox'>
                <h2 className='InfoTitle'>{city}</h2>
                <div className='InfoData'>
                    <p>Feels Like: {feelsLike}°C</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Temperature: {temp}°C</p>
                    <p>Max Temperature: {tempMax}°C</p>
                    <p>Min Temperature: {tempMin}°C</p>
                    <p>Weather: {weather}</p>
                    <p>Wind Gust: {windGust} m/s</p>
                    <p>Wind Speed: {windSpeed} m/s</p>
                </div>
            </div>
        )}
    </div>
  );
};

export default InfoBox;