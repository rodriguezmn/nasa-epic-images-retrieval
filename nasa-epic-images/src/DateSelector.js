import React from "react";

import Select from "@material-ui/core/Select";

function DateSelector({ availableDatesArray, handleDateChange }) {
  const handleOnchange = (e) => {
    // Argument is a date in string format
    handleDateChange(e.target.value);
  };
  return (
    <div>
      <Select name="" id="" onChange={handleOnchange} className="custom-select">
        {availableDatesArray.map((date) => {
          return (
            <option key={availableDatesArray.indexOf(date)} value={date}>
              {date}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

export default DateSelector;
