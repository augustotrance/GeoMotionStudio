# GeoMotion Studio

# Modelo operativo SDD

**Identificador:** `MOD-SDD-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado — vigencia diferida hasta la publicación de `LB-G3-GMS-20260904-01`  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G3 — Gobierno operativo de SDD  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G3-GMS-20260904-07`; D-19, D-21, D-22, D-24 y D-25  
**Línea base de entrada:** `LB-G2-GMS-20260904-01`  
**Línea base prevista:** `LB-G3-GMS-20260904-01`

---

## 1. Objeto

Definir el proceso institucional mediante el cual una necesidad puede convertirse en software aceptado sin depender de memoria conversacional ni de interpretaciones privadas.

SDD complementa Architecture First. No sustituye Visión, Constitución, Manual de Ingeniería, arquitecturas especializadas, ADR, decisiones del Founder ni otros documentos institucionales aprobados y vigentes.

Este documento no activa por sí mismo la familia SPEC, no abre implementación, no modifica `apps/web` y no autoriza código funcional antes de G9.

---

## 2. Principios operativos

1. La necesidad precede a la solución.
2. La arquitectura precede a la SPEC y la SPEC precede al código.
3. Una conversación puede originar una necesidad, pero solo un registro incorporado al proceso conserva autoridad o trazabilidad institucional.
4. Todo paso consume entradas identificadas y produce una salida verificable.
5. Ningún instrumento técnico, contenedor, hash o Context Package reemplaza las fuentes institucionales.
6. Una ausencia crítica bloquea; no se completa mediante suposición.
7. El nivel de revisión es proporcional al riesgo, no al tamaño del texto.
8. Nadie aprueba su propio resultado cuando corresponda revisión independiente.
9. Una SPEC aprobada no significa funcionalidad implementada.
10. El código funcional permanece prohibido hasta superar materialmente G9.

---

## 3. Integración con INT-011

El ciclo de INT-011 continúa vigente para toda misión de Dirección Técnica:

`Recepción → Validación de contexto → Identificación de fuentes → Alcance → Ejecución → Validación → Entrega → Registro`.

El proceso SDD especializa ese ciclo para iniciativas de producto o ingeniería. No crea un workflow paralelo:

| INT-011 | Especialización SDD |
|---|---|
| Recepción | Registrar la iniciativa y su necesidad |
| Validación de contexto | Verificar línea base, fuentes, restricciones e información faltante |
| Identificación de fuentes | Relacionar documentos institucionales, invariantes, ADR y evidencias |
| Definición de alcance | Fijar resultado, incluidos, excluidos y criterios de Listo para Especificar |
| Ejecución | Elaborar y revisar SPEC; después de G9, implementar el plan aprobado |
| Validación | Verificar puertas, contratos, pruebas y criterios de aceptación |
| Entrega | Presentar resultado, evidencias, desviaciones y decisión requerida |
| Registro | Conservar aceptación, versión, publicación y aprendizaje |

---

## 4. Flujo único de una iniciativa

| Nº | Paso | Entrada mínima | Salida obligatoria | Condición de avance |
|---:|---|---|---|---|
| 1 | Necesidad | Hecho, problema u objetivo identificable | Registro `INI-*` | Fuente y resultado deseado explícitos |
| 2 | Clasificación | Iniciativa registrada | Tipo, impacto inicial y autoridad aplicable | Sin ambigüedad crítica de competencia |
| 3 | Análisis de impacto | Fuentes y línea base | Impacto en producto, arquitectura, seguridad, datos, calidad, documentación y operación | Bloqueos y decisiones faltantes identificados |
| 4 | Listo para Especificar | Análisis suficiente | Declaración LPE | Lista de control completa |
| 5 | SPEC Borrador | LPE conforme | SPEC estructurada | Sin decisiones ocultas presentadas como hechos |
| 6 | Decisiones y contratos | Borrador y arquitectura | ADR, contratos o cuestiones bloqueantes enlazados | Arquitectura suficiente o bloqueo declarado |
| 7 | Revisión | Versión revisable | Informe `REV-*` cuando corresponda y correcciones | Revisión proporcional completa |
| 8 | SPEC Candidata | Revisión conforme | Corte material sometido al Founder | Sin bloqueos abiertos incompatibles |
| 9 | SPEC Aprobada | Decisión del Founder | Acto y versión aprobada | Aprobación expresa del corte exacto |
| 10 | Preparación | SPEC aprobada y publicada | Plan, pruebas derivadas, contratos materializados, riesgos y Context Package | Todos los entregables G9 presentes |
| 11 | Listo para Implementar | Preparación completa | Declaración LPI | G9 aprobado; ninguna decisión crítica pendiente |
| 12 | Implementación | LPI vigente | Cambio material trazable | Dentro de archivos, contratos y alcance autorizados |
| 13 | Verificación | Implementación y pruebas | Evidencias `EVI-*` y resultado de criterios | Cero criterio obligatorio sin resultado |
| 14 | Aceptación | Resultado verificado | Acto `ACE-*` | Autoridad competente acepta o devuelve |
| 15 | Terminado | Aceptación y cierre documental | Declaración Terminado | Lista de control completa |
| 16 | Versión o publicación | Resultado terminado | Versión identificada y, si se autoriza, publicación | Línea base y autorización correspondientes |
| 17 | Aprendizaje | Evidencias y experiencia | Registro de conocimiento, lección o “sin aprendizaje reusable” | Cierre trazable |

