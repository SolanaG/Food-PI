import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const recipeDetail = useSelector((state) => state.detail);

  return (
    <div className={style.opacityContainer}>
      <div className={style.detailContainer}>
        {Object.keys(recipeDetail).length ? (
          <>
            <div className={style.firstContainer}>
              <h3 className={style.name}>{recipeDetail.name}</h3>
              <div className={style.secondContainer}>
                <div>
                  <img
                    className={style.imageDetail}
                    src={recipeDetail.image}
                    alt="cargando imagen"
                  />
                  <div className={style.healthAndDishType}>
                    <h4>Ranking Saludable: </h4>{" "}
                    <p>
                      <b>{recipeDetail.health_score}</b>
                    </p>
                  </div>
                </div>
                <div className={style.dietAndDishDiv}>
                  <div>
                    <h4> Dietas:</h4> <br />
                    {recipeDetail.diets.map((diet, i) => {
                      return (
                        <div key={i} className={style.dietAndDishDetail}>
                          <input type="checkbox" checked disabled />
                          <span>
                            {diet} <br />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className={style.dishType}>
                    <h4>Tipo de plato: </h4>{" "}
                    {typeof recipeDetail.dishTypes === "string"
                      ? recipeDetail.dishTypes
                      : recipeDetail.dishTypes.map((dishType, i) => (
                          <div key={i} className={style.dietAndDishDetail}>
                            <input type="checkbox" checked disabled />
                            <span>{dishType}</span>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>Resumen:</h4>
              {recipeDetail.summary.replace(/<[^>]+>/g, "")}
            </div>
            <br />
            <div className={style.stepscontainer}>
              <h4> Paso a paso:</h4>{" "}
              {typeof recipeDetail.steps === "string"
                ? recipeDetail.steps
                : recipeDetail.steps.map((step, i) => (
                    <div key={i}>
                      <h5>STEP {step.number}:</h5>
                      <span>{step.step}</span>
                    </div>
                  ))}
            </div>
          </>
        ) : (
          <p>Cargando Detalle...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
