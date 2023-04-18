import { Fragment } from "react";

import foodImage from "../../assets/food.jpg";
import classes from "./Header.modular.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={foodImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
