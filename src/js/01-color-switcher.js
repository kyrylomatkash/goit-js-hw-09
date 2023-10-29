// Загальна функція для генерування кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };
  // Змінні кнопок старту та стопу
  const startSwitcherButton = document.querySelector('[data-start]');
  const stopSwitcherButton = document.querySelector('[data-stop]');
//   Змінна відображення номера кольору
  const colorDisplay = document.querySelector('[color-display]');
// Змінна інтервалу
let randomTimer = null;
// Функція логіки кнопки старт
  function clickStart() {
    randomTimer = setInterval(() => {
      let randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
      colorDisplay.textContent = randomColor;
    }, 1000);
    // Відключення кнопки
    startSwitcherButton.setAttribute('disabled', '');
  };
  startSwitcherButton.addEventListener('click', clickStart);
  // Функція логіки кнопки стоп
  function clickStop() {
    clearInterval(randomTimer);
    startSwitcherButton.removeAttribute('disabled');
  };
  stopSwitcherButton.addEventListener('click', clickStop);
