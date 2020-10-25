import React from 'react'
import { Typography, Card, CardContent, TextField } from '@material-ui/core'

export default function SavingsForm({ savingsValue, handleSavingsValueChange, needsValue }) {
    const handleSavingsChange = (event) => {
        handleSavingsValueChange(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
    };
    return (
        
        <Card>
            <CardContent>
                <Typography id='sHeader' variant='h4'>
                    How much do you save?
                </Typography>
                <Typography id='sp1' variant='body1'>
                    Savings are something we build over time.
                </Typography>
                <Typography id='sp2' variant='body1'> 
                    Ideally, we should keep an emergency reserve of 3-6 months of <b>needs</b> expenses in savings.
                    This usually takes a while to save up, but it will keep us safe when times get rough.
                </Typography>
                <Typography id='sTargetThreeMonths' variant='h6'
                    style={{marginTop: '20px'}}
                >
                    Three Months of Needs
                </Typography>
                <TextField fullWidth id='targetThreeMonthsInput' label='Target: 3 months'
                    value={`$${needsValue * 3}`} disabled={true}
                    style={{marginTop: '8px'}}
                />
                <Typography id='sTargetSixMonths' variant='h6'
                    style={{marginTop: '20px'}}
                >
                    Six Months of Needs
                </Typography>
                <TextField fullWidth id='targetSixMonthsInput' label='Target: 6 months'
                    value={`$${needsValue * 6}`} disabled={true}
                    style={{marginTop: '8px'}}
                />
                <Typography id='sInput' variant='h6'
                    style={{marginTop: '60px'}}
                >
                    Monthly Savings
                </Typography>
                <TextField fullWidth id='savingsInput' label='Savings'
                    value={`$${savingsValue}`} onChange={handleSavingsChange}
                    style={{marginTop: '8px'}}
                />
            </CardContent>
        </Card>
    )
}
