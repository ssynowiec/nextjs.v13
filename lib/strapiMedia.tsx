import { getStrapiURL } from './fetchStrapi';

export const getStrapiMedia = (media: {
  data: { attributes: { url: string } };
}) => {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
};