Los pasos 12 a 17 describen el ciclo objetivo. G3 no los habilita materialmente: el paso 12 continúa bloqueado hasta la aprobación de G9.

---

## 5. Estados documentales de una SPEC

| Estado | Significado | Puede avanzar a | Autoridad o responsabilidad de transición |
|---|---|---|---|
| Borrador | Versión en elaboración, sin autoridad normativa | En revisión; Retirada | Propietario documental dentro de una misión autorizada |
| En revisión | Corte estable sometido a evaluación | Borrador; Candidato; Retirada | Dirección Técnica coordina; revisión emite resultado |
| Candidato | Corte cerrado propuesto al decisor | Borrador; Aprobada; Retirada | Founder decide aprobación o devolución |
| Aprobada | Corte exacto con aprobación institucional | Publicada; Sustituida; Retirada | Founder o autoridad futura expresamente competente |
| Publicada | Versión aprobada incorporada oficialmente | Sustituida; Retirada | Publicación requiere autorización separada |
| Sustituida | Existe una versión sucesora vigente | Retirada | Acto que aprueba o publica la sucesora |
| Retirada | No debe emplearse para nuevas actuaciones | Estado terminal | Autoridad competente mediante acto motivado |

Reglas:

- una versión `Publicada` es inmutable;
- una devolución produce otra versión candidata; no reescribe el corte decidido;
- `Sustituida` conserva historia y enlace al sucesor;
- `Retirada` no elimina el archivo ni libera su identificador;
- el estado documental no se infiere del nombre, fecha, ruta o commit.

---

## 6. Estados de implementación

| Estado | Significado |
|---|---|
| No iniciada | No existe autorización de preparación o implementación |
| Preparación | Se derivan plan, contratos, pruebas, datos y Context Package |
| Lista para implementar | La puerta G9 y la declaración LPI están aprobadas |
| En implementación | Se materializa el alcance autorizado |
| En verificación | El resultado se contrasta con pruebas y criterios |
| Aceptada | La autoridad competente aceptó el resultado verificado |
| Liberada | Una publicación destinada a sus destinatarios fue autorizada y realizada |
| Detenida | Existe un bloqueo que impide continuar sin nueva evidencia o decisión |
| Cancelada | La iniciativa fue cerrada sin completar el resultado |

El estado de implementación se registra separadamente de la madurez de la SPEC. `Aprobada` o `Publicada` no equivale a `En implementación`, `Aceptada` ni `Liberada`.

---

## 7. Puerta Listo para Especificar — LPE

Una iniciativa está Listo para Especificar únicamente si:

1. posee `INI-*`, responsable de preparación y autoridad decisoria identificados;
2. la necesidad, el resultado observable y la razón de prioridad están documentados;
3. los interesados o actores conocidos están identificados sin inventar roles vigentes;
4. incluidos, excluidos y no objetivos están delimitados;
5. la línea base y las fuentes institucionales aplicables están identificadas;
6. los `INV-*`, `VAR-*` y excepciones conocidas están declarados;
7. el impacto inicial sobre producto, arquitectura, seguridad, datos, calidad, documentación y operación fue evaluado;
8. las decisiones faltantes están resueltas o registradas como bloqueos explícitos;
9. existe método previsto para verificar el resultado;
10. Dirección Técnica recomienda avanzar y el Founder autoriza la elaboración de la SPEC cuando corresponda.

LPE permite redactar una SPEC; no aprueba su contenido ni autoriza implementación.

---

## 8. Puerta Listo para Implementar — LPI

Un incremento está Listo para Implementar únicamente si:

