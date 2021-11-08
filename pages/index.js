import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Button from "../containers/Button/Button";
import Team from "../components/Team/Team";
import Slider from "../components/Slider";
import CustomSection from "../components/CustomSection";
import ContactStrip from "../components/ContactStrip";
import Accomodation from "../components/Accomodation";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Accordion from "../components/Accordion";

import { members, team, accomodations, services, faqs } from "../data";

export default function Home() {
  // const homeMembers = members.slice(3);
  return (
    <>
      <Hero
        title="Posjeta zubaru bez brige, suza, uz vrhunske stručnjake"
        img="/images/section-home-hero.png"
        quote="Od danas se više ne bojim ići kod zubara jer zubari vole malu djecu"
        person="Dejan Petrović"
      >
        <Button url="/contact">Kontaktirajte nas</Button>
      </Hero>

      <CustomSection
        title="Osjećajte se kao kod kuće"
        desc="Naš odnos prema poslu koji obavljamo, osmišljen je tako da vrijeme koje pacijent provede sa nama – sve od prvoga ulaska u ordinaciju, preko kontakta sa zaposlenim osobljem, pa do postupka primjene adekvatne terapije – protekne u prijatnoj atmosferi i bez sporednih opterećenja."
        img="/images/section-home-about.png"
      ></CustomSection>

      <Slider elements={team}></Slider>

      <Accomodation accomodations={accomodations} />

      <Team members={members} title="Naše osoblje" />

      <Services services={services}>
        <h1>Naše usluge</h1>
      </Services>

      <Pricing />

      <Accordion faqs={faqs}>
        <h1>Česta pitanja</h1>
      </Accordion>

      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}
