---
layout: post
category: gobernanza
title: "¿Quién responde cuando el sistema falla? Rendición de cuentas en la escuela algorítmica"
description: "Los marcos éticos de IA educativa hablan de valores, no de procedimientos. Qué falta para que un centro sepa quién responde si el sistema falla."
tags: ["rendición de cuentas IA educativa", "ética IA en la escuela", "gobernanza IA educación", "derechos alumnado IA", "IA generativa aula"]
---

Un gatekeeper para aprobar o bloquear a un modelo en función de si cumple los umbrales de rendimiento, de calibración y de equidad, con cada decisión registrada en una cadena de hashes que impide borrar el rastro después [1]. Esto es lo más concreto que he encontrado en la literatura sobre gobernanza de Inteligencia Articial educativa, y precisamente por eso me llama la atención, casi todo lo demás que circula en claustros, planes digitales y jornadas de formación se queda en el nivel de valores, sin ninguna concreción en una vertiente más práctica y centrada en el día a día. Fairness, equidad, privacy, transparency, accountability, etc., son palabras necesarias y que suenan muy bien, pero cuando una herramienta de IA en el centro se equivoca con un alumno, entonces ¿Quién firma esa equivocación? ¿Ante quién se puede reclamar? ¿Con qué plazos?, es decir: ***¿Quién responde?***

Esa pregunta es la que este artículo quiere dejar sobre la mesa, porque es la que casi nadie contesta con un procedimiento y un nombre.

## Lo que sí dicen los principios (y lo que callan)

La literatura reciente sobre IA responsable en educación es generosa en cuanto a marcos de valores. Fu y Weng (2024), citados en Pargman et al. (2025), identifican fairness, equidad, privacidad, seguridad, no maleficencia, beneficencia y transparencia como valores nucleares [2]. Jakesch et al. (2022), citados en Hooshyar et al. (2025), añaden dignidad humana, inclusividad, beneficio social y sostenibilidad; mientras que Goellner et al. (2024), citados en esa misma revisión [3], condensan todo en una definición que exige que las decisiones automatizadas sean "explicables a los usuarios" y preserven la privacidad mediante "una implementación segura". Son marcos útiles para pensar. El problema es otro: ninguno de ellos especifica un mecanismo de reclamación. Dicen qué debería importar, no quién responde cuando no se implementa. Eso nos deja en una mera declaración de intenciones.

Pargman y su equipo (2025), revisando cinco contribuciones de un número especial dedicado justamente a esto, detectan el mismo patrón desde otro ángulo: la responsabilidad se discute como "trade-off" entre la autonomía del alumnado y el beneficio del dashboard predictivo. También como sesgo en los datos de entrenamiento, los cuales hay que "contrarrestar". Por ello proponen la participación de estudiantes en el codiseño de los principios éticos. Es un avance real frente al silencio previo. Pero los propios autores ya apuntan a los puntos débiles: pedir a estudiantes que definan sus derechos frente a sistemas opacos, y sin un acompañamiento de calidad, termina por ser inefectivo [2]. Participar en el diseño de un marco ético no es lo mismo que disponer de una vía para reclamar cuando el sistema ya desplegado, produce un daño concreto sobre un caso concreto.

## Cuando el fallo pasa de hipotético a una identidad

Anthis y Kyriakidou-Zacharoudiou (2026) ilustran el significado de "fallar" en la práctica, y por qué el vocabulario de principios y valores no es suficiente. El estudio sitúa el despliegue de tutores de IA como una forma de "gobernanza epistémica" en el que las decisiones de procurement, la configuración por defecto, los criterios de evaluación y los mecanismos de accountability del proveedor determinan de qué explicaciones se fía el alumnado y cuáles descarta. Cuando los mecanismos están poco desarrollados, las inequidades se producen de manera sistemática a través de la práctica institucional ordinaria [4]. El fallo entonces pasa a ser que existe un patrón que se repite cada vez que el centro usa la herramienta tal como viene configurada de fábrica.

