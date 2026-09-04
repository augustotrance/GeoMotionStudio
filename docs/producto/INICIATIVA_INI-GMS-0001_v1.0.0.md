# GeoMotion Studio

# INI-GMS-0001 — Proyecto local persistente con escena y mapa base 2D

**Identificador:** `INI-GMS-0001`  
**Versión:** `1.0.0`  
**Estado:** Aprobada para incorporación — admisión y priorización operativas diferidas hasta la publicación material de la Línea base G4 que la incluya  
**Fecha:** 4 de septiembre de 2026  
**Etapa:** G4 — Stakeholders, actores, alcance y capacidades  
**Autoridad:** Founder  
**Trazabilidad:** `ACTO-G4-GMS-20260904-09`; D-36  
**Línea base de entrada:** `LB-G3-GMS-20260904-01`

---

## 1. Resultado aprobado para incorporación

> Crear, guardar y reabrir un proyecto local con una escena y una vista cartográfica base bidimensional, restaurando el estado definido del trabajo.

Esta iniciativa concreta el primer resultado vertical recomendado por el Itinerario Maestro. No es una SPEC y no define todavía contratos, arquitectura implementable ni criterios de aceptación finales.

## 2. Actor y perfil primario

| Campo | Definición aprobada para incorporación |
|---|---|
| Actor | `ACTR-GMS-0001` — Persona creadora local |
| Perfil heredado principal | `U-001` — Creador de contenido geoespacial |
| Nivel inicial considerado | Principiante o intermedio |
| Contexto | Navegador y dispositivo local; sin cuenta obligatoria |
| Beneficiarios secundarios | `U-002` a `U-006` y `U-009` cuando persiguen el mismo resultado |

Las organizaciones y los participantes técnicos no se utilizan como sustitutos del usuario primario.

## 3. Necesidad

Una persona necesita comenzar un proyecto geoespacial, reconocer inmediatamente su contexto espacial y continuar el trabajo en otra sesión sin perder la estructura mínima ni depender de una cuenta, sincronización o servicio remoto.

Hoy el proyecto posee la visión y arquitectura conceptual para Project, Scene y Map, pero no existe una SPEC aprobada ni una implementación demostrada de ese recorrido.

## 4. Valor

El resultado aporta valor porque:

1. entrega un recorrido visible y comprensible desde el primer incremento;
2. demuestra continuidad entre sesiones, condición central de un editor profesional;
3. conecta tres dominios estructurales sin incorporar todavía animación, exportación o servicios remotos;
4. permite verificar identidad y evolución del Project Document;
5. reduce incertidumbre para los incrementos posteriores; y
6. pertenece al núcleo Community y mantiene acceso local sin cuenta obligatoria.

## 5. Alcance incluido

La futura SPEC deberá delimitar como mínimo el siguiente resultado:

1. iniciar la creación de un proyecto local;
2. asignar identidad lógica y versión de formato;
3. establecer una escena inicial;
4. mostrar una vista cartográfica base 2D;
5. permitir modificar el estado mínimo de navegación que se defina;
6. guardar localmente el Project Document;
7. cerrar o abandonar la sesión de trabajo;
8. seleccionar y reabrir el proyecto guardado;
9. restaurar la escena y el estado cartográfico definido; y
10. comunicar de forma recuperable los errores incluidos en la SPEC.

La palabra “local” describe ausencia de dependencia remota. El mecanismo exacto de persistencia queda pendiente de G5.

## 6. Alcance excluido

- cuentas, autenticación y autorización;
- sincronización, copias remotas y colaboración;
- 3D, terreno y cámaras cinematográficas;
- incorporación de capas por el usuario;
- Assets y Objects incorporados por el usuario;
- Timeline, keyframes y animación;
- render final y exportación;
- plugins, APIs públicas y Marketplace;
- IA;
- telemetría remota;
- publicación externa; y
- operación distribuida.

## 7. Capacidades relacionadas

