import React, { useState } from 'react';
import {API_KEY, API_URL } from '../../utils/constants';
import './SearchBox.css';

const SearchBox = ({updateInfo}) => {
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(null);

    const getWeatherInfo = async () => {
        const data = await fetch(API_URL + cityName + '&appid=' + API_KEY + '&units=metric');
        const json = await data.json();

        const response = {
            city: json.name,
            feelsLike: json.main.feels_like,
            humidity: json.main.humidity,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            weather: json.weather[0].description,
            windGust: json.wind.gust,
            windSpeed: json.wind.speed,
        };
        return response;
    }

    const handleInput = (event) => {
        const input = event.target.value;
        setCityName(input);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(null);
        } catch (error) {
            if(cityName.trim() === '') return;
            setError("Enter a valid city name!");
        }
        setCityName('');
    };

  return (
    <div className='SearchBox'>
        <h3>Search for Weather</h3>
        <form className='SearchForm' onSubmit={handleSubmit}>
            <input className='SearchInput' type='text' placeholder='City name' value={cityName} onChange={handleInput}/>
            <button className='SearchButton' type='submit'>Search</button>
        </form>
        {error && <p className='ErrorMessage'>{error}</p>}
    </div>
  );
};

export default SearchBox;