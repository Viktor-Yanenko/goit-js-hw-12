import axios from 'axios';

export const pageLimit = 15;
export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get('https://pixabay.com/api/?', {
    params: {
      key: '49618658-bd62d28bb73c3efea12ea07c4',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page,
    },
  });
  return response;
}
