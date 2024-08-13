function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Функція для створення і додавання <div> в #boxes
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  const boxElements = []; // Массив для зберігання створених елементів

  // Цикл для створення кожного <div>
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // Визначення розміру елемента
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); // Випадковий колір фону
    box.style.margin = '5px'; // Додатковий margin для візуального відділення
    boxElements.push(box);
  }

  // Вставка всіх створених елементів в DOM за один раз
  boxesContainer.append(...boxElements);
}

// Функція для очищення всіх <div> з #boxes
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; // Очищення вмісту контейнера
}

// Обробка натискань кнопок
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const amount = parseInt(input.value, 10); // Отримання кількості елементів
  if (amount > 0) {
    createBoxes(amount); // Створення <div> на основі введеної кількості
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
