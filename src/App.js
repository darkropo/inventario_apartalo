import React, { Component } from "react";
import { Nav, Navbar, Container, Row, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./Components/landing/landing-page.component.js";
import About from "./Components/landing/about.component";
import Contact from "./Components/landing/contact.component";
import Login from "./Components/landing/login.component.js";
import Home from "./Components/landing/home.component.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false, // added state to show login modal
      isAuthenticated: localStorage.getItem('token') ? true : false, // set initial value
    };
    this.links = {
      link: {
        option: "Inventario apartalo App",
        url: "/create-product",
      },
    };
  }

  handleClose = () => this.setState({ showLoginModal: false }); // close modal

  handleShow = () => this.setState({ showLoginModal: true }); // open modal

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar
              collapseOnSelect
              bg="dark"
              variant="dark"
              expand="lg"
            >
              <Container>
                <Navbar.Brand>
                  <Link to={"/"} className="nav-link">
                    Inventario apartalo App
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="justify-content-end">
                  <Nav>
                      <Link
                        to={"/home"}
                        className="nav-link"
                      >
                        Home
                      </Link>
                    </Nav>
                    {!this.state.isAuthenticated && (
                    <Nav>
                      <Link
                          to={"#"}
                          onClick={this.handleShow} // show modal on click
                          className="nav-link"
                        >
                          Links
                        </Link>
                    </Nav>
                    )}
                    {this.state.isAuthenticated && (
                      <Nav>
                        <Link to={"/links"} className="nav-link">
                          Links
                        </Link>
                      </Nav>
                    )}
                    <Nav>
                      <Link
                        to={"/about"}
                        className="nav-link"
                      >
                        Sobre Nosotros
                      </Link>
                    </Nav>
                    <Nav>
                      <Link
                        to={"/contact"}
                        className="nav-link"
                      >
                        Contactenos
                      </Link>
                    </Nav>
                    <Nav>
                      {this.state.isAuthenticated ? (
                        <Link
                          to={"#"}
                          onClick={() => {
                            localStorage.removeItem("token"); // remove the token from localStorage
                            this.setState({ isAuthenticated: false }); // set isAuthenticated state to false
                          }}
                          className="nav-link"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          to={"#"}
                          onClick={this.handleShow} // show modal on click
                          className="nav-link"
                        >
                          Login
                        </Link>
                      )}
                  </Nav>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <Container>
            <Row>
              <Routes>
                <Route
                  path="*"    element={<LandingPage/>}
                />
                <Route Route path="/home" element={<Home />} />
                <Route Route path="/about" element={About} />
                <Route path="/contact" element={Contact} />
                <Route path="/login" element={Login} />
              </Routes>
            </Row>
          </Container>
        </div>

        {/* Modal to show login form */}
        <Modal
          show={this.state.showLoginModal}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Router>
    );
  }
}

export default App;