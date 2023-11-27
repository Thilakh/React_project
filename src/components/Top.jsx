import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dehaze } from '@mui/icons-material';
import Image from  "./img/Flight.jpg";
import {userContext} from './Context';
import { useContext,useState } from 'react'

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [user,setuser]=React.useContext(userContext)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Add logic to handle user logout (clear user context, etc.)
    setuser(null);
    navigate('/');
    handleClose();
  };
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:'skyblue'}}>
      <AppBar position="static" style={{backgroundColor:'transparent' }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <MenuIcon />
          </IconButton>

          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Button color="inherit" style={{color:'white'}}>
            Home
            </Button>
            </Link>
            <Link to="/about">
            <Button color="inherit" style={{color:'white'}}>
            About
            </Button>
            </Link>
          </Typography>
          {user ? (
            <>
              <h4 style={{ color: 'white' }}>Hi traveller {user}</h4>
              <Button color="inherit" onClick={handleClick} style={{ color: 'white' }}>
                Logout
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login">
              <Button color="inherit" style={{ color: 'white' }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>     
  );
}