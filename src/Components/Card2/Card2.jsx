import styles from "./styles.module.scss";

function Card2(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" class={styles.cardimage} />
      <div className={styles.cardtext}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Card2;
