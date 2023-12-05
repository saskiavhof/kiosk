document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  const baristaElement = document.querySelector('.barista');
  const oldenburgElement = document.querySelector('.oldenburg');

  if (currentPath.includes('scene1.html')) {
    // For scene1.html
    if (baristaElement) {
      baristaElement.classList.add('pulse-animation');
      baristaElement.addEventListener('click', function () {
        window.location.href = 'slide1.html';
      });
    }
  } else if (currentPath.includes('scene2.html')) {
    // For scene2.html
    if (oldenburgElement) {
      oldenburgElement.classList.add('pulse-animation');
      oldenburgElement.addEventListener('click', function () {
        window.location.href = 'slide2.html';
      });
    }
  }
  // Add more conditions for additional classes and HTML pages as needed
});