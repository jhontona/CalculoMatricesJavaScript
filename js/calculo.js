function calcularMatriz2X2() {
	var x1, x2, y1, y2, r1, r2;
	var determinante, determinanteX, determinanteY, x, y;
	x1 = $("#x12").val();
	x2 = $("#x22").val();
	y1 = $("#y12").val();
	y2 = $("#y22").val();
	r1 = $("#r12").val();
	r2 = $("#r22").val();
	determinante = (x1 * y2) + ( -1 * (x2 * y1));
	determinanteX = (r1 * y2) + ( -1 * (r2 * y1));
	determinanteY = (x1 * r2) + ( -1 * (x2 * r1));
	x = determinanteX / determinante;
	y = determinanteY / determinante;
	$("#resultado2x2").empty();
	$("#resultado2x2").append( '<h3>Determinante <span class="label label-default">' + determinante + '</span></h3>' );
	$("#resultado2x2").append( '<h3>Determinante en X <span class="label label-default">' + determinanteX + '</span></h3>' );
	$("#resultado2x2").append( '<h3>Determinante en Y <span class="label label-default">' + determinanteY + '</span></h3>' );
	$("#resultado2x2").append( '<h3>X <span class="label label-success">' + x + '</span></h3>' );
	$("#resultado2x2").append( '<h3>Y <span class="label label-success">' + y + '</span></h3>' );
}

function calcularMatriz3X3() {
	var x1, x2, x3, y1, y2, y3, z1, z2, z3, r1, r2, r3;
	var determinante, determinanteX, determinanteY, determinanteZ, x, y, z;
	x1 = $("#x13").val();
	x2 = $("#x23").val();
	x3 = $("#x33").val();
	y1 = $("#y13").val();
	y2 = $("#y23").val();
	y3 = $("#y33").val();
	z1 = $("#z13").val();
	z2 = $("#z23").val();
	z3 = $("#z33").val();
	r1 = $("#r13").val();
	r2 = $("#r23").val();
	r3 = $("#r33").val();
	determinante = ((x1*y2*z3)+(x2*y3*z1)+(x3*y1*z2))-((z1*y2*x3)+(z2*y3*x1)+(z3*y1*x2));
	determinanteX = ((r1*y2*z3)+(r2*y3*z1)+(r3*y1*z2))-((z1*y2*r3)+(z2*y3*r1)+(z3*y1*r2));
	determinanteY = ((x1*r2*z3)+(x2*r3*z1)+(x3*r1*z2))-((z1*r2*x3)+(z2*r3*x1)+(z3*r1*x2));
	determinanteZ = ((x1*y2*r3)+(x2*y3*r1)+(x3*y1*r2))-((r1*y2*x3)+(r2*y3*x1)+(r3*y1*x2));
	x = determinanteX / determinante;
	y = determinanteY / determinante;
	z = determinanteZ / determinante;
	$("#resultado3x3").empty();
	$("#resultado3x3").append( '<h3>Determinante <span class="label label-default">' + determinante + '</span></h3>' );
	$("#resultado3x3").append( '<h3>Determinante en X <span class="label label-default">' + determinanteX + '</span></h3>' );
	$("#resultado3x3").append( '<h3>Determinante en Y <span class="label label-default">' + determinanteY + '</span></h3>' );
	$("#resultado3x3").append( '<h3>Determinante en Z <span class="label label-default">' + determinanteZ + '</span></h3>' );
	$("#resultado3x3").append( '<h3>X <span class="label label-success">' + x + '</span></h3>' );
	$("#resultado3x3").append( '<h3>Y <span class="label label-success">' + y + '</span></h3>' );
	$("#resultado3x3").append( '<h3>Z <span class="label label-success">' + z + '</span></h3>' );
}