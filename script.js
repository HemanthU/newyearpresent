// 🎆 NEW YEAR UNLOCK TIME (Jan 1, 12:00 AM)
const now = new Date();
const unlockTime = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

const countdownEl = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const itsTimeText = document.getElementById("itsTime");
const siteContent = document.getElementById("siteContent");
const music = document.getElementById("bgMusic");

function updateCountdown() {
    const diff = unlockTime - new Date();
    if (diff <= 0) return unlockSite();

    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
    const s = String(Math.floor(diff / 1000) % 60).padStart(2, "0");

    countdownEl.innerText = `${h}:${m}:${s}`;
}

function unlockSite() {
    clearInterval(timer);
    countdownEl.style.display = "none";
    itsTimeText.style.opacity = "1";

    setTimeout(() => {
        lockScreen.style.display = "none";
        siteContent.classList.remove("locked");
        music.play();
        intenseFireworks();
    }, 2500);
}

// 🎆 BIG FIREWORKS BURST
function intenseFireworks() {
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            createFirework();
            createHeart();
        }, i * 80);
    }
}

function createHeart() {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 7000);
}

function createFirework() {
    const f = document.createElement("div");
    f.className = "firework";
    f.innerText = "🎆";
    f.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 7000);
}

// 🔐 PASSWORD CHECK
function checkPassword() {
    if (document.getElementById("passwordInput").value.trim() === "01012025") {
        document.querySelector(".password-section").style.display = "none";
        document.getElementById("mineSection").classList.remove("hidden");
    }
}

// 💘 MINE CLICK
function revealMine() {
    document.getElementById("mineMsg").classList.add("show");
    document.getElementById("mineMsg").innerText = "Then I’m yours — always ❤️";
    document.getElementById("newYearLetter").classList.add("show");
}

// ⌨️ SECRET KEYBOARD SHORTCUT (Ctrl + Shift + M)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "m") {
        unlockSite();
    }
});

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
