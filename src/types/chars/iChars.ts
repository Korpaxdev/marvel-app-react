export interface iUrlNotTransform {
  url: string;
  type: string;
}

export interface iComicsNotTransform {
  items: [
    {
      name: string;
    }
  ];
}

export interface iCharNotTransform {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: iComicsNotTransform;
  urls: iUrlNotTransform[];
}

export interface iUrl {
  label: string;
  url: string;
  type: string;
}

export interface iChar {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  links: iUrl[];
  comics: string[];
}

export interface iCharInfo {
  selectedChar: iChar | null;
  isOpen: boolean;
}
