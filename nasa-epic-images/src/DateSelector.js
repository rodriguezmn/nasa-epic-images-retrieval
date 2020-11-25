import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { NativeSelect } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function DateSelector({ availableDatesArray, handleDateChange }) {
  const handleOnchange = (e) => {
    // Argument is a date in string format
    handleDateChange(e.target.value);
  };
  return (
    <div>
      {/* <InputLabel htmlFor="select"></InputLabel> */}
      <NativeSelect name="" id="" onChange={handleOnchange}>
        {availableDatesArray.map((date) => {
          return (
            <option key={availableDatesArray.indexOf(date)} value={date}>
              {date}
            </option>
          );
        })}
      </NativeSelect>
    </div>
  );
}

export default DateSelector;
