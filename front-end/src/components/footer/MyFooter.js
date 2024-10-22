import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Grid from '@mui/material/Grid2';
import './Myfooter.css';
import Appstore from '../../static-images/images-footer/appstore.png';
import Button from '@mui/material/Button';
import GooglePlay from '../../static-images/images-footer/googleplay.png';


const MyFooter = () => {
  return (
    <>      
      <Grid sx={{backgroundColor: "blue"}} size={3}>
        <Typography component="h6" className='footer-titles'>Nuestra empresa</Typography>
        <ul>
            <li><a href='#'>Quiénes somos</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Teléfonos de contacto</a></li>
            <li><a href='#'>¿Cómo funciona nuestra Web?</a></li>
            <li><a href='#'>Empleo</a></li>
        </ul>
      </Grid>
      <Grid sx={{backgroundColor: "blue"}} size={3}>
      <Typography component="h6" className='footer-titles'>Contactar</Typography>
      <ul>
            <li><a href='#'>Ayuda/Preguntas frecuentes</a></li>
            <li><a href='#'>Anúnciate con nosotros</a></li>
            <li><a href='#'>Contactar con un agente</a></li>
            <li><a href='#'>Te llamamos</a></li>
            <li><a href='#'></a></li>
        </ul>
      </Grid>
      <Grid size={3}>
      <Typography component="h6" className='footer-titles'>Más</Typography>
      <ul>
            <li><a href='#'>Nuestros Servicios</a></li>
            <li><a href='#'>Nuestros precios</a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
            <li><a href='#'></a></li>
        </ul>
      </Grid>
      <Grid size={3}>
      <Typography component="h6" className='footer-titles'>Descarga la app de Birrete-es</Typography>
      <ul>            
            <li><Button variant="outlined">
                  <img src={GooglePlay} style={{height: '40px'}} />                  
                </Button></li>
            <li>
              <Button variant="outlined">
                 <img src={Appstore} style={{height: '40px' }} />
              </Button></li>
        </ul>
      </Grid>
      <Grid size={12} sx={{borderTop: 1, padding: 0}}>                
          <Toolbar sx={{background: "red", justifyContent: "center"}} >
              <Typography sx={{color:"white", fontSize: "0.8em"}}>
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
