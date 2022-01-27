import { BORDER_COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SettingFramItem({ title, children }) {
  return (
    <FrameItem>
      <ItemLeft>{title}</ItemLeft>
      <ItemRight>
        {children}
      </ItemRight>
    </FrameItem>
  );
}

SettingFramItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FrameItem = styled.div`
    display: flex;
    border-top: 1px solid ${BORDER_COLOR};
  `;

const ItemLeft = styled.div`
    width: 20%;
    display: flex;
    padding: 10px 0 0 10px;
    border-right: 1px solid ${BORDER_COLOR};
`;

const ItemRight = styled.div`
    width: 80%;
`;

export default SettingFramItem;
