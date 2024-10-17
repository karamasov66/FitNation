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
// aggrandissement se connecter
const bouton = document.querySelector('#aggrandirseconnecter');

bouton.addEventListener('mouseover', () => {
    bouton.style.transform = 'scale(1.2)'; // Agrandir le bouton
});

bouton.addEventListener('mouseout', () => {
    bouton.style.transform = 'scale(1)'; // Rétablir la taille originale
});

// aggrandissement abonnements
const article1 = document.getElementById('card1');

article1.addEventListener('mouseover', () => {
    article1.style.transform = 'scale(1.06)'; // Agrandir le bouton
});

article1.addEventListener('mouseout', () => {
    article1.style.transform = 'scale(1)'; // Rétablir la taille originale
});

const article2 = document.getElementById('card2');

article2.addEventListener('mouseover', () => {
    article2.style.transform = 'scale(1.06)'; // Agrandir le bouton
});

article2.addEventListener('mouseout', () => {
    article2.style.transform = 'scale(1)'; // Rétablir la taille originale
});

const article3 = document.getElementById('card3');

article3.addEventListener('mouseover', () => {
    article3.style.transform = 'scale(1.06)'; 
});

article3.addEventListener('mouseout', () => {
    article3.style.transform = 'scale(1)'; 
});

// aggrandissement coach

const coach1 = document.getElementById('coach1');

    coach1.addEventListener('mouseover', () => {
    coach1.style.transform = 'scale(1.06)'; 
});

    coach1.addEventListener('mouseout', () => {
    coach1.style.transform = 'scale(1)'; 
});
const coach2 = document.getElementById('coach2');

    coach2.addEventListener('mouseover', () => {
    coach2.style.transform = 'scale(1.06)'; 
});

    coach2.addEventListener('mouseout', () => {
    coach2.style.transform = 'scale(1)'; 
});
const coach3 = document.getElementById('coach3');

    coach3.addEventListener('mouseover', () => {
    coach3.style.transform = 'scale(1.06)'; 
});

    coach3.addEventListener('mouseout', () => {
    coach3.style.transform = 'scale(1)'; 
});
// aggrandissement tarif
// const tarif1 = document.getElementById('coach3');

//     coach3.addEventListener('mouseover', () => {
//     coach3.style.transform = 'scale(1.2)'; 
// });

//     coach3.addEventListener('mouseout', () => {
//     coach3.style.transform = 'scale(1)'; 
// });
window.addEventListener('mouseout', () => {
    const elements = document.getElementById('tarif1');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.opacity = '1';
        }
    });
});

const nutritionimage = document.getElementById('nutritionimage');

nutritionimage.addEventListener('mouseover', () => {
    nutritionimage.style.transform = 'scale(1.3)'; 
});

nutritionimage.addEventListener('mouseout', () => {
    nutritionimage.style.transform = 'scale(1)'; 
});
const join = document.getElementById('join');

join.addEventListener('mouseover', () => {
    join.style.transform = 'scale(1.06)'; 
});

join.addEventListener('mouseout', () => {
    join.style.transform = 'scale(1)'; 
});
const nosservices = document.getElementById('titlegym');

nosservices.addEventListener('mouseover', () => {
    nosservices.style.transform = 'scale(1.06)'; 
});

nosservices.addEventListener('mouseout', () => {
    nosservices.style.transform = 'scale(1)'; 
});


// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault(); // Empêche le comportement par défaut du lien
//         const targetId = this.getAttribute('href'); // Récupère l'ID de la section cible
//         const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

//         // Fait défiler vers l'élément cible
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//     });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.getElementById('navbar1').offsetHeight; // Récupère la hauteur de la barre de navigation

        // Fait défiler vers l'élément cible, en tenant compte du décalage
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

