const images = document.querySelectorAll('.carousel-images img');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 3000;

function updateCarousel(index: number): any {
  const offset = -index * 100;
  const carouselImages = document.querySelector(
    '.carousel-images'
  ) as HTMLElement;
  carouselImages.style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function nextImage(): any {
  currentIndex = currentIndex + 1 === totalImages ? 0 : currentIndex + 1;
  updateCarousel(currentIndex);
}

function prevImage(): any {
  currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
}

function goToImage(index: number): any {
  currentIndex = index;
  updateCarousel(currentIndex);
}

document.getElementById('next')?.addEventListener('click', nextImage);
document.getElementById('prev')?.addEventListener('click', prevImage);
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => goToImage(i));
});

setInterval(nextImage, intervalTime);
