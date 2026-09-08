# GeoMotion Studio

# Acto del Founder — Aprobación del cierre documental de la línea base G6

**Identificador del acto:** `ACTO-G6-GMS-20260908-14`  
**Línea base:** `LB-G6-GMS-20260908-01`  
**Versión:** `1.0.0`  
**Estado del acto:** Aprobado y vigente  
**Estado de la línea base:** Aprobada — pendiente de publicación material  
**Estado de G6:** Cierre documental aprobado — eficacia material diferida  
**Fecha:** 8 de septiembre de 2026  
**Autoridad:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Commit canónico de entrada:** `e651bb65a514653d3f268daa1bd3ddfcfc4aa39d`  
**Árbol canónico de entrada:** `95e92f11e4c4f22578c9b821ef590aa36293f474`  
**Árbol Git aprobado:** `b7d6b070061414633f2188a762f6e5ccac3747bf`  
**Restricción:** código funcional prohibido hasta superar G9

---

## 1. Objeto

El presente acto materializa la aprobación expresa de `LB-G6-GMS-20260908-01` sobre el corte exacto evaluado en `INF-G6-GMS-20260908-02` y deja aprobado el cierre documental de G6.

El acto no modifica el contenido del árbol Git aprobado y no publica el repositorio canónico. La eficacia material del cierre, la vigencia de `DOC-020`, `ADR-046` y `ADR-047` y la apertura de G7 permanecen diferidas hasta que la línea base sea materialmente publicada y esa publicación quede verificada.

## 2. Declaración exacta del Founder

El Founder declaró:

> **Apruebo la línea base G6 v1.0.0, identidad LB-G6-GMS-20260908-01, en los términos exactos del informe INF-G6-GMS-20260908-02; confirmo la materialización conforme de D-49 a D-60 y de la autorización complementaria sobre `docs/producto/README.md`; confirmo que el cierre documental de G6 queda aprobado pero su eficacia material, la vigencia de DOC-020, ADR-046 y ADR-047 y la apertura de G7 permanecerán diferidas hasta la publicación material de esta línea base; confirmo que OPEN-INI-0001-06 a -08 y TECH-G5-002 quedan resueltas en los términos aprobados, mientras TECH-G5-001 y TECH-G5-003 a -008 conservan su etapa G7; y confirmo que esta aprobación no crea una SPEC concreta, no declara INI-GMS-0001 Lista para Especificar, no modifica apps/web, no autoriza código funcional ni anticipa G8 o G9.**

La declaración coincide literalmente con la fórmula de decisión incluida en el informe evaluado.

## 3. Material aprobado

| Elemento | Identidad exacta |
|---|---|
| Informe evaluado | `GMS_INFORME_VALIDACION_Y_PROPUESTA_CIERRE_G6_v1.0.0.md` |
| Identificador del informe | `INF-G6-GMS-20260908-02` |
| Tamaño del informe | `15.179 bytes` |
| SHA-256 del informe | `8a80a6bf51b136b388e7eef52a05a6919c18197a518db946ad31f5428fb7056a` |
| Expediente material evaluado | `GMS_EXPEDIENTE_CANDIDATO_LINEA_BASE_G6_v1.0.0_20260908.zip` |
| Tamaño del expediente | `712.066 bytes` |
| SHA-256 del expediente | `c2edce77fd88c34797c3c981212c3b0df1490021fad4e54dbb4aeec855e6654d` |
| Commit canónico de partida | `e651bb65a514653d3f268daa1bd3ddfcfc4aa39d` |
| Árbol Git de partida | `95e92f11e4c4f22578c9b821ef590aa36293f474` |
| Árbol Git aprobado | `b7d6b070061414633f2188a762f6e5ccac3747bf` |

## 4. Composición aprobada

Se aprueba el corte material de 144 archivos regulares contenido en el expediente evaluado.

El delta exacto de G6 comprende dieciséis rutas: doce modificadas, cuatro agregadas y ninguna eliminada. Registra 950 inserciones y 71 eliminaciones, todas en documentos Markdown.

