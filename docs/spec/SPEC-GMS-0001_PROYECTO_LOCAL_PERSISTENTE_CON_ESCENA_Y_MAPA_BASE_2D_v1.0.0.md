# GeoMotion Studio

# SPEC-GMS-0001 — Proyecto local persistente con escena y mapa base 2D

**Identificador:** `SPEC-GMS-0001`  
**Versión:** `1.0.0`  
**Estado de madurez:** Candidato — pendiente de aprobación del corte exacto y publicación de G8  
**Estado de implementación:** No iniciada  
**Fecha:** 8 de septiembre de 2026  
**Iniciativa:** `INI-GMS-0001`  
**Propietario documental:** Dirección Técnica  
**Integración técnica:** Dirección Técnica  
**Autoridad de aprobación:** Founder  
**Línea base institucional de entrada:** `LB-G7-GMS-20260908-01`  
**Commit material de entrada:** `41d73ceede9ccfe6ec6dd035e6ea448241c97a0a`  
**Árbol material de entrada:** `990f169458ccf403788cc70ceea5e434087bc2b0`  
**Clasificación de revisión:** `R2`  
**Declaración LPE:** `ACTO-G8-GMS-20260908-17`; D-74  
**Autorización de materialización:** `ACTO-G8-GMS-20260908-17`; D-73 a D-84  
**Línea base prevista:** `LB-G8-GMS-20260908-01`

---

## 1. Reglas de interpretación

Esta SPEC define un solo incremento funcional, pero no autoriza su implementación. Su función es establecer el comportamiento verificable que G9 deberá preparar y que solo podrá implementarse después de LPI.

Reglas:

1. Los documentos institucionales aprobados y vigentes son las fuentes de autoridad.
2. Esta SPEC los relaciona y especializa para el incremento; no los sustituye.
3. Una mención tecnológica expresa una restricción ya decidida en G7, no arquitectura nueva.
4. Los requisitos y criterios describen resultados; su materialización técnica se planifica en G9.
5. Una contradicción con una fuente superior detiene el alcance afectado.
6. Ningún silencio se interpreta como permiso, requisito o decisión.
7. La aprobación y publicación de esta SPEC no equivalen a implementación, aceptación o liberación.

---

## 2. Encabezado e identidad

El encabezado precedente materializa todos los campos obligatorios de `TPL-SPEC-GMS-001`: identidad, versión, madurez, estado de implementación, fecha, iniciativa, responsabilidades, autoridad, línea base y corte material de entrada, clasificación de revisión y trazabilidad de la autorización. No se omite ningún campo obligatorio ni se declara vigencia anticipada.

---

## 3. Historial de versiones

| Versión | Fecha | Estado | Cambio | Autoridad o actuación | Sustituye |
|---|---|---|---|---|---|
| `1.0.0` | 2026-09-08 | Candidato | Primera materialización del incremento piloto | `ACTO-G8-GMS-20260908-17`; D-73 a D-84 | No aplica |

---

## 4. Necesidad y resultado

### 4.1 Problema

Una persona creadora necesita iniciar un proyecto geoespacial, reconocer su contexto espacial y continuar el trabajo en otra sesión sin perder la estructura mínima, crear una cuenta o depender de un servicio remoto.

G1 a G7 establecieron autoridad, lenguaje, gobierno SDD, producto, arquitectura, calidad y fundación. Todavía no existe comportamiento funcional aprobado ni implementado para el recorrido.

### 4.2 Resultado observable esperado

Una persona puede crear un Project local con una Scene y una Map View 2D, modificar la vista cartográfica, guardar el Project, cerrar el contexto, reabrirlo desde el almacenamiento local y comprobar que se restauró exactamente el estado confirmado.

Ante una falla incluida, recibe un resultado seguro y recuperable sin activación parcial, pérdida del último guardado confirmado ni dependencia remota.

### 4.3 Valor y prioridad

El incremento:

- ofrece el primer resultado vertical y visible del itinerario;
- conecta Project, Scene y Map sin ampliar el dominio;
- demuestra continuidad entre sesiones;
- pertenece íntegramente a Community;
- ejercita contratos, integridad, accesibilidad y operación offline; y
- constituye la prioridad 1 aprobada de producto.

### 4.4 Medida de éxito

El resultado es satisfactorio únicamente cuando:

1. todos los criterios obligatorios de §17 producen `Conforme`;
2. los umbrales aplicables de DOC-020 se satisfacen;
3. el round-trip conserva identidades y estado;
4. ninguna falla sustituye el último documento confirmado;
5. el recorrido funciona con red externa bloqueada; y
6. el Founder acepta el resultado mediante un futuro `ACE-*` después de implementación y evidencia.

---

## 5. Alcance

### 5.1 Incluido

1. presentar una pantalla inicial local;
2. validar un nombre de Project;
3. crear un Project con identidad opaca;
4. crear exactamente una Scene inicial activa;
5. crear exactamente una Map View 2D asociada;
6. resolver y presentar el mapa base Natural Earth local;
7. modificar centro y zoom;
8. guardar el Project Document mediante persistencia local confirmada;
9. cerrar el contexto activo;
10. seleccionar y reabrir un Project confirmado;
11. restaurar nombre, identidades, Scene y Map View;
12. rechazar de forma segura documentos inválidos o no soportados;
13. ofrecer recuperación válida sin activación silenciosa; y
14. comunicar estados y errores comprendidos por esta SPEC.

### 5.2 Excluido

- cuentas, autenticación, autorización remota y organizaciones;
- sincronización, almacenamiento remoto, colaboración y publicación externa;
- múltiples Scenes como comportamiento exigible;
- 3D, terreno, cámaras cinematográficas y render final;
- capas incorporadas por la persona, Assets y Objects;
- Timeline, keyframes y animación;
- importación, descarga, exportación y selección de rutas de archivo;
- plugins, APIs públicas y Marketplace;
- IA;
- telemetría remota; y
- operación distribuida.

### 5.3 No objetivos

- demostrar una aplicación completa;
- fijar el diseño visual definitivo de GeoMotion Studio;
- crear migraciones para versiones distintas de `formatVersion: 1`;
- garantizar conservación cuando la persona o la plataforma borran deliberadamente los datos del sitio;
- interceptar de forma uniforme el cierre de pestaña, proceso o dispositivo;
- ofrecer autoría completa en tablet o móvil; y
- preparar implementación, fixtures o pruebas ejecutables dentro de G8.

### 5.4 Supuestos prohibidos

- que una dependencia histórica está adoptada por presencia;
- que `apps/web` ya contiene el recorrido;
- que una escritura iniciada equivale a guardado;
- que un documento parseable es válido;
- que una recuperación puede activarse automáticamente;
- que el mapa puede recurrir a red como fallback;
- que Admin, AI o Usuario son roles vigentes;
- que una SPEC aprobada autoriza código; y
- que G8 puede completar entregables reservados a G9.

---

## 6. Interesados y actores

