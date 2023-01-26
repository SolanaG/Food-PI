import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByAbc, dietsFilter, getDiets } from "../../redux/actions";
import style from "./FilterSort.module.css";

const FilterSort = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets(""));
  }, [dispatch]);

  const diets = useSelector((state) => state.diets);
  // console.log("state.diets::::", diets);
  // const [orderAbc, setOrderAbc] = useState("1");

  // const [filteredDiet, setFilteredDiet] = useState("");

  const handleInputChange = (ev) => {
    // setOrderAbc(ev.target.value);

    dispatch(sortByAbc(ev.target.value));
  };

  const handleDietFilter = (ev) => {
    // setFilteredDiet(ev.target.value);

    dispatch(dietsFilter(ev.target.value));
  };

  return (
    <div className={style.filterContainer}>
      <select className={style.sortSelect} onChange={handleInputChange}>
        <option value="1">A-z</option>
        <option value="-1">Z-a</option>
      </select>
      <br />
      <select placeholder="Selecciona una dieta.." onChange={handleDietFilter}>
        <option value="">Selecciona una dieta..</option>
        {diets.map((diet, i) => (
          <option value={diet.name} key={i}>
            {diet.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSort;
