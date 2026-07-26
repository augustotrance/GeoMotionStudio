# 07 · ARQUITECTURA DE LAYOUTS

**Código:** DOC-007

**Versión:** 1.0

**Estado:** Publicado

**Proyecto:** GeoMotion Studio

**Clasificación:** Manual de Ingeniería

**Idioma original:** Español

**Última actualización:** 24 de julio de 2026

---

# Introducción

## Propósito del documento

Este documento define la arquitectura de los layouts y de la experiencia de usuario de GeoMotion Studio.

Su propósito es establecer los principios que regulan la organización de la interfaz, la distribución de los espacios de trabajo, la interacción del usuario con la plataforma y la evolución de las distintas experiencias que conforman el producto.

La arquitectura de layouts constituye el vínculo entre la visión funcional del producto, la arquitectura del software y el Sistema de Diseño.

Mientras que la Visión del Producto describe qué debe ofrecer GeoMotion Studio, la Arquitectura de Software define cómo se organiza el sistema y el Sistema de Diseño establece los componentes visuales e interactivos, este documento determina cómo dichos elementos se integran para construir una experiencia de usuario coherente, consistente y adaptable a distintos contextos de utilización.

---

## Objetivos

La Arquitectura de Layouts tiene los siguientes objetivos:

- Definir la organización general de la experiencia de usuario.
- Establecer las responsabilidades de cada layout de la plataforma.
- Garantizar una experiencia consistente entre diferentes dispositivos.
- Favorecer la productividad mediante una organización clara de la interfaz.
- Definir el ciclo de vida de la experiencia de usuario.
- Establecer los principios que regulan la navegación y los espacios de trabajo.
- Facilitar la evolución sostenible de la interfaz.
- Servir como referencia para el desarrollo del Frontend.

---

## Alcance

La arquitectura aquí definida aplica a todas las experiencias de usuario de GeoMotion Studio.

Incluye:

- Filosofía de la experiencia de usuario.
- Arquitectura general de los layouts.
- MainLayout.
- DesktopLayout.
- TabletLayout.
- MobileLayout.
- Organización de la interfaz.
- Elementos compartidos.
- Navegación.
- Espacios de trabajo.
- Gestión de paneles.
- Ciclo de vida de la aplicación.
- Estados de la experiencia.
- Adaptabilidad.
- Principios de evolución.
- Relación con el Sistema de Diseño.

Este documento no describe componentes visuales específicos, tecnologías concretas ni detalles de implementación.

Las especificaciones correspondientes al Sistema de Diseño, Arquitectura de Componentes, Estado Global y demás aspectos técnicos se desarrollarán en sus respectivos documentos.

---

## Público destinatario

Este documento está dirigido principalmente a:

- Arquitectos de software.
- Arquitectos UX.
- Diseñadores UX/UI.
- Desarrolladores Frontend.
- Colaboradores Open Source.
- Revisores técnicos.
- Mantenedores del proyecto.

También constituye una referencia para cualquier persona interesada en comprender cómo se organiza la experiencia de usuario dentro de GeoMotion Studio.

---

## Principios

La arquitectura de la experiencia de usuario se fundamenta en los siguientes principios:

- Simplicidad.
- Coherencia.
- Modularidad.
- Adaptabilidad.
- Productividad.
- Accesibilidad.
- Escalabilidad.
- Mantenibilidad.

Estos principios deberán prevalecer sobre decisiones particulares de implementación o diseño visual.

---

## Relación con otros documentos

Este documento mantiene una relación directa con:

- **01_VISIÓN_DEL_PRODUCTO.md**
- **02_ARQUITECTURA.md**
- **03_SISTEMA_DE_DISEÑO.md**
- **08_ARQUITECTURA_DE_COMPONENTES.md**
- **09_RESPONSIVE.md**
- **10_ESTADO_GLOBAL.md**
- **17_AUTENTICACIÓN_Y_SEGURIDAD.md**

Cada uno de estos documentos desarrolla un aspecto específico de la plataforma y complementa la información aquí definida.

---

## Organización del documento

El contenido se estructura de forma progresiva.

Inicialmente se presentan los principios que sustentan la arquitectura de la experiencia de usuario y la organización general de los layouts.

Posteriormente se desarrollan las características particulares de cada experiencia, los elementos estructurales compartidos, la navegación, los espacios de trabajo, el ciclo de vida de la aplicación, los estados de la experiencia y los principios que regulan su evolución.

Esta organización permite comprender la arquitectura desde una perspectiva conceptual antes de abordar sus distintos elementos funcionales.

---
# CAPÍTULO 1 · Fundamentos de la Arquitectura de Layouts

## 1.1 Objetivo

Establecer los principios conceptuales que sustentan la arquitectura de layouts de GeoMotion Studio, definiendo su propósito dentro de la plataforma, las responsabilidades que le corresponden y los criterios que orientan su evolución.

Este capítulo constituye la base sobre la cual se desarrollan los restantes apartados del documento, proporcionando un marco de referencia común para comprender la organización de la experiencia de usuario.

---

## 1.2 La Arquitectura de Layouts

La arquitectura de layouts define la forma en que la experiencia de usuario se organiza dentro de GeoMotion Studio.

Su propósito trasciende la distribución visual de los elementos de la interfaz. Constituye la estructura que organiza la interacción entre el usuario y las funcionalidades de la plataforma, estableciendo una disposición coherente de los espacios de trabajo, los mecanismos de navegación y los elementos compartidos de la aplicación.

Esta arquitectura proporciona un modelo uniforme que permite mantener una experiencia consistente en distintos dispositivos, garantizando que los usuarios puedan interactuar con el sistema de forma predecible y eficiente independientemente del contexto de utilización.

---

## 1.3 Principios Fundamentales

La arquitectura de layouts se desarrolla sobre un conjunto de principios que orientan todas las decisiones relacionadas con la organización de la interfaz.

### Coherencia

La experiencia de usuario debe mantener una organización uniforme en toda la plataforma. Los conceptos, patrones de interacción y estructuras generales deben conservar un comportamiento consistente, evitando diferencias innecesarias entre módulos o dispositivos.

### Modularidad

Cada layout representa una unidad arquitectónica independiente con responsabilidades claramente definidas. Esta separación favorece la mantenibilidad del sistema y facilita su evolución sin afectar al resto de la plataforma.

### Adaptabilidad

