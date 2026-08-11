---
layout: default
title: "Blog"
description: "Todos los artículos de Mesa Docente: IA y educación con evidencia citada y con derechos. Un texto de fondo cada dos semanas."
permalink: /blog/
---
<div class="fade-in">
  <section class="hero">
    <div class="container"><div class="reading">
      <p class="eyebrow">Blog</p>
      <h1 class="hero__title">Todos los artículos</h1>
      <p class="hero__lead">Un texto de fondo cada dos semanas, con la investigación citada y verificable. Aquí están todos, del más reciente al primero.</p>
    </div></div>
  </section>

  {% if site.posts.size > 0 %}
  <section class="section section--tight">
    <div class="container">
      <p class="archive-count">{{ site.posts.size }} artículo{% if site.posts.size != 1 %}s{% endif %} publicado{% if site.posts.size != 1 %}s{% endif %} &middot; filtra por tema:</p>
      {% include temas-chips.html %}
    </div>
  </section>

  {%- assign anyos = site.posts | group_by_exp: "post", "post.date | date: '%Y'" -%}
  <section class="section section--tight">
    <div class="container">
      {% for anyo in anyos %}
      <div class="section-head"><h2>{{ anyo.name }}</h2></div>
      <ul class="post-list">
        {% for post in anyo.items %}{% include post-item.html post=post %}{% endfor %}
      </ul>
      {% endfor %}
    </div>
  </section>
  {% else %}
  <section class="section">
    <div class="container">
      <div class="empty-state">
        {% include mesa-mark.html size="40" simple="true" %}
        <h2>La mesa está puesta; el primer artículo llega pronto.</h2>
        <p>Publicamos un texto de fondo cada dos semanas. Deja tu correo y te aviso en cuanto esté el primero.</p>
      </div>
    </div>
  </section>
  {% endif %}

  <section class="section">
    <div class="container">
      {% include newsletter.html id="nl-blog" %}
    </div>
  </section>
</div>
