// Import Modules
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from '../axios/axios.js';
import ProductForm from "./ProductForm";
  
// CreateProduct Component
const EditProduct = (props) => {
  const { id } = useParams(); 
  
  const [formValues, setFormValues] = 
    useState({id:'', name: '', category: '', sub_category: '',  rotation: '', quantity: '', description:'', fabrication_date:'', expire_date:'', sale_value_bs:'',  sale_value_ds:'', buy_value_bs:'',  buy_value_ds:''})
  // onSubmit handler
  const onSubmit = (productObject) => {
    axios.put('/apartalo/inventario/products/edit/' + id, productObject)
      .then(res => {
        if (res.status === 200)
          alert('Product successfully updated.')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
  useEffect(() => {
    axios.get('/apartalo/inventario/products/edit/' + id)
      .then((res) => {
        const { name, category, sub_category,rotation,quantity,description,fabrication_date,expire_date,sale_value_bs,sale_value_ds,buy_value_bs,buy_value_ds } = res.data;
        setFormValues({id, name, category, sub_category,rotation,quantity,description,fabrication_date,expire_date,sale_value_bs,sale_value_ds,buy_value_bs,buy_value_ds });
      })
      .catch((err) => console.log(err));
  }, []);
    
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
export default EditProduct