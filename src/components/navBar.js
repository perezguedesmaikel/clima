import React from "react";
import WeatherForm from "./WheaterForm";

function Navbar({onChangeCity}) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Cuba Clima</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <WeatherForm onChangeCity={onChangeCity}/>
                    </div>
                </div>
            </nav>
        </div>

    )

}
export default Navbar;