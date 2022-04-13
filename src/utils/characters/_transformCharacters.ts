import { TChar } from 'types/chars/charsTransformTypes';
import { TCharNotTransform } from 'types/chars/charsNotTransformTypes';
import {
  setComics,
  setDescription,
  setLinks,
} from './_transformCharactersFunctions';

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
