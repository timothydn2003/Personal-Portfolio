import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element = <Home/>/>
          <Route path={'login'} element = <Login/>/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
