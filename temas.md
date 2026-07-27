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
      <p class="hero__lead">Cada artículo mira la IA educativa desde un derecho o una condición que conviene proteger, y termina proponiendo una vía para hacerlo mejor. Estos son los hilos que recorren el blog.</p>
    </div></div>
  </section>

  <section class="section">
    <div class="container">
      {% for tema in site.data.temas %}
      {%- assign posts = site.categories[tema.slug] -%}
      <div class="tema" id="{{ tema.slug }}">
        <p class="eyebrow eyebrow--accent">{{ tema.nombre }}</p>
        <p class="tema__lema">{{ tema.lema }}</p>
        {% if posts and posts.size > 0 %}
        <ul class="tema__list">
          {% for post in posts %}
          <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
        <p class="tema__empty">Próximamente.</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </section>
</div>
