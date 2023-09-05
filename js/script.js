const dice = document.querySelector(".dice");
const number = document.querySelector(".number");
const text = document.querySelector(".text");

window.onload = () => newAdvice();

dice.addEventListener("click", async () => await newAdvice());

const newAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const advice = data.slip;

        number.textContent = advice.id;
        text.textContent = advice.advice;
    }
    catch (err) {
        console.error(`Error: ${err}`);
    }
}
