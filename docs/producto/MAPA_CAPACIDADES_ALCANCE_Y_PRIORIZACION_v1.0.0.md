# GeoMotion Studio

# Mapa de capacidades, alcance y priorización

**Identificador:** `CAND-G4-CAP-ALC-01`  
**Versión:** `1.0.0`  
**Estado:** Aprobado para incorporación — vigencia diferida hasta la publicación material de la Línea base G4 que lo incluya  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G4 — Stakeholders, actores, alcance y capacidades  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G4-GMS-20260904-09`; D-32 a D-34  
**Línea base de entrada:** `LB-G3-GMS-20260904-01`

---

## 1. Objeto

Convertir la visión amplia de GeoMotion Studio en un mapa priorizable de resultados, relacionado con objetivos y módulos vigentes, sin diseñar anticipadamente soluciones de G5 ni funcionalidades futuras.

Una capacidad se identifica por el resultado que ofrece. Su presencia en la visión no significa que esté implementada, preparada o autorizada.

## 2. Clasificación

| Clase | Significado |
|---|---|
| Fundacional | Condición o resultado transversal necesario para sostener múltiples capacidades |
| Core | Parte de la identidad funcional central de GeoMotion Studio |
| Complementaria | Aumenta valor sin ser necesaria para demostrar el núcleo inicial |
| Futura | Reconocida por la visión, pero diferida hasta cumplir sus puertas |
| Experimental | Material exploratorio sin condición de producto vigente |
| Temporal | Resultado con condición explícita de retiro |
| Fuera de alcance | Capacidad que el producto no pretende reproducir íntegramente |

## 3. Catálogo de capacidades

| ID | Resultado ofrecido | Clase | Objetivos principales | Dominio o relación arquitectónica | Horizonte |
|---|---|---|---|---|---|
| `CAP-GMS-0001` | Crear, abrir, guardar, versionar y recuperar proyectos locales | Core | OE-001, OE-002, OE-003 | Project | Piloto |
| `CAP-GMS-0002` | Crear y organizar escenas dentro de un proyecto | Core | OE-001, OE-002 | Scene | Piloto mínimo |
| `CAP-GMS-0003` | Visualizar y navegar un contexto cartográfico bidimensional | Core | OE-001, OE-002, OE-006 | Map | Piloto mínimo |
| `CAP-GMS-0004` | Visualizar territorio y escenas en tres dimensiones | Core | OE-001, OE-002 | Map y Render, sin alterar ownership | Posterior al piloto |
| `CAP-GMS-0005` | Incorporar, organizar y visualizar capas cartográficas | Core | OE-001, OE-005 | Map | Posterior al piloto |
| `CAP-GMS-0006` | Crear, seleccionar, transformar y organizar objetos | Core | OE-001, OE-002 | Objects | Incremento siguiente |
| `CAP-GMS-0007` | Incorporar, administrar y reutilizar recursos | Core | OE-001, OE-005 | Assets | Incremento siguiente |
| `CAP-GMS-0008` | Definir tiempo, tracks, keyframes e interpolaciones | Core | OE-001, OE-002 | Timeline | Posterior |
| `CAP-GMS-0009` | Previsualizar y componer una escena con resultado consistente | Core | OE-001, OE-003 | Render | Posterior |
| `CAP-GMS-0010` | Generar y exportar resultados reproducibles | Core | OE-001, OE-005 | Export | Posterior |
| `CAP-GMS-0011` | Ofrecer un espacio de trabajo coherente, adaptable y accesible | Fundacional | OE-002, OE-003, OE-006 | UI, layouts, Settings y sistema de diseño | Transversal |
| `CAP-GMS-0012` | Intercambiar proyectos, datos y resultados mediante formatos abiertos | Fundacional | OE-005, OE-007 | Contratos de los dominios propietarios | Incremental |
| `CAP-GMS-0013` | Preservar identidad, versión, compatibilidad y recuperación del Project Document | Fundacional | OE-004, OE-005 | Project y gestión de versiones | Piloto mínimo |
| `CAP-GMS-0014` | Ampliar el producto mediante contratos y puntos de extensión | Futura | OE-004, OE-005, OE-007 | Plugins y DOC-013 | Tras estabilidad del núcleo |
| `CAP-GMS-0015` | Colaborar entre personas sobre proyectos compartidos | Futura | OE-001, OE-007 | Arquitectura pendiente | Tras modelo local e identidad |
| `CAP-GMS-0016` | Sincronizar, almacenar, publicar o procesar proyectos remotamente | Futura | OE-001, OE-004 | GeoMotion Cloud; arquitectura pendiente | Tras modelo local y seguridad |
| `CAP-GMS-0017` | Asistir al proceso creativo mediante capacidades de IA controlables | Futura | OE-002, OE-003, OE-004 | DOC-016; contratos por capacidad | Tras acciones, permisos y evaluación |
| `CAP-GMS-0018` | Distribuir y descubrir extensiones, recursos y contenido | Futura | OE-005, OE-007 | Marketplace; arquitectura pendiente | Tras extensibilidad segura |
| `CAP-GMS-0019` | Facilitar aprendizaje mediante documentación y material educativo | Complementaria | OE-006, OE-007 | Academy y documentación | Progresiva |
| `CAP-GMS-0020` | Administrar, integrar y desplegar el producto en organizaciones | Futura | OE-004, OE-005 | Enterprise; arquitectura pendiente | Tras identidad, seguridad y operación |
| `CAP-GMS-0021` | Aumentar productividad profesional con automatización, exportaciones e integraciones avanzadas | Complementaria futura | OE-001, OE-003, OE-005 | Pro; contratos por capacidad | Después del núcleo utilizable |

La tabla no concede ownership a un módulo nuevo. Cuando la arquitectura vigente no resuelve una relación, se declara pendiente para G5 o para la etapa futura correspondiente.

## 4. Alcance del primer incremento

### Incluido

| Capacidad | Porción incluida |
|---|---|
| `CAP-GMS-0001` | Crear, guardar, cerrar y reabrir un proyecto local |
| `CAP-GMS-0002` | Crear y restaurar una escena inicial |
| `CAP-GMS-0003` | Mostrar y modificar una vista cartográfica base 2D |
| `CAP-GMS-0011` | Flujo coherente y comprensible; métricas posteriores en G6 |
| `CAP-GMS-0013` | Identidad y versión de formato suficientes para persistencia y recuperación |

### Expresamente excluido

- cuentas, autenticación y roles;
- sincronización remota, Cloud y colaboración;
- objetos y recursos incorporados por el usuario;
- Timeline, animación, render final y exportación;
- plugins, APIs públicas y Marketplace;
- capacidades de IA;
- administración Enterprise;
- operación o trazas distribuidas.

### Fuera de alcance permanente según DOC-001

- modelado tridimensional de propósito general;
- escultura digital;
- edición fotográfica profesional;
- edición completa de vídeo no lineal;
- diseño CAD;
- desarrollo de videojuegos;
- motores físicos avanzados;
- análisis científico GIS especializado;
- procesamiento geoespacial masivo; y
- sistemas BIM completos.

La interoperabilidad podrá relacionar herramientas especializadas sin incorporar íntegramente sus responsabilidades.

## 5. Estado experimental y temporal

`apps/web` es un spike histórico reemplazable. Constituye material experimental y no demuestra ninguna capacidad del catálogo. G4 no lo valida, modifica ni adopta como implementación.

No se identificó una capacidad temporal que deba aprobarse en este corte. Si aparece, deberá declarar evento de retiro y tratamiento de consumidores.

## 6. Criterios de priorización

Cada resultado se ordena considerando:

1. valor observable para un usuario identificado;
2. contribución a la identidad y objetivos del producto;
3. reducción de incertidumbre estructural;
4. reutilización de arquitectura ya aprobada;
5. alcance verificable y reversible;
6. dependencias y coste de mantenimiento;
7. preservación de capacidades futuras sin diseñarlas antes de tiempo.

La priorización no se realiza por visibilidad, cantidad de componentes ni novedad tecnológica.

## 7. Secuencia priorizada de resultados

| Prioridad | Resultado | Fundamento |
|---:|---|---|
| 1 | Crear, guardar y reabrir un proyecto local con una escena y una vista cartográfica base 2D | Primer valor vertical; conecta Project, Scene y Map sin servicios remotos |
| 2 | Incorporar y persistir un objeto o recurso | Demuestra Assets/Objects y amplía un proyecto ya recuperable |
| 3 | Editar y persistir propiedades | Demuestra interacción y estado sin abrir todavía tiempo o exportación |
| 4 | Introducir Timeline y un keyframe | Añade el dominio temporal sobre entidades estables |
| 5 | Reproducir una animación | Demuestra coordinación temporal y visual |
| 6 | Generar una salida mínima | Incorpora Render/Export sobre comportamiento ya verificable |
| 7 | Validar un punto de extensión | Solo después de estabilizar núcleo y contratos |
| 8 | Incorporar identidad remota y colaboración | Solo después de modelo local, seguridad y conflictos |
| 9 | Diseñar operación distribuida | Solo ante servicios reales y SLO definidos |
| 10 | Incorporar una capacidad de IA | Solo con acciones, permisos, contexto, evaluación y reversión |

## 8. Relación del piloto con los objetivos

| Objetivo | Contribución del piloto |
|---|---|
| OE-001 | Demuestra un flujo continuo entre Project, Scene y Map |
| OE-002 | Reduce el inicio y la continuidad del trabajo a un recorrido acotado |
| OE-003 | Permite evaluar claridad, estado y recuperación desde el primer resultado |
| OE-004 | Obliga a validar fronteras y contratos mínimos antes de escalar |
| OE-005 | Introduce formato versionado y deja abierta la sustitución de adaptadores |
| OE-006 | Mantiene un flujo local, sin cuenta y perteneciente al núcleo Community |
| OE-007 | Produce una base documentable y verificable para futuras contribuciones |

## 9. Decisiones diferidas

G4 no decide:

- motor o adaptador cartográfico;
- formato persistente exacto;
- mecanismo de almacenamiento local;
- proveedor o licencia del mapa base;
- comportamiento offline detallado;
- navegadores y dispositivos soportados;
- umbrales de rendimiento y accesibilidad;
- taxonomía final de errores; ni
- contratos y estados de dominio implementables.

Estas decisiones se resolverán en G5 y G6 antes de redactar la SPEC piloto en G8. La selección del resultado no las presupone.

## 10. Condición de vigencia

Este mapa fue aprobado para incorporación mediante D-32 a D-34 y materializado de forma controlada. Solo adquirirá vigencia con la publicación material de la Línea base G4 exacta que lo incluya.
