# Guía Editorial de la Documentación

**Proyecto:** GeoMotion Studio

**Versión:** 2.2

**Estado:** Aprobado para incorporación — vigencia de la versión 2.2 diferida hasta la publicación material de la Línea base G4 que la incluya

**Última actualización:** 4 de septiembre de 2026

---

# Historial de versiones

| Versión | Fecha | Estado | Modificación | Trazabilidad |
|---|---|---|---|---|
| 1.0 | No consta en la documentación vigente | Vigente | Versión anterior a la corrección de nombres materiales en el árbol de documentación | Referencias `GUIA_EDITORIAL.md` e `Ingeniería/` |
| 1.1 | 28 de julio de 2026 | Vigente | Corrección de dos nombres materiales en el árbol de documentación, sin alterar la organización prevista | `GUÍA_EDITORIAL.md`; `ingeniería/`; sección `Organización de la Documentación` |
| 2.0 | 4 de septiembre de 2026 | Aprobado y vigente | Integración del vocabulario transversal de SDD; distinción de identidades, estados, participantes, invariantes, variantes y excepciones; corrección de Publicación y Revisión | `ACTO-G2-GMS-20260904-05`; D-12 a D-18 |
| 2.1 | 4 de septiembre de 2026 | Aprobado y vigente | Incorporación controlada de la familia SPEC, sus identificadores y su regla de activación; activada por la publicación material de `LB-G3-GMS-20260904-01` | `ACTO-G3-GMS-20260904-07`; D-20 y D-23; commit `4a76985a24b74fb955bd806e7ac7a6c1481525d1` |
| 2.2 | 4 de septiembre de 2026 | Aprobado para incorporación — vigencia diferida | Incorporación de los identificadores de stakeholders, actores y capacidades de producto aprobados en G4 | `ACTO-G4-GMS-20260904-09`; D-31 |

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

### Regla de integración terminológica

Los glosarios especializados:

- pueden añadir precisión dentro de su dominio;
- deben enlazar el término transversal correspondiente;
- deben utilizar un nombre calificado cuando el concepto especializado no sea idéntico;
- no pueden reducir, contradecir ni sustituir el significado transversal;
- no confieren autoridad fuera de su ámbito.

Ante una contradicción material no resuelta, el término queda bloqueado para uso normativo hasta que exista una decisión institucional y una versión sucesora.

### Convenciones terminológicas

1. Los términos comunes se escriben en minúscula salvo inicio de oración o denominación formal.
2. Los identificadores, nombres de documentos y nombres de módulos conservan su forma oficial.
3. La primera aparición de Desarrollo Guiado por Especificaciones se escribe `Desarrollo Guiado por Especificaciones (SDD)`; luego se utiliza `SDD`.
4. No se utiliza una sigla alternativa para SDD.
5. `IA` significa Inteligencia Artificial; `AI` solo puede aparecer como literal externo, nombre técnico o dato heredado.
6. Un término calificado prevalece sobre el término genérico dentro de su dominio, siempre que no contradiga la definición transversal.

### Términos transversales

