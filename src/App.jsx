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
  const [clickedchar, setclickedchar] = React.useState("overview");

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
      />
      <Main
        data={data}
        animalData={animalData}
        setRender={setRender}
        render={render}
        animal={animal}
        setAnimal={setAnimal}
        animalHovered={animalHovered}
        setclickedchar={setclickedchar}
        clickedchar={clickedchar}
      />
    </div>
  );
}
export default App;
