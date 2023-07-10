import { galleryItems } from './gallery-items.js';
// Change code below this line

const colection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) => 
`<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
        <img
            class='gallery__image'
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        >
    </a>
</li>`).join('')

colection.insertAdjacentHTML('afterbegin', listImg)
// console.log(galleryItems);

colection.onClick = (event) => {
    event.preventDefault()
    if(!event.target.classList.contains("gallery__image")){
        return
    };
    
    const instance = basicLightbox.create(`<img width='1400' height='900' src='${event.target.dataset.source}'>`).show();

    window.addEventListener('keydown', (event) => {
       if  (event.code === 'Escape') {
        instance.close()
       }
    });
}