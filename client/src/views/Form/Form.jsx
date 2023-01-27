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

  //   const checkboxHandler = (event) => {
  //     console.log(event);
  //     const getValueIndex = form.diets.indexOf(event.target.value);
  //     if (getValueIndex === -1) {
  //       setForm({
  //         ...form,
  //         diets: [...form.diets, ...event.target.value],
  //       });
  //     } else {
  //       setForm({
  //         ...form,
  //         diets: [...form.diets.slice(getValueIndex, 1)],
  //       });
  //     }
  //     // setErrors(validation({ ...form, [property]: value }));
  //     console.log("dietita:::", form);
  //   };

  // Add/Remove checked item from list
  const checkboxHandler = (event) => {
    console.log(event);
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
  };
  console.log("dieta;;", form);

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
        {/* <span className={style.warning}>{errors.name}</span> */}
      </div>
      <div>
        <label>Imagen: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
        {/* <span className={style.warning}>{errors.image}</span> */}
      </div>

      <div>
        <label>Health Score: </label>
        <input
          type="number"
          value={form.healthScore}
          onChange={changeHandler}
          name="healthScore"
        />
        {/* <span className={style.warning}>{errors.diets}</span> */}
      </div>
      <div>
        <label>Resumen: </label>
        <textarea
          type="text"
          value={form.summary}
          onChange={changeHandler}
          name="summary"
        />
        {/* <span className={style.warning}>{errors.summary}</span> */}
      </div>

      <div>
        <label>Paso a paso: </label>
        <textarea
          type="text"
          value={form.steps}
          onChange={changeHandler}
          name="steps"
        />
        {/* <span className={style.warning}>{errors.steps}</span> */}
      </div>
      <div>
        <label>Dietas: </label>
        {diets.map((diet, index) => (
          <div key={index}>
            <input value={diet.id} type="checkbox" onChange={checkboxHandler} />
            <span>{diet.name}</span>
          </div>
        ))}
      </div>

      <button className={style.submit} type="submit">
        CREAR
      </button>
    </form>
  );
};

export default Form;
