# GeoMotion Studio

# Acto del Founder — aprobación D-73 a D-84 y materialización documental controlada de G8

**Identificador del acto:** `ACTO-G8-GMS-20260908-17`  
**Versión:** `1.0.0`  
**Estado:** Aprobado y vigente  
**Fecha:** 8 de septiembre de 2026  
**Autoridad:** Founder  
**Etapa:** G8 — SPEC piloto  
**Iniciativa:** `INI-GMS-0001`  
**Línea base institucional de entrada:** `LB-G7-GMS-20260908-01`  
**Commit remoto de entrada:** `41d73ceede9ccfe6ec6dd035e6ea448241c97a0a`  
**Árbol remoto de entrada:** `990f169458ccf403788cc70ceea5e434087bc2b0`  
**Línea base prevista:** `LB-G8-GMS-20260908-01`  
**Informe de decisión:** `INF-G8-GMS-20260908-01`

---

## 1. Declaración exacta del Founder

> Apruebo D-73 a D-84 en bloque, en los términos exactos del informe INF-G8-GMS-20260908-01; declaro INI-GMS-0001 Lista para Especificar y autorizo únicamente la materialización documental controlada de SPEC-GMS-0001 v1.0.0 y su expediente sobre el corte remoto sucesor de G7, commit 41d73ceede9ccfe6ec6dd035e6ea448241c97a0a y árbol 990f169458ccf403788cc70ceea5e434087bc2b0; confirmo la resolución para incorporación de OPEN-INI-0001-09 mediante los criterios y métodos aprobados; confirmo que no se crean DOC-022, ADR-055, excepción, Context Package, plan ni pruebas ejecutables en G8; y confirmo que esta decisión no aprueba todavía el corte material exacto de la SPEC, no cierra G8 ni abre G9 hasta la futura aprobación y publicación material de la Línea base G8, no modifica apps/web ni código, no autoriza funcionalidad de producto ni anticipa la autorización de código funcional de G9.

---

## 2. Decisiones aprobadas

| Decisión | Contenido aprobado |
|---|---|
| D-73 | Entrada institucional `LB-G7-GMS-20260908-01`; corte remoto sucesor exacto `41d73ce…`, árbol `990f1694…`; G7 cerrado y G8 limitado a la SPEC piloto y su expediente documental. |
| D-74 | `INI-GMS-0001` declarada Lista para Especificar; Dirección Técnica prepara y el Founder conserva aprobación; LPE no autoriza implementación. |
| D-75 | `SPEC-GMS-0001` v1.0.0, índice SPEC, `REV-GMS-0001`, expediente G8 y configuración de gobierno aprobados para materialización; no se crean DOC-022, ADR-055, excepción ni Context Package. |
| D-76 | Resultado limitado a crear, navegar, guardar, cerrar y reabrir localmente un Project con una Scene activa y una Map View 2D; actor `ACTR-GMS-0001`; exclusiones preservadas. |
| D-77 | Pantalla inicial, nombre normalizado, UUID v4 opacos, Scene inicial y Map View `[0,0]`, zoom `1`, `natural-earth-110m-physical-v1`; reapertura local sin importar ni exportar. |
| D-78 | Navegación y límites, estado `DIRTY`, confirmación atómica y resultados Guardar, Descartar y Cancelar; `Cerrar proyecto` diferenciado del cierre del navegador. |
| D-79 | Validación integral previa a activación, rechazo seguro, versión `1`, degradación de mapa sin fallback remoto y recuperación explícita en estado `RECOVERED`. |
| D-80 | Interfaz, teclado, foco, controles cartográficos, WCAG 2.2 AA, reflow, adaptación e internacionalización conforme a DOC-020. |
| D-81 | Cero egress y telemetría, datos no confiables, mensajes seguros, observabilidad local y resolución para incorporación de `OPEN-INI-0001-09`. |
| D-82 | CA-001 a CA-029 y PRU-001 a PRU-016 como mínimos; trazabilidad completa; fixtures, pruebas ejecutables, plan y Context Package diferidos a G9. |
| D-83 | Clasificación `R2`; registro `REV-GMS-0001`; separación entre preparación, verificación y decisión; aprobación final del corte reservada al Founder. |
| D-84 | Materialización exclusivamente documental sobre el árbol `990f1694…`; inventario, hashes, revisión y árbol exacto antes de proponer línea base; rutas de código y G9 fuera de alcance. |

---

## 3. Declaración LPE

El Founder declara `INI-GMS-0001` **Lista para Especificar** desde este acto, por cumplimiento de las diez condiciones de la Puerta LPE registradas en `INF-G8-GMS-20260908-01`.

La declaración:

- permite elaborar y revisar `SPEC-GMS-0001`;
- no aprueba por anticipado su corte material;
- no cambia su estado de implementación;
- no autoriza código ni funcionalidad; y
- no abre G9.

---

## 4. Alcance de la materialización autorizada

La actuación puede:

1. crear `docs/spec/` y materializar `SPEC-GMS-0001`;
2. incorporar este acto, el informe de decisión y el registro de revisión al expediente G8;
3. crear la configuración de gobierno G8;
4. normalizar índices y páginas de estado estrictamente documentales;
5. generar inventario, manifiesto, delta e informe de validación; y
6. ejecutar controles sin conservar artefactos generados fuera del alcance aprobado.

La actuación no puede modificar:

- `apps/web/**`;
- `packages/**`;
- `tests/**`;
- `scripts/**`;
- `.github/**`;
- schemas;
- dependencias o lockfile;
- activos cartográficos; ni
- ningún comportamiento o código funcional.

---

## 5. Efectos institucionales

1. D-73 a D-84 quedan aprobadas y vigentes.
2. `INI-GMS-0001` queda declarada Lista para Especificar.
3. `SPEC-GMS-0001` v1.0.0 queda aprobada únicamente para materialización documental controlada.
4. `OPEN-INI-0001-09` queda resuelta para incorporación, con eficacia diferida a la publicación de G8.
5. G8 permanece abierto hasta la aprobación y publicación material de una línea base exacta.
6. G9 permanece cerrado.
7. La implementación permanece `No iniciada`.

---

## 6. Límites negativos

Este acto:

- no aprueba todavía los bytes de `SPEC-GMS-0001`;
- no declara la SPEC Aprobada ni Publicada como corte exacto;
- no cierra G8;
- no abre G9;
- no crea DOC-022, ADR-055, excepción o Context Package;
- no materializa plan, fixtures o pruebas de comportamiento;
- no modifica `apps/web` ni otra ruta de código;
- no autoriza funcionalidad de producto; y
- no anticipa LPI ni la autorización de código funcional.

---

## 7. Próxima decisión reservada

Una vez materializado y revisado el corpus, Dirección Técnica deberá presentar:

- rutas y blobs exactos;
- manifiesto SHA-256;
- delta reproducible;
- resultado de `REV-GMS-0001`;
- resultado de validaciones;
- árbol Git candidato; y
- propuesta de `LB-G8-GMS-20260908-01`.

El Founder decidirá aprobar o devolver ese corte exacto. Su publicación requerirá una autorización posterior separada.

---

**Estado resultante:** D-73 a D-84 aprobadas; `INI-GMS-0001` Lista para Especificar; materialización documental de `SPEC-GMS-0001` autorizada; G8 abierto; G9 cerrado; ninguna publicación realizada; ninguna modificación de código; implementación no iniciada.
