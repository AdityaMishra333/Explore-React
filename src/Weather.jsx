import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import "./style.css"

const API_KEY = "1aff0c36f99a1667ad329ffff09e8400"

function Weather() {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState("Allahabad")
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data))
    },[city])

    if(!weather || !weather.main) return <p>Loading...</p>

    return(
        <div className="mainbox2">
            <h2>{weather.name}</h2>
            <p>Temp: {weather.main.temp}°C</p>
            <p>Feels like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind speed: {weather.wind.speed}m/s</p>
            <p>Pressure: {weather.main.pressure}hPa</p>
            <p>Visibility: {weather.visibility/1000}Km</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    )
}

export default Weather