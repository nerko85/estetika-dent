const members = [
  {
    id: 1,
    heading: "Dr Bojan Petrović",
    desc: "Doktor stomatologije",
    img: "/images/team-bojan-petrovic.png",
  },
  {
    id: 2,
    heading: "Dr Bojana Koričić",
    desc: "Doktor stomatologije",
    img: "/images/team-bojana-koricic.png",
  },
  {
    id: 3,
    heading: "Dr Igor Petković",
    desc: "Doktor stomatologije",
    img: "/images/team-igor-petkovic.png",
  },
  {
    id: 4,
    heading: "Jelena Ilić",
    desc: "Asistent",
    img: "/images/team-jelena-ilic.png",
  },
  {
    id: 5,
    heading: "Kristina Adžić",
    desc: "Asistent",
    img: "/images/team-kristina-adzic.png",
  },
  {
    id: 6,
    heading: "Zorica Živković",
    desc: "Asistent",
    img: "/images/team-zorica-zivkovic.png",
  },
];

const team = [
  {
    id: 1,
    img: "/images/damir-isakovic-testimonial.png",
    name: "Damir Isaković",
    desc:
      "Ordinaciju Estetika Dent mi je preporučila prijateljica. Od prve posjete sam osjetio prijateljski pristup, trud i odgovornost. Ordinacija je moderna i raduje me novi ponovni odlazak stomatologu.",
  },
  {
    id: 2,
    img: "/images/danka-radic-testimonial.png",
    name: "Danka Radić",
    desc:
      "Moj dugogodišnji strah od posjete stomatologu je prestao dolaskom u ordinaciju Estetika Dent. Doktori su veoma je strpljivi u radu s pacijentima i imaju veoma prijatan odnos. Profesionalni su i odgovorni.",
  },
  {
    id: 3,
    img: "/images/filip-nikolic-testimonial.png",
    name: "Filip Nikolić",
    desc:
      "Sve pohvale za ordinaciju Estetika Dent na profesionalnosti, ljubaznosti i stručnosti. Doktori pacijentima cijeli postupak rada u detalje objasne te strpljivo odgovaraju na sva pitanja. Prezadovoljan sam. Vidimo se ponovo.",
  },
];

const company = {
  name: "Estetika Dental",
  address: [
    {
      id: 1,
      name: "Derventa",
      address: "7440 DERVENTA",
      location: "Lug 64, 74 400 Derventa",
      workingHours: {
        from: {
          day: "MON",
          hour: "8:00AM",
        },
        to: {
          day: "FRI",
          hour: "5:00PM",
        },
      },
      phone: "+387 053 310 490",
      mobile: "+387 065 742 906",
      email: "estetikadent@teol.net",
    },
    {
      id: 2,
      name: "Gradačac",
      address: "7440 GRADAČAC",
      location: "6.bataljona bb, Gradačac 76250",
      workingHours: {
        from: {
          day: "MON",
          hour: "8:00AM",
        },
        to: {
          day: "FRI",
          hour: "5:00PM",
        },
      },
      phone: "+387 53 310 490",
      mobile: "+387 65 742 906",
      email: "estetikadent@teol.net",
    },
  ],
};

const accomodations = [
  {
    id: 1,
    title: "Prijatna atmosfera",
    desc:
      "Od prvoga ulaska u ordinaciju, preko kontakta sa zaposlenim osobljem, pa do postupka primjene adekvatne terapije.",
    img: "/images/feeling-great.svg",
  },
  {
    id: 2,
    title: "Moderna oprema",
    desc:
      "Od samih početaka ulažemo u opremu i kontinuirano obrazovanje kadra.",
    img: "/images/world-class.svg",
  },
  {
    id: 3,
    title: "Povjerenje i sigurnost",
    desc:
      "Vrhunski i cjelovit stomatološki tretman na jednom mjestu. Kod nas dolazite jer želite, a ne jer morate.",
    img: "/images/personalized.svg",
  },
];

