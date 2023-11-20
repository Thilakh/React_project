import React from 'react'
import Top from './Top'
import * as Components from '../Components';
import Image from "./img/Flight.jpg";
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
const containerStyle = {
    backgroundImage:`url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };
const Homepage = () => {
  return (
    <div style={containerStyle}>
        <Top />
        <div >
            <center><Components.Input placeholder= 'what are you searching for?' variant="outlined" style={{
                width:'400px'
            }}></Components.Input></center>
        </div>
        </div>
  )
}

export default Homepage