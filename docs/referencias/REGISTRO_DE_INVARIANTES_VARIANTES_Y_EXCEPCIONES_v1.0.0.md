# GeoMotion Studio

# Registro de invariantes, variantes y excepciones

**Identificador:** `REG-IVX-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado y vigente  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G2 — Lenguaje, identidad, invariantes y variantes  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G2-GMS-20260904-05`; D-16 y D-17  
**Línea base de entrada:** `LB-G1-GMS-20260904-01`

---

## 1. Naturaleza del registro

Este registro vuelve citables condiciones ya sustentadas por documentos institucionales y propone puntos de variación controlados. No sustituye sus fuentes y no concede autoridad propia a una regla.

Si este registro contradice una fuente aprobada y vigente, prevalece la fuente y la entrada queda bloqueada hasta su corrección. Un hash, manifiesto o identificador demuestra identidad y trazabilidad, no autoridad institucional.

---

## 2. Convención de identificadores

### Invariantes

`INV-{CATEGORÍA}-{NÚMERO}`

| Categoría | Ámbito |
|---|---|
| `PRO` | Producto, identidad y valor |
| `ARQ` | Arquitectura y contratos |
| `SEG` | Seguridad y control de acceso |
| `DOC` | Documentación, versiones y trazabilidad |
| `OPE` | Operación y puertas del itinerario |

### Variantes

`VAR-{CATEGORÍA}-{NÚMERO}`

Los identificadores no se reutilizan. Una modificación sustantiva genera versión sucesora del registro y conserva la relación con la entrada anterior.

---

## 3. Estados y horizonte

| Campo | Valores propuestos |
|---|---|
| Estado de entrada | Propuesta; Vigente; Sustituida; Retirada |
| Horizonte | Permanente; Hasta puerta; Por incremento; Por contexto |
| Aplicabilidad | Siempre; cuando se activa el dominio; cuando la SPEC lo declara |

Todas las entradas de esta versión se encuentran **Vigentes** por decisión D-16 del Founder. Su incorporación a una Línea base G2 continúa sujeta a la aprobación del corte material exacto.

---

## 4. Invariantes de producto

| ID | Condición que debe permanecer verdadera | Fuente institucional | Horizonte | Aplicabilidad |
|---|---|---|---|---|
| `INV-PRO-001` | GeoMotion Studio preserva su misión de reducir barreras para crear contenido geoespacial profesional y abierto. | `VALORES.md`, Misión | Permanente | Siempre |
| `INV-PRO-002` | El resultado creado por capacidades de IA permanece editable, revisable y bajo control humano. | DOC-016, Introducción y §§2.4, 2.7 | Permanente | Cuando intervenga IA |
| `INV-PRO-003` | La arquitectura y la documentación preceden a la implementación. | `VALORES.md`; DOC-006, arts. 2–5; DOC-002 §14.2 | Permanente | Siempre |
| `INV-PRO-004` | La velocidad no justifica sacrificar calidad, claridad, estabilidad o sostenibilidad. | `VALORES.md`, Excelencia y Calidad | Permanente | Siempre |
| `INV-PRO-005` | Las decisiones preservan la capacidad de mantener, crecer y evolucionar el proyecto. | `VALORES.md`, Visión de Largo Plazo; DOC-006, arts. 8 y 70 | Permanente | Siempre |
| `INV-PRO-006` | Una capacidad se define por el resultado que ofrece y no por un proveedor o implementación concreta. | Guía Editorial §Terminología; DOC-016 §§2.3 y 2.5 | Permanente | Siempre |

---

## 5. Invariantes de arquitectura

