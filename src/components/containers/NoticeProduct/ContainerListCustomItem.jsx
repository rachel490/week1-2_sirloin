import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContainerListCustomItem({ listState, setListState }) {
  const handleInputChange = (event, index) => {
    const { customTitle, customDescription } = event.target;
    const list = [...listState];
    list[index][customTitle] = customDescription;
    setListState(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...listState];
    list.splice(index, 1);
    setListState(list);
  };

  const handleAddClick = () => {
    setListState([...listState, { customTitle: '', customDescription: '' }]);
  };

  return (
    <>
      {listState.map((item, index) => (
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

ContainerListCustomItem.propTypes = {
  listState: PropTypes.arrayOf(PropTypes.array).isRequired,
  setListState: PropTypes.func.isRequired,
};

export default ContainerListCustomItem;
