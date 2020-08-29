import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import { Grid } from '@material-ui/core';
import SpendingForm from './container/SpendingForm';
import StepsMenu from './components/StepsMenu';
import OverviewForm from './container/OverviewForm';

function App() {
  const steps = [
    { 'id': 'intro', 'label': 'Overview' },
    { 'id': 'income', 'label': 'Income' },
    { 'id': 'needs', 'label': 'Needs' },
    { 'id': 'savings', 'label': 'Savings' },
    { 'id': 'investments', 'label': 'Investments' },
    { 'id': 'summary', 'label': 'Report' },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [income, setIncome] = useState(0);
  const [savingsPercent, setSavingsPercent] = useState(10);
  const [investmentsPercent, setInvestmentsPercent] = useState(10);
  const [needsPercent, setNeedsPercent] = useState(60);
  const [wantsPercent, setWantsPercent] = useState(20);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <OverviewForm />;
      case 5:
        return (
          <SpendingForm
            incomeDefault={income}
            savingsDefault={savingsPercent}
            investmentDefault={investmentsPercent}
            billsDefault={needsPercent}
            splurgeDefault={wantsPercent}
          />);
      default:
        return <React.Fragment />

    }
  }
  return (
    <Container maxWidth='sm'>
      <Grid container direction='column' spacing={1} >
        <Grid item style={{ height: '42px' }}>
          <AppBar position='static'>
            <Typography variant='h4' style={{ marginLeft: '2%' }}>Conscious Spending App</Typography>
          </AppBar>
        </Grid>
        <Grid item>
          <StepsMenu steps={steps} activeStep={currentStep.id} />
        </Grid>
        <Grid item>
          {renderCurrentStep()}
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
