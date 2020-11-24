import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";

function App() {
  const imageUrlArray = [
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106002712.png",
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106021515.png",
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106040318.png",
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106055120.png",
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106073923.png",
  ];
  return (
    <div>
      <Navigation />
      <ImageContainer imageUrlArray={imageUrlArray} />
    </div>
  );
}

export default App;
