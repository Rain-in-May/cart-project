import React, {useRef, useState} from 'react';
import 'container/common/ImageInput.style'

const ImageInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const [picture, setPicture] = useState('');

    const onChange = async(e) => {
        console.log(e.target.files[0])
        const uploaded = await imageUploader.imageUpload(e.target.files[0]);
        onFileChange({
          name: uploaded.original_filename,
          url: uploaded.url,
        });
        setPicture(uploaded.url)
      };
    return (
        <div className="container">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          name="file"
          className="input"
          onChange={onChange}
          id="input-file"
          style={{display:"none"}}
        />
        { JSON.parse(localStorage.getItem("cartuser")).admin != null ?
        <div className="previewProfilePic" >
                <img className="playerProfilePic_home_tile" src={picture}></img>
        </div> : <></>}
      </div>
    );
  };
  export default ImageInput;