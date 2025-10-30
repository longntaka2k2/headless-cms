export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface StrapiMediaModel {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}
export interface StrapiRelationArrayModel<T> {
  data: {
    attributes: T | any;
    id: number;
  }[];
}

export interface StrapiRelationModel<T> {
  data: {
    attributes?: T;
    id: number;
  };
}