La organización de la interfaz debe responder al contexto de uso, considerando el tipo de dispositivo, el espacio disponible y el método de interacción predominante, sin comprometer la identidad funcional del producto.

### Continuidad

El cambio entre dispositivos o layouts no debe implicar una ruptura en la experiencia del usuario. La organización general de la plataforma debe conservar su lógica y facilitar la continuidad del trabajo.

### Escalabilidad

La arquitectura debe permitir la incorporación de nuevos layouts, dispositivos o formas de interacción sin requerir modificaciones estructurales que comprometan la estabilidad del sistema.

---

## 1.4 Responsabilidades

La Arquitectura de Layouts es responsable de definir:

- La organización general de la experiencia de usuario.
- La estructura de los distintos layouts de la plataforma.
- La distribución de los espacios de trabajo.
- Los principios de navegación.
- La organización de los elementos compartidos de la interfaz.
- El ciclo de vida de la experiencia del usuario.
- Los estados generales de la aplicación relacionados con la interacción.
- Los principios que regulan la evolución de la experiencia de usuario.

No forma parte del alcance de este documento definir componentes visuales específicos, tecnologías de implementación, algoritmos internos o detalles propios del desarrollo del software.

---

## 1.5 Relación con la Arquitectura General

La Arquitectura de Layouts constituye una capa especializada dentro de la arquitectura global de GeoMotion Studio.

Mientras la Arquitectura del Software define la organización interna de la plataforma y el Sistema de Diseño establece los componentes visuales e interactivos, este documento determina cómo dichos elementos se integran para construir una experiencia de usuario coherente, consistente y orientada a la productividad.

En consecuencia, la Arquitectura de Layouts actúa como el vínculo entre la organización técnica del sistema y la forma en que el usuario interactúa con él.

---

## 1.6 Resumen

La Arquitectura de Layouts proporciona el marco conceptual que organiza la experiencia de usuario de GeoMotion Studio.

Sus principios garantizan una interfaz coherente, adaptable y escalable, estableciendo las bases sobre las que se desarrollan los distintos layouts, la navegación, los espacios de trabajo y la evolución futura de la plataforma.

---
# CAPÍTULO 2 · Arquitectura General de los Layouts

## 2.1 Objetivo

Definir la estructura general de los layouts que conforman GeoMotion Studio, describiendo la organización de la experiencia de usuario y las responsabilidades de cada una de las capas que participan en ella.

---

## 2.2 Organización General

La experiencia de usuario de GeoMotion Studio se organiza mediante una arquitectura compuesta por un layout principal y un conjunto de layouts especializados.

Esta organización permite adaptar la interfaz a diferentes contextos de utilización manteniendo una identidad funcional común, una navegación consistente y una experiencia uniforme para el usuario.

La arquitectura ha sido concebida para evolucionar de forma controlada, permitiendo incorporar nuevos layouts cuando las necesidades del producto o la aparición de nuevos dispositivos así lo requieran.

---

## 2.3 MainLayout

El MainLayout constituye el punto central de coordinación de la experiencia de usuario.

Su responsabilidad consiste en proporcionar la estructura común sobre la que se ejecutan los distintos layouts especializados, gestionando los elementos compartidos de la aplicación y asegurando una transición coherente entre los diferentes contextos de uso.

El MainLayout no representa una experiencia específica para un dispositivo determinado. Su función es actuar como elemento integrador de la arquitectura de la interfaz.

---

## 2.4 Layouts Especializados

Sobre la estructura proporcionada por el MainLayout se desarrollan los distintos layouts especializados de la plataforma.

Cada uno responde a un contexto de utilización concreto, adaptando la organización de la interfaz sin modificar el comportamiento funcional del sistema.

La arquitectura contempla inicialmente los siguientes layouts:

- **DesktopLayout**, orientado a entornos de escritorio y tareas de alta productividad.
- **TabletLayout**, diseñado para dispositivos táctiles de tamaño intermedio, equilibrando simplicidad y capacidad funcional.
- **MobileLayout**, optimizado para consultas, operaciones rápidas y escenarios de movilidad.

Aunque presentan organizaciones visuales diferentes, todos ellos comparten la misma lógica funcional y los mismos principios de interacción.

---

## 2.5 Colaboración entre Layouts

Los distintos layouts no constituyen aplicaciones independientes.

Todos forman parte de una única arquitectura de experiencia y comparten:

- El modelo funcional del producto.
- Los servicios comunes de la plataforma.
- El estado global de la aplicación.
- Los principios de navegación.
- Los espacios de trabajo.
- La identidad visual definida por el Sistema de Diseño.

Las diferencias existentes entre ellos responden exclusivamente a criterios de usabilidad y adaptación al contexto.

---

## 2.6 Evolución de la Arquitectura

La Arquitectura de Layouts ha sido diseñada para evolucionar de forma gradual.

La incorporación de nuevos dispositivos, métodos de interacción o escenarios de utilización no requerirá modificar la filosofía general del sistema, sino desarrollar nuevas implementaciones compatibles con los principios definidos en este documento.

Esta estrategia garantiza la estabilidad de la plataforma y favorece su crecimiento a largo plazo.

---

## 2.7 Resumen

La arquitectura general de layouts establece una organización unificada para la experiencia de usuario de GeoMotion Studio.

Mediante la combinación de un layout principal y diversos layouts especializados, la plataforma puede adaptarse a distintos contextos de utilización sin perder coherencia, continuidad ni capacidad de evolución.

---
# CAPÍTULO 3 · MainLayout

## 3.1 Objetivo

Definir el propósito, las responsabilidades y el papel del MainLayout dentro de la Arquitectura de Layouts de GeoMotion Studio, estableciendo su función como elemento estructural que coordina la experiencia de usuario de la plataforma.

---

## 3.2 El MainLayout como núcleo de la experiencia

El MainLayout constituye la capa principal de organización de la interfaz de usuario.

Su función consiste en proporcionar el entorno común sobre el cual se desarrollan las distintas experiencias de la plataforma, independientemente del dispositivo utilizado.

A diferencia de los layouts especializados, el MainLayout no representa una experiencia orientada a un contexto específico, sino que actúa como el punto de integración de todos los elementos compartidos de la aplicación.

Desde esta capa se establece la estructura general de la interfaz y se garantiza que la experiencia del usuario permanezca consistente durante todo el ciclo de vida de la aplicación.

---

## 3.3 Responsabilidades

El MainLayout es responsable de coordinar los elementos comunes de la experiencia de usuario.

