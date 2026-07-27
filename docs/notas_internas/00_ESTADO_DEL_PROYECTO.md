# Estado del Proyecto

**Código:** INT-000  
**Nombre oficial:** Estado del Proyecto  
**Proyecto:** GeoMotion Studio  
**Tipo de documento:** Documento interno de gobierno y continuidad institucional  
**Estado:** Activo  
**Autoridad responsable:** Dirección Técnica  
**Propietario documental:** Dirección Técnica  
**Idioma oficial:** Español  
**Metodología rectora:** Architecture First  
**Versión del documento:** 1.0.0  
**Fecha de creación:** 2026-07-26  
**Última actualización:** 2026-07-26  
**Próxima revisión:** Al finalizar el siguiente hito arquitectónico relevante  
**Ubicación recomendada:** `docs/notas_internas/00_ESTADO_DEL_PROYECTO.md`

---

# Control del documento

## Identificación

| Campo | Valor |
|---|---|
| Código | INT-000 |
| Título | Estado del Proyecto |
| Clasificación | Interno |
| Autoridad | Dirección Técnica |
| Estado | Activo |
| Naturaleza | Registro institucional vivo |
| Frecuencia de actualización | Por hitos |
| Fuente de verdad sobre | Estado institucional consolidado del proyecto |
| No constituye fuente de verdad sobre | Arquitectura normativa, decisiones ADR o implementación |

## Historial de versiones

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0.0 | 2026-07-26 | Dirección Técnica | Creación inicial del registro institucional del proyecto |

## Reglas de versionado

El documento utilizará versionado semántico adaptado a documentación institucional:

- **Versión mayor:** cambia la estructura del documento, su autoridad, su propósito o el modelo de gobierno del registro.
- **Versión menor:** se incorpora un hito, una misión, una línea base, una decisión consolidada o una nueva sección relevante.
- **Versión de corrección:** se corrigen errores editoriales, referencias, fechas o inconsistencias sin alterar el estado institucional registrado.

## Regla de integridad

Toda modificación deberá preservar:

- la trazabilidad del cambio;
- el estado previo cuando sea relevante;
- la distinción entre hechos aprobados, propuestas y cuestiones pendientes;
- la separación entre arquitectura vigente y posibles evoluciones;
- la autoridad de los documentos normativos originales.

---

# 1. Propósito

Este documento constituye la referencia institucional sobre el estado consolidado de GeoMotion Studio.

Su finalidad es preservar, organizar y hacer consultable el conocimiento acumulado durante la evolución del proyecto, incluyendo:

- el estado general del proyecto;
- las arquitecturas aprobadas;
- las arquitecturas pendientes;
- las misiones realizadas;
- las misiones en curso;
- las decisiones consolidadas;
- las decisiones pendientes;
- los principios arquitectónicos emergentes;
- los riesgos estratégicos;
- las dependencias documentales;
- los hitos alcanzados;
- las líneas de evolución identificadas;
- los próximos pasos posibles;
- la justificación del orden seguido;
- la historia de consolidación arquitectónica.

Este documento responde a la pregunta:

> **¿Cuál es el estado oficial del conocimiento del proyecto en este momento?**

---

# 2. Naturaleza del documento

Este documento es:

- un registro institucional;
- una memoria arquitectónica;
- una herramienta de continuidad;
- un índice razonado del conocimiento vigente;
- un punto de entrada para la Dirección Técnica;
- una fotografía consolidada del proyecto;
- un registro histórico de hitos y transiciones;
- un instrumento para evitar pérdida de contexto.

Este documento no es:

- un documento normativo del Manual de Ingeniería;
- un sustituto de la Arquitectura Modular;
- un sustituto de la Arquitectura de Contratos;
- un sustituto de los ADR;
- una especificación funcional;
- una especificación técnica;
- una hoja de ruta detallada;
- un registro diario de actividad;
- un inventario exhaustivo del código;
- un mecanismo para aprobar decisiones arquitectónicas;
- una autorización implícita para modificar arquitectura vigente.

---

# 3. Autoridad y precedencia documental

## 3.1 Autoridad del Manual de Ingeniería

El Manual de Ingeniería mantiene la autoridad normativa sobre:

- arquitectura;
- principios de ingeniería;
- responsabilidades;
- fronteras;
- reglas;
- restricciones;
- modelos oficiales;
- criterios estructurales.

Este documento no podrá contradecir el Manual de Ingeniería.

## 3.2 Autoridad de los ADR

Cuando el sistema oficial de Architecture Decision Records se encuentre vigente, los ADR mantendrán la autoridad sobre:

- decisiones arquitectónicas relevantes;
- contexto de las decisiones;
- alternativas evaluadas;
- justificación;
- consecuencias;
- sustitución de decisiones anteriores;
- estado de cada decisión.

Este documento podrá resumir o indexar ADR, pero no sustituirlos.

## 3.3 Autoridad de las especificaciones técnicas

Las especificaciones técnicas mantendrán autoridad sobre:

- implementación;
- materialización concreta;
- tecnologías;
- protocolos;
- formatos;
- automatización;
- infraestructura;
- mecanismos de validación técnica.

Este documento registrará su estado, pero no definirá su contenido.

## 3.4 Autoridad del presente documento

El presente documento mantiene autoridad únicamente sobre:

- el estado institucional consolidado;
- el estado reconocido de cada misión;
- el estado reconocido de cada línea base;
- la cronología oficial;
- el inventario de cuestiones abiertas;
- el registro de evoluciones candidatas;
- la situación general del proyecto.

---

# 4. Principios de mantenimiento

## 4.1 Exactitud

Solo se registrarán hechos respaldados por documentos, resoluciones o revisiones formales.

## 4.2 No invención

Cuando una fecha, versión, decisión o referencia no esté disponible, se utilizará:

> **Pendiente de confirmación**

Nunca se completará información por inferencia no verificada.

## 4.3 Separación de estados

Toda entrada deberá distinguir claramente entre:

- vigente;
- aprobada;
- propuesta;
- candidata;
- pendiente;
- en revisión;
- descartada;
- sustituida;
- obsoleta;
- retirada.

## 4.4 Cambios justificados

No se modificarán documentos, estructuras o decisiones por preferencia estilística.

Toda modificación deberá estar justificada por:

- una inconsistencia;
- una necesidad arquitectónica;
- un riesgo;
- una dependencia;
- una mejora de trazabilidad;
- una necesidad de gobierno;
- un cambio aprobado de alcance.

## 4.5 Actualización por hitos

Este documento no se actualizará por cada conversación o actividad menor.

Se actualizará cuando ocurra alguno de los siguientes hechos:

- cierre de una misión;
- aprobación de una línea base;
- inicio de un nuevo ciclo;
- aprobación de un ADR relevante;
- modificación de la arquitectura vigente;
- resolución de una decisión pendiente;
- aparición de un riesgo estratégico;
- cambio en el orden de construcción;
- incorporación o retiro de un documento estructural;
- comienzo de una fase de implementación.

## 4.6 Trazabilidad

Toda entrada importante deberá indicar, cuando sea posible:

- origen;
- responsable;
- fecha;
- estado;
- documentos relacionados;
- impacto;
- decisión asociada;
- próxima acción.

---

# 5. Resumen ejecutivo

## 5.1 Estado general

GeoMotion Studio se encuentra en una fase de consolidación arquitectónica bajo un enfoque **Architecture First**.

El proyecto todavía no ha iniciado una implementación significativa. La prioridad continúa siendo establecer una arquitectura coherente, documentada, verificable y preparada para evolucionar durante muchos años.

A la fecha de esta versión:

- la Arquitectura Modular del Ciclo 1 ha sido desarrollada y aprobada como línea base de trabajo;
- la Arquitectura de Contratos del Ciclo 1 ha sido desarrollada y aprobada;
- la Arquitectura Física del Repositorio permanece pendiente de consolidación final;
- el sistema oficial de ADR permanece pendiente;
- la Minimum Viable Architecture permanece pendiente;
- la implementación permanece subordinada al cierre de las dependencias arquitectónicas necesarias.

## 5.2 Estado ejecutivo por área

| Área | Estado | Comentario |
|---|---|---|
| Identidad del proyecto | Consolidada | La visión, naturaleza y filosofía general del proyecto se consideran establecidas |
| Metodología Architecture First | Vigente | Constituye el criterio rector del proyecto |
| Manual de Ingeniería | En evolución | Existe una base documental amplia y se encuentra en proceso de consolidación |
| Arquitectura Modular | Aprobada | Ciclo 1 concluido |
| Arquitectura de Contratos | Aprobada | Ciclo 1 concluido |
| Arquitectura Física | Pendiente de consolidación | Misión V0.1 aún no cerrada en este registro |
| Sistema ADR | Pendiente | Misión V0.4 no iniciada o no consolidada |
| MVA | Pendiente | Misión V0.5 no iniciada o no consolidada |
| Implementación | No iniciada | No corresponde iniciar sin cerrar las dependencias mínimas |
| Automatización arquitectónica | Pendiente | Se definirá en fases posteriores |
| Validación sistémica | Candidata futura | Fuera del alcance del Ciclo 1 |

