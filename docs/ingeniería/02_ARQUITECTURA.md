# 02 · ARQUITECTURA

**Código:** DOC-002

**Versión:** 1.2

**Estado:** Publicado

**Proyecto:** GeoMotion Studio

**Clasificación:** Manual de Ingeniería

**Idioma original:** Español

**Última actualización:** 28 de julio de 2026

---

# Historial de versiones

| Versión | Fecha | Estado | Modificación | Trazabilidad |
|---|---|---|---|---|
| 1.0 | 24 de julio de 2026 | Publicado | Versión publicada anterior a la normalización del sistema ADR | Referencias documentales heredadas `ADR-001` a `ADR-015` |
| 1.1 | 28 de julio de 2026 | Publicado | Normalización documental de quince decisiones, incorporando enlaces a los ADR independientes y cualificando las referencias heredadas sin modificar su contenido técnico | `ADR-016` a `ADR-030`; DOC-002 §§2.11–16.7 |
| 1.2 | 28 de julio de 2026 | Publicado | Corrección del nombre físico de DOC-004 en el ejemplo del directorio `docs/`, sin cambios técnicos, normativos ni estructurales | `DOC-002 §3.6`; `04_PILA_TECNOLÓGICA.md` |

---

# Introducción

## Propósito del documento

Este documento define la arquitectura de software de GeoMotion Studio.

Su propósito es establecer la organización técnica del proyecto, describiendo los principios, componentes, módulos y relaciones que conforman la plataforma.

La arquitectura constituye el puente entre la visión del producto y su implementación.

Mientras que la Visión del Producto describe qué debe hacer GeoMotion Studio, este documento explica cómo estará organizado el software para hacerlo posible.

---

## Alcance

La arquitectura aquí definida aplica a todos los componentes del proyecto.

Incluye:

- Organización general del software.
- División en módulos.
- Responsabilidades de cada sistema.
- Comunicación entre componentes.
- Gestión del estado.
- Gestión de recursos.
- Organización del repositorio.
- Convenciones de desarrollo.
- Escalabilidad.
- Mantenibilidad.
- Evolución futura.

Este documento no describe algoritmos específicos ni implementaciones concretas.

Los detalles de implementación se documentarán dentro de cada módulo correspondiente.

---

## Público objetivo

Este documento está dirigido principalmente a:

- Arquitectos de software.
- Desarrolladores Frontend.
- Desarrolladores Backend.
- Colaboradores Open Source.
- Revisores técnicos.
- Mantenedores del proyecto.

También podrá servir como referencia para cualquier persona interesada en comprender la organización interna de GeoMotion Studio.

---

# Filosofía Arquitectónica

GeoMotion Studio se desarrollará siguiendo una arquitectura moderna, modular y escalable.

El proyecto se diseñará para evolucionar durante muchos años sin requerir reescrituras completas de su núcleo.

Cada decisión arquitectónica deberá favorecer:

- Simplicidad.
- Modularidad.
- Bajo acoplamiento.
- Alta cohesión.
- Escalabilidad.
- Reutilización.
- Mantenibilidad.
- Testabilidad.

Estos principios prevalecerán sobre decisiones de implementación puntuales.

---

# Objetivos de la arquitectura

La arquitectura deberá permitir:

- Desarrollar funcionalidades de forma independiente.
- Facilitar la incorporación de nuevos colaboradores.
- Reducir dependencias innecesarias.
- Permitir el crecimiento continuo del proyecto.
- Favorecer la reutilización de componentes.
- Simplificar el mantenimiento.
- Facilitar las pruebas.
- Mantener un rendimiento elevado.

Toda modificación importante deberá respetar estos objetivos.

---

# Arquitectura de Identidad y Control de Acceso

La identidad, la autenticación, la autorización y la gestión de sesiones constituyen capacidades transversales de GeoMotion Studio.

GeoMotion Studio adoptará un modelo de acceso progresivo. La plataforma podrá permitir el acceso inicial mediante una identidad temporal y requerirá una identidad autenticada únicamente para aquellas operaciones, recursos o servicios que necesiten persistencia, sincronización, colaboración, publicación o control de acceso.

La arquitectura deberá permitir incorporar diferentes mecanismos y proveedores de identidad sin modificar el núcleo de la aplicación ni los módulos funcionales.

---

## Principios arquitectónicos de identidad y control de acceso

La arquitectura deberá respetar los siguientes principios:

- Seguridad desde el diseño.
- Separación entre identidad, autenticación y autorización.
- Administración centralizada de las identidades y sesiones.
- Protección de las credenciales y de la información sensible.
- Independencia respecto de proveedores concretos.
- Extensibilidad.
- Mínimo privilegio.
- Denegación por defecto para las operaciones protegidas.
- Trazabilidad de las operaciones relevantes.
- Experiencia de acceso clara y consistente.

Las credenciales y demás datos sensibles no deberán almacenarse ni procesarse directamente en componentes que no tengan esa responsabilidad.

---

## Modelo de identidad

La arquitectura deberá distinguir entre identidades temporales e identidades persistentes.

Una identidad temporal permitirá mantener el contexto necesario para el funcionamiento local de la aplicación sin representar una cuenta registrada.

Una identidad persistente permitirá asociar de forma segura recursos, configuraciones, preferencias, permisos y servicios que requieran continuidad más allá de una sesión local.

El modelo detallado de identidades, sus tipos, atributos, estados y ciclo de vida se define en `17_AUTENTICACIÓN_Y_SEGURIDAD.md`.

---

## Gestión centralizada de sesiones

La gestión de sesiones constituirá una responsabilidad centralizada de la plataforma.

Los módulos funcionales podrán consultar el contexto de identidad y solicitar evaluaciones de autorización, pero no deberán crear mecanismos independientes de autenticación ni asumir la administración interna de las sesiones.

Los mecanismos concretos de creación, renovación, expiración, invalidación y recuperación de sesiones se definen en `17_AUTENTICACIÓN_Y_SEGURIDAD.md`.

---

## Autorización

La autenticación determinará la identidad del actor.

La autorización determinará qué recursos y operaciones puede utilizar dicha identidad.

La arquitectura deberá permitir evaluar el acceso en función del contexto completo de cada operación, incluyendo la identidad, los permisos, el recurso solicitado y las políticas aplicables.

La interfaz no deberá considerarse una barrera de seguridad.

Toda operación protegida deberá validarse en el componente responsable antes de ser ejecutada.

---

## Separación de responsabilidades

El sistema de identidad y control de acceso deberá mantenerse desacoplado de las funcionalidades específicas del producto.

Los módulos funcionales podrán consultar el contexto de identidad y los permisos aplicables, pero no deberán asumir responsabilidades relacionadas con:

- validación de credenciales;
- emisión o renovación de sesiones;
- comunicación directa con proveedores de identidad;
- recuperación de cuentas;
- definición autónoma de políticas generales de acceso.

Esta separación permitirá reemplazar o ampliar la infraestructura de identidad y autenticación sin afectar al resto de la plataforma.

---

## Relación con otros documentos

Este documento define la posición de identidad, autenticación, autorización y seguridad dentro de la arquitectura general de GeoMotion Studio, así como sus límites de responsabilidad e integración con los demás sistemas.

El modelo especializado, los principios de seguridad, las identidades admitidas, los mecanismos de autenticación, la gestión de sesiones, las políticas de autorización, los controles de acceso y los procesos operativos se definen en:

- **17_AUTENTICACIÓN_Y_SEGURIDAD.md**
- **10_ESTADO_GLOBAL.md**
- **14_DECISIONES_DE_ARQUITECTURA.md**
- La documentación técnica del Backend.
- La documentación de privacidad y tratamiento de datos que se incorpore en el futuro.

---

# Principios arquitectónicos

La arquitectura de GeoMotion Studio se apoyará en los siguientes principios fundamentales.

## AP-001 · Modularidad

Cada sistema resolverá una única responsabilidad claramente definida.

---

## AP-002 · Bajo acoplamiento

Los módulos dependerán lo menos posible entre sí.

La comunicación deberá realizarse mediante interfaces bien definidas.

---

## AP-003 · Alta cohesión

Cada módulo concentrará funcionalidades relacionadas.

No se mezclarán responsabilidades diferentes dentro del mismo componente.

---

## AP-004 · Escalabilidad

La incorporación de nuevos módulos no deberá requerir modificaciones importantes en los módulos existentes.

---

## AP-005 · Extensibilidad

La arquitectura deberá facilitar la incorporación de nuevas capacidades.

---

## AP-006 · Reutilización

Siempre que sea posible, los componentes serán reutilizables.

---

## AP-007 · Independencia tecnológica

Las decisiones de negocio no dependerán directamente de bibliotecas externas.

Las tecnologías podrán evolucionar sin afectar la lógica principal del sistema.

---

## AP-008 · Arquitectura antes que implementación

Ninguna decisión de implementación podrá comprometer la arquitectura general del proyecto.

La arquitectura constituye el contrato técnico permanente de GeoMotion Studio.

---

# Relación con otros documentos

Este documento mantiene relación directa con el resto de la documentación del proyecto.

00_FUNDAMENTOS.md

Define los principios generales del proyecto.

↓

01_VISIÓN_DEL_PRODUCTO.md

Describe qué es GeoMotion Studio.

↓

02_ARQUITECTURA.md

Define cómo se organiza el software.

↓

03_SISTEMA_DE_DISEÑO.md

Describe la interfaz de usuario.

↓

04_PILA_TECNOLÓGICA.md

Describe las tecnologías utilizadas.

↓

05_HOJA_DE_RUTA.md

Planifica la evolución del proyecto.

Todos estos documentos deberán evolucionar de forma coordinada.

La documentación del Manual de Ingeniería mantiene una relación jerárquica de refinamiento.

Cada documento desarrolla el nivel de abstracción definido por el documento inmediatamente anterior, sin redefinir sus principios ni invadir las responsabilidades asignadas a otros documentos.

En consecuencia:

- `00_FUNDAMENTOS.md` establece los principios permanentes del proyecto.
- `01_VISIÓN_DEL_PRODUCTO.md` proyecta dichos principios sobre el producto.
- `02_ARQUITECTURA.md` define la organización técnica necesaria para materializar esa visión.
- Los documentos especializados desarrollan los distintos dominios arquitectónicos derivados de esta arquitectura.

Toda evolución del Manual deberá preservar esta cadena de autoridad documental.

---

# CAPÍTULO 1 · Visión General de la Arquitectura

## 1.1 Objetivo

La arquitectura de GeoMotion Studio define la organización interna del software y establece las reglas que permiten desarrollar una plataforma escalable, mantenible y preparada para evolucionar durante muchos años.

Este capítulo presenta una visión global de dicha arquitectura y explica cómo se relacionan sus distintos componentes.

La arquitectura constituye el marco organizativo sobre el que se construyen el resto de las decisiones técnicas del proyecto y deberá mantenerse alineada con la Arquitectura Modular y la Arquitectura de Contratos aprobadas.

---

## 1.2 Filosofía arquitectónica

GeoMotion Studio no será desarrollado como una única aplicación monolítica.

Tampoco se construirá como un conjunto desordenado de componentes independientes.

La plataforma estará organizada como un conjunto de **módulos arquitectónicos especializados** que colaboran entre sí mediante **contratos arquitectónicos** claramente definidos.

Cada módulo será responsable de un único dominio funcional y será propietario de las capacidades que le correspondan.

Esta organización permitirá:

- Reducir el acoplamiento entre módulos.
- Facilitar el mantenimiento.
- Favorecer las pruebas automatizadas.
- Simplificar la incorporación de nuevas funcionalidades.
- Permitir la colaboración entre múltiples desarrolladores.
- Evolucionar cada módulo de forma independiente mientras preserve sus contratos públicos.

---

## 1.3 Modelo conceptual

La arquitectura puede entenderse como una serie de niveles de responsabilidad.

```text
                    Usuario
                       │
                       ▼
              Interfaz de Usuario
                       │
                       ▼
               Capa de Aplicación
                       │
                       ▼
          Módulos Arquitectónicos
                       │
                       ▼
          Capacidades Compartidas
                       │
                       ▼
         Infraestructura y Plataforma
```

Cada nivel posee responsabilidades claramente diferenciadas.