Entre sus principales responsabilidades se encuentran:

- Proporcionar la estructura base de la interfaz.
- Seleccionar el layout adecuado según el contexto de utilización.
- Mantener la continuidad entre los distintos layouts.
- Gestionar los elementos compartidos de la aplicación.
- Coordinar la navegación global.
- Integrar los servicios comunes de la interfaz.
- Mantener la coherencia visual y funcional de la plataforma.

Estas responsabilidades son independientes de la lógica de negocio y de la implementación técnica de cada módulo.

---

## 3.4 Elementos Compartidos

El MainLayout constituye el punto de integración de los elementos que forman parte de toda la plataforma.

Entre ellos pueden encontrarse:

- Barras de navegación.
- Áreas de trabajo.
- Paneles compartidos.
- Diálogos globales.
- Notificaciones.
- Indicadores de estado.
- Servicios de ayuda.
- Accesos rápidos.
- Menús contextuales globales.

La representación concreta de estos elementos podrá variar según el dispositivo, pero su función dentro de la experiencia permanecerá constante.

---

## 3.5 Relación con los Layouts Especializados

Una vez establecida la estructura general de la interfaz, el MainLayout incorpora el layout especializado que mejor responde al contexto de utilización.

Esta organización permite que DesktopLayout, TabletLayout y MobileLayout compartan una misma arquitectura sin duplicar responsabilidades comunes.

Como consecuencia, cada layout especializado puede concentrarse exclusivamente en ofrecer la mejor experiencia posible para su contexto de uso, mientras que el MainLayout mantiene la coherencia global de la plataforma.

---

## 3.6 Evolución

El MainLayout ha sido concebido como una estructura estable y de larga duración.

La incorporación de nuevos layouts o de nuevas funcionalidades compartidas deberá realizarse respetando las responsabilidades definidas para esta capa, evitando trasladar a los layouts especializados tareas que pertenecen a la organización general de la experiencia.

Este principio favorece la mantenibilidad de la plataforma y simplifica su evolución futura.

---

## 3.7 Resumen

El MainLayout constituye el núcleo organizativo de la experiencia de usuario de GeoMotion Studio.

Su función es coordinar los elementos compartidos de la plataforma, garantizar la coherencia entre los distintos layouts y proporcionar una base estable sobre la que evolucionará la interfaz del producto.

---
# CAPÍTULO 4 · DesktopLayout

## 4.1 Objetivo

Definir las características y responsabilidades del DesktopLayout, estableciendo los principios que regulan la experiencia de usuario en entornos de escritorio y estaciones de trabajo orientadas a la productividad.

---

## 4.2 Propósito

El DesktopLayout representa la experiencia de usuario más completa de GeoMotion Studio.

Ha sido diseñado para ofrecer un entorno de trabajo capaz de gestionar múltiples herramientas, grandes volúmenes de información y procesos complejos, aprovechando las capacidades de los equipos de escritorio y el uso combinado de teclado y ratón.

Su objetivo principal es maximizar la productividad sin comprometer la claridad de la interfaz.

---

## 4.3 Organización de la Interfaz

La organización del DesktopLayout prioriza la disponibilidad simultánea de información y herramientas.

La interfaz podrá distribuirse mediante áreas de trabajo, paneles, barras de herramientas y zonas de inspección que permitan acceder rápidamente a las funcionalidades de la plataforma.

Esta organización busca reducir el número de interrupciones durante el trabajo y facilitar la ejecución de tareas complejas.

---

## 4.4 Principios de Diseño

El DesktopLayout se desarrolla siguiendo los siguientes principios:

### Productividad

La organización de la interfaz debe favorecer flujos de trabajo continuos y eficientes.

### Flexibilidad

Los espacios de trabajo podrán adaptarse a las preferencias y necesidades del usuario.

### Acceso simultáneo

La interfaz debe facilitar la visualización y utilización de múltiples herramientas al mismo tiempo.

### Claridad

La elevada capacidad funcional no debe traducirse en una interfaz compleja o difícil de comprender.

### Consistencia

La experiencia debe mantener la misma lógica funcional presente en el resto de los layouts de la plataforma.

---

## 4.5 Relación con los demás Layouts

El DesktopLayout no constituye una aplicación independiente.

Forma parte de una única arquitectura de experiencia y comparte con los demás layouts:

- La estructura funcional del producto.
- Los servicios comunes.
- La navegación.
- El estado global.
- La identidad visual.
- Los principios de interacción.

Las diferencias entre ellos responden exclusivamente a las características del contexto de utilización.

---

## 4.6 Evolución

La evolución del DesktopLayout deberá orientarse a mejorar la productividad y ampliar las capacidades de organización de la interfaz, manteniendo siempre la coherencia con la arquitectura general de layouts.

Las nuevas funcionalidades deberán integrarse respetando los principios establecidos en este documento y evitando generar experiencias inconsistentes respecto al resto de la plataforma.

---

## 4.7 Resumen

El DesktopLayout constituye la experiencia de usuario orientada a la productividad dentro de GeoMotion Studio.

Su arquitectura permite gestionar escenarios de trabajo complejos mediante una organización flexible de la interfaz, manteniendo una experiencia coherente con el resto de los layouts de la plataforma.

---
# CAPÍTULO 5 · TabletLayout

## 5.1 Objetivo

Definir las características, responsabilidades y principios que regulan el TabletLayout, estableciendo una experiencia de usuario adaptada a dispositivos táctiles de tamaño intermedio que combine productividad, simplicidad y facilidad de interacción.

---

## 5.2 Propósito

El TabletLayout constituye la experiencia diseñada para dispositivos cuya principal forma de interacción es el contacto directo con la pantalla.

Su objetivo consiste en ofrecer un equilibrio entre las capacidades avanzadas del entorno de escritorio y la simplicidad necesaria para un uso táctil eficiente.

No representa una versión reducida del DesktopLayout, sino una experiencia concebida específicamente para este contexto de utilización.

La organización de la interfaz, la disposición de las herramientas y la interacción con los distintos elementos deben responder a las características propias de este tipo de dispositivos.

---

## 5.3 Organización de la Interfaz

La interfaz del TabletLayout prioriza la claridad visual y la facilidad de interacción mediante controles táctiles.

La distribución de los elementos deberá favorecer la concentración en la tarea principal, reduciendo la presencia permanente de paneles secundarios y facilitando el acceso contextual a herramientas y opciones.

