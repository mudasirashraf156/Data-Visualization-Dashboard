import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';


function App() {
  //state to save data received from the server
  const [mainData, setMainData] = useState([]);
  const getDataFromDB = async () => {
    try {
      const response = await axios.get("https://dashboard-6bfs.onrender.com/api/data/all");
      setMainData(response.data.data)
    }
    catch (e) {
      console.log(e)
    }
  }
 
  useEffect(() => {
    getDataFromDB();
  }, [])
  useEffect(() => {
    console.log(mainData.length)
  }, [mainData])

  return (
    <div>
      <Header />
      <Tabsrow data={mainData} setMainData={setMainData} />
    </div>
  );
}

export default App;
