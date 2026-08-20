> **Estado operativo verificable.** Esta página distingue entre el funcionamiento comprobado de la documentación, la configuración declarada del despliegue y las funcionalidades que no están presentes en este repositorio. No convierte una intención de arquitectura en una característica publicada.

**Etiquetas:** [orientation](Tags-and-Discovery#editorial-pages) · [maintenance](Tags-and-Discovery#editorial-pages) · [evidence](Evidence-and-Review-Policy)

# Estado operativo y arquitectura — 20 de agosto de 2026

## Identidad y límite de publicación

**Rethubs Wiki** es la fuente pública revisable de la Bandita Open Sauce y de la identidad editorial **La Pequeña Ballena Celeste**. Documenta recursos de software abierto para lectura, manga, anime y vídeo, cómics, novelas gráficas, audio y herramientas relacionadas. Cada entrada debe describir evidencia, procedencia y límites; no representa una garantía de disponibilidad, seguridad, legalidad o compatibilidad.[1] [2]

La identidad **Blue iOS** es una guía de interfaz para la aplicación compañera y para futuros soportes visuales. En esta Wiki, el contenido se mantiene como Markdown legible y versionado. Las notas privadas, preferencias locales, sesiones, perfiles de usuario y aportaciones no revisadas no se publican como archivos de la Wiki.[1] [3]

## Estado comprobado

| Componente | Estado | Evidencia o límite |
|---|---|---|
| Repositorio editorial | ✅ Confirmado | El destino público disponible es [`Rethubswiki/rethubs-wiki`](https://github.com/Rethubswiki/rethubs-wiki), no `Rethubs/Wiki`, cuya URL devuelve 404.[4] |
| Rama publicada | ✅ Confirmada | `main` apunta a `5d79ae3710f99872bfdf7bcd281e87e9b9ab5629`, con una fusión de la PR #2 el 19 de agosto de 2026 a las 20:51:03 UTC.[5] |
| Publicación Markdown → GitHub Wiki | ✅ Correcta para `main` | La última ejecución de publicación de páginas aprobadas para el SHA de `main` concluyó con éxito.[6] |
| GitHub Pages | ✅ Construido; ⚠️ dominio no listo | La compilación para el mismo SHA concluyó con éxito. Pages declara `rethubs-ecosystem.dedyn.io`, pero HTTPS no está forzado y la URL declarada sigue siendo HTTP.[7] [8] |
| Cambios en revisión | ⚠️ Pendientes | La PR #3 está abierta, limpia y con verificación CodeRabbit satisfactoria; no forma parte de `main` hasta que se fusione.[9] |
| `rethubs.wiki` y `rethubs.ecosystem.apps` | ❌ No comprobados como destinos | No constan como dominio de Pages en la configuración revisada. |
| Perfil, comentarios y valoraciones públicos | ❌ No implementados en esta Wiki | La fuente editorial no contiene un sistema público de perfiles ni almacenes JSON de comentarios. Mantenerlos fuera protege el límite entre datos personales, moderación y documentación.[1] [3] |

## Mapa solicitado frente a la arquitectura real

| Elemento solicitado | Estado en `rethubs-wiki` | Ruta o decisión actual |
|---|---|---|
| Automatización de publicación | ✅ Parcial | Existe `.github/workflows/publish-wiki.yml`; publica páginas de `wiki-source/` después de una fusión en `main`.[10] |
| Contenido principal | ✅ Presente | `wiki-source/` contiene páginas Markdown temáticas, políticas, plantillas y rutas de navegación. |
| `indice.json`, `recursos/`, `categorias/`, `etiquetas/` | ⚠️ Modelo distinto | La Wiki usa páginas Markdown y una taxonomía controlada; no existe un índice JSON ni carpetas de fichas por recurso. |
| `public/`, CSS, JavaScript y assets de una aplicación estática | ❌ No presente | No se debe afirmar una aplicación estática publicada desde este repositorio sin introducirla, probarla y revisarla como proyecto real. |
| `perfiles/` y `comentarios/` públicos | ❌ Excluidos deliberadamente | No se publican perfiles, avatares, notas ni comentarios sin un modelo de consentimiento, moderación y revisión independiente. |
| API, OAuth y webhooks | ❌ No presente | No hay puentes de autenticación ni de sincronización bidireccional en el árbol revisado. |
| Sincronización GitHub ↔ Web | ⚠️ Unidireccional | La automatización comprobada es `main` → GitHub Wiki. No hay evidencia de sincronización bidireccional automática.[10] |

## Directrices editoriales

Cada ficha pública debe identificar el recurso, su URL canónica, su rol, etiquetas, estado de evidencia y fecha de revisión. Las fuentes comunitarias pueden acreditarse para descubrimiento o contexto, pero la comprobación de estado, licencia, distribución y compatibilidad debe anclarse en el proyecto original cuando sea posible.[2] [11]

La redacción debe ser clara y cercana a la bandita sin sustituir precisión por entusiasmo. Debe separar lo **confirmado**, lo **declarado por el proyecto**, lo **inferido** y lo **desconocido**. Las correcciones se proponen mediante cambios revisables; los hallazgos automatizados no se publican por sí solos.[1] [2]

## Hoja de ruta de publicación responsable

| Prioridad | Acción | Criterio de cierre |
|---|---|---|
| 1 | Fusionar o cerrar la PR #3 tras revisión humana. | El estado ejecutivo se integra sin contradicciones con `main`. |
| 2 | Corregir DNS y activar HTTPS para el dominio configurado de Pages. | El hostname resuelve y Pages puede forzar HTTPS. |
| 3 | Decidir si el repositorio seguirá siendo una Wiki documental o si alojará además una aplicación estática. | Se documentan modelo de datos, mantenimiento, pruebas y límite de privacidad antes de añadir `public/`, API o autenticación. |
| 4 | Si se aprueba un catálogo con datos estructurados, introducirlo por rama de revisión con validación de esquema y procedencia. | El índice referencia únicamente fichas publicables y cada ficha cumple el contrato editorial. |
| 5 | Publicar guía de contribución, reporte de enlaces caídos, preguntas frecuentes y traducciones revisadas. | Todas las páginas quedan enlazadas desde la portada y conservan etiquetas de evidencia. |

> **Protección del historial.** El destino autorizado es este repositorio, pero una actualización forzada de `main` podría eliminar el registro editorial y las revisiones existentes. Por ello, toda reestructuración se prepara en una rama y se integra mediante revisión humana; el *force push* no es una vía de publicación para la Wiki.

## Referencias

1. [Política de evidencia y revisión](Evidence-and-Review-Policy)
2. [Plantilla de fichas de recursos](Resource-Template)
3. [Estructura y mantenimiento de la Wiki](Wiki-Structure-and-Maintenance)
4. [Repositorio oficial disponible: Rethubswiki/rethubs-wiki](https://github.com/Rethubswiki/rethubs-wiki)
5. [Commit principal verificado](https://github.com/Rethubswiki/rethubs-wiki/commit/5d79ae3710f99872bfdf7bcd281e87e9b9ab5629)
6. [Publicación aprobada de la Wiki](https://github.com/Rethubswiki/rethubs-wiki/actions/runs/32300779499)
7. [Compilación y despliegue de GitHub Pages](https://github.com/Rethubswiki/rethubs-wiki/actions/runs/32300778259)
8. [Configuración declarada de GitHub Pages](https://api.github.com/repos/Rethubswiki/rethubs-wiki/pages)
9. [PR #3: informe ejecutivo verificable](https://github.com/Rethubswiki/rethubs-wiki/pull/3)
10. [Flujo de publicación de la Wiki](https://github.com/Rethubswiki/rethubs-wiki/blob/main/.github/workflows/publish-wiki.yml)
11. [Fuentes y atribución](Sources-and-Attribution)
