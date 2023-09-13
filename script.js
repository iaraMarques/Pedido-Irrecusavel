const simButton = document.getElementById("sim");
const naoButton = document.getElementById("nao");
const message = document.querySelector(".message");
const responseText = document.getElementById("response");
const heart = document.getElementById("heart");

naoButton.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    naoButton.style.position = "absolute";
    naoButton.style.left = `${randomX}px`;
    naoButton.style.top = `${randomY}px`;
});

simButton.addEventListener("click", () => {
    responseText.textContent = "Que bom que disse sim, estou super ansiosa pela chegada do nosso bebê.";
    heart.classList.remove("hidden");
    message.style.display = "block";
    simButton.disabled = true;
});
