import React from "react";

const Navbar = props => {
  function renderAnimal(e) {
    props.setAnimal(e.target.innerText.toLowerCase());
    props.setRender(true);
    props.setclickedchar("overview");
  }
  function setColor(e) {
    props.setAnimalHover(e.target.innerText.toLowerCase());
    props.data.forEach(item => {
      item.name.toLowerCase() === e.target.innerText.toLowerCase()
        ? document.documentElement.style.setProperty(
            "--animal-color",
            item.color
          )
        : "";
    });
  }
  return (
    <nav>
      <h3
        className="nav-name"
        onClick={() => {
          props.setAnimal("");
          props.setRender(false);
          props.setclickedchar("overview");
        }}
      >
        safari animals
      </h3>
      <ul className="nav-links">
        {props.data.map((item, index) => {
          return (
            <li
              className={` ${
                props.animal.toLowerCase() === item.name.toLowerCase()
                  ? "selected-link"
                  : "list-item"
              }`}
              key={index}
              onClick={renderAnimal}
              onMouseEnter={setColor}
              onMouseLeave={() => {
                props.setAnimalHover("");
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