## 5.3 Último hito consolidado

**Hito:** Finalización de la Arquitectura de Contratos del Ciclo 1.  
**Resultado:** Aprobada como línea base normativa.  
**Misión:** V0.3.  
**Estado:** Concluida.

## 5.4 Próxima decisión estratégica

Determinar el siguiente paso entre:

- consolidar la Arquitectura Física del Repositorio;
- formalizar el sistema ADR;
- preparar la MVA;
- realizar primero una integración documental de V0.2 y V0.3;
- ejecutar una revisión de dependencias antes de continuar.

La decisión deberá respetar el orden de dependencias aprobado por Dirección Técnica.

---

# 6. Identidad del proyecto

## 6.1 Nombre

GeoMotion Studio

## 6.2 Naturaleza

GeoMotion Studio es una plataforma profesional para la creación, edición y gestión de contenido geoespacial.

## 6.3 Enfoque de desarrollo

El proyecto se desarrolla bajo un enfoque **Architecture First**.

El orden rector es:

```text
Visión
  ↓
Arquitectura
  ↓
Documentación
  ↓
Implementación
  ↓
Código
```

Nunca deberá invertirse este orden.

## 6.4 Fórmulas institucionales

- El código implementa la arquitectura.
- La arquitectura implementa la visión.
- La documentación preserva el conocimiento.
- La implementación no redefine la arquitectura.
- La validación aporta evidencia, pero no modifica por sí misma la arquitectura aprobada.

## 6.5 Objetivo institucional

Construir un sistema profesional, mantenible, escalable, verificable y evolutivo, capaz de sostener una vida útil prolongada sin depender de decisiones circunstanciales de implementación.

---

# 7. Gobierno del proyecto

## 7.1 Estructura de autoridad

```text
Founder / Chief Architect
        ↓
Dirección Técnica
        ↓
Especialistas
        ↓
Documentos especializados
        ↓
Integración
        ↓
Implementación futura
```

## 7.2 Founder / Chief Architect

Responsabilidades:

- preservar la visión;
- definir prioridades estratégicas;
- actuar como autoridad final;
- aprobar cambios mayores;
- resolver conflictos de alto nivel;
- custodiar el propósito general del proyecto.

## 7.3 Dirección Técnica

Responsabilidades:

- preservar coherencia arquitectónica;
- coordinar especialistas;
- revisar entregables;
- aprobar líneas base;
- rechazar desviaciones;
- registrar riesgos;
- mantener trazabilidad;
- integrar documentos;
- evitar cambios innecesarios;
- decidir el orden de las misiones;
- mantener el presente documento.

## 7.4 Especialistas

Los especialistas:

- trabajan dentro de una misión acotada;
- no son autoridad final;
- no rediseñan áreas fuera de alcance;
- elevan inconsistencias;
- proponen alternativas;
- producen entregables para revisión;
- respetan la línea base vigente;
- no aprueban sus propias decisiones.

## 7.5 Regla de intervención de Dirección Técnica

Dirección Técnica no solicitará cambios por:

- preferencias de estilo;
- deseo de perfección abstracta;
- inclinación personal;
- adopción de patrones externos;
- redacción alternativa sin impacto.

Dirección Técnica solicitará cambios únicamente cuando exista:

- contradicción;
- ambigüedad peligrosa;
- violación de alcance;
- pérdida de trazabilidad;
- riesgo arquitectónico;
- inconsistencia normativa;
- dependencia no resuelta;
- incumplimiento de la misión.

---

# 8. Metodología de trabajo especializada

## 8.1 Context Packages

Cada especialista recibe un paquete de contexto que define:

- identidad del proyecto;
- rol;
- estado;
- autoridad;
- información disponible;
- objetivo;
- alcance;
- restricciones;
- entregables;
- dependencias;
- criterios de aceptación;
- mecanismo de escalado.

## 8.2 Revisión progresiva

Los documentos se revisan por partes.

Cada parte puede ser:

- aprobada;
- aprobada con observaciones;
- devuelta para corrección;
- retenida por dependencia;
- elevada para decisión.

## 8.3 Cierre de misión

Una misión se considera cerrada cuando:

- todas sus partes han sido revisadas;
- no existen contradicciones críticas;
- el alcance se ha cumplido;
- los riesgos han sido registrados;
- las evoluciones futuras han sido separadas del modelo vigente;
- Dirección Técnica emite resolución de cierre.

## 8.4 Integración posterior

La aprobación de una misión no implica automáticamente:

- modificación de todos los documentos relacionados;
- creación de ADR;
- inicio de implementación;
- cierre del ciclo general;
- incorporación inmediata al Manual sin revisión editorial.

La integración se realiza de forma controlada.

---

# 9. Restricción metodológica fundamental

La arquitectura de GeoMotion Studio no deberá derivarse de forma automática de metodologías o patrones externos.

No deberá comenzarse desde:

- Domain-Driven Design;
- Clean Architecture;
- Arquitectura Hexagonal;
- CQRS;
- Event-Driven Architecture;
- microservicios;
- patrones de moda;
- frameworks;
- productos de terceros.

La arquitectura debe emerger de GeoMotion Studio.

Los patrones externos podrán utilizarse posteriormente como:

- referencia;
- comparación;
- lenguaje auxiliar;
- validación;
- fuente de ideas.

Nunca como autoridad primaria.

---

# 10. Ecosistema documental

## 10.1 Niveles principales

```text
Identidad del Proyecto
        ↓
Manual de Ingeniería
        ↓
Especificaciones
        ↓
Implementación
        ↓
Validación
```

## 10.2 Documentación interna

La documentación interna de Dirección Técnica sirve para:

- integración;
- continuidad;
- decisiones pendientes;
- ideas;
- observaciones;
- evolución del Manual;
- estado institucional;
- trazabilidad.

No constituye normativa arquitectónica salvo resolución expresa.

## 10.3 Ubicación actual

Ruta recomendada:

```text
docs/
└── notas_internas/
    ├── 00_ESTADO_DEL_PROYECTO.md
    ├── 01_MAPA_DE_INTEGRACIÓN_DOCUMENTAL.md
    ├── 02_INFORME_DE_INTEGRACIÓN_TÉCNICA_v1.md
    ├── 03_EVOLUCIÓN_DEL_MANUAL.md
    ├── 04_DECISIONES_PENDIENTES.md
    ├── 05_IDEAS.md
    └── 06_OBSERVACIONES.md
```

La numeración podrá ajustarse, pero deberá preservar un orden estable y comprensible.

---

# 11. Estado de los documentos internos existentes

## 11.1 INT-000 — Estado del Proyecto

**Estado:** Activo.  
**Función:** Fuente institucional sobre el estado consolidado del proyecto.  
**Acción:** Mantener y actualizar por hitos.

## 11.2 INT-001 — Nota Interna Evolución Manual

**Estado actual:** Activo.  
**Contenido conocido:** Registra recomendaciones estructurales futuras del Manual que no requieren acción inmediata.  
**Valor:** Alto.  
**Recomendación:** Conservar.

Nombre recomendado:

```text
03_EVOLUCIÓN_DEL_MANUAL.md
```

El nombre puede simplificarse porque la ubicación ya indica que se trata de una nota interna.

## 11.3 INT-002 — Mapa de Integración Documental

**Estado:** Activo.  
**Valor:** Alto.  
**Función:** Define organización documental y relaciones entre niveles.  
**Recomendación:** Conservar y actualizar cuando cambie la estructura documental.

## 11.4 INT-003 — Informe de Integración Técnica v1

**Estado:** Activo.  
**Valor:** Medio o alto según vigencia.  
**Función:** Registrar una ronda específica de integración.  
**Recomendación:** Conservar como evidencia histórica.

Cuando existan múltiples informes:

```text
informes_integración/
├── INFORME_DE_INTEGRACIÓN_TÉCNICA_v1.md
├── INFORME_DE_INTEGRACIÓN_TÉCNICA_v2.md
└── ...
```

No deberá sobrescribirse un informe histórico.

## 11.5 INT-004 — Ideas

**Estado:** Activo, pero actualmente vacío o casi vacío.  
**Valor potencial:** Medio.  
**Riesgo:** Convertirse en depósito informal sin gobierno.  
**Recomendación:** Conservar únicamente si se define una estructura mínima.

