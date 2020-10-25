import React from 'react';
import PercentageInput from '../components/PercentageInput';
import {  Card, CardContent } from '@material-ui/core'
export default function SpendingForm(
    { 
        income, 
        savings, updateSavings,
        investments, updateInvestments,
        bills, updateBills
    }
    ) {

    const isErrorPresent = () => savings + investments + bills > income;
    const calculateSplurgeSurplus = () => Number(income - (savings + investments + bills)).toFixed(2);
    
    return (
        <Card id={'spending-form'}>
            <CardContent>
                <PercentageInput id='savings-slider' label='I want to save'
                    minimumValue={0} maximumValue={50} defaultValue={savings}
                    percentageOf={income} value={savings} changeHandler={updateSavings}
                    error={isErrorPresent()}
                />
                <PercentageInput id='investment-slider' label='I want to invest'
                    minimumValue={0} maximumValue={50} defaultValue={investments}
                    percentageOf={income} value={investments} changeHandler={updateInvestments}
                    error={isErrorPresent()}
                />
                <PercentageInput id='bills-slider' label='I need to pay bills'
                    minimumValue={30} maximumValue={80} defaultValue={bills}
                    percentageOf={income} value={bills} changeHandler={updateBills}
                    error={isErrorPresent()}
                />
                <PercentageInput id='splurge-slider' label='Guilt free spending money'
                    minimumValue={0} maximumValue={30} defaultValue={calculateSplurgeSurplus()}
                    percentageOf={income} value={calculateSplurgeSurplus()} changeHandler={() => {}}
                    error={false} disabled={true}
                />
            </CardContent>
        </Card>
    )
}
