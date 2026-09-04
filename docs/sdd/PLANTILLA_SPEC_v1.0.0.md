# GeoMotion Studio

# Plantilla SPEC

**Identificador:** `TPL-SPEC-GMS-001`  
**Versión:** `1.0.0`  
**Estado:** Aprobado — vigencia diferida hasta la publicación de `LB-G3-GMS-20260904-01`  
**Fecha:** 4 de septiembre de 2026  
**Ubicación:** `docs/sdd/PLANTILLA_SPEC_v1.0.0.md`  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G3-GMS-20260904-07`; D-20 y D-23  
**Línea base prevista:** `LB-G3-GMS-20260904-01`

---

## 1. Reglas de uso

Esta plantilla define estructura y controles; no contiene comportamiento real ni aprueba una SPEC concreta.

Una SPEC:

1. define un solo incremento acotado;
2. utiliza requisitos atómicos y criterios binarios;
3. referencia fuentes, arquitectura, invariantes y decisiones; no las copia como autoridad paralela;
4. no introduce arquitectura nueva;
5. conserva decisiones abiertas como bloqueos, no como supuestos;
6. separa contenido aprobado, estado de implementación y evidencia;
7. no concede permiso de código antes de LPI y G9.

Los campos obligatorios no aplicables deben conservarse con la fórmula `No aplica — fundamento:`. No se eliminan silenciosamente.

---

## 2. Encabezado obligatorio

```markdown
# SPEC-GMS-NNNN — Título del incremento

