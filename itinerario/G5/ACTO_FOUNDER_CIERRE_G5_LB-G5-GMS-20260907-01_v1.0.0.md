# GeoMotion Studio

# Acto del Founder — Aprobación del cierre documental de la línea base G5

**Identificador del acto:** `ACTO-G5-GMS-20260907-12`  
**Línea base:** `LB-G5-GMS-20260907-01`  
**Versión:** `1.0.0`  
**Estado del acto:** Aprobado y vigente  
**Estado de la línea base:** Aprobada — pendiente de publicación material  
**Estado de G5:** Cierre documental aprobado — eficacia material diferida  
**Fecha:** 7 de septiembre de 2026  
**Autoridad:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Commit canónico de entrada:** `d280519406de8896bc426a1f44178f6a63d2fe68`  
**Árbol canónico de entrada:** `5dfd777223c1facf1a4c731b54a1201e4279bf4b`  
**Árbol Git aprobado:** `49609f7209a92ff78b86160836903c40c468030b`  
**Restricción:** código funcional prohibido hasta superar G9

---

## 1. Objeto

El presente acto materializa la aprobación expresa de `LB-G5-GMS-20260907-01` sobre el corte exacto evaluado en `INF-G5-GMS-20260907-02` y deja aprobado el cierre documental de G5.

El acto no modifica el contenido del árbol Git aprobado y no publica el repositorio canónico. La eficacia material del cierre, la vigencia de `DOC-019` y `ADR-041` a `ADR-045` y la apertura de G6 permanecen diferidas hasta que la línea base sea materialmente publicada y esa publicación quede verificada.

## 2. Declaración exacta del Founder

El Founder declaró:

> **Apruebo la línea base G5 v1.0.0, identidad LB-G5-GMS-20260907-01, en los términos exactos del informe INF-G5-GMS-20260907-02; confirmo la materialización conforme de D-37 a D-48; confirmo que el cierre documental de G5 queda aprobado pero su eficacia material, la vigencia de DOC-019 y ADR-041 a ADR-045 y la apertura de G6 permanecerán diferidas hasta la publicación material de esta línea base; confirmo que TECH-G5-001 a TECH-G5-008 conservan sus etapas de resolución y no bloquean esta línea base; y confirmo que esta aprobación no crea una SPEC concreta, no declara INI-GMS-0001 Lista para Especificar, no modifica apps/web, no autoriza código funcional ni anticipa G8 o G9**

La declaración coincide sustantiva y literalmente con la fórmula de decisión incluida en el informe evaluado, con la única diferencia tipográfica de que el mensaje del Founder no agrega punto final.

## 3. Material aprobado

| Elemento | Identidad exacta |
|---|---|
| Informe evaluado | `GMS_INFORME_VALIDACION_Y_PROPUESTA_CIERRE_G5_v1.0.0.md` |
| Identificador del informe | `INF-G5-GMS-20260907-02` |
| Tamaño del informe | `13.788 bytes` |
| SHA-256 del informe | `cfad3a32c0f42348d23880449b24b3ba0c8156819f06a9628a522426ba167ee7` |
| Expediente material evaluado | `GMS_EXPEDIENTE_CANDIDATO_LINEA_BASE_G5_v1.0.0_20260907.zip` |
| Tamaño del expediente | `673.062 bytes` |
| SHA-256 del expediente | `20efdc32f2e3fb59f7dc058e1a8600a44b7b29899b7c4a5e2f67613b6ed60900` |
| Commit canónico de partida | `d280519406de8896bc426a1f44178f6a63d2fe68` |
| Árbol Git de partida | `5dfd777223c1facf1a4c731b54a1201e4279bf4b` |
| Árbol Git aprobado | `49609f7209a92ff78b86160836903c40c468030b` |

## 4. Composición aprobada

Se aprueba el corte material de 139 archivos regulares contenido en el expediente evaluado.

El delta exacto de G5 comprende diez rutas: tres modificadas, siete agregadas y ninguna eliminada. Registra 1.102 inserciones y 3 eliminaciones, todas en documentos Markdown.

