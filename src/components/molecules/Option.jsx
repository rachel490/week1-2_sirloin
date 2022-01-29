/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'components/atoms';
import { BORDER_COLOR, FONT_RED } from 'constants/color';
import styled, { css } from 'styled-components';
import Dropdown from 'components/atoms/Dropdown';
import UnitInput from './UnitInput';
import AdditionOptItem from './AdditionOpt';
// import AdditionalOptionList from '../AdditionOpt/AdditionOptList';

function Option({ option }) {
  const {
    id,
    isTax,
    optAdditions,
    optName,
    productPrice,
    productSale,
    productStock,
  } = option;
  return (
    <Container
      id={id}
    >
      <Wrapper isButton>
        <Button
          name={`optDelBtn_${id}`}
          width="60px"
          borderRadius={5}
          text="삭제"
          color={FONT_RED}
        />
      </Wrapper>
      <Wrapper>
        <Input name="optName" placeholder="옵션명을 입력해주세요(필수)" />
      </Wrapper>
      <Wrapper>
        <UnitInput
          name="productPrice"
          placeholder="상품 정상가 (필수)"
          unit="원"
        />
        <span>할인율</span>
        <UnitInput
          name="productSale"
          placeholder="상품 판매가 (필수)"
          unit="원"
        />
        <UnitInput
          name="productStock"
          placeholder="재고 (필수)"
          unit="개"
        />
        <Dropdown name="isTax" />
      </Wrapper>
      {optAdditions.map((optAddition) => (
        <AdditionOptItem
          key={optAddition.id}
          optAddition={optAddition}
        />
      ))}
      <Wrapper>
        <div>
          <AddOptionButton
            name={`additionOptAddBtn_${id}`}
            text="+"
            width="25px"
            height="25px"
            borderRadius={5}
          />
          <span>추가 옵션 상품 추가</span>
        </div>
      </Wrapper>
    </Container>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  // handleAdd: PropTypes.func.isRequired,
  // deleteOption: PropTypes.func.isRequired,
  // changeOption: PropTypes.func.isRequired,
};

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

export default Option;

/* const { id: optionItemId, additionalOption: initAdditionOpt } = option;
  const [additionalOptions, setAdditionalOptions] = useState(initAdditionOpt);

  const handleDelete = (e) => {
    const { id } = e.currentTarget;
    const { tagName } = e.target;

    if (tagName === 'BUTTON') {
      const nextState = additionalOptions
        .filter((additionalOption) => additionalOption.id !== Number(id));

      setAdditionalOptions(nextState);
    }
  };

  const handler = (e) => {
    const { name } = e.target;
    if (name === 'optDelBtn') {
      handleDelete(e);
    } else if (name === 'additionOptAddBtn') {
      handleAdd(e);
    }
  };

  const handleChange = (e) => {
    const { id } = e.currentTarget;
    const { name, value } = e.target;
    const nextState = additionalOptions.map((additionalOption) => {
      if (additionalOption.id === Number(id)) {
        additionalOption[name] = value;
      }
      return additionalOption;
    });

    setAdditionalOptions(nextState);
  }; */
