# 18 · GESTIÓN DE VERSIONES

**Código:** DOC-018

**Versión:** 1.0

**Estado:** Publicado

**Proyecto:** GeoMotion Studio

**Clasificación:** Manual de Ingeniería

**Idioma original:** Español

**Última actualización:** 24 de julio de 2026

---

# Introducción

## Propósito del documento

La evolución de un proyecto de ingeniería implica la modificación continua de los activos que lo componen. El software incorpora nuevas funcionalidades, la arquitectura evoluciona para responder a nuevos requisitos, la documentación se amplía con nuevo conocimiento y las decisiones técnicas se refinan a medida que el proyecto madura.

Gestionar esta evolución de manera controlada constituye un aspecto fundamental de la ingeniería del software.

El presente documento establece el modelo oficial de Gestión de Versiones adoptado por GeoMotion Studio, definiendo los principios, criterios y procedimientos necesarios para identificar, controlar y trazar la evolución de los activos de ingeniería del proyecto durante todo su ciclo de vida.

Su finalidad consiste en garantizar que cada cambio pueda ser comprendido dentro de su contexto, preservando la integridad del conocimiento técnico, la coherencia documental y la reproducibilidad de cada estado del sistema.

La Gestión de Versiones no se limita a la asignación de números de versión. Constituye un proceso de gobernanza que permite administrar la evolución del proyecto de forma ordenada, asegurando que cada modificación pueda relacionarse con las decisiones que la motivaron, la documentación que la respalda y las versiones oficiales que forman parte de la historia del producto.

---

## Objetivos

Los objetivos del presente documento son:

- Definir el modelo oficial de gestión de versiones de GeoMotion Studio.
- Establecer criterios uniformes para la identificación de los activos de ingeniería.
- Regular la evolución controlada de dichos activos durante su ciclo de vida.
- Definir el significado y alcance de las versiones, revisiones, líneas base y publicaciones oficiales.
- Garantizar la trazabilidad entre cambios, versiones y documentación técnica.
- Favorecer la consistencia entre el software, la arquitectura y el resto de los activos del proyecto.
- Establecer las responsabilidades asociadas al proceso de gestión de versiones.

---

## Alcance

Las disposiciones establecidas en este documento son aplicables a todos los activos de ingeniería cuya evolución deba mantenerse bajo control dentro de GeoMotion Studio.

Entre ellos se incluyen, sin limitarse a:

- Código fuente.
- Componentes de software.
- Bibliotecas.
- Interfaces de programación (API).
- Modelos de datos.
- Especificaciones técnicas.
- Diagramas.
- Manual de Ingeniería.
- Registros de Decisiones de Arquitectura (ADR).
- Registros de Conocimiento (RC).
- Casos de prueba.
- Scripts de automatización.
- Plantillas.
- Artefactos de despliegue.
- Archivos de configuración.
- Cualquier otro elemento cuya evolución forme parte del patrimonio técnico del proyecto.

Este documento no define el funcionamiento interno de herramientas específicas de control de versiones, sino las políticas de ingeniería que deberán aplicarse con independencia de la tecnología utilizada para implementarlas.

---

## Público Destinatario

Este documento está dirigido a:

- Arquitectos de Software.
- Desarrolladores.
- Responsables de configuración.
- Revisores técnicos.
- Mantenedores.
- Colaboradores del proyecto.
- Toda persona que participe en la evolución de los activos de ingeniería de GeoMotion Studio.

---

## Principios

La Gestión de Versiones de GeoMotion Studio se fundamenta en los siguientes principios:

- Identificación inequívoca de los activos.
- Evolución controlada.
- Trazabilidad completa.
- Integridad de las versiones publicadas.
- Consistencia documental.
- Reproducibilidad.
- Transparencia.
- Compatibilidad.
- Gobernanza del cambio.

Estos principios orientan todas las políticas desarrolladas en el presente documento.

---

## Relación con Otros Documentos

La Gestión de Versiones constituye un elemento transversal dentro del Manual de Ingeniería.

Su aplicación complementa la arquitectura definida en el Manual, las decisiones registradas mediante ADR y el conocimiento preservado en la Bitácora de Desarrollo.

Mientras dichos documentos describen el sistema, explican las decisiones adoptadas y conservan la experiencia acumulada durante su evolución, el presente documento establece la forma en que todos esos activos evolucionan de manera controlada a lo largo del tiempo.

En conjunto, estos documentos conforman el marco de gobernanza técnica de GeoMotion Studio.

---

## Organización del Documento

El presente documento se organiza en capítulos que desarrollan progresivamente el modelo de gestión de versiones adoptado por GeoMotion Studio.

Se presentan los fundamentos conceptuales del versionado, el ciclo de vida de los activos de ingeniería, el modelo de identificación de versiones, los estados de madurez, la gestión de líneas base, la administración de cambios, la publicación de versiones oficiales, la trazabilidad histórica y la gobernanza del proceso.

Finalmente, los anexos proporcionan plantillas, ejemplos y herramientas de referencia para facilitar la aplicación uniforme de las políticas aquí establecidas.

---

# CAPÍTULO 1 · Fundamentos de la Evolución de los Activos de Ingeniería

## 1.1 Objetivo

Establecer los fundamentos conceptuales que sustentan la Gestión de Versiones en GeoMotion Studio, definiendo la naturaleza de los activos de ingeniería, su evolución a lo largo del ciclo de vida del proyecto y los principios que regulan su administración.

Este capítulo constituye la base sobre la cual se desarrollan las políticas de versionado, trazabilidad y gestión de cambios definidas en los capítulos posteriores.

---

## 1.2 La Evolución como Proceso de Ingeniería

Todo proyecto de ingeniería se encuentra en constante evolución.

Nuevos requisitos, mejoras tecnológicas, corrección de errores, optimizaciones, decisiones arquitectónicas y conocimiento adquirido durante el desarrollo producen modificaciones continuas sobre los distintos activos que conforman el sistema.

Esta evolución no debe entenderse como una sucesión de cambios aislados, sino como un proceso planificado, controlado y documentado que garantiza la estabilidad y continuidad del proyecto.

La Gestión de Versiones proporciona el marco necesario para administrar dicha evolución de manera sistemática, preservando el contexto histórico de cada modificación y asegurando la coherencia entre los distintos activos de ingeniería.

---

## 1.3 Activos de Ingeniería

Se denomina **Activo de Ingeniería** a todo elemento cuya evolución resulte relevante para el desarrollo, mantenimiento o gobernanza de GeoMotion Studio y que, por lo tanto, deba mantenerse bajo control de configuración.

Entre otros, se consideran activos de ingeniería:

- Código fuente.
- Componentes y módulos.
- Bibliotecas.
- Interfaces de programación (API).
- Modelos de datos.
- Diagramas.
- Manual de Ingeniería.
- Registros de Decisiones de Arquitectura (ADR).
- Registros de Conocimiento (RC).
- Especificaciones técnicas.
- Casos de prueba.
- Scripts.
- Configuraciones.
- Plantillas.
- Artefactos de despliegue.

Cada activo posee un ciclo de vida propio, aunque su evolución puede estar relacionada con la de otros activos mediante dependencias técnicas o documentales.

---

## 1.4 Evolución de los Activos

La evolución de un activo de ingeniería representa la sucesión ordenada de estados por los que transita desde su creación hasta su retiro.

Cada modificación genera un nuevo estado que podrá identificarse, documentarse y relacionarse con los cambios que le dieron origen.

Esta evolución constituye el historial técnico del activo y permite comprender cómo y por qué alcanzó su estado actual.

---

## 1.5 Control de la Evolución

La evolución de un activo no debe producirse de manera arbitraria.

Toda modificación deberá realizarse mediante procedimientos que permitan:

- Identificar el cambio.
- Justificar su necesidad.
- Determinar su impacto.
- Registrar su historial.
- Preservar versiones anteriores.
- Garantizar la trazabilidad.

El control sistemático de la evolución constituye uno de los principios fundamentales de la ingeniería de configuración.

---

## 1.6 Principios Fundamentales

La evolución de los activos de ingeniería deberá desarrollarse conforme a los siguientes principios.

### Identificación

Todo activo deberá poder identificarse de forma única.

---

### Control

Toda modificación deberá registrarse y gestionarse mediante procesos definidos.

---

### Integridad

Los estados publicados deberán preservarse como referencias históricas.

---

### Trazabilidad

Cada cambio deberá poder relacionarse con su origen, justificación e impacto.

---

### Reproducibilidad

Debe ser posible reconstruir cualquier estado oficial del proyecto utilizando la información registrada.

---

### Consistencia

La evolución de un activo no deberá comprometer la coherencia del resto de los activos relacionados.

---

### Gobernanza

La evolución deberá desarrollarse conforme a las políticas establecidas por el Manual de Ingeniería.

---

## 1.7 Beneficios

La aplicación de estos principios proporciona múltiples beneficios.

Entre ellos:

- Evolución ordenada del proyecto.
- Mayor estabilidad.
- Conservación del historial técnico.
- Reducción de errores derivados de cambios no controlados.
- Facilita auditorías.
- Favorece la colaboración.
- Preserva el conocimiento institucional.
- Mejora la calidad documental.
- Fortalece la gobernanza técnica.

---

## 1.8 Relación con la Gestión de Versiones

La Gestión de Versiones constituye el mecanismo mediante el cual se identifica formalmente cada estado alcanzado por un activo de ingeniería.

Las versiones representan hitos dentro del proceso evolutivo del activo y permiten diferenciar estados sucesivos de manera inequívoca.

En consecuencia, el versionado no constituye un fin en sí mismo, sino una herramienta para administrar la evolución controlada del proyecto.

---

## 1.9 Relación con el Manual de Ingeniería

La evolución de los activos de ingeniería mantiene una relación directa con el resto de la documentación técnica.

Las decisiones registradas mediante ADR pueden motivar la evolución de determinados activos.

Las experiencias documentadas en la Bitácora de Desarrollo pueden generar mejoras que deriven en nuevas versiones.

Las modificaciones consolidadas deberán reflejarse oportunamente en el Manual de Ingeniería cuando alteren el estado oficial de la arquitectura o de las prácticas del proyecto.

De este modo, la evolución de los activos se integra con el sistema de gestión del conocimiento definido para GeoMotion Studio.

---

## 1.10 Resumen

La evolución constituye una característica inherente a todo proyecto de ingeniería.

Gestionarla de manera controlada requiere identificar los activos que forman parte del proyecto, comprender su ciclo de vida y establecer mecanismos que permitan administrar sus cambios de forma consistente, trazable y reproducible.

