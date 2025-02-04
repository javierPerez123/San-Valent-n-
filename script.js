document.getElementById("yesBtn").addEventListener("click", function() {
    alert("¡Sabía que dirías que sí! 💖 Nos vemos el 14 de febrero ✨");
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});