import { CssBaseline } from '@mui/material';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MyHeader from './components/header/MyHeader';
import MyAside from './components/aside/MyAside';
import MyFooter from './components/footer/MyFooter';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.2}>
          <Grid size={{ xs: 12, md: 12 }}>
              <MyHeader/>
          </Grid>
          <Grid size={2} sx={{borderRight: 0.1}}>
              <MyAside/>
          </Grid>
                  
          <Grid container size={10} >
              <Grid sx={{backgroundColor: "orange"}} size={12}>
                  <Outlet />
              </Grid>
              <MyFooter/>
          </Grid>          
        </Grid>
      </Box>
    </div>
  );
}

export default App;
