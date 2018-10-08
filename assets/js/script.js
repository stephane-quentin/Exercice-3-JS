// var prenom = prompt("Entrez votre prénom :"); //Demande du prénom via une boite du dialogue qui est mis dans une variable
// alert("Bonjour, " + prenom); // affichage d'une boite de dialogue avec Bonjour, (ce qui est entre"") et le contenu de la variable
var firstName = prompt ("Entrez votre prénom :")
if(isNaN(firstName)){ //isNaN is Not a Number
  alert('Bonjour ' + firstName);
}
  else {
    alert('Erreur!');
};
