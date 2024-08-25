import React from "react";
import "./Auth.css";
import ImageLoader from "../../Components/ImageLoader/ImageLoader";

function AuthWrapper(props) {
  return (
    <div className="AuthWrapper bckColor border w-2/5 p-8 rounded-lg relative">
      {props.showCloseCta && (
        <div
          style={{
            height: "32px",
            width: "32px",
            borderRadius: "50%",
            background: "#131319",
            right: "16px",
            cursor: "pointer",
          }}
          className="flex items-center justify-center absolute"
          onClick={props.crossIconHandler}>
          <ImageLoader imageUrl="src/assets/Shape.png" height="12" width="12" />
        </div>
      )}
      <div className="flex flex-col items-center pt-4">
        <div className="font-medium text-sm wl-color">{props.header}</div>
        <div className="font-semibold text-lg lg-ac">{props.subHeader}</div>
      </div>
      {props.children}
    </div>
  );
}

export default AuthWrapper;
