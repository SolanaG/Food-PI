import style from "./RecipeCard.module.css";

const RecipeCard = ({ name, image, diets }) => {
  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>Name: {name}</p> <br />
      Diets:
      {diets.map((diet, i) => {
        return (
          <span key={i}>
            {diet} <br />
          </span>
        );
      })}
      <br />
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;