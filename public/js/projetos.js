const track = document.querySelector(".carousel");
const slides = document.querySelectorAll(".cards");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (track && nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }

    updateCarousel();
  });
}

document.querySelectorAll(".btnProjeto").forEach((botao) => {
  botao.addEventListener("click", () => {
    const url = botao.dataset.url;

    window.open(url, "_blank");
  });
});
