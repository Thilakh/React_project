import React from 'react'
import Top from './Top'
import * as Components from '../Components';

import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
const containerStyle = {
    backgroundImage:`url("https://i.gifer.com/embedded/download/Ot8w.gif")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };
const Homepage = () => {
  return (
    <>
        <Top />
    <div style={containerStyle}>
            <center><Components.Input placeholder= 'what are you searching for?' variant="outlined" style={{
                width:'400px'
            }}></Components.Input></center>
        
        </div></>
  )
}

export default Homepage