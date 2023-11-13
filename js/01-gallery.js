import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

//    Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//   Реалізація делегування на ul.gallery і отримання url великого зображення.
//   Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//  Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//  Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original} ">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description} width="300"
    />
    </a>
    </li>
    `
    )
    .join("");
}

list.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600" >
    `);
  instance.show();
}
