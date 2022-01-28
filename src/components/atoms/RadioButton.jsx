import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function RadioButton({
  id, name, text, select, setSelect,
}) {
  return (
    <Item>
      <RadioBtn
        type="radio"
        name={name}
        value={text}
        checked={select === id}
        onChange={(e) => setSelect(e.target.value)}
      />
      <RadioBtnLabel />
      <div>{text}</div>
    </Item>
  );
}

export default RadioButton;

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  setSelect: PropTypes.func.isRequired,
};

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioBtnLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioBtn = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioBtnLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #eeeeee;
    }
  }
  ${(props) => props.checked
  && `
    &:checked + ${RadioBtnLabel} {
      background: white;
      border: 1px solid grey;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: 4px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #2e2e5e;
      }
    }
  `}
`;
