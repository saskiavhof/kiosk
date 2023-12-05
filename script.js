document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  const baristaElement = document.querySelector('.barista');
  const oldenburgElement = document.querySelector('.oldenburg');
  const oliviaElement = document.querySelector('.olivia');
  const nithinElement = document.querySelector('.nithin');
  const mayElement = document.querySelector('.may');
  const discordElement = document.querySelector('.discord');
  const laptopElement = document.querySelector('.laptop');

  if (currentPath.includes('scene1.html')) {
    if (baristaElement) {
      baristaElement.classList.add('pulse-animation');
      baristaElement.addEventListener('click', function () {
        window.location.href = 'joe1.html';
      });
    }
  } else if (currentPath.includes('scene2.html')) {
    if (oldenburgElement) {
      oldenburgElement.classList.add('pulse-animation');
      oldenburgElement.addEventListener('click', function () {
        window.location.href = 'oldenburg.html';
      });
    }

    if (laptopElement) {
      laptopElement.classList.add('pulse-animation');
      laptopElement.addEventListener('click', function () {
        window.location.href = 'laptop.html';
      });
    }

  } else if (currentPath.includes('scene3.html')) {
    if (baristaElement) {
      baristaElement.classList.add('pulse-animation');
      baristaElement.addEventListener('click', function () {
        window.location.href = 'joe2.html';
      });
    }

    if (oliviaElement) {
      oliviaElement.classList.add('pulse-animation');
      oliviaElement.addEventListener('click', function () {
        window.location.href = 'olivia.html';
      });
    }

    if (mayElement) {
      mayElement.classList.add('pulse-animation');
      mayElement.addEventListener('click', function () {
        window.location.href = 'may.html';
      });
    }

    if (nithinElement) {
      nithinElement.classList.add('pulse-animation');
      nithinElement.addEventListener('click', function () {
        window.location.href = 'nithin.html';
      });
    }
  }

  else if (currentPath.includes('scene4.html')) {
    if (discordElement) {
      discordElement.classList.add('pulse-animation');
      discordElement.addEventListener('click', function () {
        window.location.href = 'discord.html';
      });
    }
  }

  else if (currentPath.includes('ending.html')) {
    if (baristaElement) {
      baristaElement.classList.add('pulse-animation');
      baristaElement.addEventListener('click', function () {
        window.location.href = 'ending-slide.html';
      });
    }
  }
  // Add more conditions for additional classes and HTML pages as needed
});



document.addEventListener('DOMContentLoaded', function () {
  const restart = document.querySelector('.restart');

  restart.addEventListener('click', function (event) {
    event.preventDefault();
    const isRestartConfirmed = window.confirm("Are you sure you want to restart from the beginning?");
    if (isRestartConfirmed) {
      window.location.href = "index.html";
    } else {
    }
  });
});




