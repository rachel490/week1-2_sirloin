/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input({
  placeholder,
  inputData,
  setInputData,
  name,
}) {
  return <StInput type="text" name={name} placeholder={placeholder} value={inputData} onChange={(e) => setInputData(e.target.value)} />;
}

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputData: PropTypes.string.isRequired,
  setInputData: PropTypes.func.isRequired,
};

const StInput = styled.input`
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0,.1);
  width: 100%;

  &::placeholder {
    color: rgba(0,0,0,.4);
  }
`;
