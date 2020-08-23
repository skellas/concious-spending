import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import { TextField } from '@material-ui/core';
import PercentageInput from './components/PercentageInput';

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
      <AppBar position='static'>
        <Typography variant='h4' style={{ marginLeft: '2%' }}>Concious Spending App</Typography>
      </AppBar>
      <Box>
        <Typography>{headerCopy}</Typography>

        <form>
          <TextField id='income' label='My take home income is' />
          <PercentageInput id='savings-slider' label='I want to save' 
            minimumValue={0} maximumValue={50} defaultValue={10} 
          />
        </form>
      </Box>
    </Container>
  );
}

export default App;
