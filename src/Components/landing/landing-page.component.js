import React, { Component, Fragment, useState } from "react";
// Import from react-router-dom
import { BrowserRouter as Router,	Route, Routes, Link } from "react-router-dom";
// Import other React Component
import CreateProduct from	"../product/create-product.component.js";
import ProductList from	"../product/product-list.component.js";

const LandingPage = () =>{      
        return(
            
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col"></div>
                    <div className="col"><Link to="/product-list">List</Link></div>
                    <div className="col"><Link to="/create-product">Create</Link></div>                    
                    <div className="col">

                    </div>
                </div>
            
                <div className="container text-center">
                    <div className="wrapper">
                        <div className="row">
                            <Routes>
                                
                                <Route path="/product-list"
                                    element={<ProductList />} />
                                
                                
                                <Route path="/create-product"
                                    element={<CreateProduct/>} />
                                
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };



export default LandingPage;
