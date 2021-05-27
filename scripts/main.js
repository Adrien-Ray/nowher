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