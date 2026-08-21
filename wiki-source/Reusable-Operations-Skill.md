# Mega habilidad modular para operar La Bandita y Rethubs Wiki

> Esta página documenta una guía reutilizable para organizar el trabajo; no constituye evidencia sobre ningún recurso del catálogo ni sustituye una decisión editorial.

La habilidad **Orquestador del ecosistema abierto de La Bandita** reúne el proceso usado para mantener una aplicación editorial y su Wiki pública sin mezclar fuentes con conclusiones, preferencias privadas con registros editoriales, ni ramas de revisión con publicaciones. Su versión controlada vive en [`skills/bandita-open-ecosystem-orchestrator`](../skills/bandita-open-ecosystem-orchestrator/README.md).

## Mapa de módulos

| Módulo | Cuándo se aplica | Resultado verificable |
|---|---|---|
| Evidencia y catálogo | Altas, correcciones, exclusiones, plataformas, idiomas y atribución | Ficha trazable con fuente, fecha, estado y límites explícitos. |
| Experiencia local-primero | Filtros, favoritos, notas, agenda, idiomas, accesibilidad e interfaz | Preferencias privadas conservadas en el navegador, con exportación y borrado claros. |
| Participación comunitaria | Comentarios, valoraciones, propuestas y resúmenes | Aportes separados visualmente de la evidencia editorial y sin contenido fabricado. |
| Gobernanza S+ | Auditorías, descubrimiento, colas y cadencia | Evidencia y candidatos deduplicados para decisión humana, no publicación automática. |
| Puente de publicación | Wiki, GitHub, ramas, PRs, fusiones y versionado | Validación, rama revisable, autorización específica y comprobación posterior de `main`. |
| Entrega | Cualquier cambio cerrado | Alcance implementado, pruebas, publicación, pendientes e incertidumbres diferenciados. |

## Principios de operación

La habilidad exige clasificar los reclamos como **confirmados**, **declarados por la fuente**, **inferidos** o **desconocidos**. Las comunidades e índices se atribuyen como rutas de descubrimiento o contexto; una fuente canónica respalda los hechos sobre un proyecto. Los recursos no aprobados se mantienen como `needs-review` y no se presentan como recomendados.

Las ediciones públicas aisladas preservan sus rutas y copias sin cruces no autorizados. Los favoritos, notas, filtros, agenda y preferencias se mantienen locales por defecto. Las funciones comunitarias y los resúmenes automáticos se identifican como tales y no alteran el registro editorial.

## Límite de automatización

La modalidad S+ puede revisar fuentes, normalizar datos y crear candidatos con una compuerta temporal persistente. No puede aprobar fichas, publicar contenido, fusionar cambios ni avisar a personas sin una decisión separada. Los errores o fuentes incompletas se registran como evidencia incompleta, nunca como confirmación.

## Publicación segura

Antes de una escritura remota, se inspeccionan el destino, la rama principal, las solicitudes abiertas, el acceso y la historia común. Se valida primero en una rama de revisión. Solo una confirmación concreta autoriza enviar, abrir una PR, fusionar, liberar o modificar una rama. Tras una fusión autorizada, se vuelve a comprobar el contenido de `main`.

## Uso junto con esta Wiki

La guía no reemplaza la [política de evidencia y revisión](Evidence-and-Review-Policy), las [fuentes y atribuciones](Sources-and-Attribution), ni el [flujo de publicación](Publishing-Workflow). Las conecta en un orden operativo para que los cambios de catálogo, producto y documentación conserven límites comprobables.
