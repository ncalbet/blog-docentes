---
layout: default
title: "Seguir el blog"
description: "Recibe cada artículo de Mesa Docente en tu correo o en tu lector de RSS. Un texto de fondo sobre IA y educación cada dos semanas."
permalink: /seguir/
---
<div class="fade-in">
  <section class="hero">
    <div class="container"><div class="reading">
      <p class="eyebrow">Seguir el blog</p>
      <h1 class="hero__title">No te pierdas ningún artículo</h1>
      <p class="hero__lead">Publico un texto de fondo cada dos semanas. Elige cómo prefieres recibirlo: en tu correo o en tu lector de RSS. Sin algoritmos de por medio.</p>
    </div></div>
  </section>

  <!-- Opción 1 · Correo (reutiliza el bloque de suscripción del sitio) -->
  <section class="section">
    <div class="container">
      {% include newsletter.html id="nl-seguir" title="Recíbelo en tu correo" text="La forma más sencilla: cada entrega, directa a tu bandeja el día que se publica. Sin spam y te das de baja cuando quieras." %}
    </div>
  </section>

  <!-- Opción 2 · RSS -->
  <section class="section">
    <div class="container">
      <div class="newsletter">
        <p class="eyebrow eyebrow--accent">O por RSS</p>
        <h2>¿Usas un lector de RSS?</h2>
        <p>Si sigues blogs con apps como Feedly, Inoreader o NetNewsWire, copia esta dirección y pégala en tu lector para recibir cada artículo nuevo:</p>
        <form class="newsletter-form" style="margin-top:18px" onsubmit="return false">
          <label class="visually-hidden" for="rss-url">Dirección del feed RSS</label>
          <input class="field" id="rss-url" type="text" value="https://mesadocente.com/feed.xml" readonly aria-readonly="true" style="font-family:var(--mono);font-size:.95rem">
          <button class="btn" type="button" id="rss-copy-btn">Copiar</button>
        </form>
        <p class="newsletter__fine">¿No conoces el RSS? Es la manera de seguir un blog sin depender del correo ni de las redes: con una de esas apps —gratuitas— los artículos nuevos te llegan solos, sin que nadie decida por ti qué ves.</p>
      </div>
    </div>
  </section>
</div>

<script>
(function () {
  var btn = document.getElementById('rss-copy-btn');
  var url = document.getElementById('rss-url');
  if (!btn || !url) return;
  var original = btn.textContent;
  btn.addEventListener('click', function () {
    try { url.focus(); url.select(); url.setSelectionRange(0, url.value.length); } catch (e) {}
    var ok = function () {
      btn.textContent = '¡Copiado!';
      setTimeout(function () { btn.textContent = original; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url.value).then(ok).catch(function () {
        try { document.execCommand('copy'); ok(); } catch (e) {}
      });
    } else {
      try { document.execCommand('copy'); ok(); } catch (e) {}
    }
  });
})();
</script>
