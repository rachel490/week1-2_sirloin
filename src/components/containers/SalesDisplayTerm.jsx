import SettingFrame from 'components/atoms/SettingFrame';
import Term from 'components/molecules/Term';
import React from 'react';
import styled from 'styled-components';

function SalesDisplayTerm() {
  return (
    <Wrap>
      <SettingFrame title="노출 및 판매기간 설정">
        <Term name="노출" />
        <Term name="판매" />
      </SettingFrame>
    </Wrap>
  );
}

export default SalesDisplayTerm;

const Wrap = styled.div`
  margin: 50px;
`;
