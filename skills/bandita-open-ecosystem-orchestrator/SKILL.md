---
name: bandita-open-ecosystem-orchestrator
description: Orquesta productos, catálogos y Wikis de entretenimiento abierto con evidencia verificable, privacidad local, ediciones aisladas, revisión humana y publicación segura. Úsala para operar o ampliar La Bandita, Rethubs Wiki u otro ecosistema de anime, manga, cómic, novelas, video, audio, descargas y autoalojamiento; para incorporar S+, GitHub, participación comunitaria o interfaces editoriales sin confundir candidatos con contenido aprobado.
---

# Orquestador del ecosistema abierto de La Bandita

Usar esta habilidad como **núcleo de coordinación**, no como sustituto de las habilidades especializadas. Convertir una solicitud amplia en carriles verificables, conservar los límites de datos y ejecutar cada carril en orden. No tratar una lista, una propuesta, una rama o una automatización como publicación editorial.

## Contrato innegociable

1. Mantener separadas las ediciones públicas por idioma, las herramientas administrativas y los datos de participación. No añadir enlaces cruzados entre interfaces aisladas si el producto los prohíbe.
2. Clasificar todo en **confirmado**, **declarado por la fuente**, **inferencia** o **desconocido**. No elevar una inferencia a hecho.
3. Conservar filtros, favoritos, notas, agenda, etiquetas, telemetría opcional de idiomas y copias cifradas en el navegador por defecto. Explicar su almacenamiento, exportación y borrado.
4. No fabricar reseñas, estrellas, testimonios, actividad de usuarios, imágenes oficiales, compatibilidades ni versiones.
5. Separar evidencia editorial, aportes de comunidad y contenido generado. Etiquetar los resúmenes automáticos y no presentarlos como verificación.
6. Permitir que la automatización cree evidencia y candidatos; exigir decisión editorial para aprobar, publicar o promocionar recursos.
7. Pedir confirmación concreta inmediatamente antes de cualquier escritura remota sensible: `push`, PR, fusión, release, publicación o cambio forzado.
8. No incluir secretos, tokens, correos personales, datos de sesión ni contenido privado en repositorios, documentación, capturas o entregables.

## Elegir el carril

| Si la solicitud trata de | Ejecutar primero | Cargar después |
|---|---|---|
| Recursos, extensiones, plataformas o idiomas | Evidencia y catálogo | `references/editorial-evidence.md` |
| Explorar, comparar, importar, imprimir, agenda o notas | Experiencia local-primero | `references/local-first-experience.md` |
| Comentarios, propuestas, valoraciones o perfil | Participación con límites | `references/local-first-experience.md` |
| Auditorías, descubrimiento, colas o cadencia S+ | Gobernanza periódica | `references/splus-governance.md` y la guía del entorno |
| Wiki, ramas, PRs, merges, espejos o versión de la habilidad | Puente de publicación | `references/publication-bridge.md` |
| Varios carriles a la vez | Flujo completo | Cargar solo las referencias necesarias |

## Flujo completo

1. **Delimitar.** Registrar audiencia, repositorio, destino, plataformas, idiomas, privacidad, automatización y criterio de éxito. Actualizar el plan y añadir cada cambio como tarea pendiente antes de modificar archivos.
2. **Inventariar.** Leer el contrato de datos, la taxonomía, las rutas, pruebas, migraciones, `todo.md`, estado Git y remotos. Detectar duplicados, entradas obsoletas y cambios locales antes de crear algo.
3. **Clasificar.** Ubicar cada requisito en catálogo, interfaz local, servidor, comunidad, automatización o publicación externa. Escoger la arquitectura menos conectada que satisfaga la necesidad.
4. **Verificar.** Usar una fuente canónica para los hechos que se publiquen. Registrar la fecha, licencia cuando exista, actividad, estado de archivo, lanzamiento solo si aparece en la fuente y el límite de lo que no pudo comprobarse.
5. **Implementar.** Mantener los contratos compartidos, las ediciones aisladas, el rendimiento móvil y los estados de carga, vacío y error. Para datos persistentes, seguir migración primero, control de acceso y pruebas de transición.
6. **Revisar.** Ejecutar pruebas unitarias relevantes, tipos, compilación y una comprobación visual responsiva. Para la Wiki, validar estructura, fichas, atribución y enlaces. Marcar tareas completas únicamente después de la evidencia de validación.
7. **Preparar.** Crear una rama de revisión, un resumen de alcance y una nota explícita sobre estados `needs-review`, exclusiones y dudas. No promocionar candidatos.
8. **Publicar.** Tras confirmación específica, enviar la rama, abrir una PR, comprobar sus verificaciones y fusionar con el método autorizado. Verificar después la rama principal real, no solo la copia local.
9. **Entregar.** Indicar qué se implementó, qué se publicó, qué se validó, qué permanece local, qué requiere revisión humana y qué incertidumbres quedan.

