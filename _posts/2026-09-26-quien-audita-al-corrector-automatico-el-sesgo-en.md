---
layout: post
category: garantias
title: "¿Quién audita al corrector automático? El sesgo en la evaluación"
description: "¿Qué le pasa al estudiante cuando el algoritmo lo puntúa peor por su grupo? Sesgo, auditoría y derechos en la evaluación automática. Para docentes."
tags: ["sesgo algorítmico evaluación educativa", "corrector automático sesgo", "equidad algoritmos educación", "bias IA calificaciones", "derechos estudiantes evaluación automática"]
---

Imagina un sistema de corrección automática de textos entrenado mayoritariamente con respuestas de estudiantes de un determinado perfil lingüístico y socioeconómico. El resultado previsible está documentado: "bias in, bias out", es decir, si los datos de entrenamiento arrastran sesgos, el modelo los reproduce y penaliza de forma sistemática a quienes se alejan del perfil mayoritario [1]. Eso ya es serio de por sí, pero la pregunta que nos debería incomodar como docentes debería ser: cuando ese sistema puntúa peor a tu alumna porque escribe en un español marcado por otra lengua materna, ¿quién lo detecta? y ¿Quién puede reclamar?

## El sesgo entra antes de que el algoritmo vea una sola respuesta

La trampa del sesgo algorítmico en la evaluación educativa es que empieza mucho antes de que el modelo haya corregido nada. Hay al menos cinco momentos durante el proceso donde puede colarse: en la propia recogida de datos, en el etiquetado humano, en el sistema de preprocesamiento, en la extracción de las características y finalmente, en la selección del modelo [1]. Cada una de las fases tiene su propia vulnerabilidad.

Pongamos un ejemplo concreto que aparece en la literatura. Si un sistema de corrección sobre comprensión lectora utiliza la longitud del texto como variable predictiva, entonces, los chicos, quienes estadísticamente tienden a escribir respuestas más cortas en este tipo de tareas, quedarían en desventaja estructural desde el diseño. El modelo aprende un patrón que correlaciona con el grupo, no con el mismo conocimiento. Y si encima se añade que los textos de entrenamiento fueron etiquetados por evaluadores humanos que conocían el origen migrante del estudiante, ese sesgo previo queda incrustado en las propias etiquetas con las que aprende la máquina [1].

Es cierto que los sistemas automáticos tienen una ventaja real frente a la corrección humana, y es que un evaluador humano puede estar influenciado por el cansancio, por el orden en que llegan las pruebas, por las anticipaciones sobre el perfil del estudiante, etc. Mientras que una máquina, al menos en teoría, aplica el mismo criterio en todas las respuestas, es determinista. El problema empero es que ese criterio puede estar contaminado desde el origen, y además lo aplica a gran escala y sin fatiga asociada, lo que convierte un aparente sesgo mínimo en un problema sistemático.

## La equidad en agregado esconde lo que le pasa a cada estudiante

Aquí está la tensión central que los datos de investigación nos revelan. Los estudios sobre equidad algorítmica tienden a medir el rendimiento del modelo en su promedio o en grandes grupos, si el error medio es similar entre géneros o entre grupos étnicos, se concluye que el sistema es entonces "justo" [2]. Pero esa métrica agrupada puede ocultar que hay subgrupos específicos, como alumnado con TDAH, estudiantes de familias con bajo nivel educativo o hablantes de lenguas minorizadas, que reciben sistemáticamente peores puntuaciones sin que el indicador global lo capture [2].

La literatura sobre LLMs aplicados a la evaluación educativa ya lo advierte: los algoritmos entrenados con datos sesgados pueden amplificar prejuicios existentes y producir calificaciones discriminatorias o recomendaciones de itinerario injustas. Y el siguiente problema es que esas evaluaciones automáticas frecuentemente no se traducen en ninguna estrategia de mejora para el estudiante concreto [3]. Es decir, el sistema puntúa, archiva la nota y no genera ningún retorno útil. El expediente queda marcado, pero la persona, invisibilizada.

