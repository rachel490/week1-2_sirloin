import Input from 'components/atoms/Input';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';

function ProductName() {
  return (
    <SettingFramItem title="상품명">
      <InputContainer>
        <Input placeholder="상품명을 입력해주세요." />
      </InputContainer>
    </SettingFramItem>
  );
}

const InputContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
`;

export default ProductName;
