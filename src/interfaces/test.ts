export default class test {
  public id?: number;
  public name?: string;
  public description?: string;
  public thumbnail?: Thumbnail;
  public comics?: Comics;
  public urls?: Urls[];
}

export class Thumbnail {
  public path?: string;
  public extension?: string;
}

export class Comics {
  public available?: number;
  public collectionURI?: string;
  public items?: Items[];
  public returned?: number;
}

export class Items {
  public resourceURI?: string;
  public name?: string;
}

export class Urls {
  public type?: string;
  public url?: string;
}