Toda idea deberá incluir:

- identificador;
- título;
- origen;
- descripción;
- justificación;
- estado;
- relación con el proyecto;
- decisión futura;
- fecha.

Si permanece vacío durante varios ciclos y no se utiliza, podrá retirarse.

## 11.6 INT-005 — Decisiones Pendientes

**Estado:** Activo, pero actualmente vacío o casi vacío.  
**Valor potencial:** Alto.  
**Recomendación:** Conservar.

Debe funcionar como cola temporal anterior a los ADR o como registro de decisiones aún no resueltas.

No debe contener decisiones ya aprobadas.

## 11.7 INT-006 — Observaciones

**Estado:** Activo, pero actualmente vacío o casi vacío.  
**Valor potencial:** Bajo si no se define su alcance.  
**Riesgo:** Duplicar Ideas, Evolución del Manual o Decisiones Pendientes.  
**Recomendación:** Mantener provisionalmente.

Definición recomendada:

> Observaciones registra hallazgos de Dirección Técnica que requieren seguimiento, pero que todavía no constituyen una idea, una decisión pendiente, un riesgo ni una propuesta de evolución.

Si no puede sostener una responsabilidad única, deberá fusionarse o retirarse.

---

# 12. Criterio para conservar documentos internos

Un documento interno deberá existir únicamente si:

- posee una responsabilidad única;
- contiene información activa o histórica valiosa;
- evita pérdida de conocimiento;
- no duplica otro documento;
- tiene propietario;
- tiene reglas de actualización;
- tiene un criterio de cierre o archivo.

Un documento deberá eliminarse, archivarse o fusionarse cuando:

- permanezca vacío sin propósito real;
- duplique información;
- carezca de propietario;
- no pueda distinguirse de otro;
- no tenga reglas de uso;
- genere fragmentación;
- se convierta en un depósito indefinido.

---

# 13. Manual de Ingeniería

## 13.1 Estado general

El Manual de Ingeniería constituye la referencia arquitectónica vigente del proyecto.

Dispone de una base amplia de documentos oficiales.

El número exacto, estado y versión de cada documento deberá mantenerse en un inventario específico.

## 13.2 Estado institucional

| Aspecto | Estado |
|---|---|
| Existencia del Manual | Confirmada |
| Autoridad arquitectónica | Vigente |
| Consolidación completa | Pendiente |
| Integración documental | En progreso |
| Revisión editorial global | Pendiente |
| Trazabilidad con ADR | Pendiente |
| Alineación con V0.2 | Parcialmente consolidada |
| Alineación con V0.3 | Pendiente de integración editorial |

## 13.3 Principio documental rector

> El modelo arquitectónico constituye el conocimiento principal; inventarios y catálogos son evidencia de su aplicación, no su propósito.

## 13.4 Próxima necesidad

Preparar un inventario de todos los documentos oficiales con:

- código;
- nombre;
- versión;
- estado;
- propietario;
- autoridad;
- dependencias;
- fecha de última revisión;
- especialista relacionado;
- línea base;
- observaciones.

---

# 14. Estado de las misiones

## 14.1 Resumen

| Misión | Área | Estado | Resultado |
|---|---|---|---|
| V0.1 | Arquitectura Física del Repositorio | Pendiente de consolidación | No cerrado |
| V0.2 | Arquitectura Modular | Concluida | Aprobada |
| V0.3 | Arquitectura de Contratos | Concluida | Aprobada |
| V0.4 | Sistema ADR | Pendiente | No iniciado o no consolidado |
| V0.5 | Minimum Viable Architecture | Pendiente | No iniciado o no consolidado |

---

# 15. Misión V0.1 — Arquitectura Física del Repositorio

## 15.1 Propósito

Diseñar la organización física del repositorio de GeoMotion Studio para sostener un proyecto profesional durante muchos años.

## 15.2 Alcance conocido

La misión incluye:

- estructura general del monorepo;
- organización de directorios;
- separación entre aplicaciones, paquetes y librerías;
- ubicación de documentación;
- herramientas internas;
- convenciones de nombres;
- límites físicos;
- reglas de crecimiento;
- correspondencia con la arquitectura lógica aprobada.

## 15.3 Restricciones

No debe diseñar:

- arquitectura lógica;
- responsabilidades funcionales;
- contratos;
- APIs;
- eventos;
- servicios;
- funcionalidades;
- implementación;
- código.

## 15.4 Dependencias

La Arquitectura Física debe reflejar la arquitectura aprobada.

Por tanto, depende de:

- Arquitectura Modular;
- reglas de frontera;
- criterios de propiedad;
- decisiones de organización documental;
- posibles decisiones ADR relevantes.

## 15.5 Estado actual

**Estado:** Pendiente de consolidación.

## 15.6 Próxima acción

Reactivar o iniciar formalmente V0.1 utilizando como insumos:

- Arquitectura Modular aprobada;
- Arquitectura de Contratos aprobada;
- estructura actual del repositorio;
- Manual de Ingeniería;
- Mapa de Integración Documental;
- reglas de crecimiento.

## 15.7 Riesgo principal

Definir una estructura física antes de consolidar dependencias podría:

- cristalizar decisiones prematuras;
- crear límites físicos incorrectos;
- inducir una arquitectura por carpetas;
- dificultar la evolución;
- mezclar responsabilidades.

---

# 16. Misión V0.2 — Arquitectura Modular

## 16.1 Estado

**Estado:** Concluida.  
**Resultado:** Aprobada como línea base arquitectónica de trabajo.  
**Ciclo:** Ciclo 1 — Consolidación de Arquitectura Modular.

## 16.2 Propósito

Materializar, precisar y preparar la arquitectura modular inicial para guiar la construcción progresiva del sistema.

La misión no tenía como objetivo rediseñar la arquitectura modular desde cero.

## 16.3 Resultado general

V0.2 entregó una arquitectura modular consolidada capaz de servir como base para:

- contratos;
- arquitectura física;
- validación de dependencias;
- asignación de propiedad;
- evolución del sistema;
- futura implementación.

## 16.4 Capacidades entregadas

La misión produjo:

- mapa modular;
- responsabilidades;
- propiedad;
- fronteras;
- reglas de dependencia;
- encapsulamiento;
- mecanismos de validación;
- análisis de riesgos;
- candidatos a ADR;
- orientación para transferencia a otras misiones.

## 16.5 Evaluación de Dirección Técnica

La misión fue evaluada de forma integral.

Conclusiones:

- mantuvo el enfoque Architecture First;
- evitó convertir carpetas o tecnologías en arquitectura;
- mantuvo responsabilidades separadas;
- proporcionó una base suficiente para V0.3;
- identificó decisiones aún no maduras;
- no presentó contradicciones críticas;
- fue aceptada como línea base.

## 16.6 Cuestiones elevadas o pendientes

Se registraron como cuestiones de Dirección Técnica:

- propiedad documental;
- propiedad de recursos;
- capacidades opcionales;
- extensibilidad;
- temporalidad;
- animación.

Estas cuestiones no invalidaron la línea base modular.

## 16.7 Relación con otras misiones

V0.2 es insumo directo para:

- V0.3 — Arquitectura de Contratos;
- V0.1 — Arquitectura Física;
- V0.4 — ADR;
- V0.5 — MVA.

## 16.8 Estado de integración

- Aprobada conceptualmente.
- Utilizada como Anexo A para V0.3.
- Pendiente de integración editorial total dentro del Manual de Ingeniería.
- Pendiente de formalización de decisiones mediante ADR cuando corresponda.

## 16.9 Documento derivado

Se preparó:

> **Anexo A — Arquitectura Modular Consolidada**

El Anexo A sirvió como referencia contractual para V0.3.

## 16.10 Lecciones aprendidas

- Una misión especializada debe recibir todos los insumos necesarios.
- No debe exigirse a un especialista inferir arquitectura ausente.
- La integración se realiza después del cierre, no durante la elaboración.
- Las cuestiones futuras deben registrarse sin contaminar la línea base vigente.
- La revisión debe distinguir entre problemas reales y preferencias editoriales.

---

# 17. Misión V0.3 — Arquitectura de Contratos

## 17.1 Estado

**Estado:** Concluida.  
**Resultado:** Aprobada como línea base normativa del Ciclo 1.

## 17.2 Propósito

Definir el sistema arquitectónico mediante el cual los módulos de GeoMotion Studio declaran, gobiernan, validan y evolucionan sus colaboraciones autorizadas.

## 17.3 Dependencia principal

V0.3 dependía de la Arquitectura Modular consolidada.

Inicialmente el especialista indicó correctamente que no podía derivar contratos concretos sin disponer de dicha arquitectura.

Dirección Técnica resolvió la dependencia mediante la entrega del Anexo A.

