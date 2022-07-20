import React, {useState} from "react";

function WeatherForm({onChangeCity}) {
    const[city,setCity]=useState('');
    function handlingOnchange(e){
        const value=e.target.value;
        if(value!==''){
            setCity(value);
        }

    }
    function hadleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }
    return(
        <form className="d-flex mt-3 mb-3" onSubmit={hadleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Nombre de Ciudad" aria-label="Search" onChange={handlingOnchange}/>
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
    )

}
export default WeatherForm;