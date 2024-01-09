let number = 0;
let numberSelector = document.getElementById("number");

function increase() {
    number++;
    numberSelector.innerText = number;
    color()
}

function simts() {
    number = number + 100;
    numberSelector.innerText = number;
    color()
}

function reset() {
    number=0;
    numberSelector.innerText = number;
    color()
}

function decrease() {
    number--;
    numberSelector.innerText = number;
    color()
}

function color(){
    if(number<0){
        numberSelector.style.color="#FE2929"
    } 
    else if(number>0){
        numberSelector.style.color="#6CFF00"
    }
    else if(number == 0){
        numberSelector.style.color="#818282"
    }
}


