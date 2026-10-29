/*
  main.js
  1. Menú hamburguesa en móvil
  2. Pinta las tarjetas de bowls a partir de BOWLS (assets/js/data/bowls.js)
  3. Pinta las tarjetas de tiendas a partir de TIENDAS (assets/js/data/tiendas.js)
  4. Año del pie
*/

(function () {
  "use strict";

  /* ---------- 1. Menú móvil ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const abierto = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(abierto));
    });

    // Al pulsar un enlace del menú se cierra (útil en móvil)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Utilidad: crear elementos sin innerHTML ---------- */
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  /* ---------- 2. Bowls ---------- */
  const listaBowls = document.getElementById("lista-bowls");

  if (listaBowls && typeof BOWLS !== "undefined") {
    BOWLS.forEach(function (b) {
      const card = el("li", { class: "bowl-card" }, [
        el("div", { class: "bowl-card__media" }, [
          el("img", { src: b.imagen, alt: "Bowl " + b.nombre, loading: "lazy", width: "600", height: "600" })
        ]),
        el("div", { class: "bowl-card__body" }, [
          el("h3", { class: "bowl-card__title", text: b.nombre }),
          el("p", { class: "bowl-card__ingredients", text: b.ingredientes }),
          el("a", {
            class: "btn btn--primary btn--block",
            href: b.uberEatsUrl,
            target: "_blank",
            rel: "noopener",
            text: "Pedir en Uber Eats"
          }),
          el("p", { class: "bowl-card__note", text: "Se abre en Uber Eats. Allí eliges tamaño y terminas el pedido." })
        ])
      ]);
      listaBowls.appendChild(card);
    });
  }

  /* ---------- 3. Tiendas ---------- */
  const listaTiendas = document.getElementById("lista-tiendas");

  function urlMapa(t) {
    if (t.mapaUrl) return t.mapaUrl;
    return "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Brasil Açaí, " + t.direccion);
  }

  if (listaTiendas && typeof TIENDAS !== "undefined") {
    TIENDAS.forEach(function (t) {
      const horas = el("p", { class: "store-card__hours" },
        t.horario.map(function (h) { return el("span", { text: h }); })
      );

      const acciones = el("div", { class: "store-card__actions" }, [
        el("a", { class: "btn btn--outline btn--sm", href: urlMapa(t), target: "_blank", rel: "noopener", text: "Cómo llegar" }),
        t.telefono
          ? el("a", { class: "btn btn--outline btn--sm", href: "tel:" + t.telefono.replace(/\s+/g, ""), text: t.telefono })
          : null
      ]);

      const card = el("li", { class: "store-card" }, [
        el("h3", { class: "store-card__name", text: t.nombre }),
        el("p", { class: "store-card__address", text: t.direccion }),
        horas,
        acciones
      ]);
      listaTiendas.appendChild(card);
    });
  }

  /* ---------- 4. Año ---------- */
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());
})();
