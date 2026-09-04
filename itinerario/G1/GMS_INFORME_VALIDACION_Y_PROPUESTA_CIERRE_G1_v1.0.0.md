# GeoMotion Studio

# Informe de validación integral y propuesta de cierre de G1

**Identificador:** INF-G1-GMS-20260904-01  
**Versión:** 1.0.0  
**Estado:** Candidato para decisión del Founder  
**Fecha:** 4 de septiembre de 2026  
**Autoridad de aprobación:** Founder  
**Repositorio canónico:** `https://github.com/augustotrance/GeoMotionStudio`  
**Base canónica:** commit `a3b2d4679752503dd6569db7e75db4f70ddb03e9`  
**Restricción:** código funcional prohibido hasta superar G9

---

## 1. Resultado ejecutivo

El candidato de línea base G1 queda **técnicamente conforme y apto para decisión del Founder**.

La aprobación institucional de G1 todavía está pendiente. No se presume por la conformidad técnica ni por la existencia de este informe.

Resultados centrales:

- cero contradicciones críticas abiertas;
- cero hallazgos altos abiertos;
- 46 documentos en el núcleo normativo, todos materializados;
- los 46 documentos del núcleo declaran estado `Aprobado`, `Aprobada`, `Aprobado y vigente` o `Publicado`;
- 107 archivos inventariados y verificados en el repositorio candidato;
- 107 de 107 huellas del repositorio conformes;
- 46 de 46 huellas del núcleo normativo conformes;
- 25 de 25 enlaces ADR activos resueltos;
- B-06, B-07 y B-08 técnicamente cerrados;
- dos observaciones bajas, expresamente fuera del núcleo y no bloqueantes;
- ninguna modificación de código funcional;
- repositorio canónico todavía no modificado.

---

## 2. Naturaleza de la línea base

La línea base propuesta es una selección cerrada y reproducible de documentos institucionales vigentes. Registra cuáles rigen en el corte G1, sin sustituirlos ni crear autoridad documental paralela.

La autoridad continúa residiendo en los documentos aprobados y vigentes y en las decisiones expresas del Founder.

**Identidad propuesta de la línea base:** `LB-G1-GMS-20260904-01`  
**Versión propuesta:** `1.0.0`

---

## 3. Anclaje reproducible

| Elemento | Identidad |
|---|---|
| Commit canónico de partida | `a3b2d4679752503dd6569db7e75db4f70ddb03e9` |
| Árbol Git del commit de partida | `b55678dd361c4800b657046addea2338963514a1` |
| Árbol Git del repositorio candidato | `319847c388b1b2b4934ff7f1bdd5488ec963f9c8` |
| Archivos en la base | 76 |
| Archivos en el candidato | 107 |
| Archivos agregados | 31 |
| Archivos modificados | 14 |
| Archivos eliminados | 0 |

La reconstrucción local del commit de partida produjo exactamente el mismo árbol Git que el repositorio canónico. El delta de 45 rutas enumera cada alta y cada sustitución, con las huellas de origen y destino.

---

## 4. Composición exacta

### 4.1 Núcleo normativo — 46 documentos

| Conjunto | Cantidad | Estado exigido | Resultado |
|---|---:|---|---|
| `VALORES.md` | 1 | Aprobado y vigente | Conforme; D-09 |
| `INT-008` — Carta Fundacional | 1 | Aprobado y vigente | Conforme; D-08 |
| Manual `DOC-000` a `DOC-018` | 19 | Publicado | Conforme; 19 de 19 |
| `ADR-016` a `ADR-040` | 25 | Aprobada | Conforme; 25 de 25; D-04 |

La decisión de G1, si es aprobada, ratificará la incorporación institucional del corte exacto de los 46 documentos. No cambiará su contenido ni sus huellas.

### 4.2 Resto del repositorio candidato — 61 archivos

| Clasificación | Cantidad | Tratamiento |
|---|---:|---|
| Control institucional de G1 | 4 | Itinerario aprobado y actos D-01–D-11; fuera del núcleo técnico |
| Documentos controlados de apoyo | 12 | Guía Editorial e `INT` no normativos; no adquieren autoridad adicional |
| Soporte de navegación | 4 | README e índice; función informativa |
| Reservas estructurales | 3 | Marcadores vacíos aprobados por D-11 |
| Instrumento legal | 1 | Licencia preservada |
| Soporte del repositorio | 1 | `CHANGELOG.md` vacío preservado |
| Spike histórico reemplazable | 36 | `apps/web`; preservado, fuera de conformidad funcional por D-06 |

Total: 46 archivos del núcleo más 61 archivos no normativos o de soporte = 107 archivos.

---

## 5. Instrumentos de control

