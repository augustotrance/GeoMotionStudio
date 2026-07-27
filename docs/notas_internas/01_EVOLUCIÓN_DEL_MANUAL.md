# Evolución Manual

**Código:** INT-001  
**Estado:** Activo  
**Responsable:** Dirección Técnica

---

# Objetivo

Este documento registra recomendaciones internas surgidas durante las
auditorías del Manual de Ingeniería que **no requieren acción
inmediata**, pero que pueden aportar mejoras cuando el proyecto alcance
una mayor madurez documental.

Su finalidad es evitar perder ideas de mejora sin introducir cambios
prematuros en la estructura del Manual.

Las recomendaciones registradas en este documento no constituyen
decisiones aprobadas, modificaciones del Manual de Ingeniería ni
autorizaciones para alterar la arquitectura vigente.

Toda propuesta aquí registrada deberá evaluarse nuevamente cuando las
condiciones que motivaron su aplazamiento hayan cambiado.

---

# Alcance

Este documento registra únicamente propuestas de evolución relacionadas
con:

- organización del Manual de Ingeniería;
- estructura documental;
- distribución de contenidos;
- incorporación de nuevos documentos;
- reorganización futura de capítulos;
- mejoras de mantenibilidad documental.

No deberán registrarse aquí:

- correcciones editoriales;
- errores del Manual;
- decisiones arquitectónicas;
- ADR;
- tareas de implementación;
- observaciones temporales;
- incidencias detectadas durante revisiones.

---

# Criterios de incorporación

Una propuesta podrá registrarse únicamente cuando:

- no resulte necesaria para la versión vigente;
- exista una justificación documental clara para posponerla;
- pueda aportar valor en una evolución futura del Manual;
- no implique modificar inmediatamente documentación aprobada.

Cada intervención deberá ser suficientemente concreta para poder ser
reevaluada en el futuro sin necesidad de reconstruir su contexto.

---

# Intervención 001 · Documento de Procesos de Ingeniería

**Origen:** Auditoría de `04_PILA_TECNOLÓGICA.md`

---

## Situación actual

Actualmente el documento **04_PILA_TECNOLÓGICA** incluye capítulos
relacionados con:

- Calidad del Código
- Testing
- Documentación
- Automatización e Integración Continua
- Distribución y Despliegue
- Versionado

Esta organización es adecuada para la versión actual del Manual y no
requiere modificaciones.

---

## Recomendación

Cuando el Manual crezca de forma significativa, evaluar la creación de
un documento específico denominado, de forma provisional:

> **Procesos de Ingeniería**

Dicho documento podría centralizar los procesos transversales
relacionados con la construcción, validación y mantenimiento del
software.

---

### Posibles contenidos

- Calidad del código
- Testing
- Integración Continua (CI)
- Entrega Continua (CD)
- Automatización
- Gestión de Releases
- Documentación técnica
- Procedimientos de revisión

---

## Motivo

La separación solo será recomendable cuando reduzca la complejidad
documental.

Mientras tanto, mantener estos capítulos dentro de
`04_PILA_TECNOLÓGICA` favorece una consulta unificada y evita fragmentar
innecesariamente el Manual.

---

## Estado

**Pendiente de reevaluación en una futura evolución del Manual.**

---

# Registro de futuras intervenciones

| ID | Documento | Propuesta | Prioridad | Estado | Observaciones |
|-----|-----------|-----------|-----------|---------|---------------|
| INT-001 | 04_PILA_TECNOLÓGICA | Evaluar documento de Procesos de Ingeniería | Baja | Pendiente | Reevaluar tras consolidación del Manual |
| INT-002 | — | — | — | Disponible | |
| INT-003 | — | — | — | Disponible | |
| INT-004 | — | — | — | Disponible | |
| INT-005 | — | — | — | Disponible | |
| INT-006 | — | — | — | Disponible | |
| INT-007 | — | — | — | Disponible | |
| INT-008 | — | — | — | Disponible | |
| INT-009 | — | — | — | Disponible | |
| INT-010 | — | — | — | Disponible | |

---

# Revisión de intervenciones

Las intervenciones registradas en este documento deberán revisarse:

- cuando finalice un ciclo importante del Manual;
- cuando se apruebe una nueva arquitectura con impacto documental;
- cuando la estructura del Manual cambie de forma significativa;
- cuando una propuesta deje de tener sentido;
- cuando una propuesta sea implementada.

Las intervenciones implementadas deberán eliminarse de este registro y
pasar a formar parte del historial correspondiente del documento
afectado.

---

# Reglas de mantenimiento

Este documento deberá mantenerse pequeño, estable y fácilmente
consultable.

No debe convertirse en un listado indefinido de ideas.

Cada entrada deberá:

- describir una única evolución;
- indicar claramente su origen;
- justificar su aplazamiento;
- permitir una futura reevaluación.

Cuando una intervención permanezca sin vigencia o pierda su utilidad,
deberá eliminarse del registro.

---

# Estado del documento

Este documento forma parte de la documentación interna de Dirección
Técnica.

No constituye un documento normativo del Manual de Ingeniería.

Su función es preservar propuestas de evolución documental cuya
implementación ha sido deliberadamente pospuesta para evitar cambios
prematuros en la arquitectura documental del proyecto.