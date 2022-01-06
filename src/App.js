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
  const [state, setState] = useState({})

  useEffect(()=>{
    client.getEntries().then(res => {
      setState(res.items[0].fields)
    })
  },[client, setState])

  return (
    <Router>
      <div className={styles.App}>
        <Navbar data={state} />
        <Routes>
            <Route path="/" element={<Home data={state} />}/>
          </Routes>
          {/* <Navigate exact to="/"/> */}
      </div>
    </Router>
  );
}

export default App;
