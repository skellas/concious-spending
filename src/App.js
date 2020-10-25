import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import { Grid, Paper, Card, CardContent } from '@material-ui/core';
import SpendingForm from './container/SpendingForm';
import StepsMenu from './components/StepsMenu';
import StepsMenuButtons from './components/StepsMenuButtons';
import OverviewForm from './container/OverviewForm';
import IncomeForm from './container/IncomeForm';
import NeedsForm from './container/NeedsForm';
import SavingsForm from './container/SavingsForm';
import InvestmentsForm from './container/InvestmentsForm';
import { usePersistedState } from './services/PersistenceService';

function App() {
  const steps = [
    { 'id': 'intro', 'label': 'Overview' },
    { 'id': 'income', 'label': 'Income' },
    { 'id': 'needs', 'label': 'Needs' },
    { 'id': 'savings', 'label': 'Savings' },
    { 'id': 'investments', 'label': 'Investments' },
    { 'id': 'summary', 'label': 'Report' },
  ];
  let [currentStep, setCurrentStep] = useState(0);
  let [income, setIncome] = usePersistedState('income', 0);
  let [needs, setNeeds] = usePersistedState('needs', 0);
  let [savings, setSavings] = usePersistedState('savings', 0);
  let [investments, setInvestments] = usePersistedState('investments', 0);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <OverviewForm />;
      case 1:
        return <IncomeForm value={income} handleValueChange={setIncome} />
        case 2:
          return <NeedsForm value={needs} handleValueChange={setNeeds} />
        case 3:
          return <SavingsForm savingsValue={savings} handleSavingsValueChange={setSavings}
                              needsValue={needs} />
        case 4:
          return <InvestmentsForm value={investments} handleValueChange={setInvestments}/>
      case 5:
        return (
          <SpendingForm
            income={income}
            savings={savings} updateSavings={setSavings}
            investments={investments} updateInvestments={setInvestments}
            bills={needs} updateBills={setNeeds}
          />);
      default:
        return <React.Fragment />

    }
  }
  const handleNextClick = () => setCurrentStep(currentStep + 1);
  const handleBackClick = () => setCurrentStep(currentStep - 1);

  return (
    <Container maxWidth='sm'>
      <Grid container direction='column' spacing={1} >
        <Grid item style={{ height: '62px' }}>
          <AppBar position='static'>
            <Typography variant='h3' style={{ marginLeft: '2%' }}>Conscious Spending plan</Typography>
          </AppBar>
        </Grid>
        <Grid item>
          <StepsMenu steps={steps} activeStep={currentStep} handleBackClick={handleBackClick} handleNextClick={handleNextClick} />
        </Grid>
        <Grid item>
          <Paper elevation={1}>
            {renderCurrentStep()}
          </Paper>
        </Grid>
        <Grid item>
          <Card>
            <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <StepsMenuButtons currentStep={currentStep} steps={steps}
                handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
