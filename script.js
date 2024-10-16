const slide = [
	"ring-de-boxe.jpg",
	"Octogone.jpg",
	"coach-exercices.jpg",
	"poids-haltere.jpg",
	"tapis-roulant.jpg",
];
let numero = 0;

function ChangeSlide(sens) {
	numero = numero + sens;
	if (numero < 0) numero = slide.length - 1;
	if (numero > slide.length - 1) numero = 0;

	document.getElementById("slide").src = "assets/img/" + slide[numero];
}
