---
layout: post
category: privacidad-vigilancia
title: "Los datos que recoge la escuela no le pertenecen a la escuela"
description: "¿Mejora el aprendizaje recoger más datos del alumnado? Un análisis desde derechos humanos sobre privacidad, minimización y control real de esos datos."
tags: ["privacidad de menores en la escuela", "datos alumnado protección", "minimización de datos educativos", "finalidad limitada IA educación", "vigilancia escolar dataveillance"]
---

Tratar datos de menores en un centro educativo es complejo y muy distinto a hacerlo con estudiantes universitarios, puesto que entran en juego menores, madres, padres, escuela y marco legal específico a la vez. Esa complejidad suele desaparecer del discurso cuando alguien presenta una plataforma nueva en el claustro. Se habla de adaptación, de detección temprana, de mejora del aprendizaje, pero casi nunca se habla de qué pasa con los datos que le aportamos a la plataforma y que esta recoge y guarda en su propiedad. ¿Quién lo puede inspeccionar? ¿Qué ocurre cuando el estudiante termina los estudios o se va del centro? Esa es la pregunta que un equipo docente debería hacerse antes de integrar una herramienta digital que registre a su alumnado.

## La promesa de mejora y el silencio sobre el control

El argumento habitual es bien simple, cuantos más datos, mejor se ajusta la enseñanza a cada estudiante. Fütterer et al. (2025) describen bien esta lógica dual, el *big data* permite interpretar el comportamiento y los avances del alumnado y a partir de ahí optimizar el aprendizaje. Ahora bien, esta recolección masiva de datos abre la puerta a un seguimiento que en última instancia niega a esta generación la privacidad de la que disfrutaron las anteriores. Lo que rara vez se pone sobre la mesa es que esa mejora pedagógica y ese riesgo de vigilancia comparten el mismo mecanismo. Selwyn (2015) (citado en Hakimi et al. (2021)), lo describe como *dataveillance*: el monitoreo, la minería y el procesado continuo de datos que acaban permitiendo identificar, clasificar y representar al alumnado a partir de su actividad cotidiana. Un sistema de gestión del comportamiento en el aula intensifica esa vigilancia y la normaliza, lo que genera una cultura de rendimiento constante. Watson et al. (2017) (citados en Hakimi et al. (2021)), lo muestran con el caso de un único estudiante, prácticas así acaban amenazando su confianza y su autonomía.

Es ahí donde se evidencia el punto ciego, el centro que adopta este tipo de herramientas no se limita a mejorar el seguimiento de su alumnado, con ello también genera, sesión a sesión, un flujo de datos que no diseña, no aloja y, en la mayoría de los casos, no puede auditar. Desde el punto de vista de la filosofía de la ciencia el dato nunca es neutro, se genera y almacena con un propósito concreto, y ese propósito fue el que no se evaluó cuando se dio el permiso ético inicial. Cuando el dato se reutiliza para algo distinto, como por ejemplo entrenar un modelo, alimentar un producto, o generar un perfil con otro fin, ese permiso original ya no cubre el nuevo uso [2]. Un centro educativo firma condiciones de uso pensando en la finalidad declarada del día uno. Lo que ocurre con esos datos al cabo del tiempo no está bajo su control, ni bajo su capacidad de revisión.

## Quién puede mirar dentro de la caja

La revisión de Fütterer et al. (2025) identifica un desequilibrio que conecta directamente con esto, los sistemas de evaluación algorítmica no deberían funcionar como cajas negras, y deberían ofrecer retroalimentación detallada tanto al alumnado como al profesorado, para que ambas partes (y no solo el profesorado) tengan elementos para la reflexión. Esa exigencia de trazabilidad es lo que falta cuando un centro adopta una herramienta y solo recibe un panel con resultados, sin acceso al cómo se procesan los datos que lo alimentan. El centro produce el insumo, pero no controla el proceso ni puede recuperar el activo cuando decide dejar de usar la herramienta.

