import Head from "next/head";
import ContactStrip from "../components/ContactStrip";
import CustomSection from "../components/CustomSection";
import Location from "../components/Location";
import Form from "../components/Form";

import { company } from "../data";
import { NextSeo } from "next-seo";

export default function Contact() {
  const SEO = {
    title: "Estetika Dent - Kontakt",
    description: "Kontakt podaci stomatološke ordinacije Estetika Dent",
    openGraph: {
      title: "Estetika Dent - Kontakt",
      description: "Kontakt podaci stomatološke ordinacije Estetika Dent",
      image: "/images/kontaktbanner.png",
      url: "https://www.estetikadent.ba/contact",
    },
  };
  return (
    <>
       <NextSeo {...SEO} />

      <CustomSection title="Derventa" img="/images/contact-derventa.png" dir="left">
        <Location company={company.address[0]} />
      </CustomSection>

      {/* <CustomSection title="Gradačac" img="/images/office1.png">
        <Location company={company.address[1]} />
      </CustomSection> */}

      <Form title="Pišite nam" />

      <ContactStrip text="Bukirajte pregled online" />
    </>
  );
}
