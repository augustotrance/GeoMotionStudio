# GeoMotion Studio

# Informe consolidado de evaluación SDD e Itinerario Maestro de ordenamiento e inicio controlado

**Versión:** 1.0.0  
**Estado:** Aprobado y vigente — salvedades del Founder incorporadas  
**Fecha de corte:** 3 de septiembre de 2026  
**Destinatario:** Founder de GeoMotion Studio  
**Naturaleza:** revisión sucesora del informe de evaluación SDD e itinerario único de ejecución  
**Repositorio canónico:** https://github.com/augustotrance/GeoMotionStudio  
**Rama canónica verificada:** main  
**Restricción vigente:** código funcional prohibido hasta superar G9

---

## 1. Propósito

Este documento:

1. conserva el diagnóstico técnico realizado sobre la raíz actual del repositorio;
2. incorpora las treinta instrucciones adicionales recibidas;
3. elimina pedidos redundantes o duplicados como unidades de trabajo independientes;
4. separa lo que debe ejecutarse ahora, lo que debe incorporarse por cada SPEC y lo que corresponde diferir;
5. establece un único itinerario secuencial para ordenar el proyecto;
6. define las puertas necesarias para comenzar a trabajar sin vulnerar Architecture First ni la documentación vigente;
7. ordena la publicación institucional del itinerario y su respaldo equivalente en PDF.

Este documento no modifica por sí mismo el Manual de Ingeniería, los ADR, las líneas base ni el código.

El Founder aprobó expresamente este documento el 3 de septiembre de 2026 con las salvedades ya integradas en esta versión.

---

## 2. Dictamen consolidado

**GeoMotion Studio está preparado para iniciar únicamente la reconciliación documental del SDD. El desarrollo funcional permanece prohibido hasta superar G9.**

La incorporación de las nuevas instrucciones no altera el dictamen anterior. Lo precisa.

El proyecto posee:

- visión;
- principios;
- Architecture First;
- arquitectura conceptual;
- gobierno documental;
- modelos de contratos, seguridad, extensibilidad, conocimiento y versionado.

El proyecto todavía carece de:

- una línea base material completamente reconciliada;
- un glosario canónico materialmente integrado;
- requisitos funcionales atómicos;
- atributos de calidad medibles;
- SPEC aprobadas;
- contratos ejecutables;
- criterios de aceptación;
- pruebas;
- trazabilidad extremo a extremo;
- automatización y CI;
- una base de código compilable demostrada.

Las treinta instrucciones adicionales no deben transformarse en treinta documentos. Su tratamiento correcto es:

- reutilizar lo vigente;
- corregir contradicciones mediante sucesores controlados;
- operacionalizar principios que hoy solo están declarados;
- ubicar cada detalle en la SPEC que corresponda;
- diferir capacidades futuras hasta que se cumplan sus condiciones de entrada.

La regla central queda establecida así:

> **Los documentos institucionales aprobados y vigentes constituyen la fuente de verdad del proyecto. El SDD los ordena, relaciona y hace verificables; no los sustituye ni crea una autoridad documental paralela.**

Como consecuencia, un archivo de transporte, inventario, registro de composición o hash puede demostrar identidad e integridad, pero no confiere autoridad institucional por sí mismo.

---

## 3. Fuentes materiales evaluadas

### 3.1 Raíz del repositorio

**Nombre recibido:** GMS_PAQUETE_2_RAIZ_REPOSITORIO_ACTUAL_1dc6dc8543c47552818fa9fc726b4bba0c698e96_20260831(5).zip

| Verificación | Resultado |
|---|---:|
| Tamaño | 454.937 bytes |
| SHA-256 | 29ee6c020f0308d39356370e272aa72cd17c31d498c57fcb1f1f2c1c8995aa89 |
| Entradas ZIP | 92 |
| Archivos regulares | 75 |
| Entradas de directorio | 17 |
| Integridad ZIP | Conforme |
| Enlaces simbólicos | No detectados |
| Rutas inseguras | No detectadas |
| Comentario del ZIP | 1dc6dc8543c47552818fa9fc726b4bba0c698e96 |

El paquete no contiene .git. Para completar esa limitación se verificó el repositorio canónico en vivo antes de publicar este itinerario:

| Verificación canónica previa a publicación | Resultado |
|---|---|
| Repositorio | augustotrance/GeoMotionStudio |
| Visibilidad | Pública |
| Rama predeterminada | main |
| HEAD previo a la publicación | 1dc6dc8543c47552818fa9fc726b4bba0c698e96 |
| Mensaje del commit | docs: aplicar regularización PDME |
| Fecha del commit | 29 de agosto de 2026, 20:37:49 UTC |
| Coincidencia con el comentario del ZIP | Exacta |
| Carpeta raíz itinerario/ antes de esta actuación | Ausente |

Por tanto, el ZIP auditado y `main` representaban el mismo corte material al abrir esta actuación. La historia anterior al corte se consulta en Git; el ZIP se conserva solo como evidencia de transporte.

### 3.2 Instrucciones adicionales

**Nombre recibido:** Se ha pegado el markdown(20260903-013754).md

| Verificación | Resultado |
|---|---:|
| Tamaño | 14.901 bytes |
| SHA-256 | bbf8fbce1d2b3d457d1f5d7479d4e656da2ae63066f2279d9b5a42066fe7fba0 |
| Formato | Markdown, UTF-8 |
| Líneas | 405 |
| Palabras | 2.034 |
| Ítems sustantivos | 30 |
| Regla adicional | consolidación, aprobación, publicación y PDF |

El archivo no declara versión, autoridad ni estado documental propio. Se utilizó como instrucción del Founder para elaborar esta revisión; no se lo presenta como documento normativo autónomo. Las aclaraciones posteriores del Founder son las decisiones de aprobación incorporadas en la presente versión 1.0.0.

### 3.3 Informe anterior

Se conserva su evidencia y diagnóstico. Este documento lo sucede como versión consolidada porque incorpora:

- el nuevo corpus de treinta puntos;
- una matriz explícita de deduplicación;
- un itinerario completo;
- reglas de publicación;
- el orden exacto para comenzar el trabajo.

### 3.4 Estado material resumido de la raíz

| Elemento | Resultado observado |
|---|---:|
| Archivos dentro de docs/ | 35 |
| Volumen de docs/ | 1.599.809 bytes |
| Documentos numerados del Manual | 19, desde DOC-000 hasta DOC-018 |
| DOC-000 a DOC-017 | Publicados |
| DOC-018 | Candidato |
| Palabras en todos los Markdown | 215.783 |
| Líneas en todos los Markdown | 53.046 |
| Archivos en apps/web/src | 24 |
| Archivos vacíos en apps/web/src | 16 |
| Archivos TSX | 14 |
| Archivos TSX vacíos | 11 |
| Bytes totales de TSX | 397 |
| Pruebas automatizadas | Ninguna |
| Workflows de CI | Ninguno |
| Script test | Ausente |
| CHANGELOG.md | Vacío |

La inspección estática del esqueleto web muestra:

