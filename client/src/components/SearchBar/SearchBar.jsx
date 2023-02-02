import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [recipeName, setRecipeName] = useState("");
  const allRecipes = useSelector((state) => state.allRecipes);
  const handleInputChange = (ev) => {
    setRecipeName(ev.target.value);
  };
  console.log(allRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allRecipes.length === 0) {
      dispatch(getRecipes("probando"));
    }
  }, [dispatch]);

  const getRecipesHandler = () => {
    dispatch(getRecipes(recipeName));
  };
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Buscar por nombre"
          value={recipeName}
          onChange={handleInputChange}
        />
        <button className={style.searchButton} onClick={getRecipesHandler}>
          BUSCAR
        </button>
      </div>
    </>
  );
}
