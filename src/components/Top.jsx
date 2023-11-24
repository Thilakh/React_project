import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dehaze } from '@mui/icons-material';
import Image from  "./img/Flight.jpg";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:'skyblue'}}>
      <AppBar position="static" style={{backgroundColor:'transparent' }}>
        <Toolbar>
          <IconButton
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
          <Dehaze style={{color:'white'}} />
          </IconButton>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'bottom',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'bottom',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Button color="inherit" style={{color:'white'}}>
            Home
            </Button>
            </Link>
            <Link to="/tour">
            <Button color="inherit" style={{color:'white'}}>
            Tour
            </Button>
            </Link>
          </Typography>
          <Link to="/login">
            <Button color="inherit" style={{color:'white'}}>Login/SignUp</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>     
  );
}