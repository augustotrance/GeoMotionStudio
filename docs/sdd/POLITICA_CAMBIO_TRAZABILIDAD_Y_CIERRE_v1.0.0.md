# GeoMotion Studio

# Política de cambio, trazabilidad, revisión y cierre SDD

**Identificador:** `POL-SDD-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado — vigencia diferida hasta la publicación de `LB-G3-GMS-20260904-01`  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G3 — Gobierno operativo de SDD  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G3-GMS-20260904-07`; D-27 y D-28  
**Línea base prevista:** `LB-G3-GMS-20260904-01`

---

## 1. Propósito

Especializar para SDD las reglas vigentes de cambio, trazabilidad, revisión proporcional, sustitución, retiro y aprendizaje sin reemplazar DOC-006, DOC-014, DOC-015, DOC-018 ni INT-011.

Esta política no habilita cambios funcionales, no altera líneas base aprobadas y no crea autoridad paralela.

---

## 2. Principios

1. Todo cambio posee motivo, alcance, impacto, evidencia y autoridad identificables.
2. Ninguna versión publicada se modifica silenciosamente.
3. Si cambia el comportamiento esperado, primero cambia y se aprueba la SPEC.
4. Si cambia la arquitectura, primero se resuelve mediante ADR y sucesores documentales cuando corresponda.
5. Una excepción no reemplaza un cambio permanente ni crea precedente.
6. La profundidad de revisión responde al riesgo objetivo.
7. La trazabilidad relaciona identificadores y versiones; no duplica textos como autoridad.
8. La ausencia de observaciones materiales es un resultado válido.
9. La aceptación técnica no sustituye la decisión institucional.
10. La historia se conserva también cuando una iniciativa se devuelve, cancela, sustituye o retira.

---

## 3. Registro de cambio

Todo cambio controlado utiliza `CAM-GMS-NNNN` y contiene:

| Campo | Contenido obligatorio |
|---|---|
| Origen | Necesidad, hallazgo, evidencia, incidente o aprendizaje que lo motiva |
| Activo afectado | ID, versión, estado, ruta e identidad material |
| Tipo | Documental, conductual, contractual, arquitectónico, seguridad, dependencia u operativo |
| Motivo | Problema objetivo o mejora verificable |
| Alcance | Incluidos, excluidos, rutas y destinatarios |
| Impacto | Producto, experiencia, arquitectura, datos, seguridad, calidad, documentación y operación |
| Compatibilidad | Efecto sobre consumidores, datos y versiones anteriores |
| Reversión | Estado recuperable y método de comprobación |
| Trazabilidad | INI, SPEC, requisitos, ADR, contratos, pruebas, evidencias y línea base relacionados |
| Revisión | Clase de riesgo y responsables separados cuando corresponda |
| Decisión | Autoridad, fecha, resultado y condiciones |
| Estado | Propuesto, En análisis, Candidato, Aprobado, Implementado, Verificado, Aceptado, Cerrado, Rechazado o Cancelado |

El estado del cambio no reemplaza el estado del activo ni el de implementación.

---

## 4. Clasificación de revisión

| Clase | Criterios acumulativos o dominantes | Revisión mínima | Decisión |
|---|---|---|---|
| `R0` | Corrección editorial sin cambio semántico, de estado, autoridad, obligación, identificador ni enlace normativo | Comprobación documental por otra persona o control reproducible cuando sea suficiente | Propietario conforme a misión; versión sucesora si el activo es publicado |
| `R1` | Cambio documental acotado, navegación, metadatos o proceso interno sin comportamiento ni contrato | Revisión documental y de trazabilidad | Autoridad del documento o Founder según gobernanza |
| `R2` | Comportamiento, requisito, contrato, datos, dependencia, calidad, experiencia o compatibilidad | Revisión técnica y verificación independiente | Founder para SPEC y alcance; autoridades vigentes para actos especializados |
| `R3` | Arquitectura, seguridad material, principio, invariante, excepción, pérdida de compatibilidad relevante o alto impacto | Revisión independiente reforzada, análisis de alternativas y ADR cuando aplique | Founder y autoridades institucionales competentes |

Reglas:

- prevalece la clase más alta aplicable;
- el número de líneas no reduce ni eleva por sí solo la clase;
- el autor no actúa como único revisor independiente de su resultado;
- una automatización puede aportar controles, pero no asumir decisión reservada;
- una reducción de clase requiere fundamento documentado.

---

## 5. Cambio de una SPEC

### 5.1 Antes de aprobación

Un borrador puede evolucionar dentro de la misión. Al entrar en revisión se fija un corte identificable. Una devolución desde `En revisión` o `Candidato` produce otra versión; conserva observaciones y relaciones.

### 5.2 Después de aprobación

Todo cambio material produce una versión sucesora de la misma `SPEC-*` cuando conserva la identidad del incremento. Si el resultado perseguido cambia de identidad o alcance esencial, corresponde otra iniciativa y otra SPEC.

La sucesora debe indicar:

- versión anterior;
- motivo y `CAM-*`;
- requisitos, contratos y criterios agregados, modificados o retirados;
- impacto en trabajo preparado, implementado o liberado;
- migración, compatibilidad y reversión;
- nueva revisión y aprobación.

