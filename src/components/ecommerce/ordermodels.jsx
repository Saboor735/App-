import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    orderPrice: "",
    customer: "",
    product: "",
    quantity: "",
    address: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct data according to backend schema
    const orderData = {
      orderPrice: Number(formData.orderPrice),
      customer: formData.customer, // User ID reference
      orderItems: [
        {
          product: formData.product, // Product ID reference
          quantity: Number(formData.quantity),
        },
      ],
      address: formData.address,
      status: formData.status,
    };

    console.log("Order Submitted:", orderData);
    // Later: connect to backend using Axios POST /api/orders
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📦 Create New Order</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Order Price:</label>
        <input
          type="number"
          name="orderPrice"
          value={formData.orderPrice}
          onChange={handleChange}
          required
        />

        <label>Customer (User ID):</label>
        <input
          type="text"
          name="customer"
          placeholder="Enter User ID"
          value={formData.customer}
          onChange={handleChange}
          required
        />

        <label>Product (Product ID):</label>
        <input
          type="text"
          name="product"
          placeholder="Enter Product ID"
          value={formData.product}
          onChange={handleChange}
          required
        />

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <textarea
          name="address"
          placeholder="Enter shipping address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button type="submit" style={styles.button}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#000000ff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default OrderForm;
