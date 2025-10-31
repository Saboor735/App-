import React, { useState } from "react";
import PatientForm from "./components/HMS/patientschema";
import DoctorForm from "./components/HMS/doctorSchema";
import HospitalForm from "./components/HMS/hospitalSchema";
import "./App.css"



function HMSPage({ goBack }) {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="hms-container">
      {!selectedForm ? (
        <>
          <h2>Hospital Management System</h2>
          <div className="hms-buttons">
            <button onClick={() => setSelectedForm("patient")}>Patient Form</button>
            <button onClick={() => setSelectedForm("doctor")}>Doctor Form</button>
            <button onClick={() => setSelectedForm("hospital")}>Hospital Form</button>
          </div>
          <button className="back-btn" onClick={goBack}>⬅ Back to Home</button>
        </>
      ) : (
        <div className="form-view">
          {selectedForm === "patient" && <PatientForm />}
          {selectedForm === "doctor" && <DoctorForm />}
          {selectedForm === "hospital" && <HospitalForm />}

          <button className="back-btn" onClick={() => setSelectedForm(null)}>⬅ Back</button>
        </div>
      )}
    </div>
  );
}

export default HMSPage;