| ID | Tipo | Necesidad o interacción | Autoridad | Fuente |
|---|---|---|---|---|
| `STK-GMS-0001` | Stakeholder primario | Obtener valor del núcleo abierto | Ninguna autoridad institucional implícita | Mapa G4 |
| `ACTR-GMS-0001` | Actor humano | Crear, navegar, guardar, cerrar y reabrir el Project local | Acciones locales expresamente permitidas | INI; DOC-019 |
| Navegador | Actor técnico anfitrión | Proveer ejecución, IndexedDB, Web Crypto e interacción | Ninguna autoridad de producto | DOC-020; G7 |
| Recurso Natural Earth | Actor técnico pasivo | Proveer cartografía local empaquetada | Ninguna | ADR-047; ADR-050 |

Admin, AI y Usuario continúan como hipótesis futuras y no son roles del incremento. No existen cuentas ni jerarquías de permisos.

---

## 7. Fuentes y precedencia

| Fuente | Versión o corte | Estado | Sección aplicable | Relación |
|---|---|---|---|---|
| `VALORES.md` | corte G7 | Vigente | Misión, calidad y arquitectura primero | Restringe |
| DOC-001 | 1.0 | Publicado | Visión y Community | Informa y restringe |
| DOC-002 | 1.0 normalizado | Publicado | Project, Scene, Map, contratos y módulos | Autoriza y restringe |
| DOC-003 | 1.0 | Publicado | interacción, foco, errores y accesibilidad | Restringe |
| DOC-006 | 1.0 | Publicado | autoridad, cambio y aprobación | Restringe |
| DOC-007 a DOC-010 | 1.0 | Publicados | layouts, componentes, responsive y estado | Informa y restringe |
| DOC-012 | 1.0 | Publicado | navegación y representación cartográfica | Restringe |
| DOC-017 | 1.0 | Publicado | seguridad, datos y denegación | Restringe |
| DOC-018 | 1.0.0 | Publicado por G1 | versión, línea base y publicación | Autoriza y restringe |
| DOC-019 | 1.0.0 | Vigente | §§4–17 | Autoriza y restringe |
| DOC-020 | 1.0.0 | Vigente | §§5–15 | Autoriza y restringe |
| DOC-021 | 1.0.0 | Vigente | §§5–18 | Restringe materialización futura |
| ADR-041 a ADR-045 | 1.0.0 | Vigentes | dominio y contratos | Restringen |
| ADR-046 y ADR-047 | 1.0.0 | Vigentes | accesibilidad y recurso | Restringen |
| ADR-048 a ADR-054 | 1.0.0 | Vigentes | fundación tecnológica | Restringen |
| `REG-IVX-GMS-001` | 1.0.0 | Vigente | invariantes y variantes | Restringe |
| `INI-GMS-0001` | 1.0.0 | Vigente y LPE | contenido completo | Origina |
| `MOD-SDD-GMS-001` | 1.0.0 | Vigente | ciclo, LPE y LPI | Gobierna |
| `TPL-SPEC-GMS-001` | 1.0.0 | Vigente | estructura completa | Gobierna |
| `POL-SDD-GMS-001` | 1.0.0 | Vigente | revisión, trazabilidad y cambio | Gobierna |
| Itinerario Maestro SDD | 1.0.0 | Vigente | Etapas 8 y 9 | Ordena |
| `ACTO-G8-GMS-20260908-17` | 1.0.0 | Vigente | D-73 a D-84 | Autoriza materialización |

Ante una colisión se detiene el alcance y se aplica la precedencia institucional. Esta tabla no cambia la autoridad ni el estado de sus fuentes.

---

## 8. Invariantes, variantes y excepciones

### 8.1 Invariantes transversales aplicables

| ID | Aplicación | Método de control |
|---|---|---|
| `INV-PRO-001` | Incremento abierto y geoespacial dentro de Community | Revisión de alcance |
| `INV-PRO-003` | SPEC y G9 preceden al código | Validación de puerta |
| `INV-PRO-004` | Ningún umbral se sacrifica por velocidad | CA y PRU obligatorios |
| `INV-PRO-005` | El piloto preserva evolución | Puertos y formato versionado |
| `INV-PRO-006` | El resultado no depende del proveedor | Adaptadores y cero egress |
| `INV-ARQ-001` a `INV-ARQ-008` | Módulos, ownership, contratos y dominios | `PRU-014` |
| `INV-ARQ-013` y `INV-ARQ-018` | Gobierno y cambio arquitectónico | revisión `R2` y ADR |
| `INV-SEG-001`, `-003`, `-006` y `-007` | seguridad desde diseño, denegación, datos y trazabilidad | `PRU-002`, `-011`, `-015` |
| `INV-DOC-001` a `INV-DOC-010` | autoridad, identidad, versión y límites de SPEC | `PRU-016` |
| `INV-OPE-001` | código prohibido hasta G9 | auditoría de delta |
| `INV-OPE-003` | sin roles Admin, AI o Usuario | revisión de actores |
| `INV-OPE-004` a `INV-OPE-006` | sin decisiones implícitas ni puertas anticipadas | revisión y actos |

### 8.2 Invariantes del piloto

`INV-G5-001` a `INV-G5-016` son obligatorias sin modificación. Cada una deberá trazar al menos a una prueba preparada en G9.

### 8.3 Invariantes no aplicables

| ID | Fundamento |
|---|---|
| `INV-PRO-002` | No interviene IA |
| `INV-ARQ-009` a `INV-ARQ-012` | Assets, Objects, Timeline, Render y Export están excluidos |
| `INV-ARQ-014` a `INV-ARQ-017` | No intervienen extensiones ni plugins |
| `INV-SEG-002`, `-004`, `-005`, `-008` | No existen cuentas, identidad remota, servicios ni IA |

### 8.4 Variantes seleccionadas

| ID | Opción | Fundamento | Restricción preservada |
|---|---|---|---|
| `VAR-ARQ-001` | Adaptadores vigentes de G7 | Ya aprobados | dominio sin dependencia de infraestructura |
| `VAR-ARQ-002` | OpenLayers detrás del puerto Map | ADR-050 | sustituibilidad y WGS 84 |
| `VAR-OPE-001` | Operación local | INI y ADR-044 | sin red obligatoria |
| `VAR-G5-001` | Una Scene activa | DOC-019 | modelo ampliable, piloto acotado |
| `VAR-G5-002` | Map View 2D | INI y DOC-019 | 3D diferido |
| `VAR-G5-003` | IndexedDB nativo | ADR-051 | puerto sustituible |

### 8.5 Excepciones

Ninguna. Cualquier excepción futura requiere `EXC-*`, alcance, vencimiento, controles compensatorios y aprobación del Founder.

---

## 9. Requisitos funcionales

