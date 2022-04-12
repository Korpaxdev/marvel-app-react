import { TChar, TCharUrl } from '../types/chars/charsTransformTypes';
import {
  TCharComicsNotTransform,
  TCharNotTransform,
  TCharUrlNotTransform,
} from '../types/chars/charsNotTransformTypes';

const setDescription = (description: string) => {
  if (description.length) return description;
  return 'Description not found';
};

const setLinks = (urls: TCharUrlNotTransform[]): TCharUrl[] => {
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

const setComics = ({ items }: TCharComicsNotTransform) => {
  if (!items.length) return [`This character doesn't have comics`];
  return items.map(({ name }) => name);
};

export default function _transformCharacters(data: TCharNotTransform): TChar {
  const { id, description, name, thumbnail, urls, comics } = data;
  return {
    id,
    description: setDescription(description),
    name,
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    links: setLinks(urls),
    comics: setComics(comics),
  };
}
