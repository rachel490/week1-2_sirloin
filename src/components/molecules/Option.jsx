/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'components/atoms';
import { BORDER_COLOR, FONT_RED } from 'constants/color';
import styled, { css } from 'styled-components';
import Dropdown from 'components/atoms/Dropdown';
import UnitInput from './UnitInput';
import AdditionOptItem from './AdditionOpt';

function Option({ option }) {
  const {
    id, productPrice, productSale, optAdditions,
  } = option;

  const getDiscountRate = (productPrice, productSale) => {
    if (productPrice === 0 || productSale === 0) return '할인율 없음';

    const rate = (1 - productSale / productPrice) * 100;
    const discountRate = rate > -1 ? `${rate.toFixed()}%` : '할인율 없음';

    return discountRate;
  };

  return (
    <Container>
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
        <Input name={`optName_${id}`} placeholder="옵션명을 입력해주세요(필수)" />
      </Wrapper>
      <Wrapper>
        <UnitInput
          name={`productPrice_${id}`}
          placeholder="상품 정상가 (필수)"
          unit="원"
        />
        <span>{getDiscountRate(productPrice, productSale)}</span>
        <UnitInput
          name={`productSale_${id}`}
          placeholder="상품 판매가 (필수)"
          unit="원"
        />
        <UnitInput
          name={`productStock_${id}`}
          placeholder="재고 (필수)"
          unit="개"
        />
        <Dropdown name={`isTax_${id}`} />
      </Wrapper>
      {optAdditions.map((optAddition) => (
        <AdditionOptItem
          key={optAddition.id}
          optAddition={optAddition}
        />
      ))}
      <Wrapper>
        <AddButtonWrapper>
          <Button
            name={`additionOptAddBtn_${id}`}
            text="+"
            width="25px"
            height="25px"
            borderRadius={5}
          />
          <span>추가 옵션 상품 추가</span>
        </AddButtonWrapper>
      </Wrapper>
    </Container>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
};

const Container = styled.div`
  border: 1px solid ${BORDER_COLOR};
  border-radius: 10px;
  margin: 10px 0;
`;

const Wrapper = styled.div`
    display: flex;
    margin: 10px;
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

const AddButtonWrapper = styled.div`
  & > span{
    margin-left: 5px;
  }
`;

export default Option;
