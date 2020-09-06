import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core';

export default function StepsMenuButtons({ currentStep, steps, handleBackClick, handleNextClick }) {
    return (
        <React.Fragment>
            <ButtonGroup color='primary'>
                <Button
                    disabled={currentStep === 0}
                    onClick={handleBackClick}>
                    Back
                </Button>
                <Button
                    disabled={currentStep === steps.length-1}
                    onClick={handleNextClick}>
                    Next
                </Button>
            </ButtonGroup>
        </React.Fragment>
    )
}
