> **Mapa de alcance.** Esta página convierte las solicitudes avanzadas en compromisos documentales verificables. Un elemento marcado como “aplicación futura” no está publicado en esta Wiki y no debe presentarse como existente.

**Etiquetas:** [orientation](Tags-and-Discovery#editorial-pages) · [maintenance](Tags-and-Discovery#editorial-pages) · [evidence](Evidence-and-Review-Policy)

# Capacidades documentadas y hoja de ruta

## Principio de separación

La Wiki pública conserva conocimiento editorial, fuentes, taxonomías, plantillas, historial de Git y exportaciones de contenido. Las cuentas, perfiles, comentarios, reputación, historial de búsqueda, moderación de personas, sincronización privada y analítica individual necesitan una aplicación con consentimiento, retención, seguridad y moderación propios; no se trasladan a archivos Markdown públicos.[1] [2]

| Área solicitada | Entrega documental actual | Estado y límite |
|---|---|---|
| Búsqueda y descubrimiento | Etiquetas, páginas temáticas, rutas de fuentes, metadatos estructurados y mapa editorial. | **Disponible como navegación documental.** La búsqueda semántica, el historial y el autocompletado contextual pertenecen a una aplicación futura. |
| Filtros guardados, tendencias y perfiles | No se almacenan en la Wiki. | **Excluido deliberadamente.** Implicaría datos de usuario y consentimiento. |
| Comunidad y moderación | Código de conducta, ruta de propuestas y revisión humana por cambios. | **Parcial.** No hay comentarios públicos, reputación, foros, roles ni sanciones automáticas. |
| Edición colaborativa | Plantilla de ficha, contrato JSON opcional, historial Git y revisión por solicitud de cambio. | **Disponible.** No hay editor web autenticado. |
| Verificación de enlaces | Procedimiento de reporte y validador de estructura en cada propuesta. | **Disponible para estructura interna.** La frecuencia de comprobación externa se decide antes de programarla. |
| Móvil, PWA y sin conexión | Markdown portable y manifiesto de exportación. | **Parcial.** PWA, caché y gestos requieren una aplicación estática separada. |
| Idiomas y accesibilidad | Guía de traducción, glosario, estructura semántica Markdown y enlaces descriptivos. | **Disponible documentalmente.** Un selector dinámico, detección de navegador y preferencias visuales requieren interfaz web. |
| Privacidad y seguridad | Exclusión de datos personales, procedencia de enlaces y revisión de secretos. | **Disponible.** Avisos de salida, eliminación de cuentas y control de perfiles no aplican sin cuentas. |
| Estado, API y portabilidad | Página de operaciones, historial Git y exportación JSON reproducible. | **Disponible para contenido.** No existe API REST, webhooks ni bot comunitario. |
| Rendimiento y temas Blue iOS | Markdown ligero y recomendación visual para superficies futuras. | **Documentado.** No hay CSS, PWA ni temas ejecutables en este repositorio. |

## Datos públicos que sí pueden entrar

El directorio [`catalog/`](../catalog/README) permite añadir fichas ya verificadas que cumplan un esquema común. El contrato contiene nombre, papel técnico, URL canónica, resumen, etiquetas, plataformas, idiomas, estado de revisión y evidencia. Excluye explícitamente los campos personales y de moderación.[1] [3]

## Cambios que requieren decisión arquitectónica previa

Las siguientes funciones no se activan solo con una página Markdown: búsqueda semántica, cuentas, comentarios, roles, reportes de usuarios, cuarentena de contenido, PWA, modo sin conexión, sincronización en segundo plano, detección de idioma, API REST, webhooks, bots, analítica de personas y temas personalizables. Si se decide construirlas, deben vivir en una aplicación con modelo de datos, política de privacidad, pruebas y un proceso de despliegue independiente.[2]

> **Regla de publicación.** Las comprobaciones automáticas pueden señalar una anomalía; no cambian el estado editorial de una ficha ni publican una corrección sin revisión humana.

## Prioridades documentales

| Prioridad | Entrega | Criterio de aceptación |
|---|---|---|
| Alta | Contrato de catálogo, validación en propuestas, FAQ, glosario y reporte de enlaces. | La documentación se navega desde la portada y los comandos de validación son reproducibles. |
| Media | Fichas estructuradas verificadas, exportación de contenido y traducciones revisadas. | Cada ficha enlaza evidencia, fecha y estado editorial. |
| Futura | Aplicación de búsqueda, comunidad, PWA e integración de clientes. | Se aprueba una arquitectura separada de la Wiki, con controles de privacidad y moderación. |

## Referencias

1. [Contrato de catálogo público](../catalog/README)
2. [Estado operativo y arquitectura](Operations-Status-2026-08-20)
3. [Política de evidencia y revisión](Evidence-and-Review-Policy)
