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
import { Link } from 'react-router-dom';


const MyFooter = () => {
  return (
    <>      
      <Grid sx={{backgroundColor: "blue"}} size={3}>
        <Typography component="h6" className='footer-titles'>Nuestra empresa</Typography>
        <ul>
            <li><Link to="/quienessomos">Quiénes somos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/phonecontact">Teléfonos de contacto</Link></li>
            <li><Link to="/comofuncionaweb">¿Cómo funciona nuestra Web?</Link></li>
            <li><Link to="/empleo">Empleo</Link></li>            
        </ul>
      </Grid>
      <Grid sx={{backgroundColor: "blue"}} size={3}>
      <Typography component="h6" className='footer-titles'>Contactar</Typography>
      <ul>
            <li><Link to="/ayudapreguntasfrecuentes">Ayuda/Preguntas frecuentes</Link></li>
            <li><Link to="/anunciateconnosotros">Anúnciate con nosotros</Link></li>
            <li><Link to="/contactarconagente">Contactar con un agente</Link></li>
            <li><Link to="/tellamamos">Te llamamos</Link></li>         
        </ul>
      </Grid>
      <Grid size={3}>
      <Typography component="h6" className='footer-titles'>Más</Typography>
      <ul>
            <li><Link to="/nuestrosservicios">Nuestros Servicios</Link></li>
            <li><Link to="/nuestrosprecios">Nuestros Precios</Link></li>
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
