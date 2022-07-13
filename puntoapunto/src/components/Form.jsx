import { useState } from "react";
import PointForm from "./PointForm";
import { postQuotation, validate, countErrors } from "../services";
import boxGif from '../imgs/box.gif'
import truckGif from '../imgs/truck.gif'
import ButtonOrLoading from './ButtonOrLoading'

export default function Form() {
  let [loading, setLoading] = useState(false)
  let [input, setInput] = useState({

    fragil: false,
    puntos: [
      {continente:'',pais:'',ciudad:'',direccion:''},
       {continente:'',pais:'',ciudad:'',direccion:''}
     ],
    nombre_cotizante:'',
    email_cotizante:'',
    titulo:'',
    peso_kg:0,
    medidas:''

   });
  let [errors, setErrors]= useState({
    medidas:''
  })
  function handleInputChange(e) {

    const inp = {
      ...input,
      [e.target.name]: e.target.value
    }
    setInput(inp);
    setErrors(validate(inp))

  }
  let valor = null
  async function  handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    let result = await postQuotation(input);
    console.log(result);
    valor=result.valor
    setLoading(false)

  }
 let btnSubmit = (<button
   type="submit"
   className="btn btn-primary btn-block mb-4"
   onClick={handleSubmit}
   disabled={countErrors(errors)>0}
 >
   Enviar
 </button>)
 console.log(errors);
  return (
    <form className="container">
    <img src={truckGif} alt="truck"  className='truckGif my-3'/>
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
            <span className='danger_input'>{errors.nombre_cotizante}</span>
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
          <span className='danger_input'>{errors.email_cotizante}</span>

        </div>
      </div>
      <h3>¿Qué piensas enviar?</h3>
      <img src={boxGif} alt="box"  className='boxGif my-3'/>

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
          <span className='danger_input'>{errors.titulo}</span>

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
          {errors.peso_kg && <span className='danger_input'>{errors.peso_kg}</span>}

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
          <span className='danger_input'>{errors.medidas}</span>

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
          setErrors={setErrors}
          errors={errors}


        />
        <PointForm
          name="Hasta PuntoB"
          superInput={input}
          superSetInput={setInput}
          index={1}
          setErrors={setErrors}
          errors={errors}

        />
        <div className='danger_input'>{countErrors(errors)>0?'Llena los campos':null}</div>
      </div>


      <ButtonOrLoading btn={btnSubmit} loading={loading} value={valor}/>



    </form>
  );
}