Esta organización permite aprovechar el espacio disponible sin comprometer la productividad ni la comprensión de la interfaz.

---

## 5.4 Principios de Diseño

El TabletLayout se desarrolla siguiendo los siguientes principios:

### Interacción táctil

Todos los elementos de la interfaz deben estar diseñados para una manipulación directa, priorizando controles accesibles y áreas de interacción adecuadas.

### Equilibrio

La experiencia debe mantener un equilibrio entre simplicidad y capacidad funcional, evitando tanto la sobrecarga de información como la pérdida de herramientas esenciales.

### Contexto

Las herramientas y paneles podrán mostrarse de forma contextual cuando resulten necesarios para la tarea que el usuario está realizando.

### Continuidad

La experiencia debe conservar la misma lógica funcional presente en el resto de la plataforma, facilitando la transición entre dispositivos.

### Productividad

Aunque adaptada al entorno táctil, la interfaz debe permitir desarrollar flujos de trabajo eficientes y continuos.

---

## 5.5 Relación con los demás Layouts

El TabletLayout comparte la misma arquitectura funcional que el resto de los layouts definidos para GeoMotion Studio.

Todos ellos utilizan los mismos principios de navegación, los mismos espacios de trabajo y los mismos servicios comunes.

Las diferencias entre las distintas experiencias responden únicamente a la adaptación de la interfaz al contexto de utilización.

---

## 5.6 Evolución

La evolución del TabletLayout deberá orientarse a mejorar la interacción táctil y la organización contextual de la información.

Las futuras ampliaciones deberán respetar los principios establecidos en este documento, garantizando una experiencia consistente con el resto de la plataforma y favoreciendo la incorporación de nuevas capacidades sin aumentar innecesariamente la complejidad de la interfaz.

---

## 5.7 Resumen

El TabletLayout proporciona una experiencia de usuario equilibrada entre productividad y simplicidad, adaptándose a las características de los dispositivos táctiles sin perder coherencia con la arquitectura general de GeoMotion Studio.

---
# CAPÍTULO 6 · MobileLayout

## 6.1 Objetivo

Definir las características y responsabilidades del MobileLayout, estableciendo los principios que regulan la experiencia de usuario en dispositivos móviles y escenarios de utilización donde predominan la movilidad, la rapidez y la interacción inmediata.

---

## 6.2 Propósito

El MobileLayout constituye la experiencia específicamente diseñada para teléfonos inteligentes y otros dispositivos de reducido tamaño.

Su objetivo consiste en facilitar el acceso rápido a la información y permitir la ejecución eficiente de tareas concretas, manteniendo la identidad funcional de GeoMotion Studio.

Al igual que el TabletLayout, no representa una simplificación del entorno de escritorio, sino una experiencia concebida desde sus propios requisitos de interacción y movilidad.

---

## 6.3 Organización de la Interfaz

La organización del MobileLayout prioriza la visualización del contenido principal y reduce al mínimo los elementos permanentes de la interfaz.

Las herramientas secundarias, paneles de configuración y funcionalidades complementarias deberán presentarse de forma contextual, permitiendo que el usuario mantenga el foco sobre la tarea que está realizando.

La navegación debe favorecer recorridos simples, claros y fácilmente comprensibles.

---

## 6.4 Principios de Diseño

El MobileLayout se desarrolla conforme a los siguientes principios:

### Simplicidad

La interfaz debe presentar únicamente la información necesaria para cada contexto de uso.

### Rapidez

Las tareas más frecuentes deberán poder ejecutarse mediante un número reducido de acciones.

### Claridad

La organización visual debe facilitar la comprensión inmediata del estado de la aplicación y de las acciones disponibles.

### Continuidad

La experiencia debe conservar los mismos conceptos funcionales presentes en el resto de los layouts, permitiendo que el usuario cambie de dispositivo sin necesidad de reaprender el funcionamiento de la plataforma.

### Adaptabilidad

La interfaz debe responder de forma adecuada a las diferentes dimensiones, orientaciones y capacidades de los dispositivos móviles compatibles.

---

## 6.5 Relación con los demás Layouts

El MobileLayout comparte la misma arquitectura funcional que DesktopLayout y TabletLayout.

Todos forman parte de una única experiencia de usuario y utilizan los mismos principios de navegación, espacios de trabajo y organización general de la plataforma.

La adaptación realizada por este layout responde exclusivamente a las necesidades derivadas del contexto de movilidad.

---

## 6.6 Evolución

La evolución del MobileLayout deberá orientarse a mejorar la accesibilidad, la rapidez de interacción y la capacidad de consulta de información desde cualquier lugar.

Las futuras mejoras deberán mantener la coherencia con la arquitectura general de layouts y preservar la continuidad de la experiencia entre dispositivos.

---

## 6.7 Resumen

El MobileLayout proporciona una experiencia de usuario optimizada para escenarios de movilidad, ofreciendo una interfaz clara, eficiente y adaptada a dispositivos de pequeño formato, sin perder coherencia con el resto de la arquitectura de GeoMotion Studio.

---
# CAPÍTULO 7 · Elementos Compartidos de la Interfaz

## 7.1 Objetivo

Definir los elementos estructurales compartidos por todos los layouts de GeoMotion Studio, estableciendo los principios que garantizan una experiencia uniforme, coherente y consistente independientemente del dispositivo utilizado.

---

## 7.2 Concepto

La arquitectura de GeoMotion Studio incorpora un conjunto de elementos comunes que forman parte de todas las experiencias de usuario.

Estos elementos constituyen la base sobre la cual se desarrolla la interacción con la plataforma y permiten mantener una identidad funcional única entre Desktop, Tablet y Mobile.

Aunque su representación visual pueda variar según el contexto de utilización, su propósito, comportamiento y significado deberán permanecer constantes.

Esta uniformidad facilita el aprendizaje del sistema, reduce la carga cognitiva y mejora la continuidad de la experiencia entre dispositivos.

---

## 7.3 Elementos Compartidos

Los principales elementos compartidos de la interfaz son:

- Áreas de trabajo.
- Barras de navegación.
- Barras de herramientas.
- Paneles.
- Diálogos.
- Ventanas modales.
- Notificaciones.
- Indicadores de estado.
- Menús contextuales.
- Herramientas de búsqueda.
- Acciones principales.
- Sistemas de ayuda.

La presencia, ubicación o representación de estos elementos podrá variar según el layout, siempre que se preserve su comportamiento funcional.

