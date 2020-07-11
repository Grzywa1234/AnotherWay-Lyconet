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


/* menu show & hide  */

const showBtn = document.querySelector('.hamburger');
const hideBtn = document.querySelector('.menuBtn6');
const subBtn = document.querySelector('.subclose2');
const subBtn2 = document.querySelector('.subclose1');
const subBtn3 = document.querySelector('.subclose3');
const menu = document.querySelector('nav');


/* media queries for menu */

let mql = window.matchMedia("(max-width: 900px)");
let maxql = window.matchMedia("(min-width: 901px)")

mql.addEventListener("change", (e) =>{

    if(e.matches){

        query()
    }
});

maxql.addEventListener("change", (e) => {

    if(e.matches){
        queryBig()
    }
});

function query() {
    if(mql.matches){

        showBtn.addEventListener('click', showMenu);
        hideBtn.addEventListener('click', hideMenu);
        subBtn.addEventListener('click', hideSub);
        subBtn2.addEventListener('click', hideSub);
        subBtn3.addEventListener('click', hideSub);
        

        menuBtn.addEventListener('click', showSub1);
        menuBtn2.addEventListener('click', showSub2);
        menuBtn3.addEventListener('click', showSub3);


        function showMenu() {
         menu.style.transform = 'translateX(100%)';
        }

        function hideMenu() {
          menu.style.transform = 'translateX(0)';
        }

        function hideSub() {
         subOne.style.display = 'none';
          subTwo.style.display = 'none';
          subThree.style.display = 'none';
        }

        function showSub1() {
            subOne.style.display = 'block';
        }

        function showSub2() {
            subTwo.style.display = 'block';
        }

        function showSub3() {
            subThree.style.display = 'block';
        }



        menuBtn.removeEventListener('mouseover', opacityArrOne);
        menuBtn.removeEventListener('mouseout', opacityOneZero);
        menuBtn2.removeEventListener('mouseover', opacityArrTwo);
        menuBtn2.removeEventListener('mouseout', opacityTwoZero);
        menuBtn3.removeEventListener('mouseover', opacityArrThree);
        menuBtn3.removeEventListener('mouseout', opacityThreeZero);
        menuBtn4.removeEventListener('mouseover', opacityArrFour);
        menuBtn4.removeEventListener('mouseout', opacityFourZero);
        menuBtn5.removeEventListener('mouseover', opacityArrFive);
        menuBtn5.removeEventListener('mouseout', opacityFiveZero);

        subOne.removeEventListener('mouseover', opacityArrOne);
        subOne.removeEventListener('mouseout', opacityOneZero);
        subTwo.removeEventListener('mouseover', opacityArrTwo);
        subTwo.removeEventListener('mouseout', opacityTwoZero);
        subThree.removeEventListener('mouseover', opacityArrThree);
        subThree.removeEventListener('mouseout', opacityThreeZero);


    }
}



function queryBig(){
    if(maxql.matches){
        subBtn.style.display = 'none';
        subBtn2.style.display = 'none';
        subBtn3.style.display = 'none'; 
        
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

        
        menuBtn.removeEventListener('click', opacityArrOne);
        menuBtn2.removeEventListener('click', opacityArrTwo);
        menuBtn3.removeEventListener('click', opacityArrThree)


        
    }
}

/* submenu */

const sub1btn1 = document.querySelector('.sub1btn1');
const sub1btn2 = document.querySelector('.sub1btn2')

const homelogo = document.querySelector('.logo')
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');


homelogo.addEventListener('click', homepageContainer)
sub1btn1.addEventListener('click', changeContainer1);
sub1btn2.addEventListener('click', changeContainer2);

function homepageContainer() {
    content1.style.display = 'flex';
    content2.style.display = 'none';
    content3.style.display = 'none';
}

function changeContainer1() {
    content1.style.display = 'none';
    content2.style.display = 'block';
    content3.style.display = 'none';
}

function changeContainer2() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'block';
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

query();
queryBig();
