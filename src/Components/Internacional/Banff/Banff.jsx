import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function Banff() {
  return (
    <section className="Banff">
      <Card2
        image="https://images.pexels.com/photos/29379495/pexels-photo-29379495/free-photo-of-rompendo.jpeg     "
        title="Banff"
        subtitle=""
      />
      <GradeInfo
        ondefica="Onde fica?: Parque Nacional de Banff, na província de Alberta, no Canadá."
        acesso="Acesso: O aeroporto mais próximo é o Aeroporto Internacional de Calgary, seguido de uma viagem terrestre de 90 minutos."
        tipo="Tipo: Alpino, com invernos rigorosos e verões amenos."
        melhorepoca="Melhor época: Inverno (dezembro a março): Para esqui e esportes na neve, Verão (junho a setembro): Para trilhas, lagos e passeios ao ar livre."
        atracao1="Lago Louise: Lago glacial de águas turquesas, ideal para canoagem ou fotos icônicas."
        atracao2="Moraine Lake: Outro lago espetacular, rodeado por montanhas."
        atracao3="Sulphur Mountain: Teleférico com vistas panorâmicas das Montanhas Rochosas."
        atracao4="Esqui: Estações renomadas como Sunshine Village e Lake Louise Ski Resort."
        culinaria="Culinária local: Pratos com carne de alce, bisão e maple syrup como destaque."
        cultura="Tradições canadenses: Cultura de montanhismo e preservação ambiental."
        hospedagem="Hospedagem: De chalés aconchegantes a hotéis luxuosos, como o famoso Fairmont Banff Springs."
        transporte="Transporte: Recomenda-se alugar um carro para explorar a região."
        custo="Custo: É um destino premium, especialmente durante a alta temporada."
        curiosidade1="Patrimônio Mundial: O Parque Nacional de Banff é protegido pela UNESCO."
        curiosidade2="Aurora boreal: Pode ser vista em noites claras durante o inverno."
      />
    </section>
  );
}

export default Banff;
