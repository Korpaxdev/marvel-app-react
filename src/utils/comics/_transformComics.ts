import { nanoid } from '@reduxjs/toolkit';
import { TComicsListNotTransform } from 'types/comics/comicsNotTransformTypes';
import { TComic } from 'types/comics/comicsTranformTypes';
import { setDescription, setLanguage, setPageCount, setPrice } from './_transofrmComicsFunctions';

const _transformComics = (comics: TComicsListNotTransform): TComic => {
  const { title, id, textObjects, prices, pageCount, thumbnail, description } =
    comics;
  return {
    title,
    id: nanoid(),
    inApiId: id,
    description: setDescription(description),
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    price: setPrice(prices),
    pageCount: setPageCount(pageCount),
    language: setLanguage(textObjects),
  };
};

export default _transformComics;
