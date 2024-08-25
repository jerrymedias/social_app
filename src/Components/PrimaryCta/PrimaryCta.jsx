import React from "react";
import "./PrimaryCta.css";

function PrimaryCta({ label, onClick }) {
  return (
    <button className="font-medium text-base primary-cta" onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryCta;