| ID | Condición atómica | Fuente | Prioridad | Método |
|---|---|---|---|---|
| `SPEC-GMS-0001-RF-001` | La pantalla inicial deberá presentar nombre, creación y proyectos locales confirmados disponibles para reapertura | INI §§5 y 8; D-77 | Obligatorio | `PRU-006` |
| `SPEC-GMS-0001-RF-002` | El sistema deberá aplicar `trim` y aceptar solo nombres resultantes de 1 a 200 caracteres Unicode | DOC-019 §6.1; D-77 | Obligatorio | `PRU-001` |
| `SPEC-GMS-0001-RF-003` | Crear deberá producir exactamente un Project, una Scene `ACTIVE` y una Map View `2D` con los valores de §11.2 | DOC-019 §§6–8; D-77 | Obligatorio | `PRU-001`, `-005` |
| `SPEC-GMS-0001-RF-004` | La Map View deberá resolver `natural-earth-110m-physical-v1` localmente y presentarse sin red | ADR-047; ADR-050; D-77 | Obligatorio | `PRU-004`, `-006` |
| `SPEC-GMS-0001-RF-005` | Pan, zoom o restablecimiento deberán actualizar centro/zoom dentro de límites y volver `DIRTY` al Project | DOC-019 §§7.2 y 7.4; D-78 | Obligatorio | `PRU-001`, `-006` |
| `SPEC-GMS-0001-RF-006` | Guardar deberá componer, validar y confirmar atómicamente el documento antes de pasar a `CLEAN` | DOC-019 §10; ADR-051; D-78 | Obligatorio | `PRU-003`, `-005` |
| `SPEC-GMS-0001-RF-007` | Una falla de guardado deberá conservar `DIRTY/UNSAVED` y el último `head` confirmado | DOC-019 §12; DOC-020 §8 | Obligatorio | `PRU-003`, `-007`, `-010` |
| `SPEC-GMS-0001-RF-008` | Cerrar un Project `CLEAN` deberá liberar el contexto y volver a la pantalla inicial | DOC-019 §7.1; D-78 | Obligatorio | `PRU-005`, `-006` |
| `SPEC-GMS-0001-RF-009` | Cerrar un Project `DIRTY/UNSAVED` deberá ofrecer Guardar, Descartar y Cancelar con los resultados de §12.3 | DOC-019 §7.1; D-78 | Obligatorio | `PRU-007` |
| `SPEC-GMS-0001-RF-010` | La pantalla inicial deberá permitir seleccionar y abrir un proyecto confirmado del mismo almacenamiento local | INI §5; D-77 | Obligatorio | `PRU-006` |
| `SPEC-GMS-0001-RF-011` | Abrir deberá identificar versión, decodificar, validar estructura, referencias, invariantes e integridad antes de activar | DOC-019 §§7.5 y 10 | Obligatorio | `PRU-002`, `-005` |
| `SPEC-GMS-0001-RF-012` | Una reapertura válida deberá restaurar identidades, nombre, Scene, centro, zoom y `baseMapRef` confirmados | INI §1; DOC-019 §8 | Obligatorio | `PRU-006`, `-010` |
| `SPEC-GMS-0001-RF-013` | Un documento inválido o no soportado deberá rechazarse sin activación parcial ni modificación del original | DOC-019 §§7.5 y 12 | Obligatorio | `PRU-002`, `-007` |
| `SPEC-GMS-0001-RF-014` | Una generación recuperable deberá ofrecerse sin activarse; aceptar abre `RECOVERED` y un guardado posterior confirma `CLEAN` | ADR-051; D-79 | Obligatorio | `PRU-007`, `-010` |
| `SPEC-GMS-0001-RF-015` | Todo resultado fallido deberá comunicar código, mensaje seguro y acción coherente con su recuperabilidad | DOC-019 §12; DOC-020 §9 | Obligatorio | `PRU-007`, `-011` |
| `SPEC-GMS-0001-RF-016` | Cada transición observable deberá emitir una vez el evento local obligatorio y omitir campos prohibidos | DOC-020 §10; ADR-054 | Obligatorio | `PRU-015` |

---

## 10. Requisitos no funcionales

Los umbrales pertenecen a DOC-020. Esta tabla fija su aplicación al incremento sin reducirlos.

| ID | Atributo | Entorno o datos | Métrica y umbral | Método |
|---|---|---|---|---|
| `SPEC-GMS-0001-RNF-001` | Respuesta y continuidad visual | `ENV-G6-01`; `DEV-G6-01/02` | INP p75 ≤200 ms; acuse p95 ≤100 ms; sin freeze ≥500 ms | `PRU-009` |
| `SPEC-GMS-0001-RNF-002` | Cadencia de mapa | `DAT-G6-01` | ≥50 fps en 95 %; sin freeze ≥500 ms | `PRU-009` |
| `SPEC-GMS-0001-RNF-003` | Degradación | `DAT-G6-01/02/03` | umbrales absolutos y degradación ≤50 % | `PRU-009` |
| `SPEC-GMS-0001-RNF-004` | Aprendizaje | cinco participantes | `UX-G6-01` completo | `PRU-013` |
| `SPEC-GMS-0001-RNF-005` | Consistencia | recorrido completo | cero contradicciones o variantes injustificadas | `PRU-013`, `-016` |
| `SPEC-GMS-0001-RNF-006` | Economía | `DAT-G6-01` | ≤7 acciones primarias; sin confirmaciones duplicadas | `PRU-013` |
| `SPEC-GMS-0001-RNF-007` | Accesibilidad | `DEV-G6-01` a `-04` | cero fallas WCAG 2.2 A/AA aplicables | `PRU-008` |
| `SPEC-GMS-0001-RNF-008` | Operabilidad | teclado y puntero | 100 % por teclado en escritorio; cero trampas; alternativa a arrastre | `PRU-008` |
| `SPEC-GMS-0001-RNF-009` | Legibilidad y reflow | DOC-020 §5.3; 200 % | AA; cero texto/acción primaria oculta; scroll 2D solo en mapa | `PRU-008`, `-012` |
| `SPEC-GMS-0001-RNF-010` | Navegadores | `ENV-G6-01` a `-05` | recorrido 100 % en `-01` a `-04`; cero pérdida/bloqueo en `-05` | `PRU-006`, `-012` |
| `SPEC-GMS-0001-RNF-011` | Sistemas | Windows, macOS, Ubuntu | mismo estado lógico; cero divergencias altas injustificadas | `PRU-012` |
| `SPEC-GMS-0001-RNF-012` | Arquitectura | todo cambio futuro | cero violaciones; ruptura solo con ADR previo | `PRU-014` |
| `SPEC-GMS-0001-RNF-013` | Independencia modular | grafo del piloto | cero ciclos/deep imports; 100 % por contratos | `PRU-014` |
| `SPEC-GMS-0001-RNF-014` | Trazabilidad | todos los elementos | 100 % trazado; cero funcionalidad sin SPEC | `PRU-016` |
| `SPEC-GMS-0001-RNF-015` | Revisabilidad | implementación futura | cero bloqueantes; cero supresiones injustificadas | `PRU-014` |
| `SPEC-GMS-0001-RNF-016` | Sustituibilidad | recurso/adaptador | sustitución sin cambiar dominio/documento; suite R1/R2 conforme | `PRU-014` |
| `SPEC-GMS-0001-RNF-017` | Extensión gobernada | integración futura | 100 % por mecanismo aprobado; cero acceso a internals | `PRU-014` |
| `SPEC-GMS-0001-RNF-018` | Integridad | `DAT-G6-04/05/06` | REL-G6-01/03/04/05; cero pérdida confirmada | `PRU-002`, `-010` |
| `SPEC-GMS-0001-RNF-019` | Defaults seguros | estado limpio/release | cero egress, secretos o ejecución; desconocido denegado | `PRU-011` |
| `SPEC-GMS-0001-RNF-020` | Dependencias | inventario completo | todos los umbrales DOC-020 §12.2 | `PRU-014` |
| `SPEC-GMS-0001-RNF-021` | Estabilidad | 50 recorridos | 50/50 sin crash, freeze, excepción no controlada o estado imposible | `PRU-010` |
| `SPEC-GMS-0001-RNF-022` | Fiabilidad | persistencia y fallas | 100 % resultados tipados; REL-G6-01 a -06 | `PRU-003`, `-010` |
| `SPEC-GMS-0001-RNF-023` | Coherencia | recorrido y entornos | cero divergencias altas; 100 % de errores usa taxonomía | `PRU-007`, `-012` |
| `SPEC-GMS-0001-RNF-024` | Preparación multilingüe | `DAT-G6-02/07` | 100 % cadenas externalizadas; cero concatenación funcional | `PRU-012` |
| `SPEC-GMS-0001-RNF-025` | Neutralidad regional | `es-AR`, `en-US`, RTL | cero cambio persistido; presentación correcta | `PRU-012` |
| `SPEC-GMS-0001-RNF-026` | Diagnóstico | todas las fallas | 100 % correlacionable; cero campos prohibidos | `PRU-015` |
| `SPEC-GMS-0001-RNF-027` | Registro proporcional | eventos de DOC-020 §10 | 100 % válidos; cero telemetría; cero duplicados | `PRU-015` |

