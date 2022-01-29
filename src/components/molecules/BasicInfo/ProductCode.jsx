import SettingFramItem from 'components/atoms/SettingFrameItem';
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
          <p>{code}</p>
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
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
`;

export default ProductCode;
