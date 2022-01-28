/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PropTypes from 'prop-types';
import { DatePicker, DateTimePicker } from '@mui/lab';

function Calendar({ time }) {
  const [value, setValue] = useState('YYYY-MM-DD HH:MM"');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {time ? (
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          value={value}
          inputFormat="yyyy-MM-dd hh:mm"
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      ) : (
        <DatePicker
          disableFuture
          openTo="year"
          inputFormat="yyyy-MM-dd"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
  );
}

Calendar.defaultProps = { time: false };

Calendar.propTypes = {
  time: PropTypes.bool,
};

export default Calendar;