Las capas superiores utilizan capacidades ofrecidas por las inferiores mediante contratos arquitectónicos, evitando dependencias en sentido contrario.

---

## 1.4 Componentes principales

La plataforma estará formada por los siguientes grandes bloques.

### Interfaz de Usuario

Responsable de toda la interacción con el usuario.

Incluye:

- Layouts.
- Paneles.
- Ventanas.
- Controles.
- Herramientas.
- Navegación.

---

### Aplicación

Coordina el funcionamiento general del sistema.

Gestiona:

- Inicialización.
- Configuración.
- Estado global.
- Flujo de trabajo.
- Ciclo de vida de la aplicación.

La aplicación actúa como punto de composición de los módulos arquitectónicos y no implementa directamente capacidades propias de los dominios funcionales.

---

### Módulos arquitectónicos

Implementan las capacidades principales del producto.

Entre ellos:

- Project.
- Scene.
- Map.
- Assets.
- Objects.
- Timeline.
- Render.
- Export.

Cada módulo constituye una unidad arquitectónica independiente, propietaria de sus capacidades y responsable de publicar los contratos necesarios para colaborar con el resto del sistema.

---

### Capacidades compartidas

Proporcionan funcionalidades reutilizables.

Ejemplos:

- Eventos.
- Configuración.
- Registro (Logging).
- Internacionalización.
- Utilidades.
- Persistencia.
- Validación.

Las capacidades compartidas no implementan lógica específica de un dominio funcional.

---

### Infraestructura

Representa la capa más cercana a las tecnologías utilizadas.

Incluye las adaptaciones necesarias para interactuar con los frameworks de interfaz, herramientas de construcción, motores de representación, mecanismos de estado, lenguajes, APIs de la plataforma y demás tecnologías oficiales definidas en `04_PILA_TECNOLÓGICA.md`.

La lógica del producto deberá depender lo menos posible de esta capa.

---

## 1.5 Principio de dependencia

Las dependencias deberán seguir una única dirección.

```text
UI
 │
 ▼
Aplicación
 │
 ▼
Módulos Arquitectónicos
 │
 ▼
Capacidades Compartidas
 │
 ▼
Infraestructura
```

Las colaboraciones entre módulos deberán realizarse mediante contratos arquitectónicos publicados por el módulo propietario de cada capacidad.

Nunca deberá producirse una dependencia hacia implementaciones internas de otro módulo.

Este principio reduce el acoplamiento, preserva la independencia entre dominios y facilita la evolución del sistema.

---

## 1.6 Independencia entre módulos

Cada módulo deberá poder desarrollarse de manera independiente.

Como regla general:

- Ningún módulo accederá directamente al estado interno de otro.
- La colaboración entre módulos se realizará mediante contratos arquitectónicos.
- Cada módulo será responsable de sus propios datos y capacidades.
- La implementación interna permanecerá encapsulada.

Este aislamiento constituye uno de los pilares de la Arquitectura Modular de GeoMotion Studio.

---

## 1.7 Beneficios de esta arquitectura

La organización propuesta ofrece múltiples ventajas.

### Escalabilidad

Permite incorporar nuevos módulos sin modificar la estructura existente.

---

### Mantenibilidad

Reduce el impacto de los cambios.

---

### Reutilización

Facilita el uso compartido de capacidades y componentes.

---

### Testabilidad

Los módulos podrán validarse de forma aislada mediante sus contratos.

---

### Evolución tecnológica

La sustitución de bibliotecas o frameworks tendrá un impacto limitado sobre la lógica del producto mientras se preserven los contratos arquitectónicos.

---

## 1.8 Resumen del capítulo

GeoMotion Studio se construirá sobre una arquitectura modular organizada por módulos especializados, capacidades claramente delimitadas y contratos arquitectónicos estables.

Esta organización busca equilibrar simplicidad, flexibilidad y capacidad de evolución, proporcionando una base sólida para el desarrollo del proyecto a largo plazo.

Los capítulos siguientes desarrollarán en detalle la organización del sistema, sus módulos y las reglas que gobiernan la colaboración entre ellos.

---

# CAPÍTULO 2 · Modelo Arquitectónico

## 2.1 Objetivo

Este capítulo define el modelo arquitectónico adoptado por GeoMotion Studio.

El modelo arquitectónico establece la forma en que se organiza el software, cómo se distribuyen las responsabilidades entre sus componentes y cuáles son las reglas que deberán respetarse durante todo el desarrollo.

Su propósito es garantizar que el crecimiento del proyecto se produzca de manera ordenada, manteniendo la coherencia entre todos los módulos del sistema.

---

## 2.2 Enfoque arquitectónico

GeoMotion Studio adopta una **Arquitectura Modular basada en capacidades y dominios funcionales**.

En este enfoque, el software se organiza en módulos arquitectónicos que representan capacidades del producto, en lugar de agrupar el código únicamente por tipo de archivo o criterio tecnológico.

Cada módulo:

- Representa un dominio funcional claramente definido.
- Es propietario exclusivo de las capacidades que implementa.
- Encapsula completamente su implementación interna.
- Publica únicamente los contratos arquitectónicos necesarios para colaborar con otros módulos.

Esta organización refleja la estructura funcional del producto descrita en `01_VISIÓN_DEL_PRODUCTO.md` y desarrollada en la Arquitectura Modular oficial.

---

## 2.3 Organización por dominios

Cada dominio representa un área funcional claramente definida.

Ejemplos de dominios:

- Project
- Scene
- Map
- Assets
- Objects
- Timeline
- Render
- Export
- Settings
- Plugins

Cada dominio posee una responsabilidad específica, será propietario de sus capacidades y deberá evolucionar de forma independiente sin afectar a los demás módulos mientras preserve sus contratos arquitectónicos.

---

## 2.4 Separación de responsabilidades

La arquitectura se basa en el principio de responsabilidad única.

Cada módulo responderá únicamente por aquello que le corresponde.

Por ejemplo:

El módulo **Scene** administra la organización de las escenas, pero no realiza tareas de renderizado.

El módulo **Render** genera la representación visual, pero no modifica el contenido de las escenas.

El módulo **Assets** administra los recursos del proyecto, pero no controla el comportamiento de los objetos que los utilizan.

Esta separación reduce el acoplamiento, facilita el mantenimiento y permite la evolución independiente de cada dominio funcional.

---

## 2.5 Modelo de organización

La arquitectura se organiza en cinco niveles principales.

```text
┌───────────────────────────────────────┐
│          Interfaz de Usuario          │
├───────────────────────────────────────┤
│             Aplicación                │
├───────────────────────────────────────┤
│      Módulos Arquitectónicos          │
├───────────────────────────────────────┤
│     Capacidades Compartidas           │
├───────────────────────────────────────┤
│     Infraestructura y Plataforma      │
└───────────────────────────────────────┘
```

Cada nivel posee responsabilidades específicas.

La colaboración entre módulos arquitectónicos deberá realizarse mediante contratos arquitectónicos, evitando dependencias directas sobre implementaciones internas.

---

## 2.6 Flujo de dependencias

Las dependencias deberán respetar una única dirección.

```text
UI
 │
 ▼
Aplicación
 │
 ▼
Módulos
 │
 ▼
Capacidades Compartidas
 │
 ▼
Infraestructura
```

Nunca se permitirá que una capa inferior dependa de una superior.

Las dependencias entre módulos deberán establecerse sobre contratos arquitectónicos publicados por el módulo propietario de la capacidad correspondiente.

Este principio evita dependencias circulares y mantiene una arquitectura estable y desacoplada.

---

## 2.7 Aislamiento entre módulos

Cada módulo funcional deberá comportarse como una unidad arquitectónica independiente.

Como norma general:

- No accederá directamente al estado interno de otros módulos.
- Expondrá únicamente los contratos arquitectónicos necesarios para colaborar con otros módulos.
- Ocultará completamente su implementación interna.
- Podrá evolucionar internamente sin afectar a los consumidores mientras preserve sus contratos públicos.

Este aislamiento facilita el desarrollo paralelo y reduce el impacto de los cambios.

---

## 2.8 Comunicación entre módulos

Los módulos no intercambiarán información mediante dependencias directas sobre implementaciones.

La comunicación deberá realizarse mediante contratos arquitectónicos.

Los mecanismos concretos utilizados para implementar dichos contratos podrán incluir, entre otros:

- APIs.
- Eventos.
- Servicios.
- Mensajería.
- Estado compartido cuando resulte estrictamente necesario.

Estos mecanismos constituyen decisiones de implementación y no forman parte del modelo arquitectónico.

Este enfoque mantiene el bajo acoplamiento entre módulos y preserva la independencia de cada dominio funcional.

---

## 2.9 Beneficios del modelo

La arquitectura propuesta ofrece las siguientes ventajas:

- Escalabilidad.
- Reutilización.
- Facilidad de mantenimiento.
- Incorporación sencilla de nuevas capacidades.
- Reducción de dependencias.
- Mayor estabilidad del sistema.
- Mejor capacidad de prueba.
- Evolución independiente de los módulos.
- Claridad organizativa.

Estos beneficios justifican la adopción del modelo arquitectónico definido en este documento.

---

## 2.10 Restricciones arquitectónicas

Con el fin de preservar la coherencia del proyecto, deberán respetarse las siguientes restricciones:

- Cada capacidad tendrá un único módulo propietario.
- Ningún módulo podrá asumir responsabilidades que correspondan a otro.
- Las dependencias circulares estarán prohibidas.
- Los componentes reutilizables deberán ubicarse fuera de los dominios específicos cuando constituyan capacidades compartidas.
- Toda colaboración entre módulos deberá realizarse mediante contratos arquitectónicos.
- Ninguna implementación interna formará parte del contrato público.
- Las decisiones de implementación no podrán comprometer la organización general del sistema.

El incumplimiento de estas restricciones deberá considerarse una desviación arquitectónica.

---

## 2.11 Primera decisión arquitectónica

### Arquitectura Modular basada en Capacidades

**ADR independiente:** [ADR-016](../adr/ADR-016.md).

**Referencia documental heredada:** `ADR-001` en `DOC-002 §2.11`.

**Estado:** Aprobada.

GeoMotion Studio adopta una Arquitectura Modular basada en dominios funcionales y capacidades.

La organización del sistema reflejará la organización funcional del producto.

Cada módulo será propietario exclusivo de sus capacidades y colaborará con el resto del sistema mediante contratos arquitectónicos estables.

La definición completa de esta arquitectura se desarrolla en la documentación especializada correspondiente.

---

## 2.12 Resumen del capítulo

GeoMotion Studio se desarrollará siguiendo una Arquitectura Modular basada en dominios funcionales, capacidades claramente delimitadas y contratos arquitectónicos.

La organización propuesta favorece el bajo acoplamiento, la alta cohesión y la evolución independiente de los distintos módulos del producto.

Este modelo servirá como base para definir, en los capítulos siguientes, la estructura del repositorio, los módulos del sistema y las reglas de colaboración entre ellos.

---

# CAPÍTULO 3 · Organización del Monorepo

## 3.1 Objetivo

Este capítulo define la organización física del repositorio de GeoMotion Studio.

La estructura del proyecto deberá reflejar la arquitectura aprobada y facilitar el crecimiento ordenado de la plataforma.

El objetivo es que cualquier desarrollador pueda localizar rápidamente cualquier componente del sistema, comprender su propósito y mantener la correspondencia entre la arquitectura lógica y su representación física.

La organización física del repositorio constituye una representación de la arquitectura, pero no la define ni la sustituye.

---

## 3.2 ¿Por qué un Monorepo?

GeoMotion Studio se desarrollará como un **Monorepo**.

Un Monorepo es un único repositorio Git que contiene todos los componentes del proyecto.

Esta decisión permite:

- Compartir código entre aplicaciones.
- Compartir configuraciones.
- Compartir librerías.
- Mantener una única versión del proyecto.
- Simplificar el proceso de desarrollo.
- Facilitar las pruebas.
- Automatizar la integración continua.
- Evitar duplicación de código.
- Mantener una evolución coordinada de todos los módulos del sistema.

El crecimiento del proyecto no implicará la creación de múltiples repositorios independientes, salvo casos excepcionales debidamente justificados mediante una decisión de arquitectura.

