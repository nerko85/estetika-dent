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
  const homeMembers = members.slice(3);
  return (
    <>
      <Head>
        <title>Dental Estetica - Improve your smile</title>
        <meta name="description" content="We take care of your smile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Posjeta zubaru bez brige, suza, uz vrhunske stručnjake"
        img="/images/mature-lady-showing-theets.png"
      >
        <Button url="/contact">Kontaktirajte nas</Button>
      </Hero>

      <CustomSection
        title="Osjećajte se kao kod kuće"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/images/mature-lady-showing-theets.png"
      ></CustomSection>

      <Slider elements={team}></Slider>

      <Accomodation accomodations={accomodations} />

      <Team members={homeMembers} title="Vrhunski stručnjaci" />

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
