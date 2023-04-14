import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refListEl = document.querySelector('.gallery');

const imgMarkUp = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item"> 
      <a class="gallery_link" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image">
      </a>
    </li>`).join('');

refListEl.insertAdjacentHTML('beforeend', imgMarkUp);

new SimpleLightbox('.gallery a', {
            captions: true,
            captionSelector: 'img',
            captionsType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,})

console.log(galleryItems);