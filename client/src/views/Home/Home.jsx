import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
// import style from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Home = ({ getRecipes }) => {
  return (
    <>
      <h1> Este es el home </h1>
      <SearchBar getRecipes={getRecipes} />
      <RecipesContainer />
    </>
  );
};

export default Home;
