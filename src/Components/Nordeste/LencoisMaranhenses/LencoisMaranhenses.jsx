import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function LencoisMaranhenses() {
  return (
    <section className="LencoisMaranhenses">
      <Card2
        image="https://revista.bancorbras.com.br/wp-content/uploads/2023/12/Dunas-de-areias_Maranhao-2048x1152.jpg"
        title="Lençóis Maranhenses  "
        subtitle="Barreirinhas - MA"
      />
      <GradeInfo
        ondefica="Onde fica?: Parque Nacional dos Lençóis Maranhenses, no estado do Maranhão, nordeste do Brasil, com acesso principal pela cidade de Barreirinhas."
        acesso="Acesso: O aeroporto mais próximo é em São Luís (capital do estado), seguido de uma viagem terrestre de cerca de 4 horas até Barreirinhas."
        tipo="Tipo: Tropical, com uma estação chuvosa (janeiro a junho) e uma estação seca (julho a dezembro)."
        melhorepoca="Melhor época: Entre maio e agosto, quando as lagoas estão cheias após o período de chuvas."
        atracao1="Dunas e Lagoas: Destaques incluem a Lagoa Azul, Lagoa Bonita e Lagoa do Peixe."
        atracao2="Circuitos turísticos: Passeios em veículos 4x4 e a pé para explorar o deserto de areia com lagoas cristalinas."
        atracao3="Rio Preguiças: Passeios de barco pelo rio, com paradas em vilas ribeirinhas e na praia de Atins."
        atracao4=""
        style="display: none;"
        culinaria="Culinária local: Pratos à base de frutos do mar, como o camarão ao alho e óleo e o sururu."
        cultura="Tradições: Comunidades locais, como Atins e Santo Amaro, preservam uma vida tranquila e simples."
        hospedagem="Hospedagem: Barreirinhas oferece mais opções, mas Atins é uma alternativa charmosa e menos movimentada."
        transporte="Custo: Passeios guiados são essenciais e podem representar um custo significativo no orçamento."
        curiosidade1="Paisagem única: O parque é um raro 'deserto tropical' com lagoas temporárias."
      />
    </section>
  );
}

export default LencoisMaranhenses;
