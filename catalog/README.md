# Catálogo público estructurado

Este directorio ofrece una vía **opcional y pública** para representar fichas verificadas sin sustituir la lectura humana de `wiki-source/`. Cada archivo dentro de `catalog/resources/` representa un recurso que ya ha superado revisión editorial.

No se almacenan perfiles, comentarios, notas de moderación, historiales de búsqueda, tokens, direcciones de correo ni otra información personal. Las propuestas no revisadas se gestionan mediante solicitudes de cambio y no se convierten en registros públicos.[1] [2]

## Cómo añadir una ficha

Una ficha se crea como `catalog/resources/<id>.json` y debe cumplir `schemas/resource-record.schema.json`. El comando `node scripts/validate-wiki.mjs` comprueba su estructura antes de una revisión. La validación técnica no sustituye la revisión de evidencias, licencias, estado de mantenimiento o exactitud editorial.[1]

Las URLs de `canonicalUrl` y `evidence` deben usar HTTPS y pertenecer a un dominio de [`allowed-external-hosts.txt`](./allowed-external-hosts.txt). Para proponer un nuevo dominio, explica su relación con el recurso y aporta una fuente canónica en la solicitud de cambio. La persona revisora decide si se añade a la lista; el validador no convierte esa decisión en una aprobación automática.

> **Límite de publicación.** El catálogo no es una API de perfiles ni un sistema de recomendaciones. Es una exportación portable de datos editoriales que ya son aptos para la Wiki.

## Campos mínimos

| Campo | Propósito |
|---|---|
| `id` | Identificador estable y legible del recurso. |
| `name` | Nombre que el proyecto usa públicamente. |
| `kind` | Rol técnico controlado: cliente, servidor, tienda, directorio, fuente, comunidad o herramienta. |
| `canonicalUrl` | URL canónica atribuible al proyecto o servicio. |
| `summary` | Descripción breve, neutral y verificable. |
| `tags`, `platforms`, `languages` | Vocabulario de descubrimiento y compatibilidad declarada. |
| `reviewStatus`, `lastReviewed`, `evidence` | Estado editorial, fecha de revisión y rutas de evidencia. |

## Comandos reproducibles

```bash
node scripts/validate-wiki.mjs
node scripts/export-wiki.mjs --output /tmp/rethubs-wiki-export.json
```

El primer comando detiene una propuesta con estructura inválida. El segundo genera un manifiesto JSON de las páginas Markdown y de las fichas estructuradas, listo para descargar o consumir localmente; no exporta datos de personas.

## Referencias

1. [Política de evidencia y revisión](../wiki-source/Evidence-and-Review-Policy)
2. [Proponer y corregir](../wiki-source/Contribute-and-Correct)
