// Таймер до Нового года
const countdownEl = document.getElementById("countdown");
function updateCountdown() {
  const now = new Date();
  const newYear = new Date("January 1, 2026 00:00:00");
  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `До Нового 2025 года осталось: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Гирлянда
function toggleGarland() {
  const g = document.getElementById("garland");
  g.style.display = g.style.display === "block" ? "none" : "block";
}

// Пожелания
const wishes = [
  "Счастья, любви и тепла в новом году",
  "Пусть все мечты сбудутся",
  "Здоровья и радости тебе и близким",
  "Пусть Новый год принесёт успех во всём",
  "Снега побольше и забот поменьше :)",
  ""
];

function showWish() {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById("wishes").innerText = randomWish;
}

// Смена темы (фона)
const backgrounds = [
  'd70b9003dfaee6c5a2733408d0066c43.jpg',
  'e7118998f48a71bb44567ecdc2b602ce.jpg',
  '5cb75ddcb2874306bc4fb3708af13e20.jpg'
];
let currentBg = 0;
function switchTheme() {
  currentBg = (currentBg + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
}

// Снегопад
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createSnowflakes() {
  const count = 100;
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      drift: Math.random() * 2 - 1
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnowflakes();
  requestAnimationFrame(drawSnowflakes);
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    flake.x += flake.drift;

    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }

    if (flake.x > canvas.width || flake.x < 0) {
      flake.x = Math.random() * canvas.width;
    }
  }
}

createSnowflakes();
drawSnowflakes();
