// b et p surligner différentes color

// ex

/* var chaine="Les chiens et les chiennes, les chats et les oiseaux";
var reg=new RegExp("(chien)", "g");
document.write("Chaîne d'origine : " + chaine + "<br>");
document.write("Chaîne traitée : " + chaine.replace(reg,"<span style='background-color:yellow'>$1</span>") + "<br>"); */

//recup en string les contenus visés
let testContent = "azertyuiopmlkjhgfdsqwxcvbn";
//événement
//si événement function
      //regex sur contenu visé
      let ifdyslex = new RegExp("(b)",'<span class="red">b</span>');
      let skiAuraSurDocument = testContent.replace(ifdyslex,testContent);
console.log('skiAuraSurDocument');
