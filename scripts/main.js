// MENU HAMBURGER
const btn = document.getElementById('hamb_menu_btn');
const dropbtn1 = document.getElementById('menumobile');
let cross1 = document.getElementById('barre1');
let cross2 = document.getElementById('barre2');
let cross3 = document.getElementById('barre3');
let counter = '1';

btn.addEventListener('click',unroll);

function unroll(){
    if (counter == '1') {
        dropbtn1.style.display = 'flex';       
        counter = '2';
        console.log(counter);
        cross1.classList.toggle("cross1transform");
        cross3.classList.toggle("cross2transform");
        cross2.style.display = 'none';
        }
        else{
        dropbtn1.style.display = 'none';       
        counter = '1';
        console.log(counter);
        cross1.style.width = '60px';
        btn.style.backgroundColor ='none';
        cross1.classList.toggle("cross1transform");
        cross3.classList.toggle("cross2transform");
        cross2.style.display = 'block';
 
    }
}