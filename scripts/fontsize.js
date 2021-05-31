<<<<<<< HEAD
/* fonction btn size ! */
/* let text = document.getElementsByClassName('articledemence__texte');
let fontSizeBtn = document.getElementById('fontSizeBtn');
let fontSizeBtnValue = 1;
fontSizeBtn.addEventListener('click' ,function fontChangeSize()  {
if (fontSizeBtnValue == 0) {
    text.style.fontSize= '30px' ;
    fontSizeBtnValue = 1;
    console.log(fontSizeBtnValue);
} else if (fontSizeBtnValue == 1){
    fontSizeBtnValue = 0;
    text.style.fontSize= '100px' ;
    console.log(fontSizeBtnValue);
} else {
    console.log(fontSizeBtnValue);
}
}); */

    document.body.style.fontSize="2rem";/* 
    document.body.getElementsByClassName('sidebar').style.fontSize="0.5rem";
    document.body.getElementsByClassName('sidebar').style.backgroundColor="red"; */
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
>>>>>>> c7153cf39782b5c60c51e4ae4cf61f326886f2de
