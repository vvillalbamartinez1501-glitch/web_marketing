# Brasil Açaí · web informativa

Web estática (HTML, CSS y JavaScript sin dependencias) para Brasil Açaí.
Página informativa: muestra los bowls, deriva los pedidos a Uber Eats y
capta interesados en la franquicia. No hay compra en la propia web.

## Estructura

```
web_marketing/
├── index.html              Página principal (una sola página con anclas)
├── legal/                  Aviso legal, privacidad y cookies (pendientes de texto)
├── assets/
│   ├── css/styles.css      Estilos mobile-first con los tokens de la marca
│   ├── js/main.js          Menú móvil y pintado de bowls y tiendas
│   ├── js/data/bowls.js    Carta: nombre, ingredientes, imagen, enlace Uber Eats
│   ├── js/data/tiendas.js  Tiendas: dirección, teléfono, horario, mapa
│   └── img/                Imágenes propias (ahora mismo se usan las de brasil-acai.com)
└── README.md
```

Para cambiar la carta o las tiendas basta con editar los archivos de `assets/js/data/`.

## Diseño

Tokens tomados de la web actual (brasil-acai.com):

| Elemento        | Valor                                 |
|-----------------|---------------------------------------|
| Morado          | `#59257C`                             |
| Lavanda         | `#F2F0F8` (fondos), `#E3DDF3` (cabecera) |
| Títulos         | Cormorant Infant 700                  |
| Texto           | Cabin 400 / 500                       |
| Botones         | DM Sans 600, radio 30px               |

## Pedidos en Uber Eats

Cada bowl tiene su campo `uberEatsUrl`. Hoy todos apuntan a la tienda.
Uber Eats permite enlazar un plato concreto (se abre su ficha con el botón
de añadir al carrito); esos enlaces se obtienen desde la propia app o web
de Uber Eats, abriendo el plato y copiando la URL. Cuando se tengan, se
pegan en `bowls.js` y no hay que tocar nada más.

## Pendiente de confirmar con el cliente

- Teléfonos de Tres Cantos, Villanueva, Valdemoro y las tres tiendas de Valencia.
- Horarios (tomados de la web actual, en formato 12 h; aquí pasados a 24 h).
- Textos legales.
- Imágenes propias para `assets/img/` (ahora se enlazan desde brasil-acai.com).

## Desarrollo local

Abre `index.html` directamente en el navegador, o sirve la carpeta:

```bash
python -m http.server 5500
```

y entra en http://localhost:5500

## Despliegue en dinahosting

Es una web estática, así que no necesita PHP ni base de datos.

1. Entra en el panel de dinahosting y abre el gestor de archivos o usa FTP
   (los datos FTP están en Hosting → Accesos FTP).
2. Sube el contenido de esta carpeta (no la carpeta en sí) a la raíz pública
   del hosting, normalmente `/www` o `/httpdocs`. `index.html` debe quedar
   en esa raíz.
3. Activa el certificado SSL gratuito (Let's Encrypt) desde el panel y
   fuerza HTTPS.
4. Comprueba la web en móvil y escritorio.

No subas `.git/` ni `README.md` al hosting.
