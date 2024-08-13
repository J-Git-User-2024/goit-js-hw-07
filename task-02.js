const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримання елемента ul за id
const ulElement = document.querySelector('#ingredients');

// Масив для зберігання створених елементів li
const liElements = [];

// Проходження по кожному інгредієнту в масиві
ingredients.forEach(ingredient => {
  // Створення нового елемента li
  const li = document.createElement('li');
  
  // Додавання тексту інгредієнта
  li.textContent = ingredient;
  
  // Додавання класу item
  li.classList.add('item');
  
  // Додавання li до масиву liElements
  liElements.push(li);
});

// Додавання всіх li елементів до ul за одну операцію
ulElement.append(...liElements);