import { useState } from "react";

export default function Form() {
  return (
    <form className='container'>
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="input1" class="form-control" />
            <label class="form-label" for="input1">
              Nombre 
            </label>
          </div>
        </div>
        <div class="col mb-3">
          <input
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
        <input placeholder='Televisor, bici, etc.' type="text" id="input3" class="form-control" />
        <label class="form-label" for="input3">
          Titulo
        </label>
      </div>

      <div class="col form-outline mb-4">
        <input type="number" id="input4" class="form-control" />
        <label class="form-label" for="input4">
          Peso (kg)
        </label>
      </div>

      <div class="col form-outline mb-4">
        <input  placeholder="Ejemplo: '10x20 cm'" type="text" id="input5" class="form-control" />
        <label class="form-label" for="input5">
          Tamaño
        </label>
      </div>

      <div class="col sform-outline mb-4">
        <select  id="input6" class="form-select" >
        <option default value={false}>No</option>
        <option default value={true}>sí</option>

        </select>
        <label class="form-label" for="input6">
          Fragil
        </label>
      </div>
</div>
      <div class="form-outline mb-4">
        <textarea class="form-control" id="input7" rows="4"></textarea>
        <label class="form-label" for="input7">
          Additional information
        </label>
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
