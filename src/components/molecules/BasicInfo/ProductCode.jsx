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
    <SettingFramItem title="상품코드">
      <Wrapper>
        <p>{code}</p>
      </Wrapper>
    </SettingFramItem>
  );
}

ProductCode.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12.8px 8px 12.8px 8px;
  height: 4.1rem;
`;

export default ProductCode;