Sobre estos fundamentos se construye el modelo de Gestión de Versiones desarrollado en los capítulos siguientes.

---

# CAPÍTULO 2 · Ciclo de Vida de los Activos de Ingeniería

## 2.1 Objetivo

Definir el ciclo de vida de los activos de ingeniería de GeoMotion Studio, estableciendo los estados por los que pueden transitar desde su creación hasta su retiro, así como los principios que regulan su evolución.

El conocimiento del ciclo de vida de un activo permite comprender su estado de madurez, controlar su evolución y garantizar la integridad de la información asociada a cada una de sus versiones.

---

## 2.2 Concepto de Ciclo de Vida

Todo activo de ingeniería posee un ciclo de vida que representa la secuencia de estados por los que transita durante su existencia dentro del proyecto.

Cada estado refleja un determinado nivel de madurez y establece las condiciones bajo las cuales el activo puede evolucionar.

La transición entre estados deberá realizarse de forma controlada y documentada, preservando el historial completo del activo.

---

## 2.3 Estados del Ciclo de Vida

Con carácter general, los activos de ingeniería podrán transitar por los siguientes estados.

```text
Creación
    │
    ▼
Desarrollo
    │
    ▼
Revisión
    │
    ▼
Aprobación
    │
    ▼
Publicación
    │
    ▼
Mantenimiento
    │
    ▼
Retiro
```

Cada uno de estos estados representa una fase específica dentro del proceso evolutivo del activo.

---

## 2.4 Creación

La creación constituye el origen formal de un activo de ingeniería.

Durante esta etapa se establece su identidad, propósito, alcance y relación con el resto del proyecto.

Todo activo deberá poseer un identificador único desde el momento de su creación.

Ejemplos:

- Creación de un nuevo documento.
- Desarrollo de un componente.
- Incorporación de una API.
- Definición de un modelo de datos.

---

## 2.5 Desarrollo

Durante el desarrollo el activo evoluciona mediante la incorporación progresiva de contenido, funcionalidades o mejoras.

Esta etapa se caracteriza por una elevada frecuencia de cambios y una continua revisión del conocimiento asociado.

Las versiones generadas durante esta fase poseen carácter provisional y aún no representan una referencia oficial del proyecto.

---

## 2.6 Revisión

Una vez alcanzado un nivel suficiente de madurez, el activo deberá someterse a un proceso de revisión técnica.

La revisión tiene por finalidad verificar:

- Calidad.
- Consistencia.
- Integridad.
- Exactitud.
- Compatibilidad.
- Cumplimiento de los estándares definidos por el Manual de Ingeniería.

Las observaciones derivadas de la revisión podrán dar lugar a nuevas iteraciones de desarrollo.

---

## 2.7 Aprobación

La aprobación representa la aceptación formal del activo como parte del patrimonio técnico del proyecto.

A partir de este momento, el activo se considera apto para integrarse en una Línea Base y ser utilizado como referencia oficial.

La aprobación deberá quedar registrada mediante los mecanismos de gobernanza definidos por el proyecto.

---

## 2.8 Publicación

La publicación corresponde a la incorporación oficial del activo dentro de una versión o Línea Base del proyecto.

Desde este momento, el activo pasa a formar parte de la documentación o del software oficialmente distribuido.

Las versiones publicadas deberán mantenerse inalterables.

Toda modificación posterior dará origen a una nueva versión.

---

## 2.9 Mantenimiento

Durante el mantenimiento el activo continúa evolucionando mediante:

- Corrección de errores.
- Mejoras.
- Actualizaciones.
- Adaptaciones.
- Optimización.
- Ampliación de capacidades.

Cada modificación deberá mantener la trazabilidad respecto de las versiones anteriores.

---

## 2.10 Retiro

El retiro marca el final del ciclo de vida del activo.

Las causas podrán incluir:

- Obsolescencia.
- Sustitución por una nueva implementación.
- Cambios arquitectónicos.
- Eliminación de funcionalidades.
- Consolidación de activos.

El retiro no implica la eliminación del historial del activo.

Las versiones históricas deberán conservarse como parte del patrimonio documental del proyecto.

---

## 2.11 Evolución entre Estados

Los activos podrán evolucionar de manera iterativa.

Un activo aprobado podrá regresar temporalmente a una fase de desarrollo cuando resulte necesario introducir mejoras significativas.

Del mismo modo, un activo en revisión podrá requerir nuevas modificaciones antes de alcanzar su aprobación definitiva.

Esta naturaleza iterativa refleja el carácter evolutivo de la ingeniería del software.

---

## 2.12 Principios del Ciclo de Vida

La gestión del ciclo de vida deberá respetar los siguientes principios:

- Cada activo deberá encontrarse siempre en un único estado.
- Toda transición deberá quedar documentada.
- Ningún estado eliminará el historial previo.
- Las publicaciones serán inmutables.
- La evolución será acumulativa y trazable.
- El retiro preservará la memoria técnica del activo.

---

## 2.13 Relación con la Gestión de Versiones

El ciclo de vida define la evolución funcional de los activos.

La Gestión de Versiones proporciona el mecanismo para identificar cada uno de los estados alcanzados durante dicha evolución.

Ambos procesos son complementarios.

Mientras el ciclo de vida describe **cómo evoluciona** un activo, el versionado permite identificar **qué estado** representa cada momento de esa evolución.

---

## 2.14 Resumen

Todo activo de ingeniería transita por un ciclo de vida que comienza con su creación y finaliza con su retiro.

La comprensión de este ciclo permite gestionar la evolución del proyecto de forma ordenada, preservar el conocimiento generado durante cada etapa y proporcionar el contexto necesario para la correcta aplicación del modelo de versionado desarrollado en los capítulos siguientes.

---

# CAPÍTULO 3 · Modelo de Versionado

## 3.1 Objetivo

Definir el modelo de versionado adoptado por GeoMotion Studio para identificar de manera única los distintos estados alcanzados por los activos de ingeniería durante su ciclo de vida.

El modelo de versionado establece las políticas generales que regulan la identificación de versiones, permitiendo que cada tipo de activo utilice el esquema de numeración más adecuado a su naturaleza, siempre que se respeten los principios de consistencia, trazabilidad y gobernanza definidos en el presente documento.

---

## 3.2 Concepto de Versión

Una versión representa un estado identificado de un activo de ingeniería en un momento determinado de su evolución.

Cada versión constituye una referencia única que permite distinguir dicho estado respecto de versiones anteriores y posteriores, preservando la historia evolutiva del activo.

Una versión no representa únicamente un conjunto de modificaciones, sino un punto de referencia dentro del proceso de evolución controlada del proyecto.

---

## 3.3 Política de Versionado

GeoMotion Studio adopta una política de versionado basada en los siguientes principios:

- Todo activo de ingeniería deberá poseer un identificador de versión.
- Cada versión identificará un único estado del activo.
- Una versión publicada será inmutable.
- Toda modificación dará origen a una nueva versión.
- La evolución deberá ser secuencial y trazable.
- El esquema de numeración podrá variar según la naturaleza del activo.

En consecuencia, el presente documento define una política común de versionado, pero no impone un único formato de numeración para todos los activos de ingeniería.

---

## 3.4 Esquemas de Versionado

Los distintos tipos de activos podrán utilizar esquemas de versionado específicos, adecuados a sus características y necesidades de evolución.

Entre los esquemas recomendados se encuentran:

| Tipo de Activo | Esquema Recomendado |
|----------------|---------------------|
| Documentación técnica | Mayor.Menor |
| Manual de Ingeniería | Mayor.Menor |
| ADR | Mayor.Menor |
| Registros de Conocimiento (RC) | Mayor.Menor |
| Componentes de software | Mayor.Menor.Revisión |
| Bibliotecas | Mayor.Menor.Revisión |
| APIs | Mayor.Menor.Revisión |
| Plugins | Mayor.Menor.Revisión |

La adopción de un esquema diferente deberá encontrarse debidamente justificada.

---

## 3.5 Versionado de la Documentación

La documentación técnica de GeoMotion Studio utilizará, con carácter general, un modelo de versionado compuesto por dos niveles.

```text
MAYOR.MENOR
```

Ejemplos:

```text
0.1
0.5
1.0
1.3
2.0
```

Este modelo resulta suficiente para representar la evolución de documentos cuya modificación no requiere distinguir entre cambios funcionales y correcciones menores.

La versión mayor identifica una nueva edición o una modificación significativa del documento.

La versión menor identifica ampliaciones, revisiones o mejoras compatibles con la edición vigente.

---

## 3.6 Versionado del Software

Los activos software podrán utilizar un modelo de tres niveles.

```text
MAYOR.MENOR.REVISIÓN
```

Ejemplos:

```text
1.0.0
1.2.3
2.0.0
4.7.12
```

Este modelo permite distinguir entre cambios estructurales, incorporación de nuevas capacidades y correcciones menores, proporcionando un mayor nivel de granularidad para componentes cuya evolución resulta más frecuente.

La utilización de este esquema no implica la adopción obligatoria de un estándar específico, aunque resulta compatible con modelos ampliamente utilizados como Semantic Versioning.

---

## 3.7 Versiones Preliminares

Cuando la versión mayor sea igual a **0**, el activo se considerará en desarrollo.

Las versiones preliminares representan estados de trabajo que aún no constituyen referencias oficiales del proyecto.

Ejemplos:

| Versión | Interpretación |
|----------|----------------|
| 0.1 | Primer borrador |
| 0.4 | Desarrollo intermedio |
| 0.8 | Revisión avanzada |
| 0.9 | Candidato a publicación |

La transición hacia la versión **1.0** o **1.0.0**, según el esquema adoptado, representa la primera publicación oficial del activo.

---

## 3.8 Versiones Oficiales

La primera versión oficial de un activo se identifica mediante la versión mayor **1**.

A partir de este momento, el activo pasa a formar parte del patrimonio técnico formal del proyecto y su evolución deberá respetar las políticas de compatibilidad, trazabilidad y control de cambios establecidas en este documento.

Las versiones posteriores reflejarán la evolución controlada del activo conforme al esquema de versionado correspondiente.

---

## 3.9 Principios del Modelo

Con independencia del esquema de numeración utilizado, todo modelo de versionado deberá respetar los siguientes principios:

### Unicidad

Cada versión identificará un único estado del activo.

---

### Secuencialidad

Las versiones evolucionarán de forma ordenada.

---

### Inmutabilidad

Las versiones publicadas no podrán modificarse.

---

### Claridad

La numeración deberá resultar comprensible y consistente.

---

### Trazabilidad

Toda versión deberá mantener su relación con los cambios, decisiones y documentación que le dieron origen.

---

## 3.10 Resumen

