/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { BORDER_COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function Checkbox({ state, func }) {
  const handleCheck = () => {
    func(state);
  };

  return (
    <Wrapper>
      <InputCheckBox type="checkbox" checked={state.isChecked} readOnly name="" id="checkbox" />
      <CheckIcon onClick={handleCheck}>
        {state.isChecked ? <MdCheckBox className="checkedIcon" /> : <MdCheckBoxOutlineBlank className="unCheckedIcon" />}
      </CheckIcon>
    </Wrapper>
  );
}

Checkbox.propTypes = {
  state: PropTypes.objectOf(PropTypes.object),
  func: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputCheckBox = styled.input`
  display: none;
`;

const CheckIcon = styled.div`
  cursor: pointer;

  .checkedIcon {
    color: purple;
    font-size: 2rem;
  }

  .unCheckedIcon {
    color: ${BORDER_COLOR};
    font-size: 2rem;
  }
`;

export default Checkbox;
