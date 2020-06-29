/*
navbar span styling
 */
const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const arrone = document.querySelector('.arrone');
const arrtwo = document.querySelector('.arrtwo');
const arrthree = document.querySelector('.arrthree');


menuBtn.addEventListener('mouseover', opacityArrOne);
menuBtn.addEventListener('mouseout', opacityOneZero);
menuBtn2.addEventListener('mouseover', opacityArrTwo);
menuBtn2.addEventListener('mouseout', opacityTwoZero);
menuBtn3.addEventListener('mouseover', opacityArrThree);
menuBtn3.addEventListener('mouseout', opacityThreeZero);



function opacityArrOne() {
    arrone.style.opacity = '1';
}

function opacityArrTwo() {
    arrtwo.style.opacity = '1';
}

function opacityArrThree() {
    arrthree.style.opacity = '1';
}

function opacityOneZero(){
    arrone.style.opacity = '0';
}

function opacityTwoZero(){
    arrtwo.style.opacity = '0';
}

function opacityThreeZero(){
    arrthree.style.opacity = '0';
}


/*
menu
*/
const showMenuBtn = document.querySelector('.fa-bars');
const hideMenuBtn  = document.querySelector('.fa-times-circle');
const menu = document.querySelector('.menu');

function show() {
    menu.style.transform = "translateX(100%)"
}

function hide() {
    menu.style.transform = "translateX(0)";
}


menuBtn.addEventListener('click', hide);
menuBtn2.addEventListener('click', hide);
menuBtn3.addEventListener('click', hide);
hideMenuBtn.addEventListener('click', hide);
showMenuBtn.addEventListener('click', show);

/*
menu display
*/

const homepageWrap = document.querySelector('.wrap');
const homepagecbApp = document.querySelector('.cbApp');
const homepagemlm = document.querySelector('.mlm');

menuBtn2.addEventListener('click', hideHomepage)
menuBtn.addEventListener('click', showHomepage)

function hideHomepage () {
    homepageWrap.style.display = "none";
    homepagecbApp.style.display = "none";
    homepagemlm.style.display = "none";
}

function showHomepage () {
    homepageWrap.style.display = "block";
    homepagecbApp.style.display = "block";
    homepagemlm.style.display = "block";
}



/*
wrap 
 */

let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;


function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length
    }
    slideLeft();
})

arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})


startSlide();
