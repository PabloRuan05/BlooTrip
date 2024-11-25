import styles from "./styles.module.scss";
import Card from "../Card/Card";

function Sul() {
  return (
    <section id="sul" className={styles.sul}>
      <h1>Sul</h1>
      <div className={styles.container}>
        <Card
          link="SerraGaucha"
          image="https://viajoteca.com/wp-content/uploads/2024/05/shutterstock_646051597.jpg"
          title="Serra Gaúcha"
          subtitle="RS"
        />
        <Card
          link="IlhadoMel"
          image="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/ilha-do-mel-praia-do-farol-capa2019.jpg"
          title="Ilha do Mel"
          subtitle="PR"
        />

        <Card
          link="FozdoIguacu"
          image="https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2023-11/cataratas_do_iguacu_foto_rafael_bechlin1.jpg"
          title="Foz do Iguaçu"
          subtitle="PR"
        />
      </div>
    </section>
  );
}

export default Sul;
