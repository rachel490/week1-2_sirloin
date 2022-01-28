import Checkbox from 'components/atoms/Checkbox';
import SelectedCategory from 'components/atoms/SelectedCategory';
import { BORDER_COLOR } from 'constants/color';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function SelectCategories() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: 'selected cate',
    },
    {
      id: 2,
      name: 'selected cate2',
    },
  ]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    setCategories(categories);
    setCheckedList(checkedList);
  }, []);

  const handleCheckList = (cate) => {
    if (checkedList.includes(cate.id)) {
      const filteredCheckedList = checkedList.filter((checkedItem) => checkedItem !== cate.id);
      setCheckedList(filteredCheckedList);
    } else {
      setCheckedList([...checkedList, cate.id]);
    }
  };
  return (
    <Wrapper>
      <CateContainer>
        <CateList>
          {categories.map((category) => (
            <CateItem>
              <Checkbox
                state={category}
                checkedList={checkedList}
                func={() => handleCheckList(category)}
              />
              <CateTitle>{category.name}</CateTitle>
            </CateItem>
          ))}

        </CateList>
      </CateContainer>
      <SelectedCateContainer>
        <SelectedCateList>
          {categories.map((category) => (
            checkedList.includes(category.id)
              ? <SelectedCategory categoryName={category.name} />
              : ''
          ))}
        </SelectedCateList>
      </SelectedCateContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const CateContainer = styled.div`
  flex: 5;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.1rem;
`;

const CateList = styled.ul``;

const CateItem = styled.li`
  display: flex;
`;

const CateTitle = styled.p``;

const SelectedCateContainer = styled.div`
  flex: 5;
  margin-left: 0.5rem;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.1rem;
`;

const SelectedCateList = styled.ul`
  //
`;

export default SelectCategories;