---

## 7.4 Principios de Organización

La incorporación de elementos compartidos dentro de la interfaz deberá respetar los siguientes principios:

### Consistencia

Cada elemento deberá mantener el mismo propósito en toda la plataforma.

### Reutilización

Los elementos comunes deberán diseñarse para ser reutilizados por los distintos layouts sin duplicar responsabilidades.

### Contextualización

La interfaz mostrará únicamente aquellos elementos que resulten relevantes para la tarea que el usuario está realizando.

### Claridad

La organización de los elementos deberá facilitar la comprensión de la interfaz y minimizar la complejidad visual.

### Escalabilidad

La incorporación de nuevos elementos compartidos deberá realizarse sin alterar la organización general de la experiencia.

---

## 7.5 Relación con el Sistema de Diseño

La Arquitectura de Layouts define la existencia y función de los elementos compartidos.

El Sistema de Diseño será responsable de establecer su representación visual, comportamiento interactivo, accesibilidad y criterios de utilización.

Esta separación permite mantener independientes las decisiones arquitectónicas de las decisiones relacionadas con la identidad visual del producto.

---

## 7.6 Resumen

Los elementos compartidos constituyen la base común sobre la que se desarrolla toda la experiencia de usuario de GeoMotion Studio.

Su organización uniforme favorece la coherencia entre layouts, simplifica la evolución de la plataforma y garantiza una interacción consistente en cualquier contexto de utilización.

---
# CAPÍTULO 8 · Navegación y Flujo de la Experiencia

## 8.1 Objetivo

Definir los principios que regulan la navegación y el flujo general de la experiencia de usuario dentro de GeoMotion Studio, garantizando recorridos consistentes, previsibles y orientados a la productividad.

---

## 8.2 Concepto

La navegación constituye el mecanismo mediante el cual el usuario accede a las distintas funcionalidades de la plataforma y mantiene el control sobre su espacio de trabajo.

La arquitectura de navegación debe permitir recorrer la aplicación de forma intuitiva, evitando interrupciones innecesarias y favoreciendo la continuidad de las tareas.

La organización de los recorridos debe responder a la estructura funcional del producto y no únicamente a criterios visuales.

---

## 8.3 Principios de Navegación

La navegación de GeoMotion Studio se fundamenta en los siguientes principios:

### Coherencia

Las acciones de navegación deberán mantener un comportamiento uniforme en toda la plataforma.

### Continuidad

Los cambios de contexto no deberán provocar la pérdida del trabajo realizado ni alterar innecesariamente la experiencia del usuario.

### Predictibilidad

Cada acción deberá producir un resultado esperable y fácilmente comprensible.

### Jerarquía

La navegación deberá reflejar la organización funcional del producto, facilitando el acceso progresivo a la información.

### Eficiencia

Las tareas frecuentes deberán requerir el menor número posible de acciones.

---

## 8.4 Flujo de la Experiencia

La experiencia de usuario se organiza como una secuencia continua de interacción.

El usuario deberá poder desplazarse entre las distintas áreas funcionales de la plataforma sin perder el contexto de trabajo ni la comprensión del estado actual de la aplicación.

Los cambios entre módulos, herramientas o layouts deberán producirse de forma natural, preservando la continuidad de la experiencia y minimizando la necesidad de reaprendizaje.

---

## 8.5 Persistencia del Contexto

La arquitectura de navegación deberá favorecer la conservación del contexto de trabajo.

Siempre que resulte posible, la plataforma mantendrá:

- La ubicación del usuario.
- Los espacios de trabajo activos.
- La configuración de la interfaz.
- Los paneles visibles.
- El estado de las herramientas.
- La información necesaria para continuar la tarea sin interrupciones.

Este principio contribuye a mejorar la productividad y refuerza la percepción de continuidad entre sesiones y dispositivos.

---

## 8.6 Evolución de la Navegación

La navegación deberá evolucionar conforme crezca la plataforma, incorporando nuevas funcionalidades sin modificar los principios fundamentales definidos en este documento.

Las futuras ampliaciones deberán preservar la coherencia de los recorridos existentes y evitar cambios que obliguen al usuario a reaprender la organización general de la interfaz.

---

## 8.7 Resumen

La navegación de GeoMotion Studio constituye un elemento esencial de la experiencia de usuario.

Su arquitectura se basa en la coherencia, la continuidad y la eficiencia, proporcionando recorridos claros y previsibles que permiten al usuario concentrarse en sus tareas sin distracciones ni interrupciones innecesarias.

---
# CAPÍTULO 9 · Espacios de Trabajo

## 9.1 Objetivo

Definir el concepto de espacio de trabajo dentro de GeoMotion Studio, estableciendo los principios que regulan su organización, personalización y persistencia como elemento central de la experiencia de usuario.

---

## 9.2 Concepto

Un espacio de trabajo representa el entorno desde el cual el usuario desarrolla sus actividades dentro de la plataforma.

Constituye una organización lógica de herramientas, paneles, vistas y elementos de interacción que permite adaptar la interfaz a las necesidades de cada flujo de trabajo sin modificar el comportamiento funcional del sistema.

Los espacios de trabajo forman parte de la experiencia de usuario y no de los proyectos gestionados por la aplicación. En consecuencia, un mismo proyecto podrá utilizarse desde distintos espacios de trabajo, del mismo modo que un mismo espacio podrá emplearse para trabajar con diferentes proyectos.

---

## 9.3 Organización

La arquitectura de espacios de trabajo deberá proporcionar una organización flexible y coherente de la interfaz.

Cada espacio podrá definir, entre otros aspectos:

- La distribución de paneles.
- La disposición de herramientas.
- Las vistas activas.
- Las áreas de trabajo visibles.
- La configuración general de la interfaz.
- Los accesos rápidos disponibles.

Esta organización permitirá adaptar la experiencia al contexto de utilización sin alterar la lógica general de la plataforma.

---

## 9.4 Personalización

GeoMotion Studio permitirá que los usuarios adapten sus espacios de trabajo de acuerdo con sus necesidades y preferencias.

La personalización deberá orientarse a mejorar la productividad, facilitando la organización de la interfaz sin comprometer la coherencia arquitectónica del sistema.

Las modificaciones realizadas por el usuario deberán respetar los principios generales definidos en este documento y mantener una experiencia consistente entre los distintos layouts.

---

## 9.5 Persistencia