| Instrumento | Tamaño | SHA-256 |
|---|---:|---|
| `GMS_INVENTARIO_COMPLETO_CANDIDATO_G1_v1.0.0.csv` | 31.943 bytes | `06543686d8cf83b0fdbfbd0dcb063235826e42fecaba325b81b34ab1199883ce` |
| `GMS_MANIFIESTO_REPOSITORIO_CANDIDATO_G1_v1.0.0.sha256` | 10.648 bytes | `6e9f26d931922cd3136bcee02feb2ce21974dba7e4405daf63d96204d5b52684` |
| `GMS_MANIFIESTO_NUCLEO_NORMATIVO_G1_v1.0.0.sha256` | 4.437 bytes | `56625ea3eaa94293834bfd4cafcb3f5dfe1919ec27adddd25c6406f88f35fe66` |
| `GMS_DELTA_REPRODUCIBLE_G1_DESDE_a3b2d467_v1.0.0.csv` | 6.214 bytes | `4319581478d1173bf3de3b0e6a3ad7ca31fad4d7a47a4fd5967276f682cc3229` |

El inventario contiene, para cada archivo, ruta, tipo, clasificación G1, código, título, versión, estado o tratamiento, fundamento, tamaño y SHA-256.

Los manifiestos no utilizan comodines.

---

## 6. Trazabilidad de las decisiones

| Acto | Alcance | SHA-256 |
|---|---|---|
| `ACTO-SDD-GMS-20260903-01` | D-01 a D-07 | `97f3aae087c51e68fd7f7205961e57ff8a6c4cb99937fec741dc32f5ad8c9d88` |
| `ACTO-SDD-GMS-20260903-02` | D-08 a D-10 | `96ec2dbb0a12ed5462a7833e35336c1d28e631f34fac3635c1f126fd5e472383` |
| `ACTO-SDD-GMS-20260904-03` | D-11 | `f6d584e87fc2a2aa3f66dde0b5ec5efab9ad3dc76783dc9890273b19ae30759a` |

Instrumentos institucionales regularizados:

| Documento | Decisión | SHA-256 |
|---|---|---|
| `VALORES.md` 1.0.0 | D-09 | `759c41418cc9f1d58cb43dcc76c0424fbeb5920d1e1cbbf85a9345819f84b13c` |
| `INT-008` 1.0.0 | D-08 | `2ff70cff35333ad136e4ef603ef98061bbe05377b5cd480233c170be22d1f14c` |

---

## 7. Validación contra el criterio aprobado por D-07

| Dimensión | Resultado | Evidencia |
|---|---|---|
| Autoridad | Conforme para decisión | Estados normativos válidos; D-04, D-05, D-08, D-09 y ratificación exacta solicitada en G1 |
| Composición | Conforme | Inventario de 107 archivos; manifiesto del núcleo de 46 documentos |
| Precedencia | Conforme | D-01 a D-11 resuelven historia, colisión ADR, candidatos y rutas |
| Historia | Conforme | V0.1, V0.2 y V0.3 registradas sin reconstrucción ficticia |
| ADR | Conforme | 25 archivos aprobados; códigos únicos; enlaces completos desde DOC-002 y DOC-013 |
| DOC-018 | Conforme | Se incluye 1.0 Publicado; 1.1 Candidato queda excluido por D-05 |
| Coherencia | Conforme | Cero contradicciones críticas; observaciones bajas delimitadas |
| Integridad referencial | Conforme | 25 enlaces relativos activos comprobados; 25 resuelven |
| Correspondencia física | Conforme | Cantidades, mayúsculas, acentos y rutas corregidos; tres reservas materializadas por D-11 |
| Reproducibilidad | Conforme | Commit y árbol de partida exactos; delta cerrado; árbol candidato; dos manifiestos verificados |
| Riesgo | Conforme | Dos deudas bajas con impacto, responsable, tratamiento y disparador |
| Cambio | Conforme para decisión | La aprobación deberá producir un acto sucesor que identifique este corte exacto |

---

## 8. Validaciones ejecutadas

1. coincidencia exacta del árbol reconstruido con el árbol de `main`;
2. recuento y secuencia `DOC-000` a `DOC-018`;
3. comprobación del estado `Publicado` en los 19 documentos del Manual;
4. recuento y secuencia `ADR-016` a `ADR-040`;
5. comprobación de código y estado `Aprobada` en los 25 ADR;
6. correspondencia de `DOC-002` con `ADR-016` a `ADR-030`;
7. correspondencia de `DOC-013` con `ADR-031` a `ADR-040`;
8. secuencia material `INT-000` a `INT-011`;
9. contraste de las seis huellas aprobadas mediante D-08 a D-10;
10. contraste de las tres huellas vacías aprobadas mediante D-11;
11. resolución de todos los enlaces relativos activos;
12. ausencia de enlaces simbólicos;
13. ausencia de archivos comprimidos dentro del candidato;
14. exclusión de las versiones Candidato;
15. comprobación integral de 107 huellas del repositorio;
16. comprobación integral de 46 huellas del núcleo normativo;
17. comprobación de cero cambios bajo `apps/web`;
18. comprobación de cero archivos eliminados.