| Término | Definición oficial | Delimitación obligatoria |
|---|---|---|
| Producto | Solución ofrecida por GeoMotion Studio desde la perspectiva funcional y de valor. | No equivale a plataforma ni a una implementación concreta. |
| Plataforma | Ecosistema completo de GeoMotion Studio, sus capacidades, productos, componentes, extensiones y servicios relacionados. | No debe usarse como sinónimo automático de aplicación. |
| Sistema | Conjunto organizado de elementos de software o subsistema concreto delimitado por un contexto. | Debe indicarse el alcance cuando pueda confundirse con la plataforma completa. |
| Módulo | División arquitectónica de alto nivel con responsabilidades, información propia y fronteras definidas. | No es una carpeta ni un componente por el solo hecho de estar separado físicamente. |
| Componente | Unidad arquitectónica o de software delimitada, reutilizable cuando corresponda y con responsabilidad definida. | Su significado de dominio debe calificarse si es más específico. |
| Servicio | Proveedor de capacidades accesibles mediante contratos definidos. | No implica proceso remoto, red ni despliegue independiente. |
| Capacidad | Resultado o función que la plataforma puede ofrecer independientemente de la implementación concreta que la materialice. | No es un componente, proveedor, rol ni permiso. |
| Núcleo | Conjunto estable de capacidades fundamentales y mecanismos comunes de la plataforma. | Sus límites se determinan por la arquitectura vigente. |
| Extensión | Concepto arquitectónico general para una capacidad incorporada mediante los mecanismos oficiales de extensibilidad. | No es sinónimo de Plugin. |
| Plugin | Implementación concreta y empaquetada de una Extensión conforme al modelo oficial. | Puede ser interno o externo según la arquitectura especializada. |
| Punto de extensión | Superficie arquitectónica intencional que habilita extensiones mediante contratos públicos definidos. | No es cualquier API ni un acceso a implementaciones internas. |
| Configuración | Conjunto identificado de valores o de versiones de activos, según el dominio expresamente indicado. | Debe calificarse como configuración de aplicación o configuración de activos cuando exista ambigüedad. |
| Activo de ingeniería | Elemento documental, técnico o material cuya evolución resulta relevante para el desarrollo, mantenimiento o gobierno y debe controlarse. | La mera existencia de un archivo no le concede autoridad institucional. |
| Versión | Estado identificado de un activo en un momento determinado de su evolución. | Una versión publicada es inmutable; todo cambio origina otra versión. |
| Revisión | Proceso de evaluación de un activo. También puede designar el tercer componente de un esquema de versión si se escribe `revisión de versión`. | Nunca significa alterar silenciosamente una versión publicada. |
| Estado de aplicación | Información viva administrada durante la operación de la aplicación. | No equivale a estado documental ni de dominio. |
| Estado de dominio | Situación identificable de una entidad del dominio, gobernada por transiciones y reglas. | Se define en la arquitectura de dominio o en la SPEC aplicable. |
| Estado del ciclo de vida | Etapa por la que transita un activo desde su creación hasta su retiro. | No determina por sí solo su número de versión. |
| Estado de madurez | Nivel de desarrollo, revisión o consolidación atribuido a una versión. | Versión y madurez son conceptos distintos. |
| Línea base | Composición identificada, formalmente aprobada e inmutable de versiones específicas de activos de ingeniería. | No es un archivo único, una carpeta, un commit ni una Publicación, aunque pueda representarse materialmente mediante ellos. |
| Publicación | Distribución o incorporación oficial de uno o más activos basada en una Línea base previamente aprobada. | Una Línea base puede existir antes de su Publicación. |
| Release | Publicación de una Línea base destinada a usuarios o destinatarios definidos. | Utilizar Publicación en español salvo nombre técnico o literal externo. |
| Trazabilidad | Capacidad de reconstruir relaciones, decisiones, cambios, versiones y evidencias que explican el estado de un activo o resultado. | Una conversación no incorporada a un acto no sustituye la trazabilidad institucional. |

### Términos de SDD

