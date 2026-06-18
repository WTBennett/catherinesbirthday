let collected = 0;

function collect(button) {

    if (button.classList.contains("collected")) {
        return;
    }

    button.classList.add("collected");
    collected++;

    document.getElementById("count").textContent = collected;

    if (collected === 4) {
        document.getElementById("brewButton").disabled = false;
    }
}

function makeTea() {

    const animation = document.getElementById("teaAnimation");

    animation.innerHTML = "🫖";

    setTimeout(() => {
        animation.innerHTML = "🫖💨";
    }, 500);

    setTimeout(() => {
        animation.innerHTML = "☕";
    }, 1200);

    setTimeout(() => {
        launchConfetti();

        document.getElementById("game").style.display = "none";
        document.getElementById("birthdayScreen").classList.remove("hidden");
    }, 2000);
}

function launchConfetti() {

    const emojis = [
        "🎉",
        "🎂",
        "🎈",
        "✨",
        "🥳"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";
        piece.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 4000);
    }
}
