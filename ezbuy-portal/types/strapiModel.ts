export interface BaseProp {
  createdAt: string;
  updatedAt: string;
}
export interface RelationalData<T> {
  id: number;
  attributes: T;
}

export interface StrapiDataCollection<T> {
  data: RelationalData<T>[];
}
export interface StrapiData<T> {
  data: RelationalData<T>;
}
export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface StrapiMediaAttributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}
