import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Landing() {
  let [getOut, setGetOut] = useState(false);
  function handleClick() {
    setGetOut(true)
  }
  return (
    <>
      {getOut ? (
        <Navigate to="/cotizar" />
      ) : (
        <header className="App-header">
          <button onClick={handleClick} className="btn btn-primary">Cotizar transporte</button>
        </header>
      )}
    </>
  );
}
