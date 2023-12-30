

function getRandcolor(){
let value1 = 0 + Math.random()*255;
let value2 = 0 + Math.random()*255;
let value3 = 0 + Math.random()*255;
let bgc = `rgb(${value1},${value2},${value3})`;
return bgc;
}

let cont = document.querySelector(".container").children;
Array.from(cont).forEach(element => {

    setInterval(() => {
        element.style.backgroundColor = getRandcolor()
        element.style.color = getRandcolor()
    }, 100);


});

