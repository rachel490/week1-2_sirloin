import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'components/atoms';
import { FONT_RED } from 'constants/color';
import styled from 'styled-components';
import { CgCornerDownRight } from 'react-icons/cg';
import UnitInput from '../OptionItem/UnitInput';

function AdditionOptItem({
  id,
}) {
  return (
    <Container id={id}>
      <CgCornerDownRight width={20} height={20} />
      <LeftInputWrapper>
        <Input
          placeholder="추가 옵션명 (필수)"
          name="additionOptName"
        />
      </LeftInputWrapper>
      <UnitInput
        width={250}
        placeholder="추가 옵션 정상가 (필수)"
        name="additionOptPrice"
        unit="원"
      />
      <Button
        name="additionOptDelBtn"
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
    width:100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const LeftInputWrapper = styled.div`
    width: 350px;
`;

AdditionOptItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AdditionOptItem;
