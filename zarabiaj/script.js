//loader

function contentLoaded () {
    const timeOut = setTimeout(showPage, 200)
}

function showPage () { 
    document.getElementById("login").classList.remove("hidepage")
    document.getElementById("loader").classList.add("hidepage")
}

//hamburger 
const hamburger = document.querySelector('.hamburger');

//main menu
const menu = document.querySelector('nav');

//main menu buttons 
const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const menuBtn4 = document.querySelector('.menuBtn4');
const menuBtn5 = document.querySelector('.menuBtn5');

//sub menu
const sub = document.querySelectorAll('.sub')
const subOne = document.querySelector('.sub1');
const subTwo = document.querySelector('.sub2');
const subThree = document.querySelector('.sub3');
const subFive = document.querySelector('.sub5');

const menuBtnArr = [menuBtn, menuBtn2, menuBtn3, menuBtn4, menuBtn5]
const subMenuArr = [subOne, subTwo, subThree, subFive]



// sub menu closing buttons
const subBtn = document.querySelector('.subclose2');
const subBtn2 = document.querySelector('.subclose1');
const subBtn3 = document.querySelector('.subclose3');
    // no subBtn4 yet
const subBtn5 = document.querySelector('.subclose5')

const subCloseBtns = [subBtn, subBtn2, subBtn3, subBtn5]


//SUB MENU BUTTONS
//sub menu 1 btns
const sub1btn1 = document.querySelector('.sub1btn1');
const sub1btn2 = document.querySelector('.sub1btn2');
//sub menu 2 btns
const sub2btn1 = document.querySelector('.sub2btn1');
const sub2btn2 = document.querySelector('.sub2btn2');
//sub menu 3 btns
const sub3btn1 = document.querySelector('.sub3btn1');
const sub3btn2 = document.querySelector('.sub3btn2');
const sub3btn3 = document.querySelector('.sub3btn3');
const sub3btn4 = document.querySelector('.sub3btn4');
const sub3btn5 = document.querySelector('.sub3btn5');
//sub menu 5 btns
const sub5btn1 = document.querySelector('.sub5btn1');
const sub5btn2 = document.querySelector('.sub5btn2');

const subBtns = [sub1btn1, sub1btn2, sub2btn1, sub2btn2, sub3btn1, sub3btn2, sub3btn3, sub3btn4, sub3btn5, sub5btn1, sub5btn2]


// schow / hide mobile menu

function hamburgerShowMenu() {
            
    menu.classList.toggle('nav--active')
    hamburger.classList.toggle('hamburger--active')
    hideSub()
    }
    
hamburger.addEventListener('click', hamburgerShowMenu)


// schow / hide sub menus (for main menu elements)

function showSub(e) {
    e.target.nextElementSibling.classList.add('sub--active')
    console.log(e.target)
}

function hideSub() {
    // function for sub menu close buttons
    sub.forEach(sub => sub.classList.remove('sub--active'))
    //e.target.parentNode.parentNode.classList.toggle('sub--active')
}


//  hiding both menu and submenu mobile nav at same time 

function hideBoth(){

    hamburgerShowMenu();
    hideSub();
}

subBtns.forEach(btn => btn.addEventListener('click', hideBoth))


// display sub for desktop
    // trying to refactor to arr & forEach but it's messing with spans below menu buttons
function showDesktopSub(e) {
    e.target.nextElementSibling.classList.toggle('sub--active')
}

function displaySub(e) {
    e.target.classList.toggle()
}
    // old version 
function displaySubOne() {
    subOne.style.display = 'block';
}

function displaySubTwo() {
    subTwo.style.display = 'block';
}

function displaySubThree() {
    subThree.style.display = 'block';
}

// doesn't exist yet 
function displaySubFour() {
}


function displaySubFive() {
    subFive.style.display = 'block';
}

function hideSubOne(){
    subOne.style.display = 'none';
}

function hideSubTwo(){
    subTwo.style.display = 'none';
}

function hideSubThree(){
    subThree.style.display = 'none';
}


//doesn't exist yet 
function hideSubFour(){
}

function hideSubFive(){
    subFive.style.display = 'none'
}

    

/* media queries for menu */

