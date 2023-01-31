import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import validation from "./validation";
import style from "./Form.module.css";
import { createNewRecipe, getDiets } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    dishTypes: [],
    steps: "",
    image: "",
    diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
    setErrors(validation({ ...form, [property]: value }));
  };

  const checkboxHandler = (event) => {
    let updatedList = [...form.diets];
    if (event.target.checked) {
      updatedList = [...form.diets, event.target.value];
    } else {
      updatedList.splice(form.diets.indexOf(event.target.value), 1);
    }
    setForm({
      ...form,
      diets: [...updatedList],
    });
    setErrors(validation({ ...form, diets: [...updatedList] }));
  };
  const history = useHistory();

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(createNewRecipe(form));
    history.push("/home");
  };

  return (
    <form className={style.formContainer} onSubmit={handlerSubmit}>
      <div className={style.inputDiv}>
        <label>Nombre: </label>
        <input
          className={style.input}
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
          required
        />
        <span className={style.warning}>{errors.name}</span>
      </div>
      <div className={style.inputDiv}>
        <label>Imagen: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
          required
        />
      </div>

      <div className={style.inputDiv}>
        <label>Ranking Saludable:</label>
        <input
          type="number"
          value={form.healthScore}
          onChange={changeHandler}
          name="healthScore"
          required
        />
        <span className={style.warning}>{errors.healthScore}</span>
      </div>
      <div className={style.inputDiv}>
        <label>Tipo de Plato:</label>
        <input
          type="text"
          value={form.dishTypes}
          onChange={changeHandler}
          name="dishTypes"
          required
        />
        <span className={style.warning}>{errors.healthScore}</span>
      </div>
      <div className={style.textAreaDiv}>
        <label>Resumen: </label>
        <textarea
          rows="15"
          type="text"
          placeholder="Ingresa una descripción"
          value={form.summary}
          onChange={changeHandler}
          name="summary"
          required
        />
        <span className={style.warning}>{errors.summary}</span>
      </div>

      <div className={style.textAreaDiv}>
        <label>Paso a paso: </label>
        <textarea
          rows="15"
          placeholder="Ingresa los pasos"
          value={form.steps}
          onChange={changeHandler}
          name="steps"
          required
        />
        <span className={style.warning}>{errors.steps}</span>
      </div>
      <div className={style.checkboxDiv}>
        <label>Dietas: </label>
        {diets.map((diet, index) => (
          <div key={index} className={style.checkbox}>
            <input value={diet.id} type="checkbox" onChange={checkboxHandler} />
            <span>{diet.name}</span>
          </div>
        ))}
      </div>
      <div className={style.submitDiv}>
        <button className={style.submit} type="submit">
          CREAR
        </button>
      </div>
    </form>
  );
};

export default Form;