## 17.4 Ajuste metodológico

Dirección Técnica estableció:

> El modelo contractual constituye el entregable principal. El catálogo inicial es evidencia de que el modelo es aplicable.

Esto evitó convertir la misión en un inventario exhaustivo de contratos.

## 17.5 Restricción metodológica

La arquitectura contractual no debía partir de:

- DDD;
- Clean Architecture;
- Arquitectura Hexagonal;
- CQRS;
- Event-Driven Architecture.

El modelo debía emerger de GeoMotion Studio.

## 17.6 Estructura final

La misión se organizó en ocho partes:

1. Fundamentos.
2. Modelo Contractual.
3. Taxonomía Oficial.
4. Reglas Arquitectónicas.
5. Catálogo Inicial.
6. Validaciones Arquitectónicas.
7. Riesgos Arquitectónicos y Mitigación.
8. Consolidación y Conclusiones.

---

# 18. V0.3 — Parte I: Fundamentos

## 18.1 Estado

Aprobada sin modificaciones.

## 18.2 Función

Establecer:

- propósito;
- objetivos;
- alcance;
- posición arquitectónica;
- principios rectores;
- criterio rector del ciclo.

## 18.3 Principios destacados

- derivación arquitectónica;
- encapsulamiento;
- propiedad única;
- estabilidad;
- mínima exposición;
- independencia tecnológica;
- evolución controlada.

## 18.4 Resolución

La Parte I pasó a ser línea base normativa.

Las partes posteriores debían derivarse de ella.

## 18.5 Criterio de revisión

Dirección Técnica decidió no solicitar modificaciones estilísticas.

La sección cumplía su objetivo y no presentaba inconsistencias.

---

# 19. V0.3 — Parte II: Modelo Contractual

## 19.1 Estado

Aprobada sin modificaciones.

## 19.2 Definición central

Un contrato arquitectónico es la especificación normativa mediante la cual un módulo declara una capacidad que puede ser utilizada por consumidores autorizados sin exponer su organización interna.

## 19.3 Distinciones fundamentales

Un contrato:

- no es una implementación;
- no es un mecanismo de transporte;
- no es una API;
- no depende de tecnología;
- representa una colaboración permitida.

## 19.4 Propiedades

Todo contrato debe ser:

- público para consumidores autorizados;
- estable;
- mínimo;
- declarativo;
- independiente.

## 19.5 Elementos conceptuales

El modelo define, entre otros:

- identificador;
- nombre;
- propietario;
- tipo;
- capacidad;
- consumidores;
- frontera;
- entrada permitida;
- salida garantizada;
- precondiciones;
- poscondiciones;
- garantías;
- restricciones;
- evolución;
- estado.

## 19.6 Propiedad contractual

Cada contrato pertenece exclusivamente al módulo que expone la capacidad.

El propietario:

- define;
- garantiza;
- gobierna;
- mantiene compatibilidad.

## 19.7 Consumidor

El consumidor depende del contrato publicado, no de la organización interna del módulo.

## 19.8 Ciclo de vida conceptual

Estados definidos:

- propuesto;
- aprobado;
- vigente;
- en evolución;
- obsoleto;
- retirado.

## 19.9 Principio de Invariancia Contractual

La implementación interna puede evolucionar libremente mientras continúe satisfaciendo las obligaciones de sus contratos públicos.

Una modificación interna no constituye por sí misma razón suficiente para modificar un contrato.

## 19.10 Evaluación

Dirección Técnica registró este principio como candidato consolidado.

---

# 20. V0.3 — Parte III: Taxonomía Oficial

## 20.1 Estado

Aprobada sin modificaciones.

## 20.2 Propósito

Proporcionar una clasificación arquitectónica uniforme para las colaboraciones entre módulos.

## 20.3 Principios de clasificación

- exclusividad;
- coherencia arquitectónica;
- estabilidad;
- independencia tecnológica.

## 20.4 Categorías oficiales

- Contrato de Capacidad;
- Contrato de Servicio;
- Contrato de Consulta;
- Contrato de Comando;
- Contrato de Evento;
- Contrato de Integración.

## 20.5 Categoría raíz

Contrato de Capacidad se define como categoría raíz.

La capacidad responde:

> ¿Qué expone el módulo?

Las demás categorías responden:

> ¿Cómo se manifiesta arquitectónicamente esa capacidad?

## 20.6 Categorías descartadas

No se consideran categorías arquitectónicas independientes:

- repositorio;
- adaptador;
- infraestructura;
- mensajería;
- síncrono;
- asíncrono;
- remoto;
- local.

Estas expresan implementación o infraestructura.

## 20.7 Evaluación

Dirección Técnica aceptó la taxonomía y registró la categoría raíz como principio candidato.

---

# 21. V0.3 — Parte IV: Reglas Arquitectónicas

## 21.1 Estado

Aprobada sin modificaciones.

## 21.2 Regla de encapsulamiento

Los contratos son el único mecanismo autorizado para atravesar una frontera arquitectónica.

## 21.3 Regla de fronteras

Un contrato no puede:

- crear dependencias nuevas;
- alterar dirección de dependencias;
- eludir restricciones modulares.

## 21.4 Regla de propiedad

Cada contrato posee un único propietario arquitectónico.

## 21.5 Regla de mínima exposición

Solo se publica la información imprescindible.

## 21.6 Regla de independencia tecnológica

Un contrato no contiene referencias normativas a:

- protocolos;
- transporte;
- serialización;
- frameworks;
- librerías;
- persistencia;
- plataformas.

## 21.7 Regla de consistencia contractual

Un módulo solo puede publicar capacidades correspondientes a su responsabilidad.

## 21.8 Regla de compatibilidad evolutiva

La ruptura de compatibilidad es una excepción arquitectónica.

## 21.9 Regla de idempotencia arquitectónica

La idempotencia se exige únicamente cuando deriva de la semántica de la capacidad.

No es una obligación universal.

## 21.10 Regla de gestión de errores

El contrato define condiciones arquitectónicas de incumplimiento, no mecanismos técnicos de recuperación.

## 21.11 Regla de observabilidad contractual

Las garantías deben ser verificables objetivamente.

## 21.12 Regla de trazabilidad

Cada contrato mantiene relación con:

- propietario;
- responsabilidad;
- categoría;
- dependencia autorizada;
- especificaciones futuras.

## 21.13 Regla de gobernanza

Los cambios relevantes requieren revisión.

## 21.14 Familias normativas candidatas

Se identificó una posible clasificación:

- reglas estructurales;
- reglas evolutivas.

Dirección Técnica decidió no incorporarla todavía, pero la registró para consolidación futura.

---

# 22. V0.3 — Parte V: Catálogo Inicial

## 22.1 Estado

Aprobada sin modificaciones.

## 22.2 Propósito

Demostrar la aplicabilidad del modelo.

No inventariar todos los contratos.

## 22.3 Naturaleza

El catálogo es:

- representativo;
- demostrativo;
- normativo como ejemplo;
- no exhaustivo;
- no funcional;
- no una prioridad de implementación.

## 22.4 Estructura oficial de un contrato

Se definieron secciones para:

- identificación;
- contexto;
- descripción;
- condiciones;
- evolución;
- trazabilidad.

## 22.5 Criterio de suficiencia

La calidad de la demostración prevalece sobre la cantidad de contratos.

## 22.6 Evolución candidata

Se propuso distinguir:

- Catálogo Arquitectónico;
- Registro Operativo de Contratos.

Dirección Técnica registró la propuesta como cuestión futura de gobernanza documental.

---

# 23. V0.3 — Parte VI: Validaciones Arquitectónicas

## 23.1 Estado

Aprobada sin modificaciones.

## 23.2 Propósito

Definir cómo verificar objetivamente la conformidad arquitectónica de los contratos.

## 23.3 Principios de validación

- objetividad;
- trazabilidad;
- independencia tecnológica;
- repetibilidad.

## 23.4 Validaciones obligatorias

- propiedad;
- responsabilidad;
- fronteras;
- clasificación;
- encapsulamiento;
- trazabilidad;
- evolución.

## 23.5 Estados de no conformidad

- observación;
- no conformidad;
- incidencia arquitectónica crítica.

## 23.6 Evidencias

Toda validación debe conservar:

- contrato;
- reglas verificadas;
- resultado;
- no conformidades;
- decisiones de resolución.

## 23.7 Evolución candidata

Se identificó la posible futura:

> Validación Arquitectónica Sistémica

Esta permitiría analizar:

- ciclos;
- concentración de consumidores;
- redundancia;
- pérdida de cohesión;
- propiedades emergentes del ecosistema contractual.

---

# 24. V0.3 — Parte VII: Riesgos Arquitectónicos

## 24.1 Estado

