import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../img/shopping-cartw.png";

export const NavBar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/">
        <span class="navbar-brand" style={{color:"white"}}>HOME</span>
      </Link>
      <button
        alt="##"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/random">
              <span class="navbar-brand" style={{color:"white"}}>Random Beer</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/beers">
              <span class="navbar-brand" style={{color:"white"}}>Search Beer</span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/cart" className="nav-link">
              <img src={cart} style={{ width: "1.5rem", backgroundColor: "black"}}></img>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span className="visually-hidden"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
