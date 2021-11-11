import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.REACT_APP_CLOUDINARY_API_KEY;
const name = process.env.REACT_APP_CLOUDINARY_STORAGE;

export class ImageUploader {
	// 하나의 기능, 즉 imageUpload만 하는 함수를 지정해주고 file을 인자로 받았다.
    async imageUpload(file) {
    
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", `${name}`);

    const result = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}
