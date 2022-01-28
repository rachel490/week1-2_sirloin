import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';

function ContainerListItem({
  title, placeholder, name, value, onChange,
}) {
  return (
    <ContainerItem>
      <ListItemTitle>
        <span>{title}</span>
      </ListItemTitle>
      <Input placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </ContainerItem>
  );
}

const ContainerItem = styled.div`
  display: grid;
  height: 40px;
  margin: 15px 0 15px 0px;
  grid-template-columns: 3fr 5fr;
  grid-gap: 0px 10px;
`;

const ListItemTitle = styled.div`
  display: flex;
  color: rgb(89, 89, 89);
  padding-left: 20px;
  align-items: center;
`;

ContainerListItem.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContainerListItem;
