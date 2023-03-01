import data from "./data";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React from "react";

function App() {
  const [render, setRender] = React.useState(false);
  const [animalData, setAnimalData] = React.useState([]);
  const [animal, setAnimal] = React.useState("");
  React.useEffect(() => {
    setAnimalData(() => {
      return data.flatMap(item => {
        return item.name.toLowerCase() === animal ? item : [];
      });
    });
  }, [animal]);
  return (
    <div className="App">
      <Navbar
        data={data}
        animalData={animalData}
        setRender={setRender}
        render={render}
        animal={animal}
        setAnimal={setAnimal}
      />
      <Main
        data={data}
        animalData={animalData}
        setRender={setRender}
        render={render}
        animal={animal}
        setAnimal={setAnimal}
      />
    </div>
  );
}
export default App;
