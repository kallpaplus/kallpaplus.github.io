# Página web de KALLPA+

Sitio estático (HTML, CSS y JavaScript, sin servidor ni base de datos) que abre el código QR de la etiqueta.

## Contenido de la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal |
| `css/styles.css` | Estilos (colores de marca, diseño adaptable a celular) |
| `js/app.js` | Menú móvil, consulta de lote y datos de contacto |
| `js/lotes.js` | **Registro de lotes**: aquí se agregan los lotes liberados por Calidad |
| `js/config.js` | **Datos de contacto**: correo, WhatsApp y redes (los vacíos no se muestran) |
| `assets/` | Logo, botella y favicon |
| `fonts/` | Tipografías Poppins e Inter (licencia SIL Open Font License) |

## Publicar gratis con GitHub Pages (≈ 10 minutos)

El QR de la etiqueta apunta a **https://kallpaplus.github.io/?src=qr**. Para que funcione:

1. Crear una cuenta (o una organización) de GitHub con el nombre **kallpaplus**.
2. Crear un repositorio público llamado exactamente **kallpaplus.github.io**.
3. Subir **todo el contenido de esta carpeta** (no la carpeta en sí) con *Add file → Upload files* y confirmar con *Commit changes*.
4. Ir a *Settings → Pages*, elegir *Deploy from a branch*, rama `main`, carpeta `/ (root)` y guardar.
5. En uno o dos minutos la página queda publicada en https://kallpaplus.github.io. Escanear el QR para comprobarlo **antes de mandar a imprimir** la etiqueta.

> Si el nombre `kallpaplus` ya está ocupado en GitHub, elijan otro nombre y vuelvan a generar el QR con la nueva dirección (por ejemplo, desde cualquier generador de QR o pidiéndolo de nuevo), y reemplácenlo en la etiqueta antes de imprimirla.

## Agregar un lote nuevo

Abrir `js/lotes.js`, copiar un bloque completo, cambiar el código (formato `KP-AAMMDD-NN`) y los datos, y borrar la línea `ejemplo: true`. Guardar y volver a subir el archivo.

Enlace directo a un lote: `https://kallpaplus.github.io/?lote=KP-261201-01`

## Probar en la computadora

Basta con abrir `index.html` con doble clic en el navegador.
