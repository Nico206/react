import React,{Fragment} from 'react';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Login from './paginas/auth/login';
import Dashboard from './paginas/auth/dashboard';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/"exact element={<Login/>}></Route>
          <Route path="/dashboard"exact element={<Dashboard/>}></Route>  
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
