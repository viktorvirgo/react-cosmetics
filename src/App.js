import React from 'react';
import './App.css';
import { Item } from './elements/Item';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const theme = createTheme({
 
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className=''></div>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Card>
            <Item>xs=4</Item>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Item>xs=4</Item>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Item>xs=4</Item>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Item>xs=4</Item>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
    
    
  )
   
}
  export default App;
