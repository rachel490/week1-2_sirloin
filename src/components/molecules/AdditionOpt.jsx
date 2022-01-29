/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'components/atoms';
import { FONT_RED } from 'constants/color';
import styled from 'styled-components';
import { CgCornerDownRight } from 'react-icons/cg';
import UnitInput from './UnitInput';

function AdditionOptItem({ optAddition }) {
  const { id } = optAddition;

  return (
    <Container>
      <CgCornerDownRight width={20} height={20} />
      <LeftInputWrapper>
        <Input
          placeholder="추가 옵션명 (필수)"
          name={`additionOptName_${id}`}
        />
      </LeftInputWrapper>
      <UnitInput
        width={250}
        placeholder="추가 옵션 정상가 (필수)"
        name={`additionOptPrice_${id}`}
        unit="원"
      />
      <Button
        name={`additionOptDelBtn_${id}`}
        width="60px"
        borderRadius={5}
        text="삭제"
        color={FONT_RED}
      />
    </Container>
  );
}

const Container = styled.li`
    display: flex;
    width:80%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const LeftInputWrapper = styled.div`
    width: 350px;
    margin-right: 10px;
`;

AdditionOptItem.propTypes = {
  optAddition: PropTypes.object.isRequired,
};

export default AdditionOptItem;