**Identificador:** `SPEC-GMS-NNNN`
**Versión:** `0.1.0`
**Estado de madurez:** `Borrador`
**Estado de implementación:** `No iniciada`
**Fecha:** `AAAA-MM-DD`
**Iniciativa:** `INI-GMS-NNNN`
**Propietario documental:** `Responsable asignado`
**Integración técnica:** `Dirección Técnica`
**Autoridad de aprobación:** `Founder o autoridad vigente identificada`
**Línea base de entrada:** `LB-...`
**Commit o identidad material de entrada:** `...`
**Clasificación de revisión:** `R0 | R1 | R2 | R3`
```

---

## 3. Historial de versiones

| Versión | Fecha | Estado | Cambio | Autoridad o actuación | Sustituye |
|---|---|---|---|---|---|
| `0.1.0` | `AAAA-MM-DD` | Borrador | Creación | `INI-*` | No aplica |

---

## 4. Necesidad y resultado

### 4.1 Problema u oportunidad

Describir el hecho verificable que origina la iniciativa y citar su fuente.

### 4.2 Resultado observable esperado

Describir qué cambio podrá observarse sin prescribir implementación.

### 4.3 Valor y prioridad

Indicar destinatario del valor, beneficio y decisión de prioridad.

### 4.4 Medida de éxito

Indicar cómo se determinará que el resultado produce el efecto esperado.

---

## 5. Alcance

### 5.1 Incluido

- Resultado incluido.

### 5.2 Excluido

- Resultado excluido.

### 5.3 No objetivos

- Aspecto que deliberadamente no intenta resolver esta SPEC.

### 5.4 Supuestos prohibidos

- Decisiones que no pueden completarse por interpretación.

---

## 6. Interesados y actores

| ID local | Tipo | Necesidad o interacción | Autoridad | Fuente |
|---|---|---|---|---|
| `INT-01` | Interesado | `...` | Ninguna implícita | `...` |
| `ACT-01` | Actor humano o técnico | `...` | Según política vigente | `...` |

No utilizar `Admin`, `AI` ni `Usuario` como roles vigentes mientras no exista decisión posterior expresa.

---

## 7. Fuentes y precedencia

| Fuente | Versión o corte | Estado | Sección aplicable | Relación |
|---|---|---|---|---|
| `Documento institucional` | `...` | Aprobado o Publicado | `...` | Autoriza, restringe o informa |

Incluir Visión, Constitución, Manual, arquitecturas especializadas, ADR, glosario, invariantes, línea base y actos aplicables. La presencia en esta tabla no cambia su autoridad.

---

## 8. Invariantes, variantes y excepciones

### 8.1 Invariantes aplicables

| ID | Aplicación en el incremento | Método de control |
|---|---|---|
| `INV-...` | `...` | `...` |

### 8.2 Invariantes no aplicables

| ID | Fundamento de no aplicación |
|---|---|
| `INV-...` | `...` |

### 8.3 Variantes seleccionadas

| ID | Opción seleccionada | Fundamento | Restricciones preservadas |
|---|---|---|---|
| `VAR-...` | `...` | `...` | `...` |

### 8.4 Excepciones

`Ninguna`, o enlazar cada `EXC-GMS-NNNN` aprobada, su alcance y expiración.

---

## 9. Requisitos funcionales

| ID | Condición atómica | Fuente | Prioridad | Método de verificación |
|---|---|---|---|---|
| `SPEC-GMS-NNNN-RF-001` | El sistema deberá… | `...` | Obligatorio | `PRU-...` |

Reglas:

- una fila expresa una sola obligación;
- utilizar lenguaje observable;
- evitar términos subjetivos sin métrica;
- no mezclar requisito con solución interna salvo restricción autorizada.

---

## 10. Requisitos no funcionales

| ID | Atributo | Entorno | Métrica | Umbral | Método |
|---|---|---|---|---|---|
| `SPEC-GMS-NNNN-RNF-001` | `...` | `...` | `...` | `...` | `PRU-...` |

Todo RNF aplicable debe ser medible o quedar bloqueado hasta definir su umbral en G6.

---

## 11. Arquitectura y dominio

### 11.1 Módulos y fronteras

| Módulo | Responsabilidad en el incremento | Interacción permitida | Fuente arquitectónica |
|---|---|---|---|
| `...` | `...` | `...` | `DOC/ADR` |

### 11.2 Entidades y ownership

| Entidad o información | Propietario | Identidad | Persistencia | Reglas |
|---|---|---|---|---|
| `...` | `Módulo` | `...` | `...` | `...` |

### 11.3 Estados de dominio y transiciones

| Estado origen | Evento o condición | Estado destino | Guardia | Efecto observable |
|---|---|---|---|---|
| `...` | `...` | `...` | `...` | `...` |

### 11.4 Decisiones arquitectónicas

| Cuestión | ADR vigente | Estado | Bloqueo |
|---|---|---|---|
| `...` | `ADR-...` o pendiente | `...` | Sí/No |

Una decisión nueva exige ADR previo; no se resuelve dentro de la SPEC.

---

## 12. Contratos y errores

### 12.1 Contratos

| ID | Participantes | Entrada | Salida | Precondición | Poscondición | Fuente |
|---|---|---|---|---|---|---|
| `SPEC-GMS-NNNN-CTR-001` | `...` | `...` | `...` | `...` | `...` | `DOC/ADR` |

### 12.2 Errores y condiciones excepcionales

| ID | Condición | Resultado observable | Recuperación | Evidencia |
|---|---|---|---|---|
| `SPEC-GMS-NNNN-ERR-001` | `...` | `...` | `...` | `EVI-...` |

Los formatos ejecutables se materializan en las etapas correspondientes; esta sección no reemplaza schemas o interfaces.

---

## 13. Seguridad, privacidad y control humano

| Riesgo o control | Aplicabilidad | Requisito | Verificación |
|---|---|---|---|
| Autenticación | Sí/No con fundamento | `...` | `...` |
| Autorización | Sí/No con fundamento | `...` | `...` |
| Datos sensibles | Sí/No con fundamento | `...` | `...` |
| Secretos | Sí/No con fundamento | `...` | `...` |
| Registro auditable | Sí/No con fundamento | `...` | `...` |
| IA y control humano | Sí/No con fundamento | `...` | `...` |

---

## 14. Dependencias, compatibilidad y licencias

| Dependencia | Versión o rango | Uso | Licencia | Riesgo | Sustitución o contingencia |
|---|---|---|---|---|---|
| `...` | `...` | `...` | `...` | `...` | `...` |

Declarar compatibilidad, migración, datos externos y condiciones de uso aplicables.

---

## 15. Accesibilidad, internacionalización y observabilidad

### 15.1 Accesibilidad

Requisitos y método de verificación, o no aplicación fundamentada.

### 15.2 Internacionalización y localización

Requisitos sobre idioma, formatos, unidades, fechas, coordenadas y textos visibles.

### 15.3 Observabilidad

Eventos, métricas, logs, diagnóstico y datos que no deben registrarse.

---

## 16. Criterios de aceptación

| ID | Dado | Cuando | Entonces | Requisitos relacionados | Método | Evidencia esperada |
|---|---|---|---|---|---|---|
| `SPEC-GMS-NNNN-CA-001` | `...` | `...` | `...` | `RF/RNF/CTR/ERR` | `PRU-...` | `EVI-...` |

Cada criterio debe producir un resultado binario: conforme o no conforme. No se aceptan expresiones como “adecuado”, “rápido” o “intuitivo” sin condición observable.

---

## 17. Estrategia de verificación

| ID | Nivel | Objeto | Procedimiento | Entorno | Resultado esperado | Responsable |
|---|---|---|---|---|---|---|
| `SPEC-GMS-NNNN-PRU-001` | Contrato, integración, aceptación u otro | `...` | `...` | `...` | `...` | Verificación asignada |

La prueba produce evidencia; no reemplaza la decisión de aceptación.

---

## 18. Matriz de trazabilidad

| Origen | Destino | Relación | Cobertura | Estado |
|---|---|---|---|---|
| `INI-*` | `RF/RNF` | Origina | Completa/Parcial | `...` |
| `RF/RNF` | `CTR/ERR/CA` | Especifica | `...` | `...` |
| `CA` | `PRU` | Verifica mediante | `...` | `...` |
| `PRU` | `EVI` | Produce | `...` | `...` |

No duplicar el texto de los elementos; relacionar identificadores y versiones exactas.

---

## 19. Implementación, riesgos y reversión

### 19.1 Restricciones de implementación

Indicar límites derivados, sin convertir la SPEC en un plan de archivos prematuro.

### 19.2 Riesgos

| ID local | Riesgo | Probabilidad | Impacto | Tratamiento | Disparador |
|---|---|---|---|---|---|
| `RISK-01` | `...` | `...` | `...` | `...` | `...` |

### 19.3 Reversión

Describir qué estado anterior se preserva y cómo se verificará la reversión. El plan ejecutable se completa en G9.

---

## 20. Decisiones abiertas y bloqueos

| ID local | Cuestión | Autoridad requerida | Impacto | Estado | Condición de cierre |
|---|---|---|---|---|---|
| `OPEN-01` | `...` | `...` | `...` | Abierta | `...` |

Una SPEC no puede ser candidata mientras conserve un bloqueo crítico que afecte comportamiento, arquitectura, seguridad, verificabilidad o autoridad.

---

## 21. Declaraciones de puerta

### 21.1 Listo para Especificar

Registrar ID del acto, fecha, responsable de verificación y resultado de cada condición LPE.

### 21.2 Listo para Implementar

Permanece `No evaluado` hasta G9. Registrar luego el corte exacto de SPEC, contratos, pruebas, plan y Context Package.

### 21.3 Terminado

Permanece `No evaluado` hasta existir implementación, evidencia y aceptación.

---

## 22. Aprobación, publicación y sucesión

| Actuación | Identidad | Autoridad | Fecha | Resultado |
|---|---|---|---|---|
| Revisión | `REV-*` | `...` | `...` | `...` |
| Aprobación | `ACTO/decisión` | Founder | `...` | `...` |
| Publicación | `commit/publicación` | Autorización expresa | `...` | `...` |
| Sustitución o retiro | `CAM/acto` | Autoridad competente | `...` | `...` |

---

## 23. Condición de vigencia de esta plantilla

El Founder aprobó esta estructura mediante D-23. Su vigencia como plantilla oficial comenzará únicamente cuando `LB-G3-GMS-20260904-01` sea aprobada y publicada. La aprobación de esta plantilla no aprueba ninguna SPEC concreta, no abre G4 ni autoriza código funcional.
