/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PropTypes from 'prop-types';
import { DatePicker, DateTimePicker } from '@mui/lab';

function Calendar({ time, state, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {time ? (
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          value={state}
          inputFormat="yyyy-MM-dd hh:mm"
          onChange={(newValue) => {
            onChange(newValue);
          }}
        />
      ) : (
        <DatePicker
          openTo="day"
          inputFormat="yyyy-MM-dd"
          views={['year', 'month', 'day']}
          value={state}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
  );
}

Calendar.defaultProps = { time: false };

Calendar.propTypes = {
  time: PropTypes.bool,
  state: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Calendar;
