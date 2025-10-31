import React, { useState } from "react";
import HMSPage from "./HMSpage";
import EcommercePage from "./EcommercePage";
import "./App.css";

function App() {
  const [page, setPage] = useState("home"); // single state for navigation

  return (
    <div className="app-container">
      {/* HOME PAGE */}
      {page === "home" && (
        <div className="main-page">
          <h1>Welcome! Choose a System</h1>
          <div className="button-container">
            <button className="main-btn" onClick={() => setPage("hms")}>
              HMS System
            </button>
            <button className="main-btn" onClick={() => setPage("ecommerce")}>
              E-Commerce System
            </button>
          </div>
        </div>
      )}

      {/* HMS PAGE */}
      {page === "hms" && <HMSPage goBack={() => setPage("home")} />}

      {/* ECOMMERCE PAGE */}
      {page === "ecommerce" && <EcommercePage goBack={() => setPage("home")} />}
    </div>
  );
}

export default App;
