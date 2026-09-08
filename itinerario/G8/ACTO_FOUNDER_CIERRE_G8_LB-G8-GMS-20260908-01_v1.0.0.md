# GeoMotion Studio

# Acto del Founder — Aprobación del cierre documental de la línea base G8

**Identificador del acto:** `ACTO-G8-GMS-20260908-18`  
**Línea base:** `LB-G8-GMS-20260908-01`  
**Versión:** `1.0.0`  
**Estado del acto:** Aprobado y vigente  
**Estado de la línea base:** Aprobada — pendiente de publicación material  
**Estado de la SPEC:** Corte material exacto aprobado — vigencia diferida  
**Estado de G8:** Cierre documental aprobado — eficacia material diferida  
**Estado de G9:** Cerrado  
**Fecha:** 8 de septiembre de 2026  
**Autoridad:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Commit remoto de entrada:** `41d73ceede9ccfe6ec6dd035e6ea448241c97a0a`  
**Árbol remoto de entrada:** `990f169458ccf403788cc70ceea5e434087bc2b0`  
**Árbol Git aprobado:** `cd94a2c57dcc7f786484accad5d24333ff3d77db`  
**Restricción:** código funcional no autorizado; G9 no abierto

---

## 1. Objeto

El presente acto materializa la aprobación expresa de `LB-G8-GMS-20260908-01` sobre el corte exacto evaluado en `INF-G8-GMS-20260908-02`, aprueba el corte material exacto de `SPEC-GMS-0001` v1.0.0 y deja aprobado el cierre documental de G8.

El acto no modifica el contenido del árbol Git aprobado y no publica el repositorio canónico. La vigencia de la SPEC, la eficacia material del cierre de G8, la resolución eficaz de `OPEN-INI-0001-09`, la eficacia material de la corrección `H-G8-VAL-01` y la apertura de G9 permanecen diferidas hasta que la línea base sea materialmente publicada y esa publicación quede verificada.

## 2. Declaración exacta del Founder

El Founder declaró:

> Apruebo la línea base G8 v1.0.0, identidad LB-G8-GMS-20260908-01, en los términos exactos del informe INF-G8-GMS-20260908-02; confirmo la materialización conforme de D-73 a D-84 y la incorporación correctiva autorizada de `scripts/validate-docs.mjs` para `H-G8-VAL-01`; apruebo el corte material exacto de `SPEC-GMS-0001` v1.0.0 y confirmo que su vigencia, la eficacia material del cierre de G8, la resolución eficaz de `OPEN-INI-0001-09` y la apertura de G9 permanecerán diferidas hasta la publicación material verificada de esta línea base; confirmo que `H-G8-VAL-01` está corregido y conforme localmente y que su eficacia material también queda diferida a esa publicación; y confirmo que esta aprobación no crea un Context Package o plan, no modifica `apps/web`, no implementa funcionalidad de producto, no autoriza código funcional ni anticipa G9.

La declaración coincide literalmente con la fórmula de decisión incluida en el informe evaluado.

## 3. Material aprobado

| Elemento | Identidad exacta |
|---|---|
| Informe evaluado | `GMS_INFORME_VALIDACION_Y_PROPUESTA_CIERRE_G8_v1.0.0.md` |
| Identificador del informe | `INF-G8-GMS-20260908-02` |
| Tamaño del informe | `19.053 bytes` |
| SHA-256 del informe | `25d591412fb40caa901213492f685a26043c3fba9c791051d1a13a9797082ad5` |
| Commit remoto de partida | `41d73ceede9ccfe6ec6dd035e6ea448241c97a0a` |
| Árbol Git de partida | `990f169458ccf403788cc70ceea5e434087bc2b0` |
| Árbol Git aprobado | `cd94a2c57dcc7f786484accad5d24333ff3d77db` |

La identidad material queda fijada por el árbol Git aprobado, el delta, el inventario, el manifiesto y el informe evaluado. No se atribuye al corte un contenedor comprimido inexistente.

## 4. Composición aprobada

Se aprueba el corte material de 195 archivos regulares y 62 directorios, incluida la raíz, con un tamaño total de 3.326.189 bytes.

El delta exacto de G8 comprende 14 rutas: 9 agregadas, 5 modificadas y ninguna eliminada. Registra 2.322 inserciones y 21 eliminaciones.

