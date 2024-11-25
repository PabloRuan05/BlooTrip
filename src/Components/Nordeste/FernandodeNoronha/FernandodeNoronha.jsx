import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function FernandodeNoronha() {
  return (
    <section className="fernandodenoronha">
      <Card2
        image="https://images.pexels.com/photos/12271415/pexels-photo-12271415.jpeg"
        title="Fernando de Noronha"
        subtitle="PE"
      />
      <GradeInfo
        ondefica="Onde fica?: Arquipélago a 545 km da costa do Recife, Pernambuco, no Atlântico Sul."
        acesso="Acesso: Aeroporto em Fernando de Noronha, com voos a partir de Recife e Natal."
        tipo="Tipo: Tropical, com estação seca (agosto a janeiro) e chuvosa (fevereiro a julho)."
        melhorepoca="Melhor época: Setembro e outubro, ideais para mergulho e águas calmas."
        atracao1="Praia do Sancho: Frequentemente considerada uma das mais belas do mundo."
        atracao2="Baía dos Porcos: Cenário paradisíaco, com piscinas naturais."
        atracao3="Mergulho: Riqueza marinha única, ideal para snorkeling e mergulho com cilindro."
        atracao4="Projeto Tamar: Educação ambiental e preservação de tartarugas marinhas."
        culinaria="Culinária local: Destaque para pratos como o peixe na folha de bananeira e a moqueca de frutos do mar."
        cultura="Sustentabilidade: A ilha tem foco em preservação ambiental, com práticas ecológicas rigorosas."
        hospedagem="Taxa ambiental: É necessário pagar uma taxa de preservação ao entrar na ilha."
        transporte="Hospedagem: Pousadas charmosas, muitas administradas por moradores locais."
        custo="Custo: Destino caro, mas recompensador."
        curiosidade1="História: A ilha já foi utilizada como presídio e base militar."
        curiosidade2="Marítima única: Mais golfinhos vivem livres aqui do que em qualquer outro lugar do mundo."
      />
    </section>
  );
}

export default FernandodeNoronha;
