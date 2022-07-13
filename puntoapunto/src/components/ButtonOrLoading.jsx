import {useState} from "react"


export default function ButtonOrLoading({btn, loading, value}) {

  return (
    <>
      {loading ?<div>
        cargando...
      </div>:
      <div>
        {value?btn:
          <label className='btn btn-secondary'>El precio es:{value}</label>
        }
      </div>
       }
    </>

  )
}