| Término | Definición oficial | Regla de uso |
|---|---|---|
| Desarrollo Guiado por Especificaciones (SDD) | Método institucional mediante el cual una necesidad se transforma en comportamiento especificado, contratos verificables, pruebas, implementación y evidencia trazable, respetando la arquitectura y las autoridades documentales vigentes. | Ordena, relaciona y hace verificables los documentos; no los sustituye ni crea autoridad paralela. |
| Necesidad | Problema, objetivo o resultado requerido por un interesado que justifica evaluar un cambio. | No autoriza por sí sola solución ni implementación. |
| Requisito | Condición necesaria, atómica, identificable y verificable que debe satisfacer un producto, sistema, proceso o incremento. | Debe indicar fuente, alcance y método de verificación. |
| Requisito funcional | Requisito que describe un comportamiento o resultado observable. | No debe prescribir una implementación salvo que la restricción sea parte autorizada del requisito. |
| Requisito no funcional | Requisito que fija una cualidad o restricción medible aplicable a un comportamiento o sistema. | Debe contener entorno, métrica, método y umbral cuando corresponda. |
| SPEC | Documento aprobado que define de forma suficiente y verificable el comportamiento de un incremento, sus límites, contratos, invariantes, variantes, errores y criterios de aceptación. | No introduce arquitectura nueva ni concede permiso de implementación antes de G9. |
| Incremento | Unidad acotada de resultado cuya especificación, implementación y aceptación pueden trazarse de extremo a extremo. | Debe preservar valor observable y posibilidad de verificación. |
| Criterio de aceptación | Condición binaria y observable que determina si un resultado satisface una parte identificada de la SPEC. | Debe enlazar un método de verificación y evidencia esperada. |
| Contrato | Acuerdo explícito, identificable y verificable que define datos, operaciones, estados, eventos, errores o restricciones entre participantes. | Deriva de arquitectura y SPEC; no es una alternativa a ellas. |
| Evidencia | Registro material verificable que demuestra la ejecución de un control, el cumplimiento de un criterio o la identidad de un activo. | Un hash demuestra identidad material, no autoridad institucional. |
| Prueba | Procedimiento reproducible que contrasta un resultado con una condición esperada. | La prueba genera evidencia; no decide por sí sola autoridad ni alcance. |
| Puerta | Punto de control institucional con criterios explícitos cuyo cierre habilita una etapa determinada. | Cerrar una puerta solo autoriza lo que su definición indica. |
| Deuda no bloqueante | Incumplimiento o carencia aceptada expresamente que no invalida la puerta actual y conserva responsable y disparador de revisión. | No puede ocultar una contradicción crítica ni una ausencia de autoridad. |

### Identidad lógica y material

| Término | Definición oficial | Regla de control |
|---|---|---|
| Identidad lógica | Conjunto de atributos institucionales que permite reconocer un activo como el mismo objeto conceptual a través de sus estados: identificador estable, título, familia, versión, estado, autoridad, propietario y relaciones cuando correspondan. | Puede preservarse aunque cambien ruta, contenedor o bytes, siempre que el cambio esté gobernado y produzca la versión que corresponda. |
| Identidad material | Conjunto de propiedades verificables de una representación concreta: bytes, tamaño, huella criptográfica, formato, ruta o nombre de transporte y composición cuando corresponda. | Dos materiales son idénticos solo si el método de comparación definido lo demuestra. |
| Identidad de transporte | Nombre y propiedades utilizadas para trasladar un material entre sistemas o personas. | Un sufijo impuesto por la interfaz no crea una nueva versión si los bytes y la huella esperada coinciden. |
| Manifiesto | Registro de composición e integridad que relaciona rutas con identidades materiales. | Demuestra composición; no confiere vigencia. |
| Contenedor | Archivo o estructura que agrupa materiales para transporte, archivo o verificación. | Su identidad no sustituye la identidad de los activos internos. |

### Participantes, seguridad e IA

