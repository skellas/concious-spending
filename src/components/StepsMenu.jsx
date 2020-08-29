import React from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core'

export default function StepsMenu({ steps, activeStep }) {
    return (
        <React.Fragment>
            <Stepper activeStep={activeStep}>
                {steps.map(({ id, label }) => {
                    return (
                        <Step key={id}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </React.Fragment>
    )
}
