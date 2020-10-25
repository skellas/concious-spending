import React from 'react';
import PercentageInput from '../components/PercentageInput';
import {  Card, CardContent } from '@material-ui/core'
export default function SpendingForm(
    { 
        income, 
        savings, updateSavings,
        preTaxInvestments, updatePreTaxInvestments,
        postTaxInvestments, updatePostTaxInvestments,
        bills, updateBills
    }
    ) {

    const isErrorPresent = () => savings + preTaxInvestments + postTaxInvestments + bills > income;
    const calculateSplurgeSurplus = () => income - (savings + preTaxInvestments + postTaxInvestments + bills);
    
    return (
        <Card id={'spending-form'}>
            <CardContent>
                <PercentageInput id='savings-slider' label='I want to save'
                    minimumValue={0} maximumValue={50} defaultValue={savings}
                    percentageOf={income} value={savings} changeHandler={updateSavings}
                    error={isErrorPresent()}
                />
                <PercentageInput id='pre-investment-slider' label='I want to invest(pre tax)'
                    minimumValue={0} maximumValue={50} defaultValue={preTaxInvestments}
                    percentageOf={income} value={preTaxInvestments} changeHandler={updatePreTaxInvestments}
                    error={isErrorPresent()}
                />
                <PercentageInput id='post-investment-slider' label='I want to invest(post tax)'
                    minimumValue={0} maximumValue={50} defaultValue={postTaxInvestments}
                    percentageOf={income} value={postTaxInvestments} changeHandler={updatePostTaxInvestments}
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
