import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import { TextField, Slider, Grid, Input } from '@material-ui/core';

function App() {
  const [savingsInput, setSavingsInput] = useState(10);
  const handleSavingsSliderChange = (event, newValue) => {
    setSavingsInput(newValue);
  };
  const handleSavingsInputChange = (event) => {
    setSavingsInput(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleOnBlur = () => {
    if (savingsInput < 0) {
      setSavingsInput(0);
    } else if (savingsInput > 50) {
      setSavingsInput(50);
    }
  };
  const lowEndInputMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
  ];
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
          <Grid container spacing={4} >
            <Grid item xs={6}>
              <Typography id='savings-slider-label'>I want to save</Typography>
              <Slider
                aria-labelledby='savings-slider-label'
                step={1}
                min={0}
                max={50}
                marks={lowEndInputMarks}
                value={savingsInput}
                onChange={handleSavingsSliderChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                value={savingsInput}
                onChange={handleSavingsInputChange}
                onBlur={handleOnBlur}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography>%</Typography>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default App;
