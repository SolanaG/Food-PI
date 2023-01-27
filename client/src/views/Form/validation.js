export default function validation(form) {
  let errors = {};

  if (!form.name) errors.name = "Por favor ingresa el nombre de tu receta";
  if (form.healthScore < 0 || form.healthScore > 100)
    errors.healthScore = "El valor de Health Score debe estar entre 0 y 100";

  //   const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/;

  //   if (
  //     !regexEmail.test(form.username) ||
  //     !form.username ||
  //     form.username.length > 35
  //   )
  //     errors.username = "Por favor escribe tu email";
  //   if (!form.password || !regexPass.test(form.password))
  //     errors.password =
  //       "Tu contraseña debe tener entre 6 y 10 caracteres, y al menos un número";

  return errors;
}
