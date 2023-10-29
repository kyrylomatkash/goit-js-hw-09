// Імпорт бібліотеки сповіщень
import Notiflix from 'notiflix';
const form = document.querySelector('.form');
// Обробка полів форми
form.addEventListener('submit', event => {
  event.preventDefault();
// Основні змінні
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
// Логіка обчислення
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `Успішно ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `Відхилено ${position} in ${delay}ms`
        );
      });
  }
});
// Створення промісу
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const resolvePromise = Math.random() > 0.3;
    setTimeout(() => {
      if (resolvePromise) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
