// const inputEl = document.querySelector('input');
// const buttonEl = document.querySelector('button');
// const timerEl = document.querySelector('span');

// //Вспомогательная функция для заполнения одиночных цифр начальным нулем
// const padWithZero = (num) => {
//   return num < 10 ? `0${num}` : num;
// };

// // Функция для форматирования секунд в формат чч:мм:сс
// const formatTime = (seconds) => {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secs = seconds % 60;

//   return `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(secs)}`;
// };

// // Функция для анимации таймера
// const createTimerAnimator = () => {
//   let intervalId;

//   return (seconds) => {
//     // Очистить предыдущий интервал, если таковой имеется
//     clearInterval(intervalId);

//     // Установите начальное время на элементе таймера
//     timerEl.textContent = formatTime(seconds);

//     // Интервал запуска для обновления таймера каждые 1 секунду
//     intervalId = setInterval(() => {
//       seconds--;
//       if (seconds >= 0) {
//         timerEl.textContent = formatTime(seconds);
//       } else {
//         // Очистите интервал и сбросьте элемент таймера, когда таймер достигнет 0
//         clearInterval(intervalId);
//         timerEl.textContent = '00:00:00';
//       }
//     }, 1000);
//   };
// };

// const animateTimer = createTimerAnimator();

// inputEl.addEventListener('input', () => {
//   //Удалить нечисловые символы из входного значения
//   inputEl.value = inputEl.value.replace(/\D/g, '');
// });

// buttonEl.addEventListener('click', () => {
//   const seconds = Number(inputEl.value);
//   animateTimer(seconds);
//   inputEl.value = '';
// });

// // const inputEl = document.querySelector('input');
// // const buttonEl = document.querySelector('button');
// // const timerEl = document.querySelector('span');

// // // Напишите реализацию createTimerAnimator
// // // который будет анимировать timerEl
// // const createTimerAnimator = () => {
// //   return (seconds) => {};
// // };

// // const animateTimer = createTimerAnimator();

// // inputEl.addEventListener('input', () => {
// //   // Очистите input так, чтобы в значении
// //   // оставались только числа
// // });

// // buttonEl.addEventListener('click', () => {
// //   const seconds = Number(inputEl.value);

// //   animateTimer(seconds);

// //   inputEl.value = '';
// // });