| ID | Condición que debe permanecer verdadera | Fuente institucional | Horizonte | Aplicabilidad |
|---|---|---|---|---|
| `INV-ARQ-001` | El sistema se organiza en módulos con responsabilidades y fronteras explícitas. | DOC-002 §§2.3–2.7; ADR-016 y ADR-018 | Permanente | Siempre |
| `INV-ARQ-002` | Cada información tiene un único módulo propietario. | DOC-002 §§13.5–13.6; ADR-027 | Permanente | Siempre |
| `INV-ARQ-003` | La interacción entre módulos se realiza mediante contratos arquitectónicos. | DOC-002 §13; ADR-027 | Permanente | Siempre |
| `INV-ARQ-004` | Un módulo no accede directamente a la implementación interna ni al estado privado de otro. | DOC-002 §§2.7, 13.6 y 13.10; ADR-027 | Permanente | Siempre |
| `INV-ARQ-005` | La estructura física refleja las fronteras arquitectónicas y preserva el aislamiento modular. | DOC-002 cap. 3 y §4.16; ADR-017 y ADR-018 | Permanente | Siempre |
| `INV-ARQ-006` | Project constituye el contexto raíz y coordina otros dominios sin apropiarse de sus responsabilidades. | DOC-002 cap. 5; ADR-019 | Permanente | Dominio Project |
| `INV-ARQ-007` | Cada Scene constituye un contexto independiente dentro de Project. | DOC-002 cap. 6; ADR-020 | Permanente | Dominio Scene |
| `INV-ARQ-008` | Map concentra la lógica cartográfica; los consumidores no la duplican. | DOC-002 cap. 7; ADR-021 | Permanente | Dominio Map |
| `INV-ARQ-009` | Assets representa recursos reutilizables y permanece separado de Objects, que representa instancias posicionables. | DOC-002 caps. 8–9; ADR-022 y ADR-023 | Permanente | Dominios Assets y Objects |
| `INV-ARQ-010` | Timeline centraliza la dimensión temporal y evita lógicas temporales divergentes. | DOC-002 cap. 10; ADR-024 | Permanente | Dominio Timeline |
| `INV-ARQ-011` | Render permanece independiente de la lógica funcional y colabora mediante contratos. | DOC-002 cap. 11; ADR-025 | Permanente | Dominio Render |
| `INV-ARQ-012` | Export permanece independiente de los módulos funcionales y recibe información mediante contratos. | DOC-002 cap. 12; ADR-026 | Permanente | Dominio Export |
| `INV-ARQ-013` | La arquitectura general gobierna implementaciones, documentación y evolución del sistema. | DOC-002 cap. 16; ADR-030 | Permanente | Siempre |
| `INV-ARQ-014` | La extensibilidad complementa la arquitectura modular y de contratos; no la sustituye. | DOC-013 cap. 1; ADR-031 | Permanente | Extensibilidad |
| `INV-ARQ-015` | Toda extensión se integra mediante puntos de extensión y contratos públicos oficialmente definidos. | DOC-013 caps. 6–7; ADR-036 y ADR-037 | Permanente | Extensibilidad |
| `INV-ARQ-016` | Los plugins internos y externos no reciben accesos privilegiados a implementaciones internas. | DOC-013 caps. 4–5; ADR-034 y ADR-035 | Permanente | Plugins |
| `INV-ARQ-017` | El núcleo limita sus responsabilidades y preserva la estabilidad de sus contratos. | DOC-013 cap. 2; ADR-032 | Permanente | Núcleo y extensiones |
| `INV-ARQ-018` | Los cambios arquitectónicos se realizan mediante gobernanza, trazabilidad y versiones sucesoras. | DOC-002 cap. 15; ADR-029; DOC-018 | Permanente | Siempre |

---

## 6. Invariantes de seguridad

| ID | Condición que debe permanecer verdadera | Fuente institucional | Horizonte | Aplicabilidad |
|---|---|---|---|---|
| `INV-SEG-001` | La seguridad se incorpora desde el diseño y durante todo el ciclo de vida. | DOC-017 §1.4 | Permanente | Siempre |
| `INV-SEG-002` | Toda identidad dispone únicamente de los permisos necesarios para su función. | DOC-017 §§1.4 y 4.5–4.8 | Permanente | Cuando exista autorización |
| `INV-SEG-003` | Una operación no expresamente permitida se deniega por defecto. | DOC-017 §4.8 | Permanente | Cuando exista autorización |
| `INV-SEG-004` | Autenticación y autorización permanecen separadas. | DOC-017 §4.9 | Permanente | Cuando exista identidad remota o protegida |
| `INV-SEG-005` | Las cuentas o identidades de servicio no representan personas y utilizan permisos delimitados. | DOC-017 §§3.3 y 3.8 | Permanente | Identidades de servicio |
| `INV-SEG-006` | La información sensible, credenciales y secretos se protegen durante almacenamiento, tránsito y procesamiento. | DOC-017 cap. 5 | Permanente | Cuando existan datos o secretos aplicables |
| `INV-SEG-007` | Las operaciones relevantes conservan trazabilidad y registros protegidos contra alteración no autorizada. | DOC-017 cap. 7 | Permanente | Cuando existan operaciones auditables |
| `INV-SEG-008` | Una capacidad de IA o agente no obtiene autoridad ni permisos implícitos por su naturaleza. | DOC-017; Itinerario Maestro §§7.2 y 10 | Permanente | IA y agentes |

