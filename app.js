const title = document.querySelector("body > div.main-content > h1");
const emoij = document.querySelector("body > div.main-content > div");


setTimeout(first, 4000);
setTimeout(two, 8500);
setTimeout(third, 12500);
setTimeout(fourth, 16500);
setTimeout(five, 20500);


function first() {
    title.textContent = `Mujer luchadora incansable Disfruta tu dia que te lo mereces `
    emoij.textContent = `😍`
}

function two() {
    title.textContent = `Mujer, tu lucha, tu amor y tu esencia cambian el mundo cada día. ¡Feliz 8 de marzo! `
    emoij.textContent = `💕`
    
}

function third() {
    title.textContent = `El mundo brilla más gracias a la luz de mujeres como tú. `
    emoij.textContent = `✨`
}

function fourth(){
    title.textContent = `No hay límite para lo que una mujer puede lograr. Sigue brillando y conquistando tus sueños.`
    emoij.textContent = `🌹`
}

function five(){
    title.textContent = `Eres inspiración, eres fuerza, eres vida. ¡Feliz Día Internacional de la Mujer!`
    emoij.textContent = `💪`
}