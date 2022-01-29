import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function NoticeInput({
  placeholder, name, value, onChange,
}) {
  return <StInput placeholder={placeholder} name={name} value={value} onChange={onChange} />;
}

NoticeInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StInput = styled.input`
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0,.1);
  width: 100%;

  &::placeholder {
    color: rgba(0,0,0,.4);
  }
`;

export default NoticeInput;
