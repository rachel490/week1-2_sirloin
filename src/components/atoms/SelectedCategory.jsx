/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function SelectedCategory({ state, categoryName, func }) {
  const onClose = () => {
    func(state);
  };

  return (
    <Wrapper>
      <Container>
        <p>{categoryName}</p>
        <AiOutlineClose onClick={onClose} />
      </Container>
    </Wrapper>
  );
}

SelectedCategory.propTypes = {
  state: PropTypes.arrayOf(PropTypes.array),
  categoryName: PropTypes.string,
  func: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0.5rem 0;
  width: 11rem;
  padding: 0.5rem 0.8rem 0.5rem 1rem;
  background-color: rgb(232,232,239);
  border: 1px solid purple;
  border-radius: 0.3rem;
  & > svg {
    margin-left: 0.3rem;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

export default SelectedCategory;
