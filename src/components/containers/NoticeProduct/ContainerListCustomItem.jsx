import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import React, { useState } from 'react';
import styled from 'styled-components';

function ContainerListCustomItem() {
  const [customList, setCustomList] = useState([{ customTitle: '', customDescription: '' }]);

  const handleInputChange = (event, index) => {
    const { customTitle, customDescription } = event.target;
    const list = [...customList];
    list[index][customTitle] = customDescription;
    setCustomList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...customList];
    list.splice(index, 1);
    setCustomList(list);
  };

  const handleAddClick = () => {
    setCustomList([...customList, { customTitle: '', customDescription: '' }]);
  };

  return (
    <>
      {customList.map((item, index) => (
        <CustomItemList key={item.customTitle}>
          <Input placeholder="항목 제목 자유 입력" value={item.customTitle} onChange={(event) => handleInputChange(event, index)} />
          <Input placeholder="내용을 입력해주세요." value={item.customDescription} onChange={(event) => handleInputChange(event, index)} />
          <Button
            text="삭제"
            color="red"
            borderRadius={0}
            height="100%"
            width="100%"
            onClick={() => handleRemoveClick(index)}
          />
        </CustomItemList>
      ))}
      <div style={{ marginTop: '27px' }}>
        <Button
          text="+ 항목 추가"
          width="150px"
          height="43px"
          onClick={handleAddClick}
        />
      </div>
    </>
  );
}

const CustomItemList = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0px 27px;
  grid-template-columns: 3fr 4fr 1fr;
  margin: 14px 0 14px 0;
`;

export default ContainerListCustomItem;
