/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React from 'react';
import { BORDER_COLOR } from 'constants/color';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Dropdown({ name }) {
  const [value, setValue] = React.useState('비과세');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <DropButton name={name} value={value} onChange={handleChange}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>{option.label}</option>
      ))}
    </DropButton>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string,
};

const DropButton = styled.select`
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid ${BORDER_COLOR};
    outline: none;
    `;

const options = [
  { label: '비과세', value: '비과세' },
  { label: '과세', value: '과세' },
];

export default Dropdown;
