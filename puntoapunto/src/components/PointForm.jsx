import { useEffect } from "react";
import { useState } from "react";
import {validate} from '../services.js'
function getContries() {
  return fetch("https://api-wcountries.herokuapp.com/countries").then((res) =>
    res.json()
  );
}

function getContinents(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr.continent)) {
      acc.push(curr.continent);
    }
    return acc;
  }, []);
}

function getFilteredCountries (arr, continent) {
  return arr.filter((country) => country.continent === continent);
};

export default function PointForm ({ name, superSetInput, superInput ,setErrors,  index}) {
  let [countries, setCountries] = useState([]);
  let [countriesFiltered, setCountriesFiltered] = useState([
    "Primero selecciona un continente",
  ]);
  let [input,setInput] = useState({
    continente:'',pais:'',ciudad:'',direccion:''
  })
  let [continents, setContinents] = useState([]);
  let [errors, setmyErrors] = useState({})

  useEffect(() => {
    getContries().then((res) => {
      setCountries(res);
      setContinents(getContinents(res));
    });
  }, []);

  useEffect(()=>{
    
    setInput(superInput.puntos[index]);
  }, [superInput])

  function handleInputChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "continente") {

      setCountriesFiltered(
        getFilteredCountries(countries, e.target.value).map(
          (country) => country.name
        )
      );

    }
    let arr = superInput.puntos?.slice();
    arr[index]={
      ...input,
      [e.target.name]: e.target.value,
    }
    superSetInput({
        ...superInput,
        puntos:[...arr]
    })
    setErrors(validate({
        ...superInput,
        puntos:[...arr]
    }))
    setmyErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <h3> {name}</h3>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <select value={input.continente} onChange={handleInputChange} name="continente" id="pinput1" className="form-select">
              <option key={-1} defaultValue value="seleccionar">
                seleccionar
              </option>
              {continents.length > 0
                ? continents.map((continent,i) => {

                    return <option key={i} value={continent}>{continent}</option>;
                  })
                : null}
            </select>
            <label className="form-label" htmlFor="pinput1">
              Continente
            </label>
            <span className='danger_input'>{errors.continente}</span>

          </div>
        </div>
        <div className="col mb-3">
          <div className="form-outline">
            <select value={input.pais} onChange={handleInputChange} name="pais" id="pinput2" className="form-select">
              {countriesFiltered.length > 0
                ? countriesFiltered.map((country,i) => {

                    return <option key={i} value={country}>{country}</option>;
                  })
                : null}
            </select>
            <label className="form-label" htmlFor="pinput2">
              País
            </label>
            <span className='danger_input'>{errors.pais}</span>

          </div>
        </div>
        <div className="col mb-3">
          <div className="form-outline">
            <input value={input.ciudad} name='ciudad' onChange={handleInputChange} type="text" id="pinput3" className="form-control" />
            <label className="form-label" htmlFor="pinput3">
              Ciudad
            </label>
            <span className='danger_input'>{errors.ciudad}</span>

          </div>
        </div>
        <div className="col mb-3">
          <div className="form-outline">
            <input value={input.direccion} name="direccion" onChange={handleInputChange} type="text" id="pinput4" className="form-control" />
            <label className="form-label" htmlFor="pinput4">
              Dirección
            </label>
            <span className='danger_input'>{errors.direccion}</span>

          </div>
        </div>
      </div>
    </div>
  );
}
