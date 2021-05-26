
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