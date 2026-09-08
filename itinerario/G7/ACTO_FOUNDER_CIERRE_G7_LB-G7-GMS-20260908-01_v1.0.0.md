# GeoMotion Studio

# Acto del Founder — Aprobación del cierre documental de la línea base G7

**Identificador del acto:** `ACTO-G7-GMS-20260908-16`  
**Línea base:** `LB-G7-GMS-20260908-01`  
**Versión:** `1.0.0`  
**Estado del acto:** Aprobado y vigente  
**Estado de la línea base:** Aprobada — pendiente de publicación material  
**Estado de G7:** Cierre documental aprobado — eficacia material diferida  
**Fecha:** 8 de septiembre de 2026  
**Autoridad:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Commit canónico de entrada:** `d76b39bfc646e6236368cab06ec51cda5f66c484`  
**Árbol canónico de entrada:** `a74a2562d87a51c2278dc7e1d5fbbaba1cc02a1f`  
**Árbol Git aprobado:** `13bdf2aa75b4b4ea3ce5d3e484e0d7babd2dfdb0`  
**Restricción:** código funcional prohibido hasta superar G9

---

## 1. Objeto

El presente acto materializa la aprobación expresa de `LB-G7-GMS-20260908-01` sobre el corte exacto evaluado en `INF-G7-GMS-20260908-02` y deja aprobado el cierre documental de G7.

El acto no modifica el contenido del árbol Git aprobado y no publica el repositorio canónico. La eficacia material del cierre, la vigencia de `DOC-021` y `ADR-048` a `ADR-054`, el cierre eficaz de las decisiones técnicas indicadas y la apertura de G8 permanecen diferidos hasta que la línea base sea materialmente publicada y esa publicación quede verificada.

## 2. Declaración exacta del Founder

El Founder declaró:

> **Apruebo la línea base G7 v1.0.0, identidad LB-G7-GMS-20260908-01, en los términos exactos del informe INF-G7-GMS-20260908-02; confirmo la materialización conforme de D-61 a D-72; confirmo que el cierre documental de G7 queda aprobado pero su eficacia material, la vigencia de DOC-021 y ADR-048 a ADR-054 y la apertura de G8 permanecerán diferidas hasta la publicación material de esta línea base; confirmo el reemplazo conforme del spike histórico apps/web por la fundación web mínima, conservando su historia en Git; confirmo que TECH-G5-002 queda incorporada materialmente y que el cierre de TECH-G5-001 y TECH-G5-003 a -008 adquirirá eficacia con esa publicación; confirmo que OPEN-INI-0001-09 permanece en G8; y confirmo que esta aprobación no crea una SPEC concreta, no declara INI-GMS-0001 Lista para Especificar, no implementa funcionalidad de producto, no autoriza código funcional ni anticipa G9.**

La declaración coincide literalmente con la fórmula de decisión incluida en el informe evaluado.

## 3. Material aprobado

| Elemento | Identidad exacta |
|---|---|
| Informe evaluado | `GMS_INFORME_VALIDACION_Y_PROPUESTA_CIERRE_G7_v1.0.0.md` |
| Identificador del informe | `INF-G7-GMS-20260908-02` |
| Tamaño del informe | `17.734 bytes` |
| SHA-256 del informe | `c87b3b0221fa56f61123ead75827be22d9f9618534efa9936f55ee16e7ad6ce3` |
| Commit canónico de partida | `d76b39bfc646e6236368cab06ec51cda5f66c484` |
| Árbol Git de partida | `a74a2562d87a51c2278dc7e1d5fbbaba1cc02a1f` |
| Árbol Git aprobado | `13bdf2aa75b4b4ea3ce5d3e484e0d7babd2dfdb0` |

No se atribuye al corte un expediente comprimido inexistente. La identidad material queda fijada por el árbol Git aprobado, el inventario, los manifiestos y el informe evaluado.

## 4. Composición aprobada

Se aprueba el corte material de 185 archivos regulares y 60 directorios, incluida la raíz, con un tamaño total de 3.127.350 bytes.

El delta exacto de G7 comprende 116 rutas: 70 agregadas, 16 modificadas y 30 eliminadas. Registra 5.478 inserciones y 1.102 eliminaciones.