Además se aplican literalmente `PERF-G6-01` a `-09`, `UX-G6-01/02`, `REL-G6-01` a `-06`, las matrices ENV/DEV/DAT y el protocolo común de DOC-020.

---

## 11. Arquitectura y dominio

### 11.1 Módulos y fronteras

| Módulo | Responsabilidad | Interacción permitida | Fuente |
|---|---|---|---|
| Interfaz/UI | presentar intención, estado y errores | contratos de Aplicación | DOC-019 §5 |
| Aplicación | orquestar crear, guardar, cerrar y reabrir | contratos públicos de dominios | DOC-019; ADR-054 |
| Project | ciclo, composición, validación y persistencia | Scene/Map snapshots; puerto repository | DOC-019 |
| Scene | identidad, pertenencia, estado y asociación | contratos Scene | DOC-019 |
| Map | identidad, navegación y `baseMapRef` | puerto de recurso | DOC-019; ADR-050 |
| Identidad | UUID y contexto local | puerto inyectable | ADR-053 |
| Infraestructura | IndexedDB, Ajv y OpenLayers | implementa puertos; no filtra internals | ADR-050 a ADR-052 |

Ningún requisito autoriza cambiar estas fronteras.

### 11.2 Entidades y estado inicial

| Elemento | Identidad | Estado o valor inicial | Persistencia |
|---|---|---|---|
| Project | UUID v4 opaco | `NEW/UNSAVED`; nombre normalizado | fragmento Project |
| Scene | UUID v4 opaco | una; `ACTIVE`; `order: 0`; nombre desde `scene.defaultName` | fragmento Scene |
| Map View | UUID v4 opaco | `2D`; `[0,0]`; zoom `1`; `natural-earth-110m-physical-v1` | fragmento Map |
| Project Document | `projectId` + `formatVersion: 1` | no existe hasta guardado confirmado | JSON UTF-8 estricto |

El valor localizado de `scene.defaultName` se materializa como dato al crear. Cambiar el locale después no modifica documentos confirmados.

### 11.3 Estados y transiciones

| Origen | Evento | Destino | Guardia | Resultado observable |
|---|---|---|---|---|
| Sin Project | Crear válido | `OPEN/UNSAVED` | nombre válido; entidades/invariantes conformes | editor abierto |
| `OPEN/UNSAVED` | navegación | `OPEN/UNSAVED` | centro/zoom válidos | vista y estado cambian |
| `OPEN/CLEAN` | navegación | `OPEN/DIRTY` | centro/zoom válidos | indicador pendiente |
| `OPEN/UNSAVED|DIRTY` | Guardar | `SAVING` | snapshot componible | progreso/acuse |
| `SAVING` | éxito confirmado | `OPEN/CLEAN` | commit, lectura y digest conformes | éxito visible |
| `SAVING` | falla | estado previo | error tipado | continúa abierto |
| `OPEN/CLEAN` | Cerrar | `CLOSED/CLEAN` | ninguna | pantalla inicial |
| `OPEN/DIRTY|UNSAVED` | Cerrar | sin transición | ninguna | diálogo de decisión |
| Diálogo | Guardar exitoso | `CLOSED/CLEAN` | confirmación | pantalla inicial |
| Diálogo | Guardar fallido | estado previo | falla | editor y error |
| Diálogo | Descartar | `CLOSED` | elección explícita | último `head` intacto |
| Diálogo | Cancelar | estado previo | elección explícita | foco restaurado |
| Pantalla inicial | Abrir válido | `OPEN/CLEAN` | validación integral | estado restaurado |
| Pantalla inicial | Abrir recuperación | `OPEN/RECOVERED` | oferta aceptada | procedencia visible |
| `OPEN/RECOVERED` | Guardar exitoso | `OPEN/CLEAN` | confirmación ordinaria | recuperación confirmada |

Scene permanece `ACTIVE` y Map View `READY` mientras el recurso está disponible. La falla de recurso cambia Map View a `DEGRADED` sin cerrar Project.

### 11.4 Datos y límites

| Dato | Regla |
|---|---|
| Nombre | `trim`; longitud Unicode 1–200; texto no ejecutable |
| Centro | longitud `[-180,180]`; latitud `[-90,90]`; números finitos |
| Zoom | número finito `[0,24]`; control visible cambia ±1 |
| Restablecer | centro `[0,0]`; zoom `1` |
| Scene/Map View | exactamente una de cada una en el piloto |
| Project Document | máximo 2 MiB antes de parseo/activación |
| Objetos JSON | cerrados; propiedades desconocidas rechazadas |
| Versión | únicamente entero `1` |

### 11.5 Decisiones arquitectónicas

| Cuestión | ADR | Estado | Bloqueo |
|---|---|---|---|
| Recorrido local sin servicio | ADR-044 | Vigente | No |
| Accesibilidad WCAG 2.2 AA | ADR-046 | Vigente | No |
| Natural Earth | ADR-047 | Vigente | No |
| Runtime y gestor | ADR-048 | Vigente | No |
| Fundación web | ADR-049 | Vigente | No |
| OpenLayers y EPSG:4326 | ADR-050 | Vigente | No |
| IndexedDB y recuperación | ADR-051 | Vigente | No |
| JSON Schema y versión | ADR-052 | Vigente | No |
| UUID v4 | ADR-053 | Vigente | No |
| Eventos internos | ADR-054 | Vigente | No |

No se identifica decisión arquitectónica nueva. No corresponde ADR-055.

---

## 12. Contratos y errores

### 12.1 Contratos aplicados