- App.tsx utiliza MainLayout sin importarlo;
- MainLayout.tsx no declara ni exporta un componente;
- MainLayout.tsx referencia Header, Sidebar, Canvas, Inspector y StatusBar sin importarlos;
- variables.css no está incorporado a la aplicación;
- layouts/componets contiene un error nominal;
- OpenLayers y Three.js aparecen en la presentación, pero no en las dependencias declaradas.

La instalación offline de dependencias no pudo completarse porque faltaban paquetes en el entorno. No se ejecutó una compilación completa. El carácter incompleto del ensamblaje sí resulta demostrable por inspección directa.

---

## 4. Regla de integración y no alteración

La instrucción de no modificar lo ya establecido se incorpora con la siguiente interpretación operativa:

1. ningún documento publicado se reescribe silenciosamente;
2. una duplicación se cierra mediante referencia a la fuente autorizada;
3. una contradicción objetiva se resuelve mediante decisión y versión sucesora;
4. una ampliación se incorpora en el artefacto cuya responsabilidad ya la comprende;
5. un nuevo documento solo se crea cuando no existe una fuente con esa responsabilidad;
6. toda modificación material debe indicar motivo, impacto, versión, estado y autoridad;
7. las fuentes sustituidas se preservan como historia;
8. el código nunca corrige de hecho una especificación: si cambia el comportamiento, primero cambia la SPEC.

Esto preserva el contenido aprobado y, al mismo tiempo, permite corregir errores materiales o evolucionar el sistema con fundamento.

---

## 5. Estado del proyecto que debe preservarse en el itinerario

### 5.1 Fortalezas

- DOC-000 y DOC-001 proporcionan fundamentos, visión, usuarios y alcance general.
- DOC-002 y las arquitecturas especializadas proporcionan una base modular amplia.
- DOC-006 establece reglas constitucionales.
- DOC-013 proporciona un modelo conceptual de contratos.
- DOC-014 proporciona el modelo documental de ADR.
- DOC-015 proporciona gestión del conocimiento.
- DOC-017 proporciona arquitectura de autenticación y seguridad.
- DOC-018 proporciona un modelo candidato de versionado, líneas base y trazabilidad.
- INT-009, INT-010 e INT-011 proporcionan contexto y operación de Dirección Técnica.
- La Guía Editorial reserva la familia SPEC.

### 5.2 Brechas críticas confirmadas

- INT-000 declara V0.1 pendiente, mientras ACTA-001 la declara aprobada y vigente.
- Las líneas base materiales de V0.1, V0.2 y V0.3 no son identificables como archivos separados dentro del paquete.
- DOC-002 y DOC-013 reutilizan ADR-001 a ADR-010 para decisiones diferentes.
- docs/adr/ no está presente.
- existen diferencias entre cantidades, rutas y nombres documentados y materiales;
- el Manual contiene 19 documentos numerados, mientras otras fuentes declaran 17 o 18;
- no existen requisitos funcionales atómicos identificados;
- RNF-001 a RNF-027 carecen de umbrales cuantitativos;
- no existen SPEC, criterios de aceptación ni matriz de trazabilidad;
- no existen pruebas ni CI;
- el código web es un esqueleto experimental y contiene ensamblaje incompleto.

### 5.3 Regla de inicio

Hasta cerrar la reconciliación:

- el paquete se trata como evidencia material;
- no se lo declara línea base vigente por inferencia;
- el código se trata como prototipo experimental;
- no se modifica arquitectura ni funcionalidad;
- no se crean rutas definitivas salvo autorización expresa.

---

## 6. Matriz de incorporación de las treinta instrucciones

La columna “tratamiento” indica si el concepto genera trabajo nuevo. “Fusionar” significa que no se crea un documento paralelo.

| Nº | Instrucción | Cobertura observada | Tratamiento | Momento |
|---:|---|---|---|---|
| 1 | Glosario | Guía Editorial y glosarios por dominio; puede existir un glosario aprobado fuera del ZIP | Fusionar y constituir una única autoridad terminológica; no crear otro glosario competidor | Etapa 2 |
| 2 | Variantes e invariantes | Principios e invariancia contractual parciales | Incorporar un registro transversal y una sección obligatoria por SPEC | Etapas 2, 4 y 8 |
| 3 | Estados y transiciones | DOC-010 y DOC-018 cubren conceptos distintos | Separar estados documentales de estados del dominio; modelar los segundos por entidad/SPEC | Etapas 3, 5 y 8 |
| 4 | Workflow | INT-011 ya gobierna operación; falta el circuito SDD | Fusionar con el proceso SDD; un único workflow institucional | Etapa 3 |
| 5 | Diagrama de secuencias | No existe como artefacto sistemático | Usarlo dentro de una SPEC cuando el orden temporal aporte información; no exigir un documento por separado | Etapas 5 y 8 |
| 6 | APIs y roles de usuario | DOC-017, DOC-016 y DOC-013 dan cobertura conceptual | Separar actores, roles de autorización, identidades de servicio y capacidades de IA; definir APIs solo cuando una colaboración lo requiera | Etapas 4, 5 y 8 |
| 7 | ADR | DOC-014 y ADR incrustados ya existen | Fusionar, normalizar IDs y materializar registros únicos; no crear un segundo sistema | Etapas 1 y 3 |
| 8 | Arquitectura | Manual de Ingeniería amplio | Preservar y producir solo las vistas faltantes; no redactar otra arquitectura general | Etapas 1 y 5 |
| 9 | Mapa de procesos | Cobertura parcial en protocolos y roadmap | Crear un mapa único del proceso SDD; mapas funcionales solo cuando una SPEC lo necesite | Etapas 3 y 8 |
| 10 | Jerarquías | Constitución, Carta y contextos de DT | Fusionar en una matriz de autoridad y responsabilidad; SDD no crea nuevas autoridades | Etapas 1 y 3 |
| 11 | Operatividad distribuida | Visión futura de Cloud y colaboración | Diferir diseño detallado; registrar requisitos y riesgos para evitar cierres arquitectónicos | Etapa 11 |
| 12 | Pilares básicos | La mayoría duplica DOC-000, DOC-006 y otros puntos de esta lista | Desestimar como documento independiente; distribuir únicamente conceptos no cubiertos en glosario, invariantes, seguridad y SDD | Etapas 2 a 5 |
| 13 | Stakeholders | DOC-001 describe usuarios, pero no una matriz completa | Incorporar mapa de interesados, influencia, necesidad y autoridad | Etapa 4 |
| 14 | Entidades | DOC-002 describe módulos y conceptos, no un modelo de dominio consolidado | Incorporar modelo mínimo de dominio y ownership; ampliar por cada SPEC | Etapas 5 y 8 |
| 15 | Modelo de datos | No existe modelo implementable | Crear por incremento después de definir entidades y reglas; no modelar todo el ecosistema anticipadamente | Etapa 8 |
| 16 | Contratos de interfaz | DOC-013 define el modelo conceptual | Materializar contratos verificables por SPEC mediante tipos, schemas o interfaces | Etapas 5, 7 y 8 |
| 17 | Seguridad y protocolos | DOC-017 ofrece arquitectura amplia | Fusionar; operacionalizar perfil de seguridad, amenazas y controles por incremento | Etapas 6 y 8 |
| 18 | Errores y excepciones | Tratamiento disperso | Crear taxonomía mínima transversal y definir errores por contrato/SPEC | Etapas 5, 6 y 8 |
| 19 | Política de versionado | DOC-018 Candidato | Resolver su autoridad y reutilizarlo; no crear otra política | Etapas 1 y 3 |
| 20 | Plan de evolución y roadmap | DOC-005 es estratégico; existían itinerarios dispersos | Este Itinerario Maestro consolida ejecución sin sustituir la estrategia de producto de DOC-005 | Etapa P y mantenimiento continuo |
| 21 | Estrategia de pruebas | DOC-004 la enuncia, pero no existe operación | Crear estrategia ejecutable, niveles, responsabilidad, cobertura y evidencia | Etapas 6 y 7 |
| 22 | Dependencias externas | DOC-004 contiene criterios generales | Crear inventario, política de incorporación, actualización, riesgo, licencia y sustitución | Etapas 6 y 7 |
| 23 | Documentación viva | Constitución, DOC-018 e INT-000 ya la exigen | Fusionar y automatizar vigencia, propietarios, enlaces, IDs y revisión | Etapas 1, 3 y 7 |
| 24 | Extensibilidad y plugins | DOC-013 es extenso | Preservar la arquitectura; diferir implementación hasta estabilizar núcleo y contratos | Etapa 11 |
| 25 | Gestión del conocimiento | DOC-015 y registros internos | Fusionar; conectar aprendizajes y evidencias al cierre de cada SPEC | Etapas 3 y 10 |
| 26 | Observabilidad y monitoreo | RNF-026/027 y DOC-017 dan cobertura general | Definir mínimo observable desde el piloto; diferir trazas distribuidas hasta existir distribución | Etapas 6, 8 y 11 |
| 27 | Licenciamiento y propiedad intelectual | LICENSE y README declaran MIT; límites Community/Pro todavía requieren precisión | Confirmar inventario de licencias ahora; completar contribuciones y frontera comercial antes de participación externa | Etapas 4, 6 y 11 |
| 28 | Internacionalización y localización | RNF-024/025 y DOC-003 la contemplan | Fijar restricciones de diseño ahora y requisitos concretos en cada SPEC; localización completa después | Etapas 6 y 8 |
| 29 | Identidad lógica y material | La práctica institucional usa ambas, pero el paquete raíz no ofrece una definición canónica única | Incorporar de inmediato en glosario, manifiestos, transporte y control de activos | Etapas 0 y 2 |
| 30 | Context Engineering | Context Packages y PDME cubren parte institucional; IA de producto es otra responsabilidad | Incorporar ahora para paquetes de trabajo SDD; diferir Context Engineering de IA en producción hasta su etapa funcional | Etapas 3 y 11 |

