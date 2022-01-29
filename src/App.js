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
  padding: 20px;

`;

const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding.small};
`;

export default App;
