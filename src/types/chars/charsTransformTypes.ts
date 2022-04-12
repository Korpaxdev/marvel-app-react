
export type TCharUrl = {
  label: string;
  url: string;
  type: string;
}

export type TChar = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  links: TCharUrl[];
  comics: string[];
}
