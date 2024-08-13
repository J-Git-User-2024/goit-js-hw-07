// Отримання елемента ul з id 'categories'
const categories = document.querySelector('#categories');

// Отримання всіх елементів li з класом 'item'
const items = categories.querySelectorAll('.item');

// Виведення кількості категорій
console.log(`Number of categories: ${items.length}`);

// Проходження по кожному елементу li
items.forEach(item => {
  // Отримання заголовка h2
  const title = item.querySelector('h2').textContent;
  
  // Отримання всіх елементів li всередині ul в категорії
  const elements = item.querySelectorAll('ul > li');
  
  // Виведення заголовка і кількості елементів
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});

