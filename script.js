// 🎵 MUSIC ELEMENT
const music = document.getElementById("bgMusic");

// 🔐 PASSWORD CHECK
function checkPassword() {
    const input = document.getElementById("passwordInput").value.trim();

    if (input === "112025") {
        // Hide password card
        document.getElementById("passwordBox").style.display = "none";

        // Show next step
        document.getElementById("afterPassword").classList.remove("hidden");

        // 🎵 START MUSIC (user interaction safe)
        music.currentTime = 0;
        music.play().catch(err => {
            console.log("Music blocked:", err);
        });
    }
}

// 💌 SHOW LETTER
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");

    // Keep music playing
    if (music.paused) {
        music.play().catch(() => {});
    }
}
