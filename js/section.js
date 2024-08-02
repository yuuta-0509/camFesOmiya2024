let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    nextPage();
  } else {
    previousPage();
  }
});

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    scrollPage();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    scrollPage();
  }
}

function scrollPage() {
  const container = document.querySelector('.container');
  container.style.transform = `translateY(-${currentPage * 100}vh)`;
}
