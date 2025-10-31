import React, { useState } from "react";

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
    hospital: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data Submitted:", formData);
    // Later: send this data to Express backend with Axios
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👨‍⚕️ Add Doctor</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Specialization:</label>
        <input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Hospital:</label>
        <select
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          required
        >
          <option value="">Select Hospital</option>
          {/* Later we’ll fetch real hospitals from the backend */}
          <option value="hospital1">Hospital 1</option>
          <option value="hospital2">Hospital 2</option>
          <option value="hospital3">Hospital 3</option>
        </select>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
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

export default DoctorForm;
