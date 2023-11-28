import "./SearchBox.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "65bd02736bd8daa8081e68ebd0259e5f";
    let getWeatherInfo = async ()=>{
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await res.json();
        try{
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max, 
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            }
            return result;
        }catch(err){
                throw err;
        }
    };
    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        console.log(newInfo);
        updateInfo(newInfo);
        setError(false);
        }catch(err){
            setError(true);
        }
    }
    

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} className="search"/>
                <br /><br />
                <Button variant="contained" type="submit">Send</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}