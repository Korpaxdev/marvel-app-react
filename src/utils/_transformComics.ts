import { nanoid } from '@reduxjs/toolkit';
import {
  TComicsLanguageNotTransform,
  TComicsListNotTransform,
  TComicsPricesNotTransform,
} from '../types/comics/comicsNotTransformTypes';
import { NOT_FOR_SELL } from './const';
import { TComicsList } from '../types/comics/comicsTranformTypes';

const setPrice = (prices: TComicsPricesNotTransform) => {
  const price = prices[0]?.price;
  if (price === 0 || !price) return NOT_FOR_SELL;
  return price + '$';
};
const setLanguage = (textObject: TComicsLanguageNotTransform) => {
  const language = textObject[0]?.language;
  if (language) return language
  return 'en-us'

};

const _transformComics = (comics: TComicsListNotTransform):TComicsList => {
  const { title, textObjects, prices, pageCount, thumbnail, description } =
    comics;
  return {
    title,
    id: nanoid(),
    description,
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    price: setPrice(prices),
    pageCount,
    language: setLanguage(textObjects)
  };
};

export default _transformComics;
