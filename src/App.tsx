import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Online from './pages/Online'
import Presenciales from './pages/Presenciales'
import Asesorias from './pages/Asesorias'
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
          <Route path='/asesorias' Component={Asesorias} />
        </Routes>
      </Router>
    </>
  )
}

export default App
