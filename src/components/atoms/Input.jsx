import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input({ placeholder }) {
  return <StInput type="text" placeholder={placeholder} />;
}

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const StInput = styled.input`
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0,.1);
  width: 100%;

  &::placeholder {
    color: rgba(0,0,0,.4);
  }
`;
