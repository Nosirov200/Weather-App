import React from "react";
import axios from "axios";


const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "d9bc58b0c5ee36404e355302aaf53be7";

export const FetchWeatherAPI = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key,
        }
    });
    return data;
}