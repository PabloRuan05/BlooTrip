import styles from "./styles.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTheaterMasks } from "react-icons/fa";
import { PiFediverseLogo } from "react-icons/pi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

function GradeInfo(props) {
  return (
    <section className={styles.jericoacoara}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1>
            Localização <FaLocationDot />
          </h1>
          <ul>
            <li>{props.ondefica}</li>
            <li>{props.acesso}</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h1>
            Clima <TiWeatherPartlySunny />
          </h1>
          <ul>
            <li> {props.tipo}</li>
            <li>{props.melhorepoca}</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h1>
            Atrações Principais <FaTheaterMasks />
          </h1>
          <ul>
            <li>{props.atracao1}</li>
            <li>{props.atracao2}</li>
            <li>{props.atracao3}</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h1>
            Aspectos Culturais <PiFediverseLogo />
          </h1>
          <ul>
            <li>{props.culinaria}</li>
            <li>{props.cultura}</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h1>
            Dicas Práticas <MdOutlineTipsAndUpdates />
          </h1>
          <ul>
            <li>{props.hospedagem}</li>
            <li>{props.transporte}</li>
            <li>{props.custo}</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h1>
            Curiosidades <FaMagnifyingGlass />
          </h1>
          <ul>
            <li>{props.curiosidade1}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default GradeInfo;