### 4.1 Instrumentos de control

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_DELTA_REPRODUCIBLE_G8_DESDE_41d73cee_v1.0.0.csv` | 1.720 bytes | `e8adf924de6df15b978941fdfeaf83875166c50fa258a921fc75f8fd21b641d6` |
| `GMS_INVENTARIO_COMPLETO_CANDIDATO_G8_v1.0.0.csv` | 49.671 bytes | `ab9d1e617f7cac7decc9dfc06547c7efca68215e8187af74808897307a92b89a` |
| `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G8_v1.0.0.sha256` | 19.853 bytes | `4f51768bcc26ac94957d9762554806cd0eb7332d0cd8270c6be3b45661ebd55a` |

El manifiesto verificó 194 de 194 entradas. Excluye únicamente su propio archivo para evitar autorreferencia; su identidad queda cerrada por el SHA-256 externo consignado y por el árbol Git aprobado.

### 4.2 Contenido institucional y documental consolidado

Quedan aprobados para integrar la línea base:

- `ACTO-G8-GMS-20260908-17`, que registra la aprobación de D-73 a D-84 y la declaración de `INI-GMS-0001` como Lista para Especificar;
- `SPEC-GMS-0001` v1.0.0, titulada “Proyecto local persistente con escena y mapa base 2D”, con SHA-256 `371c6542b267c21efc1b7d906eddcdd41c45ee8db7738d749e1ec444227f52c1`;
- `REV-GMS-0001`, clase `R2`, conforme y sin hallazgos bloqueantes pendientes;
- `configs/governance/g8-spec.json`, que gobierna exclusivamente la candidata autorizada y conserva G8 abierto y G9 cerrado;
- la corrección de `H-G8-VAL-01` en `scripts/validate-docs.mjs`, con SHA-256 `6401a7a39a9ad3490d426778288e258c4506fa40203e6b5c4a5a2b475921de7a`;
- la resolución para incorporación de `OPEN-INI-0001-09`, con eficacia diferida; y
- los índices, registros y evidencias documentales estrictamente necesarios para relacionar el corte.

Los documentos institucionales aprobados continúan siendo las fuentes de autoridad del proyecto. Los índices, registros, configuraciones y controles facilitan relación, automatización y trazabilidad sin crear una autoridad paralela.

## 5. Validaciones preservadas

Se preservan como resultados del corte aprobado:

- árbol Git candidato reproducible: `cd94a2c57dcc7f786484accad5d24333ff3d77db`;
- `pnpm verify:clean` con código cero y copia limpia idéntica al árbol candidato;
- 120 archivos Markdown y 44 identificadores propietarios conformes;
- 23 secciones consecutivas en la SPEC;
- RF-001 a RF-016, RNF-001 a RNF-027, CA-001 a CA-029 y PRU-001 a PRU-016 completos y consecutivos;
- 9 contratos y 14 errores especificados;
- 12 de 12 pruebas existentes aprobadas y cobertura del 100 % del código probado existente;
- build, arquitectura, schemas y smoke E2E de la fundación vigente conformes;
- cero filtraciones detectadas por Gitleaks;
- 167 componentes revisados, con licencias, SBOM y audit conformes;
- 14 de 14 rutas dentro de la lista autorizada;
- cero cambios bajo `apps/web`, paquetes, tests, workflows, activos, schemas, dependencias o lockfile;
- ausencia de symlinks y archivos comprimidos dentro del corte; y
- ausencia de funcionalidad de producto, código funcional, Context Package, plan y pruebas ejecutables de comportamiento nuevas.

## 6. Efectos institucionales

A partir de este acto:

1. `LB-G8-GMS-20260908-01` versión 1.0.0 queda aprobada sobre el árbol exacto identificado;
2. el corte material exacto de `SPEC-GMS-0001` v1.0.0 queda aprobado;
3. el cierre documental de G8 queda aprobado;
4. D-73 a D-84 permanecen aprobadas y su materialización queda confirmada como conforme;
5. la incorporación correctiva de `scripts/validate-docs.mjs` para `H-G8-VAL-01` queda aprobada dentro del corte;
6. `H-G8-VAL-01` permanece corregido y conforme localmente;
7. `OPEN-INI-0001-09` permanece resuelta para incorporación;
8. la línea base queda pendiente de publicación material en el repositorio canónico;
9. la vigencia de la SPEC y la eficacia material del cierre de G8, de la corrección y de la resolución indicada permanecen diferidas hasta la publicación material verificada;
10. G9 permanece cerrado hasta esa publicación verificada; y
11. todo cambio del corte aprobado requiere una actuación sucesora identificable.

## 7. Efectos no producidos

Este acto:

- no modifica ni publica el repositorio canónico;
- no autoriza todavía commits, ramas, etiquetas ni releases;
- no declara vigente la SPEC antes de su publicación material verificada;
- no abre G9;
- no crea un Context Package, plan, fixture o prueba ejecutable de comportamiento;
- no modifica `apps/web` ni otro código de producto;
- no implementa funcionalidad de producto;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no autoriza código funcional; y
- no introduce una autoridad paralela a los documentos institucionales.

## 8. Próxima actuación

Corresponde:

1. preservar este acto como actuación posterior al material exacto aprobado;
2. preparar, sin ejecutar, un primer commit de publicación cuyo padre sea `41d73ceede9ccfe6ec6dd035e6ea448241c97a0a` y cuyo árbol sea exactamente `cd94a2c57dcc7f786484accad5d24333ff3d77db`;
3. preparar un segundo commit que registre exclusivamente este acto, sin alterar retroactivamente el árbol aprobado;
4. calcular y verificar el blob del acto y el árbol resultante del segundo commit;
5. solicitar autorización expresa antes de modificar el repositorio canónico; y
6. verificar materialmente ambos commits antes de declarar vigente la SPEC, eficaz el cierre de G8, resuelta eficazmente `OPEN-INI-0001-09`, eficaz `H-G8-VAL-01` y abierto el inicio de G9.

**Estado resultante:** `LB-G8-GMS-20260908-01` v1.0.0 aprobada y pendiente de publicación material; corte exacto de `SPEC-GMS-0001` v1.0.0 aprobado con vigencia diferida; cierre documental de G8 aprobado con eficacia material diferida; `H-G8-VAL-01` corregido y conforme localmente con eficacia diferida; `OPEN-INI-0001-09` resuelta para incorporación con eficacia diferida; G9 cerrado; ninguna funcionalidad de producto; código funcional no autorizado.
