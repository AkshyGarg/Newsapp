import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = ()=> {
 
    return (
      <div>
        <Navbar/>
        <News pageSize="8" category="general"/>
      </div>
    )
  
}

export default App
