import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    productImage: "",
    price: "",
    stock: "",
    category: "",
    owner: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    };

    console.log("Product Data Submitted:", productData);
    // Later: use Axios to POST this to your backend (e.g., /api/products)
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Product</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Enter product description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Product Image URL:</label>
        <input
          type="text"
          name="productImage"
          placeholder="Enter image URL or file path"
          value={formData.productImage}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          placeholder="Enter stock quantity"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <label>Category (Category ID):</label>
        <input
          type="text"
          name="category"
          placeholder="Enter category ID"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>Owner (User ID):</label>
        <input
          type="text"
          name="owner"
          placeholder="Enter owner user ID"
          value={formData.owner}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#000000ff"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductForm;
