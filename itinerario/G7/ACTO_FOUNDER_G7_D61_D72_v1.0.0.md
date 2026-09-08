# GeoMotion Studio

# Acto del Founder — aprobación D-61 a D-72 y materialización controlada de G7

**Identificador del acto:** `ACTO-G7-GMS-20260908-15`  
**Versión:** `1.0.0`  
**Estado:** Aprobado y vigente  
**Fecha:** 8 de septiembre de 2026  
**Autoridad:** Founder  
**Etapa:** G7 — Fundación ejecutable del repositorio  
**Iniciativa:** `INI-GMS-0001`  
**Línea base de entrada:** `LB-G6-GMS-20260908-01`  
**Commit publicado de entrada:** `d76b39bfc646e6236368cab06ec51cda5f66c484`  
**Árbol publicado de entrada:** `a74a2562d87a51c2278dc7e1d5fbbaba1cc02a1f`  
**Línea base prevista:** `LB-G7-GMS-20260908-01`  
**Informe de decisión:** `INF-G7-GMS-20260908-01`

---

## 1. Declaración exacta del Founder

> Apruebo D-61 a D-72 en bloque, en los términos exactos del informe INF-G7-GMS-20260908-01; autorizo únicamente su materialización controlada sobre el cierre publicado de G6; confirmo que DOC-021 y ADR-048 a ADR-054 quedan aprobados para incorporación en la futura Línea base G7; autorizo el reemplazo del spike histórico `apps/web` exclusivamente por la fundación web mínima definida, conservando su historia en Git; confirmo el cierre propuesto de TECH-G5-001 y TECH-G5-003 a -008 y la incorporación material de TECH-G5-002; y confirmo que esta decisión no cierra G7 ni abre G8 hasta la futura aprobación y publicación material de la Línea base G7, no crea una SPEC concreta, no declara INI-GMS-0001 Lista para Especificar, no implementa funcionalidad de producto, no autoriza código funcional ni anticipa G9.

## 2. Decisiones aprobadas

| Decisión | Contenido aprobado |
|---|---|
| D-61 | Entrada exacta `LB-G6-GMS-20260908-01`, commit `d76b39bfc646e6236368cab06ec51cda5f66c484`, árbol `a74a2562d87a51c2278dc7e1d5fbbaba1cc02a1f`; G7 limitado a fundación e infraestructura de ingeniería. |
| D-62 | Incorporación de `DOC-021` y `ADR-048` a `ADR-054` como corpus institucional no redundante de G7. |
| D-63 | Sustitución íntegra del spike histórico en `apps/web` por la fundación web mínima; conservación de la historia únicamente mediante Git. |
| D-64 | Node.js `24.20.0` LTS, pnpm `12.3.4`, workspace y lockfile únicos, versiones directas exactas e instalación congelada; `ADR-048`. |
| D-65 | Árbol físico de aplicaciones, paquetes, activos, configuración, scripts, pruebas, documentación e integración continua; fronteras y grafo verificables. |
| D-66 | TypeScript `7.0.2`, React/React DOM `19.2.7`, Vite `8.1.2` y `@vitejs/plugin-react` `6.1.1`; superficie mínima accesible sin router, estado global ni comportamiento de producto; `ADR-049`. |
| D-67 | OpenLayers `10.10.0` detrás de `CTR-GMS-MAP-003`, EPSG:4326 y orden longitud–latitud; incorporación reproducible de Natural Earth; cierre de `TECH-G5-001` y `TECH-G5-007`; ejecución material de `TECH-G5-002`; `ADR-050`. |
| D-68 | IndexedDB nativo detrás de `CTR-GMS-PRJ-003`, generaciones inmutables, digest, puntero transaccional y recuperación explícita; cierre de `TECH-G5-003` y `TECH-G5-005`; `ADR-051`. |
| D-69 | JSON UTF-8 estricto, `.gms.json`, `formatVersion: 1`, JSON Schema Draft 2020-12, Ajv `8.20.0` estricto y UUID v4 opaco mediante `crypto.randomUUID()`; cierre de `TECH-G5-004` y `TECH-G5-006`; `ADR-052` y `ADR-053`. |
| D-70 | Comandos por contratos directos y eventos TypeScript tipados, versionados e internos al proceso, despachados por Aplicación tras confirmación; cierre de `TECH-G5-008`; `ADR-054`. |
| D-71 | Typecheck, Oxlint, Prettier, Vitest, Playwright, Gitleaks, validadores propios, dependencias, licencias, SBOM, trazabilidad e integración continua como controles obligatorios. |
| D-72 | Materialización controlada, verificación completa y árbol exacto antes de proponer una Línea base G7; `OPEN-INI-0001-09` permanece en G8. |

