# Recurso cartográfico Natural Earth de G7

Este directorio materializa únicamente las capas físicas 1:110m aprobadas por ADR-047 y D-67: Land 4.0.0, Ocean 4.0.0 y Coastline 4.1.0.

`sources.json` fija procedencia, commit inmutable, versiones, tamaños y huellas SHA-256. `scripts/build-natural-earth.mjs` verifica los tres insumos locales, descarta sus propiedades no necesarias y genera un único GeoJSON determinista en EPSG:4326 con orden longitud–latitud. La verificación ordinaria no accede a la red.

Los datos de Natural Earth son de dominio público. GeoMotion Studio conserva voluntariamente el crédito “Made with Natural Earth”. El recurso no incluye límites administrativos, nombres, carreteras, puntos poblados ni teselas remotas.
