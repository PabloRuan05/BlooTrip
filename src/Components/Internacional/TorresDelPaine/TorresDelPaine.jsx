import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function TorresDelPaine() {
  return (
    <section className="TorresDelPaine">
      <Card2
        image="https://imgmd.net/images/v1/guia/1684168/patagonia-76-c.jpg"
        title="Torres del Paine"
        subtitle=""
      />
      <GradeInfo
        ondefica="Onde fica?: Região da Patagônia chilena, ao sul do Chile, dentro do Parque Nacional Torres del Paine."
        acesso="Acesso: Aeroporto em Punta Arenas ou Puerto Natales, seguido de traslado terrestre."
        tipo="Tipo: Frio e ventoso, com clima imprevisível."
        melhorepoca="Melhor época: Outubro a abril: Primavera e verão oferecem temperaturas mais amenas e dias longos."
        atracao1="Trilhas icônicas: Circuitos W e O, que passam por montanhas, glaciares e lagos."
        atracao2="Glaciar Grey: Uma imensa geleira acessível por trilha ou barco."
        atracao3="Cuernos del Paine: Formações montanhosas impressionantes."
        atracao4="Fauna local: Guanacos, condores e pumas."
        culinaria="Culinária local: Cordeiro assado, empanadas chilenas e frutos do mar na região."
        cultura="Tradições: A Patagônia tem forte influência gaúcha, com práticas como o churrasco tradicional."
        hospedagem="Hospedagem: Desde refúgios para trekkers até lodges luxuosos dentro do parque."
        transporte="Clima: Vista-se em camadas, pois o tempo muda rapidamente."
        custo="Reserva: Planeje com antecedência, especialmente para trilhas e hospedagens."
        curiosidade1="Cenário cinematográfico: Torres del Paine é frequentemente descrito como um dos parques mais bonitos do mundo."
      />
    </section>
  );
}

export default TorresDelPaine;
