import React from "react";

function WeatherMainInfo({weather}) {
    return(
        <div>
            <div>
                <img  src={`http:${weather?.current.condition.icon}`} width='auto' alt={'clima'}/>
            </div>
            <div>
               <h2>Clima: {weather?.current.condition.text}</h2>
            </div>
            <div>
               Temperatura: {weather?.current.temp_c}°
            </div>
        </div>
    )

}
export default WeatherMainInfo;