Resultado: todas las validaciones obligatorias conformes.

---

## 9. Exclusiones expresas

Quedan fuera del núcleo normativo:

- `DOC-018` 1.1, por estado Candidato y D-05;
- Guía Editorial 1.2, por estado Candidato;
- `INT-011` 1.2.1, por estado Candidato;
- toda versión sustituida de DOC-002, DOC-013, DOC-015, DOC-018, INT-000, INT-007, INT-008, INT-011, Guía Editorial y VALORES;
- originales autónomos no recuperados de V0.1, V0.2 y V0.3;
- backups, contenedores y extracciones históricas;
- dependencias, cachés y artefactos de construcción;
- `apps/web` como implementación de referencia.

`apps/web` permanece materialmente en el repositorio para conservar su historia, pero su presencia no demuestra conformidad arquitectónica ni autoriza reparación, reutilización o desarrollo.

---

## 10. Deudas no bloqueantes

### OBS-G1-01 — Conteos históricos en INT-000

`INT-000` 1.1.0 conserva conteos de la copia evaluada el 28 de julio de 2026 y una observación entonces válida sobre una declaración de 18 documentos.

- impacto: bajo; documento de apoyo, fuera del núcleo;
- responsable propuesto: Dirección Técnica;
- tratamiento: aclarar expresamente el carácter histórico en un sucesor;
- disparador: primera actualización aprobada de `INT-000` posterior a G1.

### OBS-G1-02 — Ejemplo editorial contextual

La Guía Editorial 1.1 contiene `[Arquitectura](02_ARQUITECTURA.md)` dentro de un bloque de código. No es un enlace activo ni integra la trazabilidad obligatoria.

- impacto: bajo; ejemplo de apoyo, fuera del núcleo;
- responsable propuesto: Dirección Técnica;
- tratamiento: contextualizar o corregir el ejemplo en un sucesor;
- disparador: primera actualización aprobada de la Guía Editorial posterior a G1.

La aprobación de G1 implicará aceptar ambas observaciones como deudas no bloqueantes, no declararlas resueltas.

---

## 11. Umbral de G1

| Condición | Estado |
|---|---|
| Cero contradicciones críticas abiertas | Cumplida |
| Cero hallazgos altos abiertos | Cumplida |
| Núcleo materialmente identificado | Cumplida: 46 de 46 |
| Estados Aprobado o Publicado en el núcleo | Cumplida: 46 de 46 |
| Exclusiones explícitas compatibles con G2 | Cumplida |
| Recomendación técnica de conformidad | Emitida |
| Aprobación expresa del Founder | **Pendiente** |
| G1 no autoriza código ni anticipa G9 | Declarado |

Solo falta la decisión expresa del Founder.

---

## 12. Recomendación técnica

Se recomienda **aprobar la línea base G1 versión 1.0.0**, identidad `LB-G1-GMS-20260904-01`, con:

- núcleo normativo de 46 documentos;
- repositorio candidato de 107 archivos;
- árbol Git candidato `319847c388b1b2b4934ff7f1bdd5488ec963f9c8`;
- manifiesto del núcleo SHA-256 `56625ea3eaa94293834bfd4cafcb3f5dfe1919ec27adddd25c6406f88f35fe66`;
- manifiesto completo SHA-256 `6e9f26d931922cd3136bcee02feb2ce21974dba7e4405daf63d96204d5b52684`;
- OBS-G1-01 y OBS-G1-02 aceptadas como deudas bajas no bloqueantes.

---

## 13. Fórmula de decisión propuesta

La aprobación podrá expresarse así:

> **Apruebo la línea base G1 v1.0.0, identidad LB-G1-GMS-20260904-01, en los términos exactos del informe INF-G1-GMS-20260904-01; acepto OBS-G1-01 y OBS-G1-02 como deudas no bloqueantes; y confirmo que G1 no autoriza código funcional ni anticipa G9.**

La devolución podrá identificar cualquier condición o documento que deba corregirse. No se presume aprobación por silencio.

---

## 14. Efectos de una aprobación

Si el Founder aprueba G1:

1. se materializará el acto de cierre con la identidad exacta aprobada;
2. G1 quedará institucionalmente cerrado;
3. quedará habilitada la preparación de G2 conforme al Itinerario Maestro;
4. se preparará por separado el cambio documental para el repositorio canónico;
5. GitHub solo se modificará si existe autorización expresa posterior;
6. continuará prohibido todo código funcional hasta superar G9.

---

## 15. Estado resultante

- D-01 a D-11: aprobadas, materializadas y verificadas.
- B-01 a B-08: técnicamente cerrados.
- Candidato G1: completo y conforme.
- Recomendación técnica: aprobar.
- Decisión del Founder sobre G1: pendiente.
- Repositorio canónico: no modificado.
- Código funcional: prohibido hasta superar G9.