Esto tiene una dimensión de derechos humanos que no podemos esquivar. Una puntuación automática que afecta el expediente académico es una decisión que debería estar sujeta a garantías de no discriminación y de debido proceso. Que el decisor sea un algoritmo no suspende esos derechos, los hace aún más urgentes, pues la persona afectada raramente sabe cómo funciona el sistema que la ha puntuado ni a quién puede o debe dirigirse para impugnar el resultado.

## ¿Quién audita y quién puede reclamar?

En la mayoría de los contextos educativos actuales, nadie audita de forma sistemática y casi nadie sabe que, efectivamente, puede reclamar. Las herramientas técnicas para hacerlo existen, hay análisis de paridad de error por subgrupos, técnicas de reequilibrio del conjunto de entrenamiento, métricas de equidad desagregadas [2], pero su uso en los sistemas desplegados en centros educativos reales es, podríamos decir que en el mejor de los casos, irregular.

El sesgo en la representación se extiende además más allá de la corrección de texto. La investigación sobre imágenes generadas por IA en contextos educativos muestra patrones similares: cuando los sistemas reproducen de forma sistemática representaciones sesgadas por género, etnia o capacidad, están enviando mensajes sobre quién pertenece a qué rol [4]. La evaluación automática opera en el mismo terreno: decide, implícitamente, qué respuesta es valida y correcta y qué variación lingüística o cultural queda fuera del estándar.

Frente a esto, la pregunta de quién audita se vuelve estructuralmente necesaria. Un corrector automático desplegado en un sistema de evaluación nacional o en una plataforma educativa con millones de usuarios necesita, como mínimo, tres condiciones para ser éticamente admisible. En prime lugar una auditoría por subgrupos transparente, publicada y accesible, que analice las tasas de error desagregadas por género, origen, lengua, condición de discapacidad, etc. En segundo lugar, la revisión humana obligatoria de toda decisión automática que vaya a incorporarse al expediente académico del estudiante, con posibilidad real de impugnación en caso que sea necesario. Finalmente, la transparencia sobre las tasas de error del propio sistema, de modo que tanto el profesorado como las familias puedan valorar con qué nivel de incertidumbre se está calificando al alumnado [1],[2].

## Lo que podemos hacer desde el aula antes de que llegue la regulación

Esperar a que llegue una regulación adecuada es razonable como estrategia política, ahora bien, como práctica docente se presenta como insuficiente. Mientras tanto, hay cosas que están en nuestra mano y podemos aplicar de entrada.

La primera es tratar cualquier puntuación automática como lo que es: una estimación provisional, no un veredicto final. Si un sistema de corrección forma parte de la evaluación de tu alumnado, tienes la responsabilidad profesional de saber qué grupos pueden estar siendo sistemáticamente perjudicados por un posible sesgo, y contrastar esa puntuación con tu propio juicio [3]. La segunda es hacer visible el mecanismo ante el propio alumnado, ser abiertamente transparente, explicarles que la máquina aprende de datos históricos, que esos datos tienen sesgos, y que una puntuación baja de un sistema automático no equivale a una evaluación de su conocimiento real. Esta afirmación puede no sentar bien al alumnado, al saberse evaluado por un sistema posiblemente sesgado, así que es bueno abrir el debate. Eso es pedagogía crítica de la IA, y se puede hacer desde secundaria.

Con todo esto, debemos quizás plantearnos si estamos dispuestos a exigir a las empresas y administraciones que publiquen las tasas de error de sus sistemas por subgrupo antes de autorizarlos en nuestros centros. Esa exigencia existe ya en otros sectores. En educación, donde las puntuaciones condicionan itinerarios y futuros, deberíamos poder exigir al menos lo mismo.

## Referencias

[1] Andersen et al. (2025). *Algorithmic Fairness in Automatic Scoring of Open-Ended Reading Comprehension Items*. [Ver estudio →](https://doi.org/10.1007/s40593-025-00495-5)

[2] Li et al. (2026). *Beyond binary outcomes: Evaluating and mitigating bias in national standardized test score prediction*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100585)

[3] Shi et al. (2026). *Large language models in education: a systematic review of empirical applications, benefits, and challenges*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100529)

[4] Alon et al. (2026). *Bias and representation in AI generated text-to-image in education: A systematic review*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100587)
