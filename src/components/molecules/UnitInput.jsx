/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'components/atoms';

function UnitInput({
  width = 200, placeholder, unit, name,
}) {
  return (
    <Container width={width}>
      <Input name={name} placeholder={placeholder} />
      <span>{unit}</span>
    </Container>
  );
}

UnitInput.propTypes = {
  width: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  unit: PropTypes.string.isRequired,
};

const Container = styled.div`
    display: flex;
    align-items: center;
    width: ${({ width }) => `${width}px`};
    margin-right: 20px;

    & > span{
        display: inline-block;
        margin-left: 10px;
    }
`;

export default UnitInput;