GeoMotion Studio adopta una política de versionado uniforme basada en principios comunes aplicables a todos los activos de ingeniería.

No obstante, reconoce que la naturaleza de dichos activos puede requerir diferentes esquemas de numeración, permitiendo utilizar modelos de dos o tres niveles según corresponda, sin comprometer la consistencia, la trazabilidad ni la gobernanza del proceso de evolución del proyecto.

---

# CAPÍTULO 4 · Estados de Madurez de las Versiones

## 4.1 Objetivo

Definir los estados de madurez que pueden representar las versiones de un activo de ingeniería durante su evolución, proporcionando un marco uniforme para interpretar el significado de cada versión dentro del proceso de desarrollo.

Los estados de madurez complementan al modelo de versionado, permitiendo comprender el nivel de estabilidad, revisión y aprobación alcanzado por un activo en un momento determinado.

---

## 4.2 Concepto de Madurez

La numeración de una versión identifica un estado específico de un activo de ingeniería.

Sin embargo, la numeración por sí sola no expresa el grado de estabilidad ni el nivel de validación alcanzado.

Los estados de madurez permiten complementar dicha información, indicando el nivel de desarrollo, revisión o consolidación del activo.

De esta manera, dos activos pueden compartir un mismo esquema de versionado y, al mismo tiempo, encontrarse en diferentes niveles de madurez.

---

## 4.3 Modelo de Madurez

GeoMotion Studio adopta el siguiente modelo general de madurez.

```text
Borrador
      │
      ▼
En Desarrollo
      │
      ▼
En Revisión
      │
      ▼
Candidato
      │
      ▼
Publicado
      │
      ▼
Mantenimiento
      │
      ▼
Obsoleto
```

Cada estado representa una situación específica dentro del proceso de evolución del activo.

---

## 4.4 Borrador

Corresponde al primer estado documentado de un activo.

Durante esta etapa el contenido puede modificarse libremente y aún no ha sido sometido a revisión técnica.

Ejemplos habituales:

```text
0.1
0.2
```

Características:

- Desarrollo inicial.
- Cambios frecuentes.
- Sin aprobación formal.
- Uso interno.

---

## 4.5 En Desarrollo

El activo incorpora progresivamente nuevas capacidades y comienza a adquirir estabilidad.

Continúa sujeto a modificaciones importantes, aunque ya dispone de una estructura claramente definida.

Características:

- Evolución continua.
- Incremento del contenido.
- Validación parcial.
- Uso restringido al equipo del proyecto.

---

## 4.6 En Revisión

El activo alcanza un nivel suficiente de madurez para iniciar su evaluación técnica.

Durante esta etapa se verifican aspectos como:

- Calidad.
- Consistencia.
- Integridad.
- Cumplimiento de estándares.
- Exactitud técnica.

Las observaciones derivadas de la revisión pueden originar nuevas iteraciones de desarrollo.

---

## 4.7 Candidato

Un activo candidato se considera técnicamente completo y preparado para su publicación.

Únicamente se esperan ajustes menores antes de convertirse en una versión oficial.

Ejemplos habituales:

```text
0.9
```

Características:

- Contenido estable.
- Revisiones finales.
- Cambios mínimos.
- Preparación para publicación.

---

## 4.8 Publicado

Representa la primera versión oficial del activo.

A partir de este momento el activo forma parte del patrimonio técnico del proyecto y puede integrarse en una Línea Base oficial.

Ejemplos:

```text
1.0
1.0.0
```

Características:

- Aprobación formal.
- Referencia oficial.
- Distribución autorizada.
- Historial preservado.

---

## 4.9 Mantenimiento

Las versiones publicadas continúan evolucionando mediante actividades de mantenimiento.

Entre ellas:

- Corrección de errores.
- Mejoras.
- Actualizaciones.
- Adaptaciones.
- Optimizaciones.

Cada modificación origina una nueva versión conforme al modelo de versionado correspondiente.

---

## 4.10 Obsoleto

Un activo se considera obsoleto cuando ha sido reemplazado por una versión posterior o deja de formar parte de la arquitectura vigente.

La obsolescencia no implica la eliminación del activo.

Su historial deberá preservarse con fines de consulta, auditoría y trazabilidad.

---

## 4.11 Relación entre Versión y Madurez

La numeración de una versión y el estado de madurez representan conceptos diferentes y complementarios.

La versión identifica un estado específico del activo.

La madurez describe el grado de estabilidad y validación alcanzado por dicho estado.

Por ejemplo:

| Versión | Estado de Madurez |
|----------|-------------------|
| 0.1 | Borrador |
| 0.5 | En Desarrollo |
| 0.8 | En Revisión |
| 0.9 | Candidato |
| 1.0 | Publicado |
| 1.3 | Mantenimiento |
| 2.0 | Publicado (Nueva Generación) |

---

## 4.12 Beneficios

La utilización de estados de madurez proporciona múltiples beneficios.

Entre ellos:

- Mayor comprensión del estado real del activo.
- Mejor planificación de revisiones.
- Publicaciones más controladas.
- Reducción de incertidumbre.
- Mayor calidad documental.
- Homogeneidad en la interpretación de las versiones.
- Fortalecimiento de la gobernanza técnica.

---

## 4.13 Resumen

Los estados de madurez complementan el modelo de versionado al proporcionar información sobre el nivel de estabilidad, validación y aprobación alcanzado por un activo de ingeniería.

La combinación del número de versión y del estado de madurez permite representar de manera más precisa la evolución del proyecto, facilitando la gestión de cambios y la publicación controlada de versiones oficiales.

---

# CAPÍTULO 5 · Líneas Base

## 5.1 Objetivo

Definir el concepto de Línea Base (Baseline) y establecer las políticas para su creación, gestión y utilización dentro de GeoMotion Studio.

Las Líneas Base constituyen puntos de referencia oficiales que agrupan un conjunto consistente de versiones de activos de ingeniería, permitiendo preservar estados estables del proyecto y facilitar su evolución controlada.

---

## 5.2 Concepto de Línea Base

Una Línea Base es un conjunto identificado de versiones de activos de ingeniería que ha sido aprobado formalmente y cuya composición permanece inalterable.

Representa una fotografía del estado del proyecto en un momento determinado y sirve como referencia para actividades de desarrollo, integración, pruebas, mantenimiento y auditoría.

Una Línea Base no contiene activos nuevos; contiene versiones específicas de activos ya existentes.

---

## 5.3 Finalidad

Las Líneas Base tienen como finalidad:

- Establecer puntos de referencia oficiales.
- Garantizar la consistencia entre los activos relacionados.
- Facilitar la trazabilidad del proyecto.
- Servir de base para futuras evoluciones.
- Permitir la reconstrucción de estados históricos.
- Apoyar procesos de auditoría y control de calidad.

---

## 5.4 Composición

Una Línea Base puede incluir, entre otros, los siguientes activos:

- Código fuente.
- Documentación técnica.
- Manual de Ingeniería.
- ADR.
- Registros de Conocimiento (RC).
- Diagramas.
- Modelos.
- Configuraciones.
- Casos de prueba.
- Scripts de despliegue.

Todos los activos incluidos deberán encontrarse identificados mediante sus respectivas versiones.

---

## 5.5 Identificación

Cada Línea Base deberá poseer un identificador único.

Ejemplos:

```text
BL-001
BL-002
BL-003
```

La numeración de las Líneas Base es independiente del versionado de los activos que las componen.

---

## 5.6 Inmutabilidad

Una vez aprobada, una Línea Base no podrá modificarse.

Si alguno de los activos evoluciona, deberá definirse una nueva Línea Base que refleje la nueva combinación de versiones.

Este principio garantiza la reproducibilidad y la integridad histórica del proyecto.

---

## 5.7 Evolución

La evolución del proyecto se representa mediante una sucesión de Líneas Base.

```text
BL-001

↓

BL-002

↓

BL-003

↓

BL-004
```

Cada nueva Línea Base incorpora las versiones vigentes de los activos que la integran.

---

## 5.8 Relación con las Versiones

Las versiones identifican estados individuales de los activos.

Las Líneas Base identifican estados globales del proyecto.

Por ejemplo:

| Activo | Versión |
|---------|----------|
| Manual de Ingeniería | 0.6 |
| DOC-014 | 1.0 |
| DOC-015 | 1.0 |
| Biblioteca Core | 2.4.3 |
| API REST | 1.8.1 |

Todos ellos pueden formar parte de la misma Línea Base.

---

## 5.9 Gestión de Cambios

Toda modificación sobre un activo perteneciente a una Línea Base deberá originar una nueva versión del activo.

Si dicha modificación forma parte de una nueva configuración oficial del proyecto, deberá generarse una nueva Línea Base.

De este modo, la evolución de los activos y la evolución del proyecto permanecen sincronizadas sin alterar referencias históricas.

---

## 5.10 Beneficios

La utilización de Líneas Base proporciona, entre otros, los siguientes beneficios:

- Reproducibilidad del proyecto.
- Integridad de las configuraciones.
- Trazabilidad completa.
- Facilidad para auditorías.
- Mayor control sobre la evolución.
- Mejor coordinación entre equipos.
- Reducción del riesgo asociado a cambios.

---

## 5.11 Relación con Releases

Una Línea Base constituye una referencia técnica interna.

Una Release representa la publicación o distribución de una Línea Base a un conjunto de usuarios o destinatarios.

En consecuencia, una Release se construye a partir de una Línea Base previamente aprobada.

---

## 5.12 Resumen

Las Líneas Base permiten identificar configuraciones estables del proyecto mediante la agrupación controlada de versiones de activos de ingeniería.

Su utilización garantiza la integridad, la reproducibilidad y la trazabilidad del proyecto, proporcionando el fundamento sobre el que se apoyan las publicaciones oficiales y la gestión de cambios.

---

# CAPÍTULO 6 · Gestión de Cambios

## 6.1 Objetivo

Definir el proceso de gestión de cambios aplicado a los activos de ingeniería de GeoMotion Studio, estableciendo los principios, actividades y controles necesarios para garantizar que toda modificación sea evaluada, registrada, aprobada y trazable.

La gestión de cambios constituye uno de los mecanismos fundamentales para preservar la integridad técnica del proyecto durante su evolución.

---

## 6.2 Concepto de Cambio

Un cambio es toda modificación realizada sobre un activo de ingeniería que altera su estado previamente identificado.

Los cambios pueden afectar, entre otros aspectos:

- Funcionalidad.
- Arquitectura.
- Diseño.
- Implementación.
- Documentación.
- Configuración.
- Procesos.
- Modelos.
- Artefactos auxiliares.

