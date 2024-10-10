// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_campat_work', label: 'How CAMPAT Works?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '#contacts', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  type Camp = {
    camp: string,
    location: string,
    img: string,
    joined: string
  }

  export const CAMPS: Camp[] = [
    {
      camp: "Mount Catherine",
      location: "St. Catherine, South Sinai",
      img: "bg-bg-img-1",
      joined: "72"
    },
    {
      camp: "Ras Mohamed",
      location: "Sharm Al-Shiekh, South Sinai",
      img: "bg-bg-img-2",
      joined: "47"
    },
    {
      camp: "Dahab",
      location: "Dahab, South Sinai",
      img: "bg-bg-img-3",
      joined: "126"
    },
    {
      camp: "Siwa Oasis",
      location: "Siwa, Matrouh",
      img: "bg-bg-img-4",
      joined: "38"
    },
    {
      camp: "Garet Gohannam (Mount of Hell)",
      location: "Whale Valley, Faiyum",
      img: "bg-bg-img-5",
      joined: "41"
    },
    {
      camp: "Qubbet Al-Hawa (Dome of The Wind)",
      location: "Aswan, Aswan",
      img: "bg-bg-img-6",
      joined: "32"
    },
    {
      camp: "Theban Mounts",
      location: "Theban Hills, Luxor",
      img: "bg-bg-img-7",
      joined: "27"
    }
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Offline maps',
      icon: '/map.svg',
      variant: 'green',
      description:
        'Our application supports realtime maps which can be cached in memory for offline navigation, so you need not worry about the signal at campsite!',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an adventure with your loved ones. CAMPAT provides marvellous offers on holidays. What are you waiting for?",
    },
    {
      title: 'Augmented reality technology',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'CAMPAT uses augmented reality technology to guide your climbing or hiking trail. This feature is also available offline. How great is that?'
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Our community helps unlock new adventures and paths all over Egypt, so we always have something up! Stay tuned for the new unfrgettable experiences.',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About CAMPAT',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing and beyond', 'Hiking CAMPAT', 'CAMPAT hill campers'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'info@campat.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };