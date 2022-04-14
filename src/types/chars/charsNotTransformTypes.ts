export type TCharUrlNotTransform = {
  url: string;
  type: string;
};

export type TCharComicsNotTransform = {
  items: {
    name: string;
    resourceURI: string;
  }[];
};
export type TCharNotTransform = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: TCharComicsNotTransform;
  urls: TCharUrlNotTransform[];
};
