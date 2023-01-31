import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import logoImg from "../../resources/img/cooking.png";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.logo}>
        <h1> MAGIC SPOON </h1>
        <span>Tu libro de recetas online</span>
        <br />
        <img src={logoImg} alt="cargando imagen"></img>
        <br />
        <Link className={style.link} to="/home">
          START!
        </Link>
      </div>
    </div>
  );
};

export default Landing;
