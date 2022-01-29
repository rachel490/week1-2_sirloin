/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import styled, { css } from 'styled-components';
import { BACKGROUND_DIMM_COLOR, BORDER_COLOR, FONT_RED } from 'constants/color';
import ImageUpload from 'components/atoms/ImageUpload';
import Option from './Option';

function OptSet({ optSet }) {
  const { id, options } = optSet;

  return (
    <Container>
      <Wrapper isButton>
        <Button
          name={`optSetDelBtn_${id}`}
          width="60px"
          borderRadius={5}
          text="삭제"
          color={FONT_RED}
        />
      </Wrapper>
      <OptSetList>
        <Wrapper>
          <ImageUpload name={`image_${id}`} />
        </Wrapper>
        {options.map((option) => <Option key={option.id} option={option} />)}
        <Button
          text="+ 옵션추가"
          width="100%"
          height="60px"
          name={`optAddBtn_${id}`}
          borderRadius={5}
        />
      </OptSetList>
    </Container>
  );
}

OptSet.propTypes = {
  optSet: PropTypes.object.isRequired,
};

const Container = styled.div`
  width: 100%;
  padding: 10px;
  `;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  ${({ isButton }) => (isButton
    ? css`
    justify-content: end;
    `
    : css`
    border-radius: 5px;
    background-color: ${BACKGROUND_DIMM_COLOR};  
    justify-content: center;
    height: 300px;
  `)}
  `;

const OptSetList = styled.div`
  background-color: white;  
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 5px;
`;

export default OptSet;
