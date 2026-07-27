# Mapa de Integración Documental

**Código:** INT-002  
**Estado:** Activo  
**Responsable:** Dirección Técnica

---

# Objetivo

Este documento define la organización general del ecosistema documental de
GeoMotion Studio y las relaciones existentes entre sus principales
componentes.

Su finalidad es proporcionar una visión unificada de la documentación del
proyecto, facilitar la navegación entre documentos y preservar la
coherencia arquitectónica durante la evolución del sistema.

No constituye un documento normativo del Manual de Ingeniería ni modifica
la arquitectura vigente.

Su función es servir como herramienta de integración, referencia y
continuidad para la Dirección Técnica.

---

# Principios

- Cada documento posee una única responsabilidad principal.
- Ningún documento debe duplicar información cuya autoridad pertenezca a otro.
- La autoridad documental debe estar claramente identificada.
- La arquitectura precede a la implementación.
- La documentación evoluciona de forma controlada y trazable.
- La integración documental nunca modifica por sí misma la arquitectura aprobada.
- Los documentos internos apoyan la gobernanza, pero no sustituyen al Manual de Ingeniería.

---

# Ecosistema documental

```text
GeoMotion Studio
│
├── Identidad del Proyecto
│   ├── Visión
│   ├── Misión
│   ├── Valores
│   ├── Filosofía de Ingeniería
│   └── Principios institucionales
│
├── Manual de Ingeniería
│   ├── Fundamentos
│   ├── Visión del Producto
│   ├── Arquitectura
│   ├── Sistema de Diseño
│   ├── Pila Tecnológica
│   ├── Arquitectura Física
│   ├── Arquitectura Modular
│   ├── Arquitectura de Contratos
│   ├── Architecture Decision Records
│   └── Resto de documentos oficiales
│
├── Documentación interna
│   ├── INT-000 Estado del Proyecto
│   ├── INT-001 Evolución del Manual
│   ├── INT-002 Mapa de Integración Documental
│   ├── INT-003 Informes de Integración Técnica
│   ├── INT-004 Ideas
│   ├── INT-005 Decisiones Pendientes
│   ├── INT-006 Observaciones
│   └── INT-007 Actas de Aprobación Arquitectónica
│
├── Implementación
│   ├── Código fuente
│   ├── Especificaciones
│   ├── Automatización
│   ├── Pruebas
│   └── Infraestructura
│
└── Validación Arquitectónica
    ├── Minimum Viable Architecture
    ├── Validaciones
    └── Evidencias
```

---

# Relaciones entre niveles

## Identidad del Proyecto

Define la razón de ser de GeoMotion Studio y establece los principios que
orientan todas las decisiones posteriores.

Toda la documentación restante deriva de este nivel.

---

## Manual de Ingeniería

Describe oficialmente la arquitectura, las normas, los principios y las
decisiones estructurales del proyecto.

Constituye la referencia técnica y arquitectónica vigente.

Toda modificación del Manual requiere el proceso de revisión
correspondiente.

---

## Documentación interna

La documentación interna proporciona soporte a la Dirección Técnica para
preservar la continuidad del proyecto.

Su finalidad es registrar:

- estado institucional;
- evolución documental;
- integración;
- decisiones pendientes;
- observaciones;
- ideas;
- evidencias históricas;
- trazabilidad.

Estos documentos no modifican el Manual de Ingeniería ni sustituyen las
Architecture Decision Records.

---

## Implementación

Materializa la arquitectura definida por el Manual de Ingeniería.

La implementación nunca redefine la arquitectura.

Las decisiones de implementación permanecen subordinadas a los documentos
normativos.

---

## Validación Arquitectónica

Comprueba que las decisiones arquitectónicas pueden implementarse de forma
coherente.

La validación aporta evidencia objetiva, pero no modifica la arquitectura
aprobada.

---

# Flujo de autoridad

```text
Identidad del Proyecto
          │
          ▼
Manual de Ingeniería
          │
          ▼
Implementación
          │
          ▼
Validación Arquitectónica
```

La documentación interna acompaña este flujo proporcionando continuidad,
integración y trazabilidad, sin alterar la autoridad de ninguno de sus
niveles.

---

# Relaciones entre la documentación interna

```text
INT-000 Estado del Proyecto
        │
        ├──────────────┐
        │              │
        ▼              ▼
INT-001           INT-002
 Evolución         Integración
 del Manual        Documental
        │              │
        └──────┬───────┘
               ▼
        INT-003 Informes
        de Integración
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
 INT-004   INT-005   INT-006
  Ideas   Decisiones Observaciones
          Pendientes
               │
               ▼
 INT-007 Actas de
 Aprobación Arquitectónica
```

Esta relación expresa únicamente dependencias documentales y no establece
jerarquías normativas adicionales.

---

# Función de la Dirección Técnica

La Dirección Técnica utiliza este mapa para:

- mantener la coherencia documental;
- identificar relaciones entre documentos;
- detectar duplicidades;
- preservar responsabilidades únicas;
- facilitar la incorporación de nuevos documentos;
- mantener la trazabilidad del conocimiento;
- apoyar los procesos de integración institucional.

---

# Reglas de mantenimiento

Este documento deberá actualizarse cuando:

- se incorpore un nuevo documento estructural;
- cambie la organización del Manual de Ingeniería;
- cambie la organización de la documentación interna;
- aparezca una nueva categoría documental permanente;
- se retire un documento estructural;
- se modifique el modelo general de gobierno documental.

No deberá modificarse por cambios editoriales menores.

---

# Estado del documento

Este documento forma parte de la documentación interna de Dirección
Técnica.

No constituye una especificación arquitectónica ni un documento normativo
del Manual de Ingeniería.

Su propósito es facilitar la comprensión del ecosistema documental de
GeoMotion Studio, preservar la separación de responsabilidades entre
documentos y servir como referencia para la evolución controlada de la
documentación del proyecto.