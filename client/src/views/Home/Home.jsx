import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import FilterSort from "../../components/FilterSort/FilterSort";
import SearchBar from "../../components/SearchBar/SearchBar";
// import style from "./Home.module.css";

const Home = ({ getRecipes }) => {
  return (
    <>
      <h1> Este es el home </h1>
      <SearchBar getRecipes={getRecipes} />
      <FilterSort />
      <RecipesContainer />
    </>
  );
};

export default Home;
