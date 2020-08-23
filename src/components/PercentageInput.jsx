import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider, Grid, Input, TextField } from '@material-ui/core';

export default function PercentageInput({id, label, minimumValue, maximumValue, defaultValue, percentageOf}) {
    
  const [value, setValue] = useState(defaultValue);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(removePercentageSign(event.target.value)));
  };
  const removePercentageSign = (input) => input.replace('%', '');
  
  const handleOnBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 50) {
      setValue(50);
    }
  };
  const inputMarks = [
    {
      value: minimumValue,
      label: minimumValue?.toString(),
    },
    {
      value: defaultValue,
      label: defaultValue?.toString(),
    },
    {
      value: maximumValue,
      label: maximumValue?.toString(),
    },
  ];
    return (
        <Grid container spacing={4} >
            <Grid item xs={6}>
              <Typography id={`${id}-label`}>{label}</Typography>
              <Slider
                aria-labelledby={`${id}-label`}
                step={1}
                min={minimumValue}
                max={maximumValue}
                marks={inputMarks}
                value={value}
                onChange={handleSliderChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                value={`${value}%`}
                onChange={handleInputChange}
                onBlur={handleOnBlur}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id={`${id}-calculated`}
                value={percentageOf * (value / 100) }
                variant='outlined'
                label={`You'll need`}
                aria-readonly={true}
              />
            </Grid>
          </Grid>
    )
}
