const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const simple = ['Green', 'Red', 'Blue', 'Orange', 'Yellow', 'Purple', 'Brown', 'Gray'] 

function numRandom(parametro) {
return Math.floor(Math.random() * parametro.length);
}
function colorHex(){
    return(`#${hex[numRandom(hex)]}${hex[numRandom(hex)]}${hex[numRandom(hex)]}${hex[numRandom(hex)]}${hex[numRandom(hex)]}${hex[numRandom(hex)]}`);
}
function colorSimple(){
    return(`${simple[numRandom(simple)]}`)
}

function changeColor() {
    const button = document.querySelector(".ThirdButton");
    const secondContainer = document.querySelector("#SecondContainer");
    const textBackground = document.querySelector(".textBackground");
    const simpleButton = document.querySelector("#FirstButton");
    const hexButton = document.querySelector("#SecondButton");
    const firstContainer = document.querySelector("#FirstContainer");

    simpleButton.addEventListener('click', () => {
        firstContainer.className = "simple"
    }); 

    hexButton.addEventListener('click', () => {
        firstContainer.className = "hex"
    });

    button.addEventListener('click', () => {
        if(firstContainer.className == "simple"){
            secondContainer.style.background = colorSimple();
            textBackground.innerText = `Background Color: ${secondContainer.style.background}`;
        }
        if(firstContainer.className == "hex" || firstContainer.className == "FirstContainer"){
            secondContainer.style.background = colorHex();
            textBackground.innerText = `Background Color: ${secondContainer.style.background}`;
        }
    })
}

changeColor();


