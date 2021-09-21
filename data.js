const members = [
  {
    id: 1,
    heading: "Danijel Ruvic",
    desc: "Doktor stomatologije",
    img: "/images/team-danijel-ruvic.png",
  },
  {
    id: 2,
    heading: "Emina Ina",
    desc: "Doktor stomatologije",
    img: "/images/team-emina-ina.png",
  },
  {
    id: 1,
    heading: "Filip Skip",
    desc: "Doktor stomatologije",
    img: "/images/team-filip-skip.png",
  },
];

const team = [
  {
    id: 1,
    img: "/images/damir-isakovic-testimonial.png",
    name: "Damir Isakovic",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    id: 2,
    img: "/images/danka-radic-testimonial.png",
    name: "Danka Radic",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
  {
    id: 3,
    img: "/images/filip-nikolic-testimonial.png",
    name: "Filip Nikolic",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  },
];

const company = {
  name: "Estetika Dental",
  address: [
    {
      id: 1,
      location: "Lokacija 1, Ulica 1",
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
      phone: "062-829-234",
    },
    {
      id: 2,
      location: "Lokacija 2, Ulica 2",
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
      phone: "062-829-234",
    },
  ],
};

export { members, team, company };
