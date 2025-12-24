// 🎆 NEW YEAR COUNTDOWN
const now = new Date();
const unlockTime = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

const countdownEl = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const itsTimeText = document.getElementById("itsTime");
const siteContent = document.getElementById("siteContent");
const music = document.getElementById("bgMusic");

// COUNTDOWN
function updateCountdown() {
    const diff = unlockTime - new Date();

    if (diff <= 0) {
        unlockSite();
        return;
    }

    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
    const s = String(Math.floor(diff / 1000) % 60).padStart(2, "0");

    countdownEl.innerText = `${h}:${m}:${s}`;
}

// UNLOCK
function unlockSite() {
    clearInterval(timer);
    countdownEl.style.opacity = "0";

    setTimeout(() => {
        itsTimeText.style.opacity = "1";
        music.play();
    }, 800);

    setTimeout(() => {
        lockScreen.style.display = "none";
        siteContent.classList.remove("locked");
    }, 2500);
}

// PASSWORD
function checkPassword() {
    if (document.getElementById("passwordInput").value === "01012025") {
        document.getElementById("passwordBox").style.display = "none";
        document.getElementById("afterPassword").classList.remove("hidden");
    }
}

// LETTER
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
}

// PREVIEW SHORTCUT
document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "m") {
        unlockSite();
    }
});

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
