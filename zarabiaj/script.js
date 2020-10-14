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

const subFive = document.querySelector('.sub5');


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
    subFive.style.display = 'block';
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
    subFive.style.display = 'none'
}




/* menu show & hide  */

const showBtn = document.querySelector('.hamburger');
const hideBtn = document.querySelector('.menuBtn6');
const subBtn = document.querySelector('.subclose2');
const subBtn2 = document.querySelector('.subclose1');
const subBtn3 = document.querySelector('.subclose3');

const subBtn5 = document.querySelector('.subclose5')
const menu = document.querySelector('nav');

const sub1btn1 = document.querySelector('.sub1btn1');
const sub1btn2 = document.querySelector('.sub1btn2');
const sub2btn1 = document.querySelector('.sub2btn1');
const sub2btn2 = document.querySelector('.sub2btn2');
const sub3btn1 = document.querySelector('.sub3btn1');
const sub3btn2 = document.querySelector('.sub3btn2');
const sub3btn3 = document.querySelector('.sub3btn3');
const sub3btn4 = document.querySelector('.sub3btn4');
const sub3btn5 = document.querySelector('.sub3btn5');

const sub5btn1 = document.querySelector('.sub5btn1');
const sub5btn2 = document.querySelector('.sub5btn2');


/* media queries for menu */

const mql = window.matchMedia("screen and (max-width: 900px)");
const maxql = window.matchMedia(" screen and (min-width: 901px)");


mql.addListener(function(e) {

    if(e.matches){

        query()
    }
});

/* 
maxql.addEventListener("change", function(e) {

    if(e.matches){
        queryBig()
    }
}); */

maxql.addListener(function(e) {

    if(e.matches){
        queryBig()
    }
});

