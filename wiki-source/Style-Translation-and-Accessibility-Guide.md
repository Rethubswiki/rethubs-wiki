> **Guía operativa.** Una ficha útil permite verificar una afirmación, comprender su alcance y encontrar su fuente sin imponer una conclusión al lector.

**Etiquetas:** [orientation](Tags-and-Discovery#editorial-pages) · [evidence](Evidence-and-Review-Policy) · [accessibility](Visual-Language-and-Accessibility)

# Guía de estilo, traducción y accesibilidad

## Redacción verificable

Escribe primero el **rol técnico** y después el nombre del recurso. Distingue un cliente de una fuente, una tienda de un directorio y un servidor de una interfaz. Declara la evidencia detrás de cada afirmación relevante y escribe “no confirmado” cuando una fuente primaria no respalde el dato.[1]

| Práctica | Adecuada | Evitar |
|---|---|---|
| Estado | “La ficha fue revisada el 20 de agosto de 2026; el estado se declara como necesita revisión.” | “Siempre funciona” o “es completamente seguro”. |
| Procedencia | “Descubierto mediante X; contrastado con el proyecto oficial Y.” | Atribuir a una lista comunitaria hechos que solo puede confirmar el proyecto. |
| Compatibilidad | “El proyecto declara Android; no se verificó iOS.” | Inferir todas las plataformas por una captura o un comentario. |
| Lenguaje | Frases breves, neutralidad y enlaces descriptivos. | Promesas, lenguaje de presión o descripciones ambiguas como “la mejor app”. |

## Etiquetas y taxonomía

Usa etiquetas minúsculas con guiones, sin duplicar el rol técnico con el nombre de una comunidad. Incluye una etiqueta temática, una de función y, cuando sea comprobable, una de plataforma o idioma. Consulta [Tags and Discovery](Tags-and-Discovery) antes de crear una etiqueta nueva.

## Traducciones revisables

Cada traducción mantiene los hechos de la ficha original y adapta solamente el idioma y los ejemplos culturales necesarios. Conserva los enlaces canónicos, fechas ISO (`AAAA-MM-DD`) y el estado editorial. Si un término no tiene equivalente seguro, explica la decisión en el cambio propuesto en lugar de inventar precisión.

| Idioma editorial inicial | Código recomendado | Regla |
|---|---|---|
| Español | `es` o `es-419` cuando proceda | Usar español claro de Latinoamérica; marcar expresamente una variante regional si cambia el significado. |
| English | `en` | Mantener nombres técnicos oficiales sin traducirlos innecesariamente. |
| Português | `pt-BR` o `pt-PT` | Indicar la variante cuando la ficha se traduzca. |
| Français | `fr` | Mantener las URL y fechas sin localizarlas. |

## Accesibilidad para Markdown

Los títulos se organizan en orden jerárquico; los enlaces describen su destino; las tablas tienen encabezados claros; y las imágenes, si se añaden, requieren texto alternativo que aporte información. No dependas únicamente de color, iconos o animaciones para expresar estado. El contenido debe conservar sentido sin CSS, JavaScript ni imágenes.[2]

## Revisión antes de proponer

1. Comprueba que la URL canónica use HTTPS y que corresponda al recurso citado.
2. Explica qué campo cambia y qué evidencia lo respalda.
3. Ejecuta `node scripts/validate-wiki.mjs` si modificas la estructura o añades una ficha JSON.
4. Declara incertidumbres y deja la aprobación editorial a una persona revisora.

## Referencias

1. [Política de evidencia y revisión](Evidence-and-Review-Policy)
2. [Lenguaje visual y accesibilidad](Visual-Language-and-Accessibility)
