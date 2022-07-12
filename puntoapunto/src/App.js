
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './views/Landing'
import Quotation from './views/Quotation'
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/cotizar" element={<Quotation />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
