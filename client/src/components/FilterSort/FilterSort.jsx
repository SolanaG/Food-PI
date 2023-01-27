import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByAbc,
  dietsFilter,
  getDiets,
  sortByHealthScore,
} from "../../redux/actions";
import style from "./FilterSort.module.css";

const FilterSort = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets(""));
  }, [dispatch]);

  const diets = useSelector((state) => state.diets);

  const handleInputChange = (ev) => {
    dispatch(sortByAbc(ev.target.value));
  };

  const handleDietFilter = (ev) => {
    dispatch(dietsFilter(ev.target.value));
  };

  const handleHealthScoreOrder = (ev) => {
    dispatch(sortByHealthScore(ev.target.value));
  };

  return (
    <div className={style.filterContainer}>
      <select onChange={handleInputChange}>
        <option value="1">A-z</option>
        <option value="-1">Z-a</option>
      </select>
      <br />
      <select className={style.filterSelect} onChange={handleDietFilter}>
        <option value="">Selecciona una dieta..</option>
        {diets.map((diet, i) => (
          <option value={diet.name} key={i}>
            {diet.name}
          </option>
        ))}
      </select>
      <select onChange={handleHealthScoreOrder}>
        <option key={1} value="healthScore">
          Health Score
        </option>
        <option key={2} value="1">
          Ascendente
        </option>
        <option key={3} value="-1">
          Descendente
        </option>
      </select>
    </div>
  );
};

export default FilterSort;
