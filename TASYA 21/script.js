let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("background-music"); // Ambil elemen audio

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    // Memulai musik hanya saat pengguna pertama kali klik "Next"
    if (index === 1 && music.paused) {
        music.play();
    }
}

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

// Menampilkan slide pertama
showSlide(currentSlide);
