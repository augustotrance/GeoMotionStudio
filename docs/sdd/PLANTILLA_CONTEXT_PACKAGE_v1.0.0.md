# GeoMotion Studio

# Plantilla de Context Package de implementación

**Identificador:** `TPL-CTX-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado — vigencia diferida hasta la publicación de `LB-G3-GMS-20260904-01`  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G3 — Gobierno operativo de SDD  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G3-GMS-20260904-07`; D-26  
**Línea base prevista:** `LB-G3-GMS-20260904-01`

---

## 1. Naturaleza

Un Context Package es un instrumento de ejecución derivado de fuentes institucionales identificadas. Reúne el contexto mínimo suficiente para una misión sin depender de memoria conversacional.

No es una fuente institucional independiente, no sustituye documentos aprobados, no corrige contradicciones, no concede autoridad y no autoriza código por sí mismo.

Si difiere de una fuente institucional vigente, prevalece la fuente y la misión se detiene hasta corregir el paquete o resolver el conflicto.

---

## 2. Encabezado

```markdown
# CTX-GMS-NNNN — Título de la misión

**Identificador:** `CTX-GMS-NNNN`
**Versión:** `1.0.0`
**Estado:** `Candidato | Aprobado | Sustituido | Cerrado`
**Fecha:** `AAAA-MM-DD`
**Misión:** `Identificador de misión`
**SPEC origen:** `SPEC-GMS-NNNN vX.Y.Z`
**Plan de implementación:** `Identidad exacta`
**Línea base de entrada:** `LB-...`
**Commit de entrada:** `SHA completo`
**Responsable de ejecución:** `Asignación concreta`
**Responsable de verificación:** `Asignación concreta`
**Autoridad habilitante:** `Acto exacto`
**Clasificación:** `Interno | Confidencial | Transportable`
```

---

## 3. Identidad material

| Campo | Valor |
|---|---|
| Nombre lógico | `...` |
| Nombre transportado | `...` |
| Tamaño | `... bytes` |
| SHA-256 | `...` |
| Formato y versión | `...` |
| Cantidad de archivos internos | `...` |
| Manifiesto | `...` |

Las diferencias nominales de transporte no se interpretan como versiones nuevas; deben verificarse por identidad material.

---

## 4. Estado de entrada

Registrar:

- objetivo de la misión;
- resultado esperado;
- documentación disponible;
- autoridad aplicable;
- restricciones;
- decisiones previas;
- dependencias;
- información faltante;
- bloqueos conocidos.

La declaración de entrada no resuelve decisiones ni reemplaza la validación de INT-011.

---

## 5. Alcance ejecutable

### 5.1 Incluido

- Resultado exacto autorizado.

### 5.2 Excluido

- Elemento expresamente fuera de la misión.

### 5.3 Archivos o rutas permitidas

| Ruta o patrón explícito | Operación autorizada | Fundamento |
|---|---|---|
| `ruta exacta` | Leer, crear o modificar | `SPEC/plan` |

No utilizar comodines amplios para habilitar cambios materiales.

### 5.4 Archivos o rutas prohibidas

| Ruta | Motivo |
|---|---|
| `...` | Fuera de alcance, histórica, sensible o protegida |

### 5.5 Operaciones prohibidas

- completar decisiones abiertas;
- ampliar alcance;
- modificar fuentes aprobadas fuera del cambio autorizado;
- publicar, liberar o desplegar sin autorización;
- incorporar credenciales o secretos;
- autoaprobar resultados;
- alterar `apps/web` mientras continúe la restricción vigente;
- producir código funcional antes de G9.

---

## 6. Fuentes institucionales

| Documento | Versión/estado | Ruta o ubicación | Sección aplicable | SHA-256 o commit | Uso |
|---|---|---|---|---|---|
| `...` | `...` | `...` | `...` | `...` | Autoriza o restringe |

Debe incluirse únicamente el conjunto necesario. Las referencias deben resolver sin acceso a la conversación de origen.

Cuando una misión requiera contenido offline, se incorporarán copias byte-identificadas o extractos claramente marcados con fuente y alcance. La copia no adquiere otra autoridad.

---

## 7. Reglas aplicables

### 7.1 Invariantes

| ID | Aplicación | Control |
|---|---|---|
| `INV-...` | `...` | `...` |

### 7.2 Variantes

| ID | Opción ya aprobada | Restricción |
|---|---|---|
| `VAR-...` | `...` | `...` |

### 7.3 Excepciones

`Ninguna`, o lista de `EXC-*` aprobadas con expiración y controles compensatorios.

---

## 8. Contratos, pruebas y criterios

| Tipo | ID | Versión o corte | Resultado requerido |
|---|---|---|---|
| Contrato | `CTR-*` | `...` | `...` |
| Criterio de aceptación | `CA-*` | `...` | `...` |
| Prueba | `PRU-*` | `...` | `...` |
| Evidencia | `EVI-*` | `...` | `...` |

El ejecutor no modifica criterios o contratos para hacer conforme su resultado.

---

## 9. Dependencias y entorno

| Elemento | Identidad o versión | Origen | Licencia/condición | Preparación | Riesgo |
|---|---|---|---|---|---|
| `...` | `...` | `...` | `...` | `...` | `...` |

Incluir herramientas, runtime, fixtures, datos de prueba y variables requeridas. Los valores secretos se referencian por nombre; no se incorporan al paquete.

---

## 10. Secuencia de ejecución

| Orden | Acción | Entrada | Salida | Verificación | Detención |
|---:|---|---|---|---|---|
| 1 | `...` | `...` | `...` | `...` | `...` |

Cada paso debe poder retomarse desde evidencia material, no desde memoria del ejecutor.

---

## 11. Entregables

| Entregable | Formato/ruta | Identidad esperada | Criterio de integridad |
|---|---|---|---|
| `...` | `...` | `...` | `...` |

---

## 12. Evidencias y trazabilidad

| Evidencia | Relación | Ubicación | Retención |
|---|---|---|---|
| `EVI-*` | `CA/PRU/CAM` | `...` | `...` |

Registrar comandos o procedimientos de verificación solo cuando sean reproducibles, no expongan secretos y aporten evidencia necesaria.

---

## 13. Criterios de bloqueo

La misión se detiene cuando:

1. el corte de entrada no coincide;
2. falta una fuente o decisión crítica;
3. aparece una contradicción institucional;
4. el resultado exige salir de rutas u operaciones autorizadas;
5. cambia un contrato, criterio o invariante;
6. la seguridad o integridad no puede demostrarse;
7. se requiere publicación, liberación, despliegue o nueva autoridad;
8. el responsable asignado no puede mantener independencia requerida.

El bloqueo se registra con hecho, impacto, evidencia y decisión necesaria. No se sortea mediante interpretación.

---

## 14. Handoff y cierre

La entrega debe registrar:

- estado final;
- alcance ejecutado y no ejecutado;
- archivos afectados;
- pruebas y evidencias;
- desviaciones, deudas y riesgos;
- bloqueos o pendientes;
- decisiones requeridas;
- próximos pasos;
- identidad material del resultado.

El Context Package se marca `Cerrado` cuando la misión termina. Si cambia una entrada obligatoria antes del cierre, se emite una versión sucesora y la anterior queda `Sustituida`.

---

## 15. Condición de vigencia

El Founder aprobó esta plantilla mediante D-26. Su vigencia operativa comenzará únicamente cuando `LB-G3-GMS-20260904-01` sea aprobada y publicada. Aun entonces, no reemplazará la autorización específica de cada misión ni adquirirá autoridad independiente respecto de sus fuentes institucionales.
