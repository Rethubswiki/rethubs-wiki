# Gobernanza S+ y mantenimiento periódico

Usar esta referencia antes de activar, modificar o diagnosticar auditorías, descubrimiento, colas o tareas recurrentes.

## Invariantes

1. Producir evidencia, hallazgos y candidatos; no publicar, fusionar, aprobar ni enviar correo sin decisión independiente autorizada.
2. Autenticar cada callback y hacerlo idempotente. Persistir estado, identificador opaco, cadencia, habilitación, última ejecución correcta y razón de fallo.
3. Tratar red, datos ausentes, límite de fuente y ejecución parcial como evidencia incompleta.
4. Limitar fuentes, volumen, tiempo, campos y retención. No recoger datos personales para el catálogo.

## Cadencia base

| Flujo | Disparo | Compuerta persistente | Salida |
|---|---|---|---|
| Auditoría | Cada tres horas si fue aprobada | Fuente y alcance declarados | Hallazgos y cambios de evidencia. |
| Descubrimiento | Revisión diaria | Ejecutar solo tras cuarenta y ocho horas desde la última finalización correcta | Candidatos deduplicados. |

No actualizar la marca de éxito hasta completar la operación y almacenar la trazabilidad. Validar el callback, desplegarlo y después registrar o actualizar la tarea gestionada.

## Revisión humana

La cola debe mostrar evidencia, prioridad, diferencias, razón, fecha y decisión. La métrica administrativa mide el flujo de revisión; nunca equivale a consenso de comunidad ni a calidad intrínseca del recurso.
