import React, {useEffect, useState} from "react";
import './App.css';
import WeatherMainInfo from "./components/WheaterMainInfo";
import Navbar from "./components/navBar";
import RecipeReviewCard from "./components/card";
import BottomAppBar from "./components/footer";

function App() {
  const [weather,setWeather]=useState(null);
    useEffect(()=>{loadInfo().then()},[]);
    useEffect(()=>{
        document.title=`Tiempo|${weather?.location.name ?? ''}`
    })
  async function loadInfo(city = 'Sancti Spíritus') {
      try {
          const respuesta = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
          const json=await respuesta.json();
          console.log(json);
          setWeather(json);
      } catch (e) {

      }
  }
  function onChangeCity(city) {
     setWeather(null);
     loadInfo(city).then();
  }
  return (
    <div className="App">
        <Navbar onChangeCity={onChangeCity}/>
        <div className='container d-flex flex-wrap justify-content-center mt-2 mb-2'>
        <RecipeReviewCard weather={weather}/>
        </div>
        <BottomAppBar/>
    </div>
  );
}

export default App;
