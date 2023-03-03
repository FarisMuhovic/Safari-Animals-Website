import React from "react";

const Card = props => {
  const {name, cards, chars, facts} = props.data;
  console.log(chars);
  const imgtag = chars.flatMap(item => {
    return props.clickedchar === item.name ? (
      <>
        <img src={`/animals/${item.image}`} alt={name} className="info-image" />
      </>
    ) : (
      ""
    );
  });
  const elements = chars.flatMap(item => {
    return props.clickedchar === item.name ? (
      <>
        <div className="animal-info">
          <h1 className="info-heading">{name}</h1>
          <p className="animal-desc">{item.text}</p>
          <p className="source-link">
            Source:
            <a href={item.source} target="_blank">
              {item.source_name}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
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
      <div className="text-area">{elements}</div>
      <div className="chars">
        {chars.map((item, index) => {
          return (
            <button
              className={
                props.clickedchar === item.name ? "focused-chars-btn" : ""
              }
              onClick={e => {
                console.log(e.target);

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
      <div className="cards">
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
