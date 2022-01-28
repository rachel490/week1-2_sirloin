import SettingFrame from 'components/atoms/SettingFrame';
import Category from 'components/molecules/BasicInfo/Category';
import FilterTag from 'components/molecules/BasicInfo/FilterTag';
import MainImg from 'components/molecules/BasicInfo/MainImg';
import ProductCode from 'components/molecules/BasicInfo/ProductCode';
import ProductInfo from 'components/molecules/BasicInfo/ProductInfo';
import ProductName from 'components/molecules/BasicInfo/ProductName';
import Thumbnail from 'components/molecules/BasicInfo/Thumbnail';
import TotalStock from 'components/molecules/BasicInfo/TotalStock';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function BasicInfo() {
  const [basicInfo, setBasicInfo] = useState({});
  const handleBasicInfo = (key, input) => {
    // console.log(key, input);
    setBasicInfo({
      ...basicInfo,
      [key]: input,
    });
  };

  useEffect(() => {
    console.log(basicInfo);
  }, [basicInfo]);
  return (
    <Wrapper>
      <SettingFrame title="상품기본정보">
        <Category handleBasicInfo={handleBasicInfo} title="selectedCategory" />
        <FilterTag />
        <SettingFramItemWrapper>
          <SettingFramItemContainer>
            <ProductName handleBasicInfo={handleBasicInfo} title="productName" />
          </SettingFramItemContainer>
          <SettingFramItemContainer>
            <ProductCode />
          </SettingFramItemContainer>
        </SettingFramItemWrapper>
        <ProductInfo handleBasicInfo={handleBasicInfo} title="productInfo" />
        <Thumbnail handleBasicInfo={handleBasicInfo} title="thumbnail" />
        <MainImg handleBasicInfo={handleBasicInfo} title="mainImg" />
        <TotalStock />
      </SettingFrame>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

const SettingFramItemWrapper = styled.div`
  display: flex;
`;

const SettingFramItemContainer = styled.div`
  flex-basis: 50%;
`;

export default BasicInfo;
