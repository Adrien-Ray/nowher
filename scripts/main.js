// MENU HAMBURGER

const btn = document.getElementById('hamb_menu_btn');
const dropbtn1 = document.getElementById('dropbtn1');
const dropbtn2 = document.getElementById('dropbtn2');
const dropcontent1 = document.getElementById('dropcontent1');
const dropcontent2 = document.getElementById('dropcontent2');
let cross1 = document.getElementById('barre1');
let cross2 = document.getElementById('barre2');
let cross3 = document.getElementById('barre3');
let counter = 'closed';


btn.addEventListener('click',unroll);

function unroll(){
    if (counter == 'closed') {
        dropbtn1.style.display = 'block';       
        dropbtn2.style.display = 'block';
        dropcontent1.style.display = 'block';
        dropcontent2.style.display = 'block';
        counter = 'open';
        console.log(counter);
        cross1.classList.toggle("cross1transform");
        cross3.classList.toggle("cross2transform");
        cross2.style.display = 'none';
        }
        else{
        dropbtn1.style.display = 'none';       
        dropbtn2.style.display = 'none';
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
