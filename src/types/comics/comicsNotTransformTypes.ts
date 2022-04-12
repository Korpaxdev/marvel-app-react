export type TComicsListNotTransform = {
  id: number;
  title: string;
  description: string | null;
  pageCount: number;
  prices: TComicsPricesNotTransform;
  thumbnail: TComicsThumbnailNotTransform;
  textObjects: TComicsLanguageNotTransform;
};

type TComicsThumbnailNotTransform = {
  path: string;
  extension: string;
};
export type TComicsLanguageNotTransform =
  | {
      language: string;
    }[]
  | [];
export type TComicsPricesNotTransform = {
  price: number;
}[];
