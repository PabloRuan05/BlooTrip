import styles from "./styles.module.scss";
import Card from "../Card/Card";

function Nordeste() {
  return (
    <section id="nordeste" className={styles.nordeste}>
      <h1>Nordeste</h1>
      <div className={styles.container}>
        <Card
          link="LencoisMaranhenses"
          image="https://revista.bancorbras.com.br/wp-content/uploads/2023/12/Dunas-de-areias_Maranhao-2048x1152.jpg"
          title="Lençóis Maranhenses  "
          subtitle="Barreirinhas - MA"
        />
        <Card
          link="jericoacoara"
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/d9/jericoacoara.jpg?w=1400&h=1400&s=1"
          title="Jericoacoara"
          subtitle="Jijoca de Jericoacoara - CE"
        />

        <Card
          link="fernandodenoronha"
          image="https://images.pexels.com/photos/12271415/pexels-photo-12271415.jpeg"
          title="Fernando de Noronha"
          subtitle="PE"
        />
        <Card
          link="PortodeGalinhas"
          image="https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/12/Porto-de-Galinhas-O-que-fazer-Capa-3.jpg"
          title="Porto de Galinhas"
          subtitle="Ipojuca - PE"
        />
      </div>
    </section>
  );
}

export default Nordeste;