---

## 3.3 Estructura general

La organización general del repositorio será la siguiente:

```text
GeoMotionStudio/

├── apps/
├── packages/
├── docs/
├── scripts/
├── configs/
├── assets/
├── tests/
├── .github/

├── configuración del proyecto
├── configuración del workspace
├── configuración de construcción
├── configuración del lenguaje
├── README.md
└── LICENSE
```

Cada directorio tendrá una responsabilidad claramente definida y deberá respetar las fronteras establecidas por la arquitectura.

La estructura física podrá evolucionar con el tiempo siempre que preserve la organización arquitectónica aprobada.

---

## 3.4 Directorio apps/

El directorio `apps/` contendrá las aplicaciones ejecutables del proyecto.

Ejemplos:

```text
apps/

web/
desktop/
mobile/
docs/
```

### web/

Aplicación web principal.

Será la primera implementación oficial de GeoMotion Studio.

### desktop/

Versión de escritorio basada en la tecnología oficialmente aprobada.

Su incorporación se evaluará en fases posteriores.

### mobile/

Aplicación móvil.

Su objetivo será ofrecer funcionalidades complementarias, no reemplazar la experiencia de escritorio.

### docs/

Sitio oficial de documentación.

Permitirá publicar manuales, tutoriales y referencias técnicas.

Las aplicaciones actuarán como puntos de composición de módulos arquitectónicos y no implementarán capacidades propias de los dominios funcionales cuando estas pertenezcan a módulos reutilizables.

---

## 3.5 Directorio packages/

El directorio `packages/` contendrá las bibliotecas reutilizables del proyecto.

Ningún código específico de una aplicación deberá ubicarse aquí.

Ejemplo:

```text
packages/

ui/
core/
engine/
maps/
assets/
timeline/
render/
shared/
config/
utils/
```

Cada paquete deberá ser reutilizable por una o varias aplicaciones.

Su organización deberá mantenerse alineada con la Arquitectura Modular aprobada y respetar la propiedad de capacidades definida para cada módulo arquitectónico.

---

## 3.6 Directorio docs/

Contendrá toda la documentación oficial.

Ejemplo:

```text
docs/

00_FUNDAMENTOS.md
01_VISIÓN_DEL_PRODUCTO.md
02_ARQUITECTURA.md
03_SISTEMA_DE_DISEÑO.md
04_PILA_TECNOLÓGICA.md
05_HOJA_DE_RUTA.md

adr/

manuales/

api/

diagramas/
```

La documentación se considera parte del producto y deberá mantenerse sincronizada con la arquitectura y con las decisiones aprobadas.

---

## 3.7 Directorio scripts/

Contendrá herramientas de automatización.

Ejemplos:

- generación de proyectos
- validaciones
- migraciones
- generación de documentación
- utilidades internas

Los scripts no deberán contener lógica funcional perteneciente a los módulos arquitectónicos.

---

## 3.8 Directorio configs/

Agrupará todas las configuraciones compartidas.

Ejemplos:

- calidad del código
- formato del código
- lenguaje de programación
- sistema de diseño
- pruebas unitarias
- pruebas de integración

Las herramientas concretas asociadas a estas configuraciones se definen en `04_PILA_TECNOLÓGICA.md`.

Centralizar estas configuraciones evita duplicaciones y facilita el mantenimiento.

---

## 3.9 Directorio assets/

Almacenará recursos comunes del proyecto.

Ejemplos:

- logotipos
- iconografía
- tipografías
- imágenes institucionales
- material gráfico

No deberá utilizarse para almacenar recursos específicos de proyectos creados por los usuarios.

---

## 3.10 Directorio tests/

Contendrá pruebas compartidas.

Ejemplos:

- pruebas de integración
- pruebas end-to-end
- datos de prueba
- utilidades para testing

Cada módulo podrá mantener además sus propias pruebas unitarias cuando resulte conveniente.

La organización de las pruebas deberá facilitar la validación continua de la arquitectura y de los contratos entre módulos.

---

## 3.11 Directorio .github/

Agrupará la configuración relacionada con GitHub.

Ejemplos:

- GitHub Actions
- Plantillas de Issues
- Pull Requests
- Configuración de Dependabot
- Workflows

Estos elementos forman parte de la infraestructura del proyecto y no de la arquitectura funcional.

---

## 3.12 Reglas generales

Toda la organización del repositorio deberá respetar las siguientes reglas:

- Cada directorio tendrá una única responsabilidad.
- Se evitarán estructuras excesivamente profundas.
- No se duplicará código entre aplicaciones.
- Los paquetes deberán ser reutilizables.
- Las aplicaciones consumirán capacidades publicadas por los módulos propietarios.
- La documentación evolucionará junto con la arquitectura.
- La estructura física no modificará la organización arquitectónica aprobada.

---

## 3.13 Segunda decisión arquitectónica

### Organización del repositorio como Monorepo

**ADR independiente:** [ADR-017](../adr/ADR-017.md).

**Referencia documental heredada:** `ADR-002` en `DOC-002 §3.13`.

**Estado:** Aprobada.

GeoMotion Studio se organizará como un Monorepo compuesto por aplicaciones, paquetes compartidos, documentación, configuraciones y herramientas coordinadas.

Esta organización permitirá compartir capacidades, mantener una gestión centralizada del proyecto y facilitar la evolución coordinada de todos los módulos sin comprometer la arquitectura aprobada.

La herramienta concreta utilizada para administrar el workspace se define en `04_PILA_TECNOLÓGICA.md` y deberá formalizarse mediante la decisión de arquitectura correspondiente.

---

## 3.14 Resumen del capítulo

La estructura del Monorepo constituye la representación física oficial de GeoMotion Studio.

La organización propuesta favorece la reutilización del código, la separación de responsabilidades, la evolución independiente de los módulos y la preservación de la arquitectura definida por el Manual de Ingeniería.

Todos los desarrollos futuros deberán respetar esta estructura para mantener la coherencia arquitectónica del sistema.

---

# CAPÍTULO 4 · Organización Interna de las Aplicaciones

## 4.1 Objetivo

Este capítulo define cómo deberá organizarse el código fuente de cada aplicación perteneciente a GeoMotion Studio.

Mientras que el capítulo anterior describe la organización del repositorio completo, este capítulo establece la estructura interna que deberán seguir las aplicaciones, comenzando por `apps/web`.

El objetivo es garantizar una organización consistente, facilitar el mantenimiento y asegurar que la organización física de cada aplicación permanezca alineada con la Arquitectura Modular y la Arquitectura de Contratos aprobadas.

---

## 4.2 Principios generales

Toda aplicación deberá respetar los siguientes principios:

- Organización basada en responsabilidades.
- Separación entre interfaz y lógica de negocio.
- Componentes reutilizables.
- Bajo acoplamiento.
- Alta cohesión.
- Escalabilidad.
- Consistencia entre aplicaciones.
- Encapsulamiento de las implementaciones.
- Colaboración mediante contratos arquitectónicos.

La estructura deberá ser suficientemente flexible para soportar la evolución del proyecto durante muchos años.

La organización física de una aplicación no sustituye la arquitectura lógica del sistema; únicamente la representa.

---

## 4.3 Estructura general

Como referencia, una aplicación seguirá una estructura similar a la siguiente:

```text
apps/
└── web/
    ├── public/
    ├── src/
    │   ├── app/
    │   ├── layouts/
    │   ├── features/
    │   ├── components/
    │   ├── services/
    │   ├── hooks/
    │   ├── store/
    │   ├── styles/
    │   ├── assets/
    │   ├── types/
    │   ├── utils/
    │   └── main.tsx
```

No todos los directorios deberán existir desde el primer día.

Se incorporarán cuando sean necesarios.

La estructura podrá evolucionar siempre que preserve las fronteras arquitectónicas establecidas para cada módulo.

---

## 4.4 Directorio app/

Contendrá la configuración principal de la aplicación.

Entre otras responsabilidades:

- Inicialización.
- Providers.
- Configuración global.
- Enrutamiento.
- Contextos.
- Punto de entrada de la interfaz.

El directorio `app/` representa el punto de composición de la aplicación.

No deberá contener lógica propia de los dominios funcionales.

---

## 4.5 Directorio layouts/

Agrupará las estructuras visuales principales.

Ejemplos:

- DesktopLayout
- MobileLayout
- TabletLayout
- EmptyLayout

Los layouts organizan la disposición visual de la aplicación, pero no implementan lógica de negocio ni capacidades pertenecientes a módulos funcionales.

---

## 4.6 Directorio features/

Contendrá los módulos funcionales de la aplicación.

Ejemplo:

```text
features/

project/
scene/
map/
timeline/
assets/
objects/
export/
settings/
```

Cada feature encapsulará:

- Componentes específicos.
- Estado local.
- Servicios propios.
- Hooks.
- Tipos.
- Utilidades internas.

Cada feature deberá corresponderse con un módulo arquitectónico o con una capacidad claramente delimitada.

La colaboración entre features deberá realizarse mediante contratos arquitectónicos, evitando dependencias sobre implementaciones internas.

---

## 4.7 Directorio components/

Almacenará componentes reutilizables de interfaz.

Ejemplos:

- Button
- Dialog
- Modal
- Toolbar
- Icon
- Input
- Sidebar
- Panel

Estos componentes no deberán contener lógica específica de ningún dominio funcional.

Su objetivo será proporcionar elementos reutilizables para la construcción de la interfaz.

---

## 4.8 Directorio services/

Agrupará servicios propios de la aplicación.

Ejemplos:

- API.
- Persistencia.
- Configuración.
- Internacionalización.
- Logging.

Los servicios proporcionan capacidades reutilizables para la aplicación.

No deberán asumir responsabilidades pertenecientes a módulos arquitectónicos especializados.

---

## 4.9 Directorio hooks/

Contendrá hooks reutilizables.

Ejemplos:

- useResize
- useTheme
- useKeyboard
- useViewport
- useDebounce

Cada hook deberá resolver una única responsabilidad.

Los hooks específicos de una feature deberán permanecer dentro de dicha feature.

---

## 4.10 Directorio store/

Gestionará el estado compartido de la aplicación cuando resulte necesario.

Su implementación concreta se define en `10_ESTADO_GLOBAL.md`.

El acceso al estado deberá realizarse mediante interfaces claramente definidas.

Las features no deberán acceder directamente a implementaciones internas del mecanismo de almacenamiento del estado.

---

## 4.11 Directorio styles/

Contendrá los estilos globales.

Ejemplos:

- variables
- reset
- themes
- tipografía
- utilidades CSS

Los estilos específicos de un componente deberán permanecer junto al propio componente cuando resulte conveniente.

---

## 4.12 Directorio assets/

Almacenará recursos propios de la aplicación.

Ejemplos:

- iconos
- imágenes
- cursores
- ilustraciones

Los recursos compartidos entre varias aplicaciones deberán ubicarse en `packages/`.

---

## 4.13 Directorio types/

Contendrá definiciones de tipos compartidos.

Ejemplos:

- Interfaces.
- Enumeraciones.
- Tipos genéricos.

Los tipos específicos de una feature deberán permanecer dentro de dicha feature para preservar el encapsulamiento del módulo.

---

## 4.14 Directorio utils/

Agrupará funciones auxiliares reutilizables.

Ejemplos:

- formateadores
- validadores
- conversiones
- cálculos

Las utilidades no deberán depender de componentes de interfaz ni contener lógica propia de un dominio funcional.

---

## 4.15 Reglas de organización

Para mantener la coherencia del proyecto se establecen las siguientes reglas:

- Ningún componente deberá asumir más de una responsabilidad principal.
- Las features no accederán directamente a la implementación interna de otras features.
- Toda colaboración entre features deberá realizarse mediante contratos arquitectónicos.
- Los componentes reutilizables no dependerán de módulos funcionales.
- Los hooks deberán ser reutilizables.
- Las utilidades deberán ser independientes de los frameworks de interfaz siempre que sea posible.
- La implementación interna de una feature permanecerá encapsulada.

---

## 4.16 Tercera decisión arquitectónica

### Organización basada en Módulos Arquitectónicos

**ADR independiente:** [ADR-018](../adr/ADR-018.md).

