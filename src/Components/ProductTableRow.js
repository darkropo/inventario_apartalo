import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductTableRow = (props) => {
const { _id, name, category, sub_category,rotation,quantity,description,fabrication_date,expire_date,sale_value_bs,sale_value_ds,buy_value_bs,buy_value_ds} = props.obj;

const deleteProduct = () => {
	axios
	.delete(
"http://localhost:4000/products/delete-product/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Product successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{category}</td>
	<td>{sub_category}</td>
    <td>{rotation}</td>
    <td>{quantity}</td>
    <td>{description}</td>
    <td>{fabrication_date}</td>
    <td>{expire_date}</td>
    <td>{sale_value_bs}</td>
    <td>{sale_value_ds}</td>
    <td>{buy_value_bs}</td>
    <td>{buy_value_ds}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-product/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteProduct}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ProductTableRow;
