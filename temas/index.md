---
layout: default
title: "Temas"
description: "Los hilos de Mesa Docente: la IA en la educación, derecho a derecho. Autonomía cognitiva, privacidad, decisiones justas, equidad y criterio docente."
permalink: /temas/
---
<div class="fade-in">
  <section class="hero">
    <div class="container"><div class="reading">
      <p class="eyebrow">Temas</p>
      <h1 class="hero__title">La IA en la educación, derecho a derecho</h1>
      <p class="hero__lead">Cada artículo mira la IA educativa desde un derecho o una condición que conviene proteger, y termina proponiendo una vía para hacerlo mejor. Estos son los cinco hilos que recorren el blog: entra en el que te toque de cerca.</p>
    </div></div>
  </section>

  <section class="section section--tight">
    <div class="container">
      <div class="tema-cards">
        {%- for tema in site.data.temas -%}
        {%- assign n = 0 -%}
        {%- assign posts_tema = site.categories[tema.slug] -%}
        {%- if posts_tema -%}{%- assign n = posts_tema.size -%}{%- endif -%}
        <a class="tema-card" href="{{ '/temas/' | append: tema.slug | append: '/' | relative_url }}">
          <p class="tema-card__name">{{ tema.nombre }}</p>
          <p class="tema-card__lema">{{ tema.lema }}</p>
          <p class="tema-card__meta">
            {%- if n > 0 -%}
            {{ n }} artículo{% if n != 1 %}s{% endif %} <span aria-hidden="true">&rarr;</span>
            {%- else -%}
            Próximamente
            {%- endif -%}
          </p>
        </a>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      {% include newsletter.html id="nl-temas" title="No te pierdas el próximo hilo" text="Cada dos semanas, un artículo nuevo en uno de estos cinco temas. Directo a tu correo." %}
    </div>
  </section>
</div>
