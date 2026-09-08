# Documentación de GeoMotion Studio

Bienvenido a la documentación oficial de **GeoMotion Studio**.

Este directorio reúne la documentación técnica, arquitectónica y de referencia utilizada durante el diseño, desarrollo y evolución del proyecto.

Su objetivo es proporcionar un punto de acceso organizado para desarrolladores, colaboradores y cualquier persona interesada en comprender la arquitectura y el funcionamiento interno de la plataforma. La autoridad de cada contenido depende de su documento institucional, versión, estado y acto aplicable.

---

# Organización

La documentación se encuentra organizada en diferentes categorías según su propósito.

## Ingeniería

Contiene el **Manual de Ingeniería** de GeoMotion Studio.

Este manual describe la arquitectura completa de la plataforma, los principios de diseño, los componentes principales y las decisiones fundamentales que guían el desarrollo del proyecto.

Actualmente está compuesto por **22 documentos** que abarcan, entre otros temas:

- Arquitectura General
- Sistema de Diseño
- Arquitectura Cartográfica
- Arquitectura de Componentes
- Arquitectura de Inteligencia Artificial
- Autenticación y Seguridad
- Gestión de Versiones
- Arquitectura y dominio mínimos del piloto
- Perfil de calidad, seguridad y verificación del piloto
- Fundación ejecutable y conformidad automática del repositorio

---

## ADR

La carpeta `adr/` contiene los **Architecture Decision Records (ADR)**.

Cada ADR documenta una decisión arquitectónica importante, incluyendo el contexto, las alternativas consideradas y la decisión adoptada.

Los ADR permiten comprender la evolución técnica del proyecto y las razones detrás de las decisiones de diseño.

---

## Ejemplos

La carpeta `ejemplos/` reúne ejemplos, demostraciones y material de apoyo para comprender la utilización de diferentes componentes y funcionalidades de la plataforma.

Estos ejemplos complementan la documentación técnica y sirven como referencia para desarrolladores.

---

## Referencias

La carpeta `referencias/` contiene índices, registros transversales, documentación externa, especificaciones, investigaciones y material de consulta utilizado durante el diseño y desarrollo de GeoMotion Studio.

Estos documentos constituyen una base de conocimiento complementaria al Manual de Ingeniería. Una ruta o un índice no concede autoridad institucional por sí mismo.

Referencias transversales de G2:

- [Índice de glosarios de dominio](referencias/INDICE_DE_GLOSARIOS_DE_DOMINIO_v1.0.0.md).
- [Registro de invariantes, variantes y excepciones](referencias/REGISTRO_DE_INVARIANTES_VARIANTES_Y_EXCEPCIONES_v1.0.0.md).
- [Guía Editorial y terminología transversal](GUÍA_EDITORIAL.md).

## Gobierno operativo de SDD

La carpeta [`sdd/`](sdd/README.md) contiene el modelo operativo, las plantillas y la política aprobados para incorporar el Desarrollo Guiado por Especificaciones.

El conjunto y la familia SPEC están vigentes desde la publicación material de `LB-G3-GMS-20260904-01`. La vigencia de la familia no crea por sí misma una SPEC concreta ni autoriza código funcional antes de G9.

## Producto

La carpeta [`producto/`](producto/README.md) contiene los mapas de stakeholders, actores, capacidades y alcance, las fronteras de ediciones y licencias, y las iniciativas de producto aprobadas para incorporación.

Los documentos G4 y `INI-GMS-0001` están vigentes desde la publicación material de `LB-G4-GMS-20260904-01`. La iniciativa está admitida y priorizada operativamente, pero no es una SPEC ni está declarada Lista para Especificar.

## Especialización arquitectónica del piloto

El Manual incorpora [DOC-019 · Arquitectura y dominio mínimos del piloto](ingeniería/19_ARQUITECTURA_Y_DOMINIO_MÍNIMOS_DEL_PILOTO.md). DOC-019 y ADR-041 a ADR-045 están vigentes desde la publicación material verificada de `LB-G5-GMS-20260907-01`.

## Perfil medible del piloto

[DOC-020 · Perfil de calidad, seguridad y verificación del piloto](ingeniería/20_PERFIL_DE_CALIDAD_SEGURIDAD_Y_VERIFICACIÓN_DEL_PILOTO.md), ADR-046 y ADR-047 están vigentes desde la publicación material verificada de `LB-G6-GMS-20260908-01`. G6 está cerrado y G7 está habilitado únicamente para fundación e infraestructura de ingeniería.

## Fundación ejecutable de G7

[DOC-021 · Fundación ejecutable y conformidad automática del repositorio](ingeniería/21_FUNDACIÓN_EJECUTABLE_Y_CONFORMIDAD_AUTOMÁTICA_DEL_REPOSITORIO.md) y ADR-048 a ADR-054 fueron aprobados para incorporación mediante D-61 a D-72. Su vigencia permanece diferida hasta la publicación material de la futura `LB-G7-GMS-20260908-01`. La materialización no cierra G7, no abre G8, no crea una SPEC concreta y no autoriza código funcional.

---

# Filosofía de la Documentación

La documentación forma parte de la arquitectura del proyecto.

Cada decisión importante debe quedar documentada para garantizar que el conocimiento permanezca disponible independientemente de las personas que participen en el desarrollo.

La documentación se mantiene bajo los mismos principios que el software:

- claridad;
- consistencia;
- trazabilidad;
- evolución continua;
- versionado.

---

# Estructura General

```text
docs/

├── ingeniería/
│   └── Manual de Ingeniería
│
├── adr/
│   └── Architecture Decision Records
│
├── ejemplos/
│   └── Ejemplos y demostraciones
│
├── sdd/
│   └── Gobierno operativo, plantillas y política SDD
│
├── producto/
│   └── Stakeholders, capacidades, alcance e iniciativas
│
└── referencias/
    ├── Índice de glosarios de dominio
    ├── Registro de invariantes, variantes y excepciones
    └── Material de consulta
```

---

# Manual de Ingeniería

El Manual de Ingeniería constituye la principal referencia técnica del proyecto.

Describe la arquitectura completa de GeoMotion Studio desde una perspectiva conceptual, tecnológica y organizacional.

Se recomienda comenzar por este manual para comprender el funcionamiento general de la plataforma antes de profundizar en componentes específicos.

---

# Evolución

La documentación evoluciona junto con GeoMotion Studio.

Cada nueva capacidad incorporada a la plataforma deberá reflejarse oportunamente en la documentación correspondiente para mantener la coherencia entre la implementación y la arquitectura.

---

# Licencia

Salvo indicación en contrario, la documentación se distribuye bajo la misma licencia que el proyecto GeoMotion Studio.
