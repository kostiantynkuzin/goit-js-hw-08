import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallary__item">
        <a class= "gallery__link" href="${original}">
          <img 
            class= "gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"
          />
        </a>
    </div>
  `;
    })
    .join('');
}
const containerGallery = document.querySelector('.gallery');

const cardsMarkup = createGalleryCards(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);

// containerGallery.addEventListener(clickOnGalleryCards);

// function clickOnGalleryCards(evt) {
//   // console.log(evt.target);
//   // if (!evt.target.classList.contains("gallery__image")) {
//   //   return;
//   // }
//   evt.preventDefault();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
lightbox.show();
// }
console.log(lightbox.show());
