/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import OptionItem from './Option';

function OptSet({ optSet }) {
  const { id, image, options } = optSet;

  return (
    <div>
      <Button text="삭제" name={`optSetDelBtn_${id}`} />
      <div>
        <div>이미지 첨부</div>
        {options.map((option) => <OptionItem key={option.id} option={option} />)}
        <Button text="+ 옵션추가" name={`optAddBtn_${id}`} />
      </div>
    </div>
  );
}

OptSet.propTypes = {
  optSet: PropTypes.object.isRequired,
};

export default OptSet;
