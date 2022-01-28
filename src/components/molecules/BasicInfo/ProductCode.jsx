import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';

function ProductCode() {
  return (
    <SettingFramItem title="상품코드">
      <Container>
        <div>dd</div>
      </Container>
    </SettingFramItem>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12.8px 8px 12.8px 8px;
  height: 110%;
`;

export default ProductCode;
