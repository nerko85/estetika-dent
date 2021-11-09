export { getStaticPaths, getStaticProps } from '../../ssr/services'

import Head from "next/head";
import styled from "styled-components";
import AdditionalInfo from "../../components/AdditionalInfo";
import ContactStrip from "../../components/ContactStrip";
import CustomSection from "../../components/CustomSection";
import Button from "../../containers/Button";

import { NextSeo } from "next-seo";

export default function Service({service}) {
  const SEO = {
    title: `Estetika Dent - ${service.title}`,
    description: `${service.desc}`,
    openGraph: {
      title: `Estetika Dent - ${service.title}`,
      description: `${service.desc}`,
      image: `${service.img}`,
      url: "https://www.estetikadent.ba/services",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />

      <CustomSection
        title={service?.title}
        desc={service?.desc}
        img={service?.img}
        dir="left"
      >
        <Button target="_blank" url="https://estetikadent.alpindent.com/login">Bukiraj online</Button>
      </CustomSection>

        {service.additional_info &&
            <AdditionalSection>
            {
                service?.additional_info.map(info=>(
                    <AdditionalInfo list={info?.list} title={info.title} desc={info.body}/>
                ))
            }
            </AdditionalSection>
        }
      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}

const AdditionalSection = styled.section`
  background: ${({ theme }) => theme.beige};
  padding:5rem;

  @media(max-width:${({theme})=>theme.tablet}){
    padding:3rem 0;
  }
` 
