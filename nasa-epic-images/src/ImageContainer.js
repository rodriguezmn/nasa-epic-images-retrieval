// Contains images

import React from "react";

function ImageContainer({ imageUrlArray }) {
  return (
    <div>
      {imageUrlArray.map((imageUrl) => {
        return (
          <img key={imageUrlArray.indexOf(imageUrl)} src={imageUrl} alt="" />
        );
      })}
    </div>
  );
}

export default ImageContainer;