**Referencia documental heredada:** `ADR-003` en `DOC-002 §4.16`.

**Estado:** Aprobada.

Cada aplicación organizará su código mediante módulos funcionales alineados con la Arquitectura Modular aprobada.

La estructura física deberá reflejar las fronteras arquitectónicas del sistema y preservar el aislamiento entre módulos mediante contratos arquitectónicos.

Los directorios comunes complementarán esta organización proporcionando capacidades reutilizables para toda la aplicación.

---

## 4.17 Resumen del capítulo

La organización interna de las aplicaciones refleja la Arquitectura Modular de GeoMotion Studio.

La separación entre aplicación, layouts, módulos funcionales, componentes reutilizables y capacidades compartidas proporciona una base sólida para el crecimiento del proyecto, facilita el desarrollo colaborativo y preserva la independencia entre módulos mediante contratos arquitectónicos.

---

# CAPÍTULO 5 · Sistema de Proyectos

## 5.1 Objetivo

El módulo **Project** constituye el punto de entrada lógico para la gestión de proyectos dentro de GeoMotion Studio.

Su responsabilidad es administrar el ciclo de vida de un proyecto, coordinar el acceso a su información y proporcionar el contexto sobre el que operan los demás módulos arquitectónicos.

Todo el trabajo realizado por el usuario estará asociado a un proyecto.

El módulo Project no implementa las capacidades propias de otros módulos; únicamente coordina su utilización mediante los contratos arquitectónicos correspondientes.

---

## 5.2 Definición de Proyecto

Un proyecto representa la unidad lógica de trabajo de GeoMotion Studio.

Un proyecto podrá contener referencias a:

- Escenas.
- Assets.
- Configuración.
- Cámaras.
- Objetos.
- Timeline.
- Configuración de exportación.
- Preferencias específicas.
- Metadatos.

El proyecto constituye el contenedor lógico de toda la información necesaria para describir el trabajo del usuario.

---

## 5.3 Responsabilidades

El módulo **Project** será responsable de:

- Crear proyectos.
- Abrir proyectos existentes.
- Guardar proyectos.
- Cerrar proyectos.
- Validar la estructura del proyecto.
- Gestionar la versión del formato.
- Coordinar la carga inicial.
- Coordinar el proceso de guardado.
- Mantener el contexto del proyecto activo.

No será responsable de:

- Renderizar escenas.
- Administrar mapas.
- Gestionar objetos.
- Administrar Assets.
- Gestionar Timeline.
- Controlar la interfaz de usuario.

Cada una de estas responsabilidades pertenece a su módulo arquitectónico correspondiente.

---

## 5.4 Ciclo de vida

Todo proyecto recorrerá el siguiente ciclo de vida.

```text
Nuevo Proyecto
       │
       ▼
Inicialización
       │
       ▼
Carga
       │
       ▼
Edición
       │
       ▼
Guardado
       │
       ▼
Cierre
```

Cada transición deberá completarse correctamente antes de avanzar hacia el siguiente estado.

---

## 5.5 Organización conceptual

Conceptualmente un proyecto estará formado por:

```text
Proyecto

├── Información general
├── Configuración
├── Escenas
├── Assets
├── Objetos
├── Timeline
├── Exportaciones
└── Metadatos
```

Cada uno de estos elementos será administrado por el módulo propietario correspondiente.

El proyecto mantiene la organización general, pero no asume la implementación interna de dichas capacidades.

---

## 5.6 Identidad del proyecto

Cada proyecto dispondrá de un identificador único.

Además podrá almacenar:

- Nombre.
- Descripción.
- Autor.
- Fecha de creación.
- Fecha de modificación.
- Versión.
- Etiquetas.

Estos datos facilitarán la identificación, organización y trazabilidad del proyecto.

---

## 5.7 Estado del proyecto

Un proyecto podrá encontrarse en alguno de los siguientes estados:

- Nuevo.
- Abierto.
- Modificado.
- Guardado.
- Cerrado.
- Recuperado.

La aplicación deberá conocer en todo momento el estado actual del proyecto.

---

## 5.8 Persistencia

La persistencia constituye una responsabilidad del módulo **Project**.

Los demás módulos solicitarán operaciones de carga o guardado mediante los contratos arquitectónicos definidos, sin acceder directamente al mecanismo de persistencia.

Esta separación permite mantener desacoplados los módulos funcionales de la infraestructura de almacenamiento.

---

## 5.9 Compatibilidad

El sistema deberá contemplar la evolución del formato de proyecto.

Cada proyecto almacenará la información necesaria para identificar:

- Versión del formato.
- Compatibilidad.
- Migraciones necesarias.

Siempre que resulte técnicamente posible, la plataforma deberá mantener compatibilidad con versiones anteriores del formato.

---

## 5.10 Integración con otros módulos

El módulo **Project** coordina la colaboración con:

- Scene.
- Assets.
- Map.
- Objects.
- Timeline.
- Export.
- Settings.

La comunicación entre módulos deberá realizarse mediante contratos arquitectónicos.

Project no accederá directamente a las implementaciones internas de dichos módulos.

---

## 5.11 Principios

El módulo Project deberá respetar los siguientes principios:

- Integridad de los datos.
- Compatibilidad.
- Extensibilidad.
- Independencia de la interfaz.
- Bajo acoplamiento.
- Coordinación mediante contratos.
- Propiedad clara de responsabilidades.

---

## 5.12 Cuarta decisión arquitectónica

### Project como contexto raíz del sistema

**ADR independiente:** [ADR-019](../adr/ADR-019.md).

**Referencia documental heredada:** `ADR-004` en `DOC-002 §5.12`.

**Estado:** Aprobada.

Todo el funcionamiento de GeoMotion Studio se organizará alrededor de un proyecto activo.

El módulo Project actuará como coordinador del ciclo de vida del proyecto y como punto de integración entre los distintos módulos arquitectónicos.

Cada módulo conservará la propiedad exclusiva de sus capacidades y colaborará con Project mediante contratos arquitectónicos.

---

## 5.13 Resumen del capítulo

El módulo Project constituye el contexto raíz de trabajo de GeoMotion Studio.

Su responsabilidad es coordinar el ciclo de vida de los proyectos y facilitar la colaboración entre módulos arquitectónicos sin asumir responsabilidades que pertenezcan a otros dominios funcionales.

Esta organización preserva la separación de responsabilidades, favorece el bajo acoplamiento y mantiene la coherencia con la Arquitectura Modular y la Arquitectura de Contratos.

---

# CAPÍTULO 6 · Módulo Scene

## 6.1 Objetivo

El módulo **Scene** es responsable de organizar el contenido visual de un proyecto.

Una escena representa un espacio de trabajo independiente donde el usuario construye una composición geoespacial mediante la combinación de mapas, objetos, cámaras, capas y animaciones.

Cada escena constituye un contexto funcional autónomo dentro de un proyecto.

El módulo Scene coordina dichos elementos, pero no implementa las capacidades propias de los módulos especializados que colaboran en ella.

---

## 6.2 Concepto de escena

Una escena representa una unidad independiente de trabajo.

Cada escena mantiene su propio contexto y puede diferir completamente del resto de las escenas pertenecientes al mismo proyecto.

Una escena podrá contener referencias a:

- Cámara.
- Terreno.
- Capas cartográficas.
- Objetos.
- Timeline.
- Configuración visual.
- Metadatos.

Cada uno de estos elementos será administrado por su módulo arquitectónico correspondiente.

---

## 6.3 Responsabilidades

El módulo **Scene** será responsable de:

- Crear escenas.
- Eliminar escenas.
- Duplicar escenas.
- Renombrar escenas.
- Reordenar escenas.
- Activar la escena actual.
- Administrar su estructura.
- Coordinar la colaboración con otros módulos.

No será responsable de:

- Renderizar la escena.
- Administrar Assets.
- Gestionar mapas.
- Gestionar objetos.
- Administrar Timeline.
- Exportar contenido.

Estas responsabilidades pertenecen a los módulos propietarios de dichas capacidades.

---

## 6.4 Independencia

Cada escena será completamente independiente.

Esto implica que podrá mantener:

- Su propia cámara.
- Su propia configuración cartográfica.
- Sus propios objetos.
- Su propia línea temporal.
- Su propia configuración visual.
- Su propio estado.

Las modificaciones realizadas sobre una escena no deberán afectar al resto de las escenas del proyecto.

---

## 6.5 Escena activa

En cada momento existirá una única escena activa.

La escena activa constituye el contexto principal de trabajo para el usuario.

Los demás módulos deberán obtener la escena activa mediante los contratos arquitectónicos definidos por el módulo Scene.

Ningún módulo accederá directamente a la implementación interna del sistema de escenas.

---

## 6.6 Organización conceptual

Conceptualmente una escena estará formada por:

```text
Escena

├── Cámara
├── Cartografía
├── Objetos
├── Timeline
├── Configuración visual
├── Metadatos
└── Estado
```

Cada uno de estos elementos será administrado por el módulo propietario correspondiente.

Scene mantiene la organización del espacio de trabajo sin asumir responsabilidades ajenas.

---

## 6.7 Integración con otros módulos

El módulo Scene colaborará con:

- Map.
- Objects.
- Assets.
- Timeline.
- Render.
- Export.

La colaboración deberá realizarse mediante contratos arquitectónicos.

Scene no dependerá de implementaciones internas de otros módulos.

---

## 6.8 Ciclo de vida

Toda escena recorrerá el siguiente ciclo:

```text
Crear
   │
   ▼
Inicializar
   │
   ▼
Editar
   │
   ▼
Guardar
   │
   ▼
Cerrar
```

Cada transición deberá preservar la consistencia del estado de la escena.

---

## 6.9 Organización jerárquica

Las escenas pertenecerán siempre a un único proyecto.

```text
Proyecto

├── Escena 01
├── Escena 02
├── Escena 03
└── Escena N
```

Una escena nunca podrá pertenecer simultáneamente a dos proyectos.

---

## 6.10 Principios

El módulo Scene deberá respetar los siguientes principios:

- Independencia entre escenas.
- Integridad del estado.
- Bajo acoplamiento.
- Alta cohesión.
- Escalabilidad.
- Colaboración mediante contratos arquitectónicos.
- Propiedad clara de responsabilidades.

---

## 6.11 Quinta decisión arquitectónica

### Escenas como contextos independientes

**ADR independiente:** [ADR-020](../adr/ADR-020.md).

**Referencia documental heredada:** `ADR-005` en `DOC-002 §6.11`.

**Estado:** Aprobada.

Cada escena constituye un contexto de trabajo independiente dentro de un proyecto.

El módulo Scene será responsable de administrar dicho contexto y coordinar la colaboración con el resto de los módulos arquitectónicos mediante contratos claramente definidos.

La implementación interna de cada módulo permanecerá encapsulada.

---

## 6.12 Resumen del capítulo

El módulo Scene administra los espacios de trabajo de GeoMotion Studio.

Cada escena constituye un contexto independiente que coordina múltiples módulos especializados sin asumir sus responsabilidades internas.

Esta organización favorece la escalabilidad, la reutilización y el bajo acoplamiento definidos por la Arquitectura Modular y la Arquitectura de Contratos.

---

# CAPÍTULO 7 · Módulo Map

## 7.1 Objetivo

El módulo **Map** es responsable de proporcionar el contexto geoespacial sobre el que opera GeoMotion Studio.

Su responsabilidad consiste en administrar la representación del entorno geográfico, las capas cartográficas y las capacidades necesarias para visualizar y navegar la información espacial.

El módulo Map constituye un dominio arquitectónico independiente.

Los demás módulos consumirán sus capacidades mediante contratos arquitectónicos, sin acceder a su implementación interna.

---

## 7.2 Alcance

El módulo Map será responsable de administrar:

- Globo terráqueo.
- Terreno.
- Mapas base.
- Capas cartográficas.
- Sistemas de coordenadas.
- Navegación.
- Cámara geográfica.
- Conversión de coordenadas.
- Información espacial.

No será responsable de administrar:

- Objetos.
- Assets.
- Timeline.
- Exportación.
- Renderizado.
- Interfaz de usuario.

Estas responsabilidades pertenecen a sus respectivos módulos.

