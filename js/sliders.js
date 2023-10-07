const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderDots = document.querySelector('.slider-dots');

let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots(index);
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slider.children.length - 1;
  }
  showSlide(currentIndex);
}

function nextSlide() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function createDots() {
  for (let i = 0; i < slider.children.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    dot.addEventListener('click', () => {
      showSlide(i);
      currentIndex = i;
    });
    sliderDots.appendChild(dot);
  }
}

function updateDots(index) {
  const dots = sliderDots.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

createDots();

// Initial display
showSlide(currentIndex);
