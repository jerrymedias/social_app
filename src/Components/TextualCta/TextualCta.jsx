import React from "react";
import "./TextualCta.css";

function TextualCta({ cta, onClick }) {
  return (
    <div
      className="font-medium text-xs textual text-color"
      dangerouslySetInnerHTML={{ __html: cta.label }}
      onClick={onClick}></div>
  );
}

export default TextualCta;
