import Navbar from "./components/navbar/Navbar";
import "./styles.css";
import { useState, useEffect } from "react";
import { AppContext } from "./context";
import Menu from "./components/menu/Menu";
import { Outlet, useParams } from "react-router-dom";

export default function App() {
  const [store, setStore] = useState({
    menu: false,
    search: "",
    type: ""
  });

  const urlParams = useParams();

  useEffect(() => {
    setStore({ ...store, search: "" });
  }, [urlParams]);

  return (
    <AppContext.Provider value={{ store, setStore }}>
      <div className="App">
        <Navbar />
        <Menu />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
