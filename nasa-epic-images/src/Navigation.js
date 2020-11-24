import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation() {
  return (
    <div>
      <div>Number of available dates is: </div>
      <div>Please select a date:</div>
      <DateSelector />
      <ImageCycle />
    </div>
  );
}

export default Navigation;
