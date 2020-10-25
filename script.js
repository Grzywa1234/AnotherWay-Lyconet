/*
navbar span styling
 */
const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const btnArr = [menuBtn, menuBtn2, menuBtn3]

btnArr.forEach(btn => btn.addEventListener('mouseover', opacityOne))

function opacityOne (e) {
    e.target.firstChild.nextSibling.style.opacity = "1";
}

btnArr.forEach(btn => btn.addEventListener('mouseout', opacityZero))

function opacityZero (e) {
    e.target.firstChild.nextSibling.style.opacity = "0";
}


/*

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
*/

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
const appTab = document.querySelector('.cashbackapp');
const homepage = [homepageWrap, homepagecbApp, homepagemlm]

menuBtn2.addEventListener('click', hideHomepage)
menuBtn.addEventListener('click', showHomepage)

const homepageElems = [homepageWrap, homepagecbApp, homepagemlm];

function hideHomepage () {
    homepage.forEach(div => div.classList.add("hidepage"))
    appTab.classList.remove("hidepage")
    /*
    appTab.style.display = "block";
    */
    homepage.forEach(div => div.classList.add("hide"))
    

    // functions added to animate transitions between the menu pages
    function show () {
        appTab.classList.add("show")
        appTab.classList.remove("hide")
        
    }

    function removeClass () {
        appTab.classList.remove("show")
    }

    setTimeout(show, 1);
    setTimeout(removeClass, 500)

};



function showHomepage () {
    homepage.forEach(div => div.classList.remove("hidepage"))
    appTab.classList.add("hidepage");

    

    // functions added to animate transitions between the menu pages
    function show () {
        homepage.forEach(div => div.classList.add("show"))
        appTab.classList.add("hide")
    }

    function removeClass () {
        homepage.forEach(div => div.classList.remove("show"))
        homepage.forEach(div => div.classList.remove("hide"))
    }
    
    setTimeout(show, 1);
    setTimeout(removeClass, 500)

    // video url changed to stop it from playing
    changeUrl();
};

/* video */

const sourceBtn1 = document.querySelector('.source1');
const sourceBtn2 = document.querySelector('.source2');
const sourceBtn3 = document.querySelector('.source3');
const sourceBtn4 = document.querySelector('.source4');
const sourceBtn5 = document.querySelector('.source5');

sourceBtn1.addEventListener('click', changeUrl);
sourceBtn2.addEventListener('click', changeUrl2);
sourceBtn3.addEventListener('click', changeUrl3);
sourceBtn4.addEventListener('click', changeUrl4);
sourceBtn5.addEventListener('click', changeUrl5);

function changeUrl () {
    document.querySelector('.video').src = 'https://www.youtube-nocookie.com/embed/GJRj78sU0_o';
}

function changeUrl2 () {
    document.querySelector('.video').src = 'https://www.youtube.com/embed/2Un8DbwjeTA';
}

function changeUrl3 () {
    document.querySelector('.video').src = 'https://www.youtube.com/embed/DUJEbQ43By4';
}


function changeUrl4 () {
    document.querySelector('.video').src = 'https://www.youtube-nocookie.com/embed/MyY7AmMD8OM';
}

function changeUrl5 () {
    document.querySelector('.video').src = "https://www.youtube-nocookie.com/embed/jvGtp62PKUQ";
}


/* wrap */

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

// loader

function contentLoaded () {
    const timeOut = setTimeout(showPage, 500)
}

function showPage () { 
    document.getElementById("showafterloading").classList.remove("hide")
    document.getElementById("showafterloading").classList.add("show")    
    document.getElementById("loader").classList.add("hide")
}