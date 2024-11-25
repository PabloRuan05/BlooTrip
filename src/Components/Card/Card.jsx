import styles from "./styles.module.scss";

function Card(props) {
  return (
    <a href={props.link}>
      <div className={styles.card}>
        <img src={props.image} alt="" class={styles.cardimage} />
        <div className={styles.cardtext}>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
