import {
  iChar,
  iCharNotTransform,
  iUrl,
  iUrlNotTransform,
} from '../types/chars/iChars';

const setDescription = (description: string) => {
  if (description.length) return description;
  return 'Description not found';
};
const setLinks = (urls: iUrlNotTransform[]): iUrl[] => {
  const links = [];
  for (let i = 0; i < 2; i++) {
    const link = {
      label: urls[i].type,
      url: urls[i].url,
      type: i === 0 ? 'primary' : 'secondary',
    };
    links.push(link);
  }
  return links;
};

export default function _transformCharacters(data: iCharNotTransform): iChar {
  const { id, description, name, thumbnail, urls, comics } = data;
  return {
    id,
    description: setDescription(description),
    name,
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    links: setLinks(urls),
    comics: comics.items.map(({ name }) => name),
  };
}
