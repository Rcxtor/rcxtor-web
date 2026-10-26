
const projects = [
  {
    id: 1,
    name: 'Pet Heaven',
    category: 'FULL-STACK WEB APPLICATION',
    description:
      'A pet adoption platform with pet listings, favorites, and adoption request management.',
    problem:
      'Finding pets for adoption and managing adoption requests can be difficult. Pet Heaven provides a centralized platform to discover pets and manage the adoption process.',
    features: [
      'Pet listings with image uploads and search filters',
      'User authentication, profiles, and personalized dashboard',
      'Favorites and adoption request management',
      'Adoption status tracking and history',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'Axios'],
    status: 'DEPLOYED',
    featured: true,
    image: '/images/projects/pet-heaven.png',
    imageAlt: 'Pet Heaven pet adoption application',
    github: 'https://github.com/Rcxtor/Pet-Heaven',
    live: 'https://pet-heaven-gamma.vercel.app/',
  },
  {
    id: 2,
    name: 'TinyLink',
    category: 'FULL-STACK WEB APPLICATION',
    description:
      'A URL shortener with user authentication, link management, and click tracking.',
    problem:
      'Long URLs are difficult to share and manage. TinyLink provides a central place to create and track shortened links.',
    features: [
      'URL creation and short-code generation',
      'Authentication and protected routes',
      'Click tracking and link statistics',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'Axios'],
    status: 'DEPLOYED',
    featured: true,
    image: '/images/projects/tinylink.png',
    imageAlt: 'TinyLink URL shortener application',
    github: 'https://github.com/Rcxtor/laravel-url-shortener',
    live: 'https://laravel-url-shortener.vercel.app',
  },
  {
    id: 3,
    name: 'Pet Heaven',
    category: 'FULL-STACK WEB APPLICATION',
    description:
      'A pet adoption platform with pet listings, favorites, and adoption request management.',
    problem:
      'Finding pets for adoption and managing adoption requests can be difficult. Pet Heaven provides a centralized platform to discover pets and manage the adoption process.',
    features: [
      'Pet listings with image uploads and search filters',
      'User authentication, profiles, and personalized dashboard',
      'Favorites and adoption request management',
      'Adoption status tracking and history',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'Axios'],
    status: 'DEPLOYED',
    featured: false,
    image: '/images/projects/pet-heaven.png',
    imageAlt: 'Pet Heaven pet adoption application',
    github: 'https://github.com/Rcxtor/Pet-Heaven',
    live: 'https://pet-heaven-gamma.vercel.app/',
  },
];

export default projects;
