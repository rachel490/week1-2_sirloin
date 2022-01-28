import Input from 'components/atoms/Input';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';

function ProductInfo() {
  return (
    <SettingFramItem title="상품 구성 소개 정보">
      <InputContainer>
        <Input placeholder="상품 구성 소개 정보를 입력해 주세요." />
      </InputContainer>
    </SettingFramItem>
  );
}

const InputContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
`;

export default ProductInfo;
