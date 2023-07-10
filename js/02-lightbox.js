import { galleryItems } from './gallery-items.js';
// Change code below this line
const colection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href='${original}'>
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');

colection.innerHTML = listImg

const lightbox = new SimpleLightbox(".gallery a", {captionsData: `alt`, captionDelay: 250,})

 