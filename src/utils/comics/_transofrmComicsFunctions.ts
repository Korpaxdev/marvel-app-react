import { TComicsLanguageNotTransform, TComicsPricesNotTransform } from '../../types/comics/comicsNotTransformTypes';
import { NO_DESCRIPTION, COMIC_NO_PAGE_COUNT, NOT_FOR_SELL } from '../const';

const setPrice = (prices: TComicsPricesNotTransform) => {
  const price = prices[0]?.price;
  if (price === 0 || !price) return NOT_FOR_SELL;
  return price + '$';
};
const setLanguage = (textObject: TComicsLanguageNotTransform):string => {
  return textObject[0]?.language ? textObject[0].language : 'en-us'
};
const setDescription = (description: null | string):string => {
  return description ? description : NO_DESCRIPTION.COMIC
}
const setPageCount = (pageCount: number):string => {
  return !pageCount ? COMIC_NO_PAGE_COUNT : `${pageCount} pages`
}

export {setPrice, setLanguage, setDescription, setPageCount}
