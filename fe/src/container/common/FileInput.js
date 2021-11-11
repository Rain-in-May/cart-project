import React from 'react';
import {ImageUploader} from "container/common/ImageUploader";
import {ImageInput} from "container/index";


const FileInput = (props) => {
  const imageUploader = new ImageUploader();
  return (
    <ImageInput {...props} imageUploader={imageUploader} />
  )
};

export default FileInput;