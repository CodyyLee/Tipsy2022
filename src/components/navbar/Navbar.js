import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { useContext } from "react";
import { AppContext } from "../../context";
import Search from "../search/Search";
import { Link, useParams, NavLink } from "react-router-dom";

export default function Navbar() {
  const { store, setStore } = useContext(AppContext);

  let activeStyle = {
    fontWeight: "700",
    textDecoration: "underline"
  };

  const toggleMenu = () => {
    setStore({ ...store, menu: !store.menu });
  };

  const { type, id } = useParams();

  return (
    <div className="navbar">
      <div className="brandContainer">
        <h1 className="brand">
          <Link to="/">Tipsy</Link>
        </h1>
      </div>

      <div className="linkContainer">
        <ul className="navLinks">
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/Non-Alcoholic"
            >
              Non-Alcoholic
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/vodka"
            >
              Vodka
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/rum"
            >
              Rum
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/tequila"
            >
              Tequila
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/gin"
            >
              Gin
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/whiskey"
            >
              Whiskey
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/bourbon"
            >
              Bourbon
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/scotch"
            >
              Scotch
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="searchNavContainer">
        {type && !id ? <Search /> : null}
      </div>

      <div className="menuBtnContainer">
        <button
          className="menuBtn"
          style={{
            position: store.menu ? "fixed" : "",
            top: ".7rem",
            right: "1.2rem"
          }}
          onClick={toggleMenu}
        >
          {store.menu ? <TfiClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </div>
  );
}
