# Guía Editorial de la Documentación

**Proyecto:** GeoMotion Studio

**Versión:** 1.0

**Estado:** Vigente

---

# Propósito

Esta guía establece los criterios editoriales que deberán seguir todos los documentos oficiales de GeoMotion Studio.

Su objetivo es garantizar que la documentación mantenga un lenguaje, una estructura y una calidad homogéneos, independientemente del autor o del momento en que haya sido redactada.

La documentación forma parte de la arquitectura del proyecto y constituye una fuente oficial de conocimiento.

---

# Alcance

Esta guía aplica a toda la documentación del proyecto, incluyendo:

- README principal.
- Documentación general (`docs/`).
- Manual de Ingeniería.
- Architecture Decision Records (ADR).
- Ejemplos.
- Referencias.
- Guías técnicas.
- Tutoriales.
- Documentación futura.

---

# Principios Editoriales

Toda la documentación deberá respetar los siguientes principios.

## Claridad

Los documentos deben ser fáciles de leer y comprender.

Debe evitarse el lenguaje ambiguo, excesivamente informal o innecesariamente complejo.

---

## Precisión

Cada afirmación debe ser técnicamente correcta.

No deben incluirse afirmaciones especulativas como si fueran hechos.

---

## Consistencia

Los mismos conceptos deberán utilizar siempre la misma terminología.

La consistencia es prioritaria sobre las preferencias individuales de cada autor.

---

## Trazabilidad

Las decisiones importantes deberán documentarse.

Cuando corresponda, deberán referenciarse los ADR asociados.

---

## Evolución Continua

La documentación evoluciona junto con el software.

Toda modificación importante del proyecto deberá reflejarse en la documentación correspondiente.

---

# Idioma

La documentación oficial del proyecto se redacta en español.

Los nombres propios de tecnologías, bibliotecas y herramientas podrán mantenerse en su idioma original.

Ejemplos:

- React
- TypeScript
- OpenLayers
- Three.js
- Vite
- GitHub
- Node.js

Los dominios funcionales del producto conservarán su denominación en inglés para mantener la consistencia con la estructura del código fuente.

Ejemplos:

- Project
- Scene
- Map
- Timeline
- Assets
- Objects
- Render
- Export

---

# Convenciones de Escritura

## Nombre del proyecto

Siempre escribir:

**GeoMotion Studio**

Nunca:

- geomotion
- Geo Motion
- GeoMotionStudio
- GMS

Excepto cuando el nombre corresponda literalmente a carpetas, repositorios o identificadores de código.

---

## Inteligencia Artificial

La primera vez que aparezca en un documento deberá escribirse:

**Inteligencia Artificial (IA)**

Posteriormente podrá utilizarse únicamente **IA**.

---

## Extensiones y Plugins

Se utilizarán los siguientes términos con el significado arquitectónico oficial.

### Extensión

Una **Extensión** constituye el concepto arquitectónico general para describir cualquier capacidad incorporada al núcleo mediante los mecanismos oficiales de extensibilidad.

Este término deberá utilizarse cuando el contexto sea conceptual o arquitectónico.

### Plugin

Un **Plugin** constituye una implementación concreta de una **Extensión**, empaquetada e integrada conforme al modelo oficial de plugins de GeoMotion Studio.

Este término deberá utilizarse cuando se haga referencia a implementaciones concretas, paquetes distribuibles o al modelo de plugins.

No deberán utilizarse **Plugin** y **Extensión** como sinónimos.

El término **complemento** deberá evitarse salvo cuando se cite documentación externa.

---



## Open Source

Siempre escribir:

**Open Source**

---

## Backend y Cliente

Cuando el contexto sea arquitectónico se utilizarán los términos:

- Cliente
- Backend

En lugar de mezclarlos con otros equivalentes.

---

## Terminología

La Guía Editorial constituye la **autoridad terminológica oficial** de GeoMotion Studio.

| Término | Definición oficial |
|---|---|
| Producto | Solución ofrecida por GeoMotion Studio desde la perspectiva funcional. |
| Plataforma | Ecosistema completo de GeoMotion Studio. |
| Sistema | Conjunto organizado de elementos software o un subsistema concreto. |
| Módulo | División arquitectónica de alto nivel. |
| Componente | Unidad arquitectónica reutilizable con responsabilidades definidas. |
| Servicio | Proveedor de funcionalidades accesible por otros componentes. |
| Capacidad | Funcionalidad ofrecida por la plataforma, independiente de su implementación. |
| Núcleo | Conjunto estable de capacidades fundamentales de la plataforma. |
| Extensión | Concepto arquitectónico general para ampliar el núcleo. |
| Plugin | Implementación concreta de una extensión. |
| Punto de extensión | Contrato arquitectónico que habilita la incorporación de extensiones. |
| Estado | Información viva administrada por la aplicación. |
| Configuración | Conjunto de parámetros persistentes del sistema. |
| Versión | Identificador de un estado evolutivo de un activo. |
| Revisión | Modificación de una versión existente. |
| Línea Base | Conjunto de activos congelados y aprobados. |
| Publicación | Línea Base oficialmente liberada. |