---

## 7. Ajustes necesarios a las instrucciones nuevas

### 7.1 Denominación oficial

La denominación única y aprobada es **SDD — Desarrollo Guiado por Especificaciones**. Toda referencia del presente itinerario utiliza esa sigla y no se incorpora ninguna denominación alternativa.

### 7.2 Admin, AI y Usuario son hipótesis de incorporación futura

La terna propuesta se conserva exclusivamente como hipótesis futura. No representa roles vigentes, no habilita permisos y no participa del modelo de autorización actual.

- “Admin con control total” es demasiado amplio para un modelo de mínimo privilegio.
- “Usuario” necesita descomponerse por capacidades cuando existan casos de uso reales.
- “AI” puede representar una capacidad, un agente, una identidad de servicio o un actor delegado; no debe confundirse automáticamente con un rol humano.

Primero se definen:

1. actores;
2. identidades;
3. recursos;
4. acciones;
5. políticas;
6. permisos;
7. restricciones.

La eventual matriz de roles surgirá después de esas definiciones y deberá aprobarse mediante la SPEC y las decisiones institucionales que correspondan.

### 7.3 Diagramas no equivalen a arquitectura

Los diagramas de arquitectura, secuencia, estado o procesos son vistas.

No reemplazan:

- reglas;
- decisiones;
- contratos;
- ownership;
- criterios de aceptación.

Solo se producen cuando reducen ambigüedad.

### 7.4 Operatividad distribuida no bloquea el primer piloto

El primer incremento recomendado es local. Diseñar ahora sincronización distribuida, alta disponibilidad, trazas distribuidas o consistencia entre nodos produciría decisiones prematuras.

Se registran los riesgos y restricciones de evolución, pero el diseño detallado se abre al comenzar Cloud, colaboración o servicios remotos.

### 7.5 El itinerario no sustituye DOC-005

DOC-005 define estrategia y madurez de producto.

El Itinerario Maestro define:

- orden de ejecución;
- dependencias;
- entregables;
- puertas;
- evidencias;
- criterio para comenzar a programar.

Ambos se relacionan, pero no duplican autoridad.

---

## 8. Modelo SDD objetivo

En todas las capas, la autoridad procede de documentos institucionales aprobados y vigentes. El SDD aporta orden, trazabilidad, verificación y control de cambio; ningún contenedor técnico reemplaza esa autoridad.

| Capa | Autoridad documental | Responsabilidad |
|---|---|---|
| 0. Identidad | Carta, Constitución, valores, glosario e invariantes | Define propósito, lenguaje y límites irrenunciables |
| 1. Producto | Visión, stakeholders, capacidades, alcance y roadmap | Define resultados y prioridades |
| 2. Arquitectura | Manual, líneas base y ADR | Define módulos, ownership, fronteras y decisiones |
| 3. Especificación | SPEC aprobada | Define comportamiento exacto del incremento |
| 4. Contrato verificable | Schemas, interfaces, estados y reglas | Define acuerdos ejecutables |
| 5. Verificación | Pruebas y criterios de aceptación | Demuestra conformidad |
| 6. Implementación | Código y configuración | Materializa lo aprobado |
| 7. Evidencia | CI, trazabilidad, revisión y versión | Autoriza integración, cierre y publicación |

### 8.1 Flujo único

1. necesidad;
2. clasificación;
3. análisis de impacto;
4. SPEC borrador;
5. decisiones y contratos;
6. revisión;
7. SPEC aprobada;
8. plan de implementación;
9. pruebas derivadas;
10. código;
11. verificación;
12. evidencia;
13. aceptación;
14. versión;
15. aprendizaje.

### 8.2 Separación de estados

El proyecto debe distinguir dos ciclos:

| Madurez documental | Estado de implementación |
|---|---|
| Borrador | No iniciada |
| En revisión | Preparación |
| Candidato | Bloqueada hasta aprobación |
| Aprobado | Autorizada |
| Publicado | En implementación, verificada o liberada según registro separado |
| Sustituido | Migrada o pendiente de migración |
| Retirado | Removida |

Una SPEC aprobada no significa que su funcionalidad ya esté implementada.

---

## 9. Artefactos canónicos mínimos

