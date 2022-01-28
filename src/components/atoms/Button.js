/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
function Button({ width, height, color, constrast, text }) {
  return (
    <BtnContainer
      width={width}
      height={height}
      color={color}
      constrast={constrast}>
      {text}
    </BtnContainer>
  );
}

const BtnContainer = styled.button`
  ${({ color, width, height, constrast }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em 1em 0.4em 1em;
    border: solid ${color} 1px;
    border-radius: 4px;
    width: ${width}px;
    height: ${height}px;
    ${constrast
      ? css`
          background-color: ${color};
          color: white;
        `
      : css`
          color: ${color};
        `}
  `}
`;

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  constrast: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  width: 100,
  height: 30,
  color: 'black',
  constrast: false,
  text: '버튼',
};

export default Button;
