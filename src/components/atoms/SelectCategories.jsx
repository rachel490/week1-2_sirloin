import Checkbox from 'components/atoms/Checkbox';
import SelectedCategory from 'components/atoms/SelectedCategory';
import { BORDER_COLOR } from 'constants/color';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function SelectCategories() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: '선택한 카테고리명',
    },
    {
      id: 2,
      name: '카테고리명2',
    },
    {
      id: 4,
      name: '카테고리 예시',
    },
    {
      id: 5,
      name: '카테고리 예시',
    },
    {
      id: 6,
      name: '카테고리 예시',
    },
    {
      id: 7,
      name: '카테고리 예시',
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
        <ul>
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

        </ul>
      </CateContainer>
      <SelectedCateContainer>
        <ul>
          {categories.map((category) => (
            checkedList.includes(category.id)
              ? (
                <SelectedCategory
                  state={category}
                  categoryName={category.name}
                  func={() => handleCheckList(category)}
                />
              )
              : ('')
          ))}
        </ul>
      </SelectedCateContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 20rem;
`;

const CateContainer = styled.div`
  flex: 5;
  padding: 1rem;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.1rem;
  overflow-y: scroll;
`;

const CateItem = styled.li`
  display: flex;
`;

const CateTitle = styled.p`
  margin-left: 0.5rem;
`;

const SelectedCateContainer = styled.div`
  flex: 5;
  padding: 1rem;
  margin-left: 0.5rem;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.1rem;
  overflow-y: scroll;
`;

export default SelectCategories;