Los nombres finales y rutas, salvo la instrucción explícita sobre itinerario/, quedan sujetos a la Arquitectura Física vigente.

| Artefacto | Función | Regla de no duplicación |
|---|---|---|
| Itinerario Maestro | Orden oficial de ejecución | Único; versiones anteriores preservadas |
| Inventario de activos | Identidad lógica, material, versión, estado y autoridad | No reemplaza el contenido de los activos |
| Manifiesto de línea base | Hashes y composición exacta | Uno por línea base |
| Registro de contradicciones | Hallazgo, fuentes, decisión y cierre | No contiene arquitectura nueva |
| Glosario canónico | Terminología transversal | Glosarios de dominio solo refinan |
| Registro de invariantes y variantes | Protege identidad y zonas de evolución | La SPEC referencia; no copia |
| Mapa de stakeholders y actores | Interés, impacto y participación | No define permisos |
| Mapa de capacidades | Core, futura, temporal y fuera de alcance | No sustituye requisitos |
| ADR | Decisión, alternativas y consecuencias | Un ID global por decisión |
| Modelo SDD | Workflow, estados, autoridades y puertas | Único proceso oficial |
| Plantilla SPEC | Estructura obligatoria | No contiene comportamiento real |
| SPEC | Comportamiento de un incremento | Una fuente por comportamiento |
| Perfil de calidad | Umbrales transversales | La SPEC solo añade o endurece |
| Contrato ejecutable | Datos, interfaz, estados y errores | Derivado de SPEC/arquitectura |
| Estrategia de pruebas | Niveles y responsabilidades | Las pruebas concretas se vinculan a SPEC |
| Matriz de trazabilidad | Relaciones extremo a extremo | No duplica textos |
| Registro de evidencia | Resultados y aceptación | No sustituye pruebas ni CI |
| Registro de conocimiento | Aprendizajes reutilizables | Solo conocimiento, no decisiones |

---

## 10. Vista general del Itinerario Maestro

| Orden | Etapa | Resultado obligatorio | Puerta |
|---:|---|---|---|
| P | Ratificación y publicación controlada | Itinerario aprobado, Markdown publicado y PDF respaldado | GP |
| 0 | Constitución del corpus | Fuentes recibidas, verificadas y congeladas | G0 |
| 1 | Reconciliación institucional | Una única línea base propuesta sin contradicciones abiertas críticas | G1 |
| 2 | Lenguaje, identidad e invariantes | Glosario y registros transversales canónicos | G2 |
| 3 | Gobierno SDD | Proceso, estados, roles, SPEC y cambio aprobados | G3 |
| 4 | Producto y alcance | Stakeholders, actores y mapa de capacidades priorizado | G4 |
| 5 | Arquitectura y dominio mínimos | Módulos, entidades, estados, ownership, contratos y errores suficientes | G5 |
| 6 | Calidad y verificación | RNF medibles, seguridad, pruebas, observabilidad y dependencias | G6 |
| 7 | Fundación ejecutable | Repositorio reproducible con CI y controles | G7 |
| 8 | SPEC piloto | Incremento Project + Scene + Map completamente especificado | G8 |
| 9 | Preparación de implementación | Pruebas, contratos y plan listos | G9 |
| 10 | Implementación y aceptación | Piloto verificado, trazado y versionado | G10 |
| 11 | Calibración y expansión | Método ajustado y siguiente incremento autorizado | G11 |

Ninguna etapa posterior reemplaza una puerta anterior.

---

## 11. Itinerario secuencial detallado

## Etapa P — Ratificación y publicación controlada

### Objetivo

Materializar la aprobación del itinerario como referencia institucional y publicar únicamente los entregables autorizados.

### Acciones

1. incorporar las salvedades expresas del Founder;
2. verificar que no subsistan pedidos rechazados ni decisiones abiertas de activación;
3. fijar una versión material exacta aprobada;
4. asignar la versión oficial 1.0.0;
5. identificarla por tamaño y SHA-256;
6. autorizar expresamente el uso excepcional de la carpeta raíz itinerario/;
7. publicar el Markdown en el repositorio canónico;
8. generar el PDF byte-identificable;
9. entregar el PDF para descarga y respaldo externo;
10. registrar hashes y resultado de ambas operaciones.

### Regla de simultaneidad

Markdown y PDF deben corresponder al mismo contenido y versión.

No se declara publicación completa si:

- no se dispone del repositorio canónico;
- no puede escribirse la carpeta autorizada;
- el Markdown y el PDF no corresponden a la misma versión;
- falta la verificación material;
- una de las dos entregas falla.

Si el repositorio no está disponible al aprobarse, el estado será:

> **APROBADO — PENDIENTE DE PUBLICACIÓN MATERIAL**

No se simulará el cumplimiento.

### Entregables

- itinerario/GMS_ITINERARIO_MAESTRO_SDD_v1.0.0.md;
- GMS_ITINERARIO_MAESTRO_SDD_v1.0.0.pdf descargable;
- registro de identidad material de ambos.

### Puerta GP

El itinerario tiene aprobación expresa, versión, hash, publicación verificable y respaldo PDF equivalente.

---

## Etapa 0 — Constitución del corpus de trabajo

### Objetivo

Reunir todas las fuentes sin mezclarlas ni atribuirles autoridad por inferencia.

### Acciones

1. verificar el repositorio canónico;
2. recibir los documentos institucionales, actas, ADR y líneas base posteriores que no estén ya publicados en él;
3. verificar nombre lógico, nombre transportado, tamaño, hash, integridad y cantidad de archivos;
4. registrar origen, fecha, versión, estado declarado y autoridad;
5. conservar cada fuente sin modificación;
6. identificar duplicados byte-idénticos;
7. separar duplicados nominales de versiones reales;
8. crear el inventario inicial;
9. marcar información ausente como no disponible;
10. impedir la consolidación automática.

Los ZIP u otros contenedores que se utilicen por comodidad son medios de transporte. La autoridad y la vigencia pertenecen siempre a los documentos institucionales contenidos y a sus actos de aprobación.

### Incorporaciones nuevas

- identidad lógica y material;
- registros;
- confidencialidad;
- Context Engineering de recepción;
- regla de no invención.

### Prohibido

- decidir vigencia por fecha o nombre solamente;
- abrir implementación;
- corregir documentos;
- fusionar contenidos.

### Puerta G0

Todo insumo está materialmente identificado, su autoridad declarada está registrada y no existe mezcla de fuentes.

---

## Etapa 1 — Reconciliación institucional y línea base

### Objetivo

Determinar qué es vigente, qué es histórico, qué es candidato y qué falta.

### Acciones

1. resolver INT-000 frente a ACTA-001 respecto de V0.1;
2. localizar o declarar ausentes las líneas base de V0.1, V0.2 y V0.3;
3. reconciliar documentos 00–18, cantidades y estados;
4. reconciliar rutas sensibles a mayúsculas y acentos;
5. inventariar documentos publicados, candidatos y internos;
6. normalizar o incorporar el sistema ADR vigente;
7. eliminar colisiones de IDs sin borrar historia;
8. resolver la autoridad de DOC-018;
9. comparar todo documento institucional posterior con esta raíz;
10. determinar el tratamiento del código experimental;
11. producir un registro de contradicciones;
12. proponer una línea base material.

