import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { totalStockState } from 'utils/globalState';

function TotalStock() {
  const totalStock = useRecoilValue(totalStockState);
  return (
    <SettingFramItem title="상품 총 재고*">
      <StockContainer>
        <p>
          {totalStock}
          개
        </p>
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
