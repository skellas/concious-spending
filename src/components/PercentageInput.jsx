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
    error,
    disabled = false
  }
  ) {

  const findPercentage = ( val ) => Math.round(val / percentageOf * 100);
  const findValueFromPercentage = ( percentage ) => Number(percentageOf * (percentage / 100).toFixed(2));
  const handleSliderChange = (event, newValue) => {
    changeHandler(findValueFromPercentage(newValue));
  };
  const handleInputChange = (event) => {
    changeHandler(event.target.value === '' ? '' :findValueFromPercentage(Number(removePercentageSign(event.target.value))));
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
          id={`${id}`}
          aria-labelledby={`${id}-label`}
          step={1}
          min={minimumValue}
          max={maximumValue}
          marks={inputMarks}
          value={findPercentage(value)}
          onChange={handleSliderChange}
          disabled={disabled}
        />
      </Grid>
      <Grid item xs={2}>
        <Input
          id={`${id}-input`}
          value={`${findPercentage(value)}%`}
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          error={error}
          disabled={disabled}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id={`${id}-calculated`}
          value={`$${Number(value).toFixed(2)}`}
          variant='outlined'
          label={`You'll need`}
          aria-readonly={true}
        />
      </Grid>
    </Grid>
  )
}