Siempre que sea posible deberán utilizarse estos términos de forma uniforme en toda la documentación.

No deberán emplearse sinónimos cuando puedan generar ambigüedad arquitectónica.

---



# Estructura de los Documentos

Siempre que resulte aplicable, los documentos deberán seguir una estructura homogénea.

```text
Título

Introducción

Objetivos

Alcance

Desarrollo

Conclusiones
```

No todos los documentos requieren exactamente las mismas secciones.

La estructura podrá adaptarse cuando el tipo de documento lo justifique.

---

# Encabezados

Utilizar la sintaxis estándar de Markdown.

```markdown
# Nivel 1

## Nivel 2

### Nivel 3

#### Nivel 4
```

Evitar utilizar más de cuatro niveles de encabezados.

---

# Listas

Utilizar listas simples para enumeraciones.

```markdown
- Elemento
- Elemento
- Elemento
```

Las listas numeradas deberán reservarse para procedimientos secuenciales.

---

# Tablas

Las tablas deberán utilizarse cuando faciliten la comprensión de la información.

Son especialmente recomendables para:

- Comparaciones.
- Matrices.
- Catálogos.
- Resúmenes.
- Decisiones.
- Referencias.

No deben utilizarse cuando una lista resulte más clara.

---

# Diagramas

Siempre que sea posible deberán utilizarse diagramas sencillos y fáciles de mantener.

Se recomienda utilizar:

- Diagramas ASCII.
- Mermaid.
- Imágenes SVG.

Las imágenes deberán almacenarse en:

```text
docs/imágenes/
```

No deberán quedar dispersas entre diferentes carpetas del proyecto.

---

# Fragmentos de Código

Todo código deberá escribirse utilizando bloques Markdown.

Ejemplo:

```typescript
const app = createApp();
```

Siempre que sea posible deberá indicarse el lenguaje correspondiente.

---

# Enlaces

Los enlaces internos deberán ser relativos.

Ejemplo:

```markdown
[Arquitectura](02_ARQUITECTURA.md)
```

Evitar enlaces absolutos hacia el mismo repositorio.

---

# Convenciones Tipográficas

Utilizar:

- **Negrita** para conceptos importantes.
- `Código` para nombres de archivos, carpetas, clases, funciones y comandos.
- *Cursiva* únicamente para citas o énfasis puntuales.

Evitar el uso excesivo de formatos.

---

# Organización de la Documentación

La documentación oficial del proyecto se organiza de la siguiente manera:

```text
docs/
│
├── README.md
├── GUIA_EDITORIAL.md
├── imágenes/
├── Ingeniería/
├── adr/
├── ejemplos/
└── referencias/
```

Cada carpeta tiene una responsabilidad específica y deberá mantenerse organizada.

---

# Identificación de Documentos

Algunas familias documentales utilizan identificadores para facilitar su clasificación y trazabilidad.

Los prefijos actualmente utilizados son:

| Prefijo | Descripción |
|----------|-------------|
| ADR | Architecture Decision Record. Registra decisiones arquitectónicas permanentes. |
| INT | Documento técnico interno de la Dirección Técnica. |

La numeración de cada familia es independiente y secuencial.

Ejemplos:

- ADR-001
- ADR-002
- INT-001
- INT-002

La utilización de nuevos prefijos deberá documentarse en esta guía cuando se incorporen nuevas familias documentales al proyecto.

---

# Versionado de la Documentación

La documentación evoluciona junto con GeoMotion Studio.

Toda modificación significativa deberá reflejarse en la documentación correspondiente.

Cuando una nueva versión del proyecto implique cambios arquitectónicos importantes, los documentos afectados deberán actualizarse antes de considerar finalizada la versión.

---

# Revisión Editorial

Antes de incorporar un documento al repositorio deberán verificarse, como mínimo, los siguientes aspectos.

## Contenido

- Objetivo claramente definido.
- Información técnicamente correcta.
- Coherencia con el resto de la documentación.

## Redacción

- Ortografía.
- Gramática.
- Claridad.
- Consistencia terminológica.

## Formato

- Encabezados.
- Listas.
- Tablas.
- Diagramas.
- Bloques de código.
- Enlaces.

## Calidad

- Sin contenido duplicado.
- Sin referencias obsoletas.
- Sin enlaces rotos.
- Markdown correctamente formateado.

---

# Filosofía

La documentación no describe únicamente el software.

La documentación forma parte del software.

Una arquitectura bien documentada facilita la incorporación de nuevos colaboradores, mejora la calidad del proyecto y permite que GeoMotion Studio evolucione de manera consistente durante muchos años.

Cada documento debe escribirse pensando en que pueda seguir siendo útil dentro de cinco o diez años.

La documentación es una inversión en el futuro del proyecto.

> *"El código explica cómo funciona el sistema. La documentación explica por qué existe."*