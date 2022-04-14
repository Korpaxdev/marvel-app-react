import {
  TCharComicsNotTransform,
  TCharUrlNotTransform,
} from 'types/chars/charsNotTransformTypes';
import { TCharUrl, TCharUrlType } from 'types/chars/charsTransformTypes';
import { CHAR_NO_COMICS, NO_DESCRIPTION } from '../const';

const setDescription = (description: string) => {
  if (description.length) return description;
  return NO_DESCRIPTION.CHAR;
};

const setLinks = (urls: TCharUrlNotTransform[]): TCharUrl[] => {
  const links = [];
  for (let i = 0; i < 2; i++) {
    const link = {
      label: urls[i].type,
      url: urls[i].url,
      type: i === 0 ? 'primary' : 'secondary' as TCharUrlType,
    };
    links.push(link);
  }
  return links;
};

const setComics = ({ items }: TCharComicsNotTransform) => {
  if (!items.length) return [{name:CHAR_NO_COMICS}];
  return items.map(({ name, resourceURI }) => {
    const id = resourceURI.split('/').pop();
    return {
      name,
      id,
    };
  });
};
export { setDescription, setLinks, setComics };
