import styles from "./styles.module.scss";
import Card from "../../Components/Card/Card";

function Internacional() {
  return (
    <section id="internacional" className={styles.internacional}>
      <h1>Internacional</h1>
      <div className={styles.container}>
        <Card
          link="Toquio"
          image="https://images.pexels.com/photos/12544861/pexels-photo-12544861.jpeg"
          title="Tóquio"
          subtitle=""
        />
        <Card
          link="Maldivas"
          image="https://freeway.tur.br/userfiles/98af5fa75b82806be9bd47cb5ef920ea.png"
          title="Maldivas"
          subtitle=""
        />
        <Card
          link="TorresdelPaine"
          image="https://imgmd.net/images/v1/guia/1684168/patagonia-76-c.jpg"
          title="Torres del Paine"
          subtitle=""
        />
        <Card
          link="Banff"
          image="https://images.pexels.com/photos/29379495/pexels-photo-29379495/free-photo-of-rompendo.jpeg     "
          title="Banff"
          subtitle=""
        />
      </div>
    </section>
  );
}

export default Internacional;