---

## 7.3 Principios

El módulo Map deberá respetar los siguientes principios.

### Separación de responsabilidades

La cartografía constituye un dominio independiente del resto del sistema.

La representación geográfica no deberá depender de la existencia de objetos, escenas o recursos específicos.

---

### Precisión

Las posiciones deberán representarse mediante coordenadas geográficas consistentes.

Las conversiones entre distintos sistemas de referencia serán responsabilidad exclusiva del módulo Map.

---

### Escalabilidad

La arquitectura deberá permitir incorporar nuevos conjuntos de datos geográficos y nuevos proveedores cartográficos sin modificar la organización del sistema.

---

### Extensibilidad

Las capacidades cartográficas podrán evolucionar mediante nuevos contratos o implementaciones compatibles sin afectar a los consumidores existentes.

---

## 7.4 Organización conceptual

Conceptualmente el módulo estará compuesto por:

```text
Map

├── Globe
├── Terrain
├── Base Maps
├── Layers
├── Camera
├── Coordinates
├── Navigation
└── Geographic Services
```

Cada capacidad pertenecerá al módulo Map y será publicada mediante contratos arquitectónicos cuando resulte necesario.

---

## 7.5 Sistema de coordenadas

Toda la plataforma utilizará un modelo geográfico común.

Las conversiones entre distintos sistemas de referencia serán responsabilidad exclusiva del módulo Map.

Los demás módulos deberán trabajar utilizando los contratos publicados por este módulo y no implementarán conversiones propias.

---

## 7.6 Cámara geográfica

La cámara geográfica será administrada por el módulo Map.

Entre otras capacidades deberá permitir:

- Zoom.
- Panorámica.
- Rotación.
- Inclinación.
- Vuelo entre ubicaciones.
- Enfoque automático.

Cada escena conservará su propia configuración de cámara, mientras que las capacidades de navegación seguirán siendo responsabilidad del módulo Map.

---

## 7.7 Capas cartográficas

El módulo deberá permitir administrar distintos tipos de capas cartográficas.

Ejemplos:

- Imágenes satelitales.
- Cartografía vectorial.
- Cartografía topográfica.
- Modelos digitales de elevación.
- Capas temáticas.
- Capas personalizadas.

Las capas podrán activarse, desactivarse, configurarse y reorganizarse mediante las capacidades publicadas por el módulo.

---

## 7.8 Navegación

El módulo ofrecerá capacidades para recorrer el entorno geográfico.

Entre ellas:

- Zoom continuo.
- Rotación.
- Vuelo hacia coordenadas.
- Búsqueda de ubicaciones.
- Historial de navegación.
- Marcadores.

La interfaz de usuario consumirá estas capacidades sin implementar lógica cartográfica propia.

---

## 7.9 Integración con otros módulos

El módulo Map colaborará con:

- Scene.
- Objects.
- Render.
- Timeline.
- Export.

La colaboración se realizará exclusivamente mediante contratos arquitectónicos.

Los demás módulos no dependerán de implementaciones internas del módulo Map.

---

## 7.10 Rendimiento

El módulo deberá optimizar automáticamente la administración de la información cartográfica.

Podrá utilizar, entre otras estrategias:

- Carga progresiva.
- Niveles de detalle.
- Caché.
- Liberación de recursos.
- Actualización incremental.

Estas decisiones corresponden a la implementación y no modifican la arquitectura del módulo.

---

## 7.11 Sexta decisión arquitectónica

### Map como módulo cartográfico independiente

**ADR independiente:** [ADR-021](../adr/ADR-021.md).

**Referencia documental heredada:** `ADR-006` en `DOC-002 §7.11`.

**Estado:** Aprobada.

Toda la lógica relacionada con mapas, terreno, navegación, coordenadas y representación geográfica se concentrará en un único módulo arquitectónico especializado.

Los demás módulos accederán a estas capacidades mediante contratos arquitectónicos, evitando duplicaciones de lógica y preservando el bajo acoplamiento.

---

## 7.12 Resumen del capítulo

El módulo Map proporciona el contexto geográfico de GeoMotion Studio.

Su responsabilidad consiste en administrar las capacidades cartográficas del sistema y ofrecerlas al resto de los módulos mediante contratos arquitectónicos, preservando la independencia entre dominios funcionales y manteniendo la coherencia con la Arquitectura Modular y la Arquitectura de Contratos.

---

# CAPÍTULO 8 · Módulo Objects

## 8.1 Objetivo

El módulo **Objects** es responsable de administrar todas las entidades presentes dentro de una escena.

Un objeto representa una instancia posicionable dentro del entorno geoespacial, independientemente de su representación visual o del recurso del que provenga.

El módulo Objects constituye un dominio arquitectónico independiente.

Su responsabilidad consiste en administrar el ciclo de vida, la identidad, la organización y el estado de los objetos de una escena, colaborando con los demás módulos exclusivamente mediante contratos arquitectónicos.

---

## 8.2 Concepto de objeto

Un objeto representa una instancia existente dentro de una escena.

Un objeto podrá representar, entre otros:

- Modelos 3D.
- Marcadores.
- Textos.
- Imágenes.
- Etiquetas.
- Líneas.
- Polígonos.
- Cámaras.
- Luces.
- Nuevos tipos incorporados en el futuro.

Los objetos existen únicamente dentro del contexto de una escena.

La representación visual concreta será responsabilidad de otros módulos especializados.

---

## 8.3 Diferencia entre Asset y Objeto

La arquitectura distingue claramente ambos conceptos.

Un **Asset** representa un recurso reutilizable.

Un **Objeto** representa una instancia de utilización de dicho recurso.

Conceptualmente:

```text
Asset
│
└── edificio.glb

↓

Objeto A
Posición: Buenos Aires

↓

Objeto B
Posición: Córdoba

↓

Objeto C
Posición: Mendoza
```

Un mismo Asset podrá estar asociado a múltiples objetos sin necesidad de duplicar el recurso.

Esta separación constituye uno de los principios fundamentales de la arquitectura.

---

## 8.4 Responsabilidades

El módulo **Objects** será responsable de:

- Crear objetos.
- Eliminar objetos.
- Duplicar objetos.
- Agrupar objetos.
- Renombrar objetos.
- Administrar la jerarquía.
- Gestionar sus transformaciones.
- Mantener su identidad.
- Administrar su estado.

No será responsable de:

- Gestionar Assets.
- Renderizar objetos.
- Administrar mapas.
- Gestionar Timeline.
- Exportar contenido.

Cada una de estas capacidades pertenece a su módulo arquitectónico correspondiente.

---

## 8.5 Transformaciones

Todo objeto deberá disponer de una transformación propia.

Como mínimo:

- Posición.
- Rotación.
- Escala.

Estas propiedades podrán evolucionar mediante la colaboración con el módulo Timeline, manteniendo la propiedad de cada responsabilidad en su módulo correspondiente.

---

## 8.6 Identidad

Cada objeto dispondrá de una identidad única.

Entre sus atributos podrán encontrarse:

- Identificador.
- Nombre.
- Tipo.
- Referencia al Asset asociado.
- Escena propietaria.
- Estado.
- Metadatos.

La identidad permitirá localizar y administrar el objeto durante todo su ciclo de vida.

---

## 8.7 Organización jerárquica

Los objetos podrán organizarse mediante estructuras jerárquicas.

Ejemplo:

```text
Vehículo

├── Chasis
├── Rueda 1
├── Rueda 2
├── Rueda 3
└── Rueda 4
```

Las relaciones jerárquicas serán responsabilidad del módulo Objects.

La representación visual de dichas relaciones corresponderá a la interfaz de usuario.

---

## 8.8 Organización dentro de la escena

Cada escena administrará su propia colección de objetos.

Conceptualmente:

```text
Escena

├── Cámara
├── Vehículo
├── Árbol
├── Edificio
└── Marcadores
```

Las escenas no compartirán objetos.

Únicamente compartirán referencias a Assets cuando resulte necesario.

---

## 8.9 Estados

Todo objeto podrá encontrarse, entre otros, en los siguientes estados:

- Visible.
- Oculto.
- Bloqueado.
- Seleccionado.
- Eliminado.

La administración de estos estados pertenece exclusivamente al módulo Objects.

---

## 8.10 Selección

El módulo proporcionará capacidades para:

- Selección simple.
- Selección múltiple.
- Selección por área.
- Selección jerárquica.

La interfaz consumirá estas capacidades sin implementar reglas propias de selección.

---

## 8.11 Integración con otros módulos

El módulo Objects colaborará con:

- Assets.
- Map.
- Render.
- Timeline.
- Export.
- Scene.

Toda interacción deberá realizarse mediante contratos arquitectónicos.

Ningún módulo accederá directamente a la implementación interna de Objects.

---

## 8.12 Rendimiento

La arquitectura deberá permitir administrar un gran número de objetos manteniendo un comportamiento predecible.

La implementación podrá utilizar estrategias como:

- Referencias compartidas.
- Carga diferida.
- Índices espaciales.
- Caché.
- Actualizaciones parciales.

Estas decisiones pertenecen al ámbito de implementación y no modifican la arquitectura del módulo.

---

## 8.13 Séptima decisión arquitectónica

### Separación entre Assets y Objects

**ADR independiente:** [ADR-022](../adr/ADR-022.md).

**Referencia documental heredada:** `ADR-007` en `DOC-002 §8.13`.

**Estado:** Aprobada.

Los Assets representan recursos reutilizables.

Los Objects representan instancias de utilización de dichos recursos dentro de una escena.

Esta separación reduce la duplicación de información, favorece la reutilización de recursos y preserva la independencia entre módulos arquitectónicos.

---

## 8.14 Resumen del capítulo

El módulo Objects administra todas las entidades presentes en una escena.

Su responsabilidad consiste en organizar su ciclo de vida, identidad, estado y relaciones jerárquicas, colaborando con el resto de los módulos mediante contratos arquitectónicos y preservando la separación entre recursos reutilizables e instancias del dominio funcional.

---

# CAPÍTULO 9 · Módulo Assets

## 9.1 Objetivo

El módulo **Assets** es responsable de administrar todos los recursos digitales utilizados por GeoMotion Studio.

Su responsabilidad consiste en incorporar, registrar, organizar, localizar y proporcionar acceso a dichos recursos para el resto de los módulos arquitectónicos.

Los Assets representan recursos reutilizables del proyecto y constituyen un dominio independiente dentro de la arquitectura.

El módulo Assets no administra las instancias de utilización de dichos recursos, responsabilidad que pertenece al módulo Objects.

---

## 9.2 Concepto de Asset

Un Asset representa un recurso reutilizable incorporado a un proyecto.

Entre otros, podrá representar:

- Modelos 3D.
- Imágenes.
- Iconos.
- Texturas.
- Vídeos.
- Audio.
- Tipografías.
- Materiales.
- Archivos vectoriales.
- Archivos ráster.
- Recursos personalizados.

Los Assets no poseen posición dentro de una escena.

Su utilización se realiza mediante referencias desde otros módulos.

---

## 9.3 Principios fundamentales

El módulo Assets deberá respetar los siguientes principios.

### Reutilización

Cada Asset existirá una única vez dentro de un proyecto.

Las distintas escenas y objetos compartirán referencias al mismo recurso cuando resulte necesario.

---

### Independencia

Los Assets serán independientes de las escenas, los objetos y cualquier otro contexto funcional.

Su existencia no dependerá de la utilización que otros módulos hagan de ellos.

---

### Referencias

Los módulos consumidores almacenarán referencias a los Assets.

Nunca deberán mantener copias innecesarias del mismo recurso.

---

### Propiedad

Toda la información asociada a un Asset será administrada exclusivamente por el módulo Assets.

Ningún otro módulo modificará directamente dicha información.

---

## 9.4 Ciclo de vida

Todo Asset recorrerá el siguiente ciclo de vida.

```text
Importar
    │
    ▼
Registrar
    │
    ▼
Organizar
    │
    ▼
Utilizar
    │
    ▼
Actualizar
    │
    ▼
Eliminar
```

Cada transición deberá preservar la integridad del proyecto y de las referencias existentes.

---

## 9.5 Información administrada

Cada Asset dispondrá, como mínimo, de la siguiente información:

