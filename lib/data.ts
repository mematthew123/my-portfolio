import kootsImg from '/public/koots.png';
import huffordImg from '/public/hufford.png';
import mckayImg from '/public/mckay.png';
import zephyrImg from '/public/zephyr.png';
import adoptImg from '/public/adopt.png';
import buzzImg from '/public/buzz.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Framer Motion',
  'Tailwind',
  'Styled Components',
  'Git',
  'a11y',
  'Shopify',
  'WordPress',
  'Redux',
  'Sanity',
  'GraphQL',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Java',
  'PHP',
] as const;

export const projectsData = [
  {
    title: 'Kootenai Organics',
    description:
      'I built this PWA (Progressive Web App) with offline usage for a local Dispensary. It uses Sanity as a headless CMS for content and Auth. Next.js and Tailwind for the front-end. There are integrations IndicaOnline, Resend, and Google Maps.',

    tags: [
      'Next.js',
      'Sanity',
      'Tailwind',
      'IndicaOnline',
      'Resend',
      'Google Maps',
      'TypeScript',
      'Framer Motion',
      'PWA',
      'JWT',
    ],
    imageUrl: kootsImg,
    liveLink: 'https://kootenaiorganics.com',
  },
  {
    title: 'Hufford Homestead',
    description:
      ' A D2C (Direct to Consumer) site for a local orgainc farm. Built using Nextjs and Sanity CMS.',
    tags: ['Javascript', 'Next.js', 'Tailwind', 'Sanity', 'Vercel Analytics'],
    imageUrl: huffordImg,
    liveLink: 'https://huffordhomestead.com',
  },
  {
    title: 'Zephyr Pixels',
    description:
      ' Marketing site for web development agency looking to help small businesses and attract new clients.',
    tags: ['Astro', 'Tailwind', 'FormSpree'],
    imageUrl: zephyrImg,
    liveLink: 'https://zephyrpixels.dev',
  },
  {
    title: 'McKay Painting',
    description:
      ' A website for a local Painting Company built using Jeckyll and Decap CMS.',
    tags: ['Jeckyll', 'Decap CMS', 'scss', 'a11y'],
    imageUrl: mckayImg,
    liveLink: 'https://mckaypainting.us',
  },
  {
    title: 'Buzz Co.',
    description:
      'The prototype for what would go onto become Kootenai Organics. Instead of Integrating with IndicaOnline, it uses a custom built cart and checkout system.',
    tags: ['Next.js', 'Tailwind', 'Petfinder API', 'TypeScript', 'Twillio'],
    imageUrl: buzzImg,
    liveLink: 'https://buzzco.vercel.app',
  },

  {
    title: 'Adopt MT',
    description:
      'Utlizing the Petfinder API, I built a site to help rehome animals in Western Montana. Custom hook to keep token fresh, and implemtned Clerk for auth.',
    tags: ['Next.js', 'Tailwind', 'Petfinder API', 'TypeScript', 'Clerk'],
    imageUrl: adoptImg,
    liveLink: 'https://www.adoptmt.org',
  },
] as const;
