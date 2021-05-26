<<<<<<< HEAD
let fontSizeBtn = document.getElementById('fontSizeBtn');
let fontSizeBtnValue
=======
// MENU HAMBURGER

const btn = document.getElementById('hamb_menu_btn');
const menu = document.getElementById('classic_menu');
let cross1 = document.getElementById('barre1');
let cross2 = document.getElementById('barre2');
let cross3 = document.getElementById('barre3');
const btn2 = document.getElementById('rubrique1');
const btn3 = document.getElementById('rubrique2');
const sousMenu1 = document.getElementById('sous-menu1');
const sousMenu2 = document.getElementById('sous-menu2');
let counter = 'closed';


btn.addEventListener('click',unroll);

function unroll(){
    if (counter == 'closed') {
        menu.style.display = 'block';
        sousMenu1.style.display = 'block';
        sousMenu2.style.display = 'block';
        counter = 'open';
        console.log(counter);
        cross1.classList.toggle("cross1transform");
        cross3.classList.toggle("cross2transform");
        cross2.style.display = 'none';
        }
        else{
        menu.style.display = 'none';
        sousMenu1.style.display = 'none';
        sousMenu2.style.display = 'none';
        counter = 'closed';
        console.log(counter);
        cross1.style.width = '60px';
        btn.style.backgroundColor ='none';
        cross1.classList.toggle("cross1transform");
        cross3.classList.toggle("cross2transform");
        cross2.style.display = 'block';

/*         cross1.style.left = '0';
        cross1.style.top = '0';
        cross1.classList.toggle("nico");
        cross1.style.transform = 'rotate(0deg)'; */

/*         cross3.style.transform = 'rotate(0deg)';
        cross3.style.width = '60px';
        cross3.style.bottom = '0'; */
    }
}

/* window.addEventListener('resize', function(){

}); */

/* if(screen.width <=800){
    menu.style.display = 'block'; 
} */

btn2.addEventListener('click',unroll2);


function unroll2(){
    if (counter == 'closed') {
        sousMenu1.style.display = 'block';
        counter = 'open';
        console.log(counter);
        }
        else{
        sousMenu1.style.display = 'none';
        counter = 'closed';
        console.log(counter);

/*         cross1.style.left = '0';
        cross1.style.top = '0';
        cross1.classList.toggle("nico");
        cross1.style.transform = 'rotate(0deg)'; */

/*         cross3.style.transform = 'rotate(0deg)';
        cross3.style.width = '60px';
        cross3.style.bottom = '0'; */
    }
}

btn3.addEventListener('click',unroll3);

function unroll3(){
    if (counter == 'closed') {
        sousMenu2.style.display = 'block';
        counter = 'open';
        console.log(counter);
        }
        else{
        sousMenu2.style.display = 'none';
        counter = 'closed';
        console.log(counter);

/*         cross1.style.left = '0';
        cross1.style.top = '0';
        cross1.classList.toggle("nico");
        cross1.style.transform = 'rotate(0deg)'; */

/*         cross3.style.transform = 'rotate(0deg)';
        cross3.style.width = '60px';
        cross3.style.bottom = '0'; */
    }
}
>>>>>>> f0b1258e3bb35b11930631d8f9b1df7cd56c9927
