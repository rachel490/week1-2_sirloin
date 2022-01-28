import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function SelectedCategory({ func }) {
  const onClose = () => {
    func();
  };

  return (
    <Wrapper>
      <Container>
        <CategoryName>선택된 카테고리명</CategoryName>
        <AiOutlineClose onClick={onClose} />
      </Container>
    </Wrapper>
  );
}

SelectedCategory.propTypes = {
  func: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CategoryName = styled.p`
  font-size: 0.85rem;
`;

export default SelectedCategory;
