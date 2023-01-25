import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  // let inputValue = "";

  return (
    <>
      <h1> Este es el home </h1>
      <div>
        {/* <input placeholder="Ingresa el nombre" value={inputValue}></input> */}
        {/* <button onClick={getRecipes}>BUSCAR</button> */}
      </div>
      <RecipesContainer />
    </>
  );
};

export default Home;
