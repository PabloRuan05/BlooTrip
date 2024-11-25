import Card2 from "../../Card2/Card2";
import GradeInfo from "../../GradeInfo/GradeInfo";
function FozdoIguacu() {
  return (
    <section className="FozdoIguacu">
      <Card2
        image="https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2023-11/cataratas_do_iguacu_foto_rafael_bechlin1.jpg"
        title="Foz do Iguaçu"
        subtitle="PR"
      />
      <GradeInfo
        ondefica="Onde fica?: Extremo oeste do Paraná, na tríplice fronteira entre Brasil, Paraguai e Argentina."
        acesso="Acesso: Aeroporto Internacional de Foz do Iguaçu, bem conectado a várias cidades do Brasil."
        tipo="Tipo: Subtropical úmido, com verões quentes e invernos amenos."
        melhorepoca="Melhor época:
Verão (dezembro a março): Para ver as Cataratas em seu volume máximo, Inverno (junho a agosto): Clima mais seco, ideal para passeios tranquilos."
        atracao1="Cataratas do Iguaçu: Maravilha natural com trilhas e passarelas que oferecem vistas espetaculares."
        atracao2="Parque das Aves: Um santuário de aves tropicais próximo às Cataratas."
        atracao3="Itaipu Binacional: Uma das maiores usinas hidrelétricas do mundo, com visitas guiadas."
        atracao4="Compras: Proximidade com Ciudad del Este (Paraguai) para compras e Puerto Iguazú (Argentina) para gastronomia."
        culinaria="Culinária típica: Rodízio de carnes brasileiras e pratos típicos argentinos, como empanadas e parrillas."
        cultura="Tradição multicultural: A região tem forte presença de comunidades árabes, latinas e indígenas."
        hospedagem="Hospedagem: Desde hotéis econômicos até resorts de luxo."
        transporte="Transporte: Fácil acesso por transporte público ou táxis."
        custo="Documentação: Leve RG ou passaporte para cruzar as fronteiras."
        curiosidade1="Cataratas são compartilhadas: O lado brasileiro oferece as melhores vistas panorâmicas, enquanto o lado argentino permite proximidade maior com as quedas d'água."
        curiosidade2="Animal símbolo: O quati é comum no parque, mas evite alimentá-lo."
      />
    </section>
  );
}

export default FozdoIguacu;
