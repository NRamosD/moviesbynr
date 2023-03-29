
import './css/App.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home';
import Search from './pages/search';
import AppContext from './contexts/AppContext';

function App() {
  const [movie, setMovie] = useState([])
  
  
  useEffect(()=>{

  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>}  path='/'>
          <Route element={<Search/>} path='searching'/>
        </Route>
      </Routes>

    </BrowserRouter>

    
  );
}

export default App;
