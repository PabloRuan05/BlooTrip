import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function SerraGaucha() {
  return (
    <section className="SerraGaucha">
      <Card2
        image="https://viajoteca.com/wp-content/uploads/2024/05/shutterstock_646051597.jpg"
        title="Serra Gaúcha"
        subtitle="RS"
      />
      <GradeInfo
        ondefica="Onde fica?: Região montanhosa no estado do Rio Grande do Sul, no sul do Brasil, incluindo cidades como Gramado, Canela e Bento Gonçalves."
        acesso="Acesso: O aeroporto mais próximo é o de Porto Alegre (117 km de Gramado), seguido de viagem terrestre."
        tipo="Tipo: Temperado, com estações bem definidas."
        melhorepoca="Inverno (junho a agosto): Para curtir o clima frio, muitas vezes com geada e até neve, Natal Luz (novembro a janeiro): Gramado fica deslumbrante com decorações natalinas."
        atracao1="  Gramado: Lago Negro, Mini Mundo, Rua Coberta e o Festival de Cinema."
        atracao2="Canela: Parque do Caracol, Catedral de Pedra e ecoturismo em parques naturais."
        atracao3="Bento Gonçalves: Vale dos Vinhedos, com vinícolas famosas e degustação de vinhos."
        culinaria="Culinária típica: Fondue, galeto al primo canto, sopas e cafés coloniais fartíssimos."
        cultura="Influência europeia: A arquitetura e os costumes refletem as origens italiana e alemã dos imigrantes."
        hospedagem="Hospedagem: Gramado e Canela possuem opções de luxo e pousadas charmosas."
        transporte="Transporte: Alugar um carro facilita explorar os destinos."
        custo="Eventos: Planeje com antecedência para alta temporada (inverno e Natal Luz)."
        curiosidade1="Vinhos premiados: A região produz vinhos de alta qualidade, especialmente espumantes."
        curiosidade2="Clima europeu: A Serra Gaúcha é considerada uma das regiões mais frias do Brasil."
      />
    </section>
  );
}

export default SerraGaucha;
