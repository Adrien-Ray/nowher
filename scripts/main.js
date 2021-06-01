// MENU HAMBURGER
const btn = document.getElementById('hamb_menu_btn');
const dropbtn1 = document.getElementById('menumobile');
let cross1 = document.getElementById('barre1');
let cross2 = document.getElementById('barre2');
let cross3 = document.getElementById('barre3');
const btn1 = document.getElementById('dropbtn1');
const menu1 = document.getElementById('dropcontent1');
let btn2 = document.getElementById('dropbtn2');
const menu2 = document.getElementById('dropcontent2');
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

btn1.addEventListener('click',unroll1);

function unroll1(){
    if (counter == '1') {
        menu1.style.display = 'block';       
        counter = '2';
        console.log(counter);
        }
        else{
        menu1.style.display = 'none';       
        counter = '1';
        console.log(counter);
    }
}

btn2.addEventListener('click',unroll2);

function unroll2(){
    if (counter == '1') {
        menu2.style.display = 'block';       
        counter = '2';
        console.log(counter);
        }
        else{
        menu2.style.display = 'none';       
        counter = '1';
        console.log(counter);
    }
}
