import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByAbc } from "../../redux/actions";

const FilterSort = () => {
  const dispatch = useDispatch();

  const [orderName, setOrderName] = useState("-1");

  const handleInputChange = (ev) => {
    setOrderName(ev.target.value);
    console.log("order name:::", orderName);
    dispatch(sortByAbc(orderName));
  };

  return (
    <div>
      <select onChange={handleInputChange}>
        <option value="1">A-z</option>
        <option value="-1">Z-a</option>
      </select>
      <select>
        <option>Selecciona una dieta..</option>
      </select>
    </div>
  );
};

export default FilterSort;
