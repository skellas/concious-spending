import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Slider, Grid, Input, TextField } from '@material-ui/core';

export default function PercentageInput(
  { 
    id, 
    label, 
    minimumValue, 
    maximumValue, 
    defaultValue, 
    percentageOf, 
    value, 
    changeHandler,
    error
  }
  ) {

  const handleSliderChange = (event, newValue) => {
    changeHandler(newValue);
  };
  const handleInputChange = (event) => {
    changeHandler(event.target.value === '' ? '' : Number(removePercentageSign(event.target.value)));
  };
  const removePercentageSign = (input) => input.replace('%', '');

  const handleOnBlur = () => {
    if (value < minimumValue) {
      changeHandler(minimumValue);
    } else if (value > maximumValue) {
      changeHandler(maximumValue);
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
          error={error}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id={`${id}-calculated`}
          value={Number(percentageOf * (value / 100)).toFixed(2)}
          variant='outlined'
          label={`You'll need`}
          aria-readonly={true}
        />
      </Grid>
    </Grid>
  )
}
