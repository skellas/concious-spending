import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import {  Grid } from '@material-ui/core';
import SpendingForm from './container/SpendingForm';

function App() {

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
          <SpendingForm
            incomeDefault={0}
            savingsDefault={10}
            investmentDefault={10}
            billsDefault={60}
            splurgeDefault={20}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