1. la SPEC exacta está aprobada y publicada;
2. G4, G5, G6 y G7 se encuentran cerradas para el alcance aplicable;
3. los ADR necesarios están aprobados y materializados;
4. los contratos, schemas, estados, errores y ownership están definidos;
5. los criterios de aceptación son binarios y poseen método de verificación;
6. las pruebas de contrato y aceptación están preparadas;
7. seguridad, privacidad, observabilidad, dependencias y licencias poseen tratamiento verificable;
8. el plan de implementación identifica tareas, orden, archivos permitidos y prohibidos;
9. riesgos, rollback y controles de cambio están registrados;
10. el Context Package exacto fue validado;
11. no existen bloqueos críticos ni decisiones implícitas;
12. la puerta G9 fue aprobada expresamente.

LPI es una declaración sobre un corte exacto. Si cambia una entrada obligatoria, pierde vigencia hasta nueva revisión.

---

## 9. Criterio Terminado

Un incremento puede declararse Terminado únicamente si:

1. la implementación coincide con la SPEC y los contratos aprobados;
2. todos los criterios de aceptación obligatorios tienen resultado conforme;
3. las pruebas requeridas finalizaron y su evidencia es reproducible;
4. no existen regresiones conocidas incompatibles con la aceptación;
5. seguridad, calidad y observabilidad cumplen los umbrales aplicables;
6. las desviaciones y deudas están resueltas o aceptadas por autoridad competente;
7. la documentación, trazabilidad y registros de cambio están actualizados mediante versiones sucesoras cuando corresponda;
8. el resultado fue integrado sin vulnerar fronteras arquitectónicas;
9. existe acto de aceptación `ACE-*`;
10. el aprendizaje reutilizable fue registrado o se declaró justificadamente que no lo hubo;
11. la versión resultante es identificable y el estado de publicación se registra por separado.

Terminado no equivale automáticamente a Liberado.

---

## 10. Matriz de responsabilidades

Los nombres siguientes designan responsabilidades del proceso, no nuevas autoridades ni puestos permanentes.

| Responsabilidad | Función | Decide | No puede |
|---|---|---|---|
| Founder | Prioridad, alcance institucional, aprobación final, excepciones fundacionales y aceptación | Sí, dentro de su autoridad final | Delegar implícitamente por silencio |
| Dirección Técnica | Integrar fuentes, controlar arquitectura, trazabilidad y puertas; recomendar | Solo dentro de competencias técnicas ya vigentes | Sustituir la decisión institucional del Founder |
| Producto y experiencia | Proponer necesidad, resultado, comportamiento y criterios desde el producto | No por su sola intervención | Definir permisos, arquitectura o aprobación final |
| Propietario documental | Mantener coherencia e identidad de una SPEC o activo | Transiciones preparatorias dentro de la misión | Aprobar su propio candidato cuando se exige independencia |
| Implementación | Materializar la SPEC y el plan después de LPI | No | Completar decisiones faltantes o ampliar alcance |
| Verificación | Ejecutar controles y producir evidencia | Declara resultado técnico, no aceptación institucional | Cambiar el criterio mientras lo verifica |
| Revisión independiente | Evaluar un corte cuando el riesgo lo exige | Recomienda aprobar o devolver | Aprobar su propio trabajo previo |
| Agente | Ejecutar una misión acotada y producir entregables | No posee autoridad por ser agente | Inventar, autoaprobar, publicar o exceder la misión |

Cada actuación debe asignar personas o agentes concretos a las responsabilidades necesarias y declarar incompatibilidades. `Admin`, `AI` y `Usuario` continúan como hipótesis futuras y no participan como roles vigentes.

---

## 11. Delegación y reserva humana

### Delegable bajo misión explícita

- inventariar y comparar fuentes;
- preparar borradores y matrices;
- ejecutar verificaciones reproducibles;
- comprobar enlaces, identificadores, manifiestos y criterios;
- materializar cambios ya aprobados dentro de archivos autorizados;
- preparar informes y recomendaciones.

### Requiere decisión humana competente

- aprobar prioridad, alcance o una SPEC;
- resolver contradicciones institucionales;
- cambiar principios, invariantes o arquitectura;
- aprobar excepciones;
- aceptar riesgos residuales o deuda;
- autorizar publicación, liberación o código cuando corresponda;
- aceptar el resultado final.

Un agente debe detenerse ante autoridad ambigua, evidencia crítica ausente, conflicto documental, alcance abierto o necesidad de decisión reservada.

---

## 12. Condición de vigencia

El Founder aprobó el contenido de este modelo mediante D-19, D-21, D-22, D-24 y D-25. Su vigencia operativa comenzará únicamente cuando `LB-G3-GMS-20260904-01` sea aprobada y publicada. Hasta entonces permanece aprobado para incorporación, pero no habilita el uso institucional de la familia SPEC ni código funcional.
