import { useState } from "react";
import PointForm from "./PointForm";
import { postQuotation } from "../services";

export default function Form() {
  let [input, setInput] = useState({ fragil: false, puntos: [{}, {}] });

  function handleInputChange(e) {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postQuotation(input);
    console.log(input);
  }

  return (
    <form className="container">
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              onChange={handleInputChange}
              name="nombre_cotizante"
              type="text"
              id="nombre"
              className="form-control"
            />
            <label className="form-label" htmlFor="nombre">
              Nombre
            </label>
          </div>
        </div>
        <div className="col mb-3">
          <input
            onChange={handleInputChange}
            name="email_cotizante"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
        </div>
      </div>
      <h3>¿Qué piensas enviar?</h3>
      <div className="row">
        <div className="col form-outline mb-4">
          <input
            onChange={handleInputChange}
            name="titulo"
            placeholder="Televisor, bici, etc."
            type="text"
            id="input3"
            className="form-control"
          />
          <label className="form-label" htmlFor="input3">
            Titulo
          </label>
        </div>

        <div className="col form-outline mb-4">
          <input
            onChange={handleInputChange}
            name="peso_kg"
            type="number"
            id="input4"
            className="form-control"
          />
          <label className="form-label" htmlFor="input4">
            Peso (kg)
          </label>
        </div>

        <div className="col form-outline mb-4">
          <input
            onChange={handleInputChange}
            name="medidas"
            placeholder="Ejemplo: '10x20 cm'"
            type="text"
            id="input5"
            className="form-control"
          />
          <label className="form-l abel" htmlFor="input5">
            Medidas
          </label>
        </div>

        <div className="col sform-outline mb-4">
          <select
            onChange={handleInputChange}
            name="fragil"
            id="input6"
            className="form-select"
          >
            <option key={1} default value={false}>
              No
            </option >
            <option key={2} default value={true}>
              Sí
            </option>
          </select>
          <label onChange={handleInputChange} className="form-label" htmlFor="input6">
            Frágil
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h2>De donde a donde</h2>
        <hr />
        <PointForm
          name="Desde PuntoA"
          superInput={input}
          superSetInput={setInput}
          index={0}
        />
        <PointForm
          name="Hasta PuntoB"
          superInput={input}
          superSetInput={setInput}
          index={1}
        />
      </div>

      {/* <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="input8"
          checked
        />
        <label className="form-check-label" htmlFor="input8">
          {" "}
          Create an account?{" "}
        </label>
      </div> */}

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </form>
  );
}
