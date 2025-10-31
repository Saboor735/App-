import React, { useState } from "react";
import UserForm from "./components/ecommerce/userform";
import CategoryForm from "./components/ecommerce/category";
import ProductForm from "./components/ecommerce/productmodels";
import OrderForm from "./components/ecommerce/ordermodels";
import "./App.css";

function EcommercePage() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="ecommerce-container">
      <h1 className="title">E-Commerce Management System</h1>

      <div className="button-group">
        <button onClick={() => setSelectedForm("user")}>User Form</button>
        <button onClick={() => setSelectedForm("category")}>Category Form</button>
        <button onClick={() => setSelectedForm("product")}>Product Form</button>
        <button onClick={() => setSelectedForm("order")}>Order Form</button>
      </div>

      <div className="form-display">
        {selectedForm === "user" && (
          <div className="form-card">
            <h2>User Form</h2>
            <UserForm />
          </div>
        )}
        {selectedForm === "category" && (
          <div className="form-card">
            <h2>Category Form</h2>
            <CategoryForm />
          </div>
        )}
        {selectedForm === "product" && (
          <div className="form-card">
            <h2>Product Form</h2>
            <ProductForm />
          </div>
        )}
        {selectedForm === "order" && (
          <div className="form-card">
            <h2>Order Form</h2>
            <OrderForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default EcommercePage;
