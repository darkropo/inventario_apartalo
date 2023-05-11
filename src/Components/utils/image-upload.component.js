import React from "react";
import { useLocation } from 'react-router-dom';
import axios from '../axios/axios.js';
import ImageUploading from "react-images-uploading";
import { Button } from "react-bootstrap";

const ImageUpload = () =>{
  const location = useLocation();
  const data = location.state;
  console.log("imageuploadprops::::::::::::::::::::::::::::::::::::::::::::::::::::::::", data);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
  setImages(imageList);
  };
    const uploadImages = (images) =>{
      console.log("images:::::::::::::::::::::", images);
        axios.post('/apartalo/inventario/utils/images/upload/'+data.productId,
                    images,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                    }
                  )
        .then(res => {
          console.log("imagelist::::::::::::::::::", res);
          if (res.status === 200){
            alert('Product successfully created')
          }else{
            Promise.reject()
          }
            
        })
        .catch(err => alert('Something went wrong'))

      
    };

    return (
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg","png","jpeg"]}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>Update</button>
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
                <Button variant="primary" size="lg" block="block" type="button" onClick={() => uploadImages(images)}>Upload Images</Button>
              </div>
              
            )}
          </ImageUploading>
      );
};

export default ImageUpload;