Li et al. (2026) trabajan en el extremo técnico de este problema, buscan demostrar que es posible reducir la generación de contenido con información personal identificable en modelos de lenguaje aplicados a la educación, ello sin perder utilidad pedagógica. Es una aportación real, y hay que reconocerla como tal, si bien los propios autores advierten de sus límites, la tasa de contenido con datos personales detectado por un clasificador no puede interpretarse como prueba directa de que el modelo memorizó y que los usó como datos de entrenamiento reales, además, los resultados no son directamente aplicables a todas las asignaturas, niveles y plataformas. Es decir, incluso cuando la técnica funciona en el laboratorio, no hay garantía de que ese comportamiento se mantenga en el contexto específico de cada centro educativo, y el propio centro actualmente tampoco tiene forma de verificarlo desde dentro. La responsabilidad técnica queda, de nuevo, fuera del alcance de quien firma la adopción de la herramienta.

## Minimizar y limitar, la medida desde el aula

Ante ello, se plantea una distinción útil para separar aquello útil de lo problemático, no es lo mismo una aplicación que usa datos para informar al profesorado de acciones posibles, que una aplicación que actúa por sí sola y solamente es supervisada a posteriori [2]. De la misma forma, no es lo mismo procesar en local que enviar los datos a unos servidores externos. Se hace entonces necesario que el alumnado tenga la opción de participar en ese seguimiento, e incluso que se pueda exigir un consentimiento informado para hacerlo [2]. Esa gradación, de menos a más intrusivo y de más a menos control, es la que debería guiar cualquier decisión del centro en materia de integración de IA, en lugar de la pregunta básica de si una herramienta digital "ayuda a aprender".

Wan (2025) documenta un caso donde esa lógica de minimización se aplica con rigor técnico, un presupuesto en privacidad ajustado para impedir la reidentificación de alumnado, manteniendo más del 90% del valor estadístico necesario para evaluar resultados de aprendizaje [4]. Esto es un ejemplo de que minimizar no tiene por qué implicar la renuncia a la utilidad pedagógica de una herramienta, implica diseñar el sistema para que la utilidad no dependa de acumular más identificación de la necesaria.

## Lo que hace admisible recoger datos de un menor

De todo esto se desprende que recoger datos de un menor en un centro educativo es admisible cuando la finalidad está limitada a ese uso concreto, y que una reutilización futura debe comportar en todo caso un nuevo permiso [2]. También se hace válida si la minimización es verificable [4]. Y cuando existe la garantía de que esos datos no alimentan el entrenamiento de ningún producto ajeno a la finalidad previamente declarada, dado que ni siquiera quienes desarrollan estas técnicas pueden garantizar hoy en día que un modelo no memorice fragmentos identificables [3]. Y finalmente si al acabar la etapa educativa se guardan los datos, esto se debe hacer debidamente y en local, asegurando así que no es delegado a terceros.

En educación, a diferencia de la universidad, hay familias mediando ese consentimiento y un marco legal pensado para proteger a quien todavía no puede decidir por sí mismo [1]. Ese marco no sustituye la pregunta que cada centro debe hacerse antes de firmar, si no puede inspeccionar el dato, ni valorar su uso, ni tampoco recuperarlo cuando el alumno se va, la pregunta pedagógica debería ser qué está dispuesto a ceder el centro para producir ese dato en concreto.

## Referencias

[1] Hakimi et al. (2021). *The Ethics of Using Digital Trace Data in Education: A Thematic Review of the Research Landscape*. [Ver estudio →](https://doi.org/10.3102/00346543211020116)

[2] Fütterer et al. (2025). *Artificial intelligence in classroom management: A systematic review on educational purposes, technical implementations, and ethical considerations*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100483)

[3] Li et al. (2026). *Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100642)

[4] Wan (2025). *Role of online assessment system in formative evaluation of programming education*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100515)

## Para seguir leyendo

Otras fuentes revisadas sobre desarrollo académico y alfabetización en IA en secundaria:

- Vieriu y Petrea (2025). *The Impact of Artificial Intelligence (AI) on Students' Academic Development*. [Ver estudio →](https://doi.org/10.3390/educsci15030343)

- Marienko et al. (2026). *AI literacy in secondary education: framework, assessment, and professional development in the Ukrainian context*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100605)
