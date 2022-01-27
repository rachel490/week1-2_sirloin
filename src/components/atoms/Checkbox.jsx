import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Wrapper>
      <InputCheckBox type="checkbox" checked={isChecked} readOnly name="" id="checkbox" />
      <CheckIcon onClick={handleCheck}>
        {isChecked ? <MdCheckBox className="checkedIcon" /> : <MdCheckBoxOutlineBlank className="unCheckedIcon" />}
      </CheckIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;

const InputCheckBox = styled.input`
  display: none;
`;

const CheckIcon = styled.div`
  .checkedIcon {
    color: purple;
    font-size: 2rem;
  }

  .unCheckedIcon {
    color: grey;
    font-size: 2rem;
  }
`;

export default Checkbox;
