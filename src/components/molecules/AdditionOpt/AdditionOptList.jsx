/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AdditionOptItem from './AdditionOption';

function AdditionOptList({ additionOpts }) {
  if (additionOpts.length === 0) return null;

  return (
    <Container>
      {additionOpts.map((additionOpt) => {
        const { id, additionOptName, additionOptPrice } = additionOpt;

        return (
          <AdditionOptItem
            id={id}
            key={id}
            additionOptName={additionOptName}
            additionOptPrice={additionOptPrice}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
    display: flex;    
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

AdditionOptList.propTypes = {
  additionOpts: PropTypes.array.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default AdditionOptList;
