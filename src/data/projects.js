
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
    name: 'Game Store',
    category: 'FULL-STACK E-COMMERCE APPLICATION',
    description:
      'A digital game storefront inspired by the Epic Games Store, featuring game discovery, featured releases, discounts, wishlists, and a complete shopping experience.',
    problem:
      'Discovering games, comparing prices, tracking discounts, and managing purchases can be inconvenient across different platforms. Game Store provides a centralized platform to browse games, explore upcoming releases, manage wishlists, and purchase games through a streamlined interface.',
    features: [
      'Dark-themed storefront with a featured game carousel',
      'Game catalog with search, genre filters, sorting, and pagination',
      'Game details with descriptions, trailers, screenshots, and system requirements',
      'Dedicated sections for new releases, top sellers, on-sale games, and upcoming games',
      'User authentication, profiles, and purchase history',
      'Shopping cart, wishlist, and order management',
      'Discount management with sale prices and expiration dates',
      'Admin dashboard for game CRUD, image uploads, and catalog management',
      'Order management, customer management, and sales analytics',
      'Responsive UI for desktop, tablet, and mobile devices',
    ],
    stack: ['Laravel', 'MySQL', 'Blade'],
    status: 'IN DEVELOPMENT',
    featured: false,
    image: '/images/projects/gs.png',
    imageAlt: 'Dark-themed digital game store inspired by the Epic Games Store',
    github: 'https://github.com/Rcxtor/GS',
    live: '',
  },
];

export default projects;
