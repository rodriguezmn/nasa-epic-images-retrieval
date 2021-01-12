import React from "react";
import DateSelector from "./DateSelector";
import ImageCycle from "./ImageCycle";

function Navigation({ availableDatesArray, handleDateChange, dateData }) {
  // Earth coordinates
  const earthCoord = [0, 0, 0];

  // Get coordinates of the DSCOVR satellite, moon and sun
  const dscovrCoord = dateData.length
    ? [
        dateData[0]["dscovr_j2000_position"]["x"],
        dateData[0]["dscovr_j2000_position"]["y"],
        dateData[0]["dscovr_j2000_position"]["z"],
      ]
    : 0;
  const moonCoord = dateData.length
    ? [
        dateData[0]["lunar_j2000_position"]["x"],
        dateData[0]["lunar_j2000_position"]["y"],
        dateData[0]["lunar_j2000_position"]["z"],
      ]
    : 0;

  const sunCoord = dateData.length
    ? [
        dateData[0]["sun_j2000_position"]["x"],
        dateData[0]["sun_j2000_position"]["y"],
        dateData[0]["sun_j2000_position"]["z"],
      ]
    : 0;

  // Calculate distance between two objects in xyz space:
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 + (z1 - z2)^2) )

  const calculateDistance = (coordsObject1, coordsObject2) => {
    // Calculate sum of squared differences
    const calculateSumSqrdDifferences = () => {
      var sum = 0;
      for (let index = 0; index < coordsObject1.length; index++) {
        sum += Math.pow(coordsObject1[index] - coordsObject2[index], 2);
      }
      return sum;
    };

    const formatNumberWithCommas = (number) => {
      return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    const sumSqrdDifferences = calculateSumSqrdDifferences();

    // Calculate distance
    const distance = Math.round(Math.sqrt(sumSqrdDifferences));
    const distanceFormatted = formatNumberWithCommas(distance);

    return distanceFormatted;
  };

  // const smallBreakpoint = 320;
  const largeBreakpoint = 1024;
  // Change order of Navigation elements for small screens
  if (window.innerWidth <= largeBreakpoint) {
    return (
      <div className="navigation">
        <div className="select">
          <div className="whitesmoke" style={{ marginTop: "25px" }}>
            Select one
          </div>
          <div className="whitesmoke">of the {availableDatesArray.length}</div>
          <div className="whitesmoke">available days</div>
          <DateSelector
            availableDatesArray={availableDatesArray}
            handleDateChange={handleDateChange}
          />
        </div>
        <ImageCycle />
        <div className="data">
          <h4 className="whitesmoke">Distances {"<------>"}</h4>
          <p>
            Satellite to Earth: {calculateDistance(dscovrCoord, earthCoord)} km
          </p>
          <p>
            Satellite to Moon: {calculateDistance(dscovrCoord, moonCoord)} km
          </p>
          <p>Satellite to Sun: {calculateDistance(dscovrCoord, sunCoord)} km</p>
          <p>Sun to earth: {calculateDistance(earthCoord, sunCoord)} km</p>
        </div>
      </div>
    );
  }

  // Return for large screens
  return (
    <div className="navigation">
      <h2 className="heading">
        Consider again that dot. <br /> That's here. <br />
        That's home. <br />
        That's us.
      </h2>
      <h5 className="quote-author">- Carl Sagan</h5>
      <div className="select">
        <div style={{ marginTop: "25px" }}>Select one</div>
        <div>of the {availableDatesArray.length}</div>
        <div>available days</div>
        <DateSelector
          availableDatesArray={availableDatesArray}
          handleDateChange={handleDateChange}
        />
      </div>
      <ImageCycle />
      <div className="data">
        <h4>Distances {"<------>"}</h4>
        <div>
          Satellite to Earth: {calculateDistance(dscovrCoord, earthCoord)} km
        </div>
        <p>Satellite to Moon: {calculateDistance(dscovrCoord, moonCoord)} km</p>
        <p>Satellite to Sun: {calculateDistance(dscovrCoord, sunCoord)} km</p>
        <p>Sun to earth: {calculateDistance(earthCoord, sunCoord)} km</p>
      </div>
    </div>
  );
}

export default Navigation;
