---
layout: default
title: "Privacidad"
description: "Qué datos trata Mesa Docente, para qué, quién los procesa y cómo ejercer tus derechos. Sin cookies, sin publicidad y sin seguimiento de lo que lees."
permalink: /privacidad/
last_modified_at: 2026-10-14
---
{%- comment -%}
  Página de privacidad (RGPD, arts. 13 y 14). Si cambia cualquier proveedor del sitio
  —boletín, analítica, alojamiento, tipografías— o se activa el seguimiento de aperturas
  o clics en Buttondown, esta página tiene que cambiar el mismo día.

  Las garantías de transferencia de GitHub, Google y Cloudflare (Marco de Privacidad de
  Datos UE-EE. UU.) se comprobaron en sus propias políticas el 2026-10-14.
{%- endcomment -%}
<div class="fade-in">
  <section class="hero">
    <div class="container"><div class="reading">
      <p class="eyebrow">Privacidad</p>
      <h1 class="hero__title">Qué datos trata este blog y para qué</h1>
      <p class="article-dek">Un blog sobre IA y derechos tiene que poder explicar sus propios datos con la misma claridad que pide a los demás. Aquí está todo: qué se recoge, quién lo procesa, cuánto tiempo se guarda y cómo pedir que se borre.</p>
      {%- assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" | split: "," -%}
      {%- assign mes_act = page.last_modified_at | date: "%-m" | minus: 1 -%}
      <p class="article-meta">Actualizada el {{ page.last_modified_at | date: "%-d" }} de {{ meses[mes_act] }} de {{ page.last_modified_at | date: "%Y" }}</p>
    </div></div>
  </section>

  <section class="container"><div class="reading">
    <h2>En corto</h2>
    <ul>
      <li>Leer el blog no exige ningún dato. No hay cookies, ni publicidad, ni banner de consentimiento.</li>
      <li>Las estadísticas de visitas son agregadas y sin cookies: sirven para saber qué se lee, nunca quién lo lee.</li>
      <li>Si te suscribes al boletín, se guarda tu dirección de correo para enviártelo. Las aperturas y los clics no se miden.</li>
      <li>No vendo ni cedo datos a nadie, y no se elaboran perfiles.</li>
    </ul>

    <h2>Quién es responsable</h2>
    <p>Néstor Calbet, autor de Mesa Docente. Para cualquier cuestión sobre tus datos, escribe a <a href="mailto:info@mesadocente.com">info@mesadocente.com</a>.</p>

    <h2>Si te suscribes al boletín</h2>
    <p><strong>Qué se guarda:</strong> tu dirección de correo, la fecha de alta y los datos técnicos que el sistema de envíos registra en el momento de la suscripción, como la dirección IP, para evitar altas falsas.</p>
    <p><strong>Para qué:</strong> enviarte cada artículo nuevo, cada dos semanas. Nada más.</p>
    <p><strong>Quién lo procesa:</strong> <a href="https://buttondown.com/legal/privacy" rel="noopener" target="_blank">Buttondown</a>, el servicio de envío del boletín, con sede en Estados Unidos. Tiene desactivada la medición de aperturas y de clics, y no reescribe los enlaces. Los enlaces a los artículos pueden llevar una etiqueta de campaña (<code>utm</code>) que solo indica que la visita llega desde el boletín, sin identificar a nadie. Al pulsar «Suscribirme» se abre una página de Buttondown, que se rige por su propia política.</p>
    <p><strong>Base legal:</strong> tu consentimiento, que das al confirmar el alta desde el correo de verificación.</p>
    <p><strong>Cuánto tiempo:</strong> mientras sigas suscrito. Cada boletín trae un enlace para darte de baja al instante. Si además quieres que se borre tu dirección, escríbeme y la elimino.</p>

    <h2>Si escribes a info@mesadocente.com</h2>
    <p>Tu mensaje llega a través del reenvío de correo de Cloudflare a una cuenta de Gmail (Google). Lo uso para responderte, con base en el interés legítimo de atender a quien escribe, y lo conservo mientras dure la conversación y el tiempo razonable para poder retomarla. Si quieres que lo borre antes, pídemelo.</p>

    <h2>Al visitar cualquier página</h2>
    <ul>
      <li><strong>Alojamiento.</strong> El sitio está alojado en <a href="https://docs.github.com/es/pages/getting-started-with-github-pages/about-github-pages" rel="noopener" target="_blank">GitHub Pages</a> (GitHub, Estados Unidos), que registra la dirección IP de cada visita por motivos de seguridad.</li>
      <li><strong>Estadísticas.</strong> Uso Cloudflare Web Analytics y Umami (en su región europea). Ninguno de los dos instala cookies ni guarda tu dirección IP para seguirte: cuentan visitas, páginas, país y procedencia de forma agregada.</li>
      <li><strong>Tipografías.</strong> Las fuentes se sirven desde el propio sitio: cargar una página no avisa a Google ni a ningún otro servicio de tipografías.</li>
      <li><strong>Modo oscuro.</strong> Si lo activas, tu navegador recuerda la preferencia en su almacenamiento local. Ese dato se queda en tu dispositivo y no llega a ningún servidor.</li>
      <li><strong>Botones de compartir.</strong> Son enlaces normales, sin código de terceros: WhatsApp, LinkedIn o X solo reciben algo si pulsas uno de ellos.</li>
    </ul>
    <p>La base legal de todo este bloque es el interés legítimo de mantener el sitio seguro y saber qué textos resultan útiles, con el mínimo de datos posible.</p>

    <h2>Datos que salen de la Unión Europea</h2>
    <p>Buttondown, GitHub, Google y Cloudflare son empresas de Estados Unidos. Buttondown aplica las cláusulas contractuales tipo aprobadas por la Comisión Europea. GitHub, Google y Cloudflare están adheridas al Marco de Privacidad de Datos UE-EE. UU. Umami trata los datos de este sitio en su región europea.</p>

    <h2>Tus derechos</h2>
    <p>Puedes pedir acceso a tus datos, su rectificación o su supresión, oponerte a un tratamiento, pedir que se limite o recibir tus datos en un formato portable. También puedes retirar tu consentimiento al boletín en cualquier momento. Basta con escribir a <a href="mailto:info@mesadocente.com">info@mesadocente.com</a>; respondo en el plazo de un mes como máximo.</p>
    <p>Si crees que tus datos no se han tratado bien, puedes reclamar ante la <a href="https://www.aepd.es" rel="noopener" target="_blank">Agencia Española de Protección de Datos</a>.</p>

    <h2>Menores</h2>
    <p>El boletín está pensado para profesorado. Si tienes menos de 14 años, no te suscribas.</p>

    <h2>Cambios en esta página</h2>
    <p>Si cambia algún proveedor o la forma de tratar los datos, esta página se actualiza ese mismo día, y la fecha de arriba lo refleja.</p>
  </div></section>
</div>