Todo cambio deberá generar una nueva versión del activo afectado.

---

## 6.3 Objetivos de la Gestión de Cambios

La gestión de cambios persigue los siguientes objetivos:

- Controlar la evolución del proyecto.
- Reducir riesgos.
- Mantener la consistencia entre activos.
- Preservar la trazabilidad.
- Facilitar auditorías.
- Garantizar la reproducibilidad de las Líneas Base.
- Evitar modificaciones no controladas.

---

## 6.4 Tipos de Cambios

Los cambios podrán clasificarse según su naturaleza.

### Correctivos

Corrigen errores, defectos o inconsistencias detectadas.

Ejemplos:

- Corrección de código.
- Corrección documental.
- Eliminación de referencias incorrectas.

---

### Evolutivos

Incorporan nuevas capacidades o amplían funcionalidades existentes.

Ejemplos:

- Nuevos módulos.
- Nuevas APIs.
- Nuevos capítulos del Manual.

---

### Adaptativos

Permiten adecuar un activo a nuevas condiciones del entorno.

Ejemplos:

- Cambio de plataforma.
- Actualización tecnológica.
- Nuevos requisitos externos.

---

### Perfectivos

Mejoran la calidad sin modificar el comportamiento esperado.

Ejemplos:

- Refactorización.
- Optimización.
- Reorganización documental.
- Mejora de rendimiento.

---

## 6.5 Proceso General

Todo cambio deberá seguir un proceso controlado.

```text
Identificación

↓

Análisis

↓

Evaluación

↓

Implementación

↓

Verificación

↓

Aprobación

↓

Nueva Versión

↓

Nueva Línea Base (si corresponde)
```

La profundidad de cada etapa dependerá del impacto del cambio.

---

## 6.6 Evaluación del Impacto

Antes de implementar un cambio deberá evaluarse su impacto sobre:

- Arquitectura.
- Componentes.
- Interfaces.
- Documentación.
- ADR.
- Registros de Conocimiento.
- Casos de prueba.
- Líneas Base existentes.

Esta evaluación permitirá determinar el alcance real de la modificación.

---

## 6.7 Trazabilidad

Todo cambio deberá poder relacionarse con:

- El activo afectado.
- La versión de origen.
- La versión resultante.
- Las decisiones arquitectónicas (ADR) asociadas.
- Los Registros de Conocimiento (RC) relacionados.
- La Línea Base correspondiente.

La trazabilidad constituye un requisito esencial para comprender la evolución del proyecto.

---

## 6.8 Aprobación

La aprobación de un cambio dependerá de su impacto técnico.

Los cambios significativos deberán someterse a revisión antes de incorporarse a una versión oficial.

Los criterios de aprobación deberán definirse conforme a las políticas de gobernanza del proyecto.

---

## 6.9 Principios

La gestión de cambios deberá respetar los siguientes principios:

- Todo cambio deberá quedar registrado.
- Ningún cambio eliminará el historial previo.
- Todo cambio generará una nueva versión.
- Toda modificación deberá ser trazable.
- Las Líneas Base publicadas permanecerán inmutables.
- Los cambios deberán evaluarse antes de su incorporación.

---

## 6.10 Relación con Otros Documentos

La gestión de cambios mantiene una relación directa con:

- **Manual de Ingeniería**, que define las políticas y estándares.
- **ADR**, que documentan las decisiones arquitectónicas que motivan determinados cambios.
- **Registros de Conocimiento (RC)**, que conservan la experiencia obtenida durante la implementación.
- **Líneas Base**, que representan las configuraciones estables del proyecto.

De este modo, un cambio no se limita a modificar un activo, sino que puede generar nueva documentación, decisiones y conocimiento.

---

## 6.11 Beneficios

Una adecuada gestión de cambios proporciona:

- Evolución controlada.
- Mayor calidad técnica.
- Reducción del riesgo.
- Mejor coordinación entre equipos.
- Mayor capacidad de auditoría.
- Preservación del conocimiento.
- Consistencia entre los distintos activos del proyecto.

---

## 6.12 Resumen

La gestión de cambios constituye el mecanismo mediante el cual evolucionan los activos de ingeniería de forma controlada.

Su aplicación garantiza que cada modificación quede debidamente evaluada, documentada y relacionada con el resto de los activos del proyecto, preservando la integridad, la trazabilidad y la gobernanza de la evolución de GeoMotion Studio.

---

# CAPÍTULO 7 · Publicaciones

## 7.1 Objetivo

Definir el concepto de Publicación dentro de GeoMotion Studio y establecer las políticas para la publicación controlada de activos de ingeniería.

Las Publicaciones representan entregas oficiales del proyecto construidas a partir de Líneas Base previamente aprobadas, garantizando la consistencia de los activos distribuidos y preservando la trazabilidad entre el desarrollo interno y las publicaciones realizadas.

---

## 7.2 Concepto de Publicación

Una Publicación es la distribución oficial de uno o más activos de ingeniería destinada a un conjunto determinado de destinatarios.

Mientras que una Línea Base representa una configuración técnica estable, una Publicación constituye la materialización de dicha configuración como una entrega formal.

En consecuencia, toda Publicación deberá basarse en una Línea Base previamente aprobada.

---

## 7.3 Finalidad

Las Publicaciones tienen como finalidad:

- Publicar versiones oficiales.
- Distribuir activos controlados.
- Garantizar la coherencia entre los activos entregados.
- Facilitar la identificación de las publicaciones.
- Preservar la trazabilidad entre el desarrollo y la distribución.
- Proporcionar referencias estables para usuarios y equipos.

---

## 7.4 Relación con las Líneas Base

Toda Publicación deberá originarse a partir de una Línea Base.

```text
Activos

↓

Versiones

↓

Línea Base

↓

Publicación
```

La Línea Base constituye la referencia técnica.

La Publicación constituye la referencia oficial de distribución.

---

## 7.5 Contenido de una Publicación

Una Publicación podrá incluir, entre otros elementos:

- Componentes de software.
- Bibliotecas.
- APIs.
- Manuales.
- Documentación técnica.
- Diagramas.
- Scripts de despliegue.
- Archivos de configuración.
- Notas de Publicación.

El contenido dependerá del alcance de la publicación.

---

## 7.6 Identificación

Cada Publicación deberá disponer de un identificador único.

El formato podrá adaptarse a las necesidades del proyecto.

Ejemplos:

```text
PUB-001

Publicación 1.0

2026.1

GeoMotion Studio 1.0
```

La identificación de la Publicación es independiente de la numeración utilizada por los activos individuales.

---

## 7.7 Proceso de Publicación

Antes de realizar una Publicación deberán verificarse, como mínimo:

- Existencia de una Línea Base aprobada.
- Integridad de los activos incluidos.
- Consistencia de las versiones.
- Documentación actualizada.
- Trazabilidad de los cambios incorporados.

La Publicación deberá quedar registrada como parte del historial del proyecto.

---

## 7.8 Evolución de las Publicaciones

Las Publicaciones representan hitos dentro de la evolución del proyecto.

Cada nueva Publicación incorpora una nueva Línea Base y refleja el estado alcanzado por el conjunto de activos en un momento determinado.

Las Publicaciones anteriores permanecerán como referencias históricas y no deberán modificarse.

---

## 7.9 Notas de Publicación

Toda Publicación debería estar acompañada por unas Notas de Publicación.

Estas notas tienen como finalidad comunicar los principales cambios incorporados respecto de la Publicación anterior.

Podrán incluir:

- Nuevas funcionalidades.
- Cambios relevantes.
- Correcciones realizadas.
- Limitaciones conocidas.
- Compatibilidad.
- Referencias a ADR o RC relacionados cuando resulte pertinente.

Las Notas de Publicación constituyen un complemento informativo de la Publicación y no sustituyen la documentación técnica del proyecto.

---

## 7.10 Principios

Toda Publicación deberá respetar los siguientes principios:

- Basarse en una Línea Base aprobada.
- Contener únicamente activos identificados mediante versiones.
- Ser reproducible.
- Mantener la trazabilidad con los cambios realizados.
- Preservar el historial de publicaciones.
- Ser claramente identificable.

---

## 7.11 Beneficios

La utilización de Publicaciones proporciona:

- Distribuciones consistentes.
- Entregas controladas.
- Mejor comunicación con los usuarios.
- Mayor capacidad de auditoría.
- Reproducibilidad de las entregas.
- Integridad de los activos distribuidos.

---

## 7.12 Resumen

Las Publicaciones representan la distribución oficial de configuraciones estables del proyecto.

Construidas a partir de Líneas Base aprobadas, constituyen el mecanismo mediante el cual GeoMotion Studio pone a disposición de sus destinatarios un conjunto coherente de activos de ingeniería, preservando la integridad, la trazabilidad y la consistencia de cada entrega realizada.

---

# CAPÍTULO 8 · Gobernanza de las Versiones

## 8.1 Objetivo

Definir los principios de gobernanza que regulan la gestión de versiones de los activos de ingeniería de GeoMotion Studio, estableciendo las responsabilidades, controles y políticas necesarias para garantizar la integridad, consistencia y trazabilidad del proceso de evolución del proyecto.

La gobernanza proporciona el marco organizativo que asegura la aplicación uniforme de las prácticas definidas en el presente documento.

---

## 8.2 Concepto de Gobernanza

La gobernanza de las versiones comprende el conjunto de políticas, normas y responsabilidades destinadas a controlar la evolución de los activos de ingeniería.

Su finalidad es garantizar que todas las versiones sean identificadas, gestionadas, aprobadas y publicadas de manera consistente, evitando modificaciones no controladas y preservando la historia técnica del proyecto.

La gobernanza no sustituye a los procesos de desarrollo; establece las reglas bajo las cuales dichos procesos deben ejecutarse.

---

## 8.3 Principios de Gobernanza

La gestión de versiones deberá regirse por los siguientes principios:

- Integridad.
- Consistencia.
- Trazabilidad.
- Transparencia.
- Responsabilidad.
- Reproducibilidad.
- Mejora continua.

Estos principios deberán aplicarse a todos los activos de ingeniería, independientemente de su naturaleza.

---

## 8.4 Responsabilidades

La gobernanza implica la participación de diferentes actores dentro del proyecto.

Entre sus responsabilidades se incluyen:

- Crear nuevos activos de ingeniería.
- Mantener actualizadas sus versiones.
- Revisar los cambios realizados.
- Aprobar nuevas versiones cuando corresponda.
- Autorizar la incorporación de activos a una Línea Base.
- Autorizar la realización de Publicaciones.
- Preservar la trazabilidad documental.

La asignación concreta de estas responsabilidades dependerá de la organización del proyecto.

