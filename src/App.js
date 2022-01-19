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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
