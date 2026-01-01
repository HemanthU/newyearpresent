// 🎆 NEW YEAR COUNTDOWN
const now = new Date();
const unlockTime = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

const countdownEl = document.getElementById("countdown");
const lockScreen = document.getElementById("lockScreen");
const itsTimeText = document.getElementById("itsTime");
const siteContent = document.getElementById("siteContent");
const music = document.getElementById("bgMusic");


// ⏳ UPDATE COUNTDOWN
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

    // 😨 SHAKE AT 00:00:05
    if (h === "00" && m === "00" && s === "05") {
        countdownEl.classList.add("shake");
    }
}

// 🔓 UNLOCK SITE
function unlockSite() {
    clearInterval(timer);
    countdownEl.classList.remove("shake");
    countdownEl.classList.add("big");
    countdownEl.style.opacity = "0";

    setTimeout(() => {
        itsTimeText.style.opacity = "1";
        music.play();
        intenseFireworks();
    }, 800);

    setTimeout(() => {
        lockScreen.style.display = "none";
        siteContent.classList.remove("locked");
    }, 2500);
}

// 🎆 FIREWORK BURST
function intenseFireworks() {
    for (let i = 0; i < 90; i++) {
        setTimeout(() => {
            createFirework();
            createHeart();
        }, i * 70);
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
    if (document.getElementById("passwordInput").value === "01012025") {
        document.getElementById("passwordBox").style.display = "none";
        document.getElementById("afterPassword").classList.remove("hidden");

        // 🎵 START MUSIC HERE
        music.play().catch(() => {});
    }
}

// 💌 SHOW LETTER
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
}
function showLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
    music.play().catch(() => {});
}
// ⌨️ PREVIEW SHORTCUT (Ctrl + Shift + M)
document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "m") {
        unlockSite();
    }
});

// START TIMER
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
