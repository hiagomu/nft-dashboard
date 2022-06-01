import React from 'react';
import './styles/App.css';
import Home from "./pages/Home/index"
import Dashboard from './pages/Dashboard';
import Drops from './pages/Drops/index'
import Mint from './pages/Mint/index'
import { BrowserRouter as Router, Routes, Route} from  "react-router-dom"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route  path="/drops" element={<Drops />}></Route>
          <Route  path="/mint" element={<Mint />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
