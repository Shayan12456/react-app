import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherWidget(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "-",
        temp: 0,
        tempMin: 0,
        tempMax: 0, 
        humidity: 0,
        feels_like: 0,
        weather: "-",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2 style={{textAlign: "center",}}>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}