import React, { useState } from "react";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Data Submitted:", { name: categoryName.toLowerCase() });
    // Later, connect this to your backend using Axios (POST /api/categories)
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> Add New Category</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Category Name:</label>
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />

        <button type="submit" style={styles.button}>
          Add Category
        </button>
      </form>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "400px",
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
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default CategoryForm;
