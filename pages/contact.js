import Head from "next/head";
import ContactStrip from "../components/ContactStrip";
import CustomSection from "../components/CustomSection";
import Location from "../components/Location";

import { company } from "../data";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Dental Estetica - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomSection title="Derventa" img="/images/office1.png" dir="left">
        <Location company={company.address[0]} />
      </CustomSection>

      <CustomSection title="Gradačac" img="/images/office1.png">
        <Location company={company.address[1]} />
      </CustomSection>

      <ContactStrip text="Bukirajte pregled online" />
    </>
  );
}
