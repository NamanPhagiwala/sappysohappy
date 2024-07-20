export type TestimonialType = {
  id: number;
  name: string;
  testimonial: string;
  image: string;
};

export const juryTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: `Sarah Sham`,
    testimonial: `Akshay from HiveKraft, reached me out for their first competition as a Jury for covid
      responsive design competition, I really liked the approach of making the
      community of designers strong by curating competitions in real time for young
      budding designers.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/sarah.jpg",
  },
  {
    id: 2,
    name: `Veeram Shah`,
    testimonial: `Design competition “Co living and Co working spaces” was well curated, I was really
      impressed with the fresh ideas by the designers.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/veeram.jpg",
  },
  {
    id: 3,
    name: `Ali Baldiwala`,
    testimonial: `I was the Jury for “Stone Flair” competition, For living room décor, “float” was one of
      the best entry according to me, which was quite creative and innovative with fluid
      and seamless approach.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/Baldiwala.jpg",
  },
  {
    id: 4,
    name: `Saniya Kantawala`,
    testimonial: `When we say go crazy in design competitions, this is what we mean. It means go wild, get creative. Think off the norm and the usual, That’s when the most interesting and ground breaking ideas come to mind and that’s what this entry brought out for me.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/Saniya.jpg",
  },
];

export const clientTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: `Anmol Roongta, Developer & Builder`,
    testimonial: `Through HiveKraft, I launched a design competition “Co living and co working space”for one of my upcoming projects in
    Jaipur. I got amazing design options as per my requirement.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/anmolroongta.jpeg",
  },
  {
    id: 2,
    name: `Nikhil Tiwari, Founder Topstona`,
    testimonial: `It was a wonderful experience, with HiveKraft we curated a series of product designing
    competition “Stone flair” which was a good marketing strategy for us.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/NikhilTiwari.jpeg",
  },
  {
    id: 3,
    name: `Ar Sumati Agarwal, Studio Arc.S`,
    testimonial: `I collaborated with HiveKraft for fresh ideas for an upcoming school project in
    Haryana, it was a creative approach to get multiple conceptual ideas and I was
    able to hire the designer who was a winner in this competition.`,
    image: "https://hivekraft.s3.ap-south-1.amazonaws.com/jury/studioarcs.jpg",
  },
  // {
  //   id: 4,
  //   name: `Ar Preet Kanwar singh, Creative Director, DPS Store`,
  //   testimonial: `We collaborated with HiveKraft along with Viega,
  //   Delta and Vitra for the competition “The Advent of Opulence”. We curated a
  //   workshop for all the participants with all the brands to give an overview of the
  //   technicalities behind washroom designing.`,
  //   image: 'https://hivekraft.s3.ap-south-1.amazonaws.com/jury/preetkanwar.jpg'
  // }
];