### 4.1 Instrumentos de control

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_DELTA_G5_A_G6_v1.0.0.csv` | 2.614 bytes | `c22b640f3698ea496188ba15ebd2b823f71bac21c9f6637955be0f368d94e404` |
| `GMS_INVENTARIO_REPOSITORIO_CANDIDATO_G6_v1.0.0.csv` | 15.936 bytes | `4f38464acd1d7d719b2a4e28ee0def8d78a571bb5b5644fc42f2e13a3dd731fc` |
| `GMS_MANIFIESTO_CAMBIOS_G6_v1.0.0.sha256` | 1.589 bytes | `44a5b7e0c421cd734448a5e407e0a97758e652b71f5268da954bc2a411ea5602` |
| `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G6_v1.0.0.sha256` | 14.898 bytes | `cdda7c583eceb04df3dba3c80486d0dca41e64ab5f9e7e62711b7be27551e2f6` |

Las comprobaciones preservadas en el informe arrojan 16 de 16 huellas conformes para el delta y 144 de 144 huellas conformes para el repositorio candidato.

### 4.2 Contenido institucional consolidado

Quedan aprobados para integrar la línea base:

- `DOC-020`, que consolida el perfil de calidad, seguridad y verificación del piloto;
- `ADR-046`, que adopta WCAG 2.2 Nivel AA como objetivo obligatorio de accesibilidad;
- `ADR-047`, que selecciona las tres capas Natural Earth 1:110m aplicables al mapa base local;
- 27 RNF con entorno, métrica, método, umbral, evidencia y autoridad;
- entornos `ENV-G6-01` a `-05`, perfiles `DEV-G6-01` a `-04` y fixtures `DAT-G6-00` a `-07`;
- presupuestos `PERF-G6-01` a `-09`, `UX-G6-01/02` y garantías `REL-G6-01` a `-06`;
- clasificación de datos, política de secretos y amenazas `THR-G6-01` a `-09`;
- observabilidad exclusivamente local, pruebas por riesgo y gobierno de dependencias;
- la resolución documental de `OPEN-INI-0001-06` a `-08` y `TECH-G5-002`;
- la conservación de `OPEN-INI-0001-09` para G8 y de `TECH-G5-001` y `TECH-G5-003` a `-008` para G7;
- la normalización autorizada de `docs/producto/README.md` sin cambio sustantivo; y
- `ACTO-G6-GMS-20260908-13`, que registra D-49 a D-60 y la autorización complementaria.

Los documentos institucionales aprobados continúan siendo las fuentes de autoridad del proyecto. Los índices y registros facilitan relación y trazabilidad sin crear autoridad paralela.

## 5. Validaciones preservadas

Se preservan como resultados del corte aprobado:

- árbol Git candidato reproducible: `b7d6b070061414633f2188a762f6e5ccac3747bf`;
- once enlaces Markdown relativos verificados, sin enlaces rotos;
- 32 ADR, doce decisiones G6, 27 RNF y nueve amenazas;
- tres cuestiones `OPEN-INI-0001-*` resueltas documentalmente, una conservada para G8 y siete decisiones `TECH-G5-*` conservadas para G7;
- ausencia de una SPEC concreta y de la ruta `docs/spec/`;
- ausencia de enlaces simbólicos y archivos comprimidos dentro del árbol candidato;
- ausencia de cambios no documentales y de código funcional;
- coincidencia exacta de `apps/web` y `LICENSE` con la línea base de entrada;
- limitación de `docs/producto/README.md` a la normalización expresamente autorizada; y
- cero defectos bloqueantes.

## 6. Efectos institucionales

A partir de este acto:

1. `LB-G6-GMS-20260908-01` versión 1.0.0 queda aprobada sobre el árbol exacto identificado;
2. el cierre documental de G6 queda aprobado;
3. D-49 a D-60 permanecen aprobadas y su materialización, incluida la autorización complementaria, se confirma conforme;
4. la línea base queda pendiente de publicación material en el repositorio canónico;
5. la eficacia material del cierre de G6 permanece diferida hasta que esa publicación sea ejecutada y verificada;
6. `DOC-020`, `ADR-046` y `ADR-047` permanecen sin vigencia hasta esa publicación;
7. `OPEN-INI-0001-06` a `-08` y `TECH-G5-002` quedan resueltas en los términos aprobados, con eficacia material diferida;
8. `TECH-G5-001` y `TECH-G5-003` a `-008` conservan su etapa G7;
9. G7 permanece cerrado hasta la publicación material de la línea base; y
10. todo cambio del corte aprobado requiere una actuación sucesora identificable.

## 7. Efectos no producidos

Este acto:

- no modifica ni publica el repositorio canónico;
- no autoriza commits, ramas, etiquetas ni releases;
- no abre G7;
- no crea, redacta, aprueba ni publica una SPEC concreta;
- no declara `INI-GMS-0001` Lista para Especificar;
- no incorpora materialmente datasets ni dependencias;
- no resuelve anticipadamente las selecciones tecnológicas conservadas para G7;
- no constituye `Admin`, `AI` ni `Usuario` como roles vigentes;
- no modifica `apps/web` ni altera su clasificación como experimento histórico reemplazable;
- no autoriza código funcional;
- no anticipa G8 ni G9; y
- no introduce una autoridad paralela a los documentos institucionales.

## 8. Próxima actuación

Corresponde:

1. preservar este acto junto al material exacto aprobado;
2. preparar, sin ejecutar, un primer commit de publicación cuyo padre sea `e651bb65a514653d3f268daa1bd3ddfcfc4aa39d` y cuyo árbol sea exactamente `b7d6b070061414633f2188a762f6e5ccac3747bf`;
3. preparar un segundo commit que registre exclusivamente este acto, sin alterar retroactivamente el árbol aprobado;
4. solicitar autorización expresa antes de modificar el repositorio canónico; y
5. verificar materialmente ambos commits antes de declarar vigente la línea base, eficaz el cierre de G6 y abierto el inicio documental de G7.

**Estado resultante:** `LB-G6-GMS-20260908-01` v1.0.0 aprobada y pendiente de publicación material; cierre documental de G6 aprobado con eficacia material diferida; `DOC-020`, `ADR-046` y `ADR-047` sin vigencia todavía; G7 cerrado; ninguna SPEC concreta; `INI-GMS-0001` no Lista para Especificar; `apps/web` sin cambios; código funcional prohibido hasta superar G9.