### 4.1 Instrumentos de control

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_DELTA_G6_A_G7_v1.0.0.csv` | 13.361 bytes | `8f2ae518048f504b3323e7b8c4f09330748a1ef9ffd886ad61e96ecef33642c7` |
| `GMS_INVENTARIO_REPOSITORIO_CANDIDATO_G7_v1.0.0.csv` | 20.165 bytes | `8bdbc612054c91cc2fc3a886b7c82ef41e6f776ee99e63ae7280e19521daa46e` |
| `GMS_MANIFIESTO_CAMBIOS_G7_v1.0.0.sha256` | 8.309 bytes | `ac290f1fb6dd94d4495023bf7c39b3860ddaaf571866c3c3c752551c6615e6bb` |
| `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G7_v1.0.0.sha256` | 18.775 bytes | `7d0efbd7a08e7175fbc3c03c60aa79cb884330da862f6786f902c3b1542e47ca` |

Las comprobaciones preservadas en el informe arrojan 86 de 86 huellas conformes para los cambios presentes y 185 de 185 huellas conformes para el repositorio candidato.

### 4.2 Contenido institucional y técnico consolidado

Quedan aprobados para integrar la línea base:

- `DOC-021`, que define la fundación ejecutable y la conformidad automática del repositorio;
- `ADR-048` a `ADR-054`, que fijan runtime, fundación web, cartografía, persistencia, documento, identidad y mensajería;
- una aplicación web mínima y ocho paquetes con fronteras, propietarios y exports explícitos;
- Node.js `24.20.0`, pnpm `12.3.4`, versiones directas exactas y un único lockfile raíz;
- schemas cerrados, fixtures válidos y adversos y contratos técnicos sin casos de uso funcionales;
- el recurso Natural Earth 1:110m reproducible desde insumos controlados;
- las puertas automáticas de compilación, tipado, lint, formato, pruebas, smoke, documentación, arquitectura, schemas, secretos, licencias, SBOM, vulnerabilidades e integración continua;
- la incorporación material de `TECH-G5-002`;
- el cierre propuesto de `TECH-G5-001` y `TECH-G5-003` a `TECH-G5-008`, con eficacia diferida;
- la conservación de `OPEN-INI-0001-09` para G8; y
- `ACTO-G7-GMS-20260908-15`, que registra D-61 a D-72 y su alcance autorizado.

Los documentos institucionales aprobados continúan siendo las fuentes de autoridad del proyecto. Los índices, registros y controles facilitan relación y trazabilidad sin crear autoridad paralela.

## 5. Validaciones preservadas

Se preservan como resultados del corte aprobado:

- árbol Git candidato reproducible: `13bdf2aa75b4b4ea3ce5d3e484e0d7babd2dfdb0`;
- `pnpm verify` y `pnpm verify:clean` con código cero;
- igualdad exacta del árbol entre el candidato y una copia limpia;
- 12 de 12 pruebas aprobadas y cobertura del 100 % del código probado;
- build conforme y smoke real de navegador aprobado;
- nueve workspaces con grafo acíclico y fronteras conformes;
- cinco schemas conformes, fixture válido aceptado y adverso rechazado;
- cero filtraciones detectadas por Gitleaks y cero vulnerabilidades informadas por el audit ejecutado;
- SBOM CycloneDX 1.6 y licencias inventariadas;
- reproducción exacta del activo Natural Earth derivado;
- ausencia de enlaces simbólicos y archivos comprimidos dentro del árbol candidato;
- ausencia de una SPEC concreta y de funcionalidad de producto; y
- cero defectos bloqueantes o deudas residuales transferidas a la línea base.

## 6. Efectos institucionales

A partir de este acto:

1. `LB-G7-GMS-20260908-01` versión 1.0.0 queda aprobada sobre el árbol exacto identificado;
2. el cierre documental de G7 queda aprobado;
3. D-61 a D-72 permanecen aprobadas y su materialización se confirma conforme;
4. la línea base queda pendiente de publicación material en el repositorio canónico;
5. la eficacia material del cierre de G7 permanece diferida hasta que esa publicación sea ejecutada y verificada;
6. `DOC-021` y `ADR-048` a `ADR-054` permanecen sin vigencia hasta esa publicación;
7. el reemplazo del spike histórico `apps/web` se confirma conforme y su historia queda conservada por el parentesco Git con G6;
8. `TECH-G5-002` queda incorporada materialmente en el corte aprobado;
9. el cierre de `TECH-G5-001` y `TECH-G5-003` a `TECH-G5-008` conserva su eficacia diferida hasta esa publicación;
10. `OPEN-INI-0001-09` permanece en G8;
11. G8 permanece cerrado hasta la publicación material verificada de la línea base; y
12. todo cambio del corte aprobado requiere una actuación sucesora identificable.

## 7. Efectos no producidos

Este acto:

- no modifica ni publica el repositorio canónico;
- no autoriza commits, ramas, etiquetas ni releases;
- no abre G8;
- no crea, redacta, aprueba ni publica una SPEC concreta;
- no declara `INI-GMS-0001` Lista para Especificar;
- no implementa funcionalidad de producto;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no autoriza código funcional;
- no anticipa G9; y
- no introduce una autoridad paralela a los documentos institucionales.

## 8. Próxima actuación

Corresponde:

1. preservar este acto junto al material exacto aprobado;
2. preparar, sin ejecutar, un primer commit de publicación cuyo padre sea `d76b39bfc646e6236368cab06ec51cda5f66c484` y cuyo árbol sea exactamente `13bdf2aa75b4b4ea3ce5d3e484e0d7babd2dfdb0`;
3. preparar un segundo commit que registre exclusivamente este acto, sin alterar retroactivamente el árbol aprobado;
4. solicitar autorización expresa antes de modificar el repositorio canónico; y
5. verificar materialmente ambos commits antes de declarar vigente la línea base, eficaz el cierre de G7 y abierto el inicio documental de G8.

**Estado resultante:** `LB-G7-GMS-20260908-01` v1.0.0 aprobada y pendiente de publicación material; cierre documental de G7 aprobado con eficacia material diferida; `DOC-021` y `ADR-048` a `ADR-054` sin vigencia todavía; G8 cerrado; ninguna SPEC concreta; `INI-GMS-0001` no Lista para Especificar; ninguna funcionalidad de producto; código funcional prohibido hasta superar G9.
