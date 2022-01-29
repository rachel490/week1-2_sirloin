import SettingFramItem from 'components/atoms/SettingFrameItem';
import { BORDER_COLOR } from 'constants/color';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProductCode({ handleBasicInfo, title }) {
  const code = Date.now();
  useEffect(() => {
    handleBasicInfo(title, code);
  }, []);
  return (
    <Wrapper>
      <SettingFramItem title="상품코드">
        <Container>
          <Code>{code}</Code>
        </Container>
      </SettingFramItem>
    </Wrapper>
  );
}

ProductCode.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  height: 100%;
  border-left: 1px solid ${BORDER_COLOR};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12.8px 8px 12.8px 8px;
  height: 115%;
  border-left: 1px solid ${BORDER_COLOR};
`;

const Code = styled.div`
  height: 100%;
`;

export default ProductCode;
