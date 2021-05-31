<<<<<<< HEAD

/* fonction btn size ! */
let p = document.getElementById('p');

let fontSizeBtn = document.getElementById('fontSizeBtn');
let fontSizeBtnValue = 1;

fontSizeBtn.addEventListener('click' ,function fontChangeSize()  {



    
if (fontSizeBtnValue == 0) {
    p.style.fontSize= '' ;
    fontSizeBtnValue = 1;
    console.log(fontSizeBtnValue);
} else if (fontSizeBtnValue == 1){
    fontSizeBtnValue = 0;
    p.style.fontSize= '2rem' ;
    console.log(fontSizeBtnValue);
} else {
    console.log(fontSizeBtnValue);
}



    
})
/* ------------------------------------------------------------------------ ! */

/* Fonction vocal ! */








/* ------------------------------------------------------------------------ ! */
=======
document.addEventListener('DOMContentLoaded',fontSize());
function fontSize(){
    document.body.className += "jsFontSize";
    document.body.style.zoom=1.4;this.blur();
} 
/****************************************************************
 ***************  NE FONCTIONNE PAS SOUS FIREFOX ****************
 **** https://developer.mozilla.org/en-US/docs/Web/CSS/zoom *****
 ****************************************************************/
>>>>>>> main