La configuración de los espacios de trabajo deberá conservarse entre sesiones siempre que resulte posible.

La persistencia podrá incluir:

- Distribución de paneles.
- Estado de las herramientas.
- Configuración de la interfaz.
- Preferencias del usuario.
- Organización del entorno de trabajo.

Este principio favorece la continuidad de la experiencia y reduce el tiempo necesario para retomar una tarea previamente iniciada.

---

## 9.6 Evolución

La arquitectura de espacios de trabajo deberá permitir la incorporación de nuevas formas de organización sin afectar la estructura general de la plataforma.

Las futuras ampliaciones deberán mantener la compatibilidad con los espacios existentes y preservar la experiencia adquirida por los usuarios.

---

## 9.7 Resumen

Los espacios de trabajo constituyen uno de los pilares de la experiencia de usuario de GeoMotion Studio.

Su arquitectura proporciona un entorno flexible, personalizable y persistente que favorece la productividad y garantiza la continuidad del trabajo entre distintas sesiones y dispositivos.

---
# CAPÍTULO 10 · Ciclo de Vida de la Aplicación

## 10.1 Objetivo

Definir las etapas que conforman el ciclo de vida de la experiencia de usuario dentro de GeoMotion Studio, estableciendo una secuencia coherente desde el inicio de la aplicación hasta la finalización de la sesión.

---

## 10.2 Concepto

El ciclo de vida de la aplicación describe las distintas fases por las que atraviesa la experiencia de usuario durante la ejecución de GeoMotion Studio.

Estas fases permiten organizar de manera ordenada la inicialización del sistema, la preparación del entorno de trabajo, la interacción con el usuario y el cierre de la aplicación.

Su definición proporciona un marco común para coordinar la navegación, la autenticación, la carga de servicios y la activación de los distintos layouts.

---

## 10.3 Etapas del Ciclo de Vida

La experiencia de usuario se desarrolla mediante una secuencia organizada de etapas.

De forma conceptual, el ciclo de vida comprende las siguientes fases:

1. Inicio de la aplicación.
2. Pantalla de presentación (*Splash Screen*).
3. Inicialización de la plataforma.
4. Verificación del estado de la sesión.
5. Pantalla de bienvenida.
6. Autenticación o acceso como invitado.
7. Carga de los servicios de la aplicación.
8. Inicialización del MainLayout.
9. Activación del layout correspondiente.
10. Desarrollo de la sesión de trabajo.
11. Finalización y cierre de la aplicación.

Estas etapas representan una visión arquitectónica del funcionamiento de la plataforma y no una secuencia rígida de implementación.

---

## 10.4 Principios del Ciclo de Vida

El ciclo de vida de la aplicación deberá respetar los siguientes principios:

### Continuidad

La transición entre etapas deberá producirse de forma fluida y comprensible para el usuario.

### Robustez

Cada etapa deberá completarse de manera controlada antes de iniciar la siguiente, garantizando la estabilidad de la experiencia.

### Transparencia

La plataforma deberá comunicar claramente el estado en el que se encuentra cuando la interacción del usuario dependa de procesos internos.

### Independencia

Las distintas etapas deberán mantenerse desacopladas siempre que sea posible, facilitando la evolución de la arquitectura.

---

## 10.5 Relación con otros Documentos

El ciclo de vida descrito en este capítulo mantiene una relación directa con:

- La Arquitectura General del sistema.
- La Arquitectura de Layouts.
- El documento de Autenticación y Seguridad.
- El Estado Global de la aplicación.

Cada uno de estos documentos desarrolla con mayor profundidad los aspectos específicos relacionados con las etapas aquí descritas.

---

## 10.6 Resumen

El ciclo de vida de la aplicación establece una secuencia ordenada para la construcción de la experiencia de usuario de GeoMotion Studio.

Su definición garantiza una inicialización coherente de la plataforma, favorece la estabilidad de la interfaz y proporciona un marco común para la integración del resto de los elementos arquitectónicos del sistema.

---
# CAPÍTULO 11 · Estados de la Experiencia de Usuario

## 11.1 Objetivo

Definir los estados generales que pueden formar parte de la experiencia de usuario dentro de GeoMotion Studio, estableciendo criterios comunes para su representación y comportamiento en toda la plataforma.

La definición de estos estados garantiza una experiencia consistente, facilita la comprensión del estado actual de la aplicación y permite mantener un comportamiento uniforme entre los distintos layouts.

---

## 11.2 Concepto

Durante su funcionamiento, GeoMotion Studio puede atravesar diferentes situaciones que modifican temporalmente la forma en que el usuario interactúa con la plataforma.

Estas situaciones constituyen los estados de la experiencia de usuario.

Un estado representa una condición global o contextual que afecta la interacción con la aplicación y que debe comunicarse de manera clara, consistente y predecible.

Los estados definidos en este capítulo son independientes de los componentes visuales que los representan. Su implementación gráfica será responsabilidad del Sistema de Diseño.

---

## 11.3 Estados Generales

La arquitectura de la experiencia contempla, entre otros, los siguientes estados generales:

### Inicialización

Corresponde al período durante el cual la aplicación prepara el entorno necesario para comenzar la sesión de trabajo.

---

### Carga

Indica que la plataforma se encuentra obteniendo o procesando información necesaria para continuar la interacción.

---

### Sin datos

Representa situaciones en las que no existen elementos disponibles para mostrar, sin que ello implique un error de funcionamiento.

---

### Error

Indica que se ha producido una situación inesperada que impide completar correctamente una operación o parte de ella.

---

### Sin conexión

Representa la pérdida total o parcial de conectividad con servicios externos o recursos necesarios para la aplicación.

---

### Acceso restringido

Indica que el usuario no dispone de los permisos necesarios para acceder a determinada información o funcionalidad.

---

### Procesos en segundo plano

Representa operaciones que continúan ejecutándose mientras el usuario mantiene el control de la interfaz.

---

### Sincronización

Indica que la plataforma está intercambiando información con servicios externos o restaurando el estado de la aplicación.

---

## 11.4 Principios

La gestión de los estados de la experiencia deberá respetar los siguientes principios:

### Claridad

El usuario deberá comprender fácilmente el estado actual de la aplicación.

### Consistencia

Un mismo estado deberá mantener siempre el mismo significado dentro de toda la plataforma.

### Continuidad

Siempre que sea posible, los estados no deberán interrumpir innecesariamente el flujo de trabajo.