### 4.1 Instrumentos de control

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_DELTA_G4_A_G5_v1.0.0.csv` | 1.307 bytes | `54a34bae42ce543b2b132cff5d722b5f1e59e9f9b619a64764aca3572702c32b` |
| `GMS_INVENTARIO_REPOSITORIO_CANDIDATO_G5_v1.0.0.csv` | 15.330 bytes | `d5a04c954ea79f9eaacfde944a490dc8f2f968fcae5062a6015b79e2c27858a8` |
| `GMS_MANIFIESTO_CAMBIOS_G5_v1.0.0.sha256` | 944 bytes | `e5c508f63ed6e3a92b8f4079b19ad1488e07692923063e2ecdb304a455b3ec2a` |
| `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G5_v1.0.0.sha256` | 14.333 bytes | `33fa4d3c19eb2258a4fa96abced02ef7678982a78828700afd9c3f24a0c9eb8e` |

Las comprobaciones preservadas en el informe arrojan 10 de 10 huellas conformes para el delta y 139 de 139 huellas conformes para el repositorio candidato.

### 4.2 Contenido institucional consolidado

Quedan aprobados para integrar la línea base:

- `DOC-019`, que consolida la arquitectura y el dominio mínimos de `INI-GMS-0001`;
- `ADR-041` a `ADR-045`, que registran las cinco decisiones arquitectónicas significativas de G5;
- módulos, ownership, fronteras, dependencias y vistas mínimas;
- entidades, agregado documental, estados, transiciones y dieciséis invariantes;
- ownership de datos, persistencia conceptual, nueve contratos y catorce códigos de error;
- identidad y autorización local mínimas, con denegación por defecto;
- la exclusión de IA, cuentas, roles y servicios remotos del piloto;
- el tratamiento de `OPEN-INI-0001-01` a `-09`;
- el registro gobernado de `TECH-G5-001` a `-008`;
- la navegación documental mínima; y
- `ACTO-G5-GMS-20260907-11`, que registra D-37 a D-48.

Los documentos institucionales aprobados continúan siendo las fuentes de autoridad del proyecto. Los índices y registros facilitan relación y trazabilidad sin crear autoridad paralela.

## 5. Validaciones preservadas

Se preservan como resultados del corte aprobado:

- árbol Git candidato reproducible: `49609f7209a92ff78b86160836903c40c468030b`;
- seis enlaces Markdown relativos verificados, sin enlaces rotos;
- treinta ADR, doce decisiones G5, dieciséis invariantes, nueve contratos y catorce códigos de error;
- nueve cuestiones `OPEN-INI-0001-*` tratadas y ocho decisiones `TECH-G5-*` gobernadas;
- ausencia de una SPEC concreta y de la ruta `docs/spec/`;
- ausencia de enlaces simbólicos y archivos comprimidos dentro del árbol candidato;
- ausencia de cambios no documentales y de código funcional;
- coincidencia exacta de `apps/web` y `LICENSE` con la línea base de entrada; y
- cero defectos bloqueantes.

## 6. Efectos institucionales

A partir de este acto:

1. `LB-G5-GMS-20260907-01` versión 1.0.0 queda aprobada sobre el árbol exacto identificado;
2. el cierre documental de G5 queda aprobado;
3. D-37 a D-48 permanecen aprobadas y su materialización se confirma conforme;
4. la línea base queda pendiente de publicación material en el repositorio canónico;
5. la eficacia material del cierre de G5 permanece diferida hasta que esa publicación sea ejecutada y verificada;
6. `DOC-019` y `ADR-041` a `ADR-045` permanecen sin vigencia hasta esa publicación;
7. `TECH-G5-001` a `TECH-G5-008` conservan sus etapas de resolución y no bloquean la línea base;
8. G6 permanece cerrado hasta la publicación material de la línea base; y
9. todo cambio del corte aprobado requiere una actuación sucesora identificable.

## 7. Efectos no producidos

Este acto:

- no modifica ni publica el repositorio canónico;
- no autoriza commits, ramas, etiquetas ni releases;
- no abre G6;
- no crea, redacta, aprueba ni publica una SPEC concreta;
- no declara `INI-GMS-0001` Lista para Especificar;
- no resuelve anticipadamente ninguna selección `TECH-G5-*`;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no modifica `apps/web` ni altera su clasificación como experimento histórico reemplazable;
- no autoriza código funcional;
- no anticipa G8 ni G9; y
- no introduce una autoridad paralela a los documentos institucionales.

## 8. Próxima actuación

Corresponde:

1. preservar este acto junto al material exacto aprobado;
2. preparar, sin ejecutar, un primer commit de publicación cuyo padre sea `d280519406de8896bc426a1f44178f6a63d2fe68` y cuyo árbol sea exactamente `49609f7209a92ff78b86160836903c40c468030b`;
3. preparar un segundo commit que registre exclusivamente este acto, sin alterar retroactivamente el árbol aprobado;
4. solicitar autorización expresa antes de modificar el repositorio canónico; y
5. verificar materialmente ambos commits antes de declarar vigente la línea base, eficaz el cierre de G5 y abierto el inicio documental de G6.

**Estado resultante:** `LB-G5-GMS-20260907-01` v1.0.0 aprobada y pendiente de publicación material; cierre documental de G5 aprobado con eficacia material diferida; `DOC-019` y `ADR-041` a `ADR-045` sin vigencia todavía; G6 cerrado; ninguna SPEC concreta; `apps/web` sin cambios; código funcional prohibido hasta superar G9.
