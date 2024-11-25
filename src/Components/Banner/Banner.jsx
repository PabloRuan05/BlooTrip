import styles from "./styles.module.scss";

function Banner() {
  return (
    <section className={styles.banner}>
      <h1>
        Está em busca de uma<span> aventura</span> ?
      </h1>
    </section>
  );
}

export default Banner;
