import "./menu.scss";
import { AppContext } from "../../context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { store, setStore } = useContext(AppContext);

  const closeMenu = () => {
    setStore({ ...store, menu: false, search: "" });
  };

  let activeStyle = {
    fontWeight: "700"
  };

  return (
    <div
      className="menuContainer"
      style={{ display: store.menu ? "inline" : "none" }}
    >
      <div className="menu">
        <ul className="links">
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/vodka"
            >
              Vodka
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/rum"
            >
              Rum
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/tequila"
            >
              Tequila
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/gin"
            >
              Gin
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/whiskey"
            >
              Whiskey
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/bourbon"
            >
              Bourbon
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
              to="/scotch"
            >
              Scotch
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
