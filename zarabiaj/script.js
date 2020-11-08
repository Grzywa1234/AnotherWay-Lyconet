//loader

function contentLoaded () {
    const timeOut = setTimeout(showPage, 200)
}

function showPage () { 
    document.getElementById("login").classList.remove("hidepage")
    document.getElementById("loader").classList.add("hidepage")
}

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

const btnArr = [menuBtn, menuBtn2, menuBtn3, menuBtn4, menuBtn5]
const subArr = [subOne, subTwo, subThree, subFive]


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



/* menu show & hide  */

const showBtn = document.querySelector('.hamburger');
const hideBtn = document.querySelector('.menuBtn6');
const subBtn = document.querySelector('.subclose2');
const subBtn2 = document.querySelector('.subclose1');
const subBtn3 = document.querySelector('.subclose3');

const subBtn5 = document.querySelector('.subclose5')
const menu = document.querySelector('nav');

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

        //hiding menu&submenu mobile nav 
        subBtns.forEach(btn => btn.addEventListener('click', hideBoth))
         /*
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
        */

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

        /*
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
        */
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
const contentArr = [content1, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11, content12]

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
// 1st button
sub1btn1.addEventListener('click', changeContainer1);
sub1btn2.addEventListener('click', changeContainer2);

//2nd button
sub2btn1.addEventListener('click', changeContainer3);
sub2btn2.addEventListener('click', changeContainer4);

//5th button
sub3btn1.addEventListener('click', changeContainer7);
sub3btn2.addEventListener('click', changeContainer8);
sub3btn3.addEventListener('click', changeContainer9);
sub3btn4.addEventListener('click', changeContainer11);
sub3btn5.addEventListener('click', changeContainer12);

//3rd button
sub5btn1.addEventListener('click', changeContainer5);
sub5btn2.addEventListener('click', changeContainer6);

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
    contentArr[1].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(1, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer2() {
    contentArr[2].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(2, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer3() {
    contentArr[3].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(3, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaplusiframe.src = acaplussrc;
    zoomVideoOne.src = zoomVideoOneSrc;
    zoomVideoTwo.src = zoomVideoTwoSrc;
}

function changeContainer4() {
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

function changeContainer5() {
    
    contentArr[5].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(5, 1)
    toHide.forEach(div => div.classList.add("hidepage"))

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
    contentArr[6].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(6, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
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
    contentArr[7].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(7, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
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
    
    contentArr[8].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(8, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
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

    contentArr[9].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(9, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    
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
    
    contentArr[11].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(11, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    /*
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
    */
    marvid1.src = marvid1src;
    marvid2.src = marvid2src;
    marvid3.src = marvid3src;
    marvid4.src = marvid4src;
    acaiframe.src = acasrc;
    acaplusiframe.src = acaplussrc;
}

function changeContainer12() {
    
    contentArr[12].classList.remove("hidepage")
    const toHide = contentArr.slice();
    toHide.splice(12, 1)
    toHide.forEach(div => div.classList.add("hidepage"))
    /*
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
    */
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

var _0xe2d9=["\x2E\x70\x61\x73\x73\x77\x6F\x72\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x2E\x6C\x6F\x67\x69\x6E","\x2E\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x63\x6C\x69\x65\x6E\x74\x66\x6F\x6F\x74\x65\x72\x32\x70","\x41\x57\x30\x33\x2E\x30\x38\x2E\x32\x30\x31\x39","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6E\x70\x75\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x76\x61\x6C\x75\x65","\x74\x61\x72\x67\x65\x74","\x68\x69\x64\x65\x70\x61\x67\x65","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x72\x65\x6D\x6F\x76\x65","\x68\x65\x61\x64\x65\x72","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x73\x74\x79\x6C\x65","\x66\x69\x78\x65\x64","\x2E\x70\x61\x73\x73\x77\x6F\x72\x64\x61\x63\x61\x70\x6C\x75\x73","\x70\x72\x65\x73\x69\x64\x65\x6E\x74\x74\x65\x61\x6D"];const password=document[_0xe2d9[1]](_0xe2d9[0]);const login=document[_0xe2d9[1]](_0xe2d9[2]);const content=document[_0xe2d9[1]](_0xe2d9[3]);const clifooter=document[_0xe2d9[1]](_0xe2d9[4]);const word=_0xe2d9[5];clifooter[_0xe2d9[6]]= word;password[_0xe2d9[8]](_0xe2d9[7],hideLogin);function hideLogin(_0x5aaax7){if(_0x5aaax7[_0xe2d9[10]][_0xe2d9[9]]== word){login[_0xe2d9[13]][_0xe2d9[12]](_0xe2d9[11]);content[_0xe2d9[13]][_0xe2d9[14]](_0xe2d9[11]);const _0x5aaax8=document[_0xe2d9[1]](_0xe2d9[15]);_0x5aaax8[_0xe2d9[17]][_0xe2d9[16]]= _0xe2d9[18]}}const passwordacaplus=document[_0xe2d9[1]](_0xe2d9[19]);const acaplusword=_0xe2d9[20];passwordacaplus[_0xe2d9[8]](_0xe2d9[7],hideLoginAcaPlus);function hideLoginAcaPlus(_0x5aaax7){if(_0x5aaax7[_0xe2d9[10]][_0xe2d9[9]]== acaplusword){acavideoplus[_0xe2d9[13]][_0xe2d9[14]](_0xe2d9[11]);loginacaplus[_0xe2d9[13]][_0xe2d9[12]](_0xe2d9[11])}}


query();
queryBig();
