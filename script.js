const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// hamburger animation 

function animateMenu() {
    hamburger.classList.toggle('hamburger--active')
    menu.classList.toggle('menu--active')
}

hamburger.addEventListener('click', animateMenu);


const homepage = document.querySelector('.homepage')
const appTab = document.querySelector('.cashbackapp');

// page displaying 

menuBtn.addEventListener('click', showHomepage)
menuBtn2.addEventListener('click', hideHomepage)


function hideHomepage () {
    hamburger.classList.contains('hamburger--active') ? animateMenu() : console.log('') ;

    homepage.classList.add("hidepage")
    appTab.classList.remove("hidepage")
    
    homepage.classList.add("hide")
    

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
    hamburger.classList.contains('hamburger--active') ? animateMenu() : console.log('') ;

    homepage.classList.remove("hidepage")
    appTab.classList.add("hidepage");

    

    // functions added to animate transitions between the menu pages
    function show () {
        homepage.classList.add("show")
        appTab.classList.add("hide")
    }

    function removeClass () {
        homepage.classList.remove("show")
        homepage.classList.remove("hide")
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
    const timeOut = setTimeout(showPage, 100)
}

function showPage () { 
    document.getElementById("showafterloading").classList.remove("hide")
    document.getElementById("showafterloading").classList.add("show")    
    document.getElementById("loader").classList.add("hide")
}