Aprobada sin modificaciones.

## 24.2 Principios de gestión

- prevención;
- detección temprana;
- mitigación proporcional;
- evolución controlada.

## 24.3 Riesgos identificados

- erosión del encapsulamiento;
- expansión indebida de responsabilidades;
- acoplamiento contractual excesivo;
- proliferación de contratos;
- fragmentación del modelo;
- evolución incompatible;
- pérdida de trazabilidad.

## 24.4 Conclusión relevante

La mayoría de los riesgos no provienen de debilidades del modelo, sino de desviaciones en su aplicación.

## 24.5 Principio orientador

La sostenibilidad depende más de la disciplina de gobernanza que del crecimiento continuo de la normativa.

---

# 25. V0.3 — Parte VIII: Consolidación y Conclusiones

## 25.1 Estado

Aprobada sin modificaciones.

## 25.2 Función

Cerrar institucionalmente el documento sin introducir nuevas reglas.

## 25.3 Resultado

La Arquitectura de Contratos quedó consolidada como un cuerpo normativo compuesto por:

- fundamentos;
- modelo;
- taxonomía;
- reglas;
- catálogo;
- validaciones;
- riesgos.

## 25.4 Relación con Arquitectura Modular

La Arquitectura de Contratos:

- deriva de la Arquitectura Modular;
- no redefine responsabilidades;
- no modifica fronteras;
- no altera dependencias;
- regula colaboraciones autorizadas.

## 25.5 Cierre

Dirección Técnica declaró:

- Parte VIII aprobada;
- misión V0.3 concluida;
- documento preparado para integración editorial;
- evoluciones futuras registradas sin alterar la línea base.

---

# 26. Evaluación integral de V0.3

## 26.1 Resultado

**Aprobada.**

## 26.2 Fortalezas

- disciplina arquitectónica;
- separación de niveles;
- estabilidad conceptual;
- control de alcance;
- correcta relación con Dirección Técnica;
- ausencia de deriva tecnológica;
- buena trazabilidad;
- crecimiento progresivo del modelo;
- capacidad de distinguir vigente de futuro.

## 26.3 Ausencia de correcciones innecesarias

Ninguna parte fue modificada por preferencia editorial.

La aprobación sin cambios se debió a que:

- cumplía la misión;
- no presentaba inconsistencias;
- respetaba la Arquitectura Modular;
- mantenía el nivel arquitectónico;
- separaba evoluciones futuras.

## 26.4 Impacto

GeoMotion Studio dispone ahora de:

- una arquitectura que define los módulos;
- una arquitectura que define cómo colaboran;
- un marco para validar contratos;
- un marco para gobernar evolución contractual;
- una base para futuras especificaciones.

---

# 27. Misión V0.4 — Sistema ADR

## 27.1 Propósito

Diseñar el sistema oficial de Architecture Decision Records.

## 27.2 Alcance esperado

- propósito;
- criterios de creación;
- formato;
- estructura;
- nomenclatura;
- numeración;
- estados;
- ciclo de vida;
- propuesta;
- revisión;
- aprobación;
- rechazo;
- sustitución;
- relación con Manual;
- trazabilidad;
- propiedad;
- decisiones urgentes;
- decisiones experimentales;
- mantenimiento;
- prevención de contradicciones.

## 27.3 Restricciones

No utilizar ADR para:

- decisiones triviales;
- decisiones reversibles de bajo impacto;
- reemplazar el Manual;
- reabrir automáticamente decisiones aprobadas.

## 27.4 Estado actual

**Pendiente.**

## 27.5 Dependencias

V0.4 deberá tomar como insumo:

- decisiones surgidas de V0.2;
- decisiones surgidas de V0.3;
- estructura de gobierno;
- Mapa de Integración Documental;
- reglas de autoridad;
- futuro orden del repositorio.

## 27.6 Riesgo

Crear el sistema ADR demasiado pronto podría formalizar categorías aún inmaduras.

Crearlo demasiado tarde podría provocar pérdida de decisiones.

El momento actual es adecuado para evaluar su inicio.

---

# 28. Misión V0.5 — Minimum Viable Architecture

## 28.1 Propósito

Definir el conjunto mínimo de capacidades, estructuras y mecanismos necesarios para demostrar que la arquitectura puede implementarse, integrarse, ejecutarse y evolucionar correctamente.

## 28.2 No es

- un MVP comercial;
- un producto mínimo;
- una selección de funcionalidades de usuario.

## 28.3 Alcance esperado

- alcance MVA;
- capacidades mínimas;
- subsistemas;
- dependencias;
- orden de construcción;
- hitos;
- pruebas arquitectónicas;
- riesgos de incertidumbre;
- validación;
- criterios de entrada y salida;
- aceptación global;
- observabilidad;
- automatización;
- integración;
- validación de fronteras;
- validación de contratos;
- elementos simulables;
- separación entre imprescindible y postergable.

## 28.4 Estado actual

**Pendiente.**

## 28.5 Dependencias

La MVA deberá apoyarse en:

- Arquitectura Modular;
- Arquitectura de Contratos;
- Arquitectura Física suficiente;
- decisiones ADR mínimas;
- criterios de validación.

## 28.6 Riesgo

Iniciar V0.5 sin arquitectura física y sin gobierno de decisiones podría convertir la MVA en un plan de implementación prematuro.

---

# 29. Orden de dependencias propuesto

El orden de trabajo consolidado fue:

1. Cerrar V0.2.
2. Aprobar Arquitectura Modular como línea base.
3. Ejecutar V0.3.
4. Ejecutar V0.1.
5. Ejecutar V0.4.
6. Ejecutar V0.5.

## 29.1 Estado respecto al plan

- Paso 1: completado.
- Paso 2: completado.
- Paso 3: completado.
- Paso 4: pendiente.
- Paso 5: pendiente.
- Paso 6: pendiente.

## 29.2 Próxima acción recomendada

La siguiente misión natural es V0.1 — Arquitectura Física del Repositorio.

Antes de iniciarla, Dirección Técnica deberá:

- consolidar los insumos;
- verificar el árbol actual;
- entregar Arquitectura Modular;
- entregar reglas contractuales relevantes;
- definir claramente qué no debe diseñar;
- mantener la estructura física subordinada a la lógica.

---

# 30. Líneas base vigentes

## 30.1 Arquitectura Modular

**Estado:** Aprobada.  
**Ciclo:** Ciclo 1.  
**Autoridad:** Dirección Técnica.  
**Uso:** Base para contratos, repositorio, ADR y MVA.

## 30.2 Arquitectura de Contratos

**Estado:** Aprobada.  
**Ciclo:** Ciclo 1.  
**Autoridad:** Dirección Técnica.  
**Uso:** Base normativa para colaboración entre módulos.

## 30.3 Estado del Proyecto

**Estado:** Activo.  
**Naturaleza:** Registro institucional.  
**Uso:** Continuidad, integración y seguimiento.

---

# 31. Registro de principios arquitectónicos

## PA-001 — La arquitectura precede a la implementación

**Estado:** Vigente.  
**Origen:** Metodología Architecture First.  
**Descripción:** La implementación debe materializar decisiones arquitectónicas previamente definidas.  
**Impacto:** Todo el proyecto.  
**Autoridad:** Manual de Ingeniería.

## PA-002 — El código implementa la arquitectura

**Estado:** Vigente.  
**Origen:** Identidad de ingeniería.  
**Descripción:** El código no constituye la fuente primaria de la arquitectura.  
**Impacto:** Desarrollo futuro.

## PA-003 — La arquitectura implementa la visión

**Estado:** Vigente.  
**Origen:** Identidad del proyecto.  
**Descripción:** La arquitectura debe permanecer subordinada al propósito del producto.  
**Impacto:** Todas las decisiones.

## PA-004 — La documentación preserva el conocimiento

**Estado:** Vigente.  
**Origen:** Filosofía de ingeniería.  
**Descripción:** La documentación es un activo estratégico y forma parte del producto.  
**Impacto:** Manual, ADR, notas internas y especificaciones.

## PA-005 — Los modelos prevalecen sobre los inventarios

**Estado:** Vigente.  
**Origen:** Revisión de V0.3.  
**Descripción:** El modelo arquitectónico es el conocimiento principal; catálogos e inventarios demuestran su aplicación.  
**Impacto:** Contratos, módulos, repositorio y MVA.

## PA-006 — Un contrato no es una API

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** La API es una posible materialización técnica; el contrato es una especificación arquitectónica.  
**Impacto:** Contratos y especificaciones.

## PA-007 — Un contrato no es un mecanismo de transporte

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** Protocolos y transportes no definen la naturaleza del contrato.  
**Impacto:** Integración futura.

