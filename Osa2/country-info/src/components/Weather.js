import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState();
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city.toLowerCase()}`)
            .then(response => {
                setWeatherData(response.data.current);
            });
    }, [city]);

    let content = <div></div>;
    if (weatherData) {
        const imgStyle = {
            height: '100px',
            border: '4px solid gray',
            borderRadius: '8px'
        }

        content = <div>
            <h4>{`Weather in ${city}`}</h4>
            <div>
                <img src={weatherData.weather_icons[0]} alt='' style={imgStyle} />
            </div>
            <div>
                <p>{weatherData.weather_descriptions[0]}</p>
                <p>Temperature: {weatherData.temperature} &deg;C</p>
                <p>Wind: {(weatherData.wind_speed * 1000 / 3600).toFixed(1)} m/s, direction {weatherData.wind_dir}</p>
            </div>
        </div>;
    }

    return <div>
        {content}
    </div>;
}

export default Weather;