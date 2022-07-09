const gridplay= [
    {
        name: "apple",
        img : "imgs/apple.jpg",
    },
    {
        name: "grape",
        img : "imgs/grapes.jpg",
    },
    {
        name: "banana",
        img : "imgs/banana.png",
    },
    {
        name: "pineapple",
        img : "imgs/pineapple.jpg",
    },
    {
        name: "mango",
        img : "imgs/mango.png",
    },
    {
        name: "melon",
        img : "imgs/melon.png",
    },



    {
        name: "apple",
        img : "imgs/apple.jpg",
    },
    {
        name: "grape",
        img : "imgs/grapes.jpg",
    },
    {
        name: "banana",
        img : "imgs/banana.png",
    },
    {
        name: "pineapple",
        img : "imgs/pineapple.jpg",
    },
    {
        name: "mango",
        img : "imgs/mango.png",
    },
    {
        name: "melon",
        img : "imgs/melon.png",
    }

]

var cnt=0;

let cardclicked=[];
let cardselected=[];
const cardsowned= [];

gridplay.sort( () => Math.random() - 0.5);

// console.log(gridplay);

const gridDisplay= document.querySelector('#grid');


const result= document.querySelector('#current_score');
result.textContent = 0;

function checkformatch(){

    const flipped= document.querySelectorAll('img');

    if(cardclicked[0]===cardclicked[1]){
        flipped[cardclicked[0]].setAttribute('src', 'imgs/blank.png');
        flipped[cardclicked[1]].setAttribute('src', 'imgs/blank.png');
        cnt++;
    }else if(cardselected[0]===cardselected[1]){
        flipped[cardclicked[0]].setAttribute('src', 'imgs/done.jpg');
        flipped[cardclicked[1]].setAttribute('src', 'imgs/done.jpg');
        flipped[cardclicked[0]].removeEventListener('click', youclicked);
        flipped[cardclicked[1]].removeEventListener('click', youclicked);
        cardsowned.push(cardselected);
    }else{
        flipped[cardclicked[0]].setAttribute('src', 'imgs/blank.png');
        flipped[cardclicked[1]].setAttribute('src', 'imgs/blank.png');
        cnt++;
    }

    result.textContent = cardsowned.length - 0.5 * cnt;

    if(cardsowned.length===6){
        alert('Well Done!');
    }

    cardselected=[];
    cardclicked=[];

}

function youclicked(){
    const imgId= this.getAttribute('img-id');
    const imgName= gridplay[imgId].name;
    const imgSrc= gridplay[imgId].img;

    this.setAttribute('src', imgSrc);
    this.setAttribute('name', imgName);

    cardclicked.push(imgId);
    cardselected.push(imgName);

    if(cardclicked.length===2){
        setTimeout( checkformatch, 500);
    }
}

function makegrid () {
    for (let i=0; i<12; i++) {
        
        const gridItem= document.createElement('img');

        gridItem.setAttribute('src', 'imgs/blank.png');
        gridItem.setAttribute('img-id', i); 
        
        gridDisplay.appendChild(gridItem);

        gridItem.addEventListener('click', youclicked);

        
    }
}

makegrid();