### Decisiones que no pueden inferirse

- si ACTA-001 prevalece sobre el estado obsoleto;
- qué archivo exacto constituye cada arquitectura aprobada;
- si un documento institucional posterior sustituye total o parcialmente lo registrado en esta raíz;
- si los ADR normalizados ya existentes fuera del ZIP son la línea vigente;
- si el código se conserva como spike o se reemplaza.

### Entregables

- inventario canónico de activos;
- registro de contradicciones;
- mapa de autoridad y precedencia;
- propuesta de línea base;
- manifiesto de línea base;
- paquete de decisiones para el Founder.

### Puerta G1

No queda ninguna contradicción crítica sin decisión y cada fuente normativa vigente posee identidad material, versión, estado, propietario y ubicación.

### Criterio propuesto para aprobar la futura línea base

La futura línea base será una **selección cerrada y reproducible de documentos institucionales aprobados y vigentes**. No será una nueva fuente de verdad ni elevará la autoridad de un documento: registrará exactamente qué documentos institucionales rigen en un corte determinado.

#### Condiciones acumulativas

| Dimensión | Condición obligatoria de aprobación |
|---|---|
| Autoridad | Cada documento normativo incluido tiene autoridad competente, acto de aprobación identificable y estado Aprobado o Publicado. Un documento Candidato puede acompañar el corte como referencia no normativa, pero no integrar su núcleo vigente. |
| Composición | El registro enumera, sin comodines, código lógico, título, versión, estado, ruta exacta, tamaño y SHA-256 de cada archivo incluido. |
| Precedencia | Toda sustitución, coexistencia o conflicto tiene decisión explícita. Ninguna vigencia se infiere solo por fecha, nombre o ubicación. |
| Identificadores | Las familias documentales y los ADR no presentan colisiones activas. Los identificadores históricos se preservan y las remisiones quedan inequívocas. |
| Trazabilidad | Cada documento registra origen, autoridad, propietario, dependencias, documentos sustituidos y documentos que lo sustituyen, cuando corresponda. |
| Coherencia | No existen contradicciones críticas abiertas entre Carta, Constitución, gobierno, Manual, ADR, actas, línea física y estado institucional. |
| Integridad referencial | Todas las referencias obligatorias resuelven a un documento y versión materialmente disponibles; las ausencias aceptadas constan como exclusiones. |
| Correspondencia física | Rutas, mayúsculas, acentos, cantidades y estructura descrita coinciden con el repositorio canónico o poseen una desviación expresamente aceptada. |
| Reproducibilidad | Una tercera revisión puede reconstruir el mismo conjunto desde un commit exacto y comprobar todos sus hashes sin depender de una conversación. |
| Verificación | Pasan los controles de integridad, metadatos, enlaces, unicidad de IDs, estados y referencias definidos para G1. |
| Riesgo y deuda | Las deudas no bloqueantes indican impacto, responsable, tratamiento y condición de revisión. No se ocultan dentro de notas informales. |
| Cierre y cambio | El acto de aprobación identifica versión, fecha, alcance y registro de composición. Después del cierre, todo cambio se realiza mediante sucesor o control de cambio; no se reescribe el corte aprobado. |

#### Umbral de decisión

La línea base solo puede aprobarse cuando se cumplan simultáneamente estas reglas:

1. cero contradicciones críticas abiertas;
2. cero hallazgos altos sin resolver que afecten autoridad, identidad, precedencia, integridad, seguridad o reproducibilidad;
3. todos los documentos del núcleo normativo están aprobados o publicados;
4. todos los archivos del núcleo poseen identidad material verificable;
5. todas las exclusiones son explícitas y no impiden iniciar G2;
6. Dirección Técnica emite recomendación de conformidad documental y técnica;
7. el Founder aprueba expresamente el corte exacto; no existe aprobación por silencio;
8. el acto deja constancia de que aprobar la línea base **no autoriza código funcional** ni anticipa G9.

Un hallazgo medio o bajo puede convertirse en deuda aceptada solo si no altera las condiciones anteriores y queda registrado con responsable y disparador de revisión. Una excepción alta solo podrá considerarse si el Founder la delimita expresamente y Dirección Técnica demuestra que no afecta ninguna condición de autoridad, integridad, seguridad o inicio de G2.

#### Responsabilidades de aprobación

- **Dirección Técnica:** prepara el inventario, verifica materiales, reconcilia contradicciones y recomienda aprobar o devolver.
- **Propietario institucional de cada documento:** confirma versión, estado y alcance cuando la evidencia existente no sea suficiente.
- **Founder:** decide precedencia cuando corresponda y otorga la aprobación final del corte exacto.
- **Admin, AI y Usuario:** no intervienen; continúan siendo hipótesis futuras sin autoridad vigente.

---

## Etapa 2 — Lenguaje, identidad, invariantes y variantes

### Objetivo

Crear una semántica única antes de redactar SPEC.

### Acciones

1. localizar el glosario institucional vigente, si existe fuera del ZIP;
2. reconciliarlo con Guía Editorial y glosarios especializados;
3. definir una única autoridad terminológica;
4. definir SDD;
5. definir identidad lógica e identidad material;
6. definir requisito, capacidad, SPEC, criterio de aceptación, contrato, evidencia y línea base;
7. separar actor, usuario, rol, identidad de servicio, agente y capacidad de IA;
8. registrar invariantes de producto, arquitectura, seguridad, documentación y operación;
9. registrar variantes permitidas;
10. definir cómo se aprueba una excepción;
11. exigir que cada SPEC declare invariantes y puntos de variación aplicables.

### Regla de glosarios

El glosario transversal define el significado común. Un glosario de dominio puede especializar un término, pero debe enlazar la definición raíz y no contradecirla.

### Entregables

- glosario canónico o sucesor integrado;
- índice de glosarios de dominio;
- registro de invariantes y variantes;
- reglas de excepción.

### Puerta G2

Los términos críticos tienen una definición única, SDD se utiliza consistentemente y las invariantes pueden citarse desde una SPEC.

---

## Etapa 3 — Gobierno operativo de SDD

### Objetivo

Definir cómo una necesidad se convierte en software aceptado.

### Acciones

1. adoptar SDD como complemento de Architecture First;
2. activar la familia SPEC en la Guía Editorial;
3. definir identificadores globales;
4. aprobar plantilla SPEC;
5. aprobar estados y transiciones documentales;
6. separar madurez documental de implementación;
7. aprobar Listo para Especificar;
8. aprobar Listo para Implementar;
9. aprobar Terminado;
10. definir cambio, excepción, sustitución y retiro;
11. definir trazabilidad obligatoria;
12. definir responsabilidades usando autoridades existentes;
13. crear un mapa de proceso SDD;
14. integrar INT-011 sin duplicarlo;
15. definir Context Package de implementación;
16. definir qué puede delegarse a agentes y qué requiere decisión humana;
17. establecer revisión proporcional;
18. establecer procedimiento de cierre y aprendizaje.

