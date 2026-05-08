import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loaderBtn = document.querySelector(".load-btn");

export const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsSelector: 'img',
  captionDelay: 450,
  overlayOpacity: 0.5,
});

export function createGallery(images) {
  const markup = images.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-link" data-id="${id}">
     <a class="gallery-image" href="${largeImageURL}">
        <img class="gallery-img-item" src="${webformatURL}" alt="${tags}" />
     </a>

     <div class="gallery-info"">
      <div class="gallery-info-item">
        <h2 class="title-item">Likes</h2>
        <p class="qty-item">${likes}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Views</h2>
        <p class="qty-item">${views}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Comments</h2>
        <p class="qty-item">${comments}</p>
      </div>

      <div class="gallery-info-item">
        <h2 class="title-item">Downloads</h2>
        <p class="qty-item">${downloads}</p>
      </div>
     </div>
  </li>`)
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  galleryLightbox.refresh();

}



export function clearGallery(){
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("hidden");
}

export function hideLoader() {
  loader.classList.add("hidden");
}

export function showLoadMoreButton() {
  loaderBtn.classList.remove("hidden-btn");
}

export function hideLoadMoreButton() {
  loaderBtn.classList.add("hidden-btn");
}



