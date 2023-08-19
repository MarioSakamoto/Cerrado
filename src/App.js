import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import Cliente1 from './pages/Cliente1';
import Cliente2 from './pages/Cliente2';
import Cliente3 from './pages/Cliente3';
import MeioAmbienteDetail from "./pages/MeioAmbienteDetail";
import EngenhariaCivilDetail from "./pages/EngenhariaCivilDetail"
import SaneamentoDetail from './pages/SaneamentoDetail';
import AutomacaoDetail from './pages/AutomacaoDetail';

function App() {

  return (
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
          <Route path="/Cliente1" element={<Cliente1/>}/>
          <Route path="/Cliente2" element={<Cliente2/>}/>
          <Route path="/Cliente3" element={<Cliente3/>}/>
          <Route path="/MeioAmbienteDetail" element={<MeioAmbienteDetail/>}/>
          <Route path="/EngenhariaCivilDetail" element={<EngenhariaCivilDetail/>}/>
          <Route path="/SaneamentoDetail" element={<SaneamentoDetail/>}/>
          <Route path="/AutomacaoDetail" element={<AutomacaoDetail/>}/>
          </Routes>
        </Router>
  );
}

export default App;