- Identificador.
- Nombre.
- Tipo.
- Ruta lógica.
- Tamaño.
- Fecha de incorporación.
- Autor (cuando corresponda).
- Etiquetas.
- Metadatos.
- Estado.

Estos datos permitirán su administración y localización dentro del proyecto.

---

## 9.6 Organización

Los Assets podrán organizarse mediante estructuras lógicas.

Por ejemplo:

```text
Assets

├── Modelos
├── Imágenes
├── Iconos
├── Texturas
├── Vídeos
├── Audio
├── Tipografías
└── Otros
```

La organización lógica será independiente del mecanismo físico de almacenamiento utilizado por la implementación.

---

## 9.7 Referencias

Los objetos no almacenarán directamente los recursos.

En su lugar conservarán una referencia al Asset correspondiente.

Conceptualmente:

```text
Asset

ID: A-154

↓

Objeto

assetId = A-154
```

Este mecanismo evita duplicaciones y favorece la reutilización de recursos.

---

## 9.8 Integración con otros módulos

El módulo Assets colaborará con:

- Project.
- Scene.
- Objects.
- Render.
- Export.

Toda interacción se realizará mediante contratos arquitectónicos.

Ningún módulo accederá directamente a la implementación interna del módulo Assets.

---

## 9.9 Evolución de los recursos

Cuando un Asset sea actualizado, el módulo deberá preservar la consistencia de las referencias existentes siempre que resulte posible.

La evolución de un recurso no deberá requerir modificaciones innecesarias en los módulos consumidores.

Los mecanismos concretos de versionado y migración pertenecen a la implementación.

---

## 9.10 Eliminación

Antes de eliminar un Asset, el módulo deberá comprobar si existen referencias activas.

Cuando corresponda, deberá impedir la generación de referencias inválidas o proporcionar mecanismos seguros para su resolución.

La política concreta de eliminación será definida por la implementación correspondiente.

---

## 9.11 Rendimiento

La arquitectura deberá permitir administrar grandes volúmenes de recursos de forma eficiente.

La implementación podrá incorporar estrategias como:

- Caché.
- Carga diferida.
- Reutilización de recursos.
- Liberación automática de recursos no utilizados.

Estas decisiones no modifican la organización arquitectónica del módulo.

---

## 9.12 Octava decisión arquitectónica

### Gestión centralizada de Assets

**ADR independiente:** [ADR-023](../adr/ADR-023.md).

**Referencia documental heredada:** `ADR-008` en `DOC-002 §9.12`.

**Estado:** Aprobada.

Todos los recursos reutilizables del proyecto serán administrados por un único módulo Assets.

Los demás módulos accederán a dichos recursos mediante contratos arquitectónicos y referencias, evitando duplicaciones de información y preservando la independencia entre dominios funcionales.

---

## 9.13 Resumen del capítulo

El módulo Assets constituye el repositorio lógico de recursos reutilizables de GeoMotion Studio.

Su responsabilidad consiste en administrar el ciclo de vida de los Assets y proporcionar acceso controlado al resto de los módulos mediante contratos arquitectónicos, preservando el bajo acoplamiento, la reutilización y la coherencia de la Arquitectura Modular.

---

# CAPÍTULO 10 · Módulo Timeline

## 10.1 Objetivo

El módulo **Timeline** es responsable de administrar el tiempo dentro de GeoMotion Studio.

Su responsabilidad consiste en coordinar la evolución temporal de los distintos elementos animables del sistema y proporcionar un modelo temporal común para los módulos que requieran sincronización.

El módulo Timeline constituye un dominio arquitectónico independiente.

Los demás módulos consumirán sus capacidades mediante contratos arquitectónicos, sin depender de su implementación interna.

---

## 10.2 Concepto de Timeline

El Timeline representa el contexto temporal de una escena.

Permite coordinar la evolución de:

- Objetos.
- Cámaras.
- Eventos.
- Animaciones.
- Audio.
- Efectos.
- Procesos de exportación.

El tiempo constituye un recurso compartido administrado exclusivamente por este módulo.

---

## 10.3 Responsabilidades

El módulo **Timeline** será responsable de:

- Administrar la línea temporal.
- Gestionar la reproducción.
- Administrar keyframes.
- Gestionar pistas temporales.
- Sincronizar elementos temporales.
- Administrar marcadores.
- Gestionar la duración de una escena.

No será responsable de:

- Renderizar contenido.
- Administrar objetos.
- Gestionar cartografía.
- Exportar proyectos.
- Controlar la interfaz de usuario.

Estas capacidades pertenecen a sus respectivos módulos arquitectónicos.

---

## 10.4 Modelo temporal

El tiempo será representado mediante un modelo temporal continuo.

Conceptualmente:

```text
0 s ─────────────────────────────────────────► Tiempo
```

Cada escena administrará su propia duración utilizando las capacidades proporcionadas por el módulo Timeline.

La representación concreta del tiempo pertenece a la implementación y no modifica la arquitectura del módulo.

---

## 10.5 Keyframes

Las variaciones temporales podrán representarse mediante keyframes.

Cada keyframe describirá un cambio de estado asociado a un instante determinado.

Podrán representar, entre otros:

- Posición.
- Rotación.
- Escala.
- Opacidad.
- Color.
- Propiedades específicas de otros módulos.

El módulo Timeline administra la dimensión temporal.

La interpretación funcional de cada propiedad continúa siendo responsabilidad del módulo propietario correspondiente.

---

## 10.6 Tracks

Las animaciones podrán organizarse mediante pistas temporales.

Conceptualmente:

```text
Timeline

├── Cámara
├── Objetos
├── Texto
├── Marcadores
└── Eventos
```

Cada pista agrupará información temporal homogénea.

La organización concreta de las pistas podrá evolucionar sin afectar a los contratos públicos del módulo.

---

## 10.7 Reproducción

El módulo proporcionará capacidades para:

- Reproducir.
- Pausar.
- Detener.
- Reproducción continua.
- Reproducción fotograma a fotograma.
- Avance.
- Retroceso.
- Navegación temporal.

La coordinación temporal será responsabilidad exclusiva del módulo Timeline.

---

## 10.8 Representación temporal

Aunque internamente el tiempo pueda administrarse mediante distintos mecanismos, la arquitectura permitirá su representación utilizando unidades apropiadas para cada contexto.

La interfaz podrá ofrecer representación basada en fotogramas, tiempo absoluto u otras unidades compatibles sin modificar la arquitectura del módulo.

---

## 10.9 Marcadores

Los usuarios podrán incorporar marcadores temporales.

Los marcadores facilitarán:

- Organización de la edición.
- Navegación.
- Referencias temporales.
- Sincronización de tareas.

Su administración corresponde exclusivamente al módulo Timeline.

---

## 10.10 Integración con otros módulos

El módulo Timeline colaborará con:

- Objects.
- Map.
- Scene.
- Render.
- Export.

La comunicación entre módulos se realizará exclusivamente mediante contratos arquitectónicos.

Ningún módulo accederá directamente a la implementación interna de Timeline.

---

## 10.11 Rendimiento

La arquitectura deberá permitir administrar proyectos con una gran cantidad de información temporal manteniendo un comportamiento predecible.

La implementación podrá incorporar mecanismos como:

- Evaluación bajo demanda.
- Actualizaciones incrementales.
- Caché.
- Optimización de keyframes.
- Procesamiento parcial.

Estas decisiones pertenecen al ámbito de implementación y no modifican la organización arquitectónica del módulo.

---

## 10.12 Novena decisión arquitectónica

### Timeline como dominio temporal centralizado

**ADR independiente:** [ADR-024](../adr/ADR-024.md).

**Referencia documental heredada:** `ADR-009` en `DOC-002 §10.12`.

**Estado:** Aprobada.

Toda la gestión del tiempo en GeoMotion Studio será administrada por un único módulo Timeline.

Los demás módulos sincronizarán sus procesos temporales mediante contratos arquitectónicos, preservando la independencia entre dominios funcionales y evitando duplicaciones de lógica temporal.

---

## 10.13 Resumen del capítulo

El módulo Timeline constituye el dominio responsable de la gestión temporal de GeoMotion Studio.

Su responsabilidad consiste en coordinar la evolución temporal del sistema mediante contratos arquitectónicos, proporcionando un modelo común para la sincronización de los distintos módulos y preservando el bajo acoplamiento definido por la Arquitectura Modular.

---

# CAPÍTULO 11 · Módulo Render

## 11.1 Objetivo

El módulo **Render** es responsable de generar la representación visual del estado del sistema.

Su responsabilidad consiste en transformar la información proporcionada por los distintos módulos arquitectónicos en una representación gráfica coherente para el usuario.

El módulo Render constituye un dominio arquitectónico independiente.

Los demás módulos colaborarán con él exclusivamente mediante contratos arquitectónicos, sin depender de su implementación interna.

---

## 11.2 Alcance

El módulo Render será responsable de:

- Generar la representación visual de la escena.
- Coordinar el proceso de renderizado.
- Administrar los distintos modos de visualización.
- Gestionar la actualización visual.
- Optimizar la representación gráfica.
- Coordinar la composición final de la imagen.

No será responsable de:

- Administrar escenas.
- Gestionar objetos.
- Administrar mapas.
- Gestionar Assets.
- Controlar Timeline.
- Gestionar proyectos.
- Administrar la interfaz de usuario.

Cada una de estas responsabilidades pertenece a su módulo correspondiente.

---

## 11.3 Principios

El módulo Render deberá respetar los siguientes principios.

### Separación de responsabilidades

El renderizado constituye una responsabilidad independiente de la lógica funcional.

Los módulos funcionales describen el estado del sistema.

El módulo Render representa dicho estado visualmente.

---

### Independencia tecnológica

La arquitectura no dependerá de un motor gráfico específico.

La implementación podrá evolucionar sin modificar los contratos arquitectónicos publicados por el módulo.

---

### Consistencia

La representación visual deberá reflejar fielmente el estado proporcionado por los módulos propietarios de la información.

Render no modificará dicho estado.

---

### Escalabilidad

La arquitectura permitirá incorporar nuevas capacidades de representación sin alterar el resto del sistema.

---

## 11.4 Organización conceptual

Conceptualmente el módulo estará compuesto por:

```text
Render

├── Render Pipeline
├── Scene Renderer
├── Camera Renderer
├── Lighting
├── Materials
├── Effects
├── Post Processing
└── Output
```

Cada componente forma parte de la implementación del módulo y permanecerá encapsulado.

---

## 11.5 Flujo de renderizado

Conceptualmente el proceso seguirá el siguiente flujo:

```text
Estado del sistema

        │
        ▼

Contratos arquitectónicos

        │
        ▼

Render

        │
        ▼

Representación visual
```

El módulo Render únicamente consume información publicada mediante contratos.

No accederá directamente a implementaciones internas de otros módulos.

---

## 11.6 Cámara

La información necesaria para representar la cámara será obtenida mediante los contratos publicados por los módulos correspondientes.

El módulo Render utilizará dicha información para construir la representación visual, sin asumir la administración del estado de la cámara.

---

## 11.7 Materiales y efectos

La arquitectura permitirá incorporar materiales, iluminación y efectos visuales sin modificar la organización general del sistema.

Su administración interna permanecerá encapsulada dentro del módulo Render.

---

## 11.8 Optimización

El módulo podrá aplicar distintas estrategias de optimización, entre ellas:

- Actualización incremental.
- Carga diferida.
- Caché.
- Niveles de detalle.
- Reutilización de recursos gráficos.
- Paralelización cuando resulte posible.

Estas decisiones corresponden exclusivamente a la implementación.

---

## 11.9 Integración con otros módulos

El módulo Render colaborará con:

- Scene.
- Map.
- Objects.
- Assets.
- Timeline.
- Export.

La colaboración se realizará exclusivamente mediante contratos arquitectónicos.

Ningún módulo accederá directamente a la implementación interna de Render.

---

## 11.10 Rendimiento

La arquitectura deberá permitir mantener un comportamiento estable incluso en proyectos complejos.

La implementación podrá evolucionar para incorporar nuevas técnicas de optimización sin modificar la arquitectura ni los contratos publicados.

---

## 11.11 Décima decisión arquitectónica