| ID | Participantes | Entrada | Salida | Precondición | Poscondición | Fuente |
|---|---|---|---|---|---|---|
| `SPEC-GMS-0001-CTR-001` | UI–Aplicación–Project | nombre | Project abierto o error | sin Project activo | `OPEN/UNSAVED` o sin cambio | `CTR-GMS-PRJ-001` |
| `SPEC-GMS-0001-CTR-002` | Project–Scene | creación/restauración | snapshot Scene | Project identificado | una Scene asociada válida | `CTR-GMS-SCN-001/002` |
| `SPEC-GMS-0001-CTR-003` | Project–Map | creación/restauración | snapshot Map View | Scene válida | una Map View asociada válida | `CTR-GMS-MAP-001/002` |
| `SPEC-GMS-0001-CTR-004` | Map–Infraestructura | `baseMapRef` | recurso o error MAP | referencia permitida | `READY` o `DEGRADED` | `CTR-GMS-MAP-003` |
| `SPEC-GMS-0001-CTR-005` | Project–Repositorio | documento válido | confirmación o error PST | snapshot completo | `head` nuevo o anterior intacto | `CTR-GMS-PRJ-003` |
| `SPEC-GMS-0001-CTR-006` | Repositorio–Project | `projectId` seleccionado | documento o error | registro local disponible | datos sin activar | `CTR-GMS-PRJ-003` |
| `SPEC-GMS-0001-CTR-007` | Project–Validación | bytes/documento | VALID/INVALID/UNSUPPORTED | ≤2 MiB para procesar | activable o rechazado | `CTR-GMS-PRJ-002` |
| `SPEC-GMS-0001-CTR-008` | Aplicación–Eventos | transición confirmada | reporte de despacho | cambio confirmado | evento único o falla contenida | ADR-054 |
| `SPEC-GMS-0001-CTR-009` | Aplicación–Autorización local | acción y contexto | permitir/denegar | recurso local anfitrión | acción o `GMS-AUT-001` | `CTR-GMS-AUT-001` |

Reglas comunes:

- éxito o error siempre tipados;
- ninguna excepción opaca cruza una frontera;
- no se exponen objetos OpenLayers, Ajv o IndexedDB;
- ningún contrato recibe secretos, rutas o documento completo salvo el puerto que debe procesarlo; y
- la idempotencia exacta de operaciones se materializa en G9 sin cambiar estos resultados.

### 12.2 Errores y condiciones excepcionales

| ID | Código fuente | Condición | Resultado observable | Recuperación | Criterio |
|---|---|---|---|---|---|
| `SPEC-GMS-0001-ERR-001` | `GMS-DOM-001` | operación incompatible | acción no ejecutada; estado intacto | elegir acción permitida | CA-017 |
| `SPEC-GMS-0001-ERR-002` | `GMS-DOM-002` | grafo inconsistente | no activar | corregir/otra fuente | CA-014 |
| `SPEC-GMS-0001-ERR-003` | `GMS-DOM-003` | centro/zoom inválido | rechazar/corregir | valor permitido | CA-006 |
| `SPEC-GMS-0001-ERR-004` | `GMS-DOC-001` | estructura inválida | no activar | otro proyecto/recuperación | CA-014 |
| `SPEC-GMS-0001-ERR-005` | `GMS-DOC-002` | versión distinta de 1 | no migrar ni activar | versión compatible | CA-015 |
| `SPEC-GMS-0001-ERR-006` | `GMS-DOC-003` | digest/integridad fallida | no activar | recuperación válida | CA-014/016 |
| `SPEC-GMS-0001-ERR-007` | `GMS-PST-001` | almacenamiento indisponible | mantener estado | reintentar | CA-008 |
| `SPEC-GMS-0001-ERR-008` | `GMS-PST-002` | lectura fallida | no activar | reintentar/otro proyecto | CA-017 |
| `SPEC-GMS-0001-ERR-009` | `GMS-PST-003` | escritura/confirmación fallida | mantener pendiente | reintentar | CA-008 |
| `SPEC-GMS-0001-ERR-010` | `GMS-PST-004` | cuota insuficiente | mantener pendiente | liberar capacidad/reintentar | CA-008 |
| `SPEC-GMS-0001-ERR-011` | `GMS-MAP-001` | recurso indisponible | `DEGRADED`; Project abierto | reintentar local | CA-005 |
| `SPEC-GMS-0001-ERR-012` | `GMS-MAP-002` | referencia no resoluble | `DEGRADED`; sin fallback | recurso permitido | CA-005 |
| `SPEC-GMS-0001-ERR-013` | `GMS-AUT-001` | acción local denegada | acción no ejecutada | otorgar por anfitrión/reintentar | CA-017 |
| `SPEC-GMS-0001-ERR-014` | `GMS-INT-001` | fallo interno no clasificado | estado confirmado preservado | reintento seguro si aplica | CA-017 |

Todo error incluye `code`, `category`, `recoverability`, `messageKey`, `safeContext` permitido y `causeRef` opcional no visible. Los textos se localizan; no exponen rutas, stacks, tokens, nombres o contenido completo.

### 12.3 Cierre con cambios pendientes

| Elección | Precondición | Poscondición |
|---|---|---|
| Guardar | `DIRTY/UNSAVED` | cierra solo si `CLEAN`; ante falla continúa abierto |
| Descartar | confirmación explícita | cierra; `head` previo intacto; `UNSAVED` no queda reabrible |
| Cancelar | diálogo abierto | cierra diálogo; restaura foco; cero escritura |

---

## 13. Seguridad, privacidad y control humano

| Control | Aplicación | Requisito | Verificación |
|---|---|---|---|
| Autenticación | No aplica | no existen cuentas | inspección de flujo |
| Autorización | Local mínima | denegar acciones no permitidas o capacidades ausentes | `PRU-003`, `-011` |
| Datos confidenciales | Nombre y documento | local, minimizado, no registrado ni transmitido | `PRU-011`, `-015` |
| Datos sensibles | rutas, diagnóstico, recuperación | redacción y acceso efímero | `PRU-011` |
| Secretos | No requeridos | cero secretos en cliente, repo, documento o logs | `PRU-011` |
| Entrada no confiable | nombre, documento, mapa | validar antes de activar/presentar | `PRU-002`, `-011` |
| Ejecución de contenido | Prohibida | texto mediante APIs seguras; cero HTML/script/eval | `PRU-011` |
| Red externa | Prohibida en recorrido | cero requests externas | `PRU-004`, `-011` |
| Registro auditable | Local y proporcional | eventos mínimos, correlación y campos permitidos | `PRU-015` |
| IA y control humano | No aplica | IA excluida | revisión de dependencias/flujo |

Se aplican `THR-G6-01` a `THR-G6-09`. Una vulnerabilidad alta alcanzable, ejecución de contenido, egress obligatorio o pérdida confirmada bloquea aceptación.

---

## 14. Dependencias, compatibilidad y licencias

G8 no incorpora dependencias. La implementación futura deberá usar exclusivamente el inventario vigente o tramitar un cambio previo.

| Dependencia o dato | Versión | Uso previsto | Licencia | Riesgo | Sustitución |
|---|---:|---|---|---|---|
| React / React DOM | `19.2.7` | UI | MIT | acoplamiento de presentación | contratos UI |
| OpenLayers | `10.10.0` | adaptador Map | BSD-2-Clause | API de motor | `CTR-GMS-MAP-003` |
| Ajv | `8.20.0` | validación schema | MIT | filtración de API | adaptador Project |
| Natural Earth | capas aprobadas | mapa base local | dominio público | procedencia/alteración | `baseMapRef` y receta |
| IndexedDB | API del navegador | persistencia local | estándar de plataforma | cuota/expulsión | `CTR-GMS-PRJ-003` |

