const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Отримання елемента ul з класом gallery
const gallery = document.querySelector('.gallery');

// Створення HTML рядків для кожного зображення
const galleryMarkup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" /></li>`)
  .join('');

// Вставка всіх елементів в DOM за одну операцію
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


