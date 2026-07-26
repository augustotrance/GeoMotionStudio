# Mapa de Integración Documental

**Código:** INT-002  
**Estado:** Activo  
**Responsable:** Dirección Técnica

---

# Objetivo

Este documento define la organización general de la documentación de GeoMotion Studio y las relaciones existentes entre sus principales componentes.

Su finalidad es proporcionar una visión unificada del ecosistema documental del proyecto, facilitar la navegación entre documentos y preservar la coherencia arquitectónica durante la evolución del sistema.

No constituye un documento normativo del Manual de Ingeniería ni modifica la arquitectura vigente. Su función es servir como herramienta de referencia para la Dirección Técnica.

---

# Principios

- Cada documento debe tener una única responsabilidad principal.
- Ningún documento debe duplicar información perteneciente a otro.
- La autoridad de cada documento debe estar claramente definida.
- La arquitectura precede a la implementación.
- La documentación evoluciona de forma controlada y trazable.

---

# Organización documental

```text
GeoMotion Studio
│
├── Identidad del Proyecto
│   ├── Lema
│   ├── Propósito
│   ├── Visión
│   ├── Misión
│   ├── Valores
│   └── Filosofía de Ingeniería
│
├── Manual de Ingeniería
│   ├── Fundamentos
│   ├── Visión del Producto
│   ├── Arquitectura
│   ├── Sistema de Diseño
│   ├── Pila Tecnológica
│   ├── Arquitectura Física
│   ├── Arquitectura Modular
│   ├── Contratos
│   ├── ADR
│   └── Resto de documentos oficiales
│
├── Implementación
│   ├── Código Fuente
│   ├── Especificaciones
│   ├── Automatización
│   ├── Pruebas
│   └── Infraestructura
│
└── Validación Arquitectónica
    ├── MVA
    ├── Validaciones
    └── Evidencias
```

---

# Relaciones entre niveles

## Identidad del Proyecto

Define la razón de ser de GeoMotion Studio y establece los principios que orientan todas las decisiones posteriores.

## Manual de Ingeniería

Describe oficialmente la arquitectura, las normas y las decisiones estructurales del proyecto.

Constituye la principal referencia técnica para el desarrollo del sistema.

## Implementación

Materializa la arquitectura definida por el Manual de Ingeniería.

La implementación nunca redefine la arquitectura.

## Validación Arquitectónica

Comprueba que las decisiones arquitectónicas pueden implementarse correctamente.

La validación proporciona evidencia técnica, pero no modifica la arquitectura aprobada.

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

Cada nivel depende del inmediatamente superior y debe mantenerse alineado con él.

---

# Función de la Dirección Técnica

La Dirección Técnica utiliza este mapa para:

- mantener la coherencia documental;
- identificar relaciones entre documentos;
- detectar duplicidades;
- facilitar la integración de nuevos documentos;
- preservar la trazabilidad del conocimiento arquitectónico.

---

# Mantenimiento

Este documento deberá actualizarse cuando:

- se incorpore un nuevo documento estructural;
- cambie la organización del Manual de Ingeniería;
- se modifique la estructura documental del proyecto;
- se introduzcan nuevos mecanismos permanentes de validación arquitectónica.

Su mantenimiento corresponde exclusivamente a la Dirección Técnica.

---

# Estado del documento

Este documento forma parte de la documentación interna de la Dirección Técnica.

No constituye una especificación arquitectónica ni un documento normativo del Manual de Ingeniería.

Su propósito es facilitar la comprensión de la estructura documental del proyecto y servir como apoyo para la evolución controlada del conocimiento técnico de GeoMotion Studio.
