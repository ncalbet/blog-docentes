---
layout: default
title: "Sobre este blog"
description: "Mesa Docente: un proyecto editorial independiente sobre cómo integrar la IA en la educación con evidencia, derechos y aprendizaje significativo, escrito para docentes de América Latina."
permalink: /sobre/
---
<div class="fade-in">
  <section class="hero">
    <div class="container"><div class="reading">
      <p class="eyebrow">Sobre este blog</p>
      <h1 class="hero__title">Una mesa de profesorado para integrar bien la IA</h1>
      <p class="article-dek">Mesa Docente es un proyecto editorial independiente sobre inteligencia artificial y educación. Parte de una idea sencilla: la IA ya está en el aula, pero por inercia, no pensada pedagógicamente, por lo que merece revisar las condiciones de uso de la IA en la educación para garantizar que su uso permita fortalecer el aprendizaje y respetar a su vez los derechos de quienes aprenden y enseñan.</p>
    </div></div>
  </section>

  <section class="container"><div class="reading">
    <div class="about-lead">
      <div class="about-portrait" role="img" aria-label="Marcador de imagen: retrato del autor"><span>retrato<br>del autor</span></div>
      <div class="about-bio">
        <p>Lo escribe <strong>Néstor Calbet</strong>, doctor en Derechos Humanos, profesor de secundaria en activo y colaborador docente en la Universitat Oberta de Catalunya. Antes de dar clase en secundaria pasó una década en derechos humanos y cooperación internacional —la misión de la OSCE en Kosovo, el Institut de Drets Humans de Catalunya, Lafede.cat, Ingeniería Sin Fronteras—, casi siempre diseñando y evaluando formación. La idea de «mesa» viene de ahí: una mesa redonda donde el profesorado se sienta como iguales a deliberar, sin cabecera. Aquí hay un colega que estudia con cuidado y comparte lo que encuentra, con la misma vocación honesta de quien prepara la clase para el próximo lunes.</p>
        <p>Sobre la IA circulan dos relatos: el que promete que salvará la escuela y el que augura que la arruinará. Este blog trabaja en un tercer terreno, el más útil para quien da clase: aprovechar lo que la IA ofrece de verdad y, a la vez, poner condiciones para que respete la privacidad, las garantías del alumnado y el criterio profesional de la docencia. La crítica está aquí al servicio de una propuesta: cada artículo termina señalando una vía, una práctica o un principio de diseño para hacerlo mejor.</p>
        {%- comment -%}
          El iD es el identificador público de autor: cualquiera puede comprobar en ORCID
          la trayectoria y las publicaciones de quien firma, sin fiarse de esta página.
        {%- endcomment -%}
        <p class="about-idline">Identificador público de autor: {% include orcid-id.html %}</p>
      </div>
    </div>

    <div class="reading">
      <h2>Un hilo, no artículos sueltos</h2>
      <p>Cada texto mira la IA educativa desde un derecho o una condición que conviene proteger, y regresa siempre a lo concreto del aula. Estos son los hilos que recorren el blog:</p>
      <ul>
        <li><strong>Pensar con la IA</strong>: usarla como andamiaje que se retira a medida que el alumnado sostiene el razonamiento por sí mismo.</li>
        <li><strong>Datos y privacidad</strong>: qué se registra de cada estudiante, con qué finalidad y con qué límites, sobre todo cuando se trata de menores.</li>
        <li><strong>Decisiones justas</strong>: cuando un sistema evalúa o acusa, qué garantías y qué derecho a réplica hacen falta antes de que decida sobre una persona.</li>
        <li><strong>Cerrar brechas</strong>: que la personalización llegue también a quien parte con menos recursos y competencias.</li>
        <li><strong>El criterio docente en el centro</strong>: formación y herramientas pensadas para fortalecer el juicio profesional y mantenerlo al mando de la decisión.</li>
      </ul>
      <p>Debajo de todos ellos hay una misma vara de medir: el aprendizaje significativo. Una integración de la IA vale la pena si consigue que el alumnado entienda mejor, y no solo si hace el proceso más rápido.</p>
    </div>

    <div class="about-cols">
      <div>
        <h2>Cómo trabajamos</h2>
        <ul>
          <li>Evidencia antes que opinión.</li>
          <li>Fuentes abiertas y enlazadas, con su DOI a la vista.</li>
          <li>Un ritmo pausado: un texto cada dos semanas.</li>
          <li>Español claro, sin jerga de vendedor.</li>
        </ul>
      </div>
      <div>
        <h2>Lo que puedes esperar</h2>
        <ul>
          <li>Textos que caben en un rato libre y aun así dicen algo.</li>
          <li>Cifras con su fuente, o ninguna cifra.</li>
          <li>Una crítica que abre camino: además de señalar el riesgo, propone qué hacer.</li>
        </ul>
      </div>
    </div>
  </div></section>

  <section class="section">
    <div class="container">
      {% include newsletter.html id="nl-sobre" title="Siéntate a la mesa" text="Deja tu correo y recibe cada artículo el día que se publica. Puedes darte de baja cuando quieras." %}
    </div>
  </section>
