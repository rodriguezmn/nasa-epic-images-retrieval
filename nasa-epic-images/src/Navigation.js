import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation() {
  const availableDatesArray = [
    "2015-06-13",
    "2015-06-16",
    "2015-06-17",
    "2015-06-18",
    "2015-06-20",
    "2015-06-21",
  ];
  return (
    <div>
      <div>Number of available dates is: </div>
      <div>Please select a date:</div>
      <DateSelector availableDatesArray={availableDatesArray} />
      <ImageCycle />
    </div>
  );
}

export default Navigation;
