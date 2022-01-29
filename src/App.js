import BasicInfo from 'components/containers/BasicInfo/BasicInfo';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import isSavedState, { registerFormState } from 'utils/globalState';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

function App() {
  const setIsSaved = useSetRecoilState(isSavedState);
  const registerForm = useRecoilValue(registerFormState);

  const checkRequiredValue = () => {
    const basicInform = registerForm.basicInfo;
    if (!basicInform.selectedCategory
      || !basicInform.productName
      || !basicInform.productInfo
      || !basicInform.totalStock
      // && option
    ) {
      alert('필수 항목을 입력하세요');
    }
  };
  const onSave = () => {
    setIsSaved(true);
    checkRequiredValue();
  };

  return (
    <RegisterForm>
      <TitleWrapper>
        <p>등록</p>
        <Button width="80px" height="30px" text="저장하기" color="purple" constrast="true" borderRadius="10" onClick={onSave} />
      </TitleWrapper>
      <BasicInfo />
    </RegisterForm>

  );
}

const RegisterForm = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
`;

const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.padding.medium};
  padding: ${({ theme }) => theme.padding.small};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export default App;