</div>

{%- comment -%}
  Datos estructurados de la página de autor. Qué hacen, en una línea: cada artículo
  declara `author.url` → /sobre/ (lo emite jekyll-seo-tag desde `_config.yml`), y aquí
  /sobre/ declara que ese autor es la persona del iD ORCID. Sin este bloque el enlace
  es de ida y nunca vuelve, y Google no tiene por dónde atar el blog a la trayectoria.

  El `publisher` vive aquí y no dentro de cada artículo a propósito: jekyll-seo-tag solo
  lo emite si se define `site.logo`, y entonces le pone de nombre el del AUTOR (está así
  en `json_ld_drop.rb` v2.8.0) — declararía que la publicación se llama Néstor Calbet
  Domingo. Mejor un nodo propio y correcto que uno automático y falso.
{%- endcomment -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "{{ page.url | absolute_url }}#page",
      "url": "{{ page.url | absolute_url }}",
      "name": {{ page.title | jsonify }},
      "inLanguage": "{{ site.lang | default: 'es' }}",
      "mainEntity": { "@id": "{{ page.url | absolute_url }}#autor" },
      "isPartOf": { "@id": "{{ '/' | absolute_url }}#publicacion" }
    },
    {
      "@type": "Person",
      "@id": "{{ page.url | absolute_url }}#autor",
      "name": {{ site.author.name | jsonify }},
      "alternateName": ["Néstor Calbet Domingo", "Nestor Calbet Domingo", "Nestor Calbet"],
      "url": "{{ page.url | absolute_url }}",
      "description": {{ site.author.bio | jsonify }},
      "jobTitle": ["Profesor de secundaria", "Profesor colaborador"],
      "affiliation": [
        { "@type": "CollegeOrUniversity", "name": "Universitat Oberta de Catalunya", "url": "https://www.uoc.edu/" }
      ],
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Universidad de Deusto", "url": "https://www.deusto.es/" }
      ],
      "knowsAbout": [
        "Inteligencia artificial y educación",
        "Derechos humanos",
        "Alfabetización en inteligencia artificial",
        "Política de educación digital",
        "Evaluación de impacto en los derechos fundamentales"
      ]{% if site.author.orcid %},
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "ORCID",
        "value": "https://orcid.org/{{ site.author.orcid }}"
      },
      "sameAs": ["https://orcid.org/{{ site.author.orcid }}"]{% endif %}
    },
    {
      "@type": "Organization",
      "@id": "{{ '/' | absolute_url }}#publicacion",
      "name": {{ site.title | jsonify }},
      "url": "{{ '/' | absolute_url }}",
      "description": {{ site.description | jsonify }},
      "founder": { "@id": "{{ page.url | absolute_url }}#autor" }
    }
  ]
}
</script>
