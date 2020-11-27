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

    const sumSqrdDifferences = calculateSumSqrdDifferences();

    // Calculate distance
    const distance = Math.sqrt(sumSqrdDifferences);

    return distance;
  };

  return (
    <div className="navigation">
      <div className="header">
        <h3 style={{ marginBottom: "0" }}>
          Look again at that dot. <br /> That's here. <br />
          That's home. <br />
          That's us.
        </h3>
        <h5 style={{ margin: "0" }}>--Carl Sagan</h5>
      </div>
      <div>{availableDatesArray.length} available days</div>
      <div>Select a new date</div>
      <DateSelector
        availableDatesArray={availableDatesArray}
        handleDateChange={handleDateChange}
      />
      <ImageCycle />
      <div>
        Satelite to Earth: {calculateDistance(dscovrCoord, earthCoord)} km
      </div>
      <div>
        Satelite to Moon: {calculateDistance(dscovrCoord, moonCoord)} km
      </div>
      <div>Satelite to Sun: {calculateDistance(dscovrCoord, sunCoord)} km</div>
      <div>Sun to earth: {calculateDistance(earthCoord, sunCoord)} km</div>
    </div>
  );
}

export default Navigation;