### Retroalimentación

La plataforma deberá comunicar oportunamente los cambios de estado relevantes para el usuario.

### Accesibilidad

La representación de los distintos estados deberá resultar comprensible para todos los usuarios, respetando los criterios generales de accesibilidad definidos para el proyecto.

---

## 11.5 Relación con otros Documentos

La definición conceptual de los estados corresponde a la Arquitectura de Layouts.

Su representación visual será desarrollada por el Sistema de Diseño, mientras que su gestión funcional será responsabilidad del Estado Global y de la Arquitectura del Software.

Esta separación garantiza una clara distribución de responsabilidades entre los distintos niveles de la plataforma.

---

## 11.6 Resumen

Los estados de la experiencia de usuario constituyen un elemento esencial para garantizar una interacción clara, consistente y predecible.

Su definición arquitectónica permite mantener un comportamiento uniforme en toda la plataforma, independientemente del layout utilizado o de la implementación técnica de cada funcionalidad.

---
# CAPÍTULO 12 · Adaptabilidad de la Experiencia

## 12.1 Objetivo

Definir los principios que permiten adaptar la experiencia de usuario de GeoMotion Studio a diferentes dispositivos, métodos de interacción y contextos de utilización, preservando siempre la coherencia funcional de la plataforma.

---

## 12.2 Concepto

La adaptabilidad constituye la capacidad de la plataforma para ofrecer una experiencia adecuada a cada contexto de uso sin modificar su identidad funcional.

La adaptación no consiste únicamente en reorganizar elementos de la interfaz según el tamaño de la pantalla.

Implica ajustar la organización de la experiencia considerando factores como el dispositivo utilizado, el método de interacción, el espacio disponible y las características propias del entorno de trabajo.

Este enfoque permite que cada layout proporcione la mejor experiencia posible manteniendo una arquitectura común.

---

## 12.3 Principios de Adaptabilidad

La adaptación de la experiencia deberá desarrollarse conforme a los siguientes principios:

### Continuidad

El cambio entre dispositivos no deberá implicar una ruptura en la forma de utilizar la plataforma.

### Coherencia

Los conceptos funcionales deberán conservar el mismo significado independientemente del layout utilizado.

### Contexto

La organización de la interfaz deberá responder a las características reales del entorno de utilización.

### Escalabilidad

La arquitectura deberá facilitar la incorporación de nuevos dispositivos y formas de interacción sin alterar los principios fundamentales del sistema.

### Independencia

Cada layout podrá adaptar la organización de la interfaz manteniendo intacta la lógica funcional de la aplicación.

---

## 12.4 Adaptación de la Experiencia

La arquitectura de GeoMotion Studio contempla la adaptación de distintos aspectos de la interfaz, entre ellos:

- Organización de los espacios de trabajo.
- Distribución de paneles.
- Navegación.
- Presentación de herramientas.
- Métodos de interacción.
- Prioridad de la información.
- Acciones principales.
- Elementos contextuales.

Estas adaptaciones deberán orientarse siempre a mejorar la experiencia del usuario y nunca a modificar el comportamiento funcional de la plataforma.

---

## 12.5 Relación con el Documento Responsive

La adaptabilidad definida en este capítulo establece los principios arquitectónicos que regulan la evolución de la experiencia de usuario.

Los aspectos relacionados con la adaptación visual de la interfaz, los puntos de ruptura (*breakpoints*), la reorganización de componentes y los criterios específicos de diseño adaptable serán desarrollados en el documento **09_RESPONSIVE.md**.

De este modo, ambos documentos mantienen responsabilidades claramente diferenciadas y complementarias.

---

## 12.6 Resumen

La adaptabilidad constituye uno de los principios fundamentales de la Arquitectura de Layouts de GeoMotion Studio.

Su propósito es garantizar una experiencia coherente y consistente en cualquier contexto de utilización, permitiendo que la plataforma evolucione hacia nuevos dispositivos y formas de interacción sin perder su identidad funcional.

---
# CAPÍTULO 13 · Evolución de la Arquitectura de Layouts

## 13.1 Objetivo

Establecer los principios que regulan la evolución de la Arquitectura de Layouts de GeoMotion Studio, garantizando que el crecimiento de la plataforma preserve la coherencia, la estabilidad y la calidad de la experiencia de usuario.

---

## 13.2 Evolución como principio arquitectónico

La Arquitectura de Layouts ha sido concebida para evolucionar de forma progresiva, acompañando el crecimiento funcional de GeoMotion Studio sin comprometer la organización general de la experiencia.

La incorporación de nuevas funcionalidades, dispositivos o formas de interacción no deberá alterar los principios fundamentales definidos en este documento.

Toda evolución deberá orientarse a mejorar la experiencia del usuario, manteniendo la consistencia entre las distintas partes de la plataforma.

---

## 13.3 Principios de Evolución

La evolución de la arquitectura deberá respetar los siguientes principios:

### Estabilidad

Los cambios deberán preservar el funcionamiento y la organización general de la experiencia existente.

### Compatibilidad

Las nuevas capacidades deberán integrarse de forma compatible con los layouts y espacios de trabajo ya definidos.

### Modularidad

Las modificaciones deberán localizarse en los elementos afectados, evitando impactos innecesarios sobre el resto de la arquitectura.

### Escalabilidad

La plataforma deberá admitir la incorporación de nuevas experiencias de usuario sin requerir rediseños estructurales.

### Consistencia

Toda evolución deberá mantener la identidad funcional y conceptual de GeoMotion Studio.

---

## 13.4 Incorporación de Nuevos Layouts

La arquitectura permite incorporar nuevos layouts cuando la evolución del producto o la aparición de nuevos dispositivos así lo requieran.

Cada nuevo layout deberá:

- Respetar los principios arquitectónicos definidos en este documento.
- Compartir el mismo modelo funcional.
- Mantener la coherencia de navegación.
- Integrarse con los espacios de trabajo existentes.
- Preservar la continuidad de la experiencia del usuario.

La creación de un nuevo layout no deberá implicar la duplicación de funcionalidades ya existentes ni generar comportamientos inconsistentes respecto a las demás experiencias de la plataforma.

---

## 13.5 Adaptación a Nuevas Tecnologías

La evolución tecnológica constituye un proceso natural dentro del ciclo de vida del proyecto.

La Arquitectura de Layouts deberá facilitar la incorporación de nuevas capacidades de interacción, nuevos dispositivos y futuras tecnologías de visualización sin modificar los principios fundamentales sobre los cuales se organiza la experiencia de usuario.