const mql = window.matchMedia("screen and (max-width: 900px)");
const maxql = window.matchMedia(" screen and (min-width: 901px)");


mql.addListener(function(e) {

    if(e.matches){

        query()
    }
});


maxql.addListener(function(e) {

    if(e.matches){
        queryBig()
    }
});

function query() {
    if(mql.matches){
        
        menuBtnArr.forEach(btn => btn.addEventListener('click', showSub))
        
        subCloseBtns.forEach(btn => btn.addEventListener('click', hideSub))

        subBtns.forEach(btn => btn.addEventListener('click', hideBoth))
        
        menuBtn.removeEventListener('mouseover', displaySubOne);
        menuBtn.removeEventListener('mouseout', hideSubOne);
        menuBtn2.removeEventListener('mouseover', displaySubTwo);
        menuBtn2.removeEventListener('mouseout', hideSubTwo);
        menuBtn3.removeEventListener('mouseover', displaySubThree);
        menuBtn3.removeEventListener('mouseout', hideSubThree);
        menuBtn4.removeEventListener('mouseover', displaySubFour);
        menuBtn4.removeEventListener('mouseout', hideSubFour);
        menuBtn5.removeEventListener('mouseover', displaySubFive);
        menuBtn5.removeEventListener('mouseout', hideSubFive);

        subOne.removeEventListener('mouseover', displaySubOne);
        subOne.removeEventListener('mouseout', hideSubOne);
        subTwo.removeEventListener('mouseover', displaySubTwo);
        subTwo.removeEventListener('mouseout', hideSubTwo);
        subThree.removeEventListener('mouseover', displaySubThree);
        subThree.removeEventListener('mouseout', hideSubThree);
        subFive.removeEventListener('mouseover', displaySubThree);
        subFive.removeEventListener('mouseout', hideSubThree);


    }
}




function queryBig(){
    if(maxql.matches){

        /*
        menuBtnArr.forEach(btn => btn.addEventListener('mouseover', showDesktopSub))
        menuBtnArr.forEach(btn => btn.addEventListener('mouseout', hideSubOne))
        */
                
        menuBtn.addEventListener('mouseover', displaySubOne);
        menuBtn.addEventListener('mouseout', hideSubOne);
        menuBtn2.addEventListener('mouseover', displaySubTwo);
        menuBtn2.addEventListener('mouseout', hideSubTwo);
        menuBtn3.addEventListener('mouseover', displaySubThree);
        menuBtn3.addEventListener('mouseout', hideSubThree);
        menuBtn4.addEventListener('mouseover', displaySubFour);
        menuBtn4.addEventListener('mouseout', hideSubFour);
        menuBtn5.addEventListener('mouseover', displaySubFive);
        menuBtn5.addEventListener('mouseout', hideSubFive);
        
        /*
       sub.forEach(sub => sub.addEventListener('mouseover', showDesktopSub))
       subMenuArr.forEach(sub => sub.addEventListener('mouseout', hideSub))
       */
        
        subOne.addEventListener('mouseover', displaySubOne);
        subOne.addEventListener('mouseout', hideSubOne);
        subTwo.addEventListener('mouseover', displaySubTwo);
        subTwo.addEventListener('mouseout', hideSubTwo);
        subThree.addEventListener('mouseover', displaySubThree);
        subThree.addEventListener('mouseout', hideSubThree);
        subFive.addEventListener('mouseover', displaySubFive);
        subFive.addEventListener('mouseout', hideSubFive);
        

        menuBtn.removeEventListener('click', displaySubOne);
        menuBtn2.removeEventListener('click', displaySubTwo);
        menuBtn3.removeEventListener('click', displaySubThree);
        menuBtn5.removeEventListener('click', displaySubFive);

        
        subBtns.forEach(btn => btn.removeEventListener('click', hideBoth))

       
    }
}

// menu logo
const homelogo = document.querySelector('.logo')

// pages
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const content8 = document.querySelector('.content8');
const content9 = document.querySelector('.content9');
const content10 = document.querySelector('.content10');
const content11 = document.querySelector('.content11')
const content12 = document.querySelector('.content12')
const contentArr = [content1, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11, content12]

// video 
const acavideoplus = document.querySelector('.acavideoplus');
const loginacaplus = document.querySelector('.loginacaplus');

