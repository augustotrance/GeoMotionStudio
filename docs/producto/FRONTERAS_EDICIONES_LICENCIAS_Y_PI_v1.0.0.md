# GeoMotion Studio

# Fronteras de ediciones, licencias y propiedad intelectual

**Identificador:** `CAND-G4-EDI-LIC-01`  
**Versión:** `1.0.0`  
**Estado:** Aprobado para incorporación — vigencia diferida hasta la publicación material de la Línea base G4 que lo incluya  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G4 — Stakeholders, actores, alcance y capacidades  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G4-GMS-20260904-09`; D-35  
**Línea base de entrada:** `LB-G3-GMS-20260904-01`

---

## 1. Objeto

Precisar las fronteras de alcance ya presentes en la Visión del Producto y confirmar el estado material de la licencia actual, sin inventar un modelo comercial, jurídico o técnico todavía no aprobado.

Este documento no reemplaza `LICENSE`, no modifica derechos concedidos por esa licencia y no decide las condiciones de productos o servicios futuros.

## 2. Normalización nominal

| Forma observada | Denominación utilizada en G4 | Tratamiento |
|---|---|---|
| Edición Open Source; versión libre; Community | Community | Distintas expresiones heredadas para el núcleo abierto |
| Professional; edición profesional; Pro | Pro | `Pro` es la denominación de DOC-001; Professional se conserva solo como referencia heredada |
| AI | GeoMotion AI | Nombre heredado de producto futuro; su capacidad se describe como Inteligencia Artificial (IA), no como rol |

Las denominaciones del ecosistema son Community, Pro, Cloud, GeoMotion AI, Marketplace, Academy y Enterprise.

## 3. Frontera funcional aprobada para incorporación

| Edición o servicio | Propósito delimitado | Capacidades asociadas | Estado en G4 | No implica |
|---|---|---|---|---|
| Community | Núcleo abierto, profesional y utilizable para proyectos reales | Flujo local; Project, Scene, Map, Assets, Objects, Timeline, Render, Export; extensibilidad cuando alcance su puerta | Vigente como dirección de producto; implementación no demostrada | Que todas las capacidades estén disponibles hoy |
| Pro | Productividad avanzada para profesionales y organizaciones | Automatización, exportaciones avanzadas, integraciones especializadas y flujos de producción | Futuro | Retirar o degradar capacidades ya comprometidas para Community |
| Cloud | Servicios remotos complementarios | Sincronización, almacenamiento, colaboración, publicación y procesamiento remoto | Futuro y diferido | Que el núcleo local dependa de servicios remotos |
| GeoMotion AI | Asistencia inteligente controlable | Automatización asistida, contexto, generación y optimización por capacidad | Futuro y diferido | Un rol `AI`, autoridad propia o inclusión en el piloto |
| Marketplace | Distribución y descubrimiento | Plugins, recursos, plantillas, modelos y contenido | Futuro y diferido | Habilitar extensiones antes de contratos, sandbox y permisos |
| Academy | Aprendizaje y material educativo | Documentación, tutoriales, cursos, ejemplos y proyectos de referencia | Complementario y progresivo | Autoridad sobre arquitectura o comportamiento del producto |
| Enterprise | Administración, integración y despliegue organizacional | Gestión centralizada, identidad empresarial, despliegue, soporte e integraciones | Futuro y diferido | Que `Admin` sea hoy un rol vigente |

Todas las ediciones y servicios preservan visión, modelo de proyectos y principios comunes. La forma concreta de compartir código, contratos, datos o servicios requiere decisiones posteriores.

## 4. Regla de no degradación de Community

Se propone consolidar estas reglas ya sostenidas por las fuentes:

1. Community constituye el núcleo abierto del proyecto.
2. Debe permitir proyectos reales y conservar carácter profesional.
3. Pro y los servicios futuros agregan valor; no eliminan libertades ni capacidades ya comprometidas para Community.
4. El primer piloto pertenece enteramente a Community y funciona localmente, sin cuenta obligatoria.
5. La secuencia de implementación no redefine la frontera del producto: una capacidad futura de Community puede estar legítimamente diferida.

## 5. Estado de licencia verificado

| Evidencia | Resultado |
|---|---|
| Archivo raíz `LICENSE` | Licencia MIT, copyright 2026 augustotrance |
| README raíz | Declara distribución de GeoMotion Studio bajo MIT y uso comercial permitido |
| DOC-000 | Declara Community gratuita y de código abierto |
| DOC-001 | Declara Community como núcleo abierto y base del ecosistema |
| Licencia alternativa dentro del corte | No identificada para el repositorio actual |

Por tanto, el material actualmente publicado en el repositorio se distribuye conforme al archivo `LICENSE`, salvo indicación específica válida en contrario. Esta constatación describe el corte actual y no decide licencias de software, servicios, datos o contenidos futuros todavía inexistentes.

## 6. Propiedad intelectual y licencias pendientes

| ID | Decisión pendiente | Momento mínimo | Bloquea el piloto G4 |
|---|---|---|---|
| `PI-G4-01` | Política de marca, nombres e identidad visual | Antes de distribución de marca por terceros | No |
| `PI-G4-02` | Mecanismo de contribución y declaraciones de autoría o procedencia | Antes de aceptar contribuciones externas materiales | No para seleccionar el piloto |
| `PI-G4-03` | Inventario y control de licencias de dependencias | G6–G7, antes de fundación ejecutable aprobada | No en G4 |
| `PI-G4-04` | Fuente cartográfica, datos y condiciones del mapa base | G5–G6, antes de aprobar la SPEC piloto | No en G4; sí antes de G8 |
| `PI-G4-05` | Licencias de assets, tipografías, modelos y contenido premium | Antes de incorporar cada activo o catálogo | No |
| `PI-G4-06` | Régimen de código o servicios futuros fuera del núcleo Community | Antes de materializar Pro, Cloud, AI, Marketplace o Enterprise | No |
| `PI-G4-07` | Términos de servicio, privacidad y tratamiento de datos remotos | Antes de servicios remotos o cuentas | No |
| `PI-G4-08` | Política de publicación y distribución de extensiones de terceros | Antes de Marketplace | No |

La tabla registra ausencias; no completa esas decisiones por inferencia.

## 7. Límites de la aprobación G4

La aprobación de este documento:

- confirmaría MIT para el corte actual, no para materiales futuros no evaluados;
- confirmaría la pertenencia del piloto a Community;
- preservaría las fronteras funcionales como guía de alcance;
- no crearía productos, servicios, planes comerciales ni derechos nuevos;
- no definiría precios, suscripciones o restricciones de uso;
- no elegiría dependencias, mapas base, proveedores o licencias externas;
- no modificaría `LICENSE`, README ni los documentos del Manual; y
- no autorizaría código funcional.

## 8. Condición de vigencia

Este registro fue aprobado para incorporación mediante D-35 y materializado de forma controlada. Solo adquirirá vigencia con la publicación material de la Línea base G4 exacta que lo incluya.
