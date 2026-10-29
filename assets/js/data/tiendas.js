/*
  Tiendas. Datos tomados de la página de Contacto de brasil-acai.com
  el 29/10/2026. Teléfonos y horarios pendientes de confirmar con el cliente
  donde se indica null.

  mapaUrl: si no hay enlace corto de Google Maps, se genera uno de búsqueda
  a partir de la dirección (ver main.js).
*/

const TIENDAS = [
  {
    nombre: "Majadahonda",
    direccion: "C. Gran Vía, 2, Local 30, 28220 Majadahonda, Madrid",
    telefono: "+34 911 341 323",
    horario: ["Lunes: cerrado", "Martes a viernes: 10:00 – 14:00 y 16:30 – 22:00", "Sábado y domingo: 10:00 – 14:00 y 16:00 – 22:00"],
    mapaUrl: "https://maps.app.goo.gl/9L4xdouRistSmHCK6"
  },
  {
    nombre: "Pozuelo de Alarcón",
    direccion: "Av. de Europa, 2, 28224 Pozuelo de Alarcón, Madrid",
    telefono: "+34 679 545 625",
    horario: ["Lunes y martes: 09:00 – 14:00 y 15:00 – 22:00", "Miércoles: cerrado", "Jueves a domingo: 09:00 – 14:00 y 15:00 – 22:00"],
    mapaUrl: "https://maps.app.goo.gl/KSF9zGu6VUUHRBog6"
  },
  {
    nombre: "Boadilla del Monte",
    direccion: "Av. Infante Don Luis, 3, Local 7, 28660 Boadilla del Monte, Madrid",
    telefono: "+34 917 270 265",
    horario: ["Lunes a domingo: 09:00 – 22:00"],
    mapaUrl: "https://maps.app.goo.gl/YzSxFFJpNAHBExGy9"
  },
  {
    nombre: "Villaviciosa de Odón",
    direccion: "Pl. Mercado, 12, 28670 Villaviciosa de Odón, Madrid",
    telefono: "+34 915 526 232",
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: "https://maps.app.goo.gl/ZBWQ7EML3eeLD9D18"
  },
  {
    nombre: "Tres Cantos",
    direccion: "Av. de España, 13, 28760 Tres Cantos, Madrid",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: null
  },
  {
    nombre: "Villanueva de la Cañada",
    direccion: "Calle Cristo, 35, 28691 Villanueva de la Cañada, Madrid",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: null
  },
  {
    nombre: "Valdemoro",
    direccion: "Calle Narváez, 6, 28342 Valdemoro, Madrid",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: null
  },
  {
    nombre: "Valencia · Campanar",
    direccion: "Av. de Tirso de Molina, 14, 46009 València",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: "https://maps.app.goo.gl/JQ7niuqQXTUjdSGL9"
  },
  {
    nombre: "Valencia · Centro",
    direccion: "C/ de la Pau, 38, 46003 València",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: null
  },
  {
    nombre: "L'Eliana",
    direccion: "Av. de les Corts Valencianes, 35, 46183 L'Eliana, València",
    telefono: null,
    horario: ["Lunes: cerrado", "Martes a domingo: 09:00 – 22:00"],
    mapaUrl: null
  }
];
