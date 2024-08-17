const targetElement = document.querySelector('.container-covers');

function handleScroll() {
  const windowHeight = window.innerHeight;
  const elementRect = targetElement.getBoundingClientRect();
  const elementTop = elementRect.top;

  if (elementTop < windowHeight * 0.5) {
    // Элемент у середині viewport
    targetElement.classList.add('covers-project'); // класс з анимацією
  }
}

window.addEventListener('scroll', handleScroll);
