import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function Toquio() {
  return (
    <section className="Toquio">
      <Card2
        image="https://images.pexels.com/photos/12544861/pexels-photo-12544861.jpeg"
        title="Tóquio"
        subtitle=""
      />
      <GradeInfo
        ondefica="Onde fica?: Capital do Japão, localizada na ilha de Honshu, na região de Kanto."
        acesso="Acesso: Principais aeroportos internacionais: Narita e Haneda, ambos conectados por transporte eficiente ao centro da cidade."
        tipo="Tipo: Clima temperado, com quatro estações bem definidas."
        melhorepoca="Melhor época: Primavera (março a maio): Para apreciar as cerejeiras em flor, Outono (setembro a novembro): Clima ameno e paisagens de folhas avermelhadas."
        atracao1="Templo Sensō-ji: O mais antigo templo budista de Tóquio, em Asakusa."
        atracao2="Shibuya Crossing: Cruzamento icônico e símbolo do ritmo frenético da cidade."
        atracao3="Tokyo Skytree: Uma das torres mais altas do mundo, com vista panorâmica."
        atracao4="Parque Ueno: Ideal para passeios e visita a museus, como o Museu Nacional de Tóquio."
        culinaria="Culinária local: Sushi, ramen, takoyaki e sobremesas como mochi e matcha."
        cultura="Tradição vs. modernidade: Contraste entre templos históricos e bairros futuristas como Akihabara."
        hospedagem="Transporte: Use o JR Pass (Japan Rail Pass) e o metrô, famosos pela pontualidade e eficiência."
        transporte="Hospedagem: Desde cápsulas econômicas até hotéis luxuosos."
        custo="Custo: Planeje um orçamento médio a alto, especialmente para alimentação e transporte."
        curiosidade1="Tecnologia avançada: Tóquio abriga robôs recepcionistas e banheiros inteligentes."
        curiosidade2="Subculturas: O bairro Harajuku é famoso por estilos únicos e cultura pop."
      />
    </section>
  );
}

export default Toquio;
