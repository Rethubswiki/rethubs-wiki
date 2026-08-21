# Puente de publicación y versionado

Usar esta referencia antes de cambiar una rama remota, crear una PR, fusionar, liberar o versionar una habilidad en la Wiki.

## Secuencia segura

1. Confirmar repositorio, remoto, rama por defecto, acceso, solicitudes abiertas y estado del árbol local.
2. Ejecutar los validadores pertinentes antes de comprometer cambios. No ocultar un error de validación en la nota de revisión.
3. Crear una rama de revisión con nombre fechado y alcance claro.
4. Si la rama local proviene de una historia distinta o `main` avanzó, crear un árbol de trabajo nuevo desde `origin/main`; trasladar solo el commit revisado mediante `cherry-pick`. Resolver conflictos de forma explícita o detenerse.
5. Preparar una nota con alcance, evidencia, estados `needs-review`, exclusiones, validación y límites. Usar `templates/review-brief.md`.
6. Solicitar confirmación concreta antes de `push`, PR, fusión, release, espejo o modificación forzada. Una confirmación para revisar no equivale a confirmar una fusión.
7. Después de la autorización, enviar la rama, abrir la PR, corregir su cuerpo si hizo falta, comprobar las verificaciones y fusionar con el método autorizado.
8. Consultar la rama principal remota y ejecutar el validador desde esa referencia. Informar el enlace de PR, commit integrado y resultado.

## Protección de secretos y comandos

No transmitir secretos por argumentos, commits, cuerpos de PR ni archivos. Evitar interpolar contenido Markdown con comillas que permitan expansión del shell; para textos extensos usar un archivo temporal controlado o argumentos que preserven literalmente el contenido.

## Versionado de la habilidad

Validar primero el paquete local de habilidad. Copiar a la documentación versionada únicamente el material que no contenga datos sensibles, rutas privadas, IDs de tareas, claves ni registros personales. Tratar esa copia como documentación: su publicación remota sigue requiriendo confirmación específica.
