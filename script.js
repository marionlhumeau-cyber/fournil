console.log("Le script est chargé");
// 1. Récupérer le bouton et le tableau 
const boutonHoraires = document.querySelector("#bouton-horaires"); 
const tableHoraires = document.querySelector("#table-horaires"); 
 
// 2. Écouter le clic sur le bouton 
boutonHoraires.addEventListener("click", function () { 
tableHoraires.classList.toggle("cache");
});

// Etape 5 et 6
let nombre = 0; // on crée une variable nombre qui peut changer
const compteur = document.querySelector("#compteur");  // on récupère le compteur du panier sur la page
const boutons = document.querySelectorAll(".produit-bouton"); // on récupère tous les boutons "produit-bouton" de la page
 
for (const bouton of boutons) { 
  bouton.addEventListener("click", function () { 
    nombre = nombre +1; // pour chaque bouton de la liste boutons, s'il y a un clic on ajoute +1 à la variable nombre 
    compteur.textContent = nombre; // et le compteur du panier affiche la variable nombre à jour
  console.log("Ajouté au panier");
  });
} 