## 3. Alcance de la materialización autorizada

La actuación puede agregar o modificar exclusivamente lo necesario para:

- incorporar `DOC-021`, `ADR-048` a `ADR-054`, este acto y el expediente de G7;
- normalizar los estados e índices afectados por la publicación ya verificada de G6 y por D-61 a D-72;
- reemplazar el contenido corriente de `apps/web` por la fundación web mínima no funcional;
- crear la configuración raíz, el workspace, los paquetes y contratos técnicos mínimos;
- fijar versiones, lockfile, schemas, fixtures y activos Natural Earth con procedencia reproducible;
- crear validadores, pruebas técnicas, documentación de desarrollo, recuperación e integración continua; y
- generar inventarios, manifiestos, SBOM e informes de conformidad reproducibles.

El contenido previo de `apps/web` no se duplica ni se archiva en otra ruta del árbol: permanece recuperable mediante la historia Git del repositorio canónico.

## 4. Efectos institucionales

1. D-61 a D-72 quedan aprobadas y vigentes.
2. `DOC-021` y `ADR-048` a `ADR-054` quedan aprobados para incorporación, con vigencia diferida a la publicación material verificada de la futura Línea base G7.
3. Queda autorizada la materialización controlada de la fundación G7 sobre el árbol exacto de entrada.
4. Queda autorizado reemplazar el spike histórico `apps/web` solo por la superficie técnica mínima definida.
5. `TECH-G5-001` y `TECH-G5-003` a `TECH-G5-008` quedan resueltas documentalmente; su eficacia material se consolidará con la publicación de la Línea base G7.
6. `TECH-G5-002` ya resuelta debe quedar incorporada materialmente y verificable.
7. La futura Línea base G7, su cierre y su publicación permanecen como actuaciones posteriores, separadas y trazables.

## 5. Efectos no producidos

Este acto:

- no aprueba ni publica una Línea base G7;
- no cierra G7 ni abre G8;
- no crea, redacta, aprueba ni publica una SPEC concreta;
- no declara `INI-GMS-0001` Lista para Especificar;
- no implementa el recorrido de crear, navegar, guardar, cerrar, seleccionar, reabrir o recuperar un Project;
- no materializa una vista cartográfica interactiva ni persistencia funcional;
- no incorpora router, estado global, backend, cuenta, Cloud, colaboración o despliegue de producto;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no autoriza código funcional;
- no anticipa G8 ni G9; y
- no introduce una autoridad paralela a los documentos institucionales.

## 6. Próxima actuación

Corresponde materializar la fundación aprobada, ejecutar la puerta completa en una copia limpia y presentar un informe de validación con inventario, huellas y árbol Git exacto. Toda aprobación de línea base y toda publicación en `main` requerirán autorizaciones expresas posteriores del Founder.

**Estado resultante:** D-61 a D-72 aprobadas; materialización controlada de G7 autorizada; `DOC-021` y `ADR-048` a `ADR-054` aprobados para incorporación pero sin vigencia todavía; G7 abierto y pendiente de validación, línea base y publicación; G8 cerrado; ninguna SPEC concreta; `INI-GMS-0001` no Lista para Especificar; código funcional prohibido hasta superar G9.
