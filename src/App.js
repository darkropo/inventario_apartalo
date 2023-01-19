// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router,	Route, Routes, Link } from "react-router-dom";

// Import other React Component
import CreateProduct from	"./Components/create-product.component.js";
import EditProduct from	"./Components/edit-product.component";
import ProductList from	"./Components/product-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-product"}
				className="nav-link">
				Inventario apartalo App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-product"}
					className="nav-link">
					Crear Producto
				</Link>
				</Nav>
				<Nav>
				<Link to={"/product-list"}
					className="nav-link">
					Lista de Productos
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
          <Route exact path="/"
            element={<CreateProduct />} />
          <Route path="/create-product"
            element={<CreateProduct/>} />
          <Route path="/edit-product/:id"
            element={<EditProduct />} />
          <Route path="/product-list"
            element={<ProductList />} />
          
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
