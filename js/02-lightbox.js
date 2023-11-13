import { galleryItems } from "./gallery-items.js";
// Change code below this line
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
    alt="${description}"/>
    </a>
    </li>
    `
    )
    .join("");
}
console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery", {
  captionData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});