import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [recipeName, setRecipeName] = useState("");
  const handleInputChange = (ev) => {
    setRecipeName(ev.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Buscar por nombre"
          value={recipeName}
          onChange={handleInputChange}
        />
        <button
          className={style.searchButton}
          onClick={() => {
            props.getRecipes(recipeName);
          }}
        >
          BUSCAR
        </button>
      </div>
    </>
  );
}
