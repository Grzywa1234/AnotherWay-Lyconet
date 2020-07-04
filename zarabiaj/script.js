/*
navbar span & sub menu styling
 */
const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const menuBtn4 = document.querySelector('.menuBtn4');
const menuBtn5 = document.querySelector('.menuBtn5');
const arrone = document.querySelector('.arrone');
const arrtwo = document.querySelector('.arrtwo');
const arrthree = document.querySelector('.arrthree');
const arrfour = document.querySelector('.arrfour');
const arrfive = document.querySelector('.arrfive');

const subOne = document.querySelector('.sub1');
const subTwo = document.querySelector('.sub2');
const subThree = document.querySelector('.sub3');

menuBtn.addEventListener('mouseover', opacityArrOne);
menuBtn.addEventListener('mouseout', opacityOneZero);
menuBtn2.addEventListener('mouseover', opacityArrTwo);
menuBtn2.addEventListener('mouseout', opacityTwoZero);
menuBtn3.addEventListener('mouseover', opacityArrThree);
menuBtn3.addEventListener('mouseout', opacityThreeZero);
menuBtn4.addEventListener('mouseover', opacityArrFour);
menuBtn4.addEventListener('mouseout', opacityFourZero);
menuBtn5.addEventListener('mouseover', opacityArrFive);
menuBtn5.addEventListener('mouseout', opacityFiveZero);

subOne.addEventListener('mouseover', opacityArrOne);
subOne.addEventListener('mouseout', opacityOneZero);
subTwo.addEventListener('mouseover', opacityArrTwo);
subTwo.addEventListener('mouseout', opacityTwoZero);
subThree.addEventListener('mouseover', opacityArrThree);
subThree.addEventListener('mouseout', opacityThreeZero);

function opacityArrOne() {
    arrone.style.opacity = '1';
    subOne.style.display = 'block';
}

function opacityArrTwo() {
    arrtwo.style.opacity = '1';
    subTwo.style.display = 'block';
}

function opacityArrThree() {
    arrthree.style.opacity = '1';
    subThree.style.display = 'block';
}

function opacityArrFour() {
    arrfour.style.opacity = '1';
}

function opacityArrFive() {
    arrfive.style.opacity = '1';
}

function opacityOneZero(){
    arrone.style.opacity = '0';
    subOne.style.display = 'none';
}

function opacityTwoZero(){
    arrtwo.style.opacity = '0';
    subTwo.style.display = 'none';
}

function opacityThreeZero(){
    arrthree.style.opacity = '0';
    subThree.style.display = 'none';
}

function opacityFourZero(){
    arrfour.style.opacity = '0';
}

function opacityFiveZero(){
    arrfive.style.opacity = '0';
}




/* login display */ 
const password = document.querySelector('.password');
const login = document.querySelector('.login');
const content = document.querySelector('.content')
const word = 'presidentteam';

password.addEventListener('input', hideLogin)

function hideLogin(e) {
    if (e.target.value == word){
        login.style.display = 'none';
        content.style.display = 'block';
    }
}