### Autoridad

SDD introduce responsabilidades, no autoridades nuevas.

Como mínimo:

- el Founder conserva decisión final sobre alcance, prioridades e invariantes fundacionales;
- Dirección Técnica integra, verifica fuentes y controla conformidad arquitectónica;
- producto y experiencia definen resultados y comportamiento;
- implementación materializa la SPEC;
- verificación demuestra conformidad;
- ninguna persona o agente aprueba su propio resultado cuando se requiera revisión independiente.

La asignación nominal debe respetar la gobernanza vigente reconciliada en G1.

### Entregables

- decisión de adopción de SDD;
- modelo operativo SDD;
- plantilla SPEC;
- workflow y mapa de procesos;
- matriz de responsabilidad;
- definiciones de puertas;
- plantilla de Context Package;
- política de cambio.

### Puerta G3

Una iniciativa puede recorrer el proceso sin depender de memoria conversacional ni de interpretaciones privadas.

---

## Etapa 4 — Stakeholders, actores, alcance y capacidades

### Objetivo

Convertir la visión en un mapa priorizable sin diseñar todavía todas las soluciones.

### Acciones

1. identificar stakeholders internos y externos;
2. distinguir stakeholder de usuario y de actor técnico;
3. registrar necesidad, impacto, influencia y forma de participación;
4. consolidar perfiles de usuario;
5. crear mapa de capacidades;
6. clasificar cada capacidad como:
   - fundacional;
   - core;
   - complementaria;
   - futura;
   - experimental;
   - temporal;
   - fuera de alcance;
7. relacionar capacidades con objetivos;
8. relacionar capacidades con módulos;
9. priorizar resultados, no componentes;
10. precisar frontera Community, Pro, Cloud, AI, Marketplace y Enterprise;
11. confirmar MIT para el núcleo actual;
12. registrar decisiones de propiedad intelectual pendientes;
13. seleccionar el primer resultado vertical.

### Regla de roles

Admin, AI y Usuario son hipótesis de incorporación futura, no roles vigentes. No habilitan permisos ni condicionan el piloto. Cualquier modelo futuro de autorización se construirá desde recursos, acciones, identidades y capacidades, y requerirá aprobación expresa.

### Entregables

- mapa de stakeholders;
- catálogo de actores;
- mapa de capacidades;
- matriz de alcance;
- priorización;
- registro de fronteras de edición/licencia;
- selección de piloto.

### Puerta G4

El primer incremento tiene usuario, necesidad, valor, alcance y prioridad demostrables; las capacidades futuras no contaminan su diseño.

---

## Etapa 5 — Arquitectura y dominio mínimos

### Objetivo

Consolidar solamente la arquitectura necesaria para especificar el primer incremento y preservar la evolución.

### Acciones

1. confirmar módulos, ownership, fronteras y dependencias;
2. generar vistas arquitectónicas canónicas faltantes;
3. definir entidades mínimas:
   - Project;
   - Scene;
   - Map View;
   - Project Document;
4. distinguir entidad, agregado documental, recurso y componente;
5. definir estados y transiciones de esas entidades;
6. definir invariantes de dominio;
7. definir ownership de datos;
8. definir modelo de persistencia conceptual;
9. crear taxonomía mínima de errores;
10. definir contratos arquitectónicos necesarios;
11. definir identidad y autorización mínima;
12. establecer que IA no participa del piloto salvo decisión explícita;
13. utilizar diagramas de estado o secuencia solo cuando aclaren interacción;
14. registrar decisiones tecnológicas todavía abiertas.

### Fuera de alcance

- modelo completo de todos los dominios;
- APIs públicas generales;
- Cloud;
- colaboración;
- plugins;
- render distribuido;
- Marketplace;
- IA de producto.

### Entregables

- mapa modular vigente;
- vistas arquitectónicas mínimas;
- modelo de dominio mínimo;
- estados y transiciones;
- ownership de datos;
- taxonomía de errores;
- catálogo inicial de contratos;
- ADR necesarios.

### Puerta G5

La SPEC piloto puede escribirse sin inventar módulos, entidades, ownership, estados o dependencias.

---

## Etapa 6 — Perfil de calidad, seguridad y verificación

### Objetivo

Convertir atributos abstractos en condiciones medibles.

### Acciones

1. refinar RNF-001 a RNF-027;
2. fijar navegadores y sistemas soportados;
3. definir perfiles de dispositivo y datos de prueba;
4. definir presupuestos de rendimiento;
5. aprobar objetivo de accesibilidad;
6. definir restricciones de internacionalización;
7. definir fiabilidad y recuperación;
8. crear perfil de seguridad inicial;
9. crear modelo de amenazas proporcional al piloto;
10. definir clasificación de datos;
11. definir política de secretos;
12. definir eventos observables mínimos;
13. definir logs permitidos y prohibidos;
14. definir estrategia de pruebas;
15. definir niveles:
    - unitarias;
    - integración;
    - contrato;
    - aceptación;
    - accesibilidad;
    - rendimiento;
    - seguridad;
16. definir cobertura por riesgo, no solo porcentaje;
17. crear política de dependencias externas;
18. registrar licencias y sustitución;
19. diferir trazas distribuidas y respuesta Cloud hasta existir ese contexto.

### Entregables

- perfil de calidad;
- matriz RNF–métrica–método–umbral;
- estrategia de pruebas;
- perfil de seguridad;
- modelo de amenazas inicial;
- política de observabilidad;
- inventario y política de dependencias;
- matriz de compatibilidad.

### Puerta G6

Cada atributo aplicable al piloto tiene entorno, métrica, umbral, método y autoridad de aceptación.

---

## Etapa 7 — Fundación ejecutable del repositorio

### Objetivo

Permitir que el repositorio demuestre conformidad automáticamente.

### Acciones

1. materializar la Arquitectura Física vigente;
2. crear o corregir configuración raíz del monorepo;
3. fijar Node y gestor de paquetes;
4. garantizar instalación reproducible;
5. definir comandos canónicos;
6. tratar el esqueleto actual mediante cambio autorizado;
7. obtener una aplicación mínima compilable;
8. incorporar typecheck;
9. incorporar lint;
10. incorporar formato;
11. incorporar runner de pruebas;
12. crear CI;
13. validar metadatos documentales;
14. validar links;
15. validar IDs únicos;
16. validar transiciones de estado;
17. validar schemas y contratos;
18. validar fronteras de módulos;
19. detectar secretos;
20. revisar dependencias y licencias;
21. generar trazabilidad;
22. activar CHANGELOG;
23. documentar entorno local y recuperación.

### Restricción

Esta etapa autoriza infraestructura de ingeniería, no nuevas funcionalidades de producto.

### Entregables

- árbol físico conforme;
- entorno reproducible;
- aplicación mínima compilable;
- suite de validaciones;
- CI obligatoria;
- documentación de desarrollo;
- primer informe automático de conformidad.

### Puerta G7

