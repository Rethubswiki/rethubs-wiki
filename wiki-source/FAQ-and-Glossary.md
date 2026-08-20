> **Orientación rápida.** Esta FAQ describe la Wiki documental publicada hoy. Las funciones marcadas como futuras no están disponibles todavía.

**Etiquetas:** [orientation](Tags-and-Discovery#editorial-pages) · [community](Community-Participation) · [maintenance](Wiki-Structure-and-Maintenance)

# Preguntas frecuentes y glosario

## Preguntas frecuentes

### ¿Cómo encuentro un recurso?

Comienza por [Explore](Explore), las páginas temáticas y [Tags and Discovery](Tags-and-Discovery). Las fichas verificadas pueden añadirse además al catálogo estructurado, pero no existe todavía búsqueda semántica, historial personal ni sugerencias basadas en perfiles.[1]

### ¿Cómo propongo una corrección o un recurso?

Sigue [Contribute and Correct](Contribute-and-Correct), usa la [plantilla de ficha](Resource-Template) y aporta una URL canónica con evidencia. La propuesta se revisa antes de incorporarse a la Wiki.[2]

### ¿Puedo comentar, valorar o crear un perfil?

No en esta Wiki. No se almacenan perfiles ni comentarios para evitar publicar datos personales sin un sistema de consentimiento y moderación. Estas capacidades se consideran una futura aplicación independiente.[3]

### ¿Cómo se publica una actualización?

El contenido revisado entra al repositorio y el flujo de publicación copia `wiki-source/` a la Wiki pública al fusionarse en `main`. Consulta [Publishing Workflow](Publishing-Workflow) y [Operations Status](Operations-Status-2026-08-20) para el estado verificado.[4]

### ¿Puedo descargar el contenido?

Sí. El repositorio contiene las fuentes Markdown y el comando `node scripts/export-wiki.mjs --output <archivo.json>` crea un manifiesto portable de las páginas y fichas públicas. No incluye cuentas ni datos de personas.[5]

### ¿Cómo reporto un enlace roto?

Indica la página, el enlace exacto, la fecha y el resultado observado. No cambies un recurso a “caído” solo por un fallo temporal o geográfico; una persona revisora contrasta el hallazgo y registra el resultado.[6]

## Glosario

| Término | Significado en esta Wiki |
|---|---|
| Código abierto | Software cuyo código fuente se publica bajo términos que permiten inspección y, según la licencia, uso, modificación o redistribución. La ficha debe enlazar evidencia del proyecto. |
| FOSS | Software libre y de código abierto. El término no sustituye la comprobación de licencia ni de procedencia. |
| Ficha | Registro editorial que describe un recurso, su rol, evidencia, compatibilidad declarada y fecha de revisión. |
| Fuente canónica | URL del proyecto, documentación o distribución que permite contrastar un dato. |
| Evidencia | Material enlazado que respalda una afirmación editorial; puede requerir revisión adicional. |
| Estado editorial | Clasificación como `verified`, `needs-review` o `archived`; no es una garantía de seguridad. |
| PWA | Aplicación web progresiva. La Wiki Markdown actual no es una PWA instalable. |
| Sincronización | En esta Wiki, el flujo comprobado es de las fuentes versionadas a la Wiki publicada; no existe sincronización bidireccional automática. |

## Referencias

1. [Explorar](Explore)
2. [Proponer y corregir](Contribute-and-Correct)
3. [Capacidades documentadas y hoja de ruta](Documented-Capabilities-and-Roadmap)
4. [Flujo de publicación](Publishing-Workflow)
5. [Catálogo público estructurado](../catalog/README)
6. [Política de evidencia y revisión](Evidence-and-Review-Policy)
