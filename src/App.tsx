import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LaminadosOnline from './courses/LaminadosOnline';
import Formacion from './pages/Formacion';
import Home from "./pages/Home";
import Online from './pages/Online';
import Presenciales from './pages/Presenciales';
import SobreMi from './pages/SobreMi';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobremi' element={<SobreMi />} />
          <Route path='/online' element={<Online />} />
          <Route path='/presenciales' element={<Presenciales />} />
          <Route path='/formacion' element={<Formacion />} />
          <Route path='/curso-de-laminados-veganos-online' element={<LaminadosOnline />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