## PA-008 — Propiedad contractual única

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** Todo contrato pertenece al módulo propietario de la capacidad.  
**Impacto:** Gobierno y evolución.

## PA-009 — Dependencia sobre contrato

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** El consumidor depende de las garantías públicas, no de la organización interna del proveedor.  
**Impacto:** Encapsulamiento.

## PA-010 — Invariancia contractual

**Estado:** Vigente como principio consolidado.  
**Origen:** V0.3 Parte II.  
**Descripción:** La evolución interna no implica automáticamente evolución contractual.  
**Impacto:** Compatibilidad y autonomía modular.

## PA-011 — Contrato de Capacidad como raíz

**Estado:** Vigente.  
**Origen:** V0.3 Parte III.  
**Descripción:** Toda colaboración contractual representa una capacidad expuesta.  
**Impacto:** Taxonomía.

## PA-012 — El contrato no modifica la Arquitectura Modular

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** El contrato materializa colaboraciones autorizadas, no crea nuevas dependencias.  
**Impacto:** Fronteras.

## PA-013 — Mínima exposición

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** Solo se publica la información imprescindible.  
**Impacto:** Acoplamiento.

## PA-014 — Independencia tecnológica contractual

**Estado:** Vigente.  
**Origen:** V0.3.  
**Descripción:** La definición arquitectónica no depende de tecnologías.  
**Impacto:** Longevidad del modelo.

## PA-015 — Validación arquitectónica previa

**Estado:** Vigente.  
**Origen:** V0.3 Parte VI.  
**Descripción:** La conformidad arquitectónica precede a la implementación.  
**Impacto:** Flujo de aprobación.

## PA-016 — Gobernanza sobre expansión normativa

**Estado:** Principio orientador.  
**Origen:** V0.3 Parte VII.  
**Descripción:** La sostenibilidad depende más del cumplimiento consistente que de añadir reglas.  
**Impacto:** Gobierno.

## PA-017 — Cambios solo con justificación

**Estado:** Vigente.  
**Origen:** Dirección Técnica.  
**Descripción:** No se modifican documentos o arquitectura por preferencia.  
**Impacto:** Revisión técnica.

## PA-018 — La estructura física refleja la arquitectura

**Estado:** Vigente.  
**Origen:** Misión V0.1.  
**Descripción:** Las carpetas no definen por sí mismas la arquitectura.  
**Impacto:** Monorepo.

---

# 32. Decisiones consolidadas

## DC-001 — Architecture First como metodología rectora

**Estado:** Aprobada.  
**Impacto:** Global.

## DC-002 — Dirección Técnica como integrador

**Estado:** Aprobada.  
**Impacto:** Gobierno.

## DC-003 — Especialistas subordinados a línea base

**Estado:** Aprobada.  
**Impacto:** Misiones.

## DC-004 — Arquitectura Modular como dependencia de Contratos

**Estado:** Aprobada.  
**Impacto:** V0.2 y V0.3.

## DC-005 — Modelo contractual como entregable principal

**Estado:** Aprobada.  
**Impacto:** V0.3.

## DC-006 — Catálogo no exhaustivo

**Estado:** Aprobada.  
**Impacto:** V0.3 Parte V.

## DC-007 — No iniciar implementación significativa

**Estado:** Vigente.  
**Impacto:** Proyecto.

## DC-008 — Estado del Proyecto como documento interno

**Estado:** Aprobada.  
**Impacto:** Gobierno documental.

---

# 33. Decisiones pendientes

Las decisiones pendientes deberán registrarse también en `DECISIONES_PENDIENTES.md`.

## DP-001 — Propiedad documental

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Cómo se asignará propiedad a documentos oficiales y derivados?  
**Impacto:** Manual, contratos, ADR y mantenimiento.

## DP-002 — Propiedad de recursos

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Cómo se gobiernan recursos compartidos y especializados?  
**Impacto:** Arquitectura Modular y Física.

## DP-003 — Capacidades opcionales

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Cómo se representan capacidades no siempre presentes?  
**Impacto:** Extensibilidad y MVA.

## DP-004 — Extensibilidad

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Qué modelo oficial gobernará extensiones futuras?  
**Impacto:** Módulos, contratos y plugins.

## DP-005 — Temporalidad

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Dónde reside la responsabilidad temporal?  
**Impacto:** Dominio, animación y reproducción.

## DP-006 — Animación

**Origen:** V0.2.  
**Estado:** Pendiente.  
**Pregunta:** ¿Cómo se modelará sin contaminar responsabilidades?  
**Impacto:** Capacidades especializadas.

## DP-007 — Familias de reglas contractuales

**Origen:** V0.3.  
**Estado:** Candidata, no urgente.  
**Pregunta:** ¿Conviene explicitar reglas estructurales y evolutivas?  
**Impacto:** Claridad documental.

## DP-008 — Catálogo y Registro Operativo

**Origen:** V0.3.  
**Estado:** Candidata futura.  
**Pregunta:** ¿Debe separarse el catálogo normativo del inventario de contratos implementados?  
**Impacto:** Gobierno documental y desarrollo.

## DP-009 — Validación sistémica

**Origen:** V0.3.  
**Estado:** Candidata futura.  
**Pregunta:** ¿Cuándo incorporar validaciones del ecosistema completo?  
**Impacto:** Escalabilidad de gobierno.

## DP-010 — Orden inmediato de la siguiente misión

**Origen:** Dirección Técnica.  
**Estado:** Pendiente de resolución.  
**Pregunta:** ¿Se inicia V0.1 directamente o se realiza una integración editorial previa?  
**Impacto:** Plan próximo.

---

# 34. Evoluciones candidatas

## EC-001 — Reglas estructurales y evolutivas

No altera el modelo.

Puede mejorar:

- navegación;
- auditoría;
- comprensión;
- formación.

Debe incorporarse solo si aporta claridad real.

## EC-002 — Catálogo Arquitectónico

Contendría ejemplos normativos representativos.

## EC-003 — Registro Operativo de Contratos

Contendría:

- todos los contratos implementados;
- versión;
- estado;
- código;
- especificación;
- trazabilidad;
- consumidores.

## EC-004 — Validación Arquitectónica Sistémica

Analizaría:

- ciclos;
- redundancias;
- concentración;
- cohesión;
- propagación de cambios;
- dependencias emergentes.

## EC-005 — Documento Procesos de Ingeniería

Propuesta registrada para una etapa posterior a la versión 1.0 del Manual.

Podría centralizar:

- calidad;
- pruebas;
- CI;
- CD;
- releases;
- automatización;
- documentación técnica;
- revisión.

No debe implementarse antes de que reduzca complejidad real.

## EC-006 — Inventario documental automatizado

En el futuro podrá extraer:

- estados;
- versiones;
- propietarios;
- dependencias;
- enlaces;
- fechas.

No pertenece al Ciclo 1.

---

# 35. Riesgos estratégicos

## RE-001 — Pérdida de conocimiento

**Probabilidad:** Alta sin registro institucional.  
**Impacto:** Alto.  
**Mitigación:** Mantener este documento y trazabilidad.

## RE-002 — Fragmentación documental

**Probabilidad:** Media.  
**Impacto:** Alto.  
**Mitigación:** Responsabilidad única, mapa documental y revisión.

## RE-003 — Duplicación de autoridad

**Probabilidad:** Media.  
**Impacto:** Alto.  
**Mitigación:** Definir precedencia documental.

## RE-004 — Implementación prematura

**Probabilidad:** Media.  
**Impacto:** Crítico.  
**Mitigación:** Cerrar arquitectura mínima antes de código significativo.

## RE-005 — Arquitectura por carpetas

**Probabilidad:** Media durante V0.1.  
**Impacto:** Alto.  
**Mitigación:** Subordinar estructura física a arquitectura lógica.

## RE-006 — Uso excesivo de patrones externos

**Probabilidad:** Media.  
**Impacto:** Alto.  
**Mitigación:** Restricción metodológica explícita.

## RE-007 — Proliferación de documentos vacíos

**Probabilidad:** Media.  
**Impacto:** Medio.  
**Mitigación:** Revisar responsabilidad y uso de notas internas.

## RE-008 — Formalización prematura de ADR

**Probabilidad:** Baja o media.  
**Impacto:** Medio.  
**Mitigación:** Diseñar primero el sistema oficial.

## RE-009 — Retraso del sistema ADR

**Probabilidad:** Media.  
**Impacto:** Alto.  
**Mitigación:** Iniciar V0.4 después de V0.1 o cuando DT lo determine.

## RE-010 — Catálogo contractual exhaustivo

**Probabilidad:** Baja tras V0.3.  
**Impacto:** Medio.  
**Mitigación:** Mantener catálogo demostrativo.

---

# 36. Deuda arquitectónica reconocida

