import React, { useState } from 'react';
import SearchBox from '../searchbox/SearchBox';
import InfoBox from '../infobox/InfoBox';
import './WeatherApp.css';

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({});

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

  return (
    <div className='WeatherApp'>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox {...weatherInfo}/>
    </div>
  );
};

export default WeatherApp;