### Render como módulo independiente

**ADR independiente:** [ADR-025](../adr/ADR-025.md).

**Referencia documental heredada:** `ADR-010` en `DOC-002 §11.11`.

**Estado:** Aprobada.

Toda la representación visual de GeoMotion Studio será responsabilidad de un único módulo Render.

Los módulos funcionales publicarán el estado necesario mediante contratos arquitectónicos y Render generará la representación correspondiente sin asumir responsabilidades pertenecientes a otros dominios.

---

## 11.12 Resumen del capítulo

El módulo Render constituye el dominio responsable de la representación visual de GeoMotion Studio.

Su responsabilidad consiste en transformar el estado publicado por los distintos módulos en una representación gráfica coherente, preservando la separación de responsabilidades, el bajo acoplamiento y la independencia tecnológica definidos por la Arquitectura Modular y la Arquitectura de Contratos.

---

# CAPÍTULO 12 · Módulo Export

## 12.1 Objetivo

El módulo **Export** es responsable de generar los artefactos finales producidos por GeoMotion Studio.

Su responsabilidad consiste en transformar el estado del proyecto en formatos de salida destinados a su distribución, publicación o integración con otros sistemas.

El módulo Export constituye un dominio arquitectónico independiente.

Los demás módulos colaborarán con él exclusivamente mediante contratos arquitectónicos, sin depender de su implementación interna.

---

## 12.2 Alcance

El módulo Export será responsable de:

- Coordinar los procesos de exportación.
- Generar los distintos formatos de salida.
- Administrar configuraciones de exportación.
- Gestionar trabajos de exportación.
- Supervisar el progreso de cada proceso.
- Informar el resultado de la operación.

No será responsable de:

- Administrar proyectos.
- Gestionar escenas.
- Modificar objetos.
- Administrar Assets.
- Gestionar Timeline.
- Renderizar la interfaz de usuario.

Estas responsabilidades pertenecen a sus respectivos módulos arquitectónicos.

---

## 12.3 Principios

El módulo Export deberá respetar los siguientes principios.

### Independencia

La exportación constituye una capacidad independiente del resto del sistema.

Los módulos funcionales describen el contenido.

El módulo Export produce los artefactos finales.

---

### Reproducibilidad

Un mismo proyecto y una misma configuración de exportación deberán producir resultados consistentes.

La responsabilidad de garantizar dicha consistencia pertenece al módulo Export.

---

### Extensibilidad

La arquitectura permitirá incorporar nuevos formatos de salida sin modificar la organización del resto de los módulos.

---

### Bajo acoplamiento

Los módulos consumidores no dependerán de detalles internos del proceso de exportación.

Toda interacción se realizará mediante contratos arquitectónicos.

---

## 12.4 Organización conceptual

Conceptualmente el módulo estará compuesto por:

```text
Export

├── Export Manager
├── Export Jobs
├── Export Profiles
├── Export Formats
├── Progress
├── Validation
└── Output
```

Estos componentes representan la organización conceptual del módulo.

Su implementación permanecerá encapsulada.

---

## 12.5 Proceso de exportación

Conceptualmente el proceso seguirá el siguiente flujo:

```text
Proyecto

      │
      ▼

Contratos arquitectónicos

      │
      ▼

Export

      │
      ▼

Artefacto final
```

El módulo Export obtendrá toda la información necesaria mediante contratos publicados por los módulos propietarios.

No accederá directamente a implementaciones internas.

---

## 12.6 Configuración

El módulo administrará la configuración necesaria para cada proceso de exportación.

Entre otros aspectos podrá contemplar:

- Formato de salida.
- Calidad.
- Resolución.
- Intervalo temporal.
- Escenas incluidas.
- Recursos asociados.

La definición concreta de estas opciones pertenece a la implementación.

---

## 12.7 Trabajos de exportación

Cada proceso de exportación será tratado como un trabajo independiente.

Conceptualmente un trabajo podrá recorrer el siguiente ciclo:

```text
Pendiente

    │
    ▼

Preparación

    │
    ▼

Procesamiento

    │
    ▼

Finalizado
```

En caso de error, el trabajo deberá finalizar en un estado consistente que permita informar adecuadamente el resultado.

---

## 12.8 Integración con otros módulos

El módulo Export colaborará con:

- Project.
- Scene.
- Map.
- Objects.
- Assets.
- Timeline.
- Render.

Toda interacción se realizará exclusivamente mediante contratos arquitectónicos.

Ningún módulo accederá directamente a la implementación interna de Export.

---

## 12.9 Observabilidad

El módulo deberá proporcionar información suficiente para conocer el estado de cada proceso de exportación.

Entre otros aspectos podrá informar:

- Estado.
- Progreso.
- Tiempo estimado.
- Resultado.
- Errores detectados.

La forma concreta de exponer esta información pertenece a la implementación.

---

## 12.10 Rendimiento

La arquitectura deberá permitir ejecutar procesos de exportación de distinta complejidad manteniendo un comportamiento predecible.

La implementación podrá incorporar mecanismos como:

- Procesamiento incremental.
- Ejecución en segundo plano.
- Paralelización.
- Reutilización de recursos.
- Optimización específica para cada formato.

Estas decisiones pertenecen al ámbito de implementación y no modifican la arquitectura del módulo.

---

## 12.11 Undécima decisión arquitectónica

### Export como módulo independiente de generación de artefactos

**ADR independiente:** [ADR-026](../adr/ADR-026.md).

**Referencia documental heredada:** `ADR-011` en `DOC-002 §12.11`.

**Estado:** Aprobada.

Toda la generación de artefactos finales será responsabilidad exclusiva del módulo Export.

Los demás módulos publicarán la información necesaria mediante contratos arquitectónicos y permanecerán desacoplados del proceso de generación de los distintos formatos de salida.

---

## 12.12 Resumen del capítulo

El módulo Export constituye el dominio responsable de transformar el estado del proyecto en artefactos finales.

Su responsabilidad consiste en coordinar los procesos de exportación utilizando exclusivamente contratos arquitectónicos, preservando la independencia entre módulos, la extensibilidad del sistema y la coherencia establecida por la Arquitectura Modular y la Arquitectura de Contratos.

---

# CAPÍTULO 13 · Comunicación entre Módulos

## 13.1 Objetivo

La arquitectura de GeoMotion Studio se basa en una organización modular donde cada módulo constituye un dominio funcional independiente.

La colaboración entre módulos deberá realizarse exclusivamente mediante contratos arquitectónicos, preservando el bajo acoplamiento, la encapsulación y la evolución independiente de cada dominio.

La comunicación nunca implicará acceso directo a implementaciones internas de otros módulos.

---

## 13.2 Principios de comunicación

Toda interacción entre módulos deberá respetar los siguientes principios.

### Encapsulación

Cada módulo será propietario exclusivo de su estado interno y de su implementación.

Los detalles internos permanecerán ocultos para el resto del sistema.

---

### Contratos explícitos

Toda colaboración se realizará mediante contratos arquitectónicos publicados por el módulo propietario.

Los contratos constituyen el único mecanismo autorizado de comunicación entre módulos.

---

### Bajo acoplamiento

Los módulos dependerán únicamente de contratos estables.

Nunca dependerán de clases, estructuras internas o decisiones de implementación de otros módulos.

---

### Independencia

Cada módulo podrá evolucionar internamente siempre que preserve los contratos arquitectónicos aprobados.

---

## 13.3 Modelo general de comunicación

Conceptualmente, la comunicación seguirá el siguiente esquema:

```text
Módulo A

      │
      ▼

Contrato Arquitectónico

      │
      ▼

Módulo B
```

Los contratos definen las capacidades ofrecidas por un módulo sin exponer su implementación.

---

## 13.4 Tipos de interacción

La arquitectura admite distintos mecanismos de colaboración, siempre implementados a través de contratos arquitectónicos.

Entre ellos:

- Solicitudes de operaciones.
- Consultas de información.
- Publicación de eventos.
- Notificaciones.
- Sincronización de estados cuando corresponda.

La elección del mecanismo dependerá de la naturaleza del contrato y no modifica la organización arquitectónica.

---

## 13.5 Propiedad de la información

Toda información tendrá un único módulo propietario.

Únicamente dicho módulo podrá modificarla.

Los demás módulos accederán a ella mediante los contratos publicados.

Este principio evita duplicaciones de lógica y conflictos de responsabilidad.

---

## 13.6 Dependencias permitidas

Las dependencias entre módulos deberán establecerse únicamente hacia contratos arquitectónicos.

Conceptualmente:

```text
✔ Módulo → Contrato

✘ Módulo → Implementación interna
```

Ningún módulo podrá crear dependencias directas sobre componentes internos de otro módulo.

---

## 13.7 Evolución de contratos

Los contratos arquitectónicos podrán evolucionar siempre que se preserve la compatibilidad definida por la Arquitectura de Contratos.

Cuando una evolución implique cambios incompatibles, deberá seguir el proceso de gobernanza correspondiente y registrarse mediante un ADR cuando resulte aplicable.

---

## 13.8 Gestión de errores

Cada módulo será responsable de gestionar los errores generados dentro de su propio dominio.

Los contratos deberán definir claramente el comportamiento esperado ante situaciones excepcionales.

Los consumidores no deberán depender de detalles internos sobre la gestión de errores del módulo proveedor.

---

## 13.9 Observabilidad

La comunicación entre módulos deberá permitir un nivel adecuado de observabilidad.

La arquitectura favorecerá mecanismos que permitan:

- Identificar el origen de una interacción.
- Detectar fallos de comunicación.
- Facilitar el diagnóstico de incidencias.
- Preservar la trazabilidad entre módulos.

Los mecanismos concretos de instrumentación pertenecen a la implementación.

---

## 13.10 Restricciones arquitectónicas

No estará permitido:

- Acceder directamente al estado interno de otro módulo.
- Compartir estructuras internas.
- Crear dependencias circulares.
- Duplicar responsabilidades funcionales.
- Utilizar implementaciones internas como mecanismo de integración.

Estas restricciones preservan la coherencia de la Arquitectura Modular.

---

## 13.11 Duodécima decisión arquitectónica

### Comunicación exclusivamente mediante contratos arquitectónicos

**ADR independiente:** [ADR-027](../adr/ADR-027.md).

**Referencia documental heredada:** `ADR-012` en `DOC-002 §13.11`.

**Estado:** Aprobada.

Toda interacción entre módulos de GeoMotion Studio deberá realizarse exclusivamente mediante contratos arquitectónicos.

Los contratos constituyen el único punto autorizado de colaboración entre dominios funcionales y garantizan el bajo acoplamiento, la encapsulación y la evolución independiente de los módulos.

---

## 13.12 Resumen del capítulo

La comunicación entre módulos constituye uno de los pilares de la arquitectura de GeoMotion Studio.

Cada módulo mantiene la propiedad exclusiva de sus responsabilidades y expone únicamente las capacidades necesarias mediante contratos arquitectónicos, preservando la independencia de los dominios funcionales y la mantenibilidad del sistema a largo plazo.

---

# CAPÍTULO 14 · Principios Arquitectónicos

## 14.1 Objetivo

La arquitectura de GeoMotion Studio se fundamenta en un conjunto de principios que orientan todas las decisiones de diseño, evolución e implementación del sistema.

Estos principios constituyen criterios permanentes para preservar la coherencia arquitectónica del proyecto y deberán respetarse durante todo su ciclo de vida.

Su aplicación es transversal a todos los módulos y complementa las reglas definidas en la Arquitectura Modular, la Arquitectura de Contratos y el Manual de Ingeniería.

---

## 14.2 Architecture First

GeoMotion Studio adopta un enfoque **Architecture First**.

El orden de construcción del sistema será siempre:

```text
Visión

    │
    ▼

Arquitectura

    │
    ▼

Documentación

    │
    ▼

Implementación

    │
    ▼

Código
```

Ninguna implementación podrá redefinir o sustituir la arquitectura aprobada.

---

## 14.3 Modularidad

El sistema estará organizado mediante módulos arquitectónicos independientes.

Cada módulo constituirá un dominio funcional claramente delimitado.

La incorporación de nuevas capacidades deberá realizarse respetando dicha organización y evitando la concentración de responsabilidades.