Una copia limpia puede instalar, compilar, analizar, probar y validar documentación con un procedimiento reproducible.

---

## Etapa 8 — SPEC piloto

### Incremento recomendado

**Crear, guardar y reabrir un proyecto local con una escena y una vista cartográfica base.**

### Objetivo

Demostrar el circuito SDD sobre un resultado geoespacial visible y acotado.

### Contenido mínimo

1. actor y necesidad;
2. resultado observable;
3. alcance y exclusiones;
4. precondiciones;
5. flujo principal;
6. flujos alternativos;
7. errores;
8. estados y transiciones;
9. modelo de datos;
10. formato y versión de persistencia;
11. contratos Project–Scene–Map;
12. interfaz y layout;
13. teclado, foco y accesibilidad;
14. internacionalización;
15. seguridad;
16. observabilidad;
17. rendimiento;
18. compatibilidad;
19. criterios de aceptación;
20. plan de migración y reversión;
21. trazabilidad;
22. preguntas abiertas.

### Alcance candidato

- crear proyecto local;
- asignar identidad;
- asignar versión de formato;
- crear escena inicial;
- mostrar vista cartográfica base;
- modificar la vista;
- guardar;
- cerrar;
- reabrir;
- restaurar el estado definido;
- comunicar errores recuperables.

### Exclusiones

- cuentas;
- sincronización remota;
- colaboración;
- animación;
- render final;
- exportación;
- plugins externos;
- IA;
- operación distribuida.

### Decisiones requeridas antes de aprobación

- motor o adaptador cartográfico;
- alcance 2D/3D;
- formato persistente;
- almacenamiento local;
- comportamiento offline;
- navegadores;
- umbrales;
- mapa base y condiciones de uso;
- estrategia de errores y recuperación.

### Puerta G8

La SPEC está aprobada, no contiene bloqueos, sus criterios son binarios y cada uno posee método de verificación.

---

## Etapa 9 — Preparación de implementación

### Objetivo

Demostrar que el trabajo puede comenzar sin decisiones implícitas.

### Acciones

1. derivar plan técnico desde la SPEC;
2. dividir trabajo por contratos y resultados;
3. crear Context Package autocontenido;
4. identificar archivos permitidos y prohibidos;
5. preparar fixtures y datos de prueba;
6. materializar schemas;
7. materializar interfaces;
8. preparar pruebas de contrato;
9. preparar pruebas de aceptación;
10. registrar riesgos;
11. confirmar rollback;
12. realizar revisión de preparación.

### Regla para agentes

Un agente recibe:

- SPEC exacta;
- fuentes superiores necesarias;
- contratos;
- alcance de archivos;
- criterios de aceptación;
- comandos de validación;
- reglas de escalamiento.

No recibe autoridad para completar decisiones ausentes.

### Puerta G9

Las pruebas iniciales fallan por ausencia de implementación y no por ambigüedad, entorno roto o decisiones faltantes.

---

## Etapa 10 — Implementación, aceptación y cierre

### Objetivo

Materializar únicamente el comportamiento aprobado.

### Acciones

1. implementar por incrementos pequeños;
2. mantener trazabilidad en cada cambio;
3. ejecutar controles locales;
4. ejecutar CI;
5. registrar desviaciones como cambios de SPEC;
6. revisar arquitectura;
7. revisar producto y experiencia;
8. revisar seguridad y accesibilidad;
9. ejecutar aceptación;
10. registrar evidencia;
11. actualizar documentación viva;
12. actualizar CHANGELOG;
13. versionar;
14. publicar o integrar según autoridad;
15. registrar conocimiento adquirido.

### Puerta G10

Todos los criterios tienen evidencia, la implementación reproduce la SPEC aprobada, CI está conforme y la versión puede reconstruirse.

---

## Etapa 11 — Calibración y expansión

### Objetivo

Ajustar SDD antes de aplicarlo al ecosistema completo.

### Acciones

1. medir defectos, retrabajo y cambios de SPEC;
2. identificar campos útiles y redundantes;
3. revisar tiempos de aprobación;
4. revisar calidad de Context Packages;
5. actualizar el proceso mediante versión sucesora;
6. seleccionar el siguiente incremento;
7. repetir Etapas 8–10;
8. abrir arquitecturas futuras solo al cumplirse su entrada.

### Orden funcional candidato

1. incorporar y persistir un objeto o recurso;
2. editar propiedades;
3. introducir Timeline y un keyframe;
4. reproducir una animación;
5. generar una salida mínima;
6. validar un punto de extensión;
7. incorporar identidad remota;
8. habilitar colaboración;
9. diseñar operación distribuida;
10. incorporar IA con contratos, permisos y observabilidad.

### Condiciones para capacidades diferidas

| Capacidad | Condición de entrada |
|---|---|
| Plugins | Núcleo y contratos estables; sandbox y permisos definidos |
| Cloud | Modelo local estable; identidad, seguridad y datos definidos |
| Colaboración | Conflictos, ownership, sincronización y auditoría especificados |
| Operación distribuida | Servicios reales, SLO y modelo de consistencia definidos |
| Trazas distribuidas | Interacciones remotas materializadas |
| IA de producto | Acciones, permisos, contexto, evaluación y rollback definidos |
| Marketplace | Extensiones, firma, revisión, licencia y seguridad consolidadas |

### Puerta G11

El método fue revisado con evidencia y existe autorización expresa para el siguiente incremento.

---

## 12. Puertas consolidadas

| Puerta | Pregunta de control | Autoriza |
|---|---|---|
| GP | ¿El itinerario fue aprobado y publicado materialmente con PDF equivalente? | Inicio institucional del itinerario |
| G0 | ¿Todos los insumos están identificados y separados? | Reconciliación |
| G1 | ¿Existe línea base sin contradicciones críticas? | Consolidación semántica |
| G2 | ¿El lenguaje y las invariantes son inequívocos? | Gobierno SDD |
| G3 | ¿El proceso SDD es repetible y tiene autoridad? | Diseño de producto |
| G4 | ¿El primer resultado tiene valor, actor y alcance? | Arquitectura mínima |
| G5 | ¿La SPEC puede escribirse sin inventar arquitectura? | Perfil de calidad |
| G6 | ¿La calidad puede medirse? | Fundación ejecutable |
| G7 | ¿El repositorio puede demostrar conformidad? | SPEC piloto |
| G8 | ¿La SPEC piloto está aprobada y verificable? | Preparación técnica |
| G9 | ¿Implementar no requiere decisiones implícitas? | Código funcional |
| G10 | ¿El piloto es conforme, reproducible y aceptado? | Calibración |
| G11 | ¿El método fue validado y el siguiente incremento está autorizado? | Escalado |

---

## 13. Criterios globales de bloqueo

El itinerario se detiene cuando:

- una fuente requerida no puede verificarse;
- dos autoridades vigentes se contradicen;
- falta una decisión del Founder;
- una SPEC contiene términos no definidos;
- un criterio no es verificable;
- el implementador debería elegir alcance o política;
- el repositorio no reproduce el entorno;
- una dependencia crítica no tiene licencia o riesgo evaluado;
- una prueba requiere inventar comportamiento;
- se solicita modificar un publicado sin sucesor o autorización;
- la publicación se afirma sin evidencia material.

