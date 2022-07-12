import { useState } from "react";
import PointForm from './PointForm'
export default function Form() {
  let [input,setInput]= useState({})

  function handleInputChange(e) {
    console.log(e.target.value);
setInput({
  [e.target.name]:e.target.value
})
  }

  return (
    <form className='container'>
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input  onChange={handleInputChange} name='nombre_cotizante' type="text" id="nombre" class="form-control" />
            <label class="form-label" for="nombre">
              Nombre
            </label>
          </div>
        </div>
        <div class="col mb-3">
          <input onChange={handleInputChange}
            name='email_cotizante'
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <label for="email" class="form-label">
            Correo electronico
          </label>
        </div>
      </div>
       <h3>¿Qué piensas enviar?</h3>
       <div className='row' >
      <div class="col form-outline mb-4">
        <input onChange={handleInputChange} name='titulo' placeholder='Televisor, bici, etc.' type="text" id="input3" class="form-control" />
        <label class="form-label" for="input3">
          Titulo
        </label>
      </div>

      <div class="col form-outline mb-4">
        <input onChange={handleInputChange} name='peso_kg' type="number" id="input4" class="form-control" />
        <label class="form-label" for="input4">
          Peso (kg)
        </label>
      </div>

      <div class="col form-outline mb-4">
        <input onChange={handleInputChange} name='medidas' placeholder="Ejemplo: '10x20 cm'" type="text" id="input5" class="form-control" />
        <label class="form-l abel" for="input5">
          Medidas
        </label>
      </div>

      <div class="col sform-outline mb-4">
        <select name='fragil' id="input6" class="form-select" >
        <option default value={false}>No</option>
        <option default value={true}>Sí</option>

        </select>
        <label onChange={handleInputChange} class="form-label" for="input6">
          Frágil
        </label>
      </div>
</div>
    <div className='mb-4'>
    <h2>De donde a donde</h2>
    <hr/>
    <PointForm name='Desde PuntoA' />
    <PointForm name='Hasta PuntoB'/>
    </div>


      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="input8"
          checked
        />
        <label class="form-check-label" for="input8">
          {" "}
          Create an account?{" "}
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">
        Place order
      </button>
    </form>
  );
}
