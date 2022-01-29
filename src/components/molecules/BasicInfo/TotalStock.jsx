import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';

function TotalStock() {
  return (
    <SettingFramItem title="상품 총 재고">
      <StockContainer>
        <p>dd개</p>
      </StockContainer>
    </SettingFramItem>
  );
}

const StockContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.5rem 0.8rem 0.8rem;
  height: 3rem;
`;

export default TotalStock;