| Término | Definición oficial | Delimitación obligatoria |
|---|---|---|
| Interesado | Persona, grupo u organización afectada por el producto o capaz de influir en sus resultados o decisiones. | No implica uso directo ni autoridad. |
| Actor | Participante externo o interno que interactúa con un comportamiento especificado para alcanzar un resultado. | Puede ser humano o técnico; debe identificarse su naturaleza. |
| Usuario | Persona que utiliza o recibe valor del producto. | No equivale a rol de autorización ni a identidad técnica. |
| Identidad de seguridad | Entidad capaz de autenticarse o ejecutar acciones sobre recursos protegidos. | Definida por DOC-017; no equivale a identidad lógica o material de un activo. |
| Identidad de servicio | Identidad de seguridad no humana asignada a un proceso o servicio para actuar con permisos delimitados. | Debe respetar mínimo privilegio y trazabilidad. |
| Rol | Agrupación de responsabilidades y, en el dominio de autorización, de permisos asignables a una identidad. | Su nombre no concede permisos fuera de una política aprobada. |
| Permiso | Autorización específica para ejecutar una acción sobre un recurso. | Es la unidad mínima del control de acceso definido por DOC-017. |
| Agente | Entidad humana o técnica que ejecuta una misión o comportamiento dentro de un alcance y autoridad delimitados. | Debe calificarse como agente humano, de software o de IA cuando pueda existir ambigüedad. |
| Agente de IA | Sistema de IA capaz de seleccionar o ejecutar acciones dentro de un contexto y límites definidos. | No es un rol humano ni posee autoridad institucional por sí mismo. |
| Capacidad de IA | Capacidad cuyo resultado se obtiene total o parcialmente mediante un sistema de IA. | No es un actor, una identidad, un proveedor ni un permiso. |
| Modelo de IA | Implementación entrenada capaz de proporcionar una o más capacidades de IA. | Puede variar sin redefinir la capacidad si conserva el contrato aplicable. |
| Proveedor de IA | Organización o sistema que ofrece modelos o servicios de IA. | No constituye una autoridad del proyecto. |

`Admin`, `AI` y `Usuario` permanecen como hipótesis de incorporación futura. No son roles vigentes y no habilitan permisos.

### Invariantes, variantes y excepciones

| Término | Definición oficial | Regla de uso |
|---|---|---|
| Invariante | Condición que debe permanecer verdadera dentro de un alcance y horizonte declarados. | Debe poseer identificador, fuente, alcance y criterio de aplicabilidad. |
| Invariante permanente | Invariante sin fecha de expiración prevista cuya modificación exige una decisión y una versión sucesora de su fuente. | No significa inmodificable; significa que no cambia de manera implícita. |
| Invariante transitoria | Invariante vigente hasta una fecha, evento o puerta explícita. | Deja de aplicar solo cuando el disparador se verifica materialmente. |
| Variante | Punto de variación autorizado cuyo valor puede cambiar dentro de opciones y restricciones explícitas sin vulnerar invariantes. | Una decisión abierta no es una variante autorizada hasta definir su rango. |
| Excepción | Apartamiento extraordinario, explícito, aprobado y trazable respecto de una regla o invariante aplicable. | No crea precedente automático y debe tener revisión o condición de cierre. |
| Control compensatorio | Medida adicional que reduce el riesgo introducido por una excepción. | No convierte una excepción en conformidad ordinaria. |

### Formas prohibidas o restringidas