---

## 7. Invariantes documentales

| ID | Condición que debe permanecer verdadera | Fuente institucional | Horizonte | Aplicabilidad |
|---|---|---|---|---|
| `INV-DOC-001` | La autoridad procede de documentos institucionales aprobados y vigentes. | `VALORES.md`; Carta Fundacional; Itinerario Maestro §2 | Permanente | Siempre |
| `INV-DOC-002` | SDD ordena, relaciona y hace verificables las fuentes; no las sustituye ni crea autoridad paralela. | `VALORES.md`; Carta Fundacional; acto D-08 a D-10 | Permanente | Siempre |
| `INV-DOC-003` | La presencia en una ruta, commit, contenedor o manifiesto no concede autoridad institucional por sí misma. | Carta Fundacional v1.0.0 | Permanente | Siempre |
| `INV-DOC-004` | Una versión publicada es inmutable y todo cambio origina una versión sucesora. | DOC-018 §§3.3, 3.9 y 6.9 | Permanente | Activos publicados |
| `INV-DOC-005` | Una Línea base aprobada conserva una composición inmutable; todo cambio requiere otra Línea base. | DOC-018 §§5.2, 5.6 y 5.9 | Permanente | Líneas base |
| `INV-DOC-006` | Una Publicación se basa en una Línea base previamente aprobada. | DOC-018 §§7.2 y 7.4 | Permanente | Publicaciones |
| `INV-DOC-007` | Los identificadores documentales no se reutilizan. | Guía Editorial §§Identificación y Manual; normalización ADR G1 | Permanente | Documentos identificados |
| `INV-DOC-008` | Las decisiones importantes, cambios y evidencias conservan trazabilidad reconstruible. | Guía Editorial §Trazabilidad; DOC-006 arts. 34, 66 y 91; DOC-018 cap. 9 | Permanente | Siempre |
| `INV-DOC-009` | Los glosarios de dominio especializan la terminología raíz sin contradecirla. | Itinerario Maestro §Etapa 2; D-12 y D-15 | Permanente | Glosarios |
| `INV-DOC-010` | Una SPEC no redefine arquitectura, términos ni invariantes transversales. | DOC-006 §Especificaciones Técnicas; Itinerario Maestro §§8 y Etapa 2 | Permanente | SPEC |

---

## 8. Invariantes operativas y transitorias

| ID | Condición que debe permanecer verdadera | Fuente institucional | Horizonte | Disparador de cierre |
|---|---|---|---|---|
| `INV-OPE-001` | El código funcional permanece prohibido. | Itinerario Maestro; aprobación Founder de G1 | Hasta puerta | Superación y aprobación material de G9 |
| `INV-OPE-002` | `apps/web` se trata como spike histórico reemplazable y no se corrige. | D-10 y línea base G1 | Hasta puerta | Tratamiento autorizado en G7, después de las puertas previas |
| `INV-OPE-003` | Admin, AI y Usuario no son roles vigentes. | Decisión Founder; Itinerario Maestro §7.2 | Hasta decisión | SPEC y política de autorización expresamente aprobadas |
| `INV-OPE-004` | Un agente o implementador no completa decisiones ausentes ni amplía su alcance. | Itinerario Maestro §§Etapa 9 y bloqueos globales | Permanente | Siempre |
| `INV-OPE-005` | Nadie aprueba su propio resultado cuando se requiere revisión independiente. | Itinerario Maestro §Etapa 3 | Permanente | Siempre |
| `INV-OPE-006` | Cerrar una puerta solo habilita la etapa y el alcance que esa puerta declara. | Itinerario Maestro §Puertas consolidadas | Permanente | Siempre |

---

## 9. Variantes autorizables

Estas entradas describen puntos donde la arquitectura permite elegir. No seleccionan todavía una opción concreta.

