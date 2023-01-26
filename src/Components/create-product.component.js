// Import Modules
import React, { useState, useEffect } from "react";
import axios from './axios/axios';
import ProductForm from "./ProductForm";
const {ROUTE_INV} = require('../config');

// CreateProduct Component
const CreateProduct = () => {
    console.log("formulario asdasdasdasdasdasddddddddddddddddddddddddddddddd");
  const [formValues, setFormValues] = 
    useState({ name: '', category: '', sub_category: '',  rotation: '', quantity: '', description:'', fabrication_date:'', expire_date:'', sale_value_bs:'',  sale_value_ds:'', buy_value_bs:'',  buy_value_ds:''})
  // onSubmit handler
  const onSubmit = productObject => {
    axios.post(ROUTE_INV+'products/create', 
    productObject)
      .then(res => {
        if (res.status === 200)
          alert('Product successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return product form
  return(
    <ProductForm initialValues={formValues} 
            onSubmit={onSubmit} 
            enableReinitialize>
            Create Product
    </ProductForm>
    
  )
}
  
// Export CreateProduct Component
export default CreateProduct