import style from "./RecipeCard.module.css";

const RecipeCard = ({ name, image, diets, healthScore }) => {
  return (
    <div className={style.card}>
      <h3>{name}</h3> <br />
      {/* <span>Dietas:</span><br /> */}
      <div className={style.dietsDiv}>
        {diets.map((diet, i) => {
          return (
            <div className={style.dietDiv} key={i}>
              <input type="checkbox" checked disabled />
              <span>{diet}</span>
            </div>
          );
        })}
      </div>
      <h5>Health Score: {healthScore}</h5>
      <br />
      <div className={style.imgDiv}>
        <div></div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default RecipeCard;
