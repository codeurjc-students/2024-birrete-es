import React from 'react';
import './Header.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import BarApp from './appbar/AppBar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.2}>
            <Grid size={{ xs: 12, md: 12 }}>
                <BarApp />
            </Grid>
            <Grid size={2} sx={{borderRight: 1}}>
                <Item>
                    <nav aria-label="main mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
                </Item>
            </Grid>        
            <Grid size={10}>
                <Item>size=10</Item>
            </Grid>
        </Grid>
            <Grid container spacing={0}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item>size=4</Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item>size=4</Item>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item>size=4</Item>
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
            </Grid>
        
   </Box>
  )
}

export default Header
