# GeoMotion Studio

# Acto del Founder — aprobación D-37 a D-48 y materialización documental de G5

**Identificador del acto:** `ACTO-G5-GMS-20260907-11`  
**Versión:** `1.0.0`  
**Estado:** Aprobado y vigente  
**Fecha:** 7 de septiembre de 2026  
**Autoridad:** Founder  
**Etapa:** G5 — Arquitectura y dominio mínimos  
**Iniciativa:** `INI-GMS-0001`  
**Línea base de entrada:** `LB-G4-GMS-20260904-01`  
**Commit publicado de entrada:** `d280519406de8896bc426a1f44178f6a63d2fe68`  
**Árbol publicado de entrada:** `5dfd777223c1facf1a4c731b54a1201e4279bf4b`  
**Línea base prevista:** `LB-G5-GMS-20260907-01`  
**Informe de decisión:** `INF-G5-GMS-20260907-01`

---

## 1. Declaración exacta del Founder

> Apruebo D-37 a D-48 en bloque, en los términos exactos del informe INF-G5-GMS-20260907-01; autorizo únicamente su materialización documental controlada sobre el cierre publicado de G4; confirmo que DOC-019 y ADR-041 a ADR-045 quedan aprobados para incorporación en la futura Línea base G5; confirmo el tratamiento de OPEN-INI-0001-01 a -09 y TECH-G5-001 a -008; y confirmo que esta decisión no cierra G5 ni abre G6 hasta la futura aprobación y publicación material de la Línea base G5, no crea una SPEC concreta, no declara INI-GMS-0001 Lista para Especificar, no modifica apps/web, no autoriza código funcional ni anticipa G8 o G9

## 2. Decisiones aprobadas

| Decisión | Contenido aprobado |
|---|---|
| D-37 | Entrada exacta `LB-G4-GMS-20260904-01`, commit `d280519406de8896bc426a1f44178f6a63d2fe68`, árbol `5dfd777223c1facf1a4c731b54a1201e4279bf4b` y alcance mínimo de G5 para `INI-GMS-0001`. |
| D-38 | Incorporación de DOC-019 y clasificación canónica de Project, Scene, Map View, Project Document, Base Map Resource y componentes. |
| D-39 | Mapa modular del piloto, ownership, fronteras y dependencias mediante contratos. |
| D-40 | Modelo de dominio, estados, transiciones, ownership de datos e invariantes `INV-G5-001` a `INV-G5-016`. |
| D-41 | Persistencia conceptual, catálogo inicial `CTR-GMS-*` y taxonomía mínima `GMS-*`, sin interfaces de código ni criterios de aceptación. |
| D-42 | `LocalInteractionContext`, autorización mínima, denegación por defecto y exclusión de cuentas, roles, IA y servicios remotos. |
| D-43 | ADR-041: Project Document como agregado documental versionado. |
| D-44 | ADR-042: persistencia local mediante puerto de Project y adaptador sustituible. |
| D-45 | ADR-043: Map View como entidad de representación propiedad de Map y referenciada por Scene. |
| D-46 | ADR-044: recorrido base con mapa resoluble sin servicio remoto; fuente, licencia y atribución diferidas a G6. |
| D-47 | ADR-045: centro de Map View expresado mediante longitud y latitud WGS 84 explícitas. |
| D-48 | Tratamiento de `OPEN-INI-0001-01` a `-09`, registro `TECH-G5-001` a `-008`, materialización controlada y condición de cierre/publicación de G5. |

## 3. Materialización autorizada

La actuación queda limitada a estas diez rutas:

- `docs/README.md`;
- `docs/ingeniería/README.md`;
- `docs/ingeniería/ÍNDICE.md`;
- `docs/ingeniería/19_ARQUITECTURA_Y_DOMINIO_MÍNIMOS_DEL_PILOTO.md`;
- `docs/adr/ADR-041.md`;
- `docs/adr/ADR-042.md`;
- `docs/adr/ADR-043.md`;
- `docs/adr/ADR-044.md`;
- `docs/adr/ADR-045.md`; y
- `itinerario/G5/ACTO_FOUNDER_G5_D37_D48_v1.0.0.md`.

Las tres primeras rutas solo podrán recibir ajustes mínimos de navegación, recuento y estado documental derivados de la publicación ya verificada de G4 y de la incorporación candidata de G5.

## 4. Efectos institucionales

1. D-37 a D-48 quedan aprobadas para integrar la futura Línea base G5.
2. DOC-019 y ADR-041 a ADR-045 quedan aprobados para incorporación en versión 1.0.0.
3. `OPEN-INI-0001-01`, `-02` y las porciones arquitectónicas de `-03`, `-04`, `-05`, `-06` y `-09` quedan resueltas en los términos exactos de DOC-019.
4. `OPEN-INI-0001-07` y `-08`, junto con las porciones medibles o técnicas expresamente diferidas de las demás cuestiones, conservan la etapa de resolución asignada.
5. `TECH-G5-001` a `TECH-G5-008` quedan registrados como decisiones tecnológicas abiertas, no como autorizaciones.
6. La Línea base G5 y su publicación permanecen como actuaciones posteriores, separadas y trazables.

## 5. Efectos no producidos

Este acto:

- no aprueba ni publica una Línea base G5;
- no cierra G5;
- no abre G6;
- no crea, redacta, aprueba ni publica una SPEC concreta;
- no declara `INI-GMS-0001` Lista para Especificar;
- no elige motor, dataset, backend, framework, formato físico ni proyección interna;
- no incorpora dependencias o datos externos;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no modifica ni adopta `apps/web`;
- no autoriza código funcional;
- no anticipa G8 o G9; y
- no introduce una autoridad paralela a los documentos institucionales.

## 6. Próxima actuación

Corresponde validar el corte material resultante, comprobar la Puerta G5 y preparar una propuesta de Línea base G5 exacta. Toda publicación en `main` requerirá autorización expresa posterior sobre un árbol Git identificado.

**Estado resultante:** D-37 a D-48 aprobadas y materializadas documentalmente; G5 pendiente de validación, aprobación de línea base y publicación; G6 cerrado; ninguna SPEC concreta; `INI-GMS-0001` no declarada Lista para Especificar; `apps/web` sin cambios; código funcional prohibido hasta superar G9.
