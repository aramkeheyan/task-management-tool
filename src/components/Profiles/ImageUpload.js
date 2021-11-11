// npm install --save react-images-uploading => need to be installed
import React, {useState} from "react";
import Button from '@mui/material/Button';
import ImageUploading from "react-images-uploading";


export default function ImageUploader() {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList) => { //addUpdateIndex
    // data for submit
    setImages(imageList);
  };

  return (
    <div className="ImageUploader">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
        }) => (

          <div className="upload__image-wrapper">
            <Button
                variant="contained"
                onClick={onImageUpload}
            >
              Upload photo
            </Button>
            {/* &nbsp; */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button variant="outlined" onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button variant="outlined" onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
