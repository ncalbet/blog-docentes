---
layout: post
category: autonomia-cognitiva
title: "Cuando el algoritmo decide qué cuenta como aprender"
description: "Un sistema de aprendizaje adaptativo analiza el tiempo que un estudiante tarda en responder, sus clics, sus errores, su progreso por módulos, y con…"
---

Un sistema de aprendizaje adaptativo analiza el tiempo que un estudiante tarda en responder, sus clics, sus errores, su progreso por módulos, y con esos datos construye una "ruta personalizada". Así lo describe, sin rodeos, la arquitectura técnica de uno de los sistemas más citados en la literatura reciente: procesa datos de plataformas como Codecademy, Duolingo o Khan Academy —tiempo de respuesta, tasa de finalización, puntuaciones por habilidad— para alimentar redes neuronales que recomiendan el siguiente paso de aprendizaje [1]. El sistema funciona. Pero la pregunta que raramente aparece en los artículos técnicos es otra: ¿quién decidió que esos datos son el aprendizaje?

---

## La promesa: personalización como solución a la diversidad

El argumento central de las plataformas de aprendizaje adaptativo (en adelante, ALP por sus siglas en inglés) es atractivo y no carece de base real. Los estudiantes aprenden de maneras distintas, a ritmos distintos, con experiencias previas distintas. Un sistema que ajusta el contenido —más ejemplos para quien tiene menos experiencia, respuestas más concisas para quien domina el tema— parece una respuesta pedagógicamente sensata a la limitación histórica de la clase magistral uniforme [4].

La industria ha respondido con una aceleración técnica notable. Entre 2014 y 2019, los métodos predominantes en estas plataformas eran los sistemas basados en reglas; entre 2020 y 2024, el aprendizaje profundo (*deep learning*) creció del 4,7% al 9,4% de las implementaciones revisadas, y la IA generativa apareció representando ya el 12,5% de los sistemas analizados [4]. Más capacidad de procesamiento, más variables, más "personalización". El discurso tecnológico lo presenta como progreso lineal.

El problema es lo que queda fuera del modelo.

---

## Lo que el algoritmo no puede medir, el algoritmo no lo ve

Los sistemas ALP operan sobre lo que pueden registrar: clics, tiempos, respuestas correctas o incorrectas, módulos completados. La *learning analytics*, campo que ha crecido en paralelo, trabaja con datos estáticos —demografía, rendimiento previo— y dinámicos —frecuencia de acceso, participación en foros— para "clasificar" trayectorias de estudiantes en categorías como "en riesgo", "alto rendimiento" o "aprendiz social" [3]. Esas etiquetas están lejos de ser neutras: son decisiones sobre qué importa.

Un estudiante que discute en voz alta con un compañero, que reformula una pregunta antes de responderla, que conecta un concepto matemático con algo que vivió fuera del aula: nada de eso entra en el modelo. Lo que sí entra es si completó el módulo en el tiempo esperado. El aprendizaje se convierte, operativamente, en aquello que el sistema puede capturar. Y lo que el sistema puede capturar lo define, con frecuencia, quien diseña y comercializa la plataforma —a menudo con algoritmos propietarios cuya lógica interna no está disponible para los docentes ni para los propios estudiantes [4].

Aquí la tensión con los sistemas de tutoría inteligente (*Intelligent Tutoring Systems*) resulta reveladora: estos sistemas estructuran dominios de conocimiento complejos mediante representaciones ontológicas y simulan procesos cognitivos para guiar al estudiante [2]. La ambición cognitiva es mayor. Pero la consecuencia es la misma: alguien ha codificado, de antemano, qué constituye comprensión y cuál es el camino correcto para alcanzarla. El mapa precede al territorio.

---

## Datos, perfiles y el riesgo de la profecía autocumplida

Cuando un sistema clasifica a un estudiante como "de bajo rendimiento" basándose en métricas de velocidad y precisión, esa clasificación tiene consecuencias directas: determina qué contenidos le llegarán, a qué ritmo, con qué nivel de dificultad. La *learning analytics* puede "identificar patrones más allá de lo detectable por observación humana" [3], pero también puede fijar a un estudiante en un carril que reproduce las condiciones de partida y llama a eso personalización.

Las desigualdades previas —acceso a dispositivos, familiaridad con entornos digitales, tiempo disponible para estudiar— se convierten en datos de entrada del modelo. Si un estudiante accede menos frecuentemente, el sistema puede interpretarlo como desinterés o falta de capacidad, cuando la causa puede ser una conexión a internet inestable o una jornada laboral que comparte con los estudios. El sistema no distingue. La plataforma recomienda; el estudiante se adapta. Y la adaptación, en este esquema, es unidireccional [3].

Desde una perspectiva de derechos humanos, esto plantea una cuestión que los artículos técnicos tienden a relegar a una sección de "consideraciones éticas" al final del texto: el derecho a la educación no se agota en el acceso a un dispositivo con contenidos ajustados. Incluye el derecho a no ser reducido a un perfil, a no tener predeterminado el recorrido intelectual que se considera adecuado para uno, y a participar en la definición de qué cuenta como aprender. Ninguno de esos derechos es cuantificable, y por eso no aparecen en los *dashboards*.

---

## ¿Personalización para quién, definida por quién?

La respuesta técnica a estas objeciones existe, y conviene tomarla en serio antes de descartarla: los sistemas más sofisticados incorporan protocolos de anonimización, consentimiento informado, paneles de privacidad configurables por el usuario y técnicas de *federated learning* para no centralizar datos sensibles [1]. Son avances reales en términos de privacidad. No resuelven, sin embargo, la pregunta pedagógica de fondo.

Porque la cuestión de fondo, más allá de quién custodia los datos, es quién decide qué variables son relevantes para describir el aprendizaje. Un modelo que procesa "estado cognitivo, nivel de compromiso y respuesta emocional" [1] ha tomado ya decisiones muy concretas sobre qué dimensiones del estudiante importan. Esas decisiones tienen consecuencias curriculares, y en la mayoría de los contextos se toman fuera del aula, fuera de la institución educativa, y en muchos casos fuera del país donde estudia el alumno.

El aprendizaje adaptativo, tal como se implementa mayoritariamente hoy, no personaliza la educación: personaliza la entrega de contenidos predefinidos según perfiles estadísticos. Es una distinción que no suele aparecer en los materiales de venta, pero que determina todo lo demás. La pregunta que queda abierta es si los docentes, las familias y los propios estudiantes están en condiciones de participar en la definición de qué debe contar como progreso educativo —y si las instituciones están dispuestas a defender ese espacio frente a la lógica de las plataformas.

## Referencias

[1] Ruan y Lu (2025). *Adaptive deep reinforcement learning for personalized learning pathways: A multimodal data-driven approach with real-time feedback optimization*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100463)

[2] Feng et al. (2025). *Mapping the evolution of AI in education: Toward a co-adaptive and human-centered paradigm*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100513)

[3] Hakimi et al. (2021). *The Ethics of Using Digital Trace Data in Education: A Thematic Review of the Research Landscape*. [Ver estudio →](https://doi.org/10.3102/00346543211020116)

[4] Tan et al. (2025). *Artificial intelligence-enabled adaptive learning platforms: A review*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100429)
