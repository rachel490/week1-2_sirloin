/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button, Input } from 'components/atoms';
import { BORDER_COLOR, FONT_RED } from 'constants/color';
import styled, { css } from 'styled-components';
import Dropdown from 'components/atoms/Dropdown';
import UnitInput from './UnitInput';
import AdditionalOptionList from './AdditionalOptionList';

function OptionItem() {
  const [additionalOptions, setAdditionalOptions] = useState([]);

  const handleAdd = () => {
    const newOption = {
      id: Date.now(),
      additionalOptionName: '',
      additionalOptionPrice: '',
    };

    setAdditionalOptions([...additionalOptions, newOption]);
  };

  const handleDelete = (e) => {
    const { id } = e.currentTarget;
    const { tagName } = e.target;

    if (tagName === 'BUTTON') {
      const nextState = additionalOptions.filter((option) => option.id !== Number(id));

      setAdditionalOptions(nextState);
    }
  };

  const handleChange = (e) => {
    const { id } = e.currentTarget;
    const { name, value } = e.target;
    const nextState = additionalOptions.map((option) => {
      if (option.id === Number(id)) {
        option[name] = value;
      }
      return option;
    });

    setAdditionalOptions(nextState);
  };

  return (
    <Container>
      <Wrapper isButton>
        <Button
          width="60px"
          borderRadius={5}
          text="삭제"
          color={FONT_RED}
        />
      </Wrapper>
      <Wrapper>
        <Input name="optionName" placeholder="옵션명을 입력해주세요(필수)" />
      </Wrapper>
      <Wrapper>
        <UnitInput
          name="optionName"
          placeholder="상품 정상가 (필수)"
          unit="원"
        />
        <span>할인율</span>
        <UnitInput
          placeholder="상품 판매가 (필수)"
          unit="원"
        />
        <UnitInput
          placeholder="재고 (필수)"
          unit="개"
        />
        <Dropdown />
      </Wrapper>
      <AdditionalOptionList
        additionalOptions={additionalOptions}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
      <Wrapper>
        <div>
          <AddOptionButton
            text="+"
            width="25px"
            height="25px"
            borderRadius={5}
            onClick={handleAdd}
          />
          <span>추가 옵션 상품 추가</span>
        </div>
      </Wrapper>
    </Container>
  );
}

// OptionItem.propTypes = {};

const Container = styled.div`
  border: 1px solid ${BORDER_COLOR};
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
`;

const Wrapper = styled.div` 
    display: flex;    
    margin-top: 10px;
    align-items: center;
    ${({ isButton }) => (isButton ? css`
        justify-content: end;
    ` : css`
        justify-content: space-between;
    `)}
    ${({ isAddition }) => isAddition && css`
        flex-direction: column;
    `}
`;

const AddOptionButton = styled(Button)`
    margin-right: 10px; 
    border: 1px solid ${BORDER_COLOR};
`;

export default OptionItem;
