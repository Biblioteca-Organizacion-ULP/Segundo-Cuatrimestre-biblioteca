-  Elemento:
```
p {
	color: red;
}
```
-  Id (#):
```
#pEspecial {
	color: red;
}
```
-  Clase (.):
```
.parrafo {
	color: red;	
}
```
-  Agrupamiento (,):
```
h1, h2, h3 {
	color: red;
}
</style>
```
-  Pseudo-elementos (::): Aplica estilos a **partes** del elemento o inserta contenido.
```
p::first-letter {
	text-decoration: underline;
}
```
-  Pseudo-clases (:): Aplica estilos según el **estado** o **posición** del elemento.
```
p:hover {
	color: hotpink;
}
```
-  Combinadores:
· Descendiente: Selecciona todos los elementos de tipo **a** que están dentro de **p**, sin importar la profundidad.
```
p a {
	color: red;
}
<body>
	<p>
		<a href="ejemplo1.html">Ejemplo 1</a>
		<a href="ejemplo2.html">Ejemplo 2</a>
	</p>
</body>
```
· Hijo: Selecciona todos los elementos de tipo **a** que son hijos directos de **p**.
```
p > a {
	color: red;
}
<body>
	<p>
		<a href="ejemplo1.html>Ejemplo 1</a>
		<strong><a href="ejemplo2.html>Ejemplo 2</a></strong> // No es hijo.
	</p>
</body>
```
· Adyacente: Selecciona todos los elementos de tipo **h2** que cumplan las dos siguientes condiciones:
*h1 y h2 deben de ser hermanos*
*h2 debe de aparecer inmediatamente después de h1*
```
h1 + h2 {
	color: red;
}

<body>
	<h1>Título</h1>
	<h2>Subtítulo</h2>
	<h2>Otro subtítulo</h2> // No es adyacente.
</body>
```
· Hermano general:  selecciona todos lo elementos de tipo **h2** que cumplan las dos siguientes condiciones:
*h1 y h2 deben ser hermanos*
*h2 debe de aparecer ~~inmediatamente~~ después*
```
h1 ~ h2 {
	color: red;
}
<body>
	<h1>Título</h1>
	<h2>Subtítulo</h2>
	<h2>Otro subtítulo</h2> 
</body>
```
-  Selector + propiedad + valor
```
a[href=ejemplo.html]:link {
	color: red;
}
<ul class="red-grapes">
	<li><a href="cs.htm">Cabernet Sauvignon</a></li>
	<li><a href="me.htm">Merlot</a></li>
	<li><a href="pn.htm">Pinot Noir</a></li>
</ul>
```