| ID | Punto de variación | Opciones o rango permitido | Restricciones invariantes | Horizonte |
|---|---|---|---|---|
| `VAR-ARQ-001` | Tecnología interna de un módulo | Implementaciones compatibles con su contrato | `INV-ARQ-001` a `INV-ARQ-005` | Por módulo |
| `VAR-ARQ-002` | Motor cartográfico o adaptador | Alternativas evaluadas por la futura SPEC | `INV-ARQ-008`, independencia tecnológica y contratos | Por incremento |
| `VAR-ARQ-003` | Motor de renderizado | Alternativas compatibles con el contrato de Render | `INV-ARQ-011` | Por versión |
| `VAR-ARQ-004` | Tipo de extensión | Interna o externa | `INV-ARQ-014` a `INV-ARQ-017` | Por extensión |
| `VAR-DOC-001` | Esquema numérico de versión | Dos o tres componentes según naturaleza del activo | `INV-DOC-004`, unicidad y trazabilidad de DOC-018 | Por familia de activo |
| `VAR-DOC-002` | Especialización terminológica | Definición de dominio enlazada a la raíz | `INV-DOC-009` | Por glosario |
| `VAR-DOC-003` | Uso de diagramas | Incluir solo cuando reduzcan ambigüedad | Deben complementar, no sustituir reglas y contratos | Por documento |
| `VAR-IA-001` | Modelo de IA | Local, remoto o combinado | Control humano, seguridad, contratos y trazabilidad | Por capacidad de IA |
| `VAR-IA-002` | Proveedor de IA | Cualquier proveedor compatible con el adaptador aprobado | Independencia de proveedor y `INV-SEG-*` | Por despliegue |
| `VAR-OPE-001` | Modo operativo | Local inicialmente; remoto o distribuido cuando se cumplan sus puertas | No anticipar Cloud, colaboración ni distribución | Por etapa |
| `VAR-PRO-001` | Canal de producto | Web, escritorio o móvil | Arquitectura común, accesibilidad y compatibilidad aprobadas | Por incremento |

Una SPEC puede seleccionar una opción permitida o reducir su rango. No puede ampliar el rango ni vulnerar una invariante sin una excepción aprobada.

---

## 10. Regla de excepciones

### 10.1 Principio

Una excepción es extraordinaria, de alcance mínimo y no constituye precedente permanente. Debe satisfacer DOC-006, artículo 84, y DOC-018, §8.7.

### 10.2 Información obligatoria

| Campo | Contenido requerido |
|---|---|
| Identificador | `EXC-{ÁMBITO}-{NÚMERO}` |
| Regla afectada | ID de invariante, documento y sección |
| Necesidad objetiva | Hecho que impide la conformidad ordinaria |
| Alternativas | Opciones evaluadas y motivo de descarte |
| Impacto | Producto, arquitectura, seguridad, documentación, operación y usuarios |
| Alcance | Activos, versiones, ambientes y participantes afectados |
| Duración | Fecha de expiración, puerta o evento de revisión |
| Control compensatorio | Medidas temporales de reducción de riesgo |
| Reversión | Cómo regresar a conformidad |
| Evidencia | Controles que demostrarán aplicación y cierre |
| Recomendaciones | Autoridades técnicas o documentales competentes |
| Decisión | Autoridad que aprueba o rechaza conforme a la gobernanza vigente |
| Estado | Candidata; Aprobada; Expirada; Revocada; Cerrada |

### 10.3 Límites

Una excepción no puede:

- alterar retroactivamente una Línea base;
- modificar silenciosamente una versión publicada;
- conferir autoridad institucional a una herramienta, agente o contenedor;
- ocultar una contradicción crítica;
- eliminar trazabilidad;
- convertirse en regla general sin una versión sucesora de la fuente correspondiente;
- habilitar código funcional antes de G9 mientras `INV-OPE-001` esté vigente.

Las excepciones a principios fundacionales, autoridad institucional o puertas del itinerario requieren decisión expresa del Founder. Las autoridades técnicas y documentales preparan análisis y recomendaciones dentro de sus competencias; no sustituyen esa decisión final.

---

## 11. Regla de uso por SPEC

Toda futura SPEC incluirá una sección con:

```text
Invariantes aplicables:
- INV-...

Variantes seleccionadas:
- VAR-...: opción y fundamento

Excepciones:
- Ninguna
```

Si una entrada no aplica, la SPEC lo indica y fundamenta. Copiar el texto completo no sustituye la referencia al identificador y a su versión.

---

## 12. Condición de vigencia

Este registro fue aprobado por el Founder mediante D-16 y D-17 y materializado junto con los sucesores que resuelven las colisiones semánticas de G2.

Su vigencia no cierra G2, no abre G3 y no autoriza código funcional. La composición material de la futura Línea base G2 requiere aprobación independiente.