---

## 8.5 Políticas Generales

Toda gestión de versiones deberá respetar las siguientes políticas:

- Todo activo deberá encontrarse identificado mediante una versión.
- Toda modificación deberá generar una nueva versión.
- Ninguna versión publicada podrá modificarse.
- Toda Publicación deberá originarse a partir de una Línea Base aprobada.
- Toda Línea Base deberá estar formada por versiones identificadas.
- Toda evolución deberá conservar el historial técnico del proyecto.

---

## 8.6 Control

La gobernanza deberá establecer mecanismos que permitan verificar el cumplimiento de las políticas definidas en este documento.

Entre las actividades de control podrán incluirse:

- Revisiones técnicas.
- Auditorías internas.
- Verificación de trazabilidad.
- Control de integridad documental.
- Validación de configuraciones.
- Revisión de Publicaciones.

El alcance de estos controles dependerá de la criticidad del activo.

---

## 8.7 Gestión de Excepciones

En determinadas circunstancias podrá resultar necesario apartarse de las políticas generales de versionado.

Toda excepción deberá:

- Estar debidamente justificada.
- Quedar documentada.
- Ser evaluada respecto de su impacto.
- Contar con la aprobación correspondiente.

Las excepciones no deberán comprometer la integridad ni la trazabilidad del proyecto.

---

## 8.8 Mejora Continua

El modelo de gestión de versiones deberá revisarse periódicamente con el fin de incorporar mejoras derivadas de la experiencia obtenida durante el desarrollo del proyecto.

Las lecciones aprendidas, los Registros de Conocimiento (RC) y las Decisiones de Arquitectura (ADR) constituyen fuentes relevantes para la evolución de las políticas de gobernanza.

---

## 8.9 Relación con Otros Documentos

La gobernanza de las versiones mantiene una relación directa con:

- El Manual de Ingeniería.
- Las Decisiones de Arquitectura (ADR).
- Los Registros de Conocimiento (RC).
- La Gestión de Cambios.
- Las Líneas Base.
- Las Publicaciones.

En conjunto, estos documentos conforman el marco de gobierno de la evolución técnica de GeoMotion Studio.

---

## 8.10 Resumen

La gobernanza de las versiones proporciona el conjunto de principios, responsabilidades y controles necesarios para garantizar que la evolución de los activos de ingeniería se desarrolle de forma ordenada, consistente y trazable.

Su aplicación asegura que las versiones, las Líneas Base y las Publicaciones constituyan referencias fiables sobre las cuales pueda sustentarse el desarrollo continuo del proyecto.

---

# CAPÍTULO 9 · Trazabilidad

## 9.1 Objetivo

Definir los principios y mecanismos de trazabilidad aplicables a la gestión de versiones de los activos de ingeniería de GeoMotion Studio.

La trazabilidad permite conocer el origen, la evolución y las relaciones existentes entre los distintos activos del proyecto, facilitando la reconstrucción de su historia técnica y apoyando las actividades de mantenimiento, auditoría y mejora continua.

---

## 9.2 Concepto de Trazabilidad

La trazabilidad es la capacidad de identificar y seguir la evolución de un activo de ingeniería a lo largo de todo su ciclo de vida.

Implica conocer:

- Su origen.
- Las versiones que ha tenido.
- Los cambios realizados.
- Las decisiones que motivaron dichos cambios.
- El conocimiento adquirido durante su evolución.
- Las Líneas Base y Publicaciones en las que participó.

La trazabilidad constituye uno de los principios fundamentales de la gestión de configuración.

---

## 9.3 Alcance

La trazabilidad deberá mantenerse sobre todos los activos de ingeniería del proyecto.

Entre ellos:

- Código fuente.
- Componentes.
- APIs.
- Documentación técnica.
- Manual de Ingeniería.
- Decisiones de Arquitectura (ADR).
- Registros de Conocimiento (RC).
- Diagramas.
- Modelos.
- Casos de prueba.
- Configuraciones.
- Líneas Base.
- Publicaciones.

---

## 9.4 Relaciones de Trazabilidad

Los activos podrán mantener relaciones con otros elementos del proyecto.

Entre las relaciones más habituales se encuentran:

- Un cambio genera una nueva versión.
- Una versión pertenece a un activo.
- Una versión forma parte de una Línea Base.
- Una Línea Base origina una Publicación.
- Una decisión arquitectónica (ADR) puede justificar un cambio.
- Un Registro de Conocimiento (RC) puede documentar la experiencia obtenida durante la implementación.
- Un requisito puede dar origen a uno o varios cambios.

Estas relaciones permiten comprender la evolución técnica del proyecto de manera integral.

---

## 9.5 Información Trazable

Como mínimo, cada activo debería permitir identificar:

- Su identificador.
- Su versión.
- Su estado de madurez.
- Su historial de cambios.
- Las ADR relacionadas.
- Los RC relacionados.
- Las Líneas Base en las que participa.
- Las Publicaciones en las que ha sido distribuido.

La profundidad de esta información dependerá de la naturaleza del activo.

---

## 9.6 Historial de Evolución

Todo activo deberá conservar un historial que permita reconstruir su evolución.

Este historial podrá incluir:

- Fecha de creación.
- Versiones publicadas.
- Cambios incorporados.
- Revisiones realizadas.
- Aprobaciones.
- Sustituciones.
- Estado actual.

El historial constituye parte del patrimonio técnico del proyecto y no deberá eliminarse.

---

## 9.7 Beneficios

La trazabilidad proporciona múltiples beneficios.

Entre ellos:

- Comprensión de la evolución del proyecto.
- Reconstrucción de estados históricos.
- Facilitación del mantenimiento.
- Mejor análisis de impacto.
- Mayor capacidad de auditoría.
- Conservación del conocimiento técnico.
- Apoyo a la mejora continua.

---

## 9.8 Principios

La trazabilidad deberá respetar los siguientes principios:

- Integridad.
- Consistencia.
- Continuidad.
- Identificación única.
- Accesibilidad.
- Persistencia.
- Verificabilidad.

Estos principios garantizan que la información pueda consultarse de manera fiable durante toda la vida útil del proyecto.

---

## 9.9 Relación con Otros Documentos

La trazabilidad integra la información generada por los distintos documentos del Manual de Ingeniería.

En particular:

- El **Manual de Ingeniería** define las normas y estándares.
- Las **Decisiones de Arquitectura (ADR)** documentan las decisiones que justifican cambios relevantes.
- Los **Registros de Conocimiento (RC)** preservan la experiencia obtenida durante la implementación y mantenimiento.
- La **Gestión de Versiones** identifica la evolución de los activos.
- Las **Líneas Base** agrupan configuraciones coherentes.
- Las **Publicaciones** representan las entregas oficiales del proyecto.

En conjunto, estos documentos conforman una red de información técnica que permite comprender la evolución del proyecto desde diferentes perspectivas.

---

## 9.10 Resumen

La trazabilidad constituye el mecanismo que relaciona los distintos activos de ingeniería y preserva la historia técnica del proyecto.

Su adecuada aplicación permite reconstruir la evolución de GeoMotion Studio, comprender el origen de los cambios realizados y mantener la coherencia entre decisiones, implementaciones, documentación y publicaciones oficiales.

---

# CAPÍTULO 10 · Integración con el Marco de Ingeniería

## 10.1 Objetivo

Describir la integración de la Gestión de Versiones con el conjunto de documentos y procesos que conforman el Marco de Ingeniería de GeoMotion Studio.

La Gestión de Versiones no constituye un proceso aislado, sino un mecanismo transversal que da soporte a la evolución controlada de todos los activos de ingeniería del proyecto.

---

## 10.2 La Gestión de Versiones como Proceso Transversal

Todo activo de ingeniería evoluciona a lo largo del tiempo.

La Gestión de Versiones proporciona el mecanismo que permite identificar, controlar y preservar dicha evolución, independientemente de la naturaleza del activo.

En consecuencia, este documento mantiene relaciones con la totalidad del Manual de Ingeniería.

---

## 10.3 Relación con el Manual de Ingeniería

El Manual de Ingeniería establece las políticas, normas y estándares que regulan el desarrollo de GeoMotion Studio.

La Gestión de Versiones garantiza que la evolución del propio Manual quede correctamente identificada, controlada y documentada.

Cada revisión del Manual constituye una nueva versión de un activo de ingeniería y deberá gestionarse conforme a las políticas definidas en este documento.

---

## 10.4 Relación con las Decisiones de Arquitectura (ADR)

Las Decisiones de Arquitectura documentan las decisiones técnicas relevantes adoptadas durante el desarrollo del proyecto.

Cuando una decisión arquitectónica genera modificaciones sobre uno o más activos de ingeniería, dichas modificaciones deberán reflejarse mediante nuevas versiones y, cuando corresponda, integrarse en una nueva Línea Base y una nueva Publicación.

La trazabilidad entre versiones y ADR permite comprender las razones que motivaron la evolución del proyecto.

---

## 10.5 Relación con los Registros de Conocimiento (RC)

Los Registros de Conocimiento documentan la experiencia obtenida durante el desarrollo y mantenimiento del proyecto.

Las lecciones aprendidas registradas en los RC pueden dar origen a mejoras sobre los activos de ingeniería, generando nuevas versiones y enriqueciendo el proceso de evolución continua.

De esta manera, la Gestión de Versiones preserva no solo la evolución de los activos, sino también la evolución del conocimiento asociado a ellos.

---

## 10.6 Relación con la Gestión de Cambios

La Gestión de Cambios constituye el mecanismo operativo mediante el cual evolucionan los activos.

La Gestión de Versiones proporciona el mecanismo de identificación que permite registrar dicha evolución.

Ambos procesos son complementarios y deben aplicarse de forma coordinada.

---

## 10.7 Relación con las Líneas Base y las Publicaciones

Las Líneas Base representan configuraciones técnicas estables del proyecto.

Las Publicaciones representan la distribución oficial de dichas configuraciones.

La Gestión de Versiones constituye el elemento común que garantiza la correcta identificación de todos los activos incluidos en ambos procesos.

---

## 10.8 Integración del Modelo

El modelo definido en el presente documento puede resumirse mediante la siguiente secuencia de relaciones.

```text
Necesidad

↓

Decisión de Arquitectura (ADR)

↓

Cambio

↓

Activo de Ingeniería

↓

Versión

↓

Línea Base

↓

Publicación

↓

Uso y Retroalimentación

↓

Registro de Conocimiento (RC)

↓

Nueva Evolución
```

Este modelo refleja el carácter iterativo de la ingeniería del software y la mejora continua del proyecto.

---

## 10.9 Beneficios de la Integración

