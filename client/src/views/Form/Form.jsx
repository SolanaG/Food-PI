import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import validation from "./validation";
import style from "./Form.module.css";
import { createNewRecipe, getDiets } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets(""));
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  //   const [errors, setErrors] = useState({
  //     name: "",
  //     summary: "",
  //     healthScore: "",
  //     steps: "",
  //     diets: [],
  //   });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    // setErrors(validation({ ...form, [property]: value }));
  };

  const newRecipeMsg = useSelector((state) => state.message);
  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewRecipe(form));
    alert(newRecipeMsg);
  };

  return (
    <form className={style.formContainer} onSubmit={handlerSubmit}>
      <h2>Este es el form</h2>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        {/* <span className={style.warning}>{errors.username}</span> */}
      </div>
      <div>
        <label>Resumen: </label>
        <input
          type="text"
          value={form.summary}
          onChange={changeHandler}
          name="summary"
        />
        {/* <span className={style.warning}>{errors.username}</span> */}
      </div>
      <div>
        <label>Health Score: </label>
        <input
          type="number"
          value={form.healthScore}
          onChange={changeHandler}
          name="healthScore"
        />
        {/* <span className={style.warning}>{errors.username}</span> */}
      </div>
      <div>
        <label>Paso a paso: </label>
        <input
          type="text"
          value={form.steps}
          onChange={changeHandler}
          name="steps"
        />
        {/* <span className={style.warning}>{errors.username}</span> */}
      </div>
      <div>
        <label>Dietas: </label>
        <select onChange={changeHandler}>
          <option value="">Selecciona una dieta..</option>
          {diets.map((diet, i) => (
            <option value={diet.id} key={i}>
              {diet.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">CREAR</button>
    </form>
  );
};

export default Form;
