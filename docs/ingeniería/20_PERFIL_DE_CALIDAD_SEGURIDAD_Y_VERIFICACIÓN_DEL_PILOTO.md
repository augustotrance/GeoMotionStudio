# GeoMotion Studio

# 20 · PERFIL DE CALIDAD, SEGURIDAD Y VERIFICACIÓN DEL PILOTO

**Código:** `DOC-020`  
**Versión:** `1.0.0`  
**Estado:** Vigente — publicación material de `LB-G6-GMS-20260908-01` verificada  
**Fecha:** 8 de septiembre de 2026  
**Clasificación:** Manual de Ingeniería  
**Etapa:** G6 — Perfil de calidad, seguridad y verificación  
**Iniciativa:** `INI-GMS-0001`  
**Línea base de entrada:** `LB-G5-GMS-20260907-01`  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G6-GMS-20260908-13`; D-49 a D-60  
**Línea base prevista:** `LB-G6-GMS-20260908-01`

---

## 1. Propósito

Convertir los atributos no funcionales aplicables a `INI-GMS-0001` en condiciones verificables antes de seleccionar y materializar la fundación ejecutable de G7.

El documento consolida en una sola fuente institucional los ocho entregables de G6:

1. perfil de calidad;
2. matriz RNF–métrica–método–umbral;
3. estrategia de pruebas;
4. perfil de seguridad;
5. modelo de amenazas inicial;
6. política de observabilidad;
7. inventario y política de dependencias; y
8. matriz de compatibilidad.

No es una SPEC, no contiene criterios funcionales binarios del incremento, no selecciona la fundación ejecutable, no adopta `apps/web` y no autoriza código funcional.

## 2. Fuentes y precedencia

Este perfil especializa, sin sustituirlas, las fuentes institucionales aprobadas y vigentes:

- DOC-001 · Visión del Producto, RNF-001 a RNF-027;
- DOC-002 · Arquitectura;
- DOC-003 · Sistema de Diseño;
- DOC-004 · Pila Tecnológica;
- DOC-006 · Constitución del Proyecto;
- DOC-009 · Responsive;
- DOC-012 · Arquitectura Cartográfica;
- DOC-017 · Autenticación y Seguridad;
- DOC-018 · Gestión de Versiones;
- DOC-019 · Arquitectura y dominio mínimos del piloto;
- ADR-016, ADR-019 a ADR-021, ADR-027 y ADR-041 a ADR-045;
- `INI-GMS-0001`;
- `MOD-SDD-GMS-001`; y
- el Itinerario Maestro SDD v1.0.0.

Como referencias técnicas externas se fijan:

- W3C Web Content Accessibility Guidelines 2.2, Recommendation, para la conformidad de accesibilidad;
- OWASP Application Security Verification Standard 5.0.0, controles de Nivel 1 que resulten aplicables al piloto;
- OWASP Threat Modeling, como guía de estructuración del modelo proporcional;
- Core Web Vitals, para LCP, INP y CLS; y
- SPDX License List, para identificar licencias mediante expresiones normalizadas.

Las referencias externas aportan métodos y vocabulario. No desplazan la autoridad de los documentos institucionales ni incorporan automáticamente todos sus controles.

## 3. Alcance y límites de G6

### 3.1 Incluido

- recorrido local de crear, navegar, guardar, cerrar, seleccionar, reabrir y restaurar;
- Project, Scene, Map View, Project Document y recurso cartográfico mínimo;
- navegadores, sistemas operativos, dispositivos y datos de prueba;
- rendimiento, usabilidad, accesibilidad, compatibilidad, mantenibilidad, seguridad, fiabilidad, internacionalización y observabilidad;
- seguridad local y de la cadena de dependencias;
- evidencia requerida para G7, G8 y G9; y
- fuente y condiciones del mapa base local.

### 3.2 Excluido

- cuentas, autenticación remota, organizaciones y roles de producto;
- servicios Cloud, colaboración, sincronización y publicación externa;
- telemetría remota, trazas distribuidas y respuesta a incidentes Cloud;
- 3D, capas de usuario, Assets, Objects, Timeline, Export, plugins e IA;
- elección de framework, motor cartográfico, backend de almacenamiento, lenguaje de schema, generador de identificadores, proyección interna o mensajería concreta;
- una SPEC concreta; y
- cualquier código funcional.

`Admin`, `AI` y `Usuario` continúan siendo hipótesis futuras y no constituyen roles vigentes. La persona que realiza el recorrido se modela únicamente como actor primario local.

## 4. Regla de aceptación y evidencia

### 4.1 Autoridad

Para todos los atributos de este documento:

- **Verificación** produce evidencia reproducible y declara conformidad técnica o hallazgos;
- **Dirección Técnica** integra la evidencia, controla trazabilidad y recomienda apertura o devolución de puerta; y
- **Founder** es la única autoridad de aceptación institucional.

Una herramienta, porcentaje, auditoría automática o agente no acepta una condición por sí mismo.

### 4.2 Protocolo común

Salvo que una fila indique otra cosa:

1. las mediciones se ejecutan sobre un commit y una configuración identificados;
2. se registra navegador, versión, sistema, dispositivo, fixture, herramienta y temperatura de caché;
3. las mediciones de tiempo usan al menos 20 repeticiones; persistencia y recuperación usan las repeticiones específicas de §8;
4. los percentiles se calculan sobre la serie completa sin eliminar resultados adversos;
5. el recorrido obligatorio se ejecuta con toda salida de red externa bloqueada;
6. una falla de umbral aplicable impide declarar conforme la evidencia; y
7. una excepción requiere riesgo, alcance, compensación, vencimiento y aprobación expresa del Founder.

### 4.3 Severidad de hallazgos

| Nivel | Definición en el piloto | Efecto |
|---|---|---|
| Bloqueante | Pérdida o sustitución del último documento confirmado; ejecución de contenido no confiable; dependencia remota obligatoria; incumplimiento A/AA en el recorrido; umbral de puerta ausente | Impide cerrar la puerta |
| Alta | Recorrido principal incompleto en un entorno de conformidad; fallo no recuperable; vulnerabilidad alta alcanzable; fuga de dato confidencial o sensible | Impide aceptación salvo excepción Founder explícita |
| Media | Degradación controlada, inconsistencia secundaria o deuda con mitigación verificable | Puede registrarse con etapa y vencimiento |
| Baja | Mejora sin impacto sobre resultado, integridad, acceso o comprensión | No bloquea; se prioriza por valor |

## 5. Matriz de compatibilidad

### 5.1 Política de versiones

La compatibilidad se define por canal estable, no por un número que quede obsoleto antes de G8:

- navegador principal: versión estable vigente y versión estable inmediatamente anterior;
- Safari: versión estable vigente y anterior disponibles en las versiones de macOS soportadas;
- sistema operativo: edición todavía soportada por su proveedor en la fecha del corte verificable; y
- el Context Package de G8 congelará los números exactos probados, las herramientas y la fecha.

Una nueva versión estable no altera retroactivamente una evidencia cerrada. Sí obliga a evaluar compatibilidad antes de la siguiente línea base que declare soporte.

### 5.2 Entornos de conformidad

| ID | Sistema | Navegador | Arquitectura | Alcance obligatorio |
|---|---|---|---|---|
| `ENV-G6-01` | Windows 11 soportado | Chromium estable vigente | x86-64 | Recorrido completo, accesibilidad, rendimiento y seguridad |
| `ENV-G6-02` | Windows 11 soportado | Firefox estable vigente | x86-64 | Recorrido completo y compatibilidad |
| `ENV-G6-03` | macOS vigente o inmediatamente anterior | Safari estable correspondiente | Apple silicon o x86-64 soportado | Recorrido completo, accesibilidad y compatibilidad |
| `ENV-G6-04` | Ubuntu LTS vigente | Firefox estable vigente | x86-64 | Recorrido completo y compatibilidad |
| `ENV-G6-05` | Sistemas anteriores de la tabla | Versión estable inmediatamente anterior del navegador aplicable | Según entorno | Smoke del recorrido, persistencia y ausencia de pérdida |

Chrome y Edge se consideran implementaciones Chromium diferenciadas cuando ambos se declaren soportados en G7. En ese caso, el recorrido completo se verifica en uno y un smoke de compatibilidad en el otro; no se presume equivalencia por compartir motor.

### 5.3 Perfiles de dispositivo y viewport

| ID | Perfil | Capacidad de referencia | Viewport CSS | Entrada | Uso |
|---|---|---|---|---|---|
| `DEV-G6-01` | Escritorio de referencia | ≥4 núcleos lógicos, ≥8 GiB RAM | 1440×900, DPR 1 | Teclado y puntero fino | Todos los umbrales |
| `DEV-G6-02` | Escritorio mínimo | 4 núcleos lógicos, 8 GiB RAM | 1280×720, DPR 1 | Teclado y puntero fino | Recorrido completo y presupuestos mínimos |
| `DEV-G6-03` | Tablet | Dispositivo o emulación representativa | 1024×768, DPR 2 | Táctil; teclado si existe | Reflow, legibilidad y smoke; no exige paridad de autoría |
| `DEV-G6-04` | Móvil estrecho | Dispositivo o emulación representativa | 390×844, DPR 3 | Táctil | Reflow, legibilidad y ausencia de bloqueo; no exige paridad de autoría |

Los perfiles tablet y móvil prueban la promesa responsive sin ampliar el resultado del piloto a edición móvil completa. Cualquier operación no ofrecida en esos perfiles debe indicarlo de forma comprensible y no causar pérdida de datos.

### 5.4 Datos de prueba controlados

| ID | Fixture | Contenido y propósito |
|---|---|---|
| `DAT-G6-00` | Estado limpio | Almacenamiento vacío, caché limpia, red externa bloqueada |
| `DAT-G6-01` | Proyecto nominal | Un Project, una Scene, una Map View 2D, coordenadas válidas, zoom ordinario y mapa local |
| `DAT-G6-02` | Texto internacional | Nombres con español, caracteres combinados, escritura RTL y CJK; verifica tratamiento Unicode sin imponer aún contenido de producto adicional |
| `DAT-G6-03` | Límites cartográficos | Longitud −180/180, latitud −90/90 y límites de zoom que fije G7 conforme al recurso |
| `DAT-G6-04` | Documento no confiable | Truncado, campos ausentes, referencias rotas, versión no soportada, valores no finitos, contenido inesperado y envelope superior a 2 MiB |
| `DAT-G6-05` | Fallas de persistencia | Permiso denegado, cuota insuficiente, escritura interrumpida, confirmación fallida y lectura fallida |
| `DAT-G6-06` | Recuperación | Último documento confirmado más intento posterior inválido o incompleto |
| `DAT-G6-07` | Localización | `es-AR`, `en-US` y pseudolocalización expansiva/RTL; los datos persistentes permanecen neutrales al locale |

Cada fixture debe ser determinista, versionado, libre de secretos y reproducible. G7 decidirá su codificación física; G6 fija su semántica.

## 6. Presupuestos de rendimiento y usabilidad

| ID | Condición | Entorno y método | Umbral |
|---|---|---|---|
| `PERF-G6-01` | Presentación principal | `ENV-G6-01`, 20 cargas frías, LCP | p75 ≤ 2.500 ms |
| `PERF-G6-02` | Respuesta de interacción | `ENV-G6-01`, recorrido completo, INP | p75 ≤ 200 ms |
| `PERF-G6-03` | Estabilidad visual | `ENV-G6-01`, recorrido completo, CLS | p75 ≤ 0,10 |
| `PERF-G6-04` | Aplicación lista | 20 cargas frías; marca definida por G7 y trazada al estado interactivo | p95 ≤ 3 s en `DEV-G6-01`; ≤ 5 s en `DEV-G6-02` |
| `PERF-G6-05` | Acuse visible de comando ordinario | 100 interacciones instrumentadas | p95 ≤ 100 ms; operaciones más largas muestran progreso en ≤ 100 ms |
| `PERF-G6-06` | Navegación de mapa | Cinco sesiones de 10 s de pan/zoom con `DAT-G6-01` | ≥50 fps en al menos 95 % de las muestras; ninguna congelación ≥500 ms |
| `PERF-G6-07` | Guardado nominal | 30 guardados de `DAT-G6-01` | p95 ≤ 1 s desde confirmación hasta resultado tipado |
| `PERF-G6-08` | Reapertura y restauración | 30 reaperturas de `DAT-G6-01` | p95 ≤ 2 s desde selección hasta estado restaurado y reconocible |
| `PERF-G6-09` | Recurso cartográfico local | Artefacto distribuible derivado de ADR-047 | ≤1 MiB comprimido y ≤5 MiB decodificado para las capas obligatorias |
| `UX-G6-01` | Aprendizaje inicial | Cinco participantes representativos, sin instrucción previa, guion ciego | ≥4 de 5 completan el recorrido sin intervención; 5 de 5 con como máximo una pista no resolutiva; mediana ≤8 min |
| `UX-G6-02` | Economía del recorrido nominal | Conteo de comandos y confirmaciones del producto | ≤7 acciones primarias, excluidos gestos de navegación y la interacción propia del selector del sistema |

Los Core Web Vitals se usan como límites de experiencia web. Los tiempos de guardado, reapertura y mapa son presupuestos institucionales específicos del piloto.

## 7. Accesibilidad e internacionalización

### 7.1 Objetivo de accesibilidad

El recorrido obligatorio de `INI-GMS-0001` deberá cumplir WCAG 2.2 Nivel AA en todos los criterios aplicables. ADR-046 registra esta decisión.

Condiciones mínimas:

- recorrido completo operable mediante teclado, sin trampa y con orden de foco coherente;
- foco visible y no oculto por contenido creado por la aplicación;
- nombres, roles, estados e instrucciones determinables;
- errores identificados en texto y asociados al control o acción correspondiente;
- contraste mínimo WCAG AA y ausencia de dependencia exclusiva del color;
- ampliación al 200 % y reflow equivalente a 320 CSS px sin pérdida de información o función aplicable;
- objetivo de puntero mínimo de 24×24 CSS px o excepción WCAG documentada;
- alternativa de puntero simple y teclado para toda operación de arrastre no esencial; y
- controles no gestuales para navegar la vista cartográfica, además de una representación textual del centro y zoom actuales.

La verificación combina auditoría automática y revisión manual. Cero fallas automáticas no equivale por sí solo a conformidad.

### 7.2 Internacionalización

Para el piloto:

1. el idioma inicial de producto puede ser español, pero el texto visible debe residir en recursos sustituibles y no mezclarse con lógica;
2. los identificadores, números persistidos y claves de documento son neutrales al locale;
3. la presentación de números y fechas usa servicios de internacionalización del entorno, no concatenaciones ad hoc;
4. `es-AR`, `en-US` y pseudolocalización deben ejercitarse antes de G9;
5. RTL no exige una traducción completa, pero debe revelar dependencias indebidas de dirección; y
6. la localización no puede alterar coordenadas, IDs ni round-trip del Project Document.

Umbrales: 100 % de cadenas de producto externalizadas; cero cambios de valor persistente entre locales; cero desbordamientos que oculten una acción primaria en `DAT-G6-07`.

## 8. Fiabilidad, integridad y recuperación

| ID | Garantía | Método | Umbral |
|---|---|---|---|
| `REL-G6-01` | Round-trip lógico | Guardar, cerrar y reabrir `DAT-G6-01/02/03`; comparar snapshot canónico | 100 de 100 ciclos equivalentes, incluidos IDs y estado de mapa |
| `REL-G6-02` | Estabilidad del recorrido | Ejecutar el recorrido completo de extremo a extremo | 50 de 50 ejecuciones sin excepción no controlada, freeze ni estado imposible |
| `REL-G6-03` | Conservación del último confirmado | Inyectar cada falla de `DAT-G6-05` antes, durante y después de escribir | 50 de 50 fallas preservan el último documento confirmado; RPO = 0 guardados confirmados |
| `REL-G6-04` | Rechazo seguro | Abrir cada variante de `DAT-G6-04` diez veces | 0 documentos inválidos activados; 100 % produce resultado tipado y comprensible |
| `REL-G6-05` | Recuperación | Usar `DAT-G6-06` después de una interrupción simulada | Último corte válido ofrecido o accesible en ≤2 s; nunca se presenta un corte parcial como guardado |
| `REL-G6-06` | Idempotencia de lectura | Reabrir repetidamente el mismo documento sin modificación | 30 de 30 lecturas producen snapshot equivalente y no escriben datos |

G6 exige las garantías; `TECH-G5-003` y `TECH-G5-005` permanecen en G7 para elegir y probar el backend y el mecanismo material. La recuperación automática no puede reemplazar silenciosamente el documento confirmado ni ocultar su procedencia `RECOVERED`.

## 9. Perfil de seguridad

### 9.1 Postura proporcional

El piloto es local, sin cuenta, servicio remoto ni secreto requerido para su recorrido. El perfil usa controles OWASP ASVS 5.0.0 Nivel 1 únicamente cuando son aplicables a sus superficies: validación y codificación, lógica de negocio, archivos y recursos, configuración, protección de datos y cadena de dependencias. No declara certificación ASVS integral.

Principios obligatorios:

- tratar Project Document y datos cartográficos como entradas no confiables;
- validar el documento completo antes de activar estado;
- representar texto como datos, sin evaluación de HTML, script, URL ejecutable o comando;
- mínimo privilegio y denegación segura ante capacidades desconocidas;
- ninguna salida de red obligatoria en el recorrido;
- ninguna credencial en cliente, Project Document, recurso cartográfico, log o repositorio;
- conservar el último documento confirmado ante falla; y
- mantener inventario, procedencia, versión, licencia e integridad de toda dependencia.

### 9.2 Clasificación de datos del piloto

| Clase | Ejemplos | Tratamiento mínimo |
|---|---|---|
| Pública | Código y documentación publicados; mapa base distribuible; atribución y licencia | Integridad y procedencia; puede distribuirse |
| Interna | Fixtures sintéticos; resultados técnicos no sensibles; inventario de dependencias | Acceso del proyecto; no exponer innecesariamente en producto |
| Confidencial por defecto | Nombre y contenido del Project Document de una persona | Local, minimizado, no registrado ni transmitido; exposición solo por acción explícita |
| Sensible | Rutas locales, datos del entorno, diagnósticos detallados, volcados y contenido recuperado | Redacción estricta, acceso temporal y eliminación controlada |
| Secreto | Tokens, claves, credenciales o materiales equivalentes si una herramienta futura los necesitara | Fuera del repositorio y cliente; mecanismo seguro del entorno; rotación y revocación |

No existe secreto necesario para ejecutar el recorrido base. Introducir uno requiere decisión posterior y no puede degradar el modo local.

### 9.3 Política de secretos

Queda prohibido:

- incluir secretos reales en código, historial Git, fixtures, Project Document, nombres, URL, capturas o logs;
- usar un valor por defecto funcional como credencial;
- exponer secretos a código de interfaz; y
- copiar un secreto a un informe o evidencia.

G7 deberá habilitar detección automática de secretos en los cambios y usar variables o almacén seguro solo para herramientas que realmente lo requieran. Un hallazgo verificado bloquea la publicación hasta retirada, revocación y evaluación del historial afectado.

### 9.4 Modelo inicial de amenazas

| ID | Amenaza y activo | Vector | Control requerido | Evidencia y etapa |
|---|---|---|---|---|
| `THR-G6-01` | Activación de Project Document manipulado | Campos, tipos, referencias o versión inválidos | Validación integral, límites y activación posterior al éxito | Pruebas de contrato y seguridad G7–G8 |
| `THR-G6-02` | Agotamiento de recursos | Documento >2 MiB, profundidad o colecciones inesperadas | Preflight de tamaño; schema cerrado para el piloto; rechazo acotado | `DAT-G6-04`; rechazo ≤1 s en perfil mínimo |
| `THR-G6-03` | Inyección mediante texto persistido | Nombre o campo mostrado como markup/código | Codificación contextual; APIs de texto; prohibición de evaluación | Corpus de payloads; cero ejecución G7–G8 |
| `THR-G6-04` | Pérdida o corrupción del último guardado | Interrupción, cuota, permiso o confirmación falsa | Confirmación verificable, atomicidad y recuperación | `REL-G6-03/05`; materialización G7 |
| `THR-G6-05` | Fuga de información local | Logs, errores, rutas, stacks o documento completo | Allowlist de campos, redacción y mensajes seguros | Auditoría de observabilidad; cero campos prohibidos |
| `THR-G6-06` | Dependencia remota encubierta | Teselas, fuentes, analítica, CDN o comprobaciones en runtime | Egress bloqueado y recurso local empaquetado | Recorrido completo con red bloqueada; cero requests externas |
| `THR-G6-07` | Compromiso de dependencia | Paquete vulnerable, transitoria no inventariada o licencia desconocida | Lock, inventario, revisión, análisis y sustitución | Política de §12; G7 |
| `THR-G6-08` | Alteración del mapa base | Artefacto sustituido o transformación irreproducible | Hash, procedencia, versiones de capa y receta reproducible | ADR-047; manifiesto G7 |
| `THR-G6-09` | Permiso local denegado | Selector, storage o filesystem no disponible | Error tipado, sin cambio de estado ni pérdida; alternativa permitida | `DAT-G6-05`; pruebas de contrato G7–G8 |

El modelo se revisa si cambia la frontera de confianza. Cuentas, red, Cloud, extensiones o IA requieren modelos sucesores y no se presuponen aquí.

## 10. Observabilidad local

### 10.1 Eventos mínimos

| Grupo | Eventos requeridos |
|---|---|
| Project | `PROJECT_CREATED`, `PROJECT_CLOSE_REQUESTED`, `PROJECT_CLOSED` |
| Persistencia | `SAVE_STARTED`, `SAVE_SUCCEEDED`, `SAVE_FAILED`, `OPEN_STARTED`, `OPEN_SUCCEEDED`, `OPEN_FAILED` |
| Validación y recuperación | `DOCUMENT_REJECTED`, `RECOVERY_OFFERED`, `RECOVERY_USED`, `RECOVERY_FAILED` |
| Map | `BASEMAP_RESOLVED`, `BASEMAP_FAILED`, `MAP_VIEW_RESTORED` |
| Plataforma | `ACTION_DENIED`, `UNHANDLED_INTERNAL_ERROR` |

Campos permitidos y obligatorios cuando apliquen:

- `eventId`;
- fecha y hora UTC;
- `correlationId` del recorrido;
- tipo de evento;
- componente emisor;
- resultado;
- código estable de error;
- duración en milisegundos;
- versión del build/commit; y
- identificadores de entorno y fixture de prueba.

Campos prohibidos por defecto:

- nombre o contenido del Project/Scene;
- Project Document completo o fragmentos;
- coordenadas exactas de la persona;
- rutas locales;
- tokens, claves o cabeceras;
- contenido del portapapeles;
- stack trace en logs persistentes o visibles al actor; y
- identificadores de dispositivo o cuenta inexistente.

El stack puede existir de forma efímera en una sesión de diagnóstico explícita, con acceso controlado y redacción. No se transmite remotamente. G7 seleccionará el mecanismo local y su retención; G6 fija el contrato observable.

### 10.2 Umbrales de observabilidad

- 100 % de los eventos obligatorios emitidos una vez por transición correspondiente;
- 100 % con campos requeridos válidos;
- 0 campos prohibidos en 50 recorridos y todas las fallas inyectadas;
- cada error de `DAT-G6-04/05/06` correlacionable desde acción hasta resultado; y
- 0 solicitudes de telemetría remota.

Las trazas distribuidas, agregación Cloud, alertas operativas remotas y respuesta a incidentes Cloud se difieren hasta que exista ese contexto.

## 11. Estrategia de pruebas por riesgo

### 11.1 Niveles obligatorios

| Nivel | Finalidad en el piloto | Mínimo de aceptación |
|---|---|---|
| Unitaria | Invariantes, validadores, transiciones y transformaciones puras | Todos los estados válidos, límites y errores definidos ejercitados |
| Integración | Orquestación Project–Scene–Map y adaptadores | Recorrido nominal y fallas de cada puerto sin internals cruzados |
| Contrato | `CTR-GMS-*`, Project Document, mapa y persistencia | Cada resultado exitoso y cada clase de error tipada |
| Aceptación | Resultado observable de `INI-GMS-0001` | Recorrido completo en todos los entornos de conformidad |
| Accesibilidad | Operabilidad y percepción WCAG 2.2 AA | Cero incumplimientos A/AA aplicables |
| Rendimiento | Presupuestos de §6 | Todos los umbrales aplicables conformes |
| Seguridad | Amenazas, entradas y dependencias | Cero hallazgos bloqueantes o altos sin excepción vigente |

### 11.2 Cobertura por riesgo

No se usa un porcentaje global de líneas como sustituto de confianza.

| Riesgo | Elementos | Cobertura obligatoria |
|---|---|---|
| `R1` crítico | Persistencia, integridad, validación, recuperación, offline, secretos | Unitarias + contrato + integración + aceptación + inyección de fallas; todas las ramas de resultado |
| `R2` alto | Restauración de Map View, compatibilidad, accesibilidad, seguridad de presentación | Contrato/integración + aceptación en matriz + revisión manual cuando aplique |
| `R3` medio | Consistencia visual, i18n, diagnósticos, rendimiento secundario | Unitarias o visuales + integración/aceptación dirigida |
| `R4` bajo | Detalle cosmético sin impacto de tarea | Evidencia proporcional y revisión |

Todo riesgo `R1/R2`, invariante `INV-G5-*`, contrato `CTR-GMS-*`, amenaza `THR-G6-*` y RNF aplicable debe trazar al menos a una prueba identificada. Un porcentaje de cobertura puede reportarse como diagnóstico, pero no reemplaza esa matriz.

### 11.3 Evidencia reproducible

Cada ejecución de puerta debe registrar:

- ID de prueba y requisito/riesgo/control trazado;
- commit y configuración exactos;
- entorno, navegador, dispositivo y fixture;
- herramienta y versión;
- pasos o comando reproducible;
- resultado esperado y observado;
- medición cruda cuando exista umbral; y
- responsable de verificación, fecha y dictamen técnico.

El Founder conserva la aceptación institucional aun cuando toda evidencia técnica sea conforme.

## 12. Dependencias, licencias y sustitución

### 12.1 Admisión

Ninguna dependencia de software o datos se adopta por estar presente en un spike, lockfile o ejemplo. Antes de incorporarla a la fundación, G7 debe registrar:

- nombre, propósito y owner;
- clase: runtime, build, prueba, desarrollo o datos;
- versión exacta y rango solicitado;
- origen y hash/integridad;
- dependencias transitivas;
- licencia mediante identificador o expresión SPDX, o texto íntegro si no existe;
- estado de mantenimiento y compatibilidad;
- vulnerabilidades conocidas y alcanzabilidad;
- alternativa nativa o candidata de sustitución;
- impacto de retiro; y
- decisión/autoridad de admisión.

El gestor, el lockfile y el formato de inventario legible por máquina se decidirán en G7. El inventario debe ser reproducible desde el corte publicado.

### 12.2 Umbrales

- 100 % de dependencias directas y transitivas inventariadas;
- 100 % con procedencia, versión, integridad y licencia conocidas;
- 0 dependencias sin licencia o con términos incompatibles no resueltos;
- 0 vulnerabilidades críticas o altas conocidas y alcanzables sin excepción Founder vigente;
- 0 rangos flotantes en el artefacto reproducible de línea base;
- cada dependencia runtime con frontera y sustituto o estrategia de retiro; y
- revisión antes de cada línea base y, una vez iniciado el desarrollo ejecutable, al menos mensual.

Las licencias permisivas o de dominio público no se aprueban automáticamente: deben conservar avisos y obligaciones. Licencias copyleft, no estándar, duales o desconocidas requieren revisión explícita antes de adopción. SPDX identifica; no sustituye evaluación jurídica cuando exista duda.

### 12.3 Inventario inicial

| Elemento | Clase | Estado G6 | Tratamiento |
|---|---|---|---|
| Natural Earth 1:110m — Land 4.0.0, Ocean 4.0.0 y Coastline 4.1.0 | Datos runtime locales | Vigente por ADR-047 y G6; incorporación material G7 autorizada por D-67 | Dominio público; el corte candidato G7 fija fuentes, hashes, receta y artefacto derivado |
| Dependencias del antiguo `apps/web` | Spike histórico reemplazado | No adoptadas ni trasladadas | Recuperables solo mediante la historia Git de G6 |
| Dependencias de la fundación G7 | Software | Aprobadas para incorporación por D-64 a D-71 | Versiones exactas, lockfile único, licencias, SBOM, audit y sustitución controlada |

La presencia histórica de React, React DOM, TypeScript, Vite, Oxlint y paquetes asociados no los convierte en decisiones institucionales ni autoriza ejecutar o modificar `apps/web`.

## 13. Matriz RNF–métrica–método–umbral

La autoridad de aceptación de todas las filas es el Founder; Verificación produce la evidencia y Dirección Técnica emite la recomendación.

| RNF | Métrica | Entorno/datos | Método | Umbral aplicable al piloto |
|---|---|---|---|---|
| `RNF-001` | Respuesta y continuidad visual | `ENV-01`, `DEV-01/02`, `DAT-01` | INP, acuse y sesiones de interacción | INP p75 ≤200 ms; acuse p95 ≤100 ms; ninguna congelación ≥500 ms |
| `RNF-002` | Cadencia estable de mapa | `ENV-01`, `DEV-01/02`, `DAT-01` | Captura de frames en pan/zoom | ≥50 fps en 95 % de muestras; artefacto base dentro de `PERF-G6-09` |
| `RNF-003` | Degradación dentro del envelope | `DAT-01` frente a `DAT-02/03` | Comparar p95 de respuesta, guardado y apertura | Umbrales absolutos se mantienen y degradación ≤50 % frente al nominal |
| `RNF-004` | Aprendizaje del recorrido | Cinco participantes del perfil primario | Prueba moderada con guion ciego | `UX-G6-01` conforme |
| `RNF-005` | Consistencia de nombres, estados y controles | Todos los entornos, recorrido completo | Auditoría contra DOC-003 y comparación transversal | 0 contradicciones o variantes no justificadas en acciones primarias |
| `RNF-006` | Acciones del recorrido | `DAT-01` | Conteo observable | `UX-G6-02` conforme; 0 confirmaciones duplicadas sin función de seguridad |
| `RNF-007` | Conformidad inclusiva | `DEV-01/02/03/04` | Auditoría automática y manual WCAG | 0 fallas A/AA aplicables al recorrido |
| `RNF-008` | Operabilidad previsible | Recorrido completo con teclado y puntero | Inspección de foco, orden, gestos y alternativas | 100 % operable por teclado en escritorio; 0 trampas; alternativa a arrastre |
| `RNF-009` | Legibilidad y reflow | Viewports de §5.3 y 200 % zoom | Contraste, inspección visual y reflow | Contraste AA; 0 texto/acción primaria ocultos; sin scroll bidimensional salvo mapa |
| `RNF-010` | Compatibilidad de navegador | `ENV-01` a `ENV-05` | Suite de aceptación y smoke | 100 % del recorrido en `ENV-01` a `ENV-04`; 0 pérdida o bloqueo en `ENV-05` |
| `RNF-011` | Consistencia entre sistemas | Windows, macOS y Ubuntu definidos | Comparar snapshots y resultados | Mismo estado lógico y clases de resultado; 0 divergencias altas no justificadas |
| `RNF-012` | Compatibilidad arquitectónica | Todo cambio de G7 en adelante | Revisión de dependencias y contratos | 0 violaciones de ownership/ciclos; toda ruptura requiere ADR y aprobación previa |
| `RNF-013` | Independencia modular | Grafo Project–Scene–Map–infraestructura | Análisis estático y revisión | 0 ciclos, deep imports o acceso a internals; 100 % por contratos aprobados |
| `RNF-014` | Trazabilidad documental | Cada capacidad/cambio | Auditoría SPEC–decisión–prueba–commit | 100 % trazado antes de estado final; 0 funcionalidad sin SPEC aprobada |
| `RNF-015` | Revisabilidad del código futuro | Fundación G7 y código posterior autorizado | Revisión y análisis estático configurado | 0 hallazgos bloqueantes; 0 supresiones sin justificación, owner y vencimiento |
| `RNF-016` | Crecimiento sin regresión | Simulación de sustituir recurso/adaptador | Prueba de contratos y grafo | Sustitución sin modificar Project/Scene ni Project Document lógico; suite `R1/R2` conforme |
| `RNF-017` | Extensión gobernada | Nueva integración candidata | Revisión de puerto/contrato y cambio | 100 % por mecanismo aprobado; 0 dependencia directa a internals |
| `RNF-018` | Integridad de información | `DAT-04/05/06` | Corrupción, interrupción y round-trip | `REL-G6-01/03/04/05` conformes; 0 pérdida de guardado confirmado |
| `RNF-019` | Defaults seguros | Estado limpio y configuración de release | Auditoría de red, permisos, evaluación y logs | 0 egress; 0 secretos; 0 ejecución de contenido; acciones desconocidas denegadas |
| `RNF-020` | Gobierno de dependencias | Inventario completo | Lock, análisis, licencia y alcanzabilidad | Todos los umbrales de §12.2 conformes |
| `RNF-021` | Estabilidad | 50 recorridos consecutivos | Suite extremo a extremo | 50/50 sin crash, freeze, excepción no controlada ni estado imposible |
| `RNF-022` | Fiabilidad del flujo | Persistencia y fallas controladas | Suite §8 | 100 % de resultados tipados; `REL-G6-01` a `-06` conformes |
| `RNF-023` | Coherencia transversal | Áreas y entornos del piloto | Auditoría de etiquetas, estados, errores y acciones | 0 divergencias altas; 100 % de errores usa taxonomía aprobada |
| `RNF-024` | Preparación multilingüe | `DAT-02/07` | Inspección de recursos y pseudolocalización | 100 % de cadenas externalizadas; 0 cadenas funcionales construidas por concatenación |
| `RNF-025` | Neutralidad regional | `es-AR`, `en-US`, RTL | Comparar presentación y snapshot persistente | 0 cambio del valor persistido; formatos visibles correctos para los dos locales |
| `RNF-026` | Capacidad de diagnóstico | Todas las fallas inyectadas | Correlación acción–evento–resultado | 100 % diagnosticable por código/correlación; 0 campo prohibido |
| `RNF-027` | Registro proporcional | Eventos de §10 | Validación de schema y cardinalidad | 100 % de eventos obligatorios correctos; 0 telemetría remota; 0 duplicados de transición |

En la tabla, `ENV-01`, `DEV-01` y `DAT-01` abrevían respectivamente `ENV-G6-01`, `DEV-G6-01` y `DAT-G6-01`; la misma regla aplica a los demás sufijos.

## 14. Resolución de cuestiones y decisiones tecnológicas

| ID | Resultado aprobado para incorporación en G6 |
|---|---|
| `OPEN-INI-0001-06` | Resuelta por ADR-047, §6 `PERF-G6-09` y §12: fuente, capas, versiones, licencia, atribución voluntaria, offline, presupuesto y sustitución definidos |
| `OPEN-INI-0001-07` | Resuelta por §5: navegadores, sistemas, dispositivos y datos de prueba definidos |
| `OPEN-INI-0001-08` | Resuelta por §§6–13: rendimiento, accesibilidad, fiabilidad y seguridad medibles |
| `OPEN-INI-0001-09` | Conserva en G8 la traducción de contratos y errores a criterios funcionales binarios |
| `TECH-G5-001` | Resuelta por D-67 y ADR-050; eficacia diferida a la publicación de G7 |
| `TECH-G5-002` | Vigente por ADR-047 e incorporada materialmente en el corte candidato G7 |
| `TECH-G5-003` | Resuelta por D-68 y ADR-051; eficacia diferida a la publicación de G7 |
| `TECH-G5-004` | Resuelta por D-69 y ADR-052; eficacia diferida a la publicación de G7 |
| `TECH-G5-005` | Resuelta por D-68 y ADR-051; eficacia diferida a la publicación de G7 |
| `TECH-G5-006` | Resuelta por D-69 y ADR-053; eficacia diferida a la publicación de G7 |
| `TECH-G5-007` | Resuelta por D-67 y ADR-050; eficacia diferida a la publicación de G7 |
| `TECH-G5-008` | Resuelta por D-70 y ADR-054; eficacia diferida a la publicación de G7 |

## 15. Evidencia para la Puerta G6

| Condición de puerta | Evidencia aprobada para incorporación | Estado al publicarse |
|---|---|---|
| RNF-001 a RNF-027 refinados | §§6–13 | Satisfecha |
| Entornos y compatibilidad | §5 | Satisfecha |
| Métrica y método | §§4, 6–13 | Satisfecha |
| Umbral | §§6–13 | Satisfecha |
| Autoridad de aceptación | §4.1 y matriz RNF | Satisfecha |
| Seguridad y amenazas | §9 | Satisfecha |
| Observabilidad | §10 | Satisfecha |
| Pruebas por riesgo | §11 | Satisfecha |
| Dependencias/licencias/sustitución | §12, DOC-021 y ADR-048 a ADR-050 | Materializada en el corte candidato G7; eficacia pendiente de publicación |
| Identidad material publicada | `LB-G6-GMS-20260908-01` | Satisfecha |

## 16. Condición de vigencia

Este documento está vigente desde su publicación material verificada junto con ADR-046 y ADR-047 dentro de `LB-G6-GMS-20260908-01`.

Su vigencia habilitó el inicio documental de G7. D-61 a D-72 autorizan de forma separada la materialización controlada de la fundación ejecutable; ninguna de estas actuaciones crea una SPEC concreta, declara `INI-GMS-0001` Lista para Especificar, autoriza código funcional o anticipa G8 o G9.

## 17. Referencias externas controladas

- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C, How to Meet WCAG 2.2: https://www.w3.org/WAI/WCAG22/quickref/
- OWASP, ASVS 5.0.0: https://owasp.org/www-project-application-security-verification-standard/
- OWASP, Threat Modeling: https://owasp.org/www-community/Threat_Modeling
- web.dev, Web Vitals: https://web.dev/articles/vitals
- SPDX License List: https://spdx.org/licenses/
- Natural Earth: https://www.naturalearthdata.com/
- Natural Earth Terms of Use: https://www.naturalearthdata.com/about/terms-of-use/
