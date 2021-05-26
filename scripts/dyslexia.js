// b et p surligner différentes color

// text de la page => ??
/* let chaine = document.getElementsByClassName('p');
console.log(chaine); */
let chaine = "fhiubh hfuid hkhvi giumZUTGJB oizmqth mpazritvnccvsxcezqfp moqhs mpzfqsbp isu vbvbcp kbih vippvp bpcvmoh hgfgbvp.";
/* var reg=new RegExp("(b)", "g");
console.log("Chaîne d'origine : " + chaine);
console.log("Chaîne traitée : " + chaine.replace(reg,"<span style='background-color:yellow'>$1</span>") + "<br>"); */

var chaineSpanb = chaine.replace(/[b]/g, '===b===');
var chaineSpand = chaineSpanb.replace(/[d]/g, '===d===');
var chaineSpanb2 = chaineSpand.replace(/===b===/g, '<span class="dysb">b</span>');
var chaineSpand2 = chaineSpanb2.replace(/===d===/g, '<span class="dysb">d</span>');
console.log(chaineSpand2); 



// SEPARATE TO THE AUTRE SCRIPT

let content = document.activeElement.innerHTML;
console.log(content);