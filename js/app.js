(function () {
  "use strict";
  var cfg = window.KALLPA_CONFIG || {};
  var lotes = window.KALLPA_LOTES || {};

  // Menú móvil
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("menu");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Contacto y pie de página (solo se muestran los datos completados en config.js)
  var c = document.getElementById("contacto");
  if (c) {
    var html = "<h3>Contacto</h3>";
    if (cfg.correo) html += '<p>Correo: <a href="mailto:' + esc(cfg.correo) + '">' + esc(cfg.correo) + "</a></p>";
    if (cfg.whatsapp) html += '<p>WhatsApp: <a href="https://wa.me/' + esc(cfg.whatsapp) + '" rel="noopener">+' + esc(cfg.whatsapp) + "</a></p>";
    if (cfg.instagram) html += '<p>Instagram: <a href="https://instagram.com/' + esc(cfg.instagram) + '" rel="noopener">@' + esc(cfg.instagram) + "</a></p>";
    if (cfg.tiktok) html += '<p>TikTok: <a href="https://www.tiktok.com/@' + esc(cfg.tiktok) + '" rel="noopener">@' + esc(cfg.tiktok) + "</a></p>";
    if (cfg.facebook) html += '<p>Facebook: <a href="https://facebook.com/' + esc(cfg.facebook) + '" rel="noopener">' + esc(cfg.facebook) + "</a></p>";
    if (!cfg.correo && !cfg.whatsapp && !cfg.instagram && !cfg.tiktok && !cfg.facebook) {
      html += "<p>Pronto publicaremos nuestros canales de atención.</p>";
    }
    if (cfg.direccion) html += '<p class="small-print">' + esc(cfg.direccion) + "</p>";
    c.innerHTML = html;
  }
  var legal = document.getElementById("legal");
  if (legal) legal.textContent = (cfg.razonSocial || "KALLPA+") + " · " + (cfg.direccion || "Lima – Perú");

  // Consulta de trazabilidad
  var form = document.getElementById("lote-form");
  var input = document.getElementById("lote");
  var out = document.getElementById("resultado");

  function render(code) {
    var key = code.trim().toUpperCase().replace(/\s+/g, "");
    if (!key) return;
    if (!/^KP-\d{6}-\d{2}$/.test(key)) {
      out.innerHTML = '<h3>Código no válido <span class="badge warn">Revisa el formato</span></h3>' +
        "<p>El código de lote tiene la forma <code>KP-AAMMDD-NN</code>, por ejemplo <code>KP-261201-01</code>.</p>";
      return;
    }
    var L = lotes[key];
    if (!L) {
      out.innerHTML = "<h3>" + esc(key) + ' <span class="badge warn">No encontrado</span></h3>' +
        "<p>Aún no tenemos registrado este lote en línea. Si tu botella tiene este código, escríbenos y te enviaremos su información.</p>";
      return;
    }
    out.innerHTML =
      "<h3>" + esc(key) + ' <span class="badge">' + esc(L.estado) + "</span>" + (L.ejemplo ? ' <span class="badge warn">Lote de ejemplo</span>' : "") + "</h3>" +
      "<dl><dt>Producción</dt><dd>" + esc(L.produccion) + "</dd><dt>Vencimiento</dt><dd>" + esc(L.vencimiento) + "</dd><dt>Tamaño del lote</dt><dd>" + esc(L.botellas) + " botellas</dd></dl>" +
      '<div class="step"><dl><dt>Quinua</dt><dd>' + esc(L.quinua.proveedor) + " · recibida el " + esc(L.quinua.recepcion) + " · " + esc(L.quinua.control) + "</dd>" +
      "<dt>Durazno</dt><dd>" + esc(L.durazno.proveedor) + " · recibido el " + esc(L.durazno.recepcion) + " · " + esc(L.durazno.control) + "</dd>" +
      "<dt>Maca / kiwicha</dt><dd>" + esc(L.maca) + " / " + esc(L.kiwicha) + "</dd></dl></div>" +
      '<div class="step"><dl><dt>pH</dt><dd>' + esc(L.proceso.ph) + "</dd><dt>°Brix</dt><dd>" + esc(L.proceso.brix) + "</dd>" +
      "<dt>Pasteurización</dt><dd>" + esc(L.proceso.pasteurizacion) + "</dd><dt>Llenado</dt><dd>" + esc(L.proceso.llenado) + "</dd>" +
      "<dt>Liberado por</dt><dd>" + esc(L.liberado) + "</dd></dl></div>";
  }

  if (form) {
    form.addEventListener("submit", function (e) { e.preventDefault(); render(input.value); });
  }
  // Permite enlaces directos: ?lote=KP-261201-01
  var params = new URLSearchParams(window.location.search);
  var q = params.get("lote");
  if (q && input) { input.value = q; render(q); }
})();