| Capacidad | Relación |
|---|---|
| `CAP-GMS-0001` | Resultado principal de ciclo de vida local del proyecto |
| `CAP-GMS-0002` | Escena inicial mínima |
| `CAP-GMS-0003` | Vista y navegación cartográfica 2D mínima |
| `CAP-GMS-0011` | Claridad y coherencia transversal del recorrido |
| `CAP-GMS-0013` | Identidad, versión, compatibilidad y recuperación |

## 8. Señales de éxito de producto

Sin sustituir los futuros criterios binarios de la SPEC, G4 considera valioso el resultado si una persona del perfil primario puede:

- reconocer qué proyecto está creando;
- comprender que existe una escena y un contexto cartográfico;
- realizar un cambio de navegación visible;
- guardar sin requerir una cuenta;
- reabrir el mismo proyecto; y
- comprobar que el estado definido fue restaurado o recibir un error recuperable y comprensible.

Los umbrales, entornos, datos y métodos de verificación se fijarán en G6 y G8.

## 9. Dependencias y decisiones abiertas

| ID | Cuestión | Etapa de resolución | Estado |
|---|---|---|---|
| `OPEN-INI-0001-01` | Fronteras exactas entre Project, Scene, Map y Project Document | G5 | Abierta |
| `OPEN-INI-0001-02` | Entidades, estados, transiciones y ownership mínimos | G5 | Abierta |
| `OPEN-INI-0001-03` | Motor o adaptador cartográfico | G5 | Abierta |
| `OPEN-INI-0001-04` | Formato, schema y versión persistente | G5 | Abierta |
| `OPEN-INI-0001-05` | Mecanismo de almacenamiento local y recuperación | G5 | Abierta |
| `OPEN-INI-0001-06` | Fuente, licencia y comportamiento offline del mapa base | G5–G6 | Abierta |
| `OPEN-INI-0001-07` | Navegadores, dispositivos y datos de prueba | G6 | Abierta |
| `OPEN-INI-0001-08` | Rendimiento, accesibilidad, fiabilidad y seguridad medibles | G6 | Abierta |
| `OPEN-INI-0001-09` | Errores, contratos y criterios binarios | G5 y G8 | Abierta |

Estas cuestiones no bloquean seleccionar y priorizar el resultado en G4. Sí deben cerrarse en las puertas posteriores indicadas; ninguna podrá completarse desde el código.

## 10. Riesgos iniciales

| Riesgo | Tratamiento requerido |
|---|---|
| Convertir el piloto en una aplicación completa | Preservar exclusiones y dividir incrementos posteriores |
| Elegir tecnología desde G4 | Resolver alternativas y contratos en G5 |
| Confundir guardar con exportar | Mantener persistencia de proyecto separada de Export |
| Depender de red o proveedor | Exigir recorrido local y decidir mapa/offline antes de la SPEC |
| Adoptar el spike histórico | Evaluarlo recién mediante cambio autorizado en G7 |
| Diseñar para todas las ediciones | Mantener el piloto dentro de Community |

## 11. Prioridad

**Prioridad aprobada para incorporación:** primera iniciativa funcional del itinerario, con vigencia operativa sujeta al cierre y publicación de G4.

Fundamento: ofrece valor directo y visible, atraviesa dominios centrales, es local y reversible, evita capacidades futuras y prepara los contratos mínimos que los incrementos siguientes reutilizarán.

## 12. Efectos de la aprobación

La aprobación autoriza incorporar documentalmente `INI-GMS-0001`. Su admisión y priorización operativas comenzarán únicamente con la publicación material de la futura Línea base G4; recién entonces podrá continuar su análisis en G5 y G6. La aprobación por sí sola no produce estos efectos:

- no crearía ni aprobaría `SPEC-GMS-0001`;
- no declararía la iniciativa Lista para Especificar;
- no abriría G5 antes de aprobar y publicar la Línea base G4;
- no elegiría tecnologías o proveedores;
- no modificaría `apps/web`;
- no autorizaría código funcional; y
- no anticiparía G9.

## 13. Condición de vigencia

Esta iniciativa fue aprobada para incorporación mediante D-36 y materializada de forma controlada. Solo quedará admitida y priorizada operativamente con la publicación material de la Línea base G4 exacta que la incluya.