const marvid1 = document.querySelector('.marvid1');
const marvid2 = document.querySelector('.marvid2');
const marvid3 = document.querySelector('.marvid3');
const marvid4 = document.querySelector('.marvid4');
const acaiframe = document.querySelector('.acaiframe');
// academy plus disabled 
//const acaplusiframe = document.querySelector('.acaplusiframe');
const zoomVideoOne = document.querySelector('.contener2__video1');
const zoomVideoTwo = document.querySelector('.contener2__video2');

// video src 
const marvid1src = 'https://www.youtube-nocookie.com/embed/zBgT4LEHWlI';
const marvid2src = 'https://www.youtube-nocookie.com/embed/Ask5hlhfk9Y';
const marvid3src = 'https://www.youtube-nocookie.com/embed/u4t7yo95zbM';
const marvid4src = 'https://www.youtube-nocookie.com/embed/K6efOvXOf8w';
const acaplussrc = 'https://www.youtube-nocookie.com/embed/fyYIRUlbqLg';
const acasrc = 'https://www.youtube-nocookie.com/embed/73texEQE3mg';
const zoomVideoOneSrc = 'https://www.youtube-nocookie.com/embed/q4O51-2y2S8';
const zoomVideoTwoSrc = 'https://www.youtube.com/embed/fMJKObJGpIk';

/*
homelogo.addEventListener('click', homepageContainer)
*/

// 1st button
sub1btn1.addEventListener('click', showContainer1);
sub1btn2.addEventListener('click', showContainer2);

//2nd button
sub2btn1.addEventListener('click', showContainer3);
sub2btn2.addEventListener('click', showContainer4);

//4th button 
menuBtn4.addEventListener('click', showContainer10)

//5th button
sub3btn1.addEventListener('click', showContainer7);
sub3btn2.addEventListener('click', showContainer8);
sub3btn3.addEventListener('click', showContainer9);
sub3btn4.addEventListener('click', showContainer11);
sub3btn5.addEventListener('click', showContainer12);

//3rd button
sub5btn1.addEventListener('click', showContainer5);
sub5btn2.addEventListener('click', showContainer6);

/* DO NOT REMOVE 

function homepageContainer() {
    content1.style.display = 'flex';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    marvid1.src = "https://www.youtube-nocookie.com/embed/zBgT4LEHWlI";
    marvid2.src = "https://www.youtube-nocookie.com/embed/XGHzDfbjhhM";
    acaiframe.src = "https://www.youtube-nocookie.com/embed/fyYIRUlbqLg";
    
}
*/

//

