import Head from "next/head";
import styled from "styled-components";
import AdditionalInfo from "../components/AdditionalInfo";
import ContactStrip from "../components/ContactStrip";
import CustomSection from "../components/CustomSection";
import Button from "../containers/Button";

import { NextSeo } from "next-seo";

export default function Services() {
  const SEO = {
    title: "Estetika Dent - Usluge",
    description: "Usluge koje nudimo našim dragim klijentima. Pogledajte koje sve usluge u svom repertoaru nudi Estetika Dent",
    openGraph: {
      title: "Estetika Dent - Usluge",
      description: "Usluge koje nudimo našim dragim klijentima. Pogledajte koje sve usluge u svom repertoaru nudi Estetika Dent",
      image: "/images/kontaktbanner.png",
      url: "https://www.estetikadent.ba/services",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />

      <CustomSection
        title="RTG Dijagnostika"
        desc="Stomatološka ordinacija Estetika Dent, u potpunosti je pokrivena računarskom mrežom i svako radno mjesto ima svoju kompjutersku radnu stanicu. Takav rad omogućuje brz pristup svim podacima potrebnim za kvalitetan rad. Kartoni pacijenata, RVG i OPT snimci su neke od informacija koje uvijek imamo ispred sebe. Povezivanje putem interneta nam omogućuje brze konsultacije s kolegama specijalistima u naštoj novosadskoj ordinaciji ali i sa našim univerzitetskim profesorima koje konsultujemo u nejasnim situacijama kada je pacijente neophodno usmjeriti ka višim nivoima zdravstvene zaštite. Svi lični podaci su apsolutno zaštićeni i privatnost pacijenta kod nas je zagarantovana."
        img="/images/services-section.png"
        dir="left"
      >
        <Button>Bukiraj online</Button>
      </CustomSection>

      <AdditionalSection>
          <AdditionalInfo title="RVG (Radioviziografija)" desc="– je digitalno snimanje zuba koje do 90% manje zrači od klasičnog RTG-a na kog smo navikli u Domovima zdravlja. Prednosti RVG-a su brojne: omogućuje momentalni pristup i analizu snimka, precizna digitalnu dijagnostiku. Kompjuterski program kojm se služimo za RVG, između ostalog, omogućuje nam precizno mjerenje dužina korijenskih kanala i dodatne analize u samom kanalu zuba."/>
          <AdditionalInfo title="OPG (Ortopantomogram – panoramic snimak)" desc="predstavlja digitalni snimak gornje i donje vilice , kompletanog zubnog statusa I koštanih struktura. Omogućuje nam postavljanje brze i precizne dijagnoze, istovremeno unapređujući kvalitet rada ordinacije uz poboljšanu komunikaciju s pacijentima i kolegama. Pruža izvanredno kvalitetnu, čistu i optimalno eksponiranu sliku u samo nekoliko sekundi. Stomatologu je omogućena jednostavna analiza s brojnim dodatnim alatima za obradu dobijene radiološke slike."/>
      </AdditionalSection>

      <ContactStrip text="Imate pitanja? Kontaktirajte nas" />
    </>
  );
}

const AdditionalSection = styled.section`
  background: ${({ theme }) => theme.beige};
  padding:5rem;
` 
