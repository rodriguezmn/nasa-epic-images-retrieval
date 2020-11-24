import ImageContainer from "./ImageContainer";
import Navigation from "./Navigation";

function App() {
  const imageUrl = [
    "https://epic.gsfc.nasa.gov/archive/natural/2020/11/06/png/epic_1b_20201106002712.png",
  ];
  return (
    <div>
      <Navigation />
      <ImageContainer imageUrl={imageUrl} />
    </div>
  );
}

export default App;
