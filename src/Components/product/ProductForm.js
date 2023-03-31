import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button, Stack } from "react-bootstrap";
import ShowImage from "../utils/image.component";




const ProductForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    sub_category: Yup.string().required("Required"),
    rotation: Yup.number().integer().required("Required") //1 to 5 number higher mayor rotation
        .min(1,"Must be between 1 and 5.")
        .max(5,"Must be between 1 and 5."),
    quantity: Yup.number().integer("Must be a number.")
        .positive("Invalid roll number")
        .required("Required"),
    description: Yup.string()
      .required("Required"),
    fabrication_date: Yup.date(),
    expire_date: Yup.date(),
    sale_value_bs: Yup.number()
        .positive("Invalid roll number"),
    sale_value_ds: Yup.number()
        .positive("Invalid roll number"),
    buy_value_bs: Yup.number()
        .positive("Invalid roll number"),
    buy_value_ds: Yup.number()
        .positive("Invalid roll number"),
  });

  console.log("props::::::::::::::::::::::::::::::::::", props);
  let button = "";
  if (props.created) {
    const data = {
      productId: props.productId
    };
    button = <Link to="/image" state={data}><Button variant="primary" size="lg" block="block" type="button" >Image Load</Button>
              </Link>;
  } else {
    button = <Button variant="primary" size="lg" block="block" type="submit">{props.children}</Button>;
  }
    let show = "";
    if (!props.initialValues.id) {
      console.log("Pid Empty.");       
    } else {
      show = <ShowImage productId={props.initialValues.id}/> 
    }  
  return(
   <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
        <Stack gap={2} className="mx-auto">
          <FormGroup>
            <label htmlFor="name">Nombre Producto</label>
            <Field name="name" type="text" 
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="category">Categoria</label>
            <Field name="category" type="text" 
                className="form-control" />
            <ErrorMessage
              name="category"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="sub_category">Sub Categoria</label>
            <Field name="sub_category" type="text" 
                className="form-control" />
            <ErrorMessage
              name="sub_category"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="rotation">Rotacion</label>
            <Field name="rotation" type="number" 
                className="form-control" />
            <ErrorMessage
              name="rotation"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="quantity">Cantidad</label>
            <Field name="quantity" type="number" 
                className="form-control" />
            <ErrorMessage
              name="quantity"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="description">Descripcion</label>
            <Field name="description" type="text" 
                className="form-control" />
            <ErrorMessage
              name="description"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="fabrication_date">Fecha de Fabricacion</label>
            <Field name="fabrication_date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="fabrication_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="expire_date">Fecha de Vencimiento</label>
            <Field name="expire_date" type="date" 
                className="form-control" />
            <ErrorMessage
              name="expire_date"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="sale_value_bs">Precio de Venta (BS)</label>
            <Field name="sale_value_bs" type="number" 
                className="form-control" />
            <ErrorMessage
              name="sale_value_bs"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="sale_value_ds">Precio de Venta (DS)</label>
            <Field name="sale_value_ds" type="number" 
                className="form-control" />
            <ErrorMessage
              name="sale_value_ds"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="buy_value_bs">Precio de Compra (BS)</label>
            <Field name="buy_value_bs" type="number" 
                className="form-control" />
            <ErrorMessage
              name="buy_value_bs"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="buy_value_ds">Precio de Compra (DS)</label>
            <Field name="buy_value_ds" type="number" 
                className="form-control" />
            <ErrorMessage
              name="buy_value_ds"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="imagen">Imagenes del producto</label>
        
              {show?show:undefined}
            
          </FormGroup>
          {button}
          <Button variant="secondary" size="lg" block="block" href="/">Cancel</Button>
          </Stack>
        </Form>
        
      </Formik>
    </div>
  );
};
  
export default ProductForm;