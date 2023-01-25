// import { useState } from "react";
// import validation from "./validation";
// import style from "./Form.module.css";
// import axios from "axios";

// const Form = () => {
//   const [form, setForm] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     steps: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     summary: "",
//     healthScore: "",
//     steps: "",
//   });

//   const changeHandler = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;

//     setForm({ ...form, [property]: value });
//     setErrors(validation({ ...form, [property]: value }));
//   };

//   const handlerSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3001/recipes", form)
//       .then((res) => alert(res))
//       .catch((error) => alert(error));
//   };

//   return (
//     <form onSubmit={handlerSubmit}>
//       <div>
//         <label>Name: </label>
//         <input
//           type="text"
//           value={form.name}
//           onChange={changeHandler}
//           name="name"
//         />
//         <span className={style.warning}>{errors.username}</span>
//       </div>
//       <div>
//         <label>Summary: </label>
//         <input
//           type="text"
//           value={form.summary}
//           onChange={changeHandler}
//           name="summary"
//         />
//         <span className={style.warning}>{errors.username}</span>
//       </div>
//       <div>
//         <label>Health Score: </label>
//         <input
//           type="number"
//           value={form.healthScore}
//           onChange={changeHandler}
//           name="healthScore"
//         />
//         <span className={style.warning}>{errors.username}</span>
//       </div>
//       <div>
//         <label>Steps: </label>
//         <input
//           type="text"
//           value={form.steps}
//           onChange={changeHandler}
//           name="steps"
//         />
//         <span className={style.warning}>{errors.username}</span>
//       </div>
//       <button type="submit">SUBMIT</button>
//     </form>
//   );
// };

// export default Form;