function query() {
    if(mql.matches){

        subBtn.style.display = 'block';
        subBtn2.style.display = 'block';
        subBtn3.style.display = 'block';
        subBtn5.style.display = 'block';

        showBtn.addEventListener('click', showMenu);
        hideBtn.addEventListener('click', hideMenu);
        subBtn.addEventListener('click', hideSub);
        subBtn2.addEventListener('click', hideSub);
        subBtn3.addEventListener('click', hideSub);
        subBtn5.addEventListener('click', hideSub);
        

        menuBtn.addEventListener('click', showSub1);
        menuBtn2.addEventListener('click', showSub2);
        menuBtn3.addEventListener('click', showSub3);
        menuBtn5.addEventListener('click', showSub5);

        sub1btn1.addEventListener('click', hideBoth);
        sub1btn2.addEventListener('click', hideBoth);
        sub2btn1.addEventListener('click', hideBoth);
        sub2btn2.addEventListener('click', hideBoth);
        sub3btn1.addEventListener('click', hideBoth);
        sub3btn2.addEventListener('click', hideBoth);
        sub3btn3.addEventListener('click', hideBoth);
        sub3btn4.addEventListener('click', hideBoth);
        sub3btn5.addEventListener('click', hideBoth);
        sub5btn1.addEventListener('click', hideBoth);
        sub5btn2.addEventListener('click', hideBoth);


        function showMenu() {
         menu.style.transform = 'translateX(100%)';
         menu.style.webkitTransform = 'translateX(100%)';
        }

        function hideMenu() {
          menu.style.transform = 'translateX(0)';
          menu.style.webkitTransform = 'translateX(0)';
        }

        function hideSub() {
         subOne.style.display = 'none';
          subTwo.style.display = 'none';
          subThree.style.display = 'none';
          subFive.style.display = 'none';
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

        function showSub5() {
            subFive.style.display = 'block';
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
        subFive.removeEventListener('mouseover', opacityArrThree);
        subFive.removeEventListener('mouseout', opacityThreeZero);


    }
}

function hideBoth(){
    menu.style.transform = 'translateX(0)';
    subOne.style.display = 'none';
    subTwo.style.display = 'none';
    subThree.style.display = 'none';
    subFive.style.display = 'none';
   }



function queryBig(){
    if(maxql.matches){
        subBtn.style.display = 'none';
        subBtn2.style.display = 'none';
        subBtn3.style.display = 'none'; 
        subBtn5.style.display = 'none'; 
        
        
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
        subFive.addEventListener('mouseover', opacityArrFive);
        subFive.addEventListener('mouseout', opacityFiveZero);

        
        menuBtn.removeEventListener('click', opacityArrOne);
        menuBtn2.removeEventListener('click', opacityArrTwo);
        menuBtn3.removeEventListener('click', opacityArrThree);
        menuBtn5.removeEventListener('click', opacityArrFive);

        sub1btn1.removeEventListener('click', hideBoth);
        sub1btn2.removeEventListener('click', hideBoth);
        sub2btn1.removeEventListener('click', hideBoth);
        sub2btn2.removeEventListener('click', hideBoth);
        sub3btn1.removeEventListener('click', hideBoth);
        sub3btn2.removeEventListener('click', hideBoth);
        sub3btn3.removeEventListener('click', hideBoth);
        sub3btn4.removeEventListener('click', hideBoth);
        sub3btn5.removeEventListener('click', hideBoth);
        sub5btn1.removeEventListener('click', hideBoth);
        sub5btn2.removeEventListener('click', hideBoth);
        
    }
}

/* submenu */


const homelogo = document.querySelector('.logo')

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
const acavideoplus = document.querySelector('.acavideoplus');
const loginacaplus = document.querySelector('.loginacaplus');

const marvid1 = document.querySelector('.marvid1');
const marvid2 = document.querySelector('.marvid2');
const marvid3 = document.querySelector('.marvid3');
const marvid4 = document.querySelector('.marvid4');
const acaiframe = document.querySelector('.acaiframe');
const acaplusiframe = document.querySelector('.acaplusiframe');
const zoomVideoOne = document.querySelector('.contener2__video1');
const zoomVideoTwo = document.querySelector('.contener2__video2');

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
sub1btn1.addEventListener('click', changeContainer1);
sub1btn2.addEventListener('click', changeContainer2);
sub2btn1.addEventListener('click', changeContainer3);
sub2btn2.addEventListener('click', changeContainer4);
sub3btn1.addEventListener('click', changeContainer5);
sub3btn2.addEventListener('click', changeContainer6);
sub3btn3.addEventListener('click', changeContainer7);
sub3btn4.addEventListener('click', changeContainer8);
sub3btn5.addEventListener('click', changeContainer9);
sub5btn1.addEventListener('click', changeContainer11);
sub5btn2.addEventListener('click', changeContainer12);

/*
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

function changeContainer1() {
    content1.style.display = 'none';
    content2.style.display = 'block';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none'
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer2() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'block';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer3() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'block';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer4() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    acavideoplus.style.display = 'none';
    loginacaplus.style.display = 'flex';
    content5.style.display = 'block';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
    
}

function changeContainer5() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'block';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer6() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'block';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function changeContainer7() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'block';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function changeContainer8() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'block';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;

}

function changeContainer9() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'block';
    content11.style.display = 'none';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer11() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'block';
    content12.style.display = 'none';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
}

function changeContainer12() {
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';
    content5.style.display = 'none';
    content6.style.display = 'none';
    content7.style.display = 'none';
    content8.style.display = 'none';
    content9.style.display = 'none';
    content10.style.display = 'none';
    content11.style.display = 'none';
    content12.style.display = 'block';
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

/* Academy AW video change URL */

const acaplus1 = document.querySelector('.acaplus1');
const acaplus2 = document.querySelector('.acaplus2');
const acaplus3 = document.querySelector('.acaplus3');
/*
const acaplus4 = document.querySelector('.acaplus4');
const acaplus5 = document.querySelector('.acaplus5');
const acaplus6 = document.querySelector('.acaplus6');
const acaplus7 = document.querySelector('.acaplus7');
*/
acaplus1.addEventListener('click', acapluschangeVideo);
acaplus2.addEventListener('click', acapluschangeVideo2);
acaplus3.addEventListener('click', acapluschangeVideo3);
/*
acaplus4.addEventListener('click', acapluschangeVideo4);
acaplus5.addEventListener('click', acapluschangeVideo5);
acaplus6.addEventListener('click', acapluschangeVideo6);
acaplus7.addEventListener('click', acapluschangeVideo7);
*/

function acapluschangeVideo () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/73texEQE3mg';
}

function acapluschangeVideo2 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/aiDUJ0rrzPk';
}

