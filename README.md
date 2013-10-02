Jquery Opacity Input
====================

Problema:

	<input type="text" class="opacity80">

	...

	.opacity80{
		-webkit-opacity:.8;
		-moz-opacity:.8;
		opacity:.8;
	}

Nuestra caja de texto tiene una opacidad del 80%, pero también lo tiene el texto que escribimos en el

¿Cómo solucionarlo?

	<script src="vendor/jquery.min.js"></script>
	<script src="vendor/jquery-ui-1.10.3.custom.min.js"></script>
	<script src="vendor/jquery.opacity.input.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('input.opacity80').opacityinput();
		});
	</script>

Posibles opciones:

	$('input.opacity80').opacityinput({
		opacity: 0.5, //la opacidad deseada
		bacgroundColor: "#454545" //el color de fondo
	});