La integración de la Gestión de Versiones con el resto del Marco de Ingeniería proporciona:

- Consistencia documental.
- Evolución controlada.
- Trazabilidad integral.
- Conservación del conocimiento.
- Reproducibilidad del proyecto.
- Mayor capacidad de auditoría.
- Facilita la mejora continua.
- Fortalece la gobernanza técnica.

---

## 10.10 Resumen

La Gestión de Versiones constituye un proceso transversal dentro del Marco de Ingeniería de GeoMotion Studio.

Su integración con el Manual de Ingeniería, las Decisiones de Arquitectura, los Registros de Conocimiento, la Gestión de Cambios, las Líneas Base y las Publicaciones garantiza que la evolución del proyecto se desarrolle de manera consistente, trazable y gobernada, preservando tanto los activos de ingeniería como el conocimiento generado durante su desarrollo.

---

# ANEXOS

Los anexos del presente documento complementan la **Política de Gestión de Versiones** proporcionando modelos, tablas de referencia y plantillas destinadas a facilitar la aplicación uniforme del proceso de versionado en GeoMotion Studio.

Su finalidad consiste en servir como material de apoyo para la definición, identificación, control y trazabilidad de los activos de ingeniería a lo largo de todo su ciclo de vida, garantizando la consistencia entre las versiones gestionadas, las Líneas Base aprobadas, las Publicaciones oficiales y el resto de la documentación del proyecto.

Los anexos desarrollan aspectos operativos relacionados con:

- Modelos de versionado.
- Identificación de versiones.
- Estados de madurez de los activos de ingeniería.
- Gestión de cambios.
- Gestión de Líneas Base.
- Publicación y liberación de versiones.
- Trazabilidad de la evolución.
- Registro del historial de cambios.
- Plantillas para el control de versiones.
- Tablas de referencia para la aplicación de las políticas definidas en este documento.

Estos anexos forman parte integrante de la Política de Gestión de Versiones y constituyen la referencia oficial para los modelos, criterios y procedimientos operativos de versionado definidos en el presente documento.

Su contenido deberá interpretarse de acuerdo con los principios y políticas establecidos en los capítulos principales de DOC-018.

Cuando exista una discrepancia entre un anexo y el cuerpo principal del documento, prevalecerán las disposiciones establecidas en el cuerpo principal.

```text
Política de Gestión de Versiones

↓

Modelos y Criterios

↓

Plantillas y Tablas de Referencia

↓

Aplicación Operativa

↓

Control y Trazabilidad
```

Los anexos no introducen políticas independientes.

Su función consiste en facilitar la aplicación consistente de las políticas de versionado, madurez, gestión de cambios, Líneas Base y Publicaciones establecidas en este documento.

---

# ANEXO A · Modelo de Versionado de los Activos de Ingeniería

## A.1 Objetivo

Definir los esquemas de versionado recomendados para los distintos tipos de activos de ingeniería utilizados en GeoMotion Studio.

Este anexo complementa las políticas establecidas en el Capítulo 3, proporcionando una guía práctica para la identificación uniforme de las versiones de los activos que forman parte del proyecto.

Su propósito es facilitar la aplicación consistente del modelo de versionado, independientemente de la naturaleza del activo gestionado.

---

## A.2 Principios Generales

Todo activo de ingeniería deberá cumplir los siguientes principios:

- Poseer un identificador de versión único.
- Evolucionar de manera secuencial.
- Mantener la trazabilidad de todas sus versiones.
- Conservar el historial completo de su evolución.
- Aplicar un esquema de versionado adecuado a su naturaleza.
- Respetar las políticas de gestión de versiones establecidas en el presente documento.

La elección del esquema de numeración no modifica las reglas generales de gobernanza, trazabilidad ni gestión de cambios.

---

## A.3 Esquemas de Versionado Recomendados

La siguiente tabla resume los esquemas recomendados para los principales tipos de activos de ingeniería utilizados en GeoMotion Studio.

| Tipo de Activo | Esquema |
|----------------|---------|
| Manual de Ingeniería | Mayor.Menor |
| Documentación Técnica | Mayor.Menor |
| Decisiones de Arquitectura (ADR) | Mayor.Menor |
| Registros de Conocimiento (RC) | Mayor.Menor |
| Diagramas | Mayor.Menor |
| Modelos | Mayor.Menor |
| Especificaciones | Mayor.Menor |
| Componentes de Software | Mayor.Menor.Revisión |
| Bibliotecas | Mayor.Menor.Revisión |
| APIs | Mayor.Menor.Revisión |
| Plugins | Mayor.Menor.Revisión |
| Herramientas | Mayor.Menor.Revisión |

Estos esquemas constituyen una recomendación general y podrán adaptarse cuando la naturaleza del activo así lo justifique.

---

## A.4 Modelo de Versionado para Documentación

La documentación técnica utilizará, como norma general, un esquema de dos niveles.

```text
MAYOR.MENOR
```

Ejemplos:

```text
0.1
0.2
0.7
0.9
1.0
1.3
2.0
```

Interpretación:

- La versión mayor representa una nueva edición del documento.
- La versión menor representa revisiones, ampliaciones o mejoras compatibles.

Este esquema resulta suficiente para representar la evolución documental sin introducir una complejidad innecesaria.

---

## A.5 Modelo de Versionado para Software

Los componentes software podrán utilizar un esquema de tres niveles.

```text
MAYOR.MENOR.REVISIÓN
```

Ejemplos:

```text
0.1.0
0.4.2
1.0.0
1.3.7
2.0.0
```

Interpretación:

- La versión mayor representa una nueva generación del componente.
- La versión menor identifica nuevas funcionalidades o capacidades compatibles.
- La revisión identifica correcciones menores, optimizaciones o ajustes sin impacto funcional significativo.

Este esquema proporciona un mayor nivel de granularidad para activos cuya evolución suele ser más frecuente.

---

## A.6 Interpretación de los Niveles de Versión

### Mayor

Representa una nueva generación del activo.

Ejemplos:

- Reestructuración importante.
- Cambio arquitectónico significativo.
- Nueva edición del Manual.
- Nueva versión principal de un componente.

---

### Menor

Representa una evolución compatible con la versión mayor vigente.

Ejemplos:

- Nuevos capítulos.
- Nuevas funcionalidades.
- Ampliaciones.
- Mejoras.

---

### Revisión

Aplicable únicamente cuando el esquema de versionado la contemple.

Representa modificaciones de bajo impacto, tales como:

- Corrección de errores.
- Ajustes editoriales.
- Optimización.
- Refactorización.
- Corrección de referencias.

---

## A.7 Compatibilidad

La utilización de distintos esquemas de numeración no afecta la coherencia del modelo de Gestión de Versiones.

Todos los activos continúan compartiendo:

- Un ciclo de vida común.
- Estados de madurez.
- Gestión de cambios.
- Trazabilidad.
- Integración en Líneas Base.
- Participación en Publicaciones.

El esquema de numeración constituye únicamente un mecanismo de identificación y no modifica el modelo general de gestión.

---

## A.8 Buenas Prácticas

Se recomienda:

- Mantener una numeración simple y consistente.
- Incrementar la versión únicamente cuando exista una modificación real del activo.
- Evitar cambios arbitrarios de versión mayor.
- No reutilizar identificadores de versiones anteriores.
- Registrar el historial de cambios asociado a cada versión.
- Mantener sincronizadas las versiones con las Líneas Base y las Publicaciones correspondientes.
- Documentar adecuadamente las razones que motivan cambios importantes de versión.

---

## A.9 Ejemplos de Evolución

### Documento Técnico

```text
0.1
   │
   ▼
0.2
   │
   ▼
0.5
   │
   ▼
0.9
   │
   ▼
1.0
   │
   ▼
1.1
   │
   ▼
1.3
```

---

### Componente de Software

```text
0.1.0
     │
     ▼
0.3.4
     │
     ▼
1.0.0
     │
     ▼
1.2.1
     │
     ▼
1.4.6
     │
     ▼
2.0.0
```

Estos ejemplos ilustran la evolución típica de los distintos tipos de activos gestionados dentro del proyecto.

---

## A.10 Resumen

El modelo de versionado definido en el presente anexo proporciona una guía uniforme para la identificación de los activos de ingeniería de GeoMotion Studio.

La utilización de esquemas específicos para documentación y software permite adaptar el nivel de granularidad a las características de cada activo sin comprometer la consistencia del modelo general de Gestión de Versiones.

La correcta aplicación de estos esquemas facilita la trazabilidad, la gestión de cambios, la construcción de Líneas Base y la realización de Publicaciones, contribuyendo a una evolución ordenada y controlada del proyecto.

---

# ANEXO B · Estados de Madurez

## B.1 Objetivo

Definir los estados de madurez aplicables a las versiones de los activos de ingeniería de GeoMotion Studio, proporcionando una referencia práctica para interpretar el grado de desarrollo, estabilidad y validación alcanzado por cada versión.

Este anexo complementa el Capítulo 4, facilitando la aplicación uniforme del modelo de madurez durante la evolución del proyecto.

---

## B.2 Modelo General de Madurez

Toda versión de un activo podrá encontrarse en alguno de los siguientes estados.

```text
Borrador
      │
      ▼
En Desarrollo
      │
      ▼
En Revisión
      │
      ▼
Candidato
      │
      ▼
Publicado
      │
      ▼
Mantenimiento
      │
      ▼
Obsoleto
```

Cada estado representa un determinado nivel de evolución dentro del ciclo de vida del activo.

---

## B.3 Descripción de los Estados

| Estado | Descripción |
|----------|-------------|
| Borrador | Primeras versiones del activo. |
| En Desarrollo | El activo evoluciona mediante cambios frecuentes. |
| En Revisión | El activo está siendo evaluado técnicamente. |
| Candidato | Se considera técnicamente completo y preparado para su publicación. |
| Publicado | Primera versión oficial aprobada. |
| Mantenimiento | Evolución posterior mediante mejoras y correcciones. |
| Obsoleto | El activo ha sido reemplazado o retirado. |

---

## B.4 Características por Estado

### Borrador

Características:

- Desarrollo inicial.
- Cambios frecuentes.
- Sin aprobación formal.
- Uso interno.

Versiones habituales:

```text
0.1
0.2
```

---

### En Desarrollo

Características:

- Evolución continua.
- Incorporación de contenido.
- Validación parcial.
- Cambios estructurales posibles.

---

### En Revisión

Características:

- Evaluación técnica.
- Revisión documental.
- Verificación de estándares.
- Corrección de observaciones.

---

### Candidato

Características:

- Contenido estable.
- Cambios mínimos.
- Preparación para publicación.
- Alta confianza técnica.

