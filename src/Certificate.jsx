import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react"; // Lucide React for icons

function Certificates() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", fontSize: "24px", color: "#3b82f6" }}>
      <motion.div
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ display: "inline-block", marginBottom: "5px" }}
      >
        <Eye size={50} color="#3b82f6" />
      </motion.div>

      <h2 style={{ fontWeight: "bold", color: "#ff9800" }}>Unlock My Achievements</h2>
      <p style={{ fontSize: "20px", color: "#3b82f6", marginBottom: "10px" }}>
        Explore my certifications that prove my skills and expertise.
      </p>

      {/* Centering the button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          className="certificateButton"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "5px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            border: "none",
          }}
        >
          View Certificates
        </button>
      </div>
    </div>
  );
}

export default Certificates;
