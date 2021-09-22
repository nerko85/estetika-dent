import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Button from "../containers/Button/Button";
import Team from "../components/Team/Team";
import Slider from "../components/Slider";
import CustomSection from "../components/CustomSection";
import ContactStrip from "../components/ContactStrip";

import { members, team } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Posjeta zubaru bez brige, suza, uz vrhunske strucnjake"
        img="/images/mature-lady-showing-theets.png"
      >
        <Button>Kontaktirajte nas</Button>
      </Hero>

      <CustomSection
        title="Osjećajte se kao kod kuće"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/images/mature-lady-showing-theets.png"
      ></CustomSection>

      <Slider elements={team}></Slider>

      <Team members={members} title="Vrhunski strucnjaci" />

      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}
