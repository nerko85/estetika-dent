import Head from "next/head";
import ContactStrip from "../components/ContactStrip";
import CustomSection from "../components/CustomSection";
import Button from "../containers/Button";

export default function Services() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomSection
        title="Lokacija 2"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img="/images/services-section.png"
        quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        dir="left"
      >
        <Button>Bukiraj online</Button>
      </CustomSection>

      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}
