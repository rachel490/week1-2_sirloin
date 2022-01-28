/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

function ImageUpload({ imageFiles, setImageFiles, type }) {
  const displayFileList = (e) => {
    const newFile = e.target.files[0].name;

    if (type === 'single') {
      setImageFiles([newFile]);
    } else if (imageFiles.every((item) => item !== newFile)) {
      setImageFiles([newFile, ...imageFiles]);
    }
  };

  const deleteImg = (e) => {
    const target = e.target.parentNode.previousSibling.innerText;
    const updatedFileList = imageFiles.filter((file) => file !== target);
    setImageFiles(updatedFileList);
  };

  return (
    <Wrap>
      <AddBtn>
        <Label htmlFor="imgUpload">
          + 이미지 첨부
          <Input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="imgUpload"
            onChange={displayFileList}
          />
        </Label>
      </AddBtn>
      <ul>
        {imageFiles?.map((file) => (
          <ListItem key={file} type={type}>
            <span>{file}</span>
            <DeleteBtn type="button">
              <MdClose className="icon" onClick={deleteImg} />
            </DeleteBtn>
          </ListItem>
        ))}
      </ul>
    </Wrap>
  );
}

export default ImageUpload;

ImageUpload.propTypes = {
  imageFiles: PropTypes.array.isRequired,
  setImageFiles: PropTypes.func.isRequired,
  type: PropTypes.string,
};

ImageUpload.defaultProps = {
  type: 'multiple',
};

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-top: 1px solid rgba(0,0,0,.1);
`;

const AddBtn = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 7px 40px;
  border: 1px solid #00264B;
  border-radius: 5px;
  margin-right: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: ${(props) => ((props.type === 'single') ? '40px' : '30px')};

  span {
    width: 85px;
    height: 30px;
  }
`;

const DeleteBtn = styled.button`
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 18px;
    cursor: pointer;
  }
`;
