import React from "react";

const Navbar = props => {
  function renderAnimal(e) {
    setclickHam(false);
    props.setShowFacts(false);
    props.sethomeAnimation(true);
    props.setotherAnimalAnimations(true);
    setTimeout(
      () => {
        props.setAnimal(e.target.innerText.toLowerCase());
        props.setRender(true);
        props.setclickedchar("overview");
        props.setcancel(false);
        props.setotherAnimalAnimations(false);
      },
      props.animal === "" ? 1120 : props.animation_duration
    );
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
  function homePageClick() {
    props.setcancel(true);
    props.setotherAnimalAnimations(true);
    props.sethomeAnimation(false);
  }
  const [timeoutId, setTimeoutId] = React.useState([]);
  React.useEffect(() => {
    if (props.cancel) {
      props.setAnimations(true);
      const id = setTimeout(() => {
        props.setAnimal("");
        props.setRender(false);
        props.setclickedchar("overview");
        props.setAnimations(false);
      }, props.animation_duration);
      setTimeoutId(prevval => {
        return [...prevval, id];
      });
      timeoutId;
    } else {
      timeoutId.forEach(id => {
        clearTimeout(id);
      });
      props.setAnimations(false);
      setTimeoutId([]);
    }
  }, [props.cancel, props.animal, props]);
  const [clickHam, setclickHam] = React.useState(false);
  function hamburger() {
    setclickHam(prevval => !prevval);
  }
  return (
    <nav>
      <h3 className="nav-name" onClick={homePageClick}>
        safari animals
      </h3>
      <button className="hamburger-btn" onClick={hamburger}>
        {clickHam ? "✖" : "III"}
      </button>
      <ul className={`nav-links ${clickHam ? "nav-hamburger" : ""}`}>
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
