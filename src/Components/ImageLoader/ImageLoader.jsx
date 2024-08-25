import React from "react";

function ImageLoader(props) {
  return (
    <img
      src={props.imageUrl}
      alt={props.altText}
      height={props.height}
      width={props.width}></img>
  );
}

export default ImageLoader;
