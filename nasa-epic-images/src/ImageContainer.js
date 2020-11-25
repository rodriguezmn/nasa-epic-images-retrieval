// Contains images

import React from "react";

function ImageContainer({ imageUrl }) {
  return (
    <div className="imageContainer">
      <div className="childImageContainer">
        <img src={imageUrl} alt="" className="mainImage" />
      </div>
    </div>
  );
}

export default ImageContainer;
