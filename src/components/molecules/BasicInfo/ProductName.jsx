import Input from 'components/atoms/Input';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProductName({ handleBasicInfo, title }) {
  const onInput = (e) => {
    handleBasicInfo(title, e);
  };

  return (
    <SettingFramItem title="상품명*">
      <InputContainer>
        <Input setInputData={onInput} placeholder="상품명을 입력해주세요." />
      </InputContainer>
    </SettingFramItem>
  );
}

ProductName.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const InputContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
`;

export default ProductName;