Esta independencia entre arquitectura e implementación favorece la sostenibilidad del proyecto a largo plazo.

---

## 13.6 Resumen

La evolución de la Arquitectura de Layouts deberá realizarse de forma controlada, preservando la estabilidad, la coherencia y la identidad de la plataforma.

Los principios establecidos en este capítulo proporcionan un marco de referencia que permitirá adaptar GeoMotion Studio a futuras necesidades sin comprometer la calidad de la experiencia de usuario.

---
# CAPÍTULO 14 · Relación con el Sistema de Diseño

## 14.1 Objetivo

Definir la relación existente entre la Arquitectura de Layouts y el Sistema de Diseño, estableciendo una distribución clara de responsabilidades entre ambos documentos.

---

## 14.2 Arquitectura y Diseño

La Arquitectura de Layouts y el Sistema de Diseño constituyen disciplinas complementarias dentro de GeoMotion Studio.

Mientras la Arquitectura de Layouts define la organización de la experiencia de usuario, el Sistema de Diseño establece la identidad visual y los patrones de interacción que permiten materializar dicha experiencia.

Esta separación favorece la evolución independiente de ambas áreas, evitando dependencias innecesarias entre las decisiones arquitectónicas y las decisiones de diseño.

---

## 14.3 Responsabilidades de la Arquitectura de Layouts

Corresponde a la Arquitectura de Layouts definir:

- La organización general de la experiencia.
- La estructura de los distintos layouts.
- La distribución de los espacios de trabajo.
- Los principios de navegación.
- El ciclo de vida de la aplicación.
- Los estados generales de la experiencia.
- Los criterios de adaptación entre layouts.
- Los principios que regulan la evolución de la interfaz.

Estas decisiones constituyen el marco organizativo de la plataforma.

---

## 14.4 Responsabilidades del Sistema de Diseño

Corresponde al Sistema de Diseño definir:

- Componentes visuales.
- Tipografía.
- Paleta de colores.
- Iconografía.
- Espaciado.
- Estilos visuales.
- Animaciones.
- Patrones de interacción.
- Accesibilidad visual.
- Comportamiento de los componentes reutilizables.

Estas decisiones determinan la apariencia y el comportamiento visual de la interfaz.

---

## 14.5 Colaboración entre ambos Documentos

La Arquitectura de Layouts y el Sistema de Diseño evolucionan de forma coordinada.

Las decisiones arquitectónicas establecen qué elementos forman parte de la experiencia de usuario y cuál es su función dentro de la plataforma.

El Sistema de Diseño determina posteriormente cómo dichos elementos se representan visualmente y cómo interactúan con el usuario.

Esta colaboración permite mantener una experiencia coherente sin mezclar responsabilidades pertenecientes a distintos niveles de la arquitectura.

---

## 14.6 Resumen

La Arquitectura de Layouts y el Sistema de Diseño constituyen dos pilares fundamentales de la experiencia de usuario de GeoMotion Studio.

Mientras la primera organiza la estructura funcional de la interfaz, el segundo define su representación visual, garantizando conjuntamente una plataforma coherente, consistente y preparada para evolucionar de manera sostenible.

---
# CAPÍTULO 15 · Cierre del Documento

## 15.1 Objetivo

Consolidar los principios establecidos a lo largo de este documento, reafirmando el papel de la Arquitectura de Layouts como el marco que organiza la experiencia de usuario de GeoMotion Studio y orienta su evolución futura.

---

## 15.2 Síntesis de la Arquitectura

La Arquitectura de Layouts define la forma en que los usuarios interactúan con GeoMotion Studio.

A lo largo de este documento se han establecido los principios que regulan la organización de la interfaz, la estructura de los distintos layouts, la distribución de los espacios de trabajo, la navegación, el ciclo de vida de la aplicación y los estados generales de la experiencia de usuario.

Estas definiciones proporcionan un marco arquitectónico estable que permite mantener una experiencia coherente, independientemente del crecimiento funcional de la plataforma o de la incorporación de nuevos dispositivos.

---

## 15.3 Principios Permanentes

La evolución de la experiencia de usuario deberá preservar los siguientes principios fundamentales:

- Coherencia entre todos los layouts.
- Continuidad de la experiencia del usuario.
- Organización clara de la interfaz.
- Adaptación al contexto de utilización.
- Separación de responsabilidades entre arquitectura, diseño e implementación.
- Escalabilidad de la plataforma.
- Productividad como objetivo principal de la interfaz.
- Evolución sostenible del sistema.

Estos principios constituyen el marco de referencia para todas las decisiones relacionadas con la experiencia de usuario de GeoMotion Studio.

---

## 15.4 Relación con la Documentación del Proyecto

La Arquitectura de Layouts forma parte del conjunto de documentos que definen la plataforma.

Su contenido complementa la información desarrollada en la Visión del Producto, la Arquitectura General, el Sistema de Diseño, la Arquitectura de Componentes, el documento Responsive, el Estado Global y el resto de la documentación técnica.

Cada uno de estos documentos aborda una perspectiva diferente del proyecto, manteniendo responsabilidades claramente diferenciadas y evitando solapamientos entre las distintas áreas de conocimiento.

En conjunto, conforman un marco documental coherente que facilita el desarrollo, la evolución y el mantenimiento de GeoMotion Studio.

---

## 15.5 Declaración Final

La Arquitectura de Layouts no define únicamente la disposición de los elementos que conforman la interfaz.

Define la manera en que las personas interactúan con GeoMotion Studio.

Cada layout, cada espacio de trabajo, cada transición y cada principio descrito en este documento forman parte de una visión común cuyo propósito es ofrecer una experiencia coherente, eficiente y preparada para evolucionar junto con la plataforma.

La organización de la experiencia de usuario constituye uno de los pilares fundamentales del proyecto y deberá mantenerse como una referencia permanente durante todo el ciclo de vida de GeoMotion Studio.

---

## 15.6 Resumen

Este documento establece la Arquitectura de Layouts como el marco que organiza la experiencia de usuario de GeoMotion Studio.

Los principios aquí definidos servirán como referencia para el diseño, desarrollo y evolución de la plataforma, garantizando que todas las decisiones relacionadas con la interfaz respondan a una visión común basada en la coherencia, la productividad, la adaptabilidad y la sostenibilidad arquitectónica.