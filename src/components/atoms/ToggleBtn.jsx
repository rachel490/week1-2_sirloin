import React from 'react';
import styled from 'styled-components';

function ToggleBtn() {
  return <ToggleButton type="checkbox" />;
}

const ToggleButton = styled.input`
    width:80px;
    height:30px;
    -webkit-appearance:none;
    outline:none;
    border-radius: 20px;
    background: rgba(158,158,158);
    transition: .2s;
    &:checked{
        background: rgba(173,171,227);
        ::before{
            left:40px;
            background:rgba(38,34,181);
        }
    }
    ::before{
        content: '';   
        position:absolute;
        width: 30px;
        height:30px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: rgba(250,250,250);
        transform: scale(1.7);
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
        transition: .2s;
    }
`;

export default ToggleBtn;
