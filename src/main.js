import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import { limit } from './js/pixabay-api.js';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader, showLoadMoreButton,
} from './js/render-functions.js';


const container = document.querySelector('.form');
const loadMoreBtn = document.querySelector(".load-btn");

container.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

let page = 1;
let searchQuery = "";
let reachedLimit = false;

async function onSearch(event) {
  event.preventDefault();

  const input = event.currentTarget.elements[0];
  searchQuery = input.value.trim();
  page = 1;


  if (!searchQuery) {
    showErrorMessage('Please enter a search term!', 'yellow');
    return;
  }

  hideLoadMoreButton();
  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    reachedLimit = page * limit >= data.totalHits;

    hideLoadMoreButton();

    if(reachedLimit) {
      hideLoadMoreButton();
      showErrorMessage("We're sorry, but you've reached the end of search results", "yellow");
    } else {
      showLoadMoreButton();
    }

    if (data.hits.length > 0) {
      createGallery(data.hits);
    } else {
      showErrorMessage('Something bad happened, try again', 'red');
    }


  } catch (error) {
    showErrorMessage('Sorry, there are no images matching your search query. Please try again!', 'red');

  } finally {
    hideLoader();
    input.value= "";
  }
}

async function onLoadMore(event) {
  event.preventDefault();
  page += 1;

  loadMoreBtn.disabled = true;
  hideLoadMoreButton();
  showLoader();

  try {
    if (reachedLimit) {
      return;
    }
    const data = await getImagesByQuery(searchQuery, page);
    reachedLimit = page * limit >= data.totalHits;

    if(reachedLimit) {
      showErrorMessage("We're sorry, but you've reached the end of search results", "yellow");
    } else {
      showLoadMoreButton();
    }

    createGallery(data.hits);

    const card = document.querySelector(".gallery-link");
    const cardHeight = card.getBoundingClientRect().height * 2;

    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: "smooth"
    })
  } catch (error) {
    showErrorMessage("Something bad happened, try again", "red");
  } finally {
    hideLoader();
    loadMoreBtn.disabled = false;
  }
}

function showErrorMessage(errorMessage, color) {
  return iziToast.show({
    message: errorMessage,
    color: color,
    position: "topRight",
  });
}