import React from 'react'
import { Stepper, Step, StepLabel, Card, CardContent } from '@material-ui/core';
import StepsMenuButtons from './StepsMenuButtons';

export default function StepsMenu({ steps, activeStep, handleBackClick, handleNextClick }) {
    return (
        <Card>
            <CardContent style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map(({ id, label }) => {
                        return (
                            <Step key={id}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <StepsMenuButtons currentStep={activeStep} steps={steps} handleBackClick={handleBackClick} handleNextClick={handleNextClick} />
            </CardContent>
        </Card>
    )
}
