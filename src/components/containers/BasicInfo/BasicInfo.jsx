import ImageUpload from 'components/atoms/ImageUpload';
import Input from 'components/atoms/Input';
import SettingFrame from 'components/atoms/SettingFrame';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import styled from 'styled-components';
import Category from './Category';

function BasicInfo() {
  return (
    <Wrapper>
      <SettingFrame title="상품기본정보">
        <SettingFramItem title="카테고리">
          <Category />
        </SettingFramItem>
        <SettingFramItem title="필터 태그">
          <div>dd</div>
        </SettingFramItem>

        <SettingFramItemWrapper>
          <SettingFramItemContainer>
            <SettingFramItem title="상품명">
              <InputContainer>
                <Input placeholder="상품명을 입력해주세요." />
              </InputContainer>
            </SettingFramItem>
          </SettingFramItemContainer>
          <SettingFramItemContainer>
            <SettingFramItem title="상품코드">
              <div>dd</div>
            </SettingFramItem>
          </SettingFramItemContainer>
        </SettingFramItemWrapper>

        <SettingFramItem title="상품 구성 소개 정보">
          <InputContainer>
            <Input placeholder="상품 구성 소개 정보를 입력해 주세요." />
          </InputContainer>
        </SettingFramItem>

        <SettingFramItem title="상품 썸네일">
          <ThumbnailContainer>
            <ImageUpload />
          </ThumbnailContainer>
        </SettingFramItem>

        <SettingFramItem title="상품 대표 이미지">
          <MainImgContainer>
            <ImageUpload />
          </MainImgContainer>
        </SettingFramItem>

        <SettingFramItem title="상품 총 재고">
          <StockContainer>
            <p>dd개</p>
          </StockContainer>
        </SettingFramItem>
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

const InputContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.5rem;
`;

const ThumbnailContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.8rem;
  height: 5rem;
`;

const MainImgContainer = styled.div`
  padding: 0.8rem 0.5rem 0.8rem 0.8rem;
  height: 10rem;
`;

const StockContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.5rem 0.8rem 0.8rem;
  height: 3rem;
`;

export default BasicInfo;