Versiones habituales:

```text
0.9
```

---

### Publicado

Características:

- Aprobación formal.
- Referencia oficial.
- Integración en una Línea Base.
- Puede formar parte de una Publicación.

Versiones habituales:

```text
1.0
```

---

### Mantenimiento

Características:

- Correcciones.
- Mejoras.
- Evolución compatible.
- Conservación del historial.

---

### Obsoleto

Características:

- Sustituido por otra versión.
- Conservación histórica.
- No recibe nuevas modificaciones.

---

## B.5 Evolución Típica

```text
0.1

↓

0.4

↓

0.8

↓

0.9

↓

1.0

↓

1.3

↓

2.0
```

La evolución podrá variar según la naturaleza del activo.

---

## B.6 Recomendaciones

Se recomienda:

- No publicar versiones inmaduras.
- Mantener claramente identificado el estado de cada versión.
- Evitar mantener activos indefinidamente en estado "En Revisión".
- Actualizar el estado de madurez cada vez que cambie significativamente la situación del activo.

---

## B.7 Resumen

Los estados de madurez permiten interpretar el significado de una versión más allá de su numeración, facilitando la planificación, la revisión y la publicación de los activos de ingeniería del proyecto.

---

# ANEXO C · Modelo de Líneas Base

## C.1 Objetivo

Definir un modelo de referencia para la construcción y gestión de Líneas Base dentro de GeoMotion Studio.

Este anexo proporciona una guía práctica para la composición, identificación y mantenimiento de configuraciones estables del proyecto.

---

## C.2 Concepto

Una Línea Base representa una configuración consistente del proyecto formada por un conjunto específico de versiones de activos de ingeniería.

Constituye una referencia técnica oficial utilizada para garantizar la reproducibilidad y la trazabilidad del desarrollo.

---

## C.3 Componentes

Una Línea Base podrá estar integrada por:

- Código fuente.
- Componentes.
- APIs.
- Manual de Ingeniería.
- ADR.
- RC.
- Diagramas.
- Modelos.
- Configuraciones.
- Casos de prueba.
- Scripts.

---

## C.4 Identificación

Las Líneas Base deberán identificarse mediante un identificador único.

Ejemplos:

```text
BL-001

BL-002

BL-003
```

La identificación es independiente del versionado de los activos.

---

## C.5 Ejemplo de Composición

| Activo | Versión |
|----------|----------|
| Manual de Ingeniería | 0.7 |
| DOC-014 | 1.0 |
| DOC-015 | 1.0 |
| DOC-018 | 0.1 |
| Biblioteca Core | 2.3.1 |
| API REST | 1.5.2 |

Todos estos activos constituyen una única Línea Base.

---

## C.6 Evolución

```text
BL-001

↓

BL-002

↓

BL-003

↓

BL-004
```

Cada Línea Base representa una nueva configuración del proyecto.

Las Líneas Base anteriores permanecen inalterables.

---

## C.7 Relación con los Activos

Cada activo puede participar en múltiples Líneas Base.

Por ejemplo:

```text
DOC-018 v0.1

↓

BL-002

↓

BL-003

↓

BL-004
```

Esto permite reconstruir el estado del proyecto en cualquier momento de su evolución.

---

## C.8 Buenas Prácticas

Se recomienda:

- Crear Líneas Base únicamente cuando exista una configuración estable.
- Identificar claramente todos los activos incluidos.
- Evitar modificar una Línea Base existente.
- Registrar la fecha de creación.
- Asociar la Línea Base con la Publicación correspondiente cuando exista.

---

## C.9 Información Recomendada

Toda Línea Base debería registrar como mínimo:

- Identificador.
- Fecha.
- Responsable.
- Activos incluidos.
- Versiones.
- Observaciones.
- Publicación asociada.

---

## C.10 Resumen

Las Líneas Base constituyen el mecanismo que permite preservar configuraciones estables del proyecto, facilitando la reproducción de estados históricos, la gestión de cambios y la realización de Publicaciones de manera controlada.

---

# ANEXO D · Modelo de Gestión de Cambios

## D.1 Objetivo

Proporcionar un modelo de referencia para la gestión de cambios aplicada a los activos de ingeniería de GeoMotion Studio.

Este anexo complementa el Capítulo 6, describiendo el flujo general de un cambio, los elementos que intervienen y las buenas prácticas para su control.

---

## D.2 Flujo General de un Cambio

Todo cambio debería seguir el siguiente flujo.

```text
Necesidad

↓

Identificación del Cambio

↓

Análisis de Impacto

↓

Evaluación

↓

Implementación

↓

Verificación

↓

Aprobación

↓

Nueva Versión

↓

Línea Base

↓

Publicación
```

La profundidad de cada etapa dependerá de la naturaleza y criticidad del cambio.

---

## D.3 Tipos de Cambios

Los cambios podrán clasificarse de la siguiente manera.

| Tipo | Finalidad |
|-------|-----------|
| Correctivo | Corregir errores o defectos. |
| Evolutivo | Incorporar nuevas capacidades. |
| Adaptativo | Adecuar el activo a nuevas condiciones. |
| Perfectivo | Mejorar calidad o rendimiento. |

Esta clasificación facilita el análisis del impacto de cada modificación.

---

## D.4 Información Recomendada

Todo cambio debería registrar como mínimo:

- Identificador.
- Fecha.
- Activo afectado.
- Versión de origen.
- Versión resultante.
- Tipo de cambio.
- Descripción.
- Responsable.
- Estado.
- Referencias relacionadas (ADR, RC, requisitos, etc.).

---

## D.5 Evaluación del Impacto

Antes de implementar un cambio se recomienda evaluar su impacto sobre:

- Arquitectura.
- Componentes.
- Interfaces.
- Documentación.
- Casos de prueba.
- Líneas Base.
- Publicaciones.
- Activos relacionados.

La evaluación permitirá determinar el alcance real del cambio.

---

## D.6 Relación con Otros Activos

Un cambio podrá encontrarse relacionado con:

- Un requisito.
- Una ADR.
- Uno o varios RC.
- Una versión.
- Una Línea Base.
- Una Publicación.

Estas relaciones fortalecen la trazabilidad del proyecto.

---

## D.7 Buenas Prácticas

Se recomienda:

- Evaluar el impacto antes de implementar.
- Documentar adecuadamente el cambio.
- Mantener la trazabilidad.
- Evitar cambios no autorizados.
- Registrar las decisiones relevantes.
- Conservar el historial completo.

---

## D.8 Resumen

El modelo de gestión de cambios proporciona un proceso uniforme para controlar la evolución de los activos de ingeniería, garantizando que toda modificación quede correctamente evaluada, documentada y trazable.

---

# ANEXO E · Modelo de Publicaciones

## E.1 Objetivo

Definir un modelo de referencia para la realización de Publicaciones dentro de GeoMotion Studio.

Este anexo complementa el Capítulo 7, proporcionando una guía práctica para la planificación, preparación y registro de las Publicaciones oficiales del proyecto.

---

## E.2 Concepto

Una Publicación representa la distribución oficial de una Línea Base aprobada.

Toda Publicación constituye un hito dentro de la evolución del proyecto y deberá preservar la integridad de los activos distribuidos.

---

## E.3 Flujo General

El proceso general de una Publicación puede representarse mediante el siguiente esquema.

```text
Versiones

↓

Línea Base

↓

Verificación

↓

Aprobación

↓

Publicación

↓

Distribución

↓

Retroalimentación
```

---

## E.4 Información Recomendada

Toda Publicación debería registrar como mínimo:

- Identificador.
- Fecha.
- Línea Base utilizada.
- Responsable.
- Activos incluidos.
- Versiones distribuidas.
- Destinatarios.
- Observaciones.

---

## E.5 Contenido

Una Publicación podrá incluir:

- Software.
- Bibliotecas.
- APIs.
- Manuales.
- Documentación técnica.
- Diagramas.
- Configuraciones.
- Scripts.
- Notas de Publicación.

---

## E.6 Notas de Publicación

Las Notas de Publicación deberían incluir:

- Objetivo de la Publicación.
- Cambios principales.
- Nuevas funcionalidades.
- Correcciones realizadas.
- Problemas conocidos.
- Compatibilidad.
- Referencias a ADR y RC relevantes.

Su finalidad es comunicar de manera resumida el contenido de la Publicación.

---

## E.7 Buenas Prácticas

Se recomienda:

- Publicar únicamente Líneas Base aprobadas.
- Verificar la integridad de todos los activos.
- Mantener actualizada la documentación.
- Registrar las Publicaciones realizadas.
- Conservar el historial completo.
- Distribuir únicamente versiones identificadas.

---

## E.8 Ejemplo de Registro

| Campo | Valor |
|--------|-------|
| Publicación | PUB-001 |
| Fecha | 15/08/2026 |
| Línea Base | BL-004 |
| Responsable | Equipo de Ingeniería |
| Observaciones | Primera Publicación oficial del proyecto |

---

## E.9 Resumen

El modelo de Publicaciones proporciona un mecanismo uniforme para distribuir configuraciones estables del proyecto, asegurando que cada entrega oficial sea consistente, trazable y reproducible.

---

# ANEXO F · Modelo de Trazabilidad

## F.1 Objetivo

Definir un modelo de referencia para la trazabilidad de los activos de ingeniería de GeoMotion Studio.

Este anexo complementa el Capítulo 9, proporcionando una visión práctica de las relaciones que deben mantenerse entre los distintos elementos del proyecto para garantizar la reconstrucción de su evolución técnica.

---

## F.2 Concepto

La trazabilidad consiste en la capacidad de identificar, relacionar y reconstruir la evolución de un activo de ingeniería a lo largo de todo su ciclo de vida.

Cada modificación realizada sobre un activo debe poder asociarse con el origen que la motivó, las decisiones tomadas, las versiones generadas y las publicaciones en las que fue distribuida.

---

## F.3 Modelo General

La trazabilidad del proyecto puede representarse mediante el siguiente modelo.

```text
Necesidad

↓

Requisito

↓

Decisión de Arquitectura (ADR)

↓

Cambio

↓

Activo de Ingeniería

↓

Versión

↓

Línea Base

↓

Publicación

↓

Uso

↓

Registro de Conocimiento (RC)

↓

Nueva Evolución
```

Este modelo refleja el ciclo continuo de mejora del proyecto.

---

## F.4 Relaciones de Trazabilidad

Todo activo podrá mantener relaciones con uno o varios elementos del modelo.

