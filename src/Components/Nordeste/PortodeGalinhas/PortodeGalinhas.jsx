import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function PortodeGalinhas() {
  return (
    <section className="PortodeGalinhas">
      <Card2
        image="https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/12/Porto-de-Galinhas-O-que-fazer-Capa-3.jpg"
        title="Porto de Galinhas"
        subtitle="Ipojuca - PE"
      />
      <GradeInfo
        ondefica="Onde fica?: Vila no município de Ipojuca, a 60 km ao sul de Recife, em Pernambuco.    "
        acesso="Acesso: O aeroporto mais próximo é o Aeroporto Internacional do Recife, com acesso fácil por estrada."
        tipo="Tipo: Tropical quente e úmido, com temperaturas médias de 27°C."
        melhorepoca="Melhor época: De setembro a março, com menos chuvas e mar mais claro."
        atracao1="Piscinas naturais: Formadas por recifes de corais na maré baixa, são ideais para snorkeling."
        atracao2="Praia de Muro Alto: Conhecida por suas águas calmas e infraestrutura confortável."
        atracao3="Passeios de jangada: Experiência tradicional para explorar os recifes e a vida marinha."
        culinaria="Culinária local: Pratos como peixe ao molho de coco, tapioca recheada e bolo de rolo."
        cultura="Artesanato: Lojas e feiras oferecem artigos típicos, como rendas e peças de cerâmica."
        hospedagem="Hospedagem: Opções variadas, de resorts luxuosos a pousadas mais simples."
        transporte="Transporte interno: Bugues são o meio mais divertido de explorar as praias."
        curiosidade1="Origem do nome: Porto de Galinhas era um porto clandestino para o comércio de escravos, que chegavam escondidos em galinhas d'angola."
        curiosidade2="Destino premiado: Já foi eleito várias vezes como a 'melhor praia do Brasil'."
      />
    </section>
  );
}

export default PortodeGalinhas;