---

## 14.4 Responsabilidad única

Cada módulo será responsable de un único dominio funcional.

Las responsabilidades deberán asignarse de forma clara, evitando superposiciones o duplicaciones entre módulos.

Cuando una nueva capacidad no pertenezca al ámbito de un módulo existente, deberá evaluarse su incorporación mediante la evolución controlada de la arquitectura.

---

## 14.5 Bajo acoplamiento

Los módulos dependerán únicamente de contratos arquitectónicos.

No se permitirán dependencias directas sobre implementaciones internas.

Este principio favorece:

- Evolución independiente.
- Sustitución de implementaciones.
- Mayor mantenibilidad.
- Reducción del impacto de los cambios.

---

## 14.6 Alta cohesión

Cada módulo agrupará responsabilidades estrechamente relacionadas entre sí.

La cohesión funcional facilitará la comprensión, el mantenimiento y la evolución del sistema.

---

## 14.7 Encapsulación

Cada módulo será propietario exclusivo de:

- Su estado.
- Su comportamiento.
- Sus reglas internas.
- Sus decisiones de implementación.

Los detalles internos permanecerán ocultos para el resto de los módulos.

---

## 14.8 Evolución controlada

La arquitectura deberá evolucionar de forma gradual y gobernada.

Las decisiones con impacto arquitectónico deberán seguir los mecanismos establecidos por el sistema de ADR y por el Manual de Ingeniería.

La evolución nunca deberá comprometer la coherencia global del sistema.

---

## 14.9 Extensibilidad

La arquitectura deberá permitir incorporar nuevas capacidades sin modificar innecesariamente los módulos existentes.

La extensión del sistema deberá apoyarse en contratos arquitectónicos estables y en límites claros entre dominios funcionales.

---

## 14.10 Escalabilidad

La organización arquitectónica deberá permitir el crecimiento sostenido del sistema.

La incorporación de nuevos módulos, funcionalidades o tecnologías no deberá requerir la reorganización de los dominios ya consolidados.

---

## 14.11 Consistencia

Las decisiones arquitectónicas deberán mantenerse consistentes entre todos los documentos oficiales del proyecto.

Ante cualquier discrepancia, la resolución deberá realizarse mediante los procedimientos de gobernanza establecidos y, cuando corresponda, mediante un ADR.

---

## 14.12 Trazabilidad

Toda decisión arquitectónica relevante deberá poder relacionarse con:

- La visión del proyecto.
- El Manual de Ingeniería.
- Los ADR aplicables.
- La Arquitectura Modular.
- La Arquitectura de Contratos.

Este principio garantiza la preservación del conocimiento técnico a largo plazo.

---

## 14.13 Decimotercera decisión arquitectónica

### Los principios arquitectónicos como guía permanente del proyecto

**ADR independiente:** [ADR-028](../adr/ADR-028.md).

**Referencia documental heredada:** `ADR-013` en `DOC-002 §14.13`.

**Estado:** Aprobada.

Los principios arquitectónicos definidos en este capítulo constituyen criterios permanentes para la evolución de GeoMotion Studio.

Toda decisión de diseño, documentación e implementación deberá ser coherente con estos principios y con la arquitectura oficialmente aprobada.

---

## 14.14 Resumen del capítulo

Los principios arquitectónicos establecen las reglas fundamentales que gobiernan la evolución de GeoMotion Studio.

Su aplicación garantiza la coherencia entre módulos, preserva la independencia de los dominios funcionales y mantiene el enfoque **Architecture First** que guía todo el proyecto.

---

# CAPÍTULO 15 · Evolución de la Arquitectura

## 15.1 Objetivo

La arquitectura de GeoMotion Studio ha sido diseñada para evolucionar de forma controlada durante todo el ciclo de vida del proyecto.

La evolución arquitectónica deberá preservar la coherencia del sistema, mantener la estabilidad de los módulos existentes y garantizar la compatibilidad con las decisiones oficialmente aprobadas.

Ninguna evolución podrá comprometer los principios establecidos por la Arquitectura Modular, la Arquitectura de Contratos o el Manual de Ingeniería.

---

## 15.2 Principios de evolución

Toda evolución arquitectónica deberá respetar los siguientes principios.

### Coherencia

Las modificaciones deberán mantener la consistencia entre todos los documentos oficiales del proyecto.

---

### Compatibilidad

Siempre que resulte razonable, la evolución de la arquitectura deberá preservar la compatibilidad con los contratos arquitectónicos existentes.

Cuando esto no sea posible, deberán seguirse los mecanismos de gobernanza establecidos.

---

### Gradualidad

La arquitectura evolucionará mediante cambios incrementales.

Se evitarán reorganizaciones amplias cuando una evolución progresiva permita alcanzar el mismo objetivo.

---

### Gobernanza

Toda decisión arquitectónica relevante deberá seguir el proceso oficial de evaluación, revisión y aprobación.

---

## 15.3 Incorporación de nuevos módulos

La incorporación de un nuevo módulo arquitectónico requerirá demostrar que:

- Representa un dominio funcional independiente.
- No duplica responsabilidades existentes.
- Posee límites claramente definidos.
- Puede integrarse mediante contratos arquitectónicos.
- Mantiene el bajo acoplamiento del sistema.

La incorporación deberá formalizarse mediante los mecanismos de gobernanza correspondientes.

---

## 15.4 Evolución de módulos existentes

Los módulos podrán evolucionar internamente siempre que:

- Mantengan sus responsabilidades.
- Preserven los contratos arquitectónicos aprobados.
- No introduzcan dependencias indebidas.
- Respeten los principios arquitectónicos del proyecto.

Las modificaciones internas no deberán afectar innecesariamente al resto del sistema.

---

## 15.5 Evolución de contratos

La evolución de los contratos arquitectónicos deberá seguir las reglas definidas en la Arquitectura de Contratos.

Cuando un cambio afecte a la compatibilidad existente, deberá aplicarse el procedimiento de gobernanza correspondiente y registrarse mediante un ADR cuando resulte aplicable.

---

## 15.6 Gestión de decisiones

Las decisiones con impacto arquitectónico deberán:

- Evaluarse técnicamente.
- Documentarse.
- Revisarse.
- Aprobarse.
- Mantener su trazabilidad.

El sistema oficial de ADR constituye el mecanismo para preservar el conocimiento asociado a dichas decisiones.

---

## 15.7 Gestión de excepciones

Las necesidades excepcionales de evolución no deberán resolverse mediante modificaciones directas de la arquitectura aprobada.

Toda excepción deberá justificarse, documentarse y seguir el proceso de gobernanza definido para el proyecto.

---

## 15.8 Consistencia documental

Toda evolución arquitectónica deberá reflejarse en la documentación afectada.

La arquitectura, los ADR y el Manual de Ingeniería deberán permanecer sincronizados para evitar contradicciones documentales.

---

## 15.9 Restricciones

No estará permitido:

- Introducir nuevos módulos sin justificación arquitectónica.
- Duplicar responsabilidades entre módulos.
- Crear dependencias directas entre implementaciones.
- Modificar contratos sin seguir el proceso establecido.
- Alterar la arquitectura mediante decisiones exclusivamente de implementación.

---

## 15.10 Decimocuarta decisión arquitectónica

### Evolución arquitectónica gobernada

**ADR independiente:** [ADR-029](../adr/ADR-029.md).

**Referencia documental heredada:** `ADR-014` en `DOC-002 §15.10`.

**Estado:** Aprobada.

La evolución de la arquitectura de GeoMotion Studio deberá realizarse de forma controlada, documentada y trazable.

Toda modificación con impacto arquitectónico seguirá los mecanismos oficiales de gobernanza definidos por el Manual de Ingeniería, el sistema de ADR y la Arquitectura de Contratos, preservando la coherencia del sistema a largo plazo.

---

## 15.11 Resumen del capítulo

La evolución de la arquitectura constituye un proceso continuo gobernado por reglas explícitas.

Su propósito es permitir el crecimiento de GeoMotion Studio sin comprometer la estabilidad, la coherencia documental ni la independencia de los módulos arquitectónicos, garantizando que toda modificación preserve los principios fundamentales del proyecto.

---

# CAPÍTULO 16 · Conclusiones

## 16.1 Objetivo

Este documento establece la arquitectura de referencia de GeoMotion Studio.

Su propósito es definir la organización estructural del sistema, los límites entre sus dominios funcionales y los principios que deberán guiar su evolución durante todo el ciclo de vida del proyecto.

La arquitectura aquí descrita constituye la referencia oficial para el diseño, la documentación y la implementación del sistema.

---

## 16.2 Alcance de la arquitectura

La arquitectura presentada define:

- La organización modular del sistema.
- Los principales dominios funcionales.
- La separación de responsabilidades entre módulos.
- Los principios arquitectónicos del proyecto.
- El modelo de comunicación entre módulos.
- Las reglas generales para la evolución de la arquitectura.

Los aspectos específicos de implementación se desarrollan en los documentos especializados del Manual de Ingeniería y deberán respetar las decisiones aquí establecidas.

---

## 16.3 Relación con el resto del Manual de Ingeniería

Este documento constituye uno de los pilares del Manual de Ingeniería.

Su contenido se complementa con otros documentos oficiales, entre ellos:

- Arquitectura Modular.
- Arquitectura de Contratos.
- Arquitectura Física del Repositorio.
- Estado Global.
- Sistema de ADR.
- Resto de documentos especializados del Manual de Ingeniería.

Todos ellos deberán mantenerse coherentes entre sí y evolucionar de forma coordinada.

---

## 16.4 Gobernanza arquitectónica

La arquitectura de GeoMotion Studio no constituye un documento estático.

Su evolución deberá realizarse mediante los mecanismos oficiales de gobernanza definidos por el proyecto.

Las modificaciones con impacto arquitectónico deberán:

- Ser técnicamente justificadas.
- Evaluarse respecto de la arquitectura vigente.
- Documentarse adecuadamente.
- Aprobarse conforme al proceso establecido.
- Mantener su trazabilidad mediante el sistema oficial de ADR cuando resulte aplicable.

---

## 16.5 Principios permanentes

Durante toda la evolución del proyecto deberán preservarse los siguientes principios:

- Architecture First.
- Modularidad.
- Bajo acoplamiento.
- Alta cohesión.
- Encapsulación.
- Responsabilidad única.
- Evolución controlada.
- Comunicación mediante contratos arquitectónicos.
- Trazabilidad de las decisiones.
- Consistencia documental.

Estos principios constituyen la base sobre la que se desarrollará GeoMotion Studio.

---

## 16.6 Visión de largo plazo

La arquitectura ha sido diseñada para sostener un proyecto profesional de larga duración.

La incorporación de nuevas capacidades deberá realizarse mediante la evolución controlada de los módulos existentes o mediante la incorporación de nuevos dominios arquitectónicos claramente delimitados, preservando siempre la coherencia del sistema.

La implementación podrá evolucionar con el tiempo, pero la arquitectura deberá continuar siendo la referencia estable que garantice la mantenibilidad, escalabilidad y evolución sostenible del proyecto.

---

## 16.7 Decimoquinta decisión arquitectónica

### La arquitectura como referencia oficial del sistema

**ADR independiente:** [ADR-030](../adr/ADR-030.md).

**Referencia documental heredada:** `ADR-015` en `DOC-002 §16.7`.

**Estado:** Aprobada.

La arquitectura definida en este documento constituye la referencia oficial para la organización estructural de GeoMotion Studio.

Toda implementación, documentación y evolución del sistema deberá ser consistente con esta arquitectura, con la Arquitectura Modular, con la Arquitectura de Contratos y con el resto del Manual de Ingeniería.

---

## 16.8 Cierre del documento

La arquitectura de GeoMotion Studio establece una organización basada en módulos arquitectónicos independientes que colaboran exclusivamente mediante contratos arquitectónicos.

Esta estructura proporciona una base estable para la evolución del sistema, preserva la separación de responsabilidades y permite que la plataforma crezca de forma sostenida sin comprometer la coherencia técnica del proyecto.

Este documento deberá considerarse la referencia arquitectónica general del sistema y mantenerse alineado con el resto del Manual de Ingeniería mediante los mecanismos oficiales de gobernanza.
