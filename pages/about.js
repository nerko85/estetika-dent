import Head from "next/head";
import Hero from "../components/Hero";
import Team from "../components/Team";
import ContactStrip from "../components/ContactStrip";
import CustomSection from "../components/CustomSection";
import Accomodation from "../components/Accomodation";
import Button from "../containers/Button";

import { members, comfort } from "../data";
import { NextSeo } from "next-seo";

export default function About() {
  const SEO = {
    title: "Estetika Dent - O nama",
    description: "Osnovni podaci i historijat stomatološke ordinacije Estetika Dent",
    openGraph: {
      title: "Estetika Dent - O nama",
      description: "Osnovni podaci i historijat stomatološke ordinacije Estetika Dent",
      image: "/images/kontaktbanner.png",
      url: "https://www.estetikadent.ba/about",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />

      <Hero
        title="Stomatološka ordinacija Estetika Dent"
        img="/images/about-hero-bg.png"
        quote="Profesionalna usluga, ljubazno osoblje i prekrasno uređen ambijent. Sve pohvale."
        person="Dejan Radić"
      >
        <Button target="_blank" url="https://estetikadent.alpindent.com/login">Bukiraj online</Button>
      </Hero>

      <Accomodation accomodations={comfort} size="small">
        <h1>Vrhunski komfort</h1>
      </Accomodation>

      <CustomSection
        title="Estetika Dent Derventa"
        desc="Nalazimo se u Lugu, na magistralnom putu Derventa – Banja Luka, u objektu koji je u prostornom smislu apsolutno prilagođen potrebama i radu zdravstvene ustanove kao i planovima našeg daljeg razvoja i unapređenja."
        img="/images/about-estetika-section.png"
      >
        <Button>Bukiraj online</Button>
      </CustomSection>

      <CustomSection
        title="Estetika Dent Gradačac"
        desc="Nalazimo se u ulici 6. bataljona bb Gradačac 76250, Bosna i Hercegovina. Naša nova poslovnica će biti uskoro otvorena te ćete blagovremeno biti obavješteni o početku rada."
        img="/images/about-estetik2-section.png"
        dir="left"
      >
        <Button target="_blank" url="https://estetikadent.alpindent.com/login">Bukiraj online</Button>
      </CustomSection>

      <Team members={members} title="Naše osoblje" />

      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}
