document.addEventListener("DOMContentLoaded", function() {
    let musik = document.getElementById("musik");
    musik.play();
});

document.getElementById("kado").addEventListener("click", function() {
    let pesan = document.getElementById("pesan");
    let ucapan = [
        "🎈 Happy Birthday! Semoga sehat dan bahagia selalu! 💖",
        "🎁 Semoga tahun ini penuh berkah dan kebahagiaan! ✨",
        "🎊 Panjang umur, sukses, dan bahagia selalu! 🎂",
        "🎶 Hari ini harimu, rayakan dengan penuh sukacita! 🎇"
    ];

    let randomUcapan = ucapan[Math.floor(Math.random() * ucapan.length)];
    pesan.innerHTML = randomUcapan;
    pesan.style.opacity = 1;
});
