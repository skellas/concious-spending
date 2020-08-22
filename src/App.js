import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import { TextField, Slider, Grid, Input } from '@material-ui/core';

function App() {
  const [savingsInput, setSavingsInput] = useState(10);
  const handleSavingsInputChange = (event, newValue) => {
    setSavingsInput(newValue);
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
      <AppBar position='static'>
        <Typography variant='h4' style={{ marginLeft: '2%' }}>Concious Spending App</Typography>
      </AppBar>
      <Box>
        <Typography>{headerCopy}</Typography>

        <form>
          <TextField id='income' label='My take home income is' />
          <Grid container spacing={2} >
            <Grid item>
              <Typography id='savings-slider-label'>I want to save %</Typography>
              <Slider
                aria-labelledby='savings-slider-label'
                step={1}
                min={0}
                max={80}
                value={savingsInput}
                onChange={handleSavingsInputChange}
              />
            </Grid>
            <Grid item>
              <Input
                value={savingsInput}
                readOnly={true}
              />
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default App;
