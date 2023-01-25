import style from "./RecipeCard.module.css";

const RecipeCard = ({ id, name, summary, image }) => {
  console.log("RECIPE::", id);
  return (
    <div className={style.card}>
      <p>Id:{id}</p>
      <p>Name:{name}</p>
      <p>Resumen:{summary}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
