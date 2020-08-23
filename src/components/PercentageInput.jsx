import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider, Grid, Input } from '@material-ui/core';

export default function PercentageInput({id, label, minimumValue, maximumValue, defaultValue}) {
    
  const [value, setValue] = useState(defaultValue);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
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
                value={value}
                onChange={handleInputChange}
                onBlur={handleOnBlur}
              />
            </Grid>
            <Grid item xs={1}>
              <Typography>%</Typography>
            </Grid>
          </Grid>
    )
}
