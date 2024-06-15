import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LaminadosOnline from './cursos/LaminadosOnline'
import Formacion from './pages/Formacion'
import Home from "./pages/Home"
import Online from './pages/Online'
import Presenciales from './pages/Presenciales'
import SobreMi from './pages/SobreMi'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/sobremi' Component={SobreMi} />
          <Route path='/online' Component={Online} />
          <Route path='/presenciales' Component={Presenciales} />
          <Route path='/formacion' Component={Formacion} />
          <Route path='/curso-de-laminados-veganos-online' Component={LaminadosOnline}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
