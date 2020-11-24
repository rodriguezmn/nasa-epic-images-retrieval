import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";

const partialImageUrl = "https://epic.gsfc.nasa.gov/archive/natural/";

function App() {
  const imageUrl = [
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106002712.png",
  ];

  // Make image url
  const makeImageUrl = (year, month, day, imageId) => {
    const url = partialImageUrl + `${year}/${month}/${day}/png/${imageId}.png`;
    return url;
  };

  return (
    <div>
      <Navigation />
      <ImageContainer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
