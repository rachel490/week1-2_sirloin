/* eslint-disable no-console */
import { SettingFrameItem } from 'components/atoms';
import Calendar from 'components/atoms/Calendar';
import RadioButton from 'components/atoms/RadioButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Term({ name, title }) {
  const [select, setSelect] = useState('제한 없음');

  return (
    <Wrap>
      <SettingFrameItem title={title}>
        <Content>
          <RadioButton
            name={name}
            text="제한 없음"
            select={select}
            setSelect={setSelect}
          />
          <RadioButton
            name={name}
            text={`미${name}`}
            select={select}
            setSelect={setSelect}
          />
          <RadioButton
            name={name}
            text={`${name} 기간 설정`}
            select={select}
            setSelect={setSelect}
          />
          <CalendarWrap>
            <Calendar time className="calendar" />
            <span>~</span>
            <Calendar time className="calendar" />
          </CalendarWrap>
        </Content>
      </SettingFrameItem>
    </Wrap>
  );
}

export default Term;

Term.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const Wrap = styled.div`
  margin: 50px;
`;

const Content = styled.div`
  padding: 20px;
`;

const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 20px;
    margin: 0 15px;
  }
`;
