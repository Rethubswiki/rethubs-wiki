# Experiencia local-primero y producto editorial

Usar esta referencia al modificar la aplicación pública, las ediciones, la agenda o la participación comunitaria.

## Datos y límites

| Dato | Ubicación predeterminada | Regla |
|---|---|---|
| Favoritos, filtros, idioma, notas, etiquetas y agenda | `localStorage` o almacenamiento local equivalente | No enviar a la propuesta, Wiki ni catálogo. Exponer borrado y exportación. |
| Copias de notas | Archivo cifrado creado en el navegador | Derivar clave de contraseña, usar cifrado autenticado y no conservar la contraseña. |
| Comentarios, valoraciones y propuestas | Servicio protegido con datos mínimos | Etiquetar como comunidad; no usar como evidencia editorial. |
| Evidencia, recursos y cronología | Catálogo o base editorial | Separar de los datos de perfil y de las preferencias locales. |

## Ediciones y lenguaje

Mantener rutas, copias, estados vacíos y navegación de cada edición separados cuando se haya definido aislamiento lingüístico. No insertar selectores ni enlaces cruzados para resolver una traducción. Distinguir idioma de interfaz, idioma de disponibilidad del recurso e idioma solicitado aún no soportado.

## Interacción accesible

Ofrecer navegación íntegra por teclado, etiquetas ARIA, foco visible, mensajes de confirmación no intrusivos, búsqueda con botón de limpiar, estados de carga y estado editorial vacío. Respetar `prefers-reduced-motion`; no depender de animación, color o gesto para comunicar un cambio.

## Rendimiento de gama baja

Preferir búsqueda, filtros y favoritos locales; paginar o virtualizar listas grandes; cargar de forma diferida módulos pesados; evitar movimiento continuo y cálculos por render; conservar una ruta funcional sin red. Verificar anchos móviles y equipos con procesadores limitados antes de declarar la experiencia completa.

## Contenido generado y comunidad

Ubicar comentarios, estrellas, síntesis de IA y evidencia editorial en bandas visuales distintas. Identificar la procedencia, fecha y alcance de cada bloque. Nunca crear datos de comunidad ficticios para completar una interfaz.
