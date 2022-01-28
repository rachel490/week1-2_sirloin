import React, { useState } from 'react';
import styled from 'styled-components';

function ImageUpload() {
  const [fileList, setFileList] = useState([]);

  const displayFileList = (e) => {
    const newFile = e.target.files[0].name;
    setFileList([newFile, ...fileList]);
  };

  const deleteImg = (e) => {
    const target = e.target.previousSibling.innerText;
    const updatedFileList = fileList.filter((file) => file !== target);
    setFileList(updatedFileList);
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
        {fileList.map((file) => (
          <ListItem>
            <span>{file}</span>
            <DeleteBtn type="button" key={file} onClick={deleteImg}>x</DeleteBtn>
          </ListItem>
        ))}
      </ul>
    </Wrap>
  );
}

export default ImageUpload;

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const AddBtn = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 7px 40px;
  border: 1px solid #00264B;
  border-radius: 5px;
  margin-right: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  span {
    width: 85px;
    height: 30px;
  }
`;

const DeleteBtn = styled.button`
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