## DA-001 — Integración editorial de V0.2

**Estado:** Abierta.  
**Naturaleza:** Documental.  
**Impacto:** Medio.

## DA-002 — Integración editorial de V0.3

**Estado:** Abierta.  
**Naturaleza:** Documental.  
**Impacto:** Medio.

## DA-003 — Formalización de decisiones

**Estado:** Abierta.  
**Naturaleza:** Gobernanza.  
**Impacto:** Alto.

## DA-004 — Inventario completo del Manual

**Estado:** Abierta.  
**Naturaleza:** Documental.  
**Impacto:** Medio.

## DA-005 — Revisión de notas internas vacías

**Estado:** Abierta.  
**Naturaleza:** Gobierno documental.  
**Impacto:** Bajo.

---

# 37. Hitos del proyecto

## HITO-001 — Adopción de Architecture First

**Estado:** Completado.  
**Impacto:** Fundacional.  
**Resultado:** Se establece el orden visión → arquitectura → documentación → implementación → código.

## HITO-002 — Creación del Manual de Ingeniería

**Estado:** Completado en su base inicial.  
**Impacto:** Fundacional.  
**Resultado:** Se establece la referencia arquitectónica del proyecto.

## HITO-003 — Organización del trabajo por especialistas

**Estado:** Completado.  
**Impacto:** Alto.  
**Resultado:** Se definen misiones especializadas y revisión por Dirección Técnica.

## HITO-004 — Consolidación de Arquitectura Modular

**Estado:** Completado.  
**Misión:** V0.2.  
**Resultado:** Línea base aprobada.

## HITO-005 — Creación del Anexo A

**Estado:** Completado.  
**Resultado:** V0.3 recibe la Arquitectura Modular consolidada como insumo.

## HITO-006 — Consolidación de Arquitectura de Contratos

**Estado:** Completado.  
**Misión:** V0.3.  
**Resultado:** Línea base normativa aprobada.

## HITO-007 — Creación del Estado del Proyecto

**Estado:** Completado.  
**Resultado:** Se establece memoria institucional centralizada.

## HITO-008 — Arquitectura Física

**Estado:** Pendiente.

## HITO-009 — Sistema ADR

**Estado:** Pendiente.

## HITO-010 — MVA

**Estado:** Pendiente.

## HITO-011 — Inicio de implementación

**Estado:** No autorizado todavía.

---

# 38. Cronología consolidada

## Etapa 1 — Identidad y Manual

- Se define GeoMotion Studio.
- Se adopta Architecture First.
- Se crea el Manual de Ingeniería.
- Se reconoce la documentación como activo estratégico.

## Etapa 2 — Especialización

- Se crean misiones V0.1 a V0.5.
- Se asignan responsabilidades.
- Dirección Técnica actúa como integrador.
- Se evita que especialistas sean autoridad final.

## Etapa 3 — Arquitectura Modular

- Se desarrolla V0.2.
- Se revisan entregas progresivas.
- Se consolidan módulos, fronteras y dependencias.
- Se aprueba la línea base modular.
- Se registran cuestiones pendientes.

## Etapa 4 — Arquitectura de Contratos

- V0.3 identifica dependencia de la Arquitectura Modular.
- Dirección Técnica entrega Anexo A.
- Se ajusta el foco hacia el modelo contractual.
- Se aprueban ocho partes.
- Se cierra la misión.
- Se registran principios y evoluciones futuras.

## Etapa 5 — Gobierno del conocimiento

- Se reconoce la necesidad de preservar el estado institucional.
- Se revisa la carpeta de notas internas.
- Se decide crear `00_ESTADO_DEL_PROYECTO.md`.
- Se establece un registro vivo por hitos.

## Etapa 6 — Próxima fase

Pendiente de decisión:

- V0.1;
- integración editorial;
- V0.4;
- V0.5.

---

# 39. Próximos objetivos

## Objetivo inmediato 1

Aprobar y guardar este documento como fuente institucional.

## Objetivo inmediato 2

Revisar la numeración de `docs/notas_internas`.

## Objetivo inmediato 3

Evaluar documentos internos vacíos:

- Ideas;
- Decisiones Pendientes;
- Observaciones.

## Objetivo inmediato 4

Preparar el Context Package definitivo para V0.1.

## Objetivo inmediato 5

Cerrar la Arquitectura Física.

## Objetivo posterior 1

Diseñar el sistema ADR.

## Objetivo posterior 2

Formalizar decisiones surgidas de V0.2 y V0.3.

## Objetivo posterior 3

Definir la MVA.

## Objetivo posterior 4

Preparar el inicio controlado de implementación.

---

# 40. Criterios para elegir el siguiente paso

La siguiente misión deberá elegirse evaluando:

- dependencias;
- riesgo de pérdida de decisiones;
- necesidad de estructura física;
- preparación para MVA;
- carga documental;
- capacidad de validación;
- coste de retraso;
- reversibilidad.

## 40.1 Iniciar V0.1 cuando

- Arquitectura Modular esté disponible;
- Arquitectura de Contratos esté disponible;
- el árbol real del repositorio haya sido observado;
- las restricciones estén claras;
- no se pretenda diseñar lógica mediante carpetas.

## 40.2 Iniciar V0.4 cuando

- exista suficiente material decisional;
- se necesite formalizar decisiones;
- la estructura de gobierno esté preparada;
- el Manual pueda enlazar ADR.

## 40.3 Iniciar V0.5 cuando

- módulos, contratos y repositorio mínimo estén claros;
- existan decisiones esenciales;
- puedan definirse pruebas arquitectónicas;
- se pueda distinguir imprescindible de postergable.

---

# 41. Estado del repositorio

## 41.1 Estructura observada

La raíz contiene, entre otros:

```text
.github/
apps/
assets/
docs/
ejemplos/
packages/
scripts/
CHANGELOG.md
LICENSE
README.md
VALORES.md
```

Dentro de `docs/` se observan:

```text
adr/
ejemplos/
imágenes/
ingeniería/
notas_internas/
referencias/
GUÍA_EDITORIAL.md
README.md
```

## 41.2 Estado

La estructura actual constituye un punto de partida.

No debe considerarse todavía una arquitectura física consolidada.

## 41.3 Restricción

La presencia de carpetas no prueba:

- separación real;
- propiedad;
- límites;
- dependencias;
- encapsulamiento;
- arquitectura.

## 41.4 Próxima evaluación

V0.1 deberá determinar:

- qué conservar;
- qué renombrar;
- qué mover;
- qué crear;
- qué prohibir;
- cómo crecer;
- cómo reflejar módulos;
- cómo preservar documentación.

---

# 42. Estado de implementación

## 42.1 Situación

No se registra una implementación arquitectónicamente autorizada como fase activa.

## 42.2 Criterio de inicio

La implementación podrá comenzar cuando Dirección Técnica determine que existe:

- arquitectura modular suficiente;
- contratos suficientes;
- arquitectura física mínima;
- decisiones críticas resueltas;
- MVA definida;
- validación básica;
- trazabilidad.

## 42.3 Regla

La existencia de código experimental no implica el inicio oficial de implementación.

---

# 43. Estado de validación

## 43.1 Validación arquitectónica contractual

Definida conceptualmente en V0.3.

## 43.2 Automatización

Pendiente.

## 43.3 Validación sistémica

Candidata futura.

## 43.4 MVA

Pendiente.

---

# 44. Registro de preguntas abiertas

## PREG-001

¿Cuál es el siguiente paso óptimo después de V0.3?

## PREG-002

¿Debe V0.1 ejecutarse antes de V0.4?

## PREG-003

¿Qué decisiones de V0.2 y V0.3 requieren ADR?

## PREG-004

¿Cómo se integrarán editorialmente las líneas base en el Manual?

## PREG-005

¿Qué documentos internos vacíos deben conservarse?

## PREG-006

¿Cuándo debe crearse el Registro Operativo de Contratos?

## PREG-007

¿Cuándo será necesaria la validación sistémica?

## PREG-008

¿Cómo se gobernará la propiedad documental?

---

# 45. Registro de lecciones aprendidas

## LA-001 — No exigir arquitectura ausente

Un especialista no debe derivar contratos, repositorio o validación sin recibir las líneas base necesarias.

## LA-002 — Separar vigente de futuro

Las buenas ideas no deben incorporarse automáticamente.

## LA-003 — No corregir por corregir

La revisión debe justificar cambios.

## LA-004 — El catálogo no es el modelo

Los inventarios no deben desplazar al conocimiento arquitectónico.

## LA-005 — La documentación necesita gobierno

A medida que crece el proyecto, la continuidad requiere registros institucionales.

## LA-006 — La aprobación es gradual

