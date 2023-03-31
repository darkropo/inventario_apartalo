import React, {useEffect} from "react";
import axios from '../axios/axios.js';
import Container from 'react-bootstrap/Container';

const ShowImage = (props) =>{
    const [images, setImages] = React.useState([]);
    console.log("imagesprops::::::::::::::::", props);
    useEffect(() => {
        axios
          .get("/apartalo/inventario/utils/images/upload/" + props.productId)
          .then(({ data }) => {
            setImages(data);
            
          })
          .catch((error) => {
            console.log(error);
          });
      }, [props.productId]);
  
      return (        
            <Container>
                
                {
                    
                    images.map((image) =>(
                      
                        <img src={image.imageUrl} alt="" width="100" />
                    ))
                }
                               
            </Container>     
        );
  };
  
  export default ShowImage;
  