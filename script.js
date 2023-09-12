async function test () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();

    const id = document.querySelector(".id");
    const advice = document.querySelector(".advice");
    id.innerHTML = result.slip.id;
    advice.innerHTML = result.slip.advice
}

const button = document.querySelector("button");

button.addEventListener( "click", () => {
    test();
})

test();
