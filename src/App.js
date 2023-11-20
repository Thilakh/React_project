import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Combine } from './components/Logp';
import Top from './components/Top'
import Homepage from './components/Homepage';

function App() {
  return (
    <>
     
    <Routes>
      <Route path='/combine' element={<Combine />}></Route>
    </Routes> 
    
    <Homepage/>
    </>
  );
}

export default App;
