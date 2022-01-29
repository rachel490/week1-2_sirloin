import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

function ImageUpload({
  single, setImgFiles, imgFiles, name,
}) {
  const imgRef = useRef();

  const displayFileList = (e) => {
    const newFile = e.target.files[0]?.name;
    const isSame = imgFiles.some((file) => file === newFile);
    if (isSame) {
      return;
    }
    if (single) {
      setImgFiles([newFile]);
    } else {
      setImgFiles([newFile, ...imgFiles]);
    }
  };

  const deleteImg = (target) => {
    const updatedFileList = imgFiles?.filter((file) => file !== target);
    setImgFiles(updatedFileList);
  };

  const handleClick = () => {
    imgRef.current.click();
  };

  return (
    <Wrap>
      <InputBox>
        <Button htmlFor="imgUpload" onClick={handleClick}>
          + 이미지 첨부
        </Button>
        <Input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="imgUpload"
          onChange={displayFileList}
          ref={imgRef}
          name={name}
        />
      </InputBox>
      <ul>
        {imgFiles?.map((file) => (
          <ListItem key={file}>
            <span>{file}</span>
            <DeleteBtn type="button">
              <MdClose className="icon" onClick={() => deleteImg(file)} />
            </DeleteBtn>
          </ListItem>
        ))}
      </ul>
    </Wrap>
  );
}

ImageUpload.prototype = {
  name: PropTypes.string,
};

export default ImageUpload;

ImageUpload.propTypes = {
  single: PropTypes.bool,
  imgFiles: PropTypes.arrayOf(PropTypes.array).isRequired,
  setImgFiles: PropTypes.func.isRequired,
};

ImageUpload.defaultProps = {
  single: false,
};

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 40px;
  border: 1px solid #00264b;
  border-radius: 5px;
  margin-right: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 30px;

  span {
    width: 250px;
    height: 30px;
  }
`;

const DeleteBtn = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
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
