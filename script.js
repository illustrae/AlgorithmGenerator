
let algos=[
    'This is a test to see if it works',
    'Second test lets make it happen',

];



function displayAlgor() {

    let index=Math.floor(Math.random()*algos.length)
// <---this will give a random algorithm. --->
    let div=document.querySelector('#algor');
    let algor=`<div class="top">
    <p>${algos[index]}</p> </div>`;
    div.innerHTML=algor;

}

    let btn=document.querySelector('.btn');
        btn.addEventListener('click', displayAlgor)