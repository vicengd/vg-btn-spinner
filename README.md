#vg-btn-spinner

vg-btn-spinner es un modulo de Angular.js para utilizar en Ionic Framework. Proporciona una manera sencilla de poner un botón en
estado de "cargando" hasta que el proceso finaliza.

## Instalación
1. Descargar el zip o clonar el repositorio de https://github.com/vicentegarcia/...

2. Incluir en el index.html el fichero javascript

	```
	<script src="src/vgbtnspinner.min.js"></script>
	```

3. Inyectar el modulo vgBtnSpinner

	```
	angular.module('app', ['ionic', 'controllers', 'vgBtnSpinner'])
	```

## Uso
En el template llamar a la directiva de esta manera

	```
	<vg-btn-spinner
	text="Login"
	vgclass="btncss"
	icon="lines"
	fn-on-start="fnStart()"
	fn-on-end="fnEnd()">
	</vg-btn-spinner>
	```

## Configuración
- text: Texto del botón
- vgclass: Clase que queremos aplicar en el botón
- icon: icono para el spinner
- fn-on-start: Función definida en nuestro controlador que se llama al comenzar el proceso (click en el botón)
- fn-on-end: Función definida en nuestro controlador que se llama al terminar el proceso

## Licencia
The MIT License (MIT) Copyright © [Vicente García](http://vicentegarcia.com)