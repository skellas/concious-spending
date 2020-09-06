import React from 'react'
import { Typography, Card, CardContent, TextField } from '@material-ui/core'

export default function IncomeForm({ value, handleValueChange }) {
    const handleIncomeChange = (event) => {
        handleValueChange(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
    };
    return (
        <Card>
            <CardContent>
                <Typography id='ip1' variant='body1'>
                    What is your current take home income? As in,
                    after all the taxes and any pre-tax contributions, what is it that's
                    actually coming home at the end of every year?
            </Typography>
                <TextField fullWidth id='income' label='My yearly take home income is'
                    value={`$${value}`} onChange={handleIncomeChange}
                />
            </CardContent>
        </Card>
    )
}
