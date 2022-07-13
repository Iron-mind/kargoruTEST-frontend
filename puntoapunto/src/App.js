
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './views/Landing'
import Quotation from './views/Quotation'
import EditQuotation from './views/EditQuotation'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cotizacion/:id' element={<EditQuotation/>} />
        <Route path="/cotizar" element={<Quotation />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
