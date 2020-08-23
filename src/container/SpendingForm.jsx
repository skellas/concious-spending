import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PercentageInput from '../components/PercentageInput';
export default function SpendingForm({incomeDefault, savingsDefault, investmentDefault, billsDefault, splurgeDefault}) {
    
  const [income, setIncome] = useState(incomeDefault);
  const handleIncomeChange = (event) => {
    setIncome(event.target.value === '' ? '' : Number(event.target.value));
  };
    return (
        <React.Fragment>
            <Grid container direction='row' spacing={4}>
                <Grid item xs={12}>
                    <TextField fullWidth id='income' label='My take home income is'
                        value={income} onChange={handleIncomeChange}
                    />
                </Grid>
            </Grid>
            <PercentageInput id='savings-slider' label='I want to save'
                minimumValue={0} maximumValue={50} defaultValue={savingsDefault}
                percentageOf={income}
            />
            <PercentageInput id='investment-slider' label='I want to invest'
                minimumValue={0} maximumValue={50} defaultValue={investmentDefault}
                percentageOf={income}
            />
            <PercentageInput id='bills-slider' label='I need to pay bills'
                minimumValue={30} maximumValue={80} defaultValue={billsDefault}
                percentageOf={income}
            />
            <PercentageInput id='splurge-slider' label='Guilt free spending money'
                minimumValue={0} maximumValue={30} defaultValue={splurgeDefault}
                percentageOf={income}
            />
        </React.Fragment>
    )
}
