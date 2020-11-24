import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";

const partialImageUrl = "https://epic.gsfc.nasa.gov/archive/natural/";
const partialDateDataUlr = "https://epic.gsfc.nasa.gov/api/natural/date/";
// epic_1b_20201106021515;
// oct 10:
// epic_1b_20201106002712;
function App() {
  const imageUrl = [
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106002712.png",
  ];

  // Make image url
  const makeImageUrl = (year, month, day, imageId) => {
    const url = partialImageUrl + `${year}/${month}/${day}/png/${imageId}.png`;
    return url;
  };

  // Fetch date data
  const fetchDateData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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
    // Set date data
    // Using date data, make image url
    // Set image url
  };

  return (
    <div>
      <Navigation handleDateChange={handleDateChange} />
      <ImageContainer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
