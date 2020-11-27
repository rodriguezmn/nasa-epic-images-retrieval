import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";
import Info from "./Info";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const partialImageUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const partialDateDataUlr = "https://epic.gsfc.nasa.gov/api/natural/date/";
const availableDatesUrl = "https://epic.gsfc.nasa.gov/api/natural/available";
function App() {
  const [availableDates, setAvailableDates] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Hooks

  // Fetch available dates when loading page
  useEffect(() => {
    fetchAvailableDates();
  }, []);
  // When avaialable dates changes, make date data url and get date data for the first date
  useEffect(() => {
    if (availableDates.length) {
      console.log("available dates change");
      const url = makeDateDataUrl(availableDates[0]);
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

  // Methods

  // Make image url
  const makeImageUrl = (dateData) => {
    // console.log(typeof dateData[0]["identifier"]);
    // console.log(dateData[0]["identifier"].substring(0, 4));
    const year = dateData[0]["identifier"].substring(0, 4);
    const month = dateData[0]["identifier"].substring(4, 6);
    const day = dateData[0]["identifier"].substring(6, 8);
    const imageId = dateData[0]["image"];
    const url = partialImageUrl + `${year}/${month}/${day}/jpg/${imageId}.jpg`;
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

  // Handle select element on change event
  const handleDateChange = (date) => {
    // Fetch date data
    const url = makeDateDataUrl(date);
    fetchDateData(url);
  };

  // Conditional return
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <Navigation
          handleDateChange={handleDateChange}
          availableDatesArray={availableDates}
          dateData={dateData}
        />
        <ImageContainer imageUrl={imageUrl} />
      </div>
      <div className="information">
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
