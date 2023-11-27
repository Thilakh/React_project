import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Combine } from './components/Logp';
import Homepage from './components/Homepage';
import { RouterProvider } from 'react-router-dom';
import About from './components/About'
import { userContext } from './components/Context';
import { useState } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Homepage";

const router =createBrowserRouter([
  {path:"/",element:<Home />},
  {path:"/login",element:<Combine />},
  {path:"/about",element:<About />},
]);
function App() {
  const[user,setuser]=useState("");

  return (
    
     <userContext.Provider value={[user,setuser]}>
    
    <RouterProvider router={router} />
    </userContext.Provider>
    
    
    
  );
}

export default App;
