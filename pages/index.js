import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Button from "../containers/Button/Button";
import Team from "../components/Team/Team";
import Slider from "../components/Slider";
import { members, team } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="Posjeta zubaru bez brige, suza, uz vrhunske strucnjake">
        <Button>Kontaktirajte nas</Button>
      </Hero>

      <Slider elements={team}>
        <h1>Team slider</h1>
      </Slider>

      <Team members={members} title="Vrhunski strucnjaci" />
    </>
  );
}
