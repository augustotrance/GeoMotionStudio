# GeoMotion Studio

# 21 · FUNDACIÓN EJECUTABLE Y CONFORMIDAD AUTOMÁTICA DEL REPOSITORIO

**Código:** `DOC-021`  
**Versión:** `1.0.0`  
**Estado:** Aprobado para incorporación — vigencia diferida hasta la publicación material de `LB-G7-GMS-20260908-01`  
**Fecha:** 8 de septiembre de 2026  
**Clasificación:** Manual de Ingeniería  
**Etapa:** G7 — Fundación ejecutable del repositorio  
**Iniciativa:** `INI-GMS-0001`  
**Línea base de entrada:** `LB-G6-GMS-20260908-01`  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G7-GMS-20260908-15`; D-61 a D-72  
**Línea base prevista:** `LB-G7-GMS-20260908-01`

---

## 1. Propósito

Definir la representación física, el entorno reproducible y los controles automáticos mínimos que permiten demostrar la conformidad del repositorio antes de escribir una SPEC concreta o implementar funcionalidad de producto.

Este documento consolida los siete entregables de G7:

1. árbol físico conforme;
2. entorno reproducible;
3. aplicación mínima compilable;
4. suite de validaciones;
5. CI obligatoria;
6. documentación de desarrollo y recuperación; y
7. primer informe automático de conformidad.

No es una SPEC. No incorpora criterios funcionales del recorrido, no declara la iniciativa Lista para Especificar y no autoriza código funcional.

## 2. Fuentes y precedencia

Este documento especializa, sin sustituirlas:

- DOC-002 · Arquitectura;
- DOC-004 · Pila Tecnológica;
- DOC-006 · Constitución del Proyecto;
- DOC-012 · Arquitectura Cartográfica;
- DOC-015 · Bitácora de Desarrollo;
- DOC-018 · Gestión de Versiones;
- DOC-019 · Arquitectura y dominio mínimos del piloto;
- DOC-020 · Perfil de calidad, seguridad y verificación;
- ADR-017, ADR-044 y ADR-047;
- `INI-GMS-0001`;
- `MOD-SDD-GMS-001`; y
- el Itinerario Maestro SDD v1.0.0.

Los ADR-048 a ADR-054 registran las decisiones de implementación duraderas asociadas. En caso de divergencia, prevalecen las fuentes institucionales aprobadas y el acto posterior aplicable.

## 3. Alcance y prohibiciones

### 3.1 Incluido

- configuración raíz y workspace;
- versiones exactas y lockfile;
- árbol de aplicaciones, paquetes, assets, scripts, configuración, pruebas y CI;
- aplicación mínima que monta, compila y permite smoke técnico;
- schemas, fixtures y contratos mínimos necesarios para verificar la fundación;
- recurso Natural Earth local, manifiesto y receta;
- typecheck, lint, formato, pruebas y build;
- validación documental, arquitectónica y de schemas;
- secretos, dependencias, licencias, integridad y SBOM;
- trazabilidad y reporte automático; y
- documentación de instalación, comandos y recuperación.

### 3.2 Excluido

- casos de uso `create`, `save`, `close`, `reopen` o navegación de Map View;
- UI del recorrido piloto;
- persistencia funcional del Project Document;
- un adaptador cartográfico funcional;
- una SPEC concreta o Context Package;
- criterios binarios de `OPEN-INI-0001-09`;
- cuentas, Cloud, colaboración, IA, plugins, 3D, Timeline, Assets u Objects;
- despliegue de producto; y
- código funcional antes de G9.

`Admin`, `AI` y `Usuario` continúan como hipótesis futuras y no son roles vigentes.

## 4. Arquitectura física

### 4.1 Estructura obligatoria

```text
GeoMotionStudio/
├── apps/
│   └── web/
├── packages/
│   ├── application/
│   ├── project/
│   ├── scene/
│   ├── map/
│   ├── identity/
│   ├── infrastructure/
│   ├── ui/
│   └── shared/
├── assets/
│   └── maps/natural-earth/
├── configs/
├── scripts/
├── tests/
├── docs/
├── itinerario/
├── .github/workflows/
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── tsconfig.json
├── CHANGELOG.md
├── README.md
└── LICENSE
```

Solo se crean directorios que contengan un artefacto necesario. No se usan archivos vacíos para simular avance.

### 4.2 Responsabilidades físicas

| Ruta | Responsabilidad | Puede depender de |
|---|---|---|
| `apps/web` | composición, bootstrap y superficie técnica | Application, Infrastructure, UI y contratos públicos |
| `packages/application` | orquestación y despacho | contratos públicos de Project, Scene, Map e Identity |
| `packages/project` | ownership de Project y su puerto | Shared; contratos públicos requeridos |
| `packages/scene` | ownership de Scene | Shared; contratos públicos requeridos |
| `packages/map` | ownership de Map View y puerto de recurso | Shared; contratos públicos requeridos |
| `packages/identity` | contexto local y política mínima | Shared |
| `packages/infrastructure` | adaptadores concretos | puertos y contratos públicos; dependencias tecnológicas |
| `packages/ui` | componentes agnósticos de dominio | React y Shared técnico |
| `packages/shared` | primitivas técnicas sin semántica de dominio | ninguna capa superior |

No se crea un paquete central propietario de todos los contratos. Cada contrato permanece publicado por el módulo que posee la capacidad.

### 4.3 Reglas automáticas de frontera

Son bloqueantes:

- ciclos entre paquetes;
- imports desde `src/internal`, rutas relativas ajenas o archivos no exportados;
- dependencias de Project, Scene, Map o Identity hacia Infrastructure, UI o `apps/web`;
- dependencia de UI hacia implementaciones de dominio;
- API de OpenLayers, IndexedDB o Ajv expuesta por un contrato de dominio;
- ownership duplicado; y
- uso de alias que oculte una violación.

Cada paquete debe declarar `name`, `private`, `type`, `exports`, `types`, scripts aplicables y dependencias directas exactas.

## 5. Tratamiento de `apps/web`

El contenido previo es un spike histórico reemplazable, no una aplicación adoptada.

La materialización G7:

1. elimina su contenido del árbol corriente;
2. no lo copia a `legacy/`, `archive/` u otra ruta;
3. conserva su recuperación mediante la historia Git de G6;
4. crea de nuevo `apps/web` como aplicación oficial mínima; y
5. limita su comportamiento a montar, presentar identidad técnica, exponer un punto de smoke y compilar.

No puede implementar formularios, creación de Project, Scene inicial, mapa interactivo, guardado, reapertura o recuperación.

## 6. Entorno reproducible

### 6.1 Versiones de plataforma

| Elemento | Versión exacta |
|---|---:|
| Node.js | `24.20.0` |
| pnpm | `12.3.4` |
| TypeScript | `7.0.2` |

La raíz debe incluir:

- `engines.node` exacto;
- `packageManager: pnpm@12.3.4` con verificación de integridad cuando el formato lo permita;
- archivo de versión de Node legible por herramientas comunes;
- un lockfile compartido;
- `savePrefix` exacto;
- registro público HTTPS explícito;
- scripts de instalación de dependencias denegados salvo allowlist revisada; y
- política de edad/confianza del paquete si pnpm 12 la ofrece de forma estable en el corte material.

### 6.2 Instalación

El procedimiento normativo es:

1. instalar Node 24.20.0 desde distribución oficial;
2. instalar pnpm 12.3.4 por procedimiento versionado;
3. ejecutar `pnpm install --frozen-lockfile` desde la raíz; y
4. ejecutar `pnpm verify`.

CI usa el mismo lockfile, gestor, versión de Node y comandos. Ningún comando normativo ejecuta `npx`, `pnpx`, `dlx`, etiquetas `latest` ni descarga una herramienta no inventariada.

## 7. Fundación de aplicación

### 7.1 Stack exacto

| Dependencia | Versión | Ámbito |
|---|---:|---|
| `react` | `19.2.7` | runtime web |
| `react-dom` | `19.2.7` | runtime web |
| `vite` | `8.1.2` | desarrollo/build |
| `@vitejs/plugin-react` | `6.1.1` | desarrollo/build |

TypeScript opera con opciones estrictas, sin `any` implícito, sin fallthrough, sin acceso inseguro a índices y con separación de imports de tipo.

### 7.2 Aplicación mínima

La aplicación mínima puede:

- montar en un elemento raíz;
- presentar nombre del producto y texto “Fundación técnica G7”;
- declarar idioma y título;
- ofrecer estructura semántica y foco visible; y
- exponer una marca estable para el smoke.

No representa una implementación parcial del recorrido. Router y estado global no se incorporan hasta que una necesidad aprobada los justifique.

## 8. Cartografía y recurso de datos

### 8.1 Motor y frontera

OpenLayers `10.10.0` solo puede importarse dentro de Infrastructure. El resto del sistema utiliza el puerto de Map y tipos propios.

La proyección interna de la vista piloto es EPSG:4326, orden `[longitude, latitude]`. La elección:

- coincide con el contrato WGS 84;
- coincide con el GeoJSON Natural Earth;
- evita recortar latitudes válidas del modelo;
- reduce transformaciones en el primer incremento; y
- permanece sustituible detrás del adaptador.

Resolución, extent, objetos `View`, `Feature`, `Layer` o eventos del motor no atraviesan la frontera.

### 8.2 Natural Earth

Las únicas capas permitidas son:

- Land 1:110m 4.0.0;
- Ocean 1:110m 4.0.0; y
- Coastline 1:110m 4.1.0.

G7 debe producir:

- `sources.json` con URL, commit, versión, fecha, licencia y SHA-256;
- copias fuente o referencias inmutables suficientes para reproducir;
- receta Node determinista que solo seleccione campos y serialice en orden estable;
- artefacto GeoJSON derivado y SHA-256;
- presupuesto de tamaño verificado; y
- aviso “Made with Natural Earth”.

El runtime obligatorio no realiza egress. La receta puede descargar solo como tarea explícita de mantenimiento; la verificación ordinaria usa las fuentes ya fijadas.

## 9. Persistencia y Project Document

G7 aprueba los mecanismos pero no implementa el caso de uso funcional.

### 9.1 Backend

IndexedDB es el backend local. Infrastructure lo encapsula detrás de `CTR-GMS-PRJ-003`.

Modelo material mínimo futuro:

| Store | Clave | Función |
|---|---|---|
| `documents` | `[projectId, generation]` | envelopes inmutables confirmados o candidatos |
| `heads` | `projectId` | generación confirmada vigente |
| `recovery` | `[projectId, generation]` | procedencia y condición de recuperación |

Un guardado material futuro escribirá documento y `head` dentro de una única transacción. El acuse solo podrá emitirse después de commit y verificación de digest. Una transacción abortada conserva el `head` previo. La recuperación nunca reemplaza silenciosamente el activo.

### 9.2 Forma documental

| Propiedad | Decisión |
|---|---|
| Codificación | UTF-8 |
| Sintaxis | JSON estricto |
| Extensión | `.gms.json` |
| `documentType` | `geomotion-project` |
| `formatVersion` | entero `1` |
| Schema | JSON Schema Draft 2020-12 |
| Validador | Ajv `8.20.0`, export 2020, modo estricto |

El schema usa `additionalProperties: false` o `unevaluatedProperties: false` en objetos cerrados, límites de tamaño/colección, patrones de UUID y referencias requeridas. La validación estructural precede a invariantes y referencias cruzadas de dominio.

## 10. Identidad y mensajería

### 10.1 Identidad

`crypto.randomUUID()` genera UUID v4. La representación es minúscula, con guiones y 36 caracteres. No se agregan prefijos, timestamps, nombres, rutas ni significado empresarial.

Los consumidores tratan el valor como string opaco. La identidad se inyecta mediante un puerto para permitir fixtures deterministas.

### 10.2 Comunicación

- comandos y consultas viajan por contratos directos;
- los eventos son uniones discriminadas TypeScript;
- cada evento posee `eventId`, `eventType`, `eventVersion`, `occurredAt`, `correlationId` y payload mínimo;
- Aplicación despacha sincrónicamente después de confirmar el cambio;
- el orden se preserva dentro de una operación;
- un fallo del suscriptor se contiene y tipa;
- no se transmiten objetos del motor, storage handles, documentos completos ni datos sensibles; y
- no existe broker, bus global ni garantía distribuida.

## 11. Toolchain de conformidad

| Control | Herramienta base | Regla |
|---|---|---|
| Typecheck | TypeScript `7.0.2` | cero errores |
| Lint | Oxlint `1.81.0` | cero hallazgos bloqueantes; sin análisis tipado experimental como requisito |
| Formato | Prettier `3.9.6` | `--check`; versión exacta |
| Unit/contract/integration | Vitest `5.0.0` | determinista, sin red |
| Browser smoke | Playwright Test `1.63.0` | navegadores fijados por la versión |
| Secretos | Gitleaks `8.30.1` | binario/contenedor por digest; cero hallazgos no resueltos |
| Licencias | `pnpm licenses list --json --long` | 100 % identificadas |
| SBOM | `pnpm sbom` | artefacto CycloneDX o formato estable soportado |
| Vulnerabilidades | `pnpm audit` | cero alta/crítica alcanzable sin excepción Founder |
| Documentación | scripts Node propios | metadatos, links, IDs, estados y navegación |
| Arquitectura | script Node propio + manifiestos | cero ciclos/deep imports/violaciones |
| Schemas | Ajv + fixtures | positivos aceptados, adversos rechazados |

Toda supresión o allowlist contiene ID, motivo, owner, alcance y vencimiento. Ningún porcentaje de cobertura reemplaza la cobertura por riesgo de DOC-020.

## 12. Comandos canónicos

| Comando | Incluye | Muta el árbol |
|---|---|---|
| `pnpm dev` | Vite local | no |
| `pnpm build` | build topológico | solo directorios ignorados |
| `pnpm typecheck` | todos los paquetes | no |
| `pnpm lint` | código, scripts y config compatible | no |
| `pnpm format:check` | texto gobernado | no |
| `pnpm test` | unitarias, contrato e integración | solo evidencia ignorada |
| `pnpm test:e2e` | smoke técnico | solo evidencia ignorada |
| `pnpm validate:docs` | documentación institucional | no |
| `pnpm validate:architecture` | dependencias y exports | no |
| `pnpm validate:schemas` | schemas y fixtures | no |
| `pnpm security:secrets` | árbol e historia aplicable | no |
| `pnpm dependencies:check` | lock, licencias, SBOM y audit | evidencia controlada |
| `pnpm verify` | todos los controles sin reinstalar | evidencia controlada |
| `pnpm verify:clean` | copia limpia, frozen install y verify | fuera del árbol fuente |

Todo comando termina con código distinto de cero si falla una condición bloqueante.

## 13. Validación documental

### 13.1 Metadatos

Los documentos gobernados deben declarar los campos exigidos por su familia. El validador reconoce Markdown y no interpreta contenido dentro de code fences como metadato activo.

### 13.2 Enlaces

- todo enlace relativo debe resolver dentro del repositorio;
- anchors locales se normalizan de manera determinista;
- URLs externas se inventarían, pero su disponibilidad de red no bloquea una ejecución offline;
- ningún enlace puede escapar mediante rutas parentales indebidas.

### 13.3 Identificadores

Los IDs institucionales se extraen por patrones configurados, se asocian a su archivo propietario y deben ser únicos cuando su familia lo exige. Referencias no resueltas se reportan con archivo y campo.

### 13.4 Estados

El validador carga la máquina de estados del Modelo Operativo SDD y detecta estados desconocidos, transiciones imposibles y declaraciones incompatibles con actos publicados.

### 13.5 Trazabilidad

Se genera una matriz legible por máquina y Markdown que relaciona:

- decisiones D-61 a D-72;
- DOC-021 y ADR-048 a ADR-054;
- `TECH-G5-*`;
- controles G7;
- comandos; y
- evidencia.

## 14. CI obligatoria

La rama `main` y toda propuesta de cambio ejecutan un workflow mínimo:

1. checkout con historia suficiente;
2. Node exacto;
3. pnpm exacto;
4. instalación congelada;
5. `pnpm verify`;
6. smoke de navegador;
7. secret scan;
8. generación de SBOM/licencias/informe; y
9. publicación de evidencia no sensible.

Las GitHub Actions se fijan por SHA completo con etiqueta de versión como comentario. Los permisos del token son mínimos; no hay credenciales persistentes, ejecución desde forks con secretos ni pasos descargados dinámicamente.

## 15. Evidencia y reporte automático

El comando agregado produce:

- `evidence/g7/conformance.json`;
- `evidence/g7/conformance.md`;
- inventario de entorno;
- tiempos y códigos de salida;
- hash del lockfile, schemas y recurso cartográfico;
- resumen de dependencias/licencias/SBOM;
- matriz de trazabilidad; y
- lista de hallazgos con severidad.

La evidencia registra commit y árbol. Las marcas de tiempo no participan de comparaciones que deban ser deterministas.

## 16. CHANGELOG, desarrollo y recuperación

### 16.1 CHANGELOG

`CHANGELOG.md` se activa con sección `Unreleased` y una entrada G7. No se reconstruye historia no verificable.

### 16.2 Guía de desarrollo

Debe explicar requisitos, instalación, comandos, estructura, límites de G7, política de dependencias y solución de fallos comunes en Windows, macOS y Linux.

### 16.3 Recuperación del entorno

Debe permitir:

1. descartar únicamente outputs ignorados;
2. reconstruir `node_modules` con el lockfile;
3. verificar versiones;
4. regenerar evidencia;
5. recuperar el spike previo desde el commit G6 sin reintroducirlo; y
6. volver al último commit publicado mediante operaciones Git no destructivas sobre trabajo ajeno.

## 17. Puerta G7

La puerta queda técnicamente conforme cuando una copia limpia:

- instala con `--frozen-lockfile`;
- construye todos los workspaces;
- pasa typecheck, lint y formato;
- ejecuta pruebas y smoke;
- valida documentos, schemas, contratos y fronteras;
- detecta cero secretos no resueltos;
- genera inventario, licencias, SBOM, trazabilidad e informe;
- reproduce el recurso cartográfico desde insumos fijados;
- no contiene SPEC concreta ni funcionalidad del recorrido; y
- produce evidencia asociada al commit y árbol evaluados.

La conformidad técnica no aprueba la Línea base. El Founder conserva la aceptación institucional exclusiva.

## 18. Condición de vigencia

Este documento queda aprobado para incorporación. Solo será vigente cuando se publique junto con ADR-048 a ADR-054 dentro de la futura Línea base `LB-G7-GMS-20260908-01` y esa publicación quede verificada.

Su aprobación para incorporación habilitará la materialización controlada, pero no cerrará G7, no abrirá G8, no creará una SPEC, no declarará `INI-GMS-0001` Lista para Especificar, no implementará funcionalidad de producto y no autorizará código funcional antes de G9.
