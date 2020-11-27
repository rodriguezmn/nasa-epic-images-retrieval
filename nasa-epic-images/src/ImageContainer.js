// Contains images

import React from "react";

function ImageContainer({ imageUrl }) {
  return (
    <div className="imageContainer">
      <img src={imageUrl} alt="" className="mainImage" />
    </div>
  );
}

export default ImageContainer;