| Forma | Tratamiento |
|---|---|
| Sigla alternativa para SDD | No utilizar. |
| `AI` como término institucional en español | Sustituir por `IA`, salvo literal externo o identificador técnico. |
| `Admin` como rol vigente | Prohibido hasta que una SPEC y una política de autorización lo definan y aprueben. |
| `Usuario` como rol de autorización | Prohibido; Usuario designa persona o perfil de uso. |
| `Agente` sin calificador cuando exista ambigüedad | Debe precisarse su naturaleza. |
| `Estado` sin calificador en texto normativo ambiguo | Debe calificarse por dominio. |
| `Revisión` como mutación de versión publicada | Prohibido. |
| `Publicación` como sinónimo de Línea base | Prohibido. |

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
[Arquitectura](ingeniería/02_ARQUITECTURA.md)
```

El ejemplo anterior se resuelve desde la ubicación material de esta Guía Editorial.

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
├── GUÍA_EDITORIAL.md
├── imágenes/
├── ingeniería/
├── adr/
├── ejemplos/
├── producto/
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
| SPEC | Especificación verificable de un incremento; su uso institucional está vigente desde la publicación material de `LB-G3-GMS-20260904-01`. |

La numeración de cada familia es independiente y secuencial.

Ejemplos:

- ADR-001
- ADR-002
- INT-001
- INT-002

La utilización de nuevos prefijos deberá documentarse en esta guía cuando se incorporen nuevas familias documentales al proyecto.

### Gobernanza de las familias documentales

La presente Guía Editorial constituye la autoridad institucional para la nomenclatura y clasificación de las familias documentales de GeoMotion Studio.

Toda nueva familia documental que se incorpore al proyecto deberá registrarse en esta guía antes de su utilización generalizada.

Para cada familia deberán definirse, como mínimo:

- Prefijo oficial.
- Propósito.
- Ámbito de aplicación.
- Responsable de mantenimiento.
- Convención de numeración.
- Relación con el resto del ecosistema documental.

Ejemplos de familias documentales presentes o potenciales:

| Prefijo | Familia documental | Estado |
|----------|--------------------|--------|
| DOC | Manual de Ingeniería | Vigente |
| ADR | Architecture Decision Records | Vigente |
| INT | Documentación interna de Dirección Técnica | Vigente |
| SPEC | Especificaciones de incrementos de GeoMotion Studio | Vigente desde la publicación material de `LB-G3-GMS-20260904-01` |
| RFC | Propuestas de cambio arquitectónico o técnico | Reservado para evolución futura |
| MVA | Documentación de Minimum Viable Architecture | Reservado para evolución futura |

La incorporación de una familia documental no implica necesariamente su adopción inmediata. Las familias marcadas como "Reservado para evolución futura" constituyen nomenclaturas disponibles para futuras necesidades del proyecto y deberán formalizarse mediante la documentación correspondiente antes de entrar en uso.

### Familia SPEC

| Campo | Regla |
|---|---|
| Prefijo oficial | `SPEC` |
| Familia | Especificaciones de incrementos de GeoMotion Studio |
| Propósito | Definir de forma suficiente, verificable y trazable el comportamiento aprobado de un incremento |
| Ámbito | Un incremento funcional o técnico acotado |
| Responsable de mantenimiento | Propietario documental designado en cada SPEC, bajo integración y control de conformidad de Dirección Técnica |
| Autoridad de aprobación | Founder, salvo delegación institucional futura expresa y vigente |
| Numeración | Secuencia global `SPEC-GMS-NNNN`, sin reutilización |
| Versión | Conforme a DOC-018 y a esta Guía Editorial |
| Ubicación prevista | `docs/spec/` |
| Relación | Se subordina a Visión, Constitución, Manual de Ingeniería, arquitecturas especializadas, ADR, glosarios e invariantes vigentes |

Una SPEC no introduce arquitectura nueva. Cuando detecta una decisión arquitectónica faltante o contradictoria, queda bloqueada hasta que el proceso ADR la resuelva y los documentos afectados se actualicen cuando corresponda.

Nombre material recomendado:

`SPEC-GMS-NNNN_TITULO_BREVE_vMAJOR.MINOR.PATCH.md`

Sus estados de madurez son `Borrador`, `En revisión`, `Candidato`, `Aprobada`, `Publicada`, `Sustituida` y `Retirada`. El estado debe declararse junto con la versión. `Aprobada` describe autoridad documental; no demuestra implementación. `Publicada` describe incorporación oficial; no equivale a funcionalidad implementada, aceptada o liberada.

### Identificadores globales de gobierno SDD

| Patrón | Elemento | Regla |
|---|---|---|
| `INI-GMS-NNNN` | Iniciativa | Registra una necesidad admitida para análisis; no autoriza solución ni código |
| `SPEC-GMS-NNNN` | SPEC | Identifica una especificación durante toda su vida; la versión cambia, el ID no |
| `CAM-GMS-NNNN` | Cambio controlado | Identifica una solicitud de cambio y su impacto |
| `EXC-GMS-NNNN` | Excepción | Identifica un apartamiento extraordinario conforme al registro G2 |
| `REV-GMS-NNNN` | Revisión | Identifica una actuación de revisión que deba conservarse como evidencia independiente |
| `ACE-GMS-NNNN` | Aceptación | Identifica la decisión de aceptación de un resultado |
| `CTX-GMS-NNNN` | Context Package | Identifica un paquete de contexto derivado de fuentes institucionales |

Estos identificadores son únicos dentro de su familia, no se reutilizan y no confieren autoridad, aprobación ni vigencia. Cuando identifican un activo versionado deben acompañarse por versión y estado, y conservar relación con sus sucesores, sustituciones y retiros.

### Identificadores de producto

| Patrón | Elemento | Regla |
|---|---|---|
| `STK-GMS-NNNN` | Stakeholder | Identifica una persona, grupo u organización relevante para el producto; no confiere autoridad institucional |
| `ACTR-GMS-NNNN` | Actor | Identifica un participante humano o técnico de una interacción; no constituye un rol ni concede permisos |
| `CAP-GMS-NNNN` | Capacidad | Identifica un resultado que la plataforma puede ofrecer con independencia de su implementación; no demuestra que esté implementado ni autorizado |

Estos patrones fueron aprobados para incorporación mediante D-31. La versión 2.2 que los incorpora adquirirá vigencia únicamente con la publicación material de la Línea base G4 exacta que la incluya. Los identificadores son estables, no se reutilizan y no crean familias documentales, módulos, proveedores, roles o permisos.

### Identificadores internos de una SPEC

| Patrón | Elemento |
|---|---|
| `SPEC-GMS-NNNN-RF-NNN` | Requisito funcional |
| `SPEC-GMS-NNNN-RNF-NNN` | Requisito no funcional |
| `SPEC-GMS-NNNN-CA-NNN` | Criterio de aceptación |
| `SPEC-GMS-NNNN-CTR-NNN` | Contrato |
| `SPEC-GMS-NNNN-ERR-NNN` | Error o condición excepcional |
| `SPEC-GMS-NNNN-PRU-NNN` | Prueba o procedimiento de verificación |
| `SPEC-GMS-NNNN-EVI-NNN` | Evidencia esperada o producida |

La numeración interna es estable dentro de la SPEC. Un elemento retirado no libera su número. Una versión sucesora conserva el identificador cuando mantiene la identidad semántica y asigna uno nuevo cuando introduce otra obligación.

### Entrada en vigor de la familia SPEC

La familia SPEC quedará activa únicamente cuando concurran estas cuatro condiciones:

1. aprobación de D-20 y D-23;
2. integración de estas reglas en esta versión sucesora de la Guía Editorial;
3. aprobación de la plantilla SPEC materializada; y
4. aprobación y publicación material de `LB-G3-GMS-20260904-01`.

Las tres primeras condiciones fueron satisfechas mediante `ACTO-G3-GMS-20260904-07`; la cuarta se satisfizo con la publicación material de `LB-G3-GMS-20260904-01` en el commit `4a76985a24b74fb955bd806e7ac7a6c1481525d1`. La familia SPEC está vigente. La existencia de la familia no crea, aprueba ni publica una SPEC concreta.


## Documentos oficiales del Manual de Ingeniería

El **Manual de Ingeniería** constituye una familia documental propia y utiliza una numeración oficial independiente.

La nomenclatura oficial es:

| Formato | Descripción |
|----------|-------------|
| `DOC-000` | Documento oficial del Manual de Ingeniería. |
| `DOC-001` | Documento oficial del Manual de Ingeniería. |
| `DOC-002` | Documento oficial del Manual de Ingeniería. |
| `...` | Numeración secuencial. |

Reglas:

- Todos los documentos oficiales del Manual deberán identificarse mediante el prefijo `DOC`.
- La numeración será secuencial, comenzando en `DOC-000`.
- El identificador forma parte del documento y deberá mantenerse estable durante toda su vida útil.
- El cambio de versión de un documento no modifica su identificador.
- La reutilización de identificadores está prohibida.
- La referencia cruzada entre documentos deberá utilizar siempre el identificador oficial (`DOC-000`, `DOC-001`, etc.) además del nombre cuando resulte conveniente.

Ejemplos:

- DOC-000 — Manual de Ingeniería
- DOC-001 — Documento oficial
- DOC-018 — Documento oficial


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
