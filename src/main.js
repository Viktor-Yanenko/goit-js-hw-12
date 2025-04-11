import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, pageLimit } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

const loadMoreBtn = document.querySelector('#load-btn');
loadMoreBtn.addEventListener('click', onLoadMore);

let page = 1;
let queryValue;
let totalPages;

hideLoader();

async function handleSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'];
  queryValue = query.value.trim();

  if (!queryValue) {
    iziToast.warning({
      messageColor: '#fafafb',
      titleColor: '#fafafb',
      backgroundColor: '#ffa000',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const response = await getImagesByQuery(queryValue);
    if (response.data.total === 0) {
      iziToast.error({
        messageColor: '#fafafb',
        titleColor: '#fafafb',
        backgroundColor: '#ef4040',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    createGallery(response.data.hits);
    totalPages = Math.ceil(response.data.totalHits / pageLimit);
    page < totalPages ? showLoadMoreButton() : hideLoadMoreButton();
  } catch (error) {
    iziToast.error({
      messageColor: '#fafafb',
      titleColor: '#fafafb',
      backgroundColor: '#ef4040',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
  form.reset();
}

async function onLoadMore() {
  page++;
  // loadMoreBtn.disabled = true;
  hideLoadMoreButton();
  showLoader();
  try {
    const response = await getImagesByQuery(queryValue, page);
    createGallery(response.data.hits);
    // loadMoreBtn.disabled = false;
    showLoadMoreButton();

    const card = document.querySelector('.gallery-item');
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        left: 0,
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      messageColor: '#fafafb',
      titleColor: '#fafafb',
      backgroundColor: '#ef4040',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
