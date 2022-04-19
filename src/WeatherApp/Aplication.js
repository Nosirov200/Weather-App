import React, { useState } from "react";
import { FetchWeatherAPI } from "./api/FetchWeatherAPI";

const Aplication = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await FetchWeatherAPI(query);
            setWeather(data);
            setQuery();
            console.log(data)
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center p-3">
                <div className="w-75">
                    <label for="City_name" class="form-label "></label>
                    <input type="text" class="form-control w-100"
                        value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}  id="city-name"/>
                    <label class="form-text" for="city-name"><h4>Joy nomini kiriting!</h4></label>
                </div>
            </div>
            <div className="container  d-flex justify-content-center p-3 mx-auto">
            {weather.main && (
                    <div className="card mx-auto p-3 border rounded-3 shadow p-3 mb-5 bg-body rounded text-center">
                        <div className="card-img">
                            <img className="city-icon " src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        </div>
                        <div className="card-body">
                            <h2 className="heading-2">
                                <span className="text-danger">{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                            <div className="city-temp fs-5">
                                {Math.round(weather.main.temp)} <sup>°C</sup>
                                <h3 className="form-text fs-5 text-capitalize">{weather.weather[0].description}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Aplication;