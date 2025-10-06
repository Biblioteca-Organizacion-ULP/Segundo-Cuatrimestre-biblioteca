[[selectores]]
# Resumen con tabla
---

| Etiqueta       | Descripción                               | Ejemplo                                               |
| -------------- | ----------------------------------------- | ----------------------------------------------------- |
| `<header>`     | Encabezado de página o sección            | `<header><h1>Mi sitio</h1></header>`                  |
| `<nav>`        | Sección de navegación                     | `<nav><a href="#">Inicio</a></nav>`                   |
| `<main>`       | Contenido principal (solo uno por página) | `<main><p>Texto principal</p></main>`                 |
| `<section>`    | Agrupa contenido temático                 | `<section><h2>Tema</h2></section>`                    |
| `<article>`    | Contenido independiente/autónomo          | `<article><h2>Noticia</h2></article>`                 |
| `<aside>`      | Contenido complementario                  | `<aside>Publicidad</aside>`                           |
| `<footer>`     | Pie de página o sección                   | `<footer>© 2025 Valen</footer>`                       |
| `<h1>...<h6>`  | Títulos jerárquicos                       | `<h2>Subtítulo</h2>`                                  |
| `<p>`          | Párrafo de texto                          | `<p>Hola mundo</p>`                                   |
| `<strong>`     | Énfasis fuerte (importante)               | `<strong>Atención</strong>`                           |
| `<em>`         | Énfasis leve (cursiva semántica)          | `<em>palabra</em>`                                    |
| `<blockquote>` | Cita larga en bloque                      | `<blockquote>Texto citado</blockquote>`               |
| `<q>`          | Cita corta en línea                       | `<q>Frase</q>`                                        |
| `<abbr>`       | Abreviatura con significado               | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| `<time>`       | Fecha u hora                              | `<time datetime="2025-10-01">1 Oct 2025</time>`       |
| `<figure>`     | Contenedor de imagen/ilustración          | `<figure><img src="foto.jpg"></figure>`               |
| `<figcaption>` | Descripción de figura                     | `<figcaption>Foto de viaje</figcaption>`              |
| `<mark>`       | Resalta texto relevante                   | `<mark>Importante</mark>`                             |
| `<address>`    | Información de contacto                   | `<address>valen@example.com</address>`                |

---
# Elementos semánticos en HTML

Los elementos semánticos son etiquetas que **describen el significado del contenido**, en lugar de solo definir su apariencia.  Mejoran la **accesibilidad**, el **SEO** y la **organización del código**.
## Estructura principal de una página

- **`<header>`** → Encabezado de la página o sección (logo, navegación, título).
- **`<nav>`** → Define la navegación principal (menús, enlaces de secciones).
- **`<main>`** → Contenido principal de la página (solo uno por documento).
- **`<section>`** → Agrupa un bloque de contenido temáticamente relacionado.
- **`<article>`** → Contenido independiente y autocontenido (ej: noticia, post de blog).
- **`<aside>`** → Contenido secundario o complementario (ej: barra lateral, widgets).
- **`<footer>`** → Pie de página (contacto, derechos de autor, enlaces finales).

---
## Texto y significado

- **`<h1>` a `<h6>`** → Títulos jerárquicos.
- **`<p>`** → Párrafo de texto.
- **`<strong>`** → Texto con énfasis **fuerte** (importante).
- **`<em>`** → Texto con énfasis leve (cursiva semántica).
- **`<blockquote>`** → Citas largas.
- **`<q>`** → Citas cortas en línea.
- **`<abbr>`** → Abreviaturas.  
  Ejemplo: `<abbr title="HyperText Markup Language">HTML</abbr>`
- **`<time>`** → Fechas u horas específicas.

---
## Contenido multimedia y agrupación

- **`<figure>`** → Contenedor de imágenes, gráficos o ilustraciones.
- **`<figcaption>`** → Descripción o pie de imagen dentro de `<figure>`.
- **`<mark>`** → Texto resaltado por relevancia.
- **`<address>`** → Información de contacto.

---

# Ejemplo de HTML semántico

Este ejemplo muestra cómo usar **todos los elementos semánticos** más importantes en una página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Completo de HTML Semántico</title>
</head>
<body>

  <!-- Encabezado principal -->
  <header>
    <h1>Mi Sitio Web</h1>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#articulos">Artículos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <!-- Contenido principal -->
  <main>

    <!-- Sección de bienvenida -->
    <section id="inicio">
      <h2>Bienvenido</h2>
      <p>
        Este es un ejemplo de cómo usar <strong>HTML semántico</strong>.
        Aquí demostramos el uso de varias etiquetas <em>importantes</em>.
      </p>
      <p>
        El sitio fue creado el <time datetime="2025-10-01">1 de octubre de 2025</time>.
      </p>
    </section>

    <!-- Sección de artículos -->
    <section id="articulos">
      <h2>Últimos artículos</h2>

      <!-- Primer artículo -->
      <article>
        <header>
          <h3>La importancia del HTML semántico</h3>
          <time datetime="2025-09-15">15 de septiembre de 2025</time>
        </header>
        <p>
          El HTML semántico ayuda a los buscadores y a la accesibilidad web.
        </p>
        <blockquote>
          “El buen código es su propia mejor documentación.”
        </blockquote>
        <p>
          Como dijo <q>Steve McConnell</q>, escribir código claro es fundamental.
        </p>
        <figure>
          <img src="ejemplo.png" alt="Ejemplo semántico">
          <figcaption>Ejemplo de estructura semántica con HTML5</figcaption>
        </figure>
      </article>

      <!-- Segundo artículo -->
      <article>
        <header>
          <h3>Abreviaturas y accesibilidad</h3>
        </header>
        <p>
          Cuando uses abreviaturas como 
          <abbr title="HyperText Markup Language">HTML</abbr> 
          o 
          <abbr title="Cascading Style Sheets">CSS</abbr>, 
          es útil aclarar su significado.
        </p>
        <p>
          También podés resaltar algo importante con <mark>texto destacado</mark>.
        </p>
      </article>

    </section>
  </main>

  <!-- Contenido secundario -->
  <aside>
    <h2>Enlaces relacionados</h2>
    <ul>
      <li><a href="#">Curso de HTML</a></li>
      <li><a href="#">Guía de accesibilidad</a></li>
    </ul>
    <p>Publicidad o widgets van aquí.</p>
  </aside>

  <!-- Pie de página -->
  <footer>
    <p>© 2025 Mi Sitio Web</p>
    <address>
      Contacto: <a href="mailto:valen@example.com">valen@example.com</a>
    </address>
  </footer>

</body>
</html>
