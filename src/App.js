import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import { } from "./GlobalStyles/styles.css"
import Anuncio from "./Components/Anuncio/Anuncio";
import Nordeste from "./Components/Nordeste/Nordeste";
import Sul from "./Components/Sul/Sul"
import Internacional from "./Components/Internacional/Internacional";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jericoacoara from "./Components/Nordeste/Jericoacoara/Jericoacoara";
import FernandodeNoronha from "./Components/Nordeste/FernandodeNoronha/FernandodeNoronha";
import LencoisMaranhenses from './Components/Nordeste/LencoisMaranhenses/LencoisMaranhenses'
import PortodeGalinhas from './Components/Nordeste/PortodeGalinhas/PortodeGalinhas'
import FozdoIguacu from './Components/Sul/FozdoIguacu/FozdoIguacu'
import IlhadoMel from './Components/Sul/IlhadoMel/IlhadoMel'
import SerraGaucha from './Components/Sul/SerraGaucha/SerraGaucha'
import Banff from "./Components/Internacional/Banff/Banff";
import TorresDelPaine from "./Components/Internacional/TorresDelPaine/TorresDelPaine";
import Maldivas from "./Components/Internacional/Maldivas/Maldivas"
import Toquio from './Components/Internacional/Toquio/Toquio'
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* Define as rotas */}
          <Route path="/" element={
            <>
              <Banner />
              <Anuncio />
              <Nordeste />
              <Sul />
              <Internacional />
            </>}
          />
          <Route path="jericoacoara" element={
            <Jericoacoara />}
          />
          <Route path="fernandodenoronha" element={
            <FernandodeNoronha />}
          />
          <Route path="LencoisMaranhenses" element={
            <LencoisMaranhenses />}
          />
          <Route path="PortodeGalinhas" element={
            <PortodeGalinhas />}
          />
          <Route path="FozdoIguacu" element={
            <FozdoIguacu />}
          />
          <Route path="IlhadoMel" element={
            <IlhadoMel />}
          />
          <Route path="SerraGaucha" element={
            <SerraGaucha />}
          />
          <Route path="Banff" element={
            <Banff />}
          />
          <Route path="TorresDelPaine" element={
            <TorresDelPaine />}
          />
          <Route path="Maldivas" element={
            <Maldivas />}
          />
          <Route path="Toquio" element={
            <Toquio />}
          />
        </Routes>
      </Router>
      <Footer />

    </>
  );
}

export default App;
