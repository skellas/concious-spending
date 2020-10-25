import React from 'react'
import { Typography, Card, CardContent, TextField, Link } from '@material-ui/core'

export default function InvestmentsForm({ value, handleValueChange }) {
    const handleChange = (event) => {
        handleValueChange(event.target.value === '' ? 0 : Number(event.target.value.replace('$', '')));
    };
    return (
        
        <Card>
            <CardContent>
                <Typography id='iHeader' variant='h4'>
                    How much do you invest?
                </Typography>
                <Typography id='ip1' variant='body1'>
                    The stock market isn't anywhere near as scary as you were lead to believe.
                    <b>I promise.</b>
                </Typography>
                <Typography id='ip2' variant='body1'> 
                    There are two different types of invesetments that we should be talking about. 
                    <i>Pre-Tax</i> and <i>Post-Tax</i> Investments.
                </Typography>
                <Typography id='ip3' variant='body1'> 
                    Pre-Tax is usually accomplished through your work sponsored retirement accounts. This is great.
                    We want to at least match whatever our employer is willing to meet.
                </Typography>
                <Typography id='ip4' variant='body2'>
                    Getting your employer match is 
                    <Link href='https://notjustseth.com/how-one-decision-in-my-twenties-shaped-my-life/' target='_blank'> a game changer.</Link>
                </Typography>
                <Typography id='ip5' variant='body1' style={{marginTop: '20px'}}> 
                    Post-Tax is open to a lot of opportunities. We can invest in a brokerage account or a Roth IRA.
                    There's tax advantages to the Roth IRA and there's some advantages to keeping your funds more liquid, in a brokerage account.
                </Typography>
                <Typography id='iLabel' variant='h6'
                    style={{marginTop: '20px'}}
                >
                    Investments
                </Typography>
                <TextField fullWidth id='iInput' label='Investments'
                    value={`$${Number(value).toFixed(0)}`} onChange={handleChange}
                    style={{marginTop: '8px'}}
                />
            </CardContent>
        </Card>
    )
}