## Integraciones y habilidades complementarias

| Necesidad | Instrucción obligatoria |
|---|---|
| Catálogo open source | Leer `open-source-entertainment-catalogs` y `open-entertainment-ecosystem-ops` antes de investigar o redactar fichas. |
| Investigación de software disponible | Usar fuentes canónicas; recurrir a `github-gem-seeker` solo para localizar soluciones maduras, nunca como evidencia suficiente. |
| Trabajo con GitHub, App, MCP o conector | Leer `manus-config`, revisar la configuración de la sesión y consultar el control de publicación de esta habilidad. |
| Recurrente, webhook, sincronización o tareas S+ | Leer `automation-and-scheduling` y la guía de actualización periódica aplicable antes de planificar o codificar. |
| Aplicación web | Leer el README del tipo de proyecto, mantener `todo.md`, pruebas y punto de control. |
| IA, imágenes, voz o archivos | Cargar únicamente la habilidad de integración específica antes de programar esa capacidad. |

## Reglas de decisión de alto riesgo

### Evidencia y catálogo

Aplicar `references/editorial-evidence.md`. Una comunidad, tienda o índice puede descubrir candidatos; no sustituye a la fuente del proyecto. Si falta licencia, actividad, fuente o estado, conservar el candidato fuera de la promoción o marcarlo con un límite explícito.

### Experiencia de producto

Aplicar `references/local-first-experience.md`. Diseñar para dispositivos de bajo rendimiento: filtrado local eficiente, carga progresiva, interacción por teclado, foco visible, contraste, movimiento reducible y datos personales fuera de propuestas y repositorios.

### S+

Aplicar `references/splus-governance.md`. Cada ejecución debe ser autenticada, limitada e idempotente. La auditoría puede ser frecuente; el descubrimiento debe respetar una compuerta persistente. Un fallo es evidencia incompleta, no una decisión editorial.

### Repositorio y Wiki

Aplicar `references/publication-bridge.md` antes de cualquier escritura remota. Si la rama local tiene una historia distinta o `main` avanzó, crear un árbol de trabajo desde `origin/main` y trasladar únicamente el commit revisado. No forzar ramas para resolver historias divergentes.

## Cierre obligatorio

Antes de entregar, comprobar que se cumplan todas estas condiciones:

- [ ] Las tareas completadas en `todo.md` están marcadas y las pendientes siguen visibles.
- [ ] Los hechos publicados tienen fuente, fecha y clasificación de evidencia.
- [ ] Las preferencias y notas privadas no entraron en la Wiki, propuesta ni repositorio.
- [ ] Las ediciones aisladas siguen sin enlaces o copia cruzada no autorizada.
- [ ] Pruebas, compilación, validación de Wiki y revisión visual cubren el alcance real.
- [ ] La rama principal se verificó después de cualquier fusión autorizada.
- [ ] La entrega separa implementación, publicación, revisión pendiente e incertidumbre residual.

## Recursos incluidos

| Recurso | Cargar cuando |
|---|---|
| `references/editorial-evidence.md` | Se investiguen o editen recursos, taxonomías, fuentes y atribución. |
| `references/local-first-experience.md` | Se construya interfaz, privacidad local, comunidad, idiomas, accesibilidad o rendimiento. |
| `references/splus-governance.md` | Se active, corrija o audite S+, tareas periódicas y colas. |
| `references/publication-bridge.md` | Se prepare una rama, una PR, una fusión o el versionado de una habilidad. |
| `templates/review-brief.md` | Se redacte la nota de revisión previa a una publicación externa. |
