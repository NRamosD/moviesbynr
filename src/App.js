
import './css/App.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { createContext, Fragment, useContext, useEffect, useState } from 'react';
import Home from './pages/home';
import Search from './pages/search';
import {GlobalContext} from './contexts/AppContext';
import Try from './pages/pruebas';


function App() {
  const [movie, setMovie] = useState([])

  const data = useContext(GlobalContext)
  console.log(data)
  
  useEffect(()=>{

  },[])
  return (
    
    <BrowserRouter>
      <Routes>
          <Route element={<Home/>}  path='/'>
            <Route element={<Search/>} path='searching'/>
          </Route>
          <Route element={<Try/>} path="/try" />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;





// // Crea el contexto
// export const MyContext = createContext();

// // Crea el proveedor de contexto dinámico
// function MyDynamicContextProvider({ value, children }) {
//   return (
//     <MyContext.Provider value={value}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// function App() {
//   // Define el valor del contexto
//   const myValue = 'Valor dinámico';

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Envuelve las rutas con el proveedor de contexto dinámico */}
//             <Route element={<Home/>}  path='/'>
//         <MyDynamicContextProvider value={myValue}>
//               <Route element={<Search/>} path='searching'/>
//             <Route element={<Try/>} path="/try" />
//         </MyDynamicContextProvider>
//             </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }