# Decisiones Pendientes

**Código:** INT-005  
**Estado:** Activo  
**Responsable:** Dirección Técnica

---

# Objetivo

Este documento registra decisiones institucionales que han sido
identificadas como necesarias para la evolución del proyecto, pero cuya
resolución ha sido deliberadamente aplazada.

Su finalidad es proporcionar visibilidad sobre los asuntos pendientes de
definición sin introducir decisiones provisionales ni afectar la
arquitectura vigente.

Las decisiones aquí registradas no constituyen Architecture Decision
Records (ADR), no modifican el Manual de Ingeniería y no autorizan
ninguna implementación.

---

# Alcance

Este documento podrá contener únicamente decisiones cuya resolución:

- tenga impacto arquitectónico, metodológico o documental;
- dependa de información aún no disponible;
- requiera una evaluación posterior;
- haya sido pospuesta por decisión expresa de Dirección Técnica.

No deberán registrarse aquí:

- tareas de desarrollo;
- incidencias;
- ideas;
- observaciones de revisión;
- cambios editoriales;
- decisiones ya aprobadas;
- ADR formalizados.

---

# Criterios de incorporación

Una decisión pendiente podrá incorporarse únicamente cuando:

- exista una necesidad objetiva de resolverla en el futuro;
- todavía no sea posible adoptar una decisión fundamentada;
- su aplazamiento no comprometa la coherencia de la arquitectura vigente.

Cada registro deberá representar una única decisión.

---

# Registro de decisiones pendientes

Actualmente no existen decisiones pendientes registradas.

Las futuras incorporaciones deberán seguir la plantilla establecida en
este documento.

---

# Plantilla de registro

## DEC-XXX · Título

**Origen**

Descripción del contexto en el que surge la necesidad de decidir.

### Situación actual

Estado vigente de la cuestión.

### Alternativas identificadas

- Alternativa A
- Alternativa B
- Alternativa C

### Información pendiente

Elementos necesarios para poder adoptar una decisión fundamentada.

### Impacto esperado

Descripción del posible impacto sobre la arquitectura, el Manual de
Ingeniería o la implementación.

### Estado

Pendiente de resolución.

---

# Ciclo de vida

```text
Necesidad identificada
          │
          ▼
Decisión pendiente
          │
          ▼
Evaluación
          │
   ┌──────┴──────┐
   ▼             ▼
Descartada   Aprobada
                   │
                   ▼
 ADR o Documento
 correspondiente
```

La aprobación de una decisión deberá reflejarse en el documento
normativo correspondiente y, cuando proceda, mediante un Architecture
Decision Record.

---

# Revisión

Las decisiones pendientes deberán revisarse:

- cuando finalice un ciclo arquitectónico;
- cuando se disponga de nueva información relevante;
- cuando cambien las restricciones del proyecto;
- cuando la Dirección Técnica lo considere oportuno.

Las decisiones resueltas deberán eliminarse de este registro y quedar
documentadas en el mecanismo institucional que corresponda.

---

# Reglas de mantenimiento

Este documento deberá mantenerse reducido y contener únicamente asuntos
que requieran una decisión futura.

Cada entrada deberá:

- representar una única decisión;
- indicar claramente por qué ha sido aplazada;
- facilitar su futura evaluación;
- evitar proponer soluciones prematuras.

Las decisiones que pierdan vigencia deberán eliminarse del registro.

---

# Estado del documento

Este documento forma parte de la documentación interna de Dirección
Técnica.

No constituye un documento normativo del Manual de Ingeniería.

Su propósito es preservar la trazabilidad de aquellas decisiones cuya
resolución ha sido expresamente diferida para mantener la estabilidad de
la arquitectura vigente.