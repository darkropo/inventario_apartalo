// Import React
import React, {Component, Fragment} from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router,	Route, Routes, Link } from "react-router-dom";

// Import other React Component
import LandingPage from "./Components/landing/landing-page.component.js";
import About from "./Components/landing/about.component";
import Contact from "./Components/landing/contact.component";



class App extends Component{
	constructor(){
		super();
		this.state ={

		}
		this.links = {
			link : {
				option : "Inventario apartalo App",
				url : "/create-product"
			}
		}
	}
	render(){
		return(
			<Router>
				<div className="App">
					<header className="App-header">
					<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
						<Container>
						<Navbar.Brand>
							<Link to={"/"}
							className="nav-link">
							Inventario apartalo App
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="justify-content-end">
							<Nav>
							<Link to={"/"}
								className="nav-link">
								Home
							</Link>
						</Nav>
						<Nav>
						<Link to={"/about"}
							className="nav-link">
							Sobre Nosotros
						</Link>
						</Nav>
						<Nav>
							<Link to={"/contact"}
								className="nav-link">
								Contactenos
							</Link>
							</Nav>
						</Nav>
						</Navbar.Collapse>
						
						</Container>
					</Navbar>
					</header>

					<Container>
					<Row>
						<Routes>
							<Route path="*"  element={ <LandingPage links={ this.links }/>} />
							<Route path="/about" element= {About} />
							<Route path="/contact" element={Contact} />
						</Routes>	
					</Row>
					</Container>
				</div>
				</Router>
			);
	};
};

export default App;
