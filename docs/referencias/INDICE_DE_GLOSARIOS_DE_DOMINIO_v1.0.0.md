# GeoMotion Studio

# Índice de glosarios de dominio

**Identificador:** `IDX-GLOS-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado y vigente  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G2 — Lenguaje, identidad, invariantes y variantes  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G2-GMS-20260904-05`; D-15

---

## 1. Propósito

Este índice permite localizar las fuentes terminológicas de GeoMotion Studio sin copiar definiciones ni crear una autoridad paralela.

La autoridad transversal continúa en la Guía Editorial. Cada glosario especializado se interpreta exclusivamente dentro de su dominio, enlaza la raíz terminológica y permanece subordinado a los documentos institucionales de autoridad superior.

---

## 2. Regla de precedencia terminológica

1. La Guía Editorial define el significado transversal.
2. Un glosario especializado puede precisar ese significado dentro de su dominio.
3. Cuando el concepto especializado sea distinto, debe utilizar un término calificado.
4. Una especialización no puede contradecir ni reducir una invariante transversal.
5. Ante conflicto, el uso normativo del término queda bloqueado hasta existir una decisión y una versión sucesora.
6. Este índice solo facilita navegación y control; no concede autoridad ni vigencia.

---

## 3. Índice material

| Código de índice | Dominio | Fuente material | Sección | Estado en G1 | Relación con la raíz | Acción G2 |
|---|---|---|---|---|---|---|
| `GLOS-ROOT` | Transversal | `docs/GUÍA_EDITORIAL.md` | Terminología | Aprobado y vigente, v2.0 | Raíz | Vocabulario SDD integrado |
| `GLOS-VER` | Gestión de Versiones | `docs/ingeniería/18_GESTIÓN_DE_VERSIONES.md` | Anexo I | Publicado, v1.0 | Especialización compatible con ajustes en la raíz | Enlazar; no duplicar |
| `GLOS-SEG` | Autenticación y Seguridad | `docs/ingeniería/17_AUTENTICACIÓN_Y_SEGURIDAD.md` | Anexo D | Publicado, v1.0 | Especialización de identidad, roles, permisos y recursos | Enlazar y exigir calificadores |
| `GLOS-IA` | Inteligencia Artificial | `docs/ingeniería/16_ARQUITECTURA_DE_IA.md` | Anexo G | Aprobado y vigente, v1.1 | Especialización de IA | `Línea Base de IA` normalizada; agente, capacidad, modelo y proveedor distinguidos |
| `GLOS-OPE` | Operación y continuidad | `docs/notas_internas/00_ESTADO_DEL_PROYECTO.md` | Sección 58 | Aprobado y vigente, v1.2.0 | Vocabulario local | Alcance de Dirección Técnica normalizado y términos raíz enlazados |

---

## 4. Términos compartidos que requieren calificador

| Término raíz | Calificadores previstos | Fuente especializada |
|---|---|---|
| Identidad | identidad lógica; identidad material; identidad de transporte; identidad de seguridad; identidad de servicio | Guía sucesora; DOC-017 |
| Estado | estado de aplicación; estado de dominio; estado del ciclo de vida; estado de madurez | Guía sucesora; DOC-018; SPEC futura |
| Configuración | configuración de aplicación; configuración de activos; configuración de IA | Guía sucesora; DOC-018; DOC-016 |
| Línea base | línea base del proyecto; línea base documental; línea base de IA | DOC-018 como modelo raíz; especialización por ámbito |
| Capacidad | capacidad de producto; capacidad arquitectónica; capacidad extensible; capacidad de IA | Guía sucesora; DOC-013; DOC-016 |
| Agente | agente humano; agente de software; agente de IA | Guía sucesora; DOC-016; gobierno operativo futuro |
| Rol | rol institucional; rol operativo; rol de autorización | Guía sucesora; DOC-017; gobierno vigente |
| Activo | activo de ingeniería; activo de seguridad; Asset del dominio de producto | DOC-018; DOC-017; DOC-002 |

---

## 5. Mantenimiento

La incorporación de un nuevo glosario de dominio requiere:

- necesidad no cubierta por una fuente existente;
- dominio y propietario definidos;
- enlace a la raíz terminológica;
- ausencia de duplicación literal innecesaria;
- revisión de colisiones;
- registro en este índice mediante una versión sucesora;
- aprobación conforme a la autoridad del documento que lo contiene.

Un glosario retirado conserva su historia, pero se marca como sustituido y enlaza su sucesor.

---

## 6. Condición de vigencia

Este índice fue aprobado por el Founder mediante D-15 y el acto `ACTO-G2-GMS-20260904-05`. Su función continúa limitada a navegación y control: no concede autoridad propia a los documentos enlazados.

