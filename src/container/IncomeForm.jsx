import React from 'react'
import { Typography, Card, CardContent, TextField } from '@material-ui/core'

export default function IncomeForm({ value, handleValueChange }) {
    const handleIncomeChange = (event) => {
        handleValueChange(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
    };
    return (
        <Card>
            <CardContent>
                <Typography id='iHeader' variant='h4'>
                    What is your current income?
                </Typography>
                <Typography id='ip1' variant='body1'>
                    How much are you currently taking home each month?
                </Typography>
                <Typography id='ip2' variant='body1'> 
                    As in, after any pre-tax contributions and all taxes are applied, 
                    what is the amount that's actually usable in your paycheck?
                </Typography>
                <Typography id='ip3' variant='body1'>
                    This can be either annually, monthly, or per paycheck, what you enter will affect what your
                    report will look like.
                </Typography>
                <TextField fullWidth id='incomeInput' label='My take home income is'
                    value={`$${value}`} onChange={handleIncomeChange}
                    style={{marginTop: '8px'}}
                />
            </CardContent>
        </Card>
    )
}
