import React, {useEffect}from 'react';
import NavBar from './Component/NavBar/NavBar';
import './App.css';
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';
import {originals,action,ComedyMovies, HorrorMovies, RomanceMovies} from './urls';

function App() {
  useEffect(() => {
   
    
  }, []) //run only one time
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action movies' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>


     
    </div>
  );
}

export default App;