Aquí conecta con algo que señalan Evangelista y Salman Bukhari (2026) desde el punto de vista de la ingeniería: la gobernanza tradicional en IA educativa se centra "solo en accuracy o en auditoría de fairness", como si el problema fuera meramente técnico. Su propuesta de Policy-as-Code intenta cerrar esa distancia convirtiendo el principio en contrato computacional, cada política deja su huella criptográfica (SHA-256), cada violación se registra con su razón, cada decisión de aprobación o de bloqueo queda encadenada de tal forma que no se puede alterar retroactivamente [1]. Este es el mecanismo más pragmático que he encontrado en toda la literatura revisada. Y aun así, se centra en resolver la trazabilidad técnica del modelo, pero deja fuera la vía de la reclamación de las familias o del alumnado afectado ante el centro. El ledger de auditoría le dice al equipo directivo qué política se incumplió. No le dice a la persona afectada dónde presentar su queja ni quién debe responder.

## Estudiantes y docentes reclaman un procedimiento

Lo interesante es que cuando se pregunta directamente a quienes usan estas herramientas en el aula, la demanda viene a ser que se aplique un procedimiento. El estudio sobre trayectorias de política de IA en educación superior realizado en Hong Kong recoge unas recomendaciones muy concretas del alumnado y del profesorado, a saber: declaraciones de uso de IA generativa registradas (logs), transparencia mediante entregas duales (con y sin asistencia de la IA), complemento de las herramientas de detección con defensas orales, normas claras y sanciones estándar entre programas en lugar de depender del criterio de cada docente [5]. No se habla de "principios éticos", si no de registro, trazabilidad y criterio claro y homogéneo, que son los tres ingredientes de cualquier sistema de rendición de cuentas.

Ese es el hueco que ninguna de las fuentes revisadas llega a cerrar del todo, cómo trasladar un mecanismo ejecutable (el hash-chain, el gatekeeper, el log de auditoría, etc.) a un procedimiento transparente y accesible para que las familias puedan reclamar, sin depender exclusivamente del proveedor de la herramienta, que se presenta como juez y parte [4].

## Una mínima vía al alcance del centro

Desde una perspectiva de derechos humanos, el derecho a un recurso efectivo no requiere de inventar ninguna nueva tecnología. Exige tres cosas que cualquier centro puede poner en marcha: un registro accesible sobre qué herramientas de IA están en uso y con qué finalidad, una persona referente e identificable, responsable de estas herramientas ante la comunidad educativa, y una vía de reclamación clara que resuelva el propio centro para que se evite remitir al soporte técnico del propio proveedor. No es una propuesta que resuelva la tensión entre innovación pedagógica y garantías, tampoco pretende sustituir la conversación necesaria sobre valores que trae la literatura [2], [3], pero almenos es un mínimo necesario y aplicable de entrada. Sin la implementación de medidas concretas, cualquier principio ético declarado seguirá siendo una declaración de intenciones que nadie tiene la obligación de cumplir. ¿Qué pasaría si cada centro empezara simplemente por preguntarse quién, con nombre y apellido, respondería mañana si el sistema falla con un alumno suyo?

## Referencias

[1] Evangelista y Salman Bukhari (2026). *From ethical principles to executable governance: A policy-as-code framework for trustworthy AI in higher education*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100594)

[2] Pargman et al. (2025). *Towards responsible AI in education: Challenges and implications for research and practice*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2024.100345)

[3] Hooshyar et al. (2025). *Towards responsible AI for education: Hybrid human-AI to confront the elephant in the room*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100524)

[4] Anthis y Kyriakidou-Zacharoudiou (2026). *Face value: How avatar identity shapes epistemic trust in AI-mediated learning*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2026.100610)

[5] Tsao (2025). *Trajectories of AI policy in higher education: Interpretations, discourses, and enactments of students and teachers*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100496)

## Para seguir leyendo

Otra fuente revisada, sobre el efecto de la IA en el rendimiento académico y la empleabilidad:

- Drydakis (2025). *The formation of AI Capital in higher education: Enhancing students' academic performance and employment rates*. [Ver estudio →](https://doi.org/10.1016/j.caeai.2025.100476)
