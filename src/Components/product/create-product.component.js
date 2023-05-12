// Import Modules
import React, { useState } from "react";
import axios from '../axios/axios.js';
import ProductForm from "./ProductForm";

// CreateProduct Component
const CreateProduct = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', category: '', sub_category: '',  rotation: '', quantity: '', description:'', fabrication_date:'', expire_date:'', sale_value_bs:'',  sale_value_ds:'', buy_value_bs:'',  buy_value_ds:'', image:''})
    
  const [created, setCreated] = useState(0);  
  const [productId, setProductId] = useState(0);

  function handleChange(formInput) {
    console.log("input:::::::::::::::::::::::::::::::::::::::::::::::::::::", formInput);
    setFormValues(formInput.target.value);
  }
  // onSubmit handler
  const toSubmit = productObject => {
    axios.post('/apartalo/inventario/products/create', 
    productObject)
      .then(res => {
        if (res.status === 200){
          setCreated(1);
          setProductId(res.data.insertedId); 
          alert('Product successfully created')
        }else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return product form
  return(
    <ProductForm initialValues={formValues} onSubmit={toSubmit} enableReinitialize created={created} productId={productId} onChange={handleChange}>
            Create Product
    </ProductForm>
    
  )
}
  
// Export CreateProduct Component
export default CreateProduct