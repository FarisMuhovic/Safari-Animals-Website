import data from "./data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

function App() {
  const [render, setRender] = React.useState(false);
  const [animalData, setAnimalData] = React.useState([]);
  const [animal, setAnimal] = React.useState("");
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--selected-color",
      animalData.length > 0 ? animalData[0].color : ""
    );
  }, [animalData]);
  const [animalHovered, setAnimalHover] = React.useState("");
  React.useEffect(() => {
    setAnimalData(() => {
      return data.flatMap(item => {
        return item.name.toLowerCase() === animal ? item : [];
      });
    });
  }, [animal]);
  const [showFacts, setShowFacts] = React.useState(false);

  const [clickedchar, setclickedchar] = React.useState("overview");

  // * Animations
  const animation_duration = 1350 - 10;
  const [animations, setAnimations] = React.useState(false);
  const [cancel, setcancel] = React.useState(false);
  const [homeAnimation, sethomeAnimation] = React.useState(false);
  const [otherAnimalAnimations, setotherAnimalAnimations] =
    React.useState(false);
  return (
    <div className="App">
      <Navbar
        data={data}
        animalData={animalData}
        setRender={setRender}
        render={render}
        animal={animal}
        setAnimal={setAnimal}
        setAnimalHover={setAnimalHover}
        setclickedchar={setclickedchar}
        setAnimations={setAnimations}
        cancel={cancel}
        setcancel={setcancel}
        sethomeAnimation={sethomeAnimation}
        otherAnimalAnimations={otherAnimalAnimations}
        setotherAnimalAnimations={setotherAnimalAnimations}
        animation_duration={animation_duration}
        showFacts={showFacts}
        setShowFacts={setShowFacts}
      />
      <Main
        data={data}
        animalData={animalData}
        setRender={setRender}
        render={render}
        animal={animal}
        setAnimal={setAnimal}
        setAnimations={setAnimations}
        animalHovered={animalHovered}
        setclickedchar={setclickedchar}
        clickedchar={clickedchar}
        animations={animations}
        setcancel={setcancel}
        cancel={cancel}
        sethomeAnimation={sethomeAnimation}
        homeAnimation={homeAnimation}
        otherAnimalAnimations={otherAnimalAnimations}
        setotherAnimalAnimations={setotherAnimalAnimations}
        animation_duration={animation_duration}
        showFacts={showFacts}
        setShowFacts={setShowFacts}
      />
    </div>
  );
}
export default App;
