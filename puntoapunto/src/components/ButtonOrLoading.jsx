import { useState } from "react";
import {Link} from 'react-router-dom'
export default function ButtonOrLoading({ btn, loading, value, id }) {

  return (
    <>
      {loading ? (
        <div className='py-5 '>Cargando...</div>
      ) : (
        <div>
          {!value ? (
            btn
          ) : (
            <Link to={'/cotizacion/'+id} >Ver cotización</Link>
          )}
        </div>
      )}
    </>
  );
}
