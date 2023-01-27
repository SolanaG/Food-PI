import style from "./RecipeCard.module.css";

const RecipeCard = ({ name, image, diets, healthScore }) => {
  return (
    <div className={style.card}>
      <p>Nombre: {name}</p> <br />
      <p>
        Dietas:{" "}
        {diets.map((diet, i) => {
          return (
            <span key={i}>
              {diet} <br />
            </span>
          );
        })}
      </p>
      <p>Health Score: {healthScore}</p>
      <br />
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
