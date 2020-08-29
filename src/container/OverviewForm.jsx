import React from 'react';
import { Typography, List, ListItemText } from '@material-ui/core';

export default function OverviewForm() {
    return (
        <React.Fragment>
            <Typography id='pp1' variant='body1'>
                For those of us who don't want to bother with a budget, there's the idea of a "conscious spending plan".
                It's a simple concept, you start with your income and then break it down into three groups.
            </Typography>
            <List>
                <ListItemText primary=' - How much do I need to spend on housing, insurance, food, and other necessities?' />
                <ListItemText primary=' - How much do I want to save for emergencies or other short term goals?' />
                <ListItemText primary=' - How much do I want to invest for long term goals and/or retirement?' />
            </List>
            <Typography id='pp2' variant='body1'>
                Once you've answered these questions, you're left with the amount of money you can spend on whatever you want.
                Anything. Who cares what you spend it on. You've already knocked out all of your necessities, your savings,
                and your investments.
            </Typography>
            <Typography id='cta' variant='subtitle1'>
                Go use the rest of the money to make yourself happy!
            </Typography>
        </React.Fragment>
    );
}
