/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { BORDER_COLOR, BACKGROUND_COLOR, BACKGROUND_DIMM_COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SettingFrame({
  title, isButton, isBackground, onClick, children,
}) {
  return (
    <SettingFrameContainer isBackground={isBackground} onClick={onClick}>
      <FrameTitle isButton={isButton}>
        <span>{title}</span>
        {isButton && <button name="optSetAddBtn_">추가하기</button>}
      </FrameTitle>
      { children }
    </SettingFrameContainer>
  );
}

SettingFrame.propTypes = {
  title: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  isBackground: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const SettingFrameContainer = styled.div`
    border: 1px solid ${BORDER_COLOR};
    background-color: ${({ isBackground }) => isBackground && BACKGROUND_DIMM_COLOR}; 
`;

const FrameTitle = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: ${({ isButton }) => isButton && 'space-between'};
    background-color: ${BACKGROUND_COLOR};
    
    & > span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

export default SettingFrame;
