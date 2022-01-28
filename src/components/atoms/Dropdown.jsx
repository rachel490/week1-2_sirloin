/* eslint-disable no-use-before-define */
import { BORDER_COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';

function Dropdown() {
  const [value, setValue] = React.useState('비과세');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <DropButton value={value} onChange={handleChange}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </DropButton>
  );
}

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
