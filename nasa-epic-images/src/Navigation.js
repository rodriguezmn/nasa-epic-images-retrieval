import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation({ availableDatesArray, handleDateChange }) {
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
