import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Grid from '@mui/material/Grid2';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

const MyFooter = () => {
  return (
    <>      
      <Grid sx={{backgroundColor: "blue"}} size={3}>
        <Typography component="h6">Nuestra empresa</Typography>
        <ul>
            <li><a href='#'>Quiénes somos</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Teléfonos de contacto</a></li>
            <li><a href='#'>¿Cómo funciona nuestra Web?</a></li>
            <li><a href='#'>Empleo</a></li>
        </ul>
      </Grid>
      <Grid sx={{backgroundColor: "blue"}} size={3}>
      <Typography component="h6">Contactar</Typography>
      <ul>
            <li><a href='#'>Ayuda/Preguntas frecuentes</a></li>
            <li><a href='#'>Anúnciate con nosotros</a></li>
            <li><a href='#'>Contactar con un agente</a></li>
            <li><a href='#'>Te llamamos</a></li>
            <li><a href='#'></a></li>
        </ul>
      </Grid>
      <Grid size={3}>
      <Typography component="h6">Más</Typography>
      <ul>
            <li><a href='#'>Nuestros Servicios</a></li>
            <li><a href='#'>Nuestros precios</a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
        </ul>
      </Grid>
      <Grid size={3}>
      <Typography component="h6">Descarga la app de Birrete-es</Typography>
      <ul>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
        </ul>
      </Grid>
      <Grid size={12} sx={{borderTop: 1, padding: 0}}>                
          <Toolbar sx={{background: "red", justifyContent: "center"}} >
              <Typography sx={{color:"white"}}>
                  Ulises Huamán &#169; Todos los derechos reservados
              </Typography>
              <IconButton>
                  <LinkedInIcon/>                            
              </IconButton>
              <IconButton>
                  <GitHubIcon />                        
              </IconButton>
              <IconButton>
                  <XIcon />
              </IconButton>
          </Toolbar>                
      </Grid> 
  </>
  )
}

export default MyFooter;