Cada parte puede consolidarse sin esperar al documento completo, pero el cierre requiere evaluación integral.

## LA-007 — La arquitectura modular precede a contratos

Las colaboraciones dependen de fronteras y responsabilidades conocidas.

## LA-008 — El repositorio no define la arquitectura

La estructura física debe reflejar decisiones previas.

---

# 46. Índice de artefactos relevantes

## Arquitectura

- Manual de Ingeniería.
- Arquitectura Modular.
- Arquitectura de Contratos.
- Anexo A — Arquitectura Modular Consolidada.

## Gobierno

- Estado del Proyecto.
- Mapa de Integración Documental.
- Informe de Integración Técnica.
- Decisiones Pendientes.
- Evolución del Manual.
- Ideas.
- Observaciones.

## Futuro

- ADR.
- MVA.
- Especificaciones técnicas.
- Registro Operativo de Contratos.
- Evidencias de validación.

---

# 47. Plantilla para registrar una misión

```markdown
## Misión V0.X — Nombre

### Identificación

- Código:
- Nombre:
- Especialista:
- Autoridad:
- Fecha de inicio:
- Fecha de cierre:
- Estado:
- Resultado:

### Propósito

### Alcance

### Restricciones

### Dependencias

### Entregables

### Partes aprobadas

### Decisiones

### Principios emergentes

### Riesgos

### Cuestiones abiertas

### Evoluciones futuras

### Evaluación de Dirección Técnica

### Impacto sobre el Manual

### Impacto sobre otras misiones

### Lecciones aprendidas

### Próxima acción
```

---

# 48. Plantilla para registrar un principio

```markdown
## PA-XXX — Nombre

**Estado:**  
**Origen:**  
**Fecha:**  
**Autoridad:**  
**Descripción:**  
**Justificación:**  
**Impacto:**  
**Documentos relacionados:**  
**Decisiones relacionadas:**  
**Excepciones:**  
**Próxima revisión:**  
```

---

# 49. Plantilla para registrar una decisión pendiente

```markdown
## DP-XXX — Nombre

**Estado:** Pendiente  
**Origen:**  
**Fecha:**  
**Responsable:**  
**Pregunta:**  
**Contexto:**  
**Alternativas conocidas:**  
**Impacto:**  
**Dependencias:**  
**Riesgo de no decidir:**  
**Momento recomendado:**  
**ADR futuro:** Sí / No / Por determinar  
```

---

# 50. Plantilla para registrar un hito

```markdown
## HITO-XXX — Nombre

**Estado:**  
**Fecha:**  
**Responsable:**  
**Misión relacionada:**  
**Descripción:**  
**Resultado:**  
**Líneas base afectadas:**  
**Documentos afectados:**  
**Decisiones derivadas:**  
**Riesgos cerrados:**  
**Riesgos abiertos:**  
**Próximo hito:**  
```

---

# 51. Plantilla para registrar un riesgo

```markdown
## RE-XXX — Nombre

**Estado:**  
**Probabilidad:**  
**Impacto:**  
**Origen:**  
**Descripción:**  
**Consecuencias:**  
**Mitigación:**  
**Responsable:**  
**Indicadores:**  
**Fecha de revisión:**  
```

---

# 52. Plantilla para registrar una evolución candidata

```markdown
## EC-XXX — Nombre

**Estado:** Candidata  
**Origen:**  
**Descripción:**  
**Justificación:**  
**Beneficio esperado:**  
**Coste esperado:**  
**Riesgo:**  
**Dependencias:**  
**Momento recomendado:**  
**Documento futuro:**  
**Decisión requerida:**  
```

---

# 53. Procedimiento de actualización

## Paso 1 — Identificar el evento

Confirmar que ocurrió un hito relevante.

## Paso 2 — Localizar fuentes

Reunir:

- resolución;
- documento;
- ADR;
- informe;
- misión;
- evidencia.

## Paso 3 — Actualizar estado ejecutivo

Modificar únicamente los campos afectados.

## Paso 4 — Actualizar la misión

Registrar resultado, decisiones y riesgos.

## Paso 5 — Actualizar cronología

Añadir el hito.

## Paso 6 — Actualizar principios

Solo si existe aprobación.

## Paso 7 — Actualizar pendientes

Cerrar, añadir o reclasificar.

## Paso 8 — Actualizar versión

Aplicar reglas de versionado.

## Paso 9 — Revisar coherencia

Verificar que no contradice el Manual ni ADR.

## Paso 10 — Confirmar autoridad

Dirección Técnica aprueba la actualización.

---

# 54. Procedimiento de revisión periódica

La revisión deberá comprobar:

- estados obsoletos;
- enlaces rotos;
- decisiones ya resueltas;
- riesgos cerrados;
- documentos vacíos;
- duplicidades;
- misiones pendientes;
- fechas;
- versiones;
- autoridad;
- coherencia con el Manual.

---

# 55. Criterios de calidad

El documento será considerado saludable cuando:

- permita comprender el proyecto en menos de quince minutos;
- permita localizar decisiones en menos de cinco minutos;
- distinga claramente vigente, pendiente y futuro;
- no duplique documentos normativos;
- mantenga una cronología coherente;
- no contenga afirmaciones sin fuente;
- registre los hitos relevantes;
- sea actualizado después de cada cierre importante.

---

# 56. Política de archivo

Las entradas históricas no deberán eliminarse salvo error.

Cuando algo deje de estar vigente:

- se marcará como sustituido;
- se indicará la nueva referencia;
- se conservará la fecha;
- se preservará la razón.

Los informes históricos deberán archivarse, no sobrescribirse.

---

# 57. Política de referencias

Las referencias deberán utilizar rutas estables.

Ejemplo:

```text
docs/ingeniería/...
docs/notas_internas/...
docs/adr/...
```

Cuando la Arquitectura Física sea aprobada, deberán actualizarse todas las rutas de forma controlada.

---

# 58. Glosario

## Architecture First

Metodología donde arquitectura y documentación preceden a la implementación.

## Línea base

Estado aprobado que sirve como referencia para trabajos posteriores.

## Dirección Técnica

Autoridad integradora responsable de coherencia y aprobación.

## Especialista

Rol subordinado encargado de una misión acotada.

## Contrato arquitectónico

Especificación normativa de una capacidad pública entre módulos autorizados.

## Arquitectura Modular

Modelo de módulos, responsabilidades, propiedad, fronteras y dependencias.

## Arquitectura Física

Representación del sistema en la organización concreta del repositorio.

## ADR

Registro formal de una decisión arquitectónica relevante.

## MVA

Conjunto mínimo de capacidades y mecanismos para demostrar la viabilidad de la arquitectura.

## Catálogo Arquitectónico

Conjunto representativo de contratos usado para demostrar el modelo.

## Registro Operativo

Inventario evolutivo de contratos implementados.

## Riesgo arquitectónico

Condición que puede degradar la integridad de la arquitectura.

## Deuda arquitectónica

Obligación reconocida de corregir o completar una carencia arquitectónica.

---

# 59. Estado de cierre de esta versión

## Contenido incorporado

Esta versión registra:

- estado general;
- gobierno;
- metodología;
- ecosistema documental;
- notas internas;
- misiones V0.1 a V0.5;
- cierre de V0.2;
- cierre completo de V0.3;
- principios;
- decisiones;
- pendientes;
- evoluciones;
- riesgos;
- hitos;
- cronología;
- próximos pasos;
- plantillas de mantenimiento.

## Información pendiente de confirmación

- fechas exactas de inicio y cierre de todas las misiones;
- versiones oficiales de documentos de V0.2 y V0.3;
- nombres definitivos dentro del Manual;
- inventario completo de los diecisiete documentos;
- estado real de V0.1;
- responsable nominal de cada documento;
- orden final de V0.1, V0.4 y V0.5;
- rutas definitivas tras la Arquitectura Física.

## Próxima actualización requerida

Después de que Dirección Técnica determine el siguiente paso y emita la resolución correspondiente.

---

# 60. Resolución institucional

Con la creación de este documento, GeoMotion Studio establece un mecanismo permanente para preservar el estado consolidado del proyecto.

El presente registro deberá convertirse en el primer punto de consulta antes de:

- iniciar una misión;
- revisar una arquitectura;
- aprobar un ADR;
- modificar el Manual;
- comenzar una implementación;
- alterar el repositorio;
- planificar una MVA;
- evaluar una evolución relevante.

La continuidad del proyecto no deberá depender de la memoria individual, de conversaciones aisladas ni de documentos dispersos.

La arquitectura seguirá definiéndose en el Manual.

Las decisiones seguirán registrándose mediante ADR.

La implementación seguirá documentándose en sus especificaciones.

Este documento preservará la visión integrada de todo ello.

---

# Fin del documento
