import {useState} from "react"


export default function ({name}) {
  return (
    <div>
    <h3> {name}</h3>
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <select type="text" id="pinput1" class="form-control" >

          </select>
          <label class="form-label" for="pinput1">
            Continente
          </label>
        </div>
      </div>
      <div class="col mb-3">
        <div class="form-outline">
          <select type="text" id="pinput1" class="form-control" >

          </select>
          <label class="form-label" for="pinput1">
            País
          </label>
        </div>
      </div>
      <div class="col mb-3">
        <div class="form-outline">
          <input type="text" id="pinput3" class="form-control" />
          <label class="form-label" for="pinput3">
            Ciudad
          </label>
        </div>
      </div>
      <div class="col mb-3">
        <div class="form-outline">
          <input type="text" id="pinput4" class="form-control" />
          <label class="form-label" for="pinput4">
            Dirección
          </label>
        </div>
      </div>
    </div>
    </div>
  )
}
