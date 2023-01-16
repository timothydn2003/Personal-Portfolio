import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Pages/Login';
import { useState } from 'react'
import Resume from './Pages/Resume';
import ParticlesBackground from './Particles/ParticlesBackground';

function App() {
  const[login,setLogin] = useState(false);
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element = {<Home setLogin = {setLogin} login = {login}/>}/>
          <Route path={'/addProject'} element = {login?<Login/>:<Home/>}/>
          <Route path={'/resume'} element = {<Resume/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
