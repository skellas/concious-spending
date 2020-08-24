import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import { Grid, List, ListItemText } from '@material-ui/core';
import SpendingForm from './container/SpendingForm';

function App() {
  return (
    <Container maxWidth='sm'>
      <Grid container direction='column' spacing={1} >
        <Grid item>
          <AppBar position='static'>
            <Typography variant='h4' style={{ marginLeft: '2%' }}>Concious Spending App</Typography>
          </AppBar>
        </Grid>
        <Grid item>
          <Typography id='pp1' variant='body1'>
            For those of us who don't want to bother with a budget, there's the idea of a "concious spending plan".
            It's a simple concept, you start with your income and then break it down into three groups.
          </Typography>
          <List>
            <ListItemText primary=' - How much do I need to spend on housing, insurance, food, and other necessities?' />
            <ListItemText primary=' - How much do I want to save for emergencies or other short term goals?' />
            <ListItemText primary=' - How much do I want to invest for long term goals and/or retirement?' />
          </List>
          <Typography id='pp2' variant='body1'>
            Once you've answered these questions, you're left with the amount of money you can spend on whatever you want.
            Anything. Who cares what you spend it on. You've already knocked out all of your necessities, your savings,
            and your investments.
          </Typography>
          <Typography id='cta' variant='subtitle1'>
            Go use the rest of the money to make yourself happy!
          </Typography>
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
