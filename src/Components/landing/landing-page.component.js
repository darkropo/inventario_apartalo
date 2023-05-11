import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import CreateProduct from	"../product/create-product.component.js";
import ProductList from	"../product/product-list.component.js";
import ImageUpload from "../utils/image-upload.component.js";
import EditProduct from "../product/edit-product.component.js";
import User from "../user/create-user.component.js";
import Role from "../user/create-role.component.js";

const LandingPage = () =>{    
        return(
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col"><Link to="/product-list">List</Link></div>
                    <div className="col"><Link to="/create-product">Create</Link></div>                    
                    <div className="col"><Link to="/create-user">Create User</Link></div>
                    <div className="col"><Link to="/create-role">Create Role</Link></div>
                </div>
            
                <div className="container text-center">
                    <div className="wrapper">
                        <div className="row">
                            <Routes>
                                
                                <Route path="/product-list"
                                    element={<ProductList />} />
                                
                                
                                <Route path="/create-product"
                                    element={<CreateProduct/>} />

                                <Route path="/image"
                                    element={<ImageUpload />} /> 

                                <Route path="/edit-product/:id"
                                    element={<EditProduct />} />  
                                      
                                <Route path="/create-user"
                                    element={<User />} /> 
                                    
                                <Route path="/create-role"
                                    element={<Role />}/>                         
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        );
    };



export default LandingPage;
