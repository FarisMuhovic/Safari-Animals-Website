import React from "react";
import Card from "./Card";

const Main = props => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  function renderAnimal(e) {
    props.sethomeAnimation(true);
    props.setotherAnimalAnimations(true);
    props.setShowFacts(false);
    setTimeout(() => {
      props.setAnimal(e.target.alt.toLowerCase());
      props.setRender(true);
      props.setclickedchar("overview");
      props.setcancel(false);
      props.setotherAnimalAnimations(false);
    }, 1300);
  }

  return (
    <div className="main-content">
      {!props.render && (
        <div
          className={`home-section smooth-image image-${
            imageLoaded ? "visible" : "hidden"
          } ${props.homeAnimation ? "reverse-load-home" : ""}`}
          onLoad={() => setImageLoaded(true)}
        >
          <img
            src="./images/africa-continent.png"
            alt="africa continent"
            className={`smooth-image image-${
              imageLoaded ? "visible" : "hidden"
            }`}
          />
          {props.data.map((item, index) => {
            return (
              <button
                className={`icon ${item.name.toLowerCase()} ${
                  props.animalHovered === item.name.toLowerCase()
                    ? "hovered-animal"
                    : ""
                }`}
                key={index}
                onClick={renderAnimal}
              >
                <img src={`./icons/${item.icon}`} alt={item.name} />
                <i className="fa-solid fa-location-pin" />
              </button>
            );
          })}
        </div>
      )}
      {props.animalData.length > 0 && (
        <Card
          data={props.animalData[0]}
          setclickedchar={props.setclickedchar}
          clickedchar={props.clickedchar}
          animations={props.animations}
          key={props.animalData[0].id}
          otherAnimalAnimations={props.otherAnimalAnimations}
          setotherAnimalAnimations={props.setotherAnimalAnimations}
          showFacts={props.showFacts}
          setShowFacts={props.setShowFacts}
        />
      )}
    </div>
  );
};

export default Main;
