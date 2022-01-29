import BasicInfo from 'components/containers/BasicInfo/BasicInfo';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import isSavedState, { registerFormState } from 'utils/globalState';
import Button from 'components/atoms/Button';

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
      alert('필수 합력을 입력하세요');
    }
  };
  const onSave = () => {
    setIsSaved(true);
    checkRequiredValue();
  };

  return (
    <>
      <Button width="80px" height="40px" text="save" color="purple" constrast={false} borderRadius="10px" onClick={onSave} />
      <BasicInfo />
    </>
  );
}

export default App;
