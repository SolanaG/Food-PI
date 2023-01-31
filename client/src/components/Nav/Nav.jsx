import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.navContainer}>
      <div className={style.linksDiv}>
        <Link className={style.links} to="/home">
          HOME
        </Link>
        <Link className={style.links} to="/create">
          CREA TU RECETA
        </Link>
      </div>
    </div>
  );
};

export default Nav;
