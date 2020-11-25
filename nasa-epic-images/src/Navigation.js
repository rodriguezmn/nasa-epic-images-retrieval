import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation({ availableDatesArray, handleDateChange }) {
  return (
    <div className="navigation">
      <div className="header">
        <h3 style={{ marginBottom: "0" }}>
          Look again at that dot. <br /> That's here. <br />
          That's home. <br />
          That's us.
        </h3>
        <h5 style={{ margin: "0" }}>--Carl Sagan</h5>
        {/* <h3>Look again at that dot.</h3>
        <h3>That's here.</h3>
        <h3>That's home.</h3>
        <h3> That's us.</h3> <br />
        <h3>-Carl Sagan</h3> */}
      </div>
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
