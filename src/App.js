import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styles from './App.css';
import { client } from './client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Education from './components/Education';
import Skill from './components/Skills';
import Project from './components/Project';

const App = () => {
  const [data, setData] = useState({})

  useEffect(()=>{
    client.getEntries().then(res => {
      setData(res.items[0].fields)
    })
  },[client, setData])

  return (
    <Router>
      <div className={styles.App}>
        <Navbar data={data} />
        <Routes>
          <Route path="/" element={<Home data={data} />}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/skills" element={<Skill/>}/>
          <Route path="/projects" element={<Project/>}/>
          {/* <Navigate to="/"></Navigate> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
