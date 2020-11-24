import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation({ handleDateChange }) {
  const availableDatesArray = [
    "2020-11-06",
    "2015-06-16",
    "2020-10-10",
    "2015-06-18",
    "2015-06-20",
    "2015-06-21",
  ];
  return (
    <div>
      <div>Number of available dates is: </div>
      <div>Please select a date:</div>
      <DateSelector
        availableDatesArray={availableDatesArray}
        handleDateChange={handleDateChange}
      />
      <ImageCycle />
    </div>
  );
}

export default Navigation;
