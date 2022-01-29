import { SettingFramItem, FilterTag } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Tag({ handleBasicInfo, title }) {
  const [selectedTag, setSelectedTag] = useState([]);

  useEffect(() => {
    handleBasicInfo(title, selectedTag);
  }, [selectedTag]);

  return (
    <SettingFramItem title="필터 태그">
      <Wrapper>
        <FilterTag selectedTag={selectedTag} setSelectedTag={setSelectedTag} type="multiple" />
      </Wrapper>
    </SettingFramItem>
  );
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  height: 10rem;
`;

export default Tag;