| Elemento | Relación |
|----------|----------|
| Requisito | Origina un cambio. |
| ADR | Justifica decisiones técnicas. |
| Cambio | Produce nuevas versiones. |
| Activo | Elemento gestionado. |
| Versión | Estado identificado del activo. |
| Línea Base | Agrupa versiones compatibles. |
| Publicación | Distribuye una Línea Base. |
| RC | Conserva el conocimiento generado. |

---

## F.5 Información Recomendada

Cada relación de trazabilidad debería registrar como mínimo:

- Identificador del activo.
- Identificador de la versión.
- Fecha.
- Responsable.
- Cambio asociado.
- ADR relacionada.
- RC relacionado.
- Línea Base.
- Publicación.
- Observaciones.

---

## F.6 Beneficios

Una trazabilidad adecuada permite:

- Reconstruir la evolución del proyecto.
- Comprender el origen de cada decisión.
- Facilitar auditorías.
- Evaluar impactos.
- Simplificar el mantenimiento.
- Preservar el conocimiento técnico.
- Mejorar la gobernanza del proyecto.

---

## F.7 Buenas Prácticas

Se recomienda:

- Mantener relaciones explícitas entre activos.
- Evitar información duplicada.
- Registrar las decisiones relevantes.
- Actualizar la trazabilidad junto con cada nueva versión.
- Verificar periódicamente la consistencia de las relaciones.

---

## F.8 Resumen

La trazabilidad constituye el mecanismo que conecta todos los activos de ingeniería, permitiendo comprender la evolución completa del proyecto y garantizando la preservación de su historia técnica.

---

# ANEXO G · Lista de Verificación para Publicaciones

## G.1 Objetivo

Proporcionar una lista de verificación que facilite la preparación y validación de las Publicaciones oficiales de GeoMotion Studio.

Este anexo sirve como guía práctica para comprobar que una Publicación cumple las políticas definidas en el presente documento antes de ser distribuida.

---

## G.2 Uso de la Lista

La lista de verificación deberá completarse antes de realizar una Publicación oficial.

Su utilización ayuda a reducir errores, garantizar la consistencia de la configuración distribuida y mejorar la calidad del proceso de liberación.

---

## G.3 Verificación de la Línea Base

| Verificación | Sí | No | N/A |
|--------------|:--:|:--:|:--:|
| Existe una Línea Base aprobada | □ | □ | □ |
| La Línea Base está correctamente identificada | □ | □ | □ |
| Todos los activos poseen versión | □ | □ | □ |
| La configuración es consistente | □ | □ | □ |

---

## G.4 Verificación de los Activos

| Verificación | Sí | No | N/A |
|--------------|:--:|:--:|:--:|
| Documentación actualizada | □ | □ | □ |
| Componentes identificados | □ | □ | □ |
| APIs verificadas | □ | □ | □ |
| Diagramas actualizados | □ | □ | □ |
| Configuración revisada | □ | □ | □ |

---

## G.5 Verificación de la Trazabilidad

| Verificación | Sí | No | N/A |
|--------------|:--:|:--:|:--:|
| Cambios registrados | □ | □ | □ |
| Versiones identificadas | □ | □ | □ |
| ADR relacionadas | □ | □ | □ |
| RC asociados | □ | □ | □ |
| Historial actualizado | □ | □ | □ |

---

## G.6 Verificación de la Publicación

| Verificación | Sí | No | N/A |
|--------------|:--:|:--:|:--:|
| Identificador asignado | □ | □ | □ |
| Fecha registrada | □ | □ | □ |
| Responsable identificado | □ | □ | □ |
| Notas de Publicación preparadas | □ | □ | □ |
| Activos completos | □ | □ | □ |

---

## G.7 Aprobación

Antes de distribuir la Publicación se recomienda confirmar que:

- La Línea Base ha sido aprobada.
- Las verificaciones anteriores se encuentran completas.
- No existen incidencias críticas abiertas.
- La documentación refleja el estado real del proyecto.
- La Publicación puede reproducirse nuevamente utilizando la misma Línea Base.

---

## G.8 Registro

Se recomienda conservar un registro de la verificación realizada.

Ejemplo:

| Campo | Valor |
|--------|-------|
| Publicación | PUB-003 |
| Fecha | 21/08/2026 |
| Responsable | Equipo de Ingeniería |
| Resultado | Aprobada |
| Observaciones | Sin incidencias críticas |

---

## G.9 Resumen

La utilización sistemática de esta lista de verificación contribuye a mejorar la calidad de las Publicaciones, reduciendo errores y asegurando que cada distribución oficial del proyecto sea consistente, reproducible y correctamente documentada.

---

# ANEXO H · Flujo General de la Gestión de Versiones

## H.1 Objetivo

Presentar una visión integrada del proceso de Gestión de Versiones definido para GeoMotion Studio.

Este anexo resume las relaciones entre los distintos procesos descritos a lo largo del documento, mostrando cómo interactúan los activos de ingeniería desde su creación hasta su publicación y posterior evolución.

---

## H.2 Visión General

La Gestión de Versiones constituye un proceso transversal que acompaña a todos los activos de ingeniería durante su ciclo de vida.

Su finalidad es garantizar que la evolución del proyecto se produzca de forma controlada, consistente y trazable.

---

## H.3 Flujo General

El proceso completo puede representarse mediante el siguiente modelo.

```text
Necesidad

↓

Requisito

↓

Análisis

↓

Decisión de Arquitectura (ADR)

↓

Implementación

↓

Activo de Ingeniería

↓

Versión

↓

Revisión

↓

Aprobación

↓

Línea Base

↓

Publicación

↓

Uso

↓

Retroalimentación

↓

Registro de Conocimiento (RC)

↓

Nueva Necesidad
```

El modelo representa un proceso iterativo de mejora continua.

---

## H.4 Relación entre Procesos

Cada etapa del flujo mantiene una relación directa con los procesos definidos en este documento.

| Proceso | Resultado |
|----------|-----------|
| Gestión de Cambios | Nueva versión del activo |
| Gestión de Versiones | Identificación de la evolución |
| Gestión de Líneas Base | Configuración estable |
| Gestión de Publicaciones | Distribución oficial |
| Gestión de la Trazabilidad | Conservación de las relaciones |
| Gestión del Conocimiento | Aprendizaje para futuras evoluciones |

---

## H.5 Integración con el Marco de Ingeniería

La Gestión de Versiones mantiene una relación permanente con:

- Manual de Ingeniería.
- Decisiones de Arquitectura (ADR).
- Registros de Conocimiento (RC).
- Gestión de Cambios.
- Gestión de Configuración.
- Gestión Documental.
- Procesos de Desarrollo.

Esta integración convierte a la Gestión de Versiones en uno de los procesos fundamentales del Marco de Ingeniería.

---

## H.6 Principios Representados en el Flujo

El modelo presentado refleja los siguientes principios:

- Evolución controlada.
- Identificación única.
- Consistencia.
- Trazabilidad.
- Reproducibilidad.
- Gobernanza.
- Mejora continua.

Estos principios deben mantenerse durante todo el ciclo de vida de los activos.

---

## H.7 Beneficios

La aplicación sistemática del flujo permite:

- Comprender la evolución del proyecto.
- Reducir errores de configuración.
- Facilitar auditorías.
- Simplificar el mantenimiento.
- Mejorar la comunicación técnica.
- Preservar el conocimiento generado.
- Favorecer la mejora continua.

---

## H.8 Resumen

El flujo general sintetiza el funcionamiento del modelo de Gestión de Versiones definido en este documento.

Su aplicación proporciona un marco coherente para controlar la evolución de los activos de ingeniería, garantizando que cada cambio quede correctamente identificado, documentado y trazable desde su origen hasta su incorporación en una Publicación.

---

# ANEXO I · Glosario de Términos

## I.1 Objetivo

Reunir las definiciones de los principales conceptos utilizados en el presente documento, proporcionando una referencia común para facilitar su interpretación y aplicación dentro de GeoMotion Studio.

---

## I.2 Términos

| Término | Definición |
|----------|------------|
| Activo de Ingeniería | Cualquier elemento gestionado durante el desarrollo del proyecto. |
| Activo Configurable | Activo cuya evolución puede gestionarse mediante versiones. |
| Cambio | Modificación realizada sobre un activo. |
| Configuración | Conjunto específico de versiones de activos de ingeniería. |
| Ciclo de Vida | Conjunto de estados por los que evoluciona un activo. |
| Documento | Activo de ingeniería de naturaleza documental. |
| Estado de Madurez | Nivel de desarrollo alcanzado por una versión. |
| Gobernanza | Conjunto de políticas que regulan la evolución de los activos. |
| Historial | Registro cronológico de la evolución de un activo. |
| Ingeniería | Disciplina aplicada al diseño, desarrollo y mantenimiento del proyecto. |
| Línea Base | Configuración aprobada formada por un conjunto coherente de versiones. |
| Publicación | Distribución oficial de una Línea Base aprobada. |
| Revisión | Corrección o mejora de bajo impacto aplicada a una versión. |
| Trazabilidad | Capacidad de reconstruir la evolución de un activo y sus relaciones. |
| Versión | Estado identificado de un activo de ingeniería. |

---

## I.3 Siglas

| Sigla | Significado |
|--------|-------------|
| ADR | Architecture Decision Record |
| API | Application Programming Interface |
| BL | Línea Base (Baseline) |
| DOC | Documento del Manual de Ingeniería |
| RC | Registro de Conocimiento |
| PUB | Publicación |

---

## I.4 Convenciones

En el contexto del presente documento se adoptan las siguientes convenciones:

- Todo activo posee una versión.
- Toda versión pertenece a un único activo.
- Una Línea Base agrupa múltiples versiones.
- Una Publicación distribuye una Línea Base.
- Todo cambio genera una nueva versión.
- Las versiones publicadas son inmutables.

---

## I.5 Referencias Cruzadas

Los conceptos definidos en este glosario se utilizan de forma consistente en:

- Manual de Ingeniería.
- Gestión de Configuración.
- Gestión de Versiones.
- Decisiones de Arquitectura (ADR).
- Registros de Conocimiento (RC).
- Documentación Técnica.

---

## I.6 Mantenimiento del Glosario

El glosario deberá mantenerse actualizado conforme evolucionen el Manual de Ingeniería y los procesos asociados.

La incorporación de nuevos conceptos deberá realizarse de manera consistente con la terminología existente, evitando duplicidades y definiciones ambiguas.

---

## I.7 Resumen

El presente glosario proporciona un vocabulario común para la Gestión de Versiones en GeoMotion Studio.

La utilización consistente de estos términos favorece una comunicación técnica precisa, mejora la comprensión de los procesos definidos en este documento y contribuye a mantener la coherencia del Marco de Ingeniería en su conjunto.