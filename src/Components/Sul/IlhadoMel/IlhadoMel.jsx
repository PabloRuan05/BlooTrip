import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function IlhadoMel() {
  return (
    <section className="IlhadoMel">
      <Card2
        image="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/ilha-do-mel-praia-do-farol-capa2019.jpg"
        title="Ilha do Mel"
        subtitle="PR"
      />
      <GradeInfo
        ondefica="Onde fica?: Costa do estado do Paraná, a cerca de 120 km de Curitiba."
        acesso="Acesso: Barco a partir de Pontal do Sul ou Paranaguá; a ilha é acessível apenas a pé ou de bicicleta."
        tipo="Tipo: Subtropical úmido, com temperaturas agradáveis o ano todo."
        melhorepoca="Melhor época: De outubro a março, com clima mais seco e quente."
        atracao1="Praias paradisíacas: Praia do Farol, Praia de Encantadas e Praia Grande."
        atracao2="Farol das Conchas: Mirante com vista panorâmica deslumbrante."
        atracao3="Gruta das Encantadas: Caverna envolta em lendas e belezas naturais."
        atracao4="Trilhas ecológicas: Percursos a pé por vegetação preservada."
        culinaria="Culinária local: Frutos do mar frescos, como camarões, ostras e peixes assados."
        cultura="Tradições simples: A ilha preserva uma atmosfera tranquila e rústica, sem veículos motorizados."
        hospedagem="Hospedagem: Pousadas simples e campings, com infraestrutura básica."
        transporte="Custo: É um destino acessível, mas algumas coisas podem ter preços mais altos devido ao isolamento."
        custo="Sustentabilidade: Leve o mínimo de lixo e respeite as regras ambientais locais."
        curiosidade1="Zona de preservação: A ilha é uma área protegida, com 90% do território sendo reserva ecológica."
        curiosidade2="Sem luz elétrica: Algumas áreas não têm energia elétrica, reforçando o charme rústico do destino."
      />
    </section>
  );
}

export default IlhadoMel;