### 5.3 Durante implementación

El descubrimiento de una desviación no autoriza cambiar la SPEC desde el código. Se detiene el alcance afectado, se registra el hallazgo y se decide entre:

1. corregir la implementación para cumplir la SPEC;
2. emitir una sucesora de la SPEC y repetir las puertas afectadas;
3. solicitar una excepción temporal conforme a G2;
4. cancelar el cambio.

---

## 6. Excepción

Una excepción utiliza `EXC-GMS-NNNN` y satisface la regla aprobada en G2: necesidad objetiva, alternativas, impacto, alcance mínimo, duración, controles compensatorios, reversión, evidencia, recomendación y decisión competente.

No puede:

- cambiar retroactivamente una línea base;
- ocultar contradicciones;
- eliminar trazabilidad;
- conferir autoridad a agentes o herramientas;
- habilitar código funcional antes de G9;
- permanecer indefinidamente sin convertirse en regla sucesora o cerrarse.

---

## 7. Sustitución y retiro

### Sustitución

Un activo se marca `Sustituido` cuando existe sucesor aprobado aplicable. Debe conservar:

- enlace bidireccional entre predecesor y sucesor;
- fecha y acto;
- alcance de la sustitución total o parcial;
- tratamiento de consumidores y trabajo en curso.

### Retiro

Un activo se marca `Retirado` mediante acto motivado cuando deja de ser apto para nuevas actuaciones y no corresponde mantenerlo como vigente. El retiro:

- no elimina el material ni libera identificadores;
- identifica reemplazo o ausencia deliberada;
- evalúa impacto, migración y conservación histórica;
- no borra evidencias previas legítimas.

---

## 8. Trazabilidad obligatoria

### 8.1 Cadena mínima

`INI → SPEC → RF/RNF → CTR/ERR/CA → PRU → cambio de implementación → EVI → ACE → versión/línea base/publicación → aprendizaje`

### 8.2 Relaciones mínimas

| Origen | Relación | Destino |
|---|---|---|
| Iniciativa | origina | SPEC |
| Fuente institucional | autoriza, restringe o informa | requisito, contrato o decisión |
| Requisito | se materializa mediante | contrato o comportamiento |
| Invariante | restringe | SPEC, contrato, plan e implementación |
| Criterio de aceptación | verifica | requisito o resultado |
| Prueba | ejecuta método de | criterio o contrato |
| Evidencia | demuestra resultado de | prueba o control |
| ADR | resuelve | decisión arquitectónica |
| CAM | modifica | versión o alcance identificado |
| EXC | exceptúa temporalmente | regla identificada |
| ACE | acepta o devuelve | resultado verificado |
| Registro de conocimiento | conserva aprendizaje de | iniciativa o cambio |

### 8.3 Integridad

Cada relación utiliza ID y versión o corte exacto. Si el destino no está materialmente disponible, se registra como ausencia y se evalúa bloqueo. Un enlace roto o una referencia ambigua no se considera trazabilidad completa.

---

## 9. Revisión de una SPEC

La revisión verifica al menos:

1. autoridad, estado e identidad material;
2. necesidad, valor, alcance y no objetivos;
3. requisitos atómicos y verificables;
4. coherencia con arquitectura, ADR y ownership;
5. invariantes, variantes y excepciones;
6. contratos, estados y errores;
7. seguridad, privacidad y control humano;
8. RNF medibles y criterios binarios;
9. dependencias, licencias y compatibilidad;
10. trazabilidad completa;
11. ausencia de decisiones implícitas;
12. separaciones de responsabilidades requeridas.

Los hallazgos se clasifican como defecto objetivo, juicio que requiere decisión o mejora opcional, conforme a INT-011. Solo los defectos y decisiones bloqueantes impiden avanzar.

---

## 10. Aceptación y cierre

La verificación informa conformidad o no conformidad. La aceptación utiliza `ACE-GMS-NNNN` e identifica:

- resultado y versión evaluados;
- SPEC y línea base aplicables;
- criterios y evidencias;
- desviaciones y deuda residual;
- alcance aceptado o devuelto;
- autoridad y fecha;
- condiciones posteriores.

El cambio se cierra únicamente cuando la aceptación, versión, trazabilidad y aprendizaje están registrados. Si termina sin implementación, se consigna `Rechazado` o `Cancelado` con su fundamento; no se simula Terminado.

---

## 11. Aprendizaje

Al cierre se evalúa si existió conocimiento reutilizable:

- hallazgo técnico;
- hipótesis confirmada o refutada;
- problema recurrente;
- lección aprendida;
- buena práctica;
- necesidad de ADR, sucesor documental o ajuste del proceso.

Cuando exista, se registra conforme a DOC-015. Cuando no exista, el cierre puede declarar `Sin aprendizaje reutilizable identificado` con fundamento breve. El aprendizaje no modifica por sí mismo requisitos, arquitectura ni políticas.

---

## 12. Condición de vigencia

El Founder aprobó esta política mediante D-27 y D-28. Su vigencia operativa comenzará únicamente cuando `LB-G3-GMS-20260904-01` sea aprobada y publicada. Hasta entonces permanece aprobada para incorporación, pero no habilita cambios funcionales ni el uso institucional de la familia SPEC.
