import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import { TextField, Grid } from '@material-ui/core';
import PercentageInput from './components/PercentageInput';

function App() {

  const [income, setIncome] = useState(0);
  const handleIncomeChange = (event) => {
    setIncome(event.target.value === '' ? '' : Number(event.target.value));
  };
  const headerCopy = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis justo a turpis placerat fermentum.
   Integer eu feugiat metus, fringilla pulvinar risus. Suspendisse blandit porta enim, sed imperdiet enim mattis et.
    Maecenas a orci id nunc efficitur cursus. Sed at egestas diam, ac suscipit nisl. Phasellus metus tortor,
     consequat quis sapien sit amet, tincidunt efficitur orci. Cras non vehicula ex, semper finibus ipsum.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
       Quisque blandit vitae quam quis hendrerit. Integer consequat dolor vitae ligula mattis,s nec bibendum magna maximus.
  `;
  return (
    <Container maxWidth='sm'>
      <Grid container direction='column' spacing={4} >
        <Grid item>
          <AppBar position='static'>
            <Typography variant='h4' style={{ marginLeft: '2%' }}>Concious Spending App</Typography>
          </AppBar>
        </Grid>
        <Grid item>
          <Typography>{headerCopy}</Typography>
        </Grid>

        <Grid item>
          <Grid container direction='row' spacing={4}>
            <Grid item xs={12}>
              <TextField fullWidth id='income' label='My take home income is'
                value={income} onChange={handleIncomeChange}
               />
            </Grid>
          </Grid>
          <PercentageInput id='savings-slider' label='I want to save' 
            minimumValue={0} maximumValue={50} defaultValue={10}
            percentageOf={income} 
          />
          <PercentageInput id='investment-slider' label='I want to invest' 
            minimumValue={0} maximumValue={50} defaultValue={10} 
            percentageOf={income} 
          />
          <PercentageInput id='bills-slider' label='I need to pay bills' 
            minimumValue={30} maximumValue={80} defaultValue={60}
            percentageOf={income}  
          />
          <PercentageInput id='splurge-slider' label='Leftover for splurging' 
            minimumValue={0} maximumValue={30} defaultValue={20} 
            percentageOf={income} 
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
