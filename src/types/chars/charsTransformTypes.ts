export type TCharUrl = {
  label: string;
  url: string;
  type: TCharUrlType;
};
export type TCharUrlType = 'primary' | 'secondary'

export type TChar = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  links: TCharUrl[];
  comics: {
    name: string;
    id?: string;
  }[];
};
