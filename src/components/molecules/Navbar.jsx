import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { NavbarStyle } from "./Molecule.style";
import { useSelector } from "react-redux";
import Form from "./Form";

const HeaderBottom = () => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  return (
    <>
      <NavbarStyle>
        <nav className="navigation">
          <Link to="/" className="brand-name">
            <img className="logo" src="" alt="" />
          </Link>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
            <MdOutlineSegment className="nav-icon" />
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>

              
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/input-form">Input Form</Link>
              </li>
              {/* <li>Logged In: {user.username}</li> */}
            </ul>
          </div>
        </nav>
      </NavbarStyle>
      {/* <Form /> */}
    </>
  );
};

export default HeaderBottom;
