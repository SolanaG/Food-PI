import style from "./RecipeCard.module.css";

const RecipeCard = ({ name, image, diets }) => {
  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>Name: {name}</p>
      <p>Diets: {diets}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
