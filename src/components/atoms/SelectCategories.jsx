import Checkbox from 'components/atoms/Checkbox';
import SelectedCategory from 'components/atoms/SelectedCategory';
import { BORDER_COLOR } from 'constants/color';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SelectCategories({ handleBasicInfo, title }) {
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: '카테고리1',
    },
    {
      id: 2,
      name: '카테고리2',
    },
    {
      id: 4,
      name: '카테고리3',
    },
    {
      id: 5,
      name: '카테고리4',
    },
    {
      id: 6,
      name: '카테고리5',
    },
    {
      id: 7,
      name: '카테고리6',
    },
  ]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    setCategories(categories);
    setCheckedList(checkedList);
  }, []);

  useEffect(() => {
    handleBasicInfo(title, checkedList);
  }, [checkedList]);

  const handleCheckList = (cate) => {
    const isChecked = checkedList.some((checkedItem) => checkedItem.id === cate.id);
    if (isChecked) {
      const filteredCheckedList = checkedList.filter((checkedItem) => checkedItem.id !== cate.id);
      setCheckedList(filteredCheckedList);
    } else {
      setCheckedList([...checkedList, cate]);
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
            checkedList.some((checkedItem) => checkedItem.id === category.id)
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

SelectCategories.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

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
