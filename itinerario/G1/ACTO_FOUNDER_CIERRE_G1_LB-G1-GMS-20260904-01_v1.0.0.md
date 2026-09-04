# GeoMotion Studio

# Acto del Founder — Aprobación y cierre de la línea base G1

**Identificador del acto:** ACTO-G1-GMS-20260904-04  
**Línea base:** LB-G1-GMS-20260904-01  
**Versión:** 1.0.0  
**Estado:** Aprobado y vigente  
**Fecha:** 4 de septiembre de 2026  
**Autoridad:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Base canónica evaluada:** commit `a3b2d4679752503dd6569db7e75db4f70ddb03e9`  
**Restricción:** código funcional prohibido hasta superar G9

---

## 1. Objeto

El presente acto materializa la aprobación expresa y cierra institucionalmente G1 sobre el corte exacto evaluado en `INF-G1-GMS-20260904-01`.

No modifica el contenido aprobado, no agrega documentos al núcleo normativo y no altera el árbol Git sometido a decisión.

---

## 2. Declaración exacta del Founder

El Founder declaró:

> **Apruebo la línea base G1 v1.0.0, identidad LB-G1-GMS-20260904-01, en los términos exactos del informe INF-G1-GMS-20260904-01; acepto OBS-G1-01 y OBS-G1-02 como deudas no bloqueantes; y confirmo que G1 no autoriza código funcional ni anticipa G9.**

La declaración coincide con la fórmula de decisión incluida en el informe evaluado.

---

## 3. Material aprobado

| Elemento | Identidad exacta |
|---|---|
| Informe evaluado | `GMS_INFORME_VALIDACION_Y_PROPUESTA_CIERRE_G1_v1.0.0.md` |
| Identificador del informe | `INF-G1-GMS-20260904-01` |
| Tamaño del informe | `12.245 bytes` |
| SHA-256 del informe | `4cd021caac8bc75c25fdb8161424da936e8d49672f8b8f6ffe0a379670dea557` |
| Expediente material evaluado | `GMS_EXPEDIENTE_CANDIDATO_LINEA_BASE_G1_v1.0.0_20260904.zip` |
| Tamaño del expediente | `571.829 bytes` |
| SHA-256 del expediente | `877ee166b619396971da2466f129b117c566ce4a2a3abdd66d2794e179b3bcb1` |
| Commit canónico de partida | `a3b2d4679752503dd6569db7e75db4f70ddb03e9` |
| Árbol Git de partida | `b55678dd361c4800b657046addea2338963514a1` |
| Árbol Git aprobado | `319847c388b1b2b4934ff7f1bdd5488ec963f9c8` |

---

## 4. Composición aprobada

### 4.1 Núcleo normativo

Se aprueba un núcleo cerrado de 46 documentos:

- `VALORES.md` 1.0.0;
- `INT-008` 1.0.0 — Carta Fundacional de GeoMotion Studio;
- 19 documentos `DOC-000` a `DOC-018`;
- 25 decisiones `ADR-016` a `ADR-040`.

Identidad del manifiesto del núcleo:

- archivo: `GMS_MANIFIESTO_NUCLEO_NORMATIVO_G1_v1.0.0.sha256`;
- tamaño: `4.437 bytes`;
- SHA-256: `56625ea3eaa94293834bfd4cafcb3f5dfe1919ec27adddd25c6406f88f35fe66`;
- comprobación: 46 de 46 huellas conformes.

### 4.2 Repositorio candidato aprobado

Se aprueba el corte material de 107 archivos inventariados, sin que los 61 archivos externos al núcleo adquieran autoridad normativa adicional.

Identidad del manifiesto completo:

- archivo: `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G1_v1.0.0.sha256`;
- tamaño: `10.648 bytes`;
- SHA-256: `6e9f26d931922cd3136bcee02feb2ce21974dba7e4405daf63d96204d5b52684`;
- comprobación: 107 de 107 huellas conformes.

Inventario y delta aprobados:

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_INVENTARIO_COMPLETO_CANDIDATO_G1_v1.0.0.csv` | 31.943 bytes | `06543686d8cf83b0fdbfbd0dcb063235826e42fecaba325b81b34ab1199883ce` |
| `GMS_DELTA_REPRODUCIBLE_G1_DESDE_a3b2d467_v1.0.0.csv` | 6.214 bytes | `4319581478d1173bf3de3b0e6a3ad7ca31fad4d7a47a4fd5967276f682cc3229` |

---

## 5. Deudas aceptadas

### OBS-G1-01

Los conteos conservados por `INT-000` 1.1.0 se reconocen como información histórica de la copia evaluada el 28 de julio de 2026.

- severidad: baja;
- estado: aceptada, no resuelta;
- tratamiento: aclaración en un sucesor autorizado de `INT-000`;
- disparador: primera actualización aprobada posterior a G1.

### OBS-G1-02

El ejemplo `[Arquitectura](02_ARQUITECTURA.md)` de la Guía Editorial 1.1 se reconoce como ejemplo contextual dentro de un bloque de código y no como enlace activo.

- severidad: baja;
- estado: aceptada, no resuelta;
- tratamiento: contextualización o corrección en un sucesor autorizado;
- disparador: primera actualización aprobada posterior a G1.

---

## 6. Exclusiones preservadas

Permanecen fuera del núcleo normativo:

- `DOC-018` 1.1 Candidato;
- Guía Editorial 1.2 Candidato;
- `INT-011` 1.2.1 Candidato;
- versiones sustituidas y originales autónomos no recuperados;
- backups, extracciones, dependencias, cachés y artefactos de construcción;
- `apps/web` como implementación de referencia.

`apps/web` permanece clasificado como spike histórico reemplazable y no fue modificado ni validado funcionalmente.

---

## 7. Efectos institucionales

A partir de este acto:

1. `LB-G1-GMS-20260904-01` versión 1.0.0 queda aprobada y vigente;
2. G1 queda institucionalmente cerrado;
3. D-01 a D-11 permanecen aprobadas y vigentes;
4. B-01 a B-08 quedan cerrados;
5. OBS-G1-01 y OBS-G1-02 quedan aceptadas como deudas bajas no bloqueantes;
6. queda habilitada la preparación documental de G2 conforme al Itinerario Maestro;
7. todo cambio posterior de la línea base deberá tramitarse mediante sucesor identificable.

---

## 8. Efectos no producidos

Este acto:

- no modifica ni publica el repositorio canónico;
- no autoriza commits, ramas, etiquetas ni releases;
- no autoriza código funcional;
- no anticipa, sustituye ni supera G9;
- no aprueba los documentos Candidato excluidos;
- no convierte el spike `apps/web` en implementación de referencia;
- no concede autoridad institucional por presencia material, ruta, huella o commit.

---

## 9. Próxima actuación

Corresponde:

1. preservar el presente acto junto al material exacto evaluado;
2. preparar, sin ejecutar, el cambio documental de publicación de G1;
3. solicitar autorización expresa antes de modificar el repositorio canónico;
4. iniciar la preparación documental de G2 únicamente después de fijar el tratamiento de publicación de G1.

**Estado resultante:** G1 aprobado y cerrado; línea base `LB-G1-GMS-20260904-01` versión 1.0.0 aprobada y vigente; G2 habilitado para preparación; publicación pendiente de autorización; código funcional prohibido hasta superar G9.
