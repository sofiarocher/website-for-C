import { Analytics } from "@vercel/analytics/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AlfajoresPresencial from "./courses/AlfajoresPresencial";
import LaminadosOnline from "./courses/LaminadosOnline";
import LaminadosPresencial from "./courses/LaminadosPresencial";
import PasteleriaOnline from "./courses/PasteleríaOnline";
import PasteleriaPresencial from "./courses/PasteleríaPresencial";
import TortasPresencial from "./courses/TortasPresencial";
import Formacion from "./pages/Formacion";
import Home from "./pages/Home";
import Online from "./pages/Online";
import Presenciales from "./pages/Presenciales";
import SobreMi from "./pages/SobreMi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/camila-villalobos-pastelera-vegana"
            element={<SobreMi />}
          />
          <Route
            path="/cursos-online-pasteleria-vegana-sin-gluten"
            element={<Online />}
          />
          <Route
            path="/cursos-presenciales-pasteleria-vegana-sin-gluten"
            element={<Presenciales />}
          />
          <Route
            path="/carrera-intensiva-pasteleria-vegana"
            element={<Formacion />}
          />
          <Route
            path="/curso-laminados-veganos-online"
            element={<LaminadosOnline />}
          />
          <Route
            path="/curso-pasteleria-vegana-online"
            element={<PasteleriaOnline />}
          />
          <Route
            path="/curso-laminados-veganos-presencial"
            element={<LaminadosPresencial />}
          />
          <Route
            path="/curso-pasteleria-vegana-presencial"
            element={<PasteleriaPresencial />}
          />
          <Route
            path="/curso-tortas-veganas-presencial"
            element={<TortasPresencial />}
          />
          <Route
            path="/curso-alfajores-veganos-presencial"
            element={<AlfajoresPresencial />}
          />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
