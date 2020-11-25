import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const partialImageUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const partialDateDataUlr = "https://epic.gsfc.nasa.gov/api/natural/date/";
const availableDatesUrl = "https://epic.gsfc.nasa.gov/api/natural/available";
// epic_1b_20201106021515;
// oct 10:
// epic_1b_20201106002712;
function App() {
  // const imageUrl = [
  //   "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106002712.png",
  // ];
  const [availableDates, setAvailableDates] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Hooks
  // Fetch available dates when loading page
  useEffect(() => {
    fetchAvailableDates();
  }, []);
  // When avaialable dates changes, make date data url and get date data for most recent date
  useEffect(() => {
    if (availableDates.length) {
      console.log("available dates change");
      const url = makeDateDataUrl(availableDates[availableDates.length - 1]);
      fetchDateData(url);
    }
  }, [availableDates]);
  // When dateData changes, make image url and set image url
  useEffect(() => {
    if (dateData.length) {
      console.log("date data", dateData);
      const url = makeImageUrl(dateData);
      setImageUrl(url);
    }
  }, [dateData]);

  // Make image url
  const makeImageUrl = (dateData) => {
    // console.log(typeof dateData[0]["identifier"]);
    // console.log(dateData[0]["identifier"].substring(0, 4));
    const year = dateData[0]["identifier"].substring(0, 4);
    const month = dateData[0]["identifier"].substring(4, 6);
    const day = dateData[0]["identifier"].substring(6, 8);
    const imageId = dateData[0]["image"];
    const url = partialImageUrl + `${year}/${month}/${day}/png/${imageId}.png`;
    return url;
  };

  // Fetch available dates
  const fetchAvailableDates = async () => {
    const response = await fetch(availableDatesUrl);
    const dates = await response.json();
    console.log("available dates", dates);
    setAvailableDates(dates);
  };

  // Fetch date data
  const fetchDateData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setDateData(data);
  };

  // Make date data url
  const makeDateDataUrl = (date) => {
    const url = partialDateDataUlr + date;
    return url;
  };

  // Get date data
  const getDateData = (date) => {
    // Make date date url
    const url = makeDateDataUrl(date);
    // Fetch Data
    const data = fetchDateData(url);
    // Set date data
  };

  const handleDateChange = (date) => {
    // Fetch date data
    const url = makeDateDataUrl(date);
    const dateData = fetchDateData(url);
    // Set date data

    // Using date data, make image url
    // Set image url
  };

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Navigation
        handleDateChange={handleDateChange}
        availableDatesArray={availableDates}
      />
      <ImageContainer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
