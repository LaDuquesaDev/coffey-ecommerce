import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bienvenido a Coffey Ecommerce</h1>
      <p>¡Comienza a desarrollar tu tienda online con React y TypeScript!</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("¡Bienvenido a Coffey Ecommerce!")}
      >
        Haz clic aquí
      </button>
    </div>
  );
};

export default App;
