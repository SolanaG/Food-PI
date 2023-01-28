export default function validation(form) {
  let errors = {};
  const regexName = /^[a-záéíóúñ ]/i;

  if (!form.name) errors.name = "Por favor ingresa el nombre de tu receta";
  if (!regexName.test(form.name))
    errors.name = "El nombre de la receta solo puede contener letras";
  if (form.healthScore < 0 || form.healthScore > 100)
    errors.healthScore = "El valor de Health Score debe estar entre 0 y 100";
  if (!form.steps)
    errors.steps = "Por favor ingresa el paso a paso de tu receta";
  if (!form.diets.length)
    errors.diets = "Por favor seleccioná al menos 1 dieta";
  return errors;
}
