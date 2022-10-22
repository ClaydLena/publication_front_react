import {HashRouter as Router,Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from '../components/Home'
import Writing from '../components/Writing';

function Rotas (){
  return(
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/publicar" element={<Writing/>} ></Route>
      </Routes>
    </Router> 
  )
}
export default Rotas