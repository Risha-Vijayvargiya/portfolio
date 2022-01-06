import React, {useState, useEffect} from 'react';
import './App.css';
import { client } from './client';
import Navbar from './components/Navbar';

const App = () => {
  const [state, setState] = useState({})

  useEffect(()=>{
    client.getEntries().then(res => {
      setState(res.items[0].fields)
    })
  },[client, setState])
  console.log(state);
  // componentDidMount() {
  //   client.getEntries()
  //     .then((response) => {
  //       console.log(response)
  //       this.setState({
  //         data: response.items
  //       })
  //     })
  //     .catch(console.error)
  // }

  return (
    <div>
      <Navbar data={state} />
    </div>
  );
}


export default App;
