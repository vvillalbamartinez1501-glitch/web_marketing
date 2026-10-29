/*
  Carta de bowls.
  Para añadir, quitar o cambiar un bowl basta con editar este archivo:
  no hay que tocar el HTML.

  uberEatsUrl: hoy todos apuntan a la tienda de Uber Eats.
  Cuando se tengan los enlaces de cada plato (los que abren el
  producto directamente para añadirlo al carrito), se sustituyen aquí.
*/

const UBER_EATS_TIENDA =
  "https://www.ubereats.com/es/store/brasil-acai-majadahonda/8gPb_V0mSwmlzMsrRPQXyQ";

const IMG_BASE = "https://brasil-acai.com/wp-content/uploads/2026/10/";

const BOWLS = [
  {
    nombre: "Manaos",
    ingredientes: "Piña, kiwi, plátano, crema de cacahuete, muesli o granola y coco rallado.",
    imagen: IMG_BASE + "Manaos-Bowl-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Iguaçu",
    ingredientes: "Plátano, piña, dulce de leche, muesli o granola y galleta.",
    imagen: IMG_BASE + "Iguazu-Bowl-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Porto Alegre",
    ingredientes: "Arándanos, fresa, piña, miel, cacahuete y coco rallado.",
    imagen: IMG_BASE + "Porto-Alegre-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Salvador de Bahía",
    ingredientes: "Mango, plátano, fresa, crema de maracuyá, pepitas de chocolate, galleta y coco rallado.",
    imagen: IMG_BASE + "salvador-de-bahia-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "São Paulo",
    ingredientes: "Plátano, fresa, Nutella®, galleta, granola o muesli y Pirulín.",
    imagen: IMG_BASE + "sao-pablo-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Río de Janeiro",
    ingredientes: "Granola, arándanos, plátano, piña, proteína en polvo y crema de cacahuete.",
    imagen: IMG_BASE + "rio-de-janeiro-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Fortaleza",
    ingredientes: "Açaí Zero, mango, plátano, kiwi, yogur griego, miel, muesli o granola, semillas de chía y coco rallado.",
    imagen: IMG_BASE + "fortaleza-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  },
  {
    nombre: "Brasil Bowl",
    ingredientes: "Plátano, mango, piña, dulce de leche, leche condensada, pepitas de chocolate, Oreo® y leche en polvo.",
    imagen: IMG_BASE + "brasil-bowl-scaled-.png",
    uberEatsUrl: UBER_EATS_TIENDA
  }
];
