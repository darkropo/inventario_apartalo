import React, {useEffect} from "react";
import axios from '../axios/axios.js';
import Container from 'react-bootstrap/Container';

const ShowImage = (props) =>{
    const [images, setImages] = React.useState([]);
    
    useEffect(() => {
        axios
          .get("/apartalo/inventario/utils/images/upload/" + props.productId)
          .then(({ data }) => {
            setImages(data);
            console.log("imagesprops::::::::::::::::", data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [props.productId]);
  
      return (        
            <Container>
                
                {
                    
                    images.map((image) =>(
                      
                        <img key={image._id} src={image.imageUrl} alt="" width="100" />
                    ))
                }
                               
            </Container>     
        );
  };
  
  export default ShowImage;
  