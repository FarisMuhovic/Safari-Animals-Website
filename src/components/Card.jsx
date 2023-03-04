import React from "react";

const Card = props => {
  const {name, cards, chars, facts} = props.data;
  const imgtag = chars.flatMap((item, index) => {
    return props.clickedchar === item.name ? (
      <div className="animal-image-container">
        {props.showFacts && (
          <div className="fun-fact-text ">
            <ul>
              {facts.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        )}
        <img
          src={`/animals/${item.image}`}
          key={index}
          alt={name}
          className={`info-image ${
            props.animations ? "reverse-animations" : ""
          } ${
            props.otherAnimalAnimations
              ? "reverse-animations-other-animals"
              : ""
          }`}
        />
      </div>
    ) : (
      ""
    );
  });
  const [changeChar, setChangeChar] = React.useState(false);
  const elements = chars.flatMap((item, index) => {
    return props.clickedchar === item.name ? (
      <>
        <div
          className={`animal-info ${
            props.otherAnimalAnimations ? "animal-info-out" : ""
          }`}
          key={index}
        >
          <h1 className="info-heading">{name}</h1>
          <p
            className={`animal-desc ${
              changeChar ? "animation-animal-description" : ""
            }`}
          >
            {item.text}
          </p>
          <p className="source-link">
            <a href={item.source} target="_blank">
              Source: {item.source_name}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <button
              className="fun-fact-btn"
              onClick={() => {
                props.setShowFacts(prevval => !prevval);
              }}
            >
              Fun Facts
            </button>
          </p>
        </div>
      </>
    ) : (
      ""
    );
  });
  return (
    <div className="info-section">
      {imgtag}
      <div className={`text-area `}>
        {elements}
        <div
          className={`chars ${
            props.otherAnimalAnimations ? "animal-info-out" : ""
          }`}
        >
          {chars.map((item, index) => {
            return (
              <button
                key={index}
                className={`
                  ${
                    props.clickedchar === item.name ? "focused-chars-btn" : ""
                  } `}
                onClick={e => {
                  props.setShowFacts(false);
                  setChangeChar(true);
                  props.setclickedchar(
                    e.target.innerText.toLowerCase().substring(3)
                  );
                }}
              >
                {`0${index + 1} `}

                {item.name}
              </button>
            );
          })}
        </div>
      </div>
      <div
        className={`cards ${
          props.animations ? "reverse-animation-cards" : ""
        } ${props.otherAnimalAnimations ? "reverse-animation-cards" : ""}`}
      >
        <div className="class">
          <p>Class</p>
          <h4>{cards.class}</h4>
        </div>
        <div className="lifespan">
          <p>lifespan</p>
          <h4>{cards.lifespan}</h4>
        </div>
        <div className="name">
          <p>scientific name</p>
          <h4>{cards.scientific_name}</h4>
        </div>
        <div className="weight">
          <p>weight</p>
          <h4>{cards.weight}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
