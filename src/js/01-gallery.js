// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}      
      alt=${description}
    />
  </a>`
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarup);
console.log(document.querySelector(".gallery__image").alt)

let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionPosition:"bottom", captionDelay:250});