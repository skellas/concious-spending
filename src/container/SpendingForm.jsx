import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PercentageInput from '../components/PercentageInput';
export default function SpendingForm({ incomeDefault, savingsDefault, investmentDefault, billsDefault, splurgeDefault }) {

    const [income, setIncome] = useState(incomeDefault);
    const handleIncomeChange = (event) => {
        setIncome(event.target.value === '' ? 0 : Number(event.target.value.replace('$','')));
    };

    const [savings, setSavings] = useState(savingsDefault);
    const handleSavingsChange = (value) => {
        setSavings(value);
        setCalculationError(savings + investments + bills + splurge > 100);
    };
    const [investments, setInvestments] = useState(investmentDefault);
    const handleInvestmentsChange = (value) => {
        setInvestments(value);
        setCalculationError(savings + investments + bills + splurge > 100);
    };
    const [bills, setBills] = useState(billsDefault);
    const handleBillsChange = (value) => {
        setBills(value);
        setCalculationError(savings + investments + bills + splurge > 100);
    };
    const [splurge, setSplurge] = useState(splurgeDefault);
    const handleSplurgeChange = (value) => {
        setSplurge(value);
        setCalculationError(savings + investments + bills + splurge > 100);
    };
    const [calculationError, setCalculationError]  = useState(false);
    return (
        <React.Fragment>
            <Grid container direction='row' spacing={4}>
                <Grid item xs={8}>
                    <TextField fullWidth id='income' label='My take home income is'
                        value={`$${income}`} onChange={handleIncomeChange}
                    />
                </Grid>
            </Grid>
            <PercentageInput id='savings-slider' label='I want to save'
                minimumValue={0} maximumValue={50} defaultValue={savingsDefault}
                percentageOf={income} value={savings} changeHandler={handleSavingsChange}
                error={calculationError}
            />
            <PercentageInput id='investment-slider' label='I want to invest'
                minimumValue={0} maximumValue={50} defaultValue={investmentDefault}
                percentageOf={income} value={investments} changeHandler={handleInvestmentsChange}
                error={calculationError}
            />
            <PercentageInput id='bills-slider' label='I need to pay bills'
                minimumValue={30} maximumValue={80} defaultValue={billsDefault}
                percentageOf={income} value={bills} changeHandler={handleBillsChange}
                error={calculationError}
            />
            <PercentageInput id='splurge-slider' label='Guilt free spending money'
                minimumValue={0} maximumValue={30} defaultValue={splurgeDefault}
                percentageOf={income} value={splurge} changeHandler={handleSplurgeChange}
                error={calculationError}
            />
        </React.Fragment>
    )
}
