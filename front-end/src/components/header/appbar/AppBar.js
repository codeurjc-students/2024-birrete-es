import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../static-images/images-header/logo150x50.png';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';

const BarApp = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "#FEFEFE"}}>
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <IconButton>
              <Box
                component="img"              
                src={Logo}
                alt="Logo de Birrete-es"
              >
              </Box>
            </IconButton>
            <Box sx={{flexGrow: 1, textAlign: "right"}}>
                <IconButton sx={{fontSize: "15px"}}>
                    <AppRegistrationSharpIcon fontSize="small"/>
                    Register
                </IconButton>
                <IconButton sx={{fontSize: "15px"}}>
                    <LoginIcon fontSize="small"/>
                    Loging
                </IconButton>               
            </Box>           
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default BarApp;
