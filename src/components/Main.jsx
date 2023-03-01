import React from "react";
import Card from "./Card";
const Main = props => {
  function renderAnimal(e) {
    props.setAnimal(e.target.innerText.toLowerCase());
    props.setRender(true);
  }

  return (
    <div className="main-content">
      {!props.render && (
        <div className="home-section">
          <img src="./images/africa-continent.png" alt="africa continent" />
          {props.data.map((item, index) => {
            return (
              <button
                className={`icon ${item.name.toLowerCase()}`}
                key={index}
                onClick={renderAnimal}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
      {props.animalData.length > 0 && <Card data={props.animalData} />}
    </div>
  );
};

export default Main;
