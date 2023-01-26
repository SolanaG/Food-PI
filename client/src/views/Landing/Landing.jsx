import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.landing}>
      <h1> Este es el landing </h1>
      <Link className={style.link} to="/home">
        HOME
      </Link>
    </div>
  );
};

export default Landing;
