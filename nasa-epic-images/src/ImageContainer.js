// Contains images

import React from "react";

function ImageContainer({ imageUrl }) {
  return (
    <div className="image-container">
      <img src={imageUrl} alt="" className="image" />
    </div>
  );
}

export default ImageContainer;
