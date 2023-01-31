import RecipesContainer from "../../components/RecipesContainer/RecipesContainer";
import FilterSort from "../../components/FilterSort/FilterSort";
import SearchBar from "../../components/SearchBar/SearchBar";
import logoImg from "../../resources/img/cooking.png";
import style from "./Home.module.css";

const Home = ({ getRecipes }) => {
  return (
    <div className={style.homeBody}>
      <div>
        <img className={style.image} src={logoImg} alt="cargando imagen"></img>
      </div>
      <SearchBar getRecipes={getRecipes} />
      <FilterSort />
      <RecipesContainer />
    </div>
  );
};

export default Home;
