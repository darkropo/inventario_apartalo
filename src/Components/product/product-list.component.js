import React, { useState, useEffect } from "react";
import axios from '../axios/axios.js';
import { Table } from "react-bootstrap";
import ProductTableRow from "./ProductTableRow.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("/apartalo/inventario/products/list")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Rotation</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Fabrication Date</th>
            <th>Expiration Date</th>
            <th>Sale value (bs)</th>
            <th>Sale value (ds)</th>
            <th>Buy value (bs)</th>
            <th>Buy value (ds)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default ProductList;