Compatibilidad obligatoria:

- `ENV-G6-01` a `ENV-G6-04`: recorrido completo;
- `ENV-G6-05`: smoke, persistencia y ausencia de pérdida;
- `DEV-G6-01/02`: autoría y umbrales;
- `DEV-G6-03/04`: reflow, lectura y ausencia de bloqueo; y
- navegadores por canal estable según DOC-020; las versiones exactas se congelarán en el Context Package de G9.

---

## 15. Accesibilidad, internacionalización y observabilidad

### 15.1 Accesibilidad

1. Cumplimiento WCAG 2.2 Nivel AA en todos los criterios aplicables.
2. Recorrido completo mediante teclado en escritorio.
3. Foco visible, orden lógico y ausencia de trampas.
4. Nombre, rol, estado e instrucción determinables.
5. Errores en texto, asociados a la acción o control.
6. Objetivos de puntero de 24×24 CSS px o excepción WCAG aplicable documentada.
7. Controles no gestuales para acercar, alejar y restablecer.
8. Centro y zoom disponibles como texto.
9. El diálogo de cierre contiene y restaura foco correctamente.
10. Resultado de guardado/apertura anunciado sin mover foco arbitrariamente.

### 15.2 Internacionalización

- cadenas visibles en recursos sustituibles;
- nombre normalizado y valores persistentes independientes del formato regional;
- `es-AR`, `en-US` y pseudolocalización expansiva/RTL ejercitados antes de LPI;
- cero concatenación funcional de cadenas;
- números visibles mediante servicios de internacionalización;
- cambio de locale no muta Project Document, IDs o coordenadas; y
- el valor generado de `scene.defaultName` queda como dato estable desde la creación.

### 15.3 Observabilidad local

Eventos obligatorios:

- `PROJECT_CREATED`, `PROJECT_CLOSE_REQUESTED`, `PROJECT_CLOSED`;
- `SAVE_STARTED`, `SAVE_SUCCEEDED`, `SAVE_FAILED`;
- `OPEN_STARTED`, `OPEN_SUCCEEDED`, `OPEN_FAILED`;
- `DOCUMENT_REJECTED`, `RECOVERY_OFFERED`, `RECOVERY_USED`, `RECOVERY_FAILED`;
- `BASEMAP_RESOLVED`, `BASEMAP_FAILED`, `MAP_VIEW_RESTORED`;
- `ACTION_DENIED`, `UNHANDLED_INTERNAL_ERROR`.

Cada evento se emite una vez por transición aplicable e incluye `eventId`, UTC, `correlationId`, tipo, emisor, resultado, código cuando aplica, duración, build/commit y entorno/fixture de prueba.

Se prohíben nombre/contenido del Project, documento o fragmentos, coordenadas exactas de la persona, rutas, secretos, clipboard, stacks persistentes e identificadores de dispositivo o cuenta. No existe telemetría remota.

---

## 16. Criterios de aceptación

Cada criterio produce solamente `Conforme` o `No conforme`.

| ID | Dado | Cuando | Entonces | Relaciones | Método | Evidencia esperada |
|---|---|---|---|---|---|---|
| `SPEC-GMS-0001-CA-001` | almacenamiento limpio y nombre válido | se crea | existe exactamente un Project, una Scene activa y una Map View con valores iniciales | RF-002/003; INV-G5-001..007 | PRU-001/005 | EVI-001 |
| `SPEC-GMS-0001-CA-002` | nombre vacío tras `trim` o >200 | se intenta crear | no se crea entidad; se comunica y enfoca error | RF-002 | PRU-001/006 | EVI-002 |
| `SPEC-GMS-0001-CA-003` | `DAT-G6-02` y payloads de markup | se crean/presentan | se conservan como texto y nunca se ejecutan | RF-002; THR-G6-03 | PRU-002/011 | EVI-003 |
| `SPEC-GMS-0001-CA-004` | red bloqueada y recurso válido | se abre el editor | mapa local visible; estado `READY`; cero request externa | RF-004; INV-G5-014 | PRU-004/006/011 | EVI-004 |
| `SPEC-GMS-0001-CA-005` | recurso ausente o inválido | se resuelve | Project abierto; Map `DEGRADED`; error/reintento; cero fallback | RF-004/015 | PRU-004/007 | EVI-005 |
| `SPEC-GMS-0001-CA-006` | Project abierto | se navega o restablece | centro/zoom válidos, texto actualizado y `DIRTY` | RF-005; INV-G5-007 | PRU-001/006 | EVI-006 |
| `SPEC-GMS-0001-CA-007` | Project pendiente válido | se guarda y confirma | generación íntegra, `head` nuevo, evento único y `CLEAN` | RF-006/016; INV-G5-011 | PRU-003/005/015 | EVI-007 |
| `SPEC-GMS-0001-CA-008` | cada falla `DAT-G6-05` | se guarda | `DIRTY/UNSAVED`, error tipado y `head` previo intacto | RF-007; REL-G6-03 | PRU-003/007/010 | EVI-008 |
| `SPEC-GMS-0001-CA-009` | Project `CLEAN` | se cierra | contexto liberado y pantalla inicial | RF-008 | PRU-005/006 | EVI-009 |
| `SPEC-GMS-0001-CA-010` | diálogo pendiente | se elige Guardar | cierra solo tras éxito; falla conserva editor | RF-009 | PRU-007 | EVI-010 |
| `SPEC-GMS-0001-CA-011` | diálogo pendiente | se elige Descartar | cierra sin cambiar `head`; `UNSAVED` no queda listado | RF-009 | PRU-007 | EVI-011 |
| `SPEC-GMS-0001-CA-012` | diálogo pendiente | se elige Cancelar | editor, foco y estado se conservan; cero escritura | RF-009 | PRU-007/008 | EVI-012 |
| `SPEC-GMS-0001-CA-013` | proyecto válido confirmado | se selecciona y abre | se restauran IDs, nombre, Scene, centro, zoom y `baseMapRef` | RF-010..012; INV-G5-008 | PRU-006/010 | EVI-013 |
| `SPEC-GMS-0001-CA-014` | cada variante `DAT-G6-04` | se intenta abrir | rechazo antes de activación con error esperado | RF-011/013; THR-G6-01/02 | PRU-002/007 | EVI-014 |
| `SPEC-GMS-0001-CA-015` | `formatVersion` distinto de 1 | se abre | `GMS-DOC-002`; cero migración/escritura/activación | RF-013 | PRU-002/007 | EVI-015 |
| `SPEC-GMS-0001-CA-016` | recuperación válida | se ofrece y decide | aceptar=`RECOVERED`; rechazar=no activación; guardar=`CLEAN` | RF-014; REL-G6-05 | PRU-007/010 | EVI-016 |
| `SPEC-GMS-0001-CA-017` | cada error DOC-019 §12 | ocurre | código, mensaje seguro, recuperación y estado son correctos | RF-015 | PRU-003/004/007/011 | EVI-017 |
| `SPEC-GMS-0001-CA-018` | escritorio | se ejecuta con teclado | 100 % operable, foco visible, sin trampa, mapa no gestual | RNF-007/008 | PRU-008 | EVI-018 |
| `SPEC-GMS-0001-CA-019` | recorrido completo | se audita WCAG | cero incumplimientos A/AA aplicables automáticos o manuales | RNF-007 | PRU-008 | EVI-019 |
| `SPEC-GMS-0001-CA-020` | viewports y 200 % | se presenta | ninguna acción/texto primario oculto; reflow conforme | RNF-009 | PRU-008/012 | EVI-020 |
| `SPEC-GMS-0001-CA-021` | locales G6 | se crea/guarda/reabre | cero cambio persistido y cero acción oculta | RNF-024/025 | PRU-012 | EVI-021 |
| `SPEC-GMS-0001-CA-022` | matriz PERF | se mide según protocolo | PERF-G6-01 a -09 aplicables conformes | RNF-001..003 | PRU-009 | EVI-022 |
| `SPEC-GMS-0001-CA-023` | matrices REL/DAT | se ejecutan ciclos/fallas | REL-G6-01 a -06 conformes | RNF-018/021/022 | PRU-010 | EVI-023 |
| `SPEC-GMS-0001-CA-024` | ENV-G6-01 a -05 | se ejecuta | recorrido completo en -01..04 y smoke sin pérdida en -05 | RNF-010/011 | PRU-006/012 | EVI-024 |
| `SPEC-GMS-0001-CA-025` | red bloqueada y corpus adverso | se ejecuta | cero egress, ejecución de contenido, secretos o datos prohibidos | RNF-019; THR-G6-* | PRU-011 | EVI-025 |
| `SPEC-GMS-0001-CA-026` | recorrido y fallas | se inspeccionan eventos | 100 % una vez/correlacionables; cero campos prohibidos | RF-016; RNF-026/027 | PRU-015 | EVI-026 |
| `SPEC-GMS-0001-CA-027` | implementación candidata futura | se valida grafo | cero ciclos/deep imports y adaptadores encapsulados | RNF-012/013/016 | PRU-014 | EVI-027 |
| `SPEC-GMS-0001-CA-028` | cinco participantes y recorrido nominal | se aplica guion/conteo | UX-G6-01 y UX-G6-02 conformes | RNF-004/006 | PRU-013 | EVI-028 |
| `SPEC-GMS-0001-CA-029` | corte completo | se audita trazabilidad | todo RF/RNF/INV/CTR/ERR/THR/CA enlaza método; cero huérfanos | RNF-014 | PRU-016 | EVI-029 |

La materialización de G9 puede subdividir un criterio para conservar atomicidad. No puede eliminarlo, debilitarlo o considerar conforme un resultado parcial.

---

## 17. Estrategia de verificación

| ID | Nivel | Objeto | Procedimiento previsto | Entorno | Resultado esperado | Responsable |
|---|---|---|---|---|---|---|
| `SPEC-GMS-0001-PRU-001` | Unitaria | estados, nombre y límites | tabla de casos y propiedades | Node/browser | todos los casos tipados | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-002` | Contrato/seguridad | documento y schema | fixtures válidos/adversos, raw JSON y referencias | Node/browser | solo válidos aceptados | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-003` | Contrato | repositorio | dobles + IndexedDB; cada éxito/error | browser | contrato íntegro | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-004` | Contrato | mapa base | recurso válido/ausente/alterado, red bloqueada | browser | READY/DEGRADED correctos | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-005` | Integración | Project–Scene–Map | orquestación nominal y fallas de frontera | Node/browser | ownership preservado | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-006` | Aceptación E2E | recorrido nominal | crear, navegar, guardar, cerrar, reabrir | ENV-G6-01..04 | estado restaurado | Verificación G10 |
| `SPEC-GMS-0001-PRU-007` | Integración/E2E | errores/cierre/recuperación | inyección determinista | matriz DAT | resultados binarios | Verificación G9/G10 |
| `SPEC-GMS-0001-PRU-008` | Accesibilidad | UI y mapa | automatización + revisión manual teclado/foco | DEV-G6-01..04 | WCAG AA aplicable | Revisión especializada |
| `SPEC-GMS-0001-PRU-009` | Rendimiento | PERF-G6-* | protocolo, repeticiones y series crudas | perfiles G6 | todos los umbrales | Verificación de rendimiento |
| `SPEC-GMS-0001-PRU-010` | Fiabilidad | REL-G6-* | ciclos, interrupciones y recuperación | DAT-G6-01..06 | todos los conteos | Verificación G10 |
| `SPEC-GMS-0001-PRU-011` | Seguridad | THR-G6-* | corpus, egress bloqueado, secretos y logs | entornos G6 | cero bloqueantes/altos | Revisión de seguridad |
| `SPEC-GMS-0001-PRU-012` | Compatibilidad | ENV/DEV/locale | matriz de navegador, viewport y locale | DOC-020 §5 | compatibilidad completa | Verificación G10 |
| `SPEC-GMS-0001-PRU-013` | Producto/UX | aprendizaje y acciones | guion ciego + conteo | cinco participantes | UX-G6-01/02 | Producto y experiencia |
| `SPEC-GMS-0001-PRU-014` | Arquitectura | grafo/dependencias | validadores, revisión y sustitución simulada | repo limpio | cero violaciones | Dirección Técnica |
| `SPEC-GMS-0001-PRU-015` | Observabilidad | eventos y datos | capturar, correlacionar y auditar campos | todos los fallos | 100 %/cero prohibidos | Verificación G10 |
| `SPEC-GMS-0001-PRU-016` | Documental | SPEC y relaciones | metadatos, IDs, links, estados y matriz | corte exacto | cero huérfanos/bloqueos | Revisión G8 |

En G8 estos métodos son definiciones documentales. G9 deberá crear sus fixtures, contratos y pruebas ejecutables sin cambiar el resultado esperado.

---

## 18. Matriz de trazabilidad

### 18.1 Origen a requisitos

| Origen | Destino | Relación | Cobertura | Estado |
|---|---|---|---|---|
| `INI-GMS-0001` | RF-001 a RF-016 | origina | completa | Candidata |
| `CAP-GMS-0001` | RF-001/002/003/006..014 | especializa | completa | Candidata |
| `CAP-GMS-0002` | RF-003/011/012 | especializa | completa | Candidata |
| `CAP-GMS-0003` | RF-003/004/005/012 | especializa | completa | Candidata |
| `CAP-GMS-0011` | RNF-004..009/023..025 | restringe | completa | Candidata |
| `CAP-GMS-0013` | RF-006..014; RNF-018/021/022 | especializa | completa | Candidata |
| DOC-019 | RF, CTR, ERR, estados | autoriza/restringe | completa | Candidata |
| DOC-020 | RNF, CA y PRU | autoriza/restringe | completa | Candidata |
| DOC-021; ADR-048..054 | restricciones técnicas | restringe | completa | Candidata |

### 18.2 Requisitos a criterios y métodos

| Grupo | Criterios | Métodos |
|---|---|---|
| RF-001 a RF-004 | CA-001 a CA-005 | PRU-001/002/004/005/006/011 |
| RF-005 a RF-009 | CA-006 a CA-012 | PRU-001/003/005/006/007/008/010 |
| RF-010 a RF-014 | CA-013 a CA-016 | PRU-002/006/007/010 |
| RF-015 y RF-016 | CA-017/025/026 | PRU-003/004/007/011/015 |
| RNF-001 a RNF-006 | CA-022/028 | PRU-009/013 |
| RNF-007 a RNF-011 | CA-018 a CA-021/024 | PRU-006/008/012 |
| RNF-012 a RNF-017 | CA-027/029 | PRU-014/016 |
| RNF-018 a RNF-023 | CA-008/014..017/023/025 | PRU-002/003/007/010/011 |
| RNF-024 a RNF-027 | CA-021/026 | PRU-012/015 |

### 18.3 Riesgos e invariantes

- `INV-G5-001` a `-010`: CA-001, CA-006, CA-013 a CA-015; PRU-001/002/005/006.
- `INV-G5-011` a `-014`: CA-004, CA-007/008, CA-013 a CA-016/023; PRU-003/004/007/010.
- `INV-G5-015/016`: CA-025/027; PRU-011/014.
- `THR-G6-01` a `-09`: CA-003/005/008/014 a CA-017/025; PRU-002/003/004/007/010/011.

No existe requisito, criterio o método huérfano en este corte.

---

## 19. Implementación, riesgos y reversión

### 19.1 Restricciones de implementación

Hasta que G9 sea materialmente superada:

- no se modifica código funcional;
- no se crean interfaces, schemas, fixtures o pruebas ejecutables de esta SPEC;
- no se altera `apps/web`;
- no se agregan dependencias;
- no se decide desde el código; y
- no se abre una misión de implementación.

G9 definirá plan, rutas permitidas/prohibidas, contratos materializados, pruebas, riesgos, rollback y Context Package exacto.

### 19.2 Riesgos

| ID | Riesgo | Probabilidad | Impacto | Tratamiento | Disparador |
|---|---|---:|---:|---|---|
| `RISK-01` | ampliar el piloto a editor completo | Media | Alto | exclusiones y control de cambio | nueva capacidad no trazada |
| `RISK-02` | perder último guardado | Baja | Crítico | generaciones, transacción, digest y fallas | cualquier divergencia de `head` |
| `RISK-03` | activar documento no confiable | Media | Crítico | preflight, schema, invariantes y digest | activación antes de validar |
| `RISK-04` | dependencia remota accidental | Media | Alto | egress bloqueado y recurso local | request externa |
| `RISK-05` | acoplar dominio a adaptadores | Media | Alto | puertos y grafo automático | import prohibido |
| `RISK-06` | recuperación silenciosa | Baja | Alto | oferta y elección explícitas | `RECOVERED` no visible |
| `RISK-07` | UI inaccesible alrededor del mapa | Media | Alto | controles, teclado y revisión manual | falla A/AA |
| `RISK-08` | criterios demasiado compuestos | Media | Alto | subdivisión en G9; no reducción | resultado parcial ambiguo |

### 19.3 Reversión

La aprobación/publicación de esta SPEC es documental y reversible mediante versión sucesora o retiro formal; nunca mediante edición silenciosa.

La futura reversión de implementación deberá preservar:

- el commit y árbol G7 de entrada;
- el último `head` confirmado de cada Project;
- la generación confirmada anterior protegida;
- los documentos originales no soportados o rechazados; y
- la posibilidad de desactivar el cambio sin migración destructiva.

El procedimiento ejecutable de rollback pertenece a G9.

---

## 20. Decisiones abiertas y bloqueos

| ID | Cuestión | Autoridad | Impacto | Estado | Condición de cierre |
|---|---|---|---|---|---|
| `OPEN-INI-0001-09` | contratos, errores y criterios binarios | Founder | Puerta G8 | Resuelta para incorporación por D-81/D-82; eficacia diferida | publicación verificada de `LB-G8-GMS-20260908-01` |

No existen bloqueos críticos o altos abiertos dentro del contenido de esta candidata. Los entregables aún no existentes de G9 no son bloqueos de G8: permanecen deliberadamente fuera de etapa.

---

## 21. Declaraciones de puerta

La Puerta G8 permanece **pendiente**. Requiere revisión `R2` conforme, aprobación del corte material exacto por el Founder, publicación material verificada de la línea base G8, cero bloqueos y cada criterio binario enlazado con un método identificado.

### 21.1 Listo para Especificar

| Campo | Resultado |
|---|---|
| Iniciativa | `INI-GMS-0001` |
| Acto | `ACTO-G8-GMS-20260908-17`; D-74 |
| Fecha | 8 de septiembre de 2026 |
| Verificación | Diez condiciones LPE conformes en `INF-G8-GMS-20260908-01` |
| Autoridad | Founder |
| Estado | Conforme y vigente |

### 21.2 Listo para Implementar

**No evaluado.** Solo podrá declararse después de preparar y aprobar G9. Esta SPEC no autoriza código.

### 21.3 Terminado

**No evaluado.** No existe implementación, evidencia de aceptación ni acto `ACE-*`.

---

## 22. Aprobación, publicación y sucesión

| Actuación | Identidad | Autoridad | Fecha | Resultado |
|---|---|---|---|---|
| LPE y autorización de materialización | `ACTO-G8-GMS-20260908-17` | Founder | 2026-09-08 | Conforme |
| Revisión `R2` | `REV-GMS-0001` | Revisión técnica separada | 2026-09-08 | Conforme; eficacia material diferida |
| Aprobación del corte exacto | Acto de cierre G8 futuro | Founder | Pendiente | Pendiente |
| Publicación | commit autorizado futuro | Founder | Pendiente | Pendiente |
| Sustitución o retiro | `CAM/acto` futuro | Autoridad competente | No aplica | No aplica |

Una devolución posterior a este corte produce versión sucesora. La versión publicada será inmutable.

---

## 23. Condición de vigencia

### 23.1 Eficacia institucional

Este documento es un candidato material autorizado por D-73 a D-84. No adquiere estado Aprobado ni Publicado por su mera existencia en el área de trabajo.

Solo adquirirá vigencia institucional cuando:

1. la revisión `R2` resulte conforme;
2. el Founder apruebe el corte exacto y la línea base G8;
3. el Founder autorice separadamente la publicación; y
4. el commit, árbol y contenido publicados sean verificados.

La publicación cerrará G8 y habilitará únicamente el inicio documental de G9. No autorizará código funcional.

---

### 23.2 Estado resultante del incremento

| Dimensión | Estado actual |
|---|---|
| Necesidad e iniciativa | Vigentes; `INI-GMS-0001` LPE |
| SPEC | Candidata v1.0.0, pendiente de revisión y aprobación exacta |
| `OPEN-INI-0001-09` | Resuelta para incorporación; eficacia diferida |
| Implementación | No iniciada |
| G8 | Abierto |
| G9 | Cerrado |
| Código funcional | Prohibido |
| Context Package | No creado; reservado a G9 |
| Excepciones | Ninguna |