function showContainer1() {
    contentArr[1].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(1, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer2() {
    contentArr[2].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(2, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer3() {
    contentArr[3].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(3, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer4() {
    contentArr[4].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(4, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
    
}

function showContainer5() {
    
    contentArr[5].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(5, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer6() {    
    contentArr[6].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(6, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function showContainer7() {
    contentArr[7].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(7, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function showContainer8() {
    
    contentArr[8].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(8, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function showContainer9() {

    contentArr[9].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(9, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer10() {

    contentArr[10].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(10, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function showContainer11() {
    
    contentArr[11].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(11, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
}

function showContainer12() {
    
    contentArr[12].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(12, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    // academyplus disabled
    //acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

/* Academy AW video change URL */

const acaplus1 = document.querySelector('.acaplus1');
const acaplus2 = document.querySelector('.acaplus2');
const acaplus3 = document.querySelector('.acaplus3');
const acaplus4 = document.querySelector('.acaplus4');
const acaplus5 = document.querySelector('.acaplus5');
const acaplus6 = document.querySelector('.acaplus6');
const acaplus7 = document.querySelector('.acaplus7');

acaplus1.addEventListener('click', acapluschangeVideo);
acaplus2.addEventListener('click', acapluschangeVideo2);
acaplus3.addEventListener('click', acapluschangeVideo3);
acaplus4.addEventListener('click', acapluschangeVideo4);
acaplus5.addEventListener('click', acapluschangeVideo5);
acaplus6.addEventListener('click', acapluschangeVideo6);
acaplus7.addEventListener('click', acapluschangeVideo7);


function acapluschangeVideo () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/73texEQE3mg';
}

function acapluschangeVideo2 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/fyYIRUlbqLg';
}

function acapluschangeVideo3 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/80VarX0a5aw';
}

function acapluschangeVideo4 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/WSkMWm3l3D8';
}

function acapluschangeVideo5 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/pmW0YrRGx1A';
}

function acapluschangeVideo6 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/JY-Zx3wnLNg';
}

function acapluschangeVideo7 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/xK8LzdU4ON0';
}


/* Academy PLUS video change URL */

const aca1 = document.querySelector('.aca1');
const aca2 = document.querySelector('.aca2');
const aca3 = document.querySelector('.aca3');
const aca4 = document.querySelector('.aca4');
const aca5 = document.querySelector('.aca5');
const aca6 = document.querySelector('.aca6');
const aca7 = document.querySelector('.aca7');

/* DO NOT REMOVE!!!! for later use

aca1.addEventListener('click', changeVideo);
aca2.addEventListener('click', changeVideo2);
aca3.addEventListener('click', changeVideo3);
aca4.addEventListener('click', changeVideo4);
aca5.addEventListener('click', changeVideo5);
aca6.addEventListener('click', changeVideo6);
aca7.addEventListener('click', changeVideo7);


function changeVideo () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/fyYIRUlbqLg';
}

function changeVideo2 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube.com/embed/80VarX0a5aw';
}

function changeVideo3 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/WSkMWm3l3D8';
}

function changeVideo4 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/pmW0YrRGx1A';
}

function changeVideo5 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/JY-Zx3wnLNg';
}

function changeVideo6 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/xK8LzdU4ON0';
}

function changeVideo7 () {
    document.querySelector('.acaplusiframe').src = 'https://www.youtube-nocookie.com/embed/pSDgPzJXJa8';
}
*/
var _0xe2d9=["\x2E\x70\x61\x73\x73\x77\x6F\x72\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x6C\x6F\x67\x69\x6E","\x2E\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x63\x6C\x69\x65\x6E\x74\x66\x6F\x6F\x74\x65\x72\x32\x70","\x41\x57\x30\x33\x2E\x30\x38\x2E\x32\x30\x31\x39","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6E\x70\x75\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x68\x69\x64\x65\x70\x61\x67\x65","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x72\x65\x6D\x6F\x76\x65","\x68\x65\x61\x64\x65\x72","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x73\x74\x79\x6C\x65","\x66\x69\x78\x65\x64","\x2E\x70\x61\x73\x73\x77\x6F\x72\x64\x61\x63\x61\x70\x6C\x75\x73","\x70\x72\x65\x73\x69\x64\x65\x6E\x74\x74\x65\x61\x6D"];const password=document[_0xe2d9[1]](_0xe2d9[0]);const login=document[_0xe2d9[1]](_0xe2d9[2]);const content=document[_0xe2d9[1]](_0xe2d9[3]);const clifooter=document[_0xe2d9[1]](_0xe2d9[4]);const word=_0xe2d9[5];clifooter[_0xe2d9[6]]= word;password[_0xe2d9[8]](_0xe2d9[7],hideLogin);function hideLogin(_0x5aaax7){if(_0x5aaax7[_0xe2d9[10]][_0xe2d9[9]]== word){login[_0xe2d9[13]][_0xe2d9[12]](_0xe2d9[11]);content[_0xe2d9[13]][_0xe2d9[14]](_0xe2d9[11]);const _0x5aaax8=document[_0xe2d9[1]](_0xe2d9[15]);_0x5aaax8[_0xe2d9[17]][_0xe2d9[16]]= _0xe2d9[18]}}const passwordacaplus=document[_0xe2d9[1]](_0xe2d9[19]);const acaplusword=_0xe2d9[20];passwordacaplus[_0xe2d9[8]](_0xe2d9[7],hideLoginAcaPlus);function hideLoginAcaPlus(_0x5aaax7){if(_0x5aaax7[_0xe2d9[10]][_0xe2d9[9]]== acaplusword){acavideoplus[_0xe2d9[13]][_0xe2d9[14]](_0xe2d9[11]);loginacaplus[_0xe2d9[13]][_0xe2d9[12]](_0xe2d9[11])}}


//media queries init
query();
queryBig();
