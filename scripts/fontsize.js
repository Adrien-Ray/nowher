document.addEventListener('DOMContentLoaded',fontSize());
function fontSize(){
    document.body.className += "jsFontSize";
    document.body.style.zoom=1.4;this.blur();
} 
/****************************************************************
 ***************  NE FONCTIONNE PAS SOUS FIREFOX ****************
 **** https://developer.mozilla.org/en-US/docs/Web/CSS/zoom *****
 ****************************************************************/
