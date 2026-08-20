> **Aviso de precisión.** Una respuesta HTTP no prueba que un recurso sea seguro, legítimo, funcional o apropiado. Del mismo modo, un fallo puntual no prueba que esté abandonado.

**Etiquetas:** [maintenance](Wiki-Structure-and-Maintenance) · [evidence](Evidence-and-Review-Policy) · [workflow](Publishing-Workflow)

# Reporte y validación de enlaces

## Reportar una anomalía

Una propuesta de corrección incluye la página afectada, la URL exacta, fecha y hora aproximadas, resultado observado y una alternativa solo si está respaldada por una fuente canónica. No copies capturas con datos personales ni incluyas credenciales, instaladores o correspondencia privada.[1] [2]

## Estados de revisión

| Situación | Acción editorial |
|---|---|
| Enlace responde y coincide con la fuente declarada | Registrar revisión si la ficha necesita actualización. |
| Error puntual, bloqueo regional o desafío anti-bot | Marcar como observación para una segunda comprobación; no declarar caída. |
| Proyecto anuncia archivo, traslado o cierre | Actualizar con enlace de evidencia y cambiar el estado tras revisión. |
| Enlace sospechoso, redirección inesperada o contenido incompatible | Retirar el enlace de la recomendación pública y abrir revisión editorial. |

## Validación reproducible

El flujo de propuestas ejecuta `node scripts/validate-wiki.mjs`. Este comando valida las páginas esenciales, la estructura de enlaces internos, las fichas JSON y patrones básicos de secretos. No accede a cuentas externas ni realiza cambios en contenido.[3]

Una comprobación externa de enlaces debe ejecutarse con una frecuencia acordada y debe generar un informe revisable, no una modificación automática. Para elegir esa frecuencia se deben equilibrar cobertura, carga sobre los sitios externos y capacidad humana de revisar los hallazgos.[1]

## Referencias

1. [Política de evidencia y revisión](Evidence-and-Review-Policy)
2. [Proponer y corregir](Contribute-and-Correct)
3. [Validación de la Wiki](../README#validación-local)
