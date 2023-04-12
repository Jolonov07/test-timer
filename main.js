const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalId; // Идентификатор интервала

// Функция для форматирования времени в формате hh:mm:ss
const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Функция для анимации таймера
const animateTimer = (seconds) => {
  clearInterval(intervalId); // Очищаем предыдущий интервал, если есть
  let time = seconds;

  // Функция, вызываемая каждую секунду
  const updateTimer = () => {
    time--;
    if (time >= 0) {
      timerEl.textContent = formatTime(time);
    } else {
      clearInterval(intervalId); // Очищаем интервал при достижении 0
    }
  };

  // Запускаем интервал
  timerEl.textContent = formatTime(time);
  intervalId = setInterval(updateTimer, 1000);
};

inputEl.addEventListener('input', () => {
  // Очищаем все символы, кроме цифр, из значения input
  inputEl.value = inputEl.value.replace(/\D/i, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});