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
window.onload = function(){
    document.body.style.fontSize="2rem";
    document.getElementsByClassName('sidebar').style.fontSize="0.5rem";
    document.getElementsByClassName('sidebar').style.backgroundColor="red";
    } 