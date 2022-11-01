import "./search.scss";
import { AppContext } from "../../context";
import { useContext, useMemo, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router-dom";

export default function Search() {
  const { store, setStore } = useContext(AppContext);
  const searchRef = useRef("");
  const myParams = useParams();

  useMemo(() => {
    searchRef.current.value = "";
  }, [myParams]);

  const submitHandler = (e) => {
    e.preventDefault();

    setStore({ ...store, search: searchRef.current.value });
  };

  return (
    <div className="searchContainer">
      <form onSubmit={submitHandler}>
        <input
          ref={searchRef}
          type="text"
          id="search"
          placeholder="Drink Name"
        />
        <button type="submit" onClick={submitHandler} className="searchBtn">
          <CiSearch style={{ border: "none", padding: "0" }} />
        </button>
      </form>
    </div>
  );
}