function acapluschangeVideo3 () {
    document.querySelector('.acaiframe').src = 'https://www.youtube-nocookie.com/embed/auEv24KKJZE';
}
/*
function acapluschangeVideo4 () {
    document.querySelector('.acaiframe').src = '';
}

function acapluschangeVideo5 () {
    document.querySelector('.acaiframe').src = '';
}

function acapluschangeVideo6 () {
    document.querySelector('.acaiframe').src = '';
}

function acapluschangeVideo7 () {
    document.querySelector('.acaiframe').src = '';
}
*/

/* Academy PLUS video change URL */

const aca1 = document.querySelector('.aca1');
const aca2 = document.querySelector('.aca2');
const aca3 = document.querySelector('.aca3');
const aca4 = document.querySelector('.aca4');
const aca5 = document.querySelector('.aca5');
const aca6 = document.querySelector('.aca6');
const aca7 = document.querySelector('.aca7');

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

var _0x44e1=["\x2E\x63\x6C\x69\x65\x6E\x74\x66\x6F\x6F\x74\x65\x72\x32\x70","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x48\x61\x73\u0142\x6F\x3A\x20\x41\x57\x30\x33\x2E\x30\x38\x2E\x32\x30\x31\x39"];const passpassword=document[_0x44e1[1]](_0x44e1[0]);passpassword[_0x44e1[2]]= _0x44e1[3]
var _0x91f0=["\x2E\x70\x61\x73\x73\x77\x6F\x72\x64\x61\x63\x61\x70\x6C\x75\x73","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x70\x72\x65\x73\x69\x64\x65\x6E\x74\x74\x65\x61\x6D","\x69\x6E\x70\x75\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x62\x6C\x6F\x63\x6B","\x6E\x6F\x6E\x65"];const passwordacaplus=document[_0x91f0[1]](_0x91f0[0]);const acaplusword=_0x91f0[2];passwordacaplus[_0x91f0[4]](_0x91f0[3],hideLoginAcaPlus);function hideLoginAcaPlus(_0x26cex4){if(_0x26cex4[_0x91f0[6]][_0x91f0[5]]== acaplusword){acavideoplus[_0x91f0[8]][_0x91f0[7]]= _0x91f0[9];loginacaplus[_0x91f0[8]][_0x91f0[7]]= _0x91f0[10]}}
var _0x8ad5=["\x2E\x70\x61\x73\x73\x77\x6F\x72\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x6C\x6F\x67\x69\x6E","\x2E\x63\x6F\x6E\x74\x65\x6E\x74","\x41\x57\x30\x33\x2E\x30\x38\x2E\x32\x30\x31\x39","\x69\x6E\x70\x75\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x6E\x6F\x6E\x65","\x62\x6C\x6F\x63\x6B"];const password=document[_0x8ad5[1]](_0x8ad5[0]);const login=document[_0x8ad5[1]](_0x8ad5[2]);const content=document[_0x8ad5[1]](_0x8ad5[3]);const word=_0x8ad5[4];password[_0x8ad5[6]](_0x8ad5[5],hideLogin);function hideLogin(_0x2163x6){if(_0x2163x6[_0x8ad5[8]][_0x8ad5[7]]== word){login[_0x8ad5[10]][_0x8ad5[9]]= _0x8ad5[11];content[_0x8ad5[10]][_0x8ad5[9]]= _0x8ad5[12]}}

query();
queryBig();
