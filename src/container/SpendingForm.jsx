import React, { useState } from 'react';
import PercentageInput from '../components/PercentageInput';
import {  Card, CardContent } from '@material-ui/core'
export default function SpendingForm({ income, savingsDefault, investmentDefault, billsDefault, splurgeDefault }) {

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
    const [calculationError, setCalculationError] = useState(false);
    return (
        <Card>
            <CardContent>
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
            </CardContent>
        </Card>
    )
}
