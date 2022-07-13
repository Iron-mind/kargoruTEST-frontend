import { useEffect } from "react";
import { useState } from "react";

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

export default function ({ name, superSetInput, superInput , index}) {
  let [countries, setCountries] = useState([]);
  let [countriesFiltered, setCountriesFiltered] = useState([
    "Primero selecciona un continente",
  ]);
  let [input,setInput] = useState({})
  let [continents, setContinents] = useState([]);

  useEffect(() => {
    getContries().then((res) => {
      setCountries(res);
      setContinents(getContinents(res));
      setInput(superInput.puntos[index]);
    });
  }, []);

  function handleInputChange(e) {
    console.log(input);
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
    arr[index]=input
    console.log(arr);
    superSetInput({
        ...superInput,
        puntos:[...arr]
    })
  }
  return (
    <div>
      <h3> {name}</h3>
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <select onChange={handleInputChange} name="continente" id="pinput1" class="form-select">
              <option selected value="seleccionar">
                seleccionar
              </option>
              {continents.length > 0
                ? continents.map((continent,i) => {
                    return <option key={i} value={continent}>{continent}</option>;
                  })
                : null}
            </select>
            <label class="form-label" for="pinput1">
              Continente
            </label>
          </div>
        </div>
        <div class="col mb-3">
          <div class="form-outline">
            <select onChange={handleInputChange} name="pais" id="pinput2" class="form-select">
              {countriesFiltered.length > 0
                ? countriesFiltered.map((country) => {
                    return <option key={country.id} value={country}>{country}</option>;
                  })
                : null}
            </select>
            <label class="form-label" for="pinput2">
              País
            </label>
          </div>
        </div>
        <div class="col mb-3">
          <div class="form-outline">
            <input name='ciudad' onChange={handleInputChange} type="text" id="pinput3" class="form-control" />
            <label class="form-label" for="pinput3">
              Ciudad
            </label>
          </div>
        </div>
        <div class="col mb-3">
          <div class="form-outline">
            <input name="direccion" onChange={handleInputChange} type="text" id="pinput4" class="form-control" />
            <label class="form-label" for="pinput4">
              Dirección
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
