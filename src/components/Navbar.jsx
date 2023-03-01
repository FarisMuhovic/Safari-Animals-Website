import React from "react";

const Navbar = props => {
  props.animalData.length > 0
    ? console.log(props.animalData[0].name, "is highlited")
    : "";

  function renderAnimal(e) {
    props.setAnimal(e.target.innerText.toLowerCase());
    props.setRender(true);
  }
  return (
    <nav>
      <h3 className="nav-name">safari animals</h3>
      <ul className="nav-links">
        {props.data.map((item, index) => {
          return (
            <li className="list-item" key={index} onClick={renderAnimal}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
