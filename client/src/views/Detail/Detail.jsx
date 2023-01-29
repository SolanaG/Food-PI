import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const recipeDetail = useSelector((state) => state.detail);

  return (
    <div>
      {Object.keys(recipeDetail).length ? (
        <>
          <h1> Este es el detail </h1>
          <div>
            <p>Nombre: {recipeDetail.name}</p>
            <br />
            <img src={recipeDetail.image} alt="" />
            <br />
            <p>
              Dietas:{" "}
              {recipeDetail.diets.map((diet, i) => {
                return (
                  <span key={i}>
                    {diet} <br />
                  </span>
                );
              })}
            </p>
            <p>Health Score: {recipeDetail.health_score}</p>
            <p>Tipo de plato: {recipeDetail.dishTypes}</p>
            <span>Resumen:</span> {recipeDetail.summary.replace(/<[^>]+>/g, "")}
            <br />
            <>
              Paso a paso:{" "}
              {typeof recipeDetail.steps === "string"
                ? recipeDetail.steps
                : recipeDetail.steps.map((step, i) => (
                    <div key={i}>
                      <h5>STEP {step.number}:</h5>
                      <span>{step.step}</span>
                    </div>
                  ))}
            </>
          </div>
        </>
      ) : (
        <p>Cargando Detalle...</p>
      )}
    </div>
  );
};

export default Detail;