El bloqueo debe registrar:

- causa;
- evidencia;
- impacto;
- autoridad requerida;
- opciones;
- última situación demostrable.

---

## 14. Tratamiento de documentación viva

La documentación viva no significa modificación continua sin control.

Debe significar:

- propietario conocido;
- versión y estado;
- evento de actualización;
- trazabilidad;
- revisión;
- automatización;
- historial preservado;
- sincronización al cerrar cada incremento.

INT-000 debe actualizarse por hitos reales. No debe permanecer anterior a un acta que cambia el estado institucional.

---

## 15. Primera actuación autorizada

La primera actuación no incluye código.

### Nombre funcional

**Reconciliación material e institucional de la línea base SDD.**

### Entradas

- raíz del repositorio evaluada;
- instrucciones adicionales evaluadas;
- repositorio canónico `augustotrance/GeoMotionStudio`, rama `main`, verificado inicialmente en `1dc6dc8543c47552818fa9fc726b4bba0c698e96`;
- documentos institucionales posteriores que no estén publicados en ese corte;
- documentos fundacionales vigentes;
- actas;
- líneas base V0.1, V0.2 y V0.3;
- ADR sucesores o normalizados;
- informe e itinerario aprobados.

### Alcance autorizado

- verificar;
- inventariar;
- comparar;
- detectar duplicados;
- detectar contradicciones;
- proponer precedencia;
- preparar decisiones;
- producir manifiestos candidatos.

### Fuera de alcance

- modificar documentos publicados;
- incorporar cambios a la copia central;
- cambiar arquitectura;
- crear funcionalidad;
- reparar el código;
- publicar una nueva línea base sin aprobación.

### Entregables

1. inventario completo;
2. mapa de fuentes;
3. registro de contradicciones;
4. registro de duplicados;
5. propuesta de precedencia;
6. propuesta de línea base;
7. manifiesto candidato;
8. paquete de decisiones del Founder;
9. recomendación del siguiente acto.

### Criterio de cierre

El Founder puede aprobar una línea base exacta sin depender de inferencias, conversaciones no incorporadas ni archivos no identificados.

---

## 16. Decisiones de activación adoptadas

| Nº | Decisión vigente | Estado |
|---:|---|---|
| 1 | Aprobar este documento con las salvedades incorporadas en la versión 1.0.0 | Resuelta |
| 2 | Autorizar excepcionalmente la carpeta raíz `itinerario/` | Resuelta |
| 3 | Establecer `https://github.com/augustotrance/GeoMotionStudio` como repositorio canónico | Resuelta |
| 4 | Autorizar la generación simultánea del PDF equivalente | Resuelta |
| 5 | Establecer SDD como denominación única | Resuelta |
| 6 | Tratar Admin, AI y Usuario únicamente como hipótesis futuras, sin roles ni permisos vigentes | Resuelta |
| 7 | Autorizar exclusivamente la actuación de reconciliación como primer trabajo | Resuelta |
| 8 | Prohibir código funcional hasta superar G9 | Resuelta |
| 9 | Adoptar como propuesta el criterio de línea base definido en Etapa 1, sujeto a aprobación del corte material futuro | Resuelta para iniciar reconciliación |
| 10 | Reconocer a los documentos institucionales aprobados y vigentes como fuente de verdad; no implantar un recurso paralelo de autoridad | Resuelta |

La aprobación del itinerario no implica aprobación anticipada de la línea base, la SPEC piloto ni la implementación.

---

## 17. Insumos requeridos para completar la reconciliación

No debe reenviarse el repositorio completo ni crearse un recurso documental nuevo. Solo se necesitan los documentos institucionales que no estén ya en el commit verificado y la evidencia de sus decisiones.

### Prioridad A — bloqueantes de G1

1. **V0.1:** documento material exacto aprobado y su acta, o confirmación institucional de que ACTA-001 es el único instrumento y de que la mención “pendiente” de INT-000 quedó obsoleta.
2. **V0.2 y V0.3:** documentos exactos de esas líneas base y sus actos de aprobación; si nunca se materializaron, confirmación expresa de inexistencia.
3. **ADR vigentes fuera del repositorio:** archivos o registro institucional que resuelva la colisión de ADR-001 a ADR-010 entre DOC-002 y DOC-013, preservando la historia.
4. **Sucesor de DOC-018, si existe:** versión aprobada/publicada y acto correspondiente. Si no existe, confirmación de que DOC-018 continúa como Candidato y queda fuera del núcleo normativo.
5. **Documentos institucionales aprobados después del 29 de agosto de 2026** que sustituyan, modifiquen o condicionen cualquier documento del commit `1dc6dc8543c47552818fa9fc726b4bba0c698e96`.

### Prioridad B — decisiones necesarias antes de cerrar G1

6. relación de documentos vigentes que estén fuera del repositorio canónico, indicando título, versión, estado y acto de aprobación;
7. decisión institucional sobre el esqueleto de `apps/web`: conservarlo como experimento histórico, declararlo spike reemplazable o someterlo a otra disposición, sin modificarlo en esta actuación;
8. cualquier acto que defina precedencia entre Carta, Constitución, Manual, ADR, actas y documentos internos cuando esa precedencia no conste en los archivos actuales.

Los archivos pueden enviarse individualmente en su formato institucional original. Si se agrupan en un ZIP por comodidad, el ZIP será solo transporte; no necesita ni adquirirá autoridad documental. Para un ítem inexistente basta una declaración expresa de inexistencia: no se debe fabricar retrospectivamente un documento.

### Material ya disponible; no reenviar

- raíz de `main` en el commit verificado;
- ZIP de esa misma raíz;
- las treinta instrucciones adicionales;
- este informe e itinerario aprobado.

---

## 18. Conclusión

Las nuevas instrucciones son compatibles con el enfoque recomendado cuando se ordenan por responsabilidad y dependencia.

Su mayor aporte es hacer explícitos varios elementos que SDD necesita:

- semántica;
- invariantes;
- actores;
- estados;
- datos;
- contratos;
- seguridad;
- errores;
- pruebas;
- observabilidad;
- identidad material;
- Context Engineering.

Su principal riesgo era convertir esos elementos en una segunda arquitectura documental paralela. La matriz de este informe elimina ese riesgo:

- reutiliza el Manual;
- evita duplicar ADR, arquitectura, versionado, extensibilidad y conocimiento;
- traslada el detalle al incremento que lo necesita;
- difiere las capacidades futuras;
- establece puertas objetivas.

El proyecto comienza por los documentos institucionales y su reconciliación material, continúa por el lenguaje y el gobierno SDD, prepara después producto, arquitectura, calidad y repositorio, y recién entonces especifica e implementa un incremento vertical.

**Dictamen final vigente:** Itinerario Maestro aprobado; Etapa P autorizada; reconciliación iniciada; código funcional prohibido hasta superar G9.
