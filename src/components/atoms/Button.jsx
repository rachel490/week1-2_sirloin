/* eslint-disable react/require-default-props */
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
function Button({ name, width, height, color, constrast, text, borderRadius, onClick }) {
  return (
    <BtnContainer
      name={name}
      width={width}
      height={height}
      color={color}
      constrast={constrast}
      borderRadius={borderRadius}
      onClick={onClick}
      >
      {text}
    </BtnContainer>
  );
}

const BtnContainer = styled.button`
  ${({ color, width, height, constrast, borderRadius }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em 1em 0.4em 1em;
    border: solid ${color} 1px;
    border-radius: ${borderRadius}px;
    width: ${width};
    height: ${height};
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
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  constrast: PropTypes.bool,
  text: PropTypes.string,
  borderRadius: PropTypes.number,
};

Button.defaultProps = {
  width: '100%',
  height: '30px',
  color: 'black',
  constrast: false,
  text: '버튼',
  borderRadius: 1,
};

export default Button;