const services = [
  {
    id: 1,
    title: "Endodoncija",
    desc:
      "Liječenje zuba, koje se može sprovesti u jednoj ili u više posjeta što zavisi od konkretne situacije.",
    img: "/images/dental-checkup.png",
  },
  {
    id: 2,
    title: "Estetika Stomatologije",
    desc:
      "Izbjeljivanje zuba Estetski ispuni Uklanjanje kamenca i poliranje zuba Air flow Ugradnja zubnog nakita",
    img: "/images/children.png",
  },
  {
    id: 3,
    title: "Mobilna Stomatološka Srotetika",
    desc:
      "U slučajevima kada iz različitih razloga nije moguće ugraditi fiksne protetske nanadoknade, mobilna protetika nudi adekvatno rješenje.",
    img: "/images/veneers.png",
  },
  {
    id: 4,
    title: "RTG Dijagnostika",
    desc:
      "Digitalna dijagnostika RVG (Radioviziografija) OPG (Ortopantomogram – panoramic snimak)",
    img: "/images/emergency.png",
  },
];

const faqs = [
  {
    id: 1,
    question:
      "Da li je izbjeljivanje zuba štetno?",
    answer:
      "Izbjeljivanje zuba je tretman kojim se postižu svjetlije nijanse prirodnih zuba, koji vremenom uslijed konzumacije obojene hrane ili pića, kao i kod pušača mijenjaju boju. Takodje zubi kod kojih je urađeno korijensko liječenje vremenom dobijaju tamniju nijansu. Izbjeljivanje zuba u kontrolisanim uslovima nije štetno. Zubi podvrgnuti tretmanu bijeljenja nakon toga se premazuju flourom čime se ojačava njihova caklina.",
  },
  {
    id: 2,
    question: "Šta je zalivanje fisura?",
    answer:
      "Zalivanje fisura je postupak premazivanja stalnih bocnih zuba u cilju njihove zaštite. Koristi se kao važna preventivna mjera u sprečavanju pojave karijesa na bočnim zubima, naravno uz pravilno održavanje oralne higijene. Najčešće se radi kod djece uzrasta između 5 i 10 godina.",
  },
  {
    id: 3,
    question:
      "Da li je potrebno popravljati mliječne zube?",
    answer:
      "Mliječne zubiće je potrebno popraviti iako će vremenom doći do njihove smjene. Mliječni zubi imaju veliki značaj u razvoju ortognatnog sistema kod djece. Takođe prisutni kvarni mliječni zubi u ustima čine i stalne zube znatno podložnijim kvarenju.",
  },
  {
    id: 4,
    question: "Da li se stomatološke intervencije mogu obavljati u trudnoći?",
    answer:
      "Stomatološke intrvencije se smiju obavljati u trudnoći, ukoliko je trudnoća uredna i bez komplikacija. Najpoželjnije je stomatološke intervencije, naravno ukoliko je to moguće uraditi u drugom tromjesečju. Ne postoje nikakve kontraindikacije za primanje anestezije u trudnoći.",
  },
];

const comfort = [
  {
    id: 1,
    title: "Prijatna atmosfera",
    desc:
      "Od prvoga ulaska u ordinaciju, preko kontakta sa zaposlenim osobljem, pa do postupka primjene adekvatne terapije.",
    img: "/images/feeling-great.svg",
  },
  {
    id: 2,
    title: "Moderna oprema",
    desc:
      "Od samih početaka ulažemo u opremu i kontinuirano obrazovanje kadra.",
    img: "/images/world-class.svg",
  },
  {
    id: 3,
    title: "Povjerenje i sigurnost",
    desc:
      "Vrhunski i cjelovit stomatološki tretman na jednom mjestu. Kod nas dolazite jer želite, a ne jer morate.",
    img: "/images/personalized.svg",
  }
];

export { members, team, company, accomodations, services, faqs, comfort };
