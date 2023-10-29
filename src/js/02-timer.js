// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Імпорт бібліотеки сповіщень
import Notiflix from 'notiflix';
// Опції бібліотеки Флетпікр
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    handleDateSelection(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);
// Змінні усіх полів та кнопок
const startButton = document.querySelector("button[data-start]");
const displayDays = document.querySelector("span[data-days]");
const displayHours = document.querySelector("span[data-hours]");
const displayMinutes = document.querySelector("span[data-minutes]");
const displaySeconds = document.querySelector("span[data-seconds]");
startButton.addEventListener('click', startCountdown);
// Змінні часу
let timerTime = null;
const currentDate = new Date();
// Логіка для вибору дати
function handleDateSelection(selectedDate) {
  timerTime = selectedDate.getTime() - currentDate;
  if (timerTime > 0) {
    startButton.removeAttribute("disabled");
    // Сповіщення успіху
    Notiflix.Notify.success('Дата вибрана правильно');
  } else {
    // Сповіщення помилки
    Notiflix.Notify.failure('Виберіть час у майбутньому');
  }
}
// Логіка старту таймеру
function startCountdown() {
  let countdownInterval = setInterval(() => {
    timerTime -= 1000;
    if (timerTime > 0) {
      let time = convertMs(timerTime);
      updateTimerDisplay(time);
      startButton.setAttribute("disabled", '');
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}
// Функція оновлення таймеру
function updateTimerDisplay(time) {
  displayDays.textContent = addLeadingZero(time.days);
  displayHours.textContent = addLeadingZero(time.hours);
  displayMinutes.textContent = addLeadingZero(time.minutes);
  displaySeconds.textContent = addLeadingZero(time.seconds);
}
// Додавання нуля,якщо число містить меньше двух символів
const addLeadingZero = (value) => {
  return value.toString().padStart(2, '0');
};
// Функція конвертації